// Generates a static HTML shell per project (and one for /work/) so link
// previews (Slack/LinkedIn/X/Discord) and crawlers get real, route-specific
// <title>/description/og:image without executing JS. Each shell is a byte
// copy of index.html's <head> with the meta block swapped for that route's
// values; the <base href="/"> in index.html means every relative asset
// path in the shell still resolves correctly even though the file lives
// in a subdirectory (project/<id>/index.html). Run after build.js.
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const SITE = "https://bobellson.com";
const root = __dirname;

// dist/data.js sets window.PROJECTS — evaluate it in a sandboxed `window`
// to get the project list without duplicating it here.
function loadProjects() {
  const code = fs.readFileSync(path.join(root, "dist/data.js"), "utf8");
  const sandbox = { window: {}, console };
  vm.createContext(sandbox);
  vm.runInContext(code, sandbox);
  return sandbox.window.PROJECTS;
}

function buildHead(indexHtml, { title, description, canonicalUrl, ogImage }) {
  let html = indexHtml;
  html = html.replace(/<title>.*?<\/title>/s, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(
    /<meta name="description" content=".*?" \/>/,
    `<meta name="description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<link rel="canonical" href=".*?" \/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta property="og:title" content=".*?" \/>/,
    `<meta property="og:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta property="og:description" content=".*?" \/>/,
    `<meta property="og:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta property="og:url" content=".*?" \/>/,
    `<meta property="og:url" content="${canonicalUrl}" />`
  );
  html = html.replace(
    /<meta property="og:image" content=".*?" \/>/,
    `<meta property="og:image" content="${ogImage}" />`
  );
  html = html.replace(
    /<meta name="twitter:title" content=".*?" \/>/,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`
  );
  html = html.replace(
    /<meta name="twitter:description" content=".*?" \/>/,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`
  );
  html = html.replace(
    /<meta name="twitter:image" content=".*?" \/>/,
    `<meta name="twitter:image" content="${ogImage}" />`
  );
  return html;
}

function escapeHtml(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function writeShell(relDir, html) {
  const dir = path.join(root, relDir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
  console.log(`wrote ${relDir}/index.html`);
}

const indexHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const projects = loadProjects();

for (const p of projects) {
  const title = `${p.title} — Bob Ellson`;
  const description = p.summary || p.subtitle || `${p.title} — a case study by Bob Ellson.`;
  const canonicalUrl = `${SITE}/project/${p.id}/`;
  const ogImage = p.coverImg ? `${SITE}/${p.coverImg}` : `${SITE}/hero-image.png`;
  const html = buildHead(indexHtml, { title, description, canonicalUrl, ogImage });
  writeShell(`project/${p.id}`, html);
}

writeShell(
  "work",
  buildHead(indexHtml, {
    title: "All Work — Bob Ellson",
    description: "Every project by Bob Ellson, Product Designer — UI/UX, SaaS dashboards, mobile apps, and branding.",
    canonicalUrl: `${SITE}/work/`,
    ogImage: `${SITE}/hero-image.png`,
  })
);

// Sitemap: home + one entry per generated route.
const urls = [SITE + "/", SITE + "/work/", ...projects.map((p) => `${SITE}/project/${p.id}/`)];
const sitemap =
  `<?xml version="1.0" encoding="UTF-8"?>\n` +
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
  urls
    .map((u) => `  <url>\n    <loc>${u}</loc>\n    <changefreq>monthly</changefreq>\n    <priority>${u === SITE + "/" ? "1.0" : "0.8"}</priority>\n  </url>`)
    .join("\n") +
  `\n</urlset>\n`;
fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap);
console.log("wrote sitemap.xml");
