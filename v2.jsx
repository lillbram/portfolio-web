/* ═══════════════════════════════════════════════════════════════════
   V2 REDESIGN — "Forest UI"
   Branch-only preview implementing the new IA/visual system from the
   Figma file (lzoR967dLbS80tOMvon4Ma). Reuses PROJECTS/EXPERIENCE from
   data.jsx for all real content. Sections marked "// DRAFT COPY" below
   pull placeholder text straight from the Figma file's generic
   template content (skills grid, tools list) — flagged for review,
   not authored claims about Bob's actual work.
   ═══════════════════════════════════════════════════════════════════ */

/* ── helpers ── */
function categoryFor(project) {
  if (project.chips.includes("Mobile App")) return "Mobile App";
  if (project.chips.includes("SaaS")) return "SaaS";
  return project.chips[0] || "Work";
}
function getSection(project, type) {
  return (project.sections || []).find((s) => s.type === type) || null;
}
function shortTitle(project) {
  return project.title.split(" — ")[0];
}
function leadTag(project) {
  const stats = getSection(project, "stats");
  if (!stats || !stats.items.length) return null;
  const s = stats.items[0];
  return `${s.value} ${s.label}`;
}

/* ── shared: Header ── */
function HeaderNavV2({ route, onNav }) {
  const links = [
    { id: "home", label: "Home", href: "/" },
    { id: "work", label: "Works", href: "/work/" },
    { id: "about", label: "Skills", href: "/about/#skills" },
    { id: "about", label: "Experience", href: "/about/" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ];
  // Over the home hero the bar is transparent with white text; once the hero
  // has scrolled up behind it, it goes back to the solid white bar.
  const barRef = React.useRef(null);
  const [overHero, setOverHero] = React.useState(route === "home");
  React.useEffect(() => {
    if (route !== "home") { setOverHero(false); return; }
    const check = () => {
      const hero = document.querySelector(".v2-hero");
      const barH = barRef.current ? barRef.current.offsetHeight : 0;
      setOverHero(!!hero && hero.getBoundingClientRect().bottom > barH);
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => { window.removeEventListener("scroll", check); window.removeEventListener("resize", check); };
  }, [route]);
  return (
    <div ref={barRef} className={"v2-header" + (route === "home" ? " v2-header--fixed" : "") + (overHero ? " v2-header--over-hero" : "")}>
      <a href="/" className="v2-logo" onClick={(e) => onNav(e, "/")}>Bob Ellson</a>
      <div className="v2-nav-links">
        {links.map((l, i) => (
          <a
            key={i}
            href={l.href}
            className={route === l.id ? "active" : ""}
            onClick={(e) => onNav(e, l.href)}
          >
            {l.label}
          </a>
        ))}
      </div>
      <span className="v2-status-pill">
        <span className="v2-status-dot" />
        Open to work
      </span>
    </div>
  );
}

/* ── shared: Footer ── */
function FooterV2() {
  return (
    <div className="v2-footer" id="contact">
      <div className="v2-footer-main">
        <div style={{ maxWidth: 480, display: "flex", flexDirection: "column", gap: 24 }}>
          <p style={{ fontSize: 47, fontWeight: 800, margin: 0, lineHeight: 1.2 }}>
            Let's build products that users love and businesses need.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "var(--v2-mist)", margin: 0 }}>
            Currently looking for Senior Product Designer roles or consulting opportunities. Based in Jakarta, Indonesia. Open to remote.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, minWidth: 280 }}>
          <p style={{ fontSize: 18, fontWeight: 600, letterSpacing: ".04em", textTransform: "uppercase", color: "var(--v2-mist)", margin: 0 }}>
            Contact &amp; Socials
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a href="mailto:abrahambobellson@gmail.com" style={{ fontSize: 26, fontWeight: 500 }}>
              abrahambobellson@gmail.com
            </a>
            <div style={{ display: "flex", gap: 8 }}>
              {["in", "Be"].map((label, i) => (
                <span key={i} style={{
                  width: 30, height: 30, borderRadius: 4, background: "white", color: "var(--v2-deep-forest)",
                  display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 800
                }}>{label}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="v2-footer-line" />
      <div className="v2-footer-bottom">
        <span>© 2026 Bob Ellson. All rights reserved.</span>
        <span>Designed by Bob Ellson · Built in 2026</span>
      </div>
    </div>
  );
}

/* ── shared: Work card ── */
function WorkCardV2({ project, onOpen }) {
  return (
    <a href={"/project/" + project.id + "/"} className="v2-work-card" onClick={(e) => { e.preventDefault(); onOpen(project); }}>
      {project.coverImg
        ? <img className="v2-work-img" src={project.coverImg} alt={project.title} />
        : <div className="v2-work-img v2-cover-empty"><span>Cover image placeholder</span></div>}
      <span className="v2-cat-pill">{categoryFor(project)}</span>
      <div className="v2-work-row">
        <h3 className="v2-work-title">{shortTitle(project)}</h3>
        {leadTag(project) && <span className="v2-work-tag">{leadTag(project)}</span>}
      </div>
      <p className="v2-work-desc">{project.subtitle}</p>
    </a>
  );
}

/* ── Page: Home ── */
function HomeV2({ projects, onOpen, onNav }) {
  return (
    <>
      <div className="v2-hero">
        <div>
          <div className="v2-hero-kicker">Hi, I'm Bob Ellson</div>
          <h1 className="v2-hero-title">Product Designer<br />UI/UX</h1>
        </div>
        <p className="v2-hero-sub">
          I turn complex user research &amp; requirements into simple and elegant, as high converting revenue channels.
        </p>
        <div className="v2-hero-ctas">
          <a href="/work/" className="v2-btn-primary" onClick={(e) => onNav(e, "/work/")}>View Work</a>
          <a href="/#contact" className="v2-btn-secondary" onClick={(e) => onNav(e, "/#contact")}>Get in Touch</a>
        </div>
      </div>

      <div className="v2-container v2-section">
        <div className="v2-section-head">
          <h2 className="v2-h2">Selected Work</h2>
          <a href="/work/" className="v2-link" onClick={(e) => onNav(e, "/work/")}>View all {projects.length} case studies →</a>
        </div>
        <div className="v2-work-grid">
          {projects.map((p) => <WorkCardV2 key={p.id} project={p} onOpen={onOpen} />)}
        </div>
      </div>

      <div className="v2-container v2-about-preview">
        <img className="v2-about-photo" src={projects[0].coverImg} alt="Bob Ellson" />
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div className="v2-eyebrow">Hello, I'm Bob</div>
          <h2 style={{ fontSize: 47, fontWeight: 800, color: "var(--v2-deep-forest)", margin: 0, lineHeight: 1.25 }}>
            Bridging business objectives with customer desire.
          </h2>
          <p className="v2-body" style={{ margin: 0 }}>
            With over 5 years in the digital product space, I design digital workflows that solve complex logistics and scale operations. I believe perfect design is useless unless it converts.
          </p>
          <a href="/about/" className="v2-btn-primary" style={{ alignSelf: "flex-start" }} onClick={(e) => onNav(e, "/about/")}>More about me &amp; resume →</a>
        </div>
      </div>

      <div className="v2-contact-band">
        <div className="v2-container v2-contact">
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 24 }}>
            <h2 style={{ fontSize: 62, fontWeight: 800, color: "var(--v2-deep-forest)", margin: 0 }}>
              Have a project in mind?
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.6, color: "var(--v2-slate)", margin: 0 }}>
              I'm currently open to new product design opportunities and freelance collaborations.
            </p>
            <a href="mailto:abrahambobellson@gmail.com" className="v2-btn-primary" style={{ alignSelf: "flex-start" }}>
              Get in Touch
            </a>
          </div>
          <img className="v2-contact-photo" src={projects[1].coverImg} alt="Workspace" />
        </div>
      </div>
    </>
  );
}

/* ── Page: Works Index ── */
function WorkIndexV2({ projects, onOpen }) {
  const cats = ["All", ...Array.from(new Set(projects.map(categoryFor)))];
  const [filter, setFilter] = React.useState("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => categoryFor(p) === filter);
  return (
    <div className="v2-container" style={{ paddingBottom: 96 }}>
      <div style={{ padding: "96px 0 0" }}>
        <h1 className="v2-h2" style={{ fontSize: 62 }}>Selected Work</h1>
        <p className="v2-body" style={{ maxWidth: 800, marginTop: 16 }}>
          Case studies that go deep into problem mapping, quick design prototyping, code alignment, and exact outcomes.
        </p>
      </div>
      <div className="v2-filter-row">
        {cats.map((c) => (
          <button key={c} className={"v2-chip" + (filter === c ? " active" : "")} onClick={() => setFilter(c)}>
            {c}
          </button>
        ))}
      </div>
      <div className="v2-work-grid">
        {filtered.map((p) => <WorkCardV2 key={p.id} project={p} onOpen={onOpen} />)}
      </div>
    </div>
  );
}

/* ── Dummy image placeholder — swap for real screenshots/photos later ── */
function DummyImage({ label }) {
  return (
    <div className="v2-cs-gallery" style={{ gridTemplateColumns: "minmax(0,1fr)" }}>
      <div className="v2-dummy-img">
        <span>{label || "Image placeholder — add real image later"}</span>
      </div>
    </div>
  );
}

/* ── Context & Challenge breakdown blocks ── */
function ContextBlock({ block, project }) {
  if (block.type === "problem-list") {
    return (
      <div className="v2-ctx-block">
        <h3 className="v2-ctx-title">{block.title}</h3>
        {block.intro && <p className="v2-ctx-intro">{block.intro}</p>}
        <ul className="v2-ctx-problem-list">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );
  }
  if (block.type === "personas") {
    return (
      <div className="v2-ctx-block">
        <h3 className="v2-ctx-title">{block.title}</h3>
        {block.intro && <p className="v2-ctx-intro">{block.intro}</p>}
        <div className="v2-persona-grid">
          {block.items.map((p, i) => (
            <div key={i} className="v2-persona">
              <div className="v2-persona-head">
                <span className="v2-persona-avatar">{p.name.charAt(0)}</span>
                <div>
                  <div className="v2-persona-name">{p.name}</div>
                  <div className="v2-persona-meta">{p.meta}</div>
                </div>
              </div>
              <p className="v2-persona-bio">{p.bio}</p>
              <div className="v2-persona-label">Problem</div>
              <p className="v2-persona-text">{p.problem}</p>
              <div className="v2-persona-label">Solution</div>
              <p className="v2-persona-text">{p.solution}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  if (block.type === "list") {
    return (
      <div className="v2-ctx-block">
        <h3 className="v2-ctx-title">{block.title}</h3>
        {block.intro && <p className="v2-ctx-intro">{block.intro}</p>}
        <ul className="v2-ctx-menu-list">
          {block.items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    );
  }
  if (block.type === "feature") {
    const galleryClass = "v2-cs-gallery" + (block.bareImgs ? " v2-cs-gallery--bare" : "");
    return (
      <div className="v2-ctx-block">
        <h3 className="v2-ctx-title">{block.title}</h3>
        <p className="v2-ctx-body">{block.body}</p>
        {block.imgs ? (
          <div className={galleryClass} style={{ gridTemplateColumns: block.imgs.map(() => "minmax(0,1fr)").join(" "), ...(block.galleryMaxWidth ? { maxWidth: block.galleryMaxWidth, marginLeft: "auto", marginRight: "auto" } : {}) }}>
            {block.imgs.map((src, i) => <img key={i} src={src} alt={block.title} />)}
          </div>
        ) : block.img ? (
          <div className={galleryClass} style={{ gridTemplateColumns: "minmax(0,1fr)" }}>
            <img src={block.img} alt={block.title} />
          </div>
        ) : block.image && <DummyImage label={block.title + " — image placeholder"} />}
      </div>
    );
  }
  // narrative
  const galleryClass = "v2-cs-gallery" + (block.bareImgs ? " v2-cs-gallery--bare" : "");
  return (
    <div className="v2-ctx-block">
      <h3 className="v2-ctx-title">{block.title}</h3>
      <p className="v2-ctx-body">{block.body}</p>
      {block.demoNote && project.demo && (
        <>
          <p className="v2-ctx-body" style={{ marginTop: 16 }}>{block.demoNote}</p>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="v2-btn-primary" style={{ marginTop: 8, marginBottom: 24, display: "inline-block", ...((block.demoBtnColor || project.demoBtnColor) ? { background: block.demoBtnColor || project.demoBtnColor } : {}), ...(!block.demoBtnColor && project.demoBtnTextColor ? { color: project.demoBtnTextColor } : {}) }}>
            Try the Interactive Prototype ↗
          </a>
        </>
      )}
      {block.video ? (
        <div className={galleryClass} style={{ gridTemplateColumns: "minmax(0,1fr)" }}>
          <video src={block.video} autoPlay loop muted playsInline preload="metadata" />
        </div>
      ) : block.imgRows && block.fitPanel ? (
        <div className="v2-cs-panel">
          {block.imgRows.map((row, r) => (
            <div key={r} className="v2-cs-panel-row">
              {row.map((src, i) => <img key={i} src={src} alt={block.title} />)}
            </div>
          ))}
        </div>
      ) : block.imgRows ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {block.imgRows.map((row, r) => (
            <div key={r} className={galleryClass} style={{ gridTemplateColumns: row.map(() => "minmax(0,1fr)").join(" ") }}>
              {row.map((src, i) => <img key={i} src={src} alt={block.title} />)}
            </div>
          ))}
        </div>
      ) : block.imgs ? (
        <div className={galleryClass} style={{ gridTemplateColumns: block.imgs.map(() => "minmax(0,1fr)").join(" ") }}>
          {block.imgs.map((src, i) => <img key={i} src={src} alt={block.title} />)}
        </div>
      ) : block.img ? (
        <div className={galleryClass} style={{ gridTemplateColumns: "minmax(0,1fr)" }}>
          <img src={block.img} alt={block.title} />
        </div>
      ) : block.image && <DummyImage label={block.title + " — image placeholder"} />}
    </div>
  );
}

/* ── Page: Case Study ── */
function CaseStudyV2({ project, projects, onOpen }) {
  const stats = getSection(project, "stats");
  const text = getSection(project, "text");
  const problems = getSection(project, "problems");
  const impact = getSection(project, "impact");
  const idx = projects.findIndex((p) => p.id === project.id);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];
  const lead = stats ? stats.items[0] : null;

  return (
    <div className="v2-container" style={{ paddingBottom: 48 }}>
      {/* Hero */}
      <div style={{ padding: "96px 0 0" }}>
        <h1 style={{ fontSize: 62, fontWeight: 800, color: "var(--v2-deep-forest)", margin: "0 0 16px" }}>
          {shortTitle(project)}
        </h1>
        {project.platforms && (
          <div className="v2-cs-platforms">
            {project.platforms.map((p, i) => <span key={i} className="v2-cat-pill">{p}</span>)}
          </div>
        )}
        <div className="v2-cs-hero-meta">
          <span>{project.role}</span>
          {(project.team || project.duration) && <span>·</span>}
          {(project.team || project.duration) && <span>{[project.team, project.duration].filter(Boolean).join(" · ")}</span>}
        </div>
        {project.coverImg
          ? <img className="v2-cs-cover" style={{ marginTop: 32, aspectRatio: "16/8" }} src={project.coverImg} alt={project.title} />
          : <div className="v2-cs-cover v2-cover-empty" style={{ marginTop: 32, aspectRatio: "16/8" }}><span>Cover image placeholder</span></div>}
        {lead && (
          <div className="v2-cs-banner">
            <div style={{ fontSize: 42, fontWeight: 800, color: "var(--v2-deep-forest)" }}>{lead.value} {lead.label}</div>
            <div style={{ fontSize: 20, color: "var(--v2-slate)", marginTop: 6 }}>{lead.sub}</div>
          </div>
        )}
      </div>

      {/* Context & Challenge */}
      <div style={{ padding: "64px 0", borderTop: "1px solid var(--v2-border)" }}>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: "var(--v2-deep-forest)", margin: "0 0 32px" }}>
          The Context &amp; Challenge
        </h2>

        <div className="v2-cs-two-col" style={{ padding: 0, borderTop: "none" }}>
          <div>
            <p style={{ fontSize: 18, color: "var(--v2-slate)", lineHeight: 1.6, margin: 0 }}>
              {project.summary}
            </p>
          </div>
          <div>
            {text && <p style={{ fontSize: 19, lineHeight: 1.6, color: "var(--v2-ink)", margin: 0 }}>{text.content}</p>}
            {problems && problems.items[0] && (
              <div className="v2-cs-callout">
                <div style={{ fontSize: 17, fontWeight: 700, color: "var(--v2-deep-forest)", marginBottom: 6 }}>
                  Why this problem matters:
                </div>
                <div style={{ fontSize: 17, color: "var(--v2-slate)", lineHeight: 1.55 }}>
                  {problems.items[0].impact}
                </div>
              </div>
            )}
          </div>
        </div>

        {project.contextBreakdown && (
          <div className="v2-ctx-breakdown" style={{ marginTop: 48 }}>
            {project.contextBreakdown.map((block, i) => <ContextBlock key={i} block={block} project={project} />)}
          </div>
        )}
      </div>

      {/* Outcomes & Business Impact */}
      {impact && (
        <div style={{ padding: "64px 0", borderTop: "1px solid var(--v2-border)" }}>
          <h2 style={{ fontSize: 36, fontWeight: 800, color: "var(--v2-deep-forest)", margin: 0 }}>
            Outcomes &amp; Business Impact
          </h2>
          <div className={"v2-cs-stat-row" + (impact.items.length === 3 ? " v2-cs-stat-row--3" : "")}>
            {impact.items.map((it, i) => (
              <div key={i} className="v2-cs-stat">
                <div className="v2-cs-stat-value">{it.before}{it.unit} → {it.after}{it.unit}</div>
                <div className="v2-cs-stat-label">{it.label} — {it.tag}</div>
                {it.solves && <div className="v2-cs-stat-solves">Solves: {it.solves}</div>}
              </div>
            ))}
          </div>
        </div>
      )}

      {project.demo && (
        <div style={{ padding: "48px 0", borderTop: "1px solid var(--v2-border)", textAlign: "center" }}>
          <h3 style={{ fontSize: 28, fontWeight: 800, color: "var(--v2-deep-forest)", margin: "0 0 20px" }}>
            See it in action
          </h3>
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="v2-btn-primary" style={{ display: "inline-block", ...(project.demoBtnColor ? { background: project.demoBtnColor } : {}), ...(project.demoBtnTextColor ? { color: project.demoBtnTextColor } : {}) }}>
            Try the Interactive Demo ↗
          </a>
        </div>
      )}

      {/* Prev / Next */}
      <div className="v2-cs-prevnext">
        <a href={"/project/" + prev.id + "/"} onClick={(e) => { e.preventDefault(); onOpen(prev); }}>
          <div style={{ fontSize: 17, color: "var(--v2-slate)" }}>← Previous</div>
          <div style={{ fontSize: 21, fontWeight: 700, color: "var(--v2-deep-forest)" }}>{shortTitle(prev)}</div>
        </a>
        <a href={"/project/" + next.id + "/"} style={{ textAlign: "right" }} onClick={(e) => { e.preventDefault(); onOpen(next); }}>
          <div style={{ fontSize: 17, color: "var(--v2-slate)" }}>Next Case Study →</div>
          <div style={{ fontSize: 21, fontWeight: 700, color: "var(--v2-deep-forest)" }}>{shortTitle(next)}</div>
        </a>
      </div>
    </div>
  );
}

/* ── Page: About / Experience ──
   DRAFT COPY: the Skills grid + Tools row below are the Figma file's
   generic template content (it references fictional case studies like
   "Checkout Flow Reimagination" that aren't real projects) — kept here
   as placeholder structure/copy to review the layout, not as claims
   about Bob's actual skills. Swap before shipping. */
const SKILL_ICONS = {
  "User Research": <><circle cx="20" cy="20" r="13" /><path d="M30 30 L42 42" /><circle cx="20" cy="16" r="4" /><path d="M12.5 27 C14 22 26 22 27.5 27" /></>,
  "Prototyping": <><rect x="4" y="8" width="16" height="14" rx="2" /><rect x="28" y="26" width="16" height="14" rx="2" /><path d="M20 15 H32 A4 4 0 0 1 36 19 V25" /><path d="M32 21 L36 25 L40 21" /></>,
  "UI Design": <><rect x="5" y="8" width="38" height="32" rx="3" /><path d="M5 17 H43" /><rect x="10" y="22" width="12" height="13" rx="1.5" /><path d="M27 23 H38" /><path d="M27 29 H38" /><path d="M27 35 H34" /></>,
  "Design Systems": <><rect x="7" y="7" width="14" height="14" rx="2" /><circle cx="34" cy="14" r="7" /><path d="M14 27 L21 41 H7 Z" /><path d="M34 26 L42 34 L34 42 L26 34 Z" /></>,
  "Roadmapping": <><path d="M8 38 C8 28 22 34 22 24 C22 14 40 20 40 10" /><circle cx="8" cy="38" r="3" /><circle cx="22" cy="24" r="2.5" /><circle cx="40" cy="10" r="3" /></>,
  "Prioritization Frameworks": <><path d="M6 12 H30" /><path d="M6 24 H22" /><path d="M6 36 H14" /><path d="M40 10 V38" /><path d="M35 33 L40 38 L45 33" /></>,
  "Metrics & Analytics": <><path d="M7 7 V41 H41" /><rect x="13" y="27" width="6" height="10" /><rect x="23" y="21" width="6" height="16" /><rect x="33" y="13" width="6" height="24" /></>,
  "Stakeholder Alignment": <><circle cx="24" cy="15" r="5" /><path d="M14 38 C14 28 34 28 34 38" /><circle cx="9.5" cy="19" r="3.5" /><path d="M3 36 C3 30 10 28 13 31" /><circle cx="38.5" cy="19" r="3.5" /><path d="M45 36 C45 30 38 28 35 31" /></>,
};
function SkillThumb({ title }) {
  return (
    <div className="v2-skill-thumb">
      <svg viewBox="0 0 48 48" width="48" height="48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        {SKILL_ICONS[title]}
      </svg>
    </div>
  );
}

function AboutV2({ experience }) {
  const designCraft = [
    { title: "User Research", desc: "Conducting remote usability interviews and synthesizing target group feedback into quantitative personas." },
    { title: "Prototyping", desc: "High-fidelity interactive canvases built inside Figma and Framer to simulate actual backend conditions." },
    { title: "UI Design", desc: "Pixel-perfect responsive screen designs matching current web guidelines and accessibility constraints." },
    { title: "Design Systems", desc: "Standardizing multi-tenant atomic elements to scale design handoffs and keep builders unified." },
  ];
  const productStrategy = [
    { title: "Roadmapping", desc: "Scoping long-term operational milestones with project leads and standardizing milestones." },
    { title: "Prioritization Frameworks", desc: "Applying RICE/Kano formulas to separate business critical feature sets from cosmetic noise." },
    { title: "Metrics & Analytics", desc: "Diving deep into funnel telemetry utilizing Mixpanel, Amplitude, and custom tracking nodes." },
    { title: "Stakeholder Alignment", desc: "Directing cross-functional whiteboard strategy workshops to find business compromises." },
  ];
  const tools = ["Figma", "Framer", "Mixpanel", "Amplitude", "Jira", "Notion", "Miro", "Github", "React", "Storybook", "Tailwind", "Claude Code", "Gemini", "Codex"];

  return (
    <div className="v2-container" style={{ paddingBottom: 48 }}>
      <div className="v2-about-preview" style={{ padding: "96px 0 64px" }}>
        <img className="v2-about-photo" src={window.PROJECTS[0].coverImg} alt="Bob Ellson" />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div className="v2-eyebrow">About Me</div>
          <h1 style={{ fontSize: 47, fontWeight: 800, color: "var(--v2-deep-forest)", margin: 0, lineHeight: 1.25 }}>
            Bridging business priorities with elegant interface logic.
          </h1>
          <p className="v2-body" style={{ margin: 0 }}>
            I believe gorgeous design is completely useless unless it shifts real conversion metrics. Over the past 8 years, I've designed dashboard analytics portals, checkout funnels, and design systems for enterprise brands. My methodology targets complex stakeholder desires and distills them into intuitive user loops.
          </p>
          <p className="v2-body" style={{ margin: 0 }}>
            Whether building a remote whiteboard system from scratch or pruning redundant shipping fields down to 3 inputs, I approach constraints with extreme data-driven curiosity.
          </p>
        </div>
      </div>

      <div id="experience" style={{ padding: "48px 0" }}>
        <h2 className="v2-h2">Professional Experience</h2>
        {experience.map((e, i) => (
          <div key={i} className="v2-timeline-item">
            <div style={{ fontSize: 18, color: "var(--v2-slate)" }}>{e.dates}</div>
            <div>
              <div style={{ fontSize: 23, fontWeight: 700, color: "var(--v2-ink)" }}>{e.role}</div>
              <div style={{ fontSize: 20, color: "var(--v2-slate)", marginTop: 4 }}>{e.co}</div>
            </div>
          </div>
        ))}
      </div>

      <div id="skills" style={{ padding: "48px 0" }}>
        <h2 className="v2-h2" style={{ marginBottom: 8 }}>Skills &amp; Expertise</h2>
        <p style={{ fontSize: 14, color: "var(--v2-slate)", marginBottom: 32 }}>
          Draft content from the design file — replace with real skill descriptions before shipping.
        </p>
        <div className="v2-skills-grid">
          <div>
            <div className="v2-skills-col-title">Design &amp; Craft</div>
            {designCraft.map((s, i) => (
              <div key={i} className="v2-skill-item">
                <SkillThumb title={s.title} />
                <div>
                  <div style={{ fontSize: 23, fontWeight: 700 }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: "var(--v2-slate)", marginTop: 6, lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className="v2-skills-col-title">Product &amp; Strategy</div>
            {productStrategy.map((s, i) => (
              <div key={i} className="v2-skill-item">
                <SkillThumb title={s.title} />
                <div>
                  <div style={{ fontSize: 23, fontWeight: 700 }}>{s.title}</div>
                  <div style={{ fontSize: 14, color: "var(--v2-slate)", marginTop: 6, lineHeight: 1.5 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ padding: "48px 0" }}>
        <h2 className="v2-h2" style={{ marginBottom: 24 }}>Core Tools &amp; Technologies</h2>
        <div className="v2-tools-row">
          {tools.map((t) => (
            <span key={t} className="v2-tool-chip">
              <img src={"tool-logos/" + t.toLowerCase().replace(/ /g, "-") + ".svg?v=2"} alt="" width="20" height="20" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Router / App ── */
function parseRouteV2() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const projectMatch = path.match(/^\/project\/([^/]+)$/);
  if (projectMatch) return { page: "project", id: decodeURIComponent(projectMatch[1]) };
  if (path === "/work") return { page: "work" };
  if (path === "/about") return { page: "about" };
  return { page: "home" };
}

function AppV2() {
  const projects = window.PROJECTS;
  const experience = window.EXPERIENCE || [];
  const [route, setRoute] = React.useState(parseRouteV2());

  React.useEffect(() => {
    const sync = () => setRoute(parseRouteV2());
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  React.useEffect(() => { window.scrollTo(0, 0); }, [route]);

  const navigate = (href) => {
    const [path, hash] = href.split("#");
    history.pushState(null, "", href);
    setRoute(parseRouteV2());
    if (hash) {
      requestAnimationFrame(() => {
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      });
    }
  };
  const onNav = (e, href) => {
    if (href.startsWith("/#")) { e.preventDefault(); if (route.page !== "home") navigate("/"); requestAnimationFrame(() => navigate(href)); return; }
    e.preventDefault();
    navigate(href);
  };
  const onOpen = (p) => navigate("/project/" + p.id + "/");

  const activeProject = route.page === "project" ? projects.find((p) => p.id === route.id) : null;

  return (
    <div className="v2">
      <HeaderNavV2 route={route.page === "project" ? "work" : route.page} onNav={onNav} />
      {route.page === "home" && <HomeV2 projects={projects} onOpen={onOpen} onNav={onNav} />}
      {route.page === "work" && <WorkIndexV2 projects={projects} onOpen={onOpen} />}
      {route.page === "about" && <AboutV2 experience={experience} />}
      {route.page === "project" && activeProject && (
        <CaseStudyV2 project={activeProject} projects={projects} onOpen={onOpen} />
      )}
      <FooterV2 />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AppV2 />);
