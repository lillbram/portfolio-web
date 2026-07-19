// Precompiles the .jsx source files to plain ES2019 JS so the browser never
// has to run @babel/standalone at runtime. Uses esbuild's transform() (not
// bundle()) so each file stays a standalone classic script with its
// top-level declarations left in global scope — a drop-in swap for the
// .jsx + Babel setup in index.html, just precompiled.
const esbuild = require("esbuild");
const fs = require("fs");

const files = ["tweaks-panel", "icons", "data", "projectDetail", "app"];

fs.mkdirSync("dist", { recursive: true });

for (const name of files) {
  const src = fs.readFileSync(`${name}.jsx`, "utf8");
  const result = esbuild.transformSync(src, {
    loader: "jsx",
    jsx: "transform",
    target: "es2019",
    minify: true,
    sourcefile: `${name}.jsx`,
  });
  fs.writeFileSync(`dist/${name}.js`, result.code);
  console.log(`built dist/${name}.js`);
}
