/* Portfolio — App */

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/ {
  heroLayout: "split",
  gridDensity: "three",
  displayItalic: true,
  ghostHeadings: false,
  darkMode: false,
}; /*EDITMODE-END*/

/* ── cover art placeholder ────────────────────── */
function CoverArt({ kind }) {
  const bg = {
    dashboard: "linear-gradient(135deg,#3D55CC,#1E3A8A)",
    career: "linear-gradient(135deg,#10B981,#065F46)",
    type: "linear-gradient(135deg,#8B5CF6,#4C1D95)",
    fragrance: "linear-gradient(135deg,#F59E0B,#92400E)",
    chart: "linear-gradient(135deg,#0EA5E9,#0C4A6E)",
    phones: "linear-gradient(135deg,#EC4899,#831843)",
    elearning: "linear-gradient(135deg,#4F46E5,#1E1B4B)",
    food: "linear-gradient(135deg,#0F7B6C,#064E3B)",
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: bg[kind] || "linear-gradient(135deg,#6B7280,#374151)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 11,
        color: "rgba(255,255,255,.35)",
        letterSpacing: ".08em",
        textTransform: "uppercase",
      }}
    >
      {kind}
    </div>
  );
}

/* ── App ──────────────────────────────────────── */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [filter, setFilter] = React.useState("All");
  const [active, setActive] = React.useState(null);
  const [contactOpen, setContactOpen] = React.useState(false);
  const [copied, setCopied] = React.useState(null);
  const [showAllWork, setShowAllWork] = React.useState(false);

  const projects = window.PROJECTS;
  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.kind === filter);
  const activeProject = projects.find((p) => p.id === active) || null;

  React.useEffect(() => {
    const r = document.documentElement;
    if (t.darkMode) {
      r.style.setProperty("--white", "#0e0e0e");
      r.style.setProperty("--bone", "#121212");
      r.style.setProperty("--paper", "#181818");
      r.style.setProperty("--ink", "#f0f0f0");
      r.style.setProperty("--ink-soft", "#d8d8d8");
      r.style.setProperty("--ash", "#a8a8a8");
      r.style.setProperty("--slate", "#888");
      r.style.setProperty("--mute", "#666");
      r.style.setProperty("--hair", "#262626");
      r.style.setProperty("--dark", "#1a1a1a");
    } else {
      [
        "--white",
        "--bone",
        "--paper",
        "--ink",
        "--ink-soft",
        "--ash",
        "--slate",
        "--mute",
        "--hair",
        "--dark",
      ].forEach((v) => r.style.removeProperty(v));
    }
  }, [t.darkMode]);

  return (
    <>
      <NavBar onContactOpen={() => setContactOpen(true)} />
      <main>
        <HeroSection onContactOpen={() => setContactOpen(true)} />
        <AboutSection />
        <WorkSection
          projects={filtered}
          filter={filter}
          setFilter={setFilter}
          density={t.gridDensity}
          onOpen={(p) => setActive(p.id)}
          onViewAll={() => setShowAllWork(true)}
        />
        <ServicesSection />
        <ExperienceSection />
        <CollabSection onContactOpen={() => setContactOpen(true)} />
      </main>
      <SiteFooter />

      <AllWorkPage
        open={showAllWork}
        projects={projects}
        density={t.gridDensity}
        onClose={() => setShowAllWork(false)}
        onOpen={(p) => setActive(p.id)}
      />

      <ProjectDetail
        project={activeProject}
        projects={projects}
        onClose={() => setActive(null)}
        onJump={(p) => setActive(p.id)}
      />

      <ContactModal
        open={contactOpen}
        onClose={() => setContactOpen(false)}
        copied={copied}
        setCopied={setCopied}
      />

      <TweaksPanel>
        <TweakSection label="Display" />
        <TweakRadio
          label="Grid columns"
          value={t.gridDensity}
          options={[
            { value: "two", label: "2-up" },
            { value: "three", label: "3-up" },
          ]}
          onChange={(v) => setTweak("gridDensity", v)}
        />
        <TweakSection label="Theme" />
        <TweakToggle
          label="Dark mode"
          value={t.darkMode}
          onChange={(v) => setTweak("darkMode", v)}
        />
      </TweaksPanel>
    </>
  );
}

/* ── Contact Modal ────────────────────────────── */
function ContactModal({ open, onClose, copied, setCopied }) {
  const email = "abrahambobellson@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied("email");
    setTimeout(() => setCopied(null), 2000);
  };

  if (!open) return null;

  return (
    <div className="modal-back" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-left">
          <h3>
            Let's work
            <br />
            together
          </h3>
          <p>
            Have a project in mind? I'd love to hear about it. Reach out and
            let's create something remarkable.
          </p>
        </div>
        <div className="modal-right">
          <div>
            <label className="modal-field-label">Email Address</label>
            <div className="modal-field-row">
              <span className="modal-field-val">{email}</span>
              <button
                className="modal-copy-btn"
                onClick={copyEmail}
                style={{
                  background: copied === "email" ? "var(--primary)" : "var(--hair,#e8e6e0)",
                  border: "1px solid " + (copied === "email" ? "var(--primary)" : "var(--hair,#e8e6e0)"),
                  color: copied === "email" ? "white" : "var(--ink)",
                }}
              >
                {copied === "email" ? "✓ Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div className="modal-actions">
            <a
              href={`mailto:${email}?subject=Project Inquiry`}
              className="modal-btn-primary"
            >
              Send an Email
            </a>
            <button onClick={onClose} className="modal-btn-ghost">
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── NavBar ───────────────────────────────────── */
function NavBar({ onContactOpen }) {
  return (
    <header className="nav-bar">
      <div className="container nav-inner">
        <a className="nav-logo" href="#">
          <span className="nav-logo-icon">B</span>
          Bob Ellson
        </a>

        <nav className="nav-links">
          <a className="nav-link active" href="#">
            Home
          </a>
          <a className="nav-link" href="#about">
            About
          </a>
          <a className="nav-link" href="#service">
            Services
          </a>
          <a className="nav-link" href="#work">
            Projects
          </a>
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </nav>

        <button className="nav-cta" onClick={onContactOpen}>
          Contact Me <Ic.Arrow />
        </button>
      </div>
    </header>
  );
}

/* ── Hero ─────────────────────────────────────── */
function HeroSection({ onContactOpen }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-inner">
          {/* left: all text */}
          <div>
            <div className="hero-greeting">
              <span>👋</span> Hi there, I'm Bob Ellson
            </div>
            <h1 className="hero-title">
              UI/UX &<br />
              Product Designer
            </h1>
            <div className="hero-actions">
              <button className="btn-dark" onClick={onContactOpen}>
                Get In Touch <Ic.Arrow />
              </button>
              <a href="resume.pdf" download className="btn-ghost">
                Download CV <Ic.ArrowRight />
              </a>
            </div>
            <p className="hero-bio">
              Product Designer, 5+ years in.
              <br />
              I turn complexity into experiences
              <br />
              people don't have to think twice about.
            </p>
            <p className="hero-socials-label">Find me on:</p>
            <div className="hero-socials">
              <a href="https://www.linkedin.com/in/ellson-l-muda/" target="_blank" rel="noopener noreferrer" className="soc-btn" title="LinkedIn">
                <Ic.LinkedIn />
              </a>
              <a href="https://www.behance.net/abrahamellson" target="_blank" rel="noopener noreferrer" className="soc-btn" title="Behance">
                <Ic.Behance />
              </a>
            </div>
          </div>

          {/* right: illustration */}
          <div className="portrait-wrap">
            <img
              src="hero-image.png"
              alt="Designer illustration"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </div>
      <a href="#about" className="scroll-hint" aria-label="Scroll down">
        <span className="scroll-hint-label">Scroll</span>
        <span className="scroll-hint-mouse">
          <span className="scroll-hint-dot" />
        </span>
      </a>
    </section>
  );
}

/* ── About ────────────────────────────────────── */
function AboutSection() {
  return (
    <section id="about" className="sec">
      <div className="container">
        <div className="sec-label">About Me</div>
        <div className="about-grid">
          <p className="about-text">
            I'm a Product Designer with 5+ years of experience bridging the gap
            between what users need and what businesses want to achieve. For me,
            great design is about making complex experiences feel effortless for
            everyone
          </p>
          <dl className="about-meta">
            <div>
              <dt>Based in</dt>
              <dd>Jakarta, Indonesia</dd>
            </div>
            <div>
              <dt>Working with</dt>
              <dd>Studios, Companies, Agencies</dd>
            </div>
            <div>
              <dt>Mostly making</dt>
              <dd>Mobile apps, Websites, SaaS, Graphic Design</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}

/* ── Work / Projects ──────────────────────────── */
function WorkSection({ projects, filter, setFilter, density, onOpen, onViewAll }) {
  const allProjects = window.PROJECTS;
  const cols = density === "two" ? "repeat(2,1fr)" : "repeat(3,1fr)";
  const showViewAll = allProjects.length >= 7;
  const visibleProjects = showViewAll ? allProjects.slice(0, 6) : allProjects;

  return (
    <section id="work" className="sec" style={{ paddingTop: 60 }}>
      <div className="container">
        <div className="proj-head">
          <div>
            <div className="sec-label">Projects</div>
            <h2 className="sec-title">My Latest Projects</h2>
          </div>
          {showViewAll && (
            <a
              className="view-all-btn"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onViewAll();
              }}
            >
              View all work <Ic.Arrow />
            </a>
          )}
        </div>

        <div className="proj-grid" style={{ gridTemplateColumns: cols }}>
          {visibleProjects.map((p) => (
            <article key={p.id} className="proj-card" onClick={() => onOpen(p)}>
              <div className="proj-thumb">
                <span className="proj-kind-tag">
                  {p.kind === "Real Project" ? "Real Project" : "Exploration"}
                </span>
                <span className="proj-open-btn">
                  <Ic.Arrow />
                </span>
{p.coverImg ? (
                  <img src={p.coverImg} alt={p.title} />
                ) : (
                  <CoverArt kind={p.cover} />
                )}
              </div>
              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <div className="proj-chips">
                  {p.chips.map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── All Work (full project list page) ───────── */
function AllWorkPage({ open, projects, density, onClose, onOpen }) {
  const cols = density === "two" ? "repeat(2,1fr)" : "repeat(3,1fr)";

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div className={"pd-page " + (open ? "open" : "")}>
      <div className="pd-topbar">
        <div className="pd-topbar-inner">
          <button className="pd-back-btn" onClick={onClose}>
            <Ic.ArrowRight style={{ transform: "rotate(180deg)" }} /> Back
          </button>
          <div className="pd-topbar-divider" />
          <span className="pd-topbar-label">All Work</span>
        </div>
      </div>

      <div className="pd-page-hero">
        <span className="pd-page-cat">Projects</span>
        <h1 className="pd-page-title">All Work</h1>
      </div>

      <div className="container" style={{ paddingTop: 20, paddingBottom: 80 }}>
        <div className="proj-grid" style={{ gridTemplateColumns: cols }}>
          {projects.map((p) => (
            <article key={p.id} className="proj-card" onClick={() => onOpen(p)}>
              <div className="proj-thumb">
                <span className="proj-kind-tag">
                  {p.kind === "Real Project" ? "Real Project" : "Exploration"}
                </span>
                <span className="proj-open-btn">
                  <Ic.Arrow />
                </span>
                {p.coverImg ? (
                  <img src={p.coverImg} alt={p.title} />
                ) : (
                  <CoverArt kind={p.cover} />
                )}
              </div>
              <div className="proj-body">
                <h3 className="proj-title">{p.title}</h3>
                <div className="proj-chips">
                  {p.chips.map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Services ─────────────────────────────────── */
function ServicesSection() {
  const counts = {
    uiux: " ",
    graphic: " ",
    socmed: " ",
    branding: " ",
  };

  const SvcIcon = ({ k }) => {
    const icons = {
      uiux: (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <rect x="2" y="3" width="16" height="12" rx="2" />
          <path d="M7 17h6M10 15v2" />
        </svg>
      ),
      graphic: (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d="M3 17L8 8l4 5 3-3 5 7H3z" />
          <circle cx="14" cy="5" r="2" />
        </svg>
      ),
      socmed: (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <circle cx="5" cy="10" r="2" />
          <circle cx="15" cy="5" r="2" />
          <circle cx="15" cy="15" r="2" />
          <path d="M7 9l6-3M7 11l6 3" />
        </svg>
      ),
      branding: (
        <svg
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        >
          <path d="M10 2l2.4 5 5.6.8-4 4 .9 5.5L10 15l-4.9 2.3.9-5.5L2 7.8l5.6-.8z" />
        </svg>
      ),
    };
    return icons[k] || null;
  };

  return (
    <section
      id="service"
      className="sec"
      style={{ background: "var(--bone)", paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="container">
        <div className="svc-wrap">
          {/* left */}
          <div>
            <div className="sec-label">Services</div>
            <h2 className="sec-title">Design Services I am Providing</h2>
            <p className="sec-sub">
              I'm dedicated to providing comprehensive UI/UX services tailored
              to your specific needs, ensuring the highest standards of quality
              and craftsmanship.
            </p>
          </div>

          {/* right: list */}
          <div className="svc-list-new">
            {window.SERVICES.map((s) => (
              <div key={s.key} className="svc-row-new">
                <div className="svc-icon-box">
                  <SvcIcon k={s.key} />
                </div>
                <div className="svc-info">
                  <h3 className="svc-name">{s.title}</h3>
                  <p className="svc-desc">{s.desc}</p>
                </div>
                <span className="svc-count">{counts[s.key] || ""}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Experience ───────────────────────────────── */
function ExperienceSection() {
  return (
    <section id="experience" className="sec" style={{ paddingBottom: 60 }}>
      <div className="container">
        <div className="exp-card">
          <div className="exp-head">
            <div>
              <div className="sec-label">Experience</div>
              <h2 className="sec-title">/Experience</h2>
            </div>
            <span className="exp-years">5+ years</span>
          </div>
          <div className="exp-list">
            {window.EXPERIENCE.map((e) => (
              <div key={e.co} className="exp-row">
                <div>
                  <div className="exp-co">{e.co}</div>
                  <div className="exp-role">{e.role}</div>
                </div>
                <div className="exp-dates">{e.dates}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Collab / CTA ─────────────────────────────── */
function CollabSection({ onContactOpen }) {
  return (
    <section id="contact" className="collab-section">
      <div className="container">
        <div className="collab-avail">
          <i className="dot" /> Available for New Project
        </div>
        <h2 className="collab-title">
          Have a project
          <br />
          <em>in mind?</em>
        </h2>
        <p className="collab-sub">
          Together, we can make something quiet and impactful. Let's collaborate
          to bring an idea to life in a way that lasts beyond the launch week.
        </p>
        <button className="btn-green" onClick={onContactOpen}>
          Contact me <Ic.Arrow />
        </button>
      </div>
    </section>
  );
}

/* ── Site Footer ──────────────────────────────── */
function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <span className="footer-name">Bob Ellson</span>
        <span className="footer-copy">
          © 2026 Bob Ellson. All Rights Reserved.
        </span>
        <div className="footer-links">
          <a href="#work">Work</a>
          <a href="#service">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
