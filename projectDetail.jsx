// Project detail overlay — with rich section rendering for case studies

/* ─── Section Renderers ─── */

function renderSection(section, i, accent) {
  const t = section.type;
  if (t === "stats") return <SectionStats key={i} items={section.items} />;
  if (t === "text") return <SectionText key={i} content={section.content} />;
  if (t === "demo-cta") return <SectionDemoCta key={i} url={section.url} label={section.label} note={section.note} accent={accent} />;
  if (t === "heading") return <SectionHeading key={i} label={section.label} title={section.title} />;
  if (t === "problems") return <SectionProblems key={i} items={section.items} />;
  if (t === "comparison") return <SectionComparison key={i} rows={section.rows} />;
  if (t === "decisions") return <SectionDecisions key={i} items={section.items} />;
  if (t === "design-system") return <SectionDesignSystem key={i} />;
  if (t === "design-system-career") return <SectionDesignSystemCareer key={i} />;
  if (t === "design-system-skillboost") return <SectionDesignSystemSkillBoost key={i} />;
  if (t === "design-system-dye") return <SectionDesignSystemDye key={i} />;
  if (t === "design-system-pawsuite") return <SectionDesignSystemPawsuite key={i} />;
  if (t === "ia") return <SectionIA key={i} />;
  if (t === "impact") return <SectionImpact key={i} items={section.items} />;
  if (t === "quote") return null;
  if (t === "core-pages") return <SectionCorePages key={i} pages={section.pages} />;
  return null;
}

/* ── Stats ── */
function SectionStats({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}>
      {items.map((item, i) => (
        <div key={i} style={{
          background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)",
          borderRadius: 12, padding: "20px 14px", textAlign: "center",
          borderTop: `3px solid ${item.color}`
        }}>
          <div style={{ fontSize: 41, fontWeight: 800, color: item.color, lineHeight: 1, marginBottom: 8, letterSpacing: "-.02em" }}>
            {item.value}
          </div>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink,#0a0a0a)", marginBottom: 4 }}>{item.label}</div>
          <div style={{ fontSize: 12, color: "var(--slate,#8a8880)" }}>{item.sub}</div>
        </div>
      ))}
    </div>
  );
}

/* ── Text block ── */
function SectionText({ content }) {
  return (
    <p style={{ fontSize: 17, color: "var(--ink-soft,#4a4844)", lineHeight: 1.8, margin: 0, padding: "0 2px" }}>
      {content}
    </p>
  );
}

/* ── Demo CTA ── */
function SectionDemoCta({ url, label, note, accent }) {
  const color = accent || "#3D55CC";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: color, color: "white",
          borderRadius: 10, padding: "12px 22px",
          fontSize: 16, fontWeight: 800, letterSpacing: ".01em",
          textDecoration: "none",
          boxShadow: `0 4px 16px ${color}55`,
          flexShrink: 0
        }}
      >
        <span style={{
          width: 7, height: 7, borderRadius: "50%",
          background: "rgba(255,255,255,.85)", display: "inline-block",
          boxShadow: "0 0 0 2px rgba(255,255,255,.3)"
        }} />
        {label}
        <Ic.Arrow style={{ width: 12, height: 12 }} />
      </a>
      {note &&
        <span style={{ fontSize: 13, color: "var(--mute,#8a8880)", lineHeight: 1.5 }}>
          {note}
        </span>
      }
    </div>
  );
}

/* ── Section heading ── */
function SectionHeading({ label, title }) {
  return (
    <div style={{ paddingTop: 8, borderTop: "2px solid #3D55CC" }}>
      <div style={{ fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "#3D55CC", fontWeight: 800, marginBottom: 8 }}>
        {label}
      </div>
      <div style={{ fontSize: 24, fontWeight: 800, color: "var(--ink,#0a0a0a)", letterSpacing: "-.01em", lineHeight: 1.2 }}>
        {title}
      </div>
    </div>
  );
}

/* ── Problems ── */
function SectionProblems({ items }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {items.map((item, i) => {
        const hi = item.severity === "high";
        return (
          <div key={i} style={{
            background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)",
            borderLeft: `3px solid ${hi ? "#EF4444" : "#F59E0B"}`,
            borderRadius: "0 10px 10px 0", padding: "14px 16px",
            display: "grid", gridTemplateColumns: "32px 1fr 1fr 96px", gap: 14, alignItems: "start"
          }}>
            <div style={{ fontSize: 13, fontWeight: 800, color: "var(--mute,#8a8880)", paddingTop: 2 }}>{item.num}</div>
            <div>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--ink,#0a0a0a)", marginBottom: 4 }}>{item.title}</div>
              <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.55 }}>{item.pain}</div>
            </div>
            <div>
              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 3, fontWeight: 800 }}>Business Impact</div>
              <div style={{ fontSize: 13, color: "var(--ink-soft,#4a4844)", lineHeight: 1.55 }}>{item.impact}</div>
            </div>
            <div style={{
              fontSize: 11, fontWeight: 800, textAlign: "center",
              color: hi ? "#EF4444" : "#D97706",
              background: hi ? "#FEF2F2" : "#FFFBEB",
              border: `1px solid ${hi ? "#FECACA" : "#FCD34D"}`,
              padding: "5px 8px", borderRadius: 5, lineHeight: 1.3
            }}>
              {hi ? "HIGH\nIMPACT" : "MEDIUM\nIMPACT"}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Before / After Comparison ── */
function SectionComparison({ rows }) {
  const hdrs = ["Metric", "Before", "After", "Improvement"];
  const hdrc = ["var(--slate)", "#EF4444", "#10B981", "#3D55CC"];
  return (
    <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--hair,#e8e6e0)" }}>
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 120px", background: "var(--paper,#f5f3ee)", padding: "10px 18px", gap: 12 }}>
        {hdrs.map((h, i) => (
          <div key={h} style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: hdrc[i] }}>
            {h}
          </div>
        ))}
      </div>
      {rows.map((row, i) => (
        <div key={i} style={{
          display: "grid", gridTemplateColumns: "2fr 1fr 1fr 120px", padding: "12px 18px", gap: 12,
          borderTop: "1px solid var(--hair,#f0ede8)",
          background: i % 2 === 0 ? "var(--white,#fff)" : "var(--paper,#f9f7f4)",
          alignItems: "center"
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink,#0a0a0a)" }}>{row.metric}</div>
          <div style={{ fontSize: 14, color: "#EF4444" }}>{row.before}</div>
          <div style={{ fontSize: 14, color: "#10B981", fontWeight: 700 }}>{row.after}</div>
          <div>
            <span style={{ fontSize: 12, fontWeight: 800, color: "#3D55CC", background: "#EEF2FF", padding: "3px 8px", borderRadius: 4 }}>
              {row.tag}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Design Decisions ── */
function SectionDecisions({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
      {items.map((item, i) => (
        <div key={i} style={{
          background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)",
          borderRadius: 12, padding: "18px", display: "flex", flexDirection: "column", gap: 10
        }}>
          <span style={{ fontSize: 11, fontWeight: 800, color: "#3D55CC", background: "#EEF2FF", padding: "3px 8px", borderRadius: 4, alignSelf: "flex-start" }}>
            {item.num}
          </span>
          <div style={{ fontSize: 17, fontWeight: 800, color: "var(--ink,#0a0a0a)", lineHeight: 1.25 }}>{item.title}</div>
          <div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute)", marginBottom: 3, fontWeight: 800 }}>Why</div>
            <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.55 }}>{item.why}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute)", marginBottom: 3, fontWeight: 800 }}>How</div>
            <div style={{ fontSize: 13, color: "var(--ink-soft,#4a4844)", lineHeight: 1.55 }}>{item.how}</div>
          </div>
          <div style={{ background: "#F0FDF4", borderRadius: 7, padding: "9px 11px", borderLeft: "3px solid #10B981", marginTop: "auto" }}>
            <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: ".06em", color: "#10B981", marginBottom: 3, fontWeight: 800 }}>Result</div>
            <div style={{ fontSize: 13, color: "var(--ink,#0a0a0a)", fontWeight: 600, lineHeight: 1.4 }}>{item.result}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Design System ── */
function SectionDesignSystem() {
  const colors = [
    { hex: "#3D55CC", name: "KPoin Blue", use: "CTA, active states, links" },
    { hex: "#10B981", name: "Success", use: "In stock, profitable" },
    { hex: "#EF4444", name: "Alert Red", use: "Out of stock, loss" },
    { hex: "#F59E0B", name: "Warning", use: "Low stock, at-risk" },
    { hex: "#F8F6F1", name: "Warm White", use: "Page background" },
    { hex: "#0A0A0A", name: "Near Black", use: "Primary text" }
  ];
  const typeScale = [
    { size: 32, weight: 700, label: "Display", sample: "Section Title", use: "Modal & hero titles" },
    { size: 24, weight: 600, label: "Heading", sample: "Section Header", use: "Page sections" },
    { size: 18, weight: 600, label: "Subheading", sample: "Card Title", use: "Cards, groupings" },
    { size: 14, weight: 400, label: "Body", sample: "Paragraph content, descriptions and data labels", use: "All content" },
    { size: 11, weight: 600, label: "Label", sample: "FORM LABEL · CATEGORY TAG", use: "Labels (uppercase)" }
  ];
  const spacings = [4, 8, 12, 16, 24, 48];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {/* Colors */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Color Palette</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 10 }}>
          {colors.map((c, i) => (
            <div key={i}>
              <div style={{ height: 48, borderRadius: 8, background: c.hex, marginBottom: 8, border: ["#F8F6F1", "#0A0A0A"].includes(c.hex) ? "1px solid var(--hair,#e8e6e0)" : "none" }} />
              <div style={{ fontSize: 13, fontWeight: 700, color: "var(--ink,#0a0a0a)" }}>{c.name}</div>
              <div style={{ fontSize: 11, color: "var(--mute,#8a8880)", fontFamily: "monospace", letterSpacing: ".01em", marginTop: 1 }}>{c.hex}</div>
              <div style={{ fontSize: 11, color: "var(--slate,#6e6e6e)", marginTop: 3, lineHeight: 1.4 }}>{c.use}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Type scale */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Typography — Inter</div>
        <div style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 10, overflow: "hidden" }}>
          {typeScale.map((t, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "90px 1fr 110px",
              padding: "12px 18px", gap: 16, alignItems: "center",
              borderTop: i > 0 ? "1px solid var(--hair,#f0ede8)" : "none"
            }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: "var(--ink,#0a0a0a)" }}>{t.size}px / {t.weight}</div>
                <div style={{ fontSize: 11, color: "var(--mute,#8a8880)", marginTop: 1 }}>{t.label}</div>
              </div>
              <div style={{
                fontSize: Math.min(t.size, 20), fontWeight: t.weight, color: "var(--ink,#0a0a0a)",
                fontFamily: "var(--sans, 'Inter', sans-serif)",
                textTransform: t.size === 11 ? "uppercase" : "none",
                letterSpacing: t.size === 11 ? ".06em" : "normal",
                lineHeight: 1.3
              }}>
                {t.sample}
              </div>
              <div style={{ fontSize: 12, color: "var(--slate,#6e6e6e)" }}>{t.use}</div>
            </div>
          ))}
        </div>
      </div>
      {/* Spacing */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Spacing Tokens</div>
        <div style={{ display: "flex", gap: 20, alignItems: "flex-end", padding: "0 4px" }}>
          {spacings.map(s => (
            <div key={s} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div style={{
                width: Math.min(s * 1.6, 64), height: Math.min(s * 1.6, 64),
                background: "#3D55CC", borderRadius: 4,
                opacity: 0.12 + (s / 60) * 0.88
              }} />
              <div style={{ fontSize: 12, color: "var(--mute,#8a8880)", fontWeight: 700 }}>{s}px</div>
            </div>
          ))}
        </div>
      </div>
      {/* Status badges */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Status Badges</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {[
            { label: "In Stock", bg: "#F0FDF4", color: "#10B981", border: "#86EFAC" },
            { label: "Low Stock", bg: "#FFFBEB", color: "#D97706", border: "#FCD34D" },
            { label: "Out of Stock", bg: "#FEF2F2", color: "#EF4444", border: "#FCA5A5" },
            { label: "Profitable", bg: "#F0FDF4", color: "#10B981", border: "#86EFAC" },
            { label: "At Risk", bg: "#FFFBEB", color: "#D97706", border: "#FCD34D" },
            { label: "Loss", bg: "#FEF2F2", color: "#EF4444", border: "#FCA5A5" }
          ].map((b, i) => (
            <span key={i} style={{ fontSize: 13, fontWeight: 700, padding: "5px 11px", borderRadius: 6, background: b.bg, color: b.color, border: `1px solid ${b.border}` }}>{b.label}</span>
          ))}
        </div>
      </div>

      {/* ─── BUTTON SYSTEM ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Button System</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {/* Variants */}
          <div style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 10, padding: "18px 20px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate,#6e6e6e)", marginBottom: 16, letterSpacing: ".04em", textTransform: "uppercase" }}>Variants</div>
            <div style={{ display: "flex", gap: 16, alignItems: "flex-end", flexWrap: "wrap" }}>
              {[
                { label: "Primary", tag: "Main action", btn: { bg: "#3D55CC", color: "white", border: "none", text: "New Order" } },
                { label: "Secondary", tag: "Alt action", btn: { bg: "transparent", color: "#3D55CC", border: "1.5px solid #3D55CC", text: "Export CSV" } },
                { label: "Ghost", tag: "Tertiary", btn: { bg: "transparent", color: "var(--ink,#0a0a0a)", border: "1px solid var(--hair,#e0ddd8)", text: "Filter" } },
                { label: "Danger", tag: "Destructive", btn: { bg: "#EF4444", color: "white", border: "none", text: "Delete" } },
                { label: "Disabled", tag: "Inactive", btn: { bg: "#F3F4F6", color: "#9CA3AF", border: "none", text: "Processing…", cursor: "not-allowed" } }
              ].map((v, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <div style={{ fontSize: 11, color: "var(--mute,#8a8880)", fontWeight: 600, textTransform: "uppercase", letterSpacing: ".05em" }}>{v.tag}</div>
                  <button style={{ background: v.btn.bg, color: v.btn.color, border: v.btn.border || "none", borderRadius: 8, padding: "9px 16px", fontSize: 13, fontWeight: 700, cursor: v.btn.cursor || "pointer", fontFamily: "inherit", letterSpacing: ".01em" }}>
                    {v.btn.text}
                  </button>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "var(--ink,#0a0a0a)" }}>{v.label}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Size scale */}
          <div style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 10, padding: "18px 20px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate,#6e6e6e)", marginBottom: 16, letterSpacing: ".04em", textTransform: "uppercase" }}>Size Scale</div>
            <div style={{ display: "flex", gap: 20, alignItems: "flex-end" }}>
              {[
                { label: "Small", size: 11, pad: "6px 12px", spec: "11px / 6×12" },
                { label: "Medium", size: 13, pad: "9px 16px", spec: "13px / 9×16" },
                { label: "Large", size: 15, pad: "12px 22px", spec: "15px / 12×22" }
              ].map(b => (
                <div key={b.label} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <button style={{ background: "#3D55CC", color: "white", border: "none", borderRadius: 8, padding: b.pad, fontSize: b.size, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Apply</button>
                  <div style={{ fontSize: 12, fontWeight: 800, color: "var(--ink,#0a0a0a)" }}>{b.label}</div>
                  <div style={{ fontSize: 11, color: "var(--mute,#8a8880)", fontFamily: "monospace" }}>{b.spec}</div>
                </div>
              ))}
              <div style={{ marginLeft: 12, paddingLeft: 16, borderLeft: "1px solid var(--hair,#e0ddd8)", display: "flex", flexDirection: "column", gap: 8, justifyContent: "center" }}>
                {[
                  { rule: "Min touch target: 40px height" },
                  { rule: "Min width: 80px for legibility" },
                  { rule: "Always 8px border-radius" }
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <div style={{ width: 4, height: 4, borderRadius: "50%", background: "#3D55CC", flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: "var(--slate,#6e6e6e)" }}>{r.rule}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── INPUT FIELD STATES ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Input Field States</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {[
            { state: "Default", border: "var(--hair,#e0ddd8)", shadow: "none", bg: "var(--white,#fff)", val: null, helper: "Used for receipts & loyalty", helperColor: "var(--slate,#6e6e6e)" },
            { state: "Focus", border: "#3D55CC", shadow: "0 0 0 3px rgba(61,85,204,.14)", bg: "var(--white,#fff)", val: "Budi S…", helper: "Type a full name", helperColor: "var(--slate,#6e6e6e)" },
            { state: "Error", border: "#EF4444", shadow: "0 0 0 3px rgba(239,68,68,.12)", bg: "#FEF9F9", val: "!!", helper: "⚠ Name is required", helperColor: "#EF4444" },
            { state: "Disabled", border: "var(--hair,#e0ddd8)", shadow: "none", bg: "var(--paper,#f5f3ee)", val: "Locked", helper: "Cannot edit in cashier mode", helperColor: "var(--mute,#8a8880)" }
          ].map((inp, i) => (
            <div key={i}>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "#374151", marginBottom: 5 }}>
                Customer Name <span style={{ color: "#EF4444" }}>*</span>
              </div>
              <div style={{ background: inp.bg, border: `1.5px solid ${inp.border}`, borderRadius: 7, padding: "8px 11px", fontSize: 14, color: inp.state === "Disabled" ? "#9CA3AF" : "var(--ink,#0a0a0a)", boxShadow: inp.shadow, cursor: inp.state === "Disabled" ? "not-allowed" : "text", marginBottom: 5, minHeight: 36, display: "flex", alignItems: "center" }}>
                {inp.val ? inp.val : <span style={{ color: "#9CA3AF" }}>Type a name…</span>}
              </div>
              <div style={{ fontSize: 12, color: inp.helperColor, lineHeight: 1.4 }}>{inp.helper}</div>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--mute,#8a8880)", marginTop: 10, textAlign: "center", padding: "4px 0", borderTop: "1px solid var(--hair,#f0ede8)" }}>{inp.state}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── KPI CARD ANATOMY ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>KPI Card Anatomy</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "center" }}>
          {/* Annotated card */}
          <div>
            <div style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, padding: "20px", boxShadow: "0 2px 8px rgba(0,0,0,.07)", position: "relative" }}>
              {/* Label row */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#3D55CC" }} />
                  <span style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: ".07em", color: "#6B7280" }}>Today's Revenue</span>
                </div>
                <div style={{ fontSize: 12, fontWeight: 800, color: "#10B981", background: "#F0FDF4", padding: "3px 8px", borderRadius: 5 }}>+12.4%</div>
              </div>
              {/* Value */}
              <div style={{ fontSize: 36, fontWeight: 800, color: "#0A0A0A", letterSpacing: "-.02em", lineHeight: 1, marginBottom: 12 }}>Rp 12.4M</div>
              {/* Progress */}
              <div style={{ height: 4, background: "var(--paper,#f5f3ee)", borderRadius: 2, marginBottom: 6 }}>
                <div style={{ width: "72%", height: "100%", background: "#3D55CC", borderRadius: 2 }} />
              </div>
              <div style={{ fontSize: 12, color: "#9CA3AF" }}>72% of daily target · Rp 17.2M goal</div>
            </div>
            {/* Annotation legend */}
            <div style={{ display: "flex", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
              {[
                { dot: "#6B7280", label: "Metric label" },
                { dot: "#10B981", label: "Trend badge" },
                { dot: "#0A0A0A", label: "Primary value" },
                { dot: "#3D55CC", label: "Progress bar" }
              ].map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: a.dot }} />
                  <span style={{ fontSize: 12, color: "var(--slate,#6e6e6e)", fontWeight: 600 }}>{a.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Rules */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { rule: "Label first, value second", detail: "Users scan labels to find the metric they need. Don't lead with a number." },
              { rule: "Trend badge only when earned", detail: "Only show trend if the change is meaningful. Never decorative." },
              { rule: "Progress bar for targets only", detail: "Only when there's a defined goal. Omit for metrics without targets." },
              { rule: "Consistent radius across cards", detail: "Always 12px. No variance. Cards should feel like a unified set." }
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, borderRadius: 5, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#3D55CC" }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink,#0a0a0a)", marginBottom: 2 }}>{r.rule}</div>
                  <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.5 }}>{r.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── ELEVATION SYSTEM ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Elevation System</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 14 }}>
          {[
            { level: "dp0 — Flat", shadow: "none", use: "Table rows, list items", context: "Inline content" },
            { level: "dp1 — Surface", shadow: "0 1px 4px rgba(0,0,0,.08)", use: "KPI cards, panels", context: "Primary blocks" },
            { level: "dp2 — Float", shadow: "0 4px 16px rgba(0,0,0,.12)", use: "Dropdowns, popovers", context: "Temporary layers" },
            { level: "dp3 — Modal", shadow: "0 20px 56px rgba(0,0,0,.2)", use: "Modals, dialogs", context: "Overlay layers" }
          ].map((e, i) => (
            <div key={i}>
              <div style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 10, padding: "0", boxShadow: e.shadow, height: 72, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 10 }}>
                <span style={{ fontSize: 16, fontWeight: 800, color: "var(--mute,#8a8880)", opacity: 0.5 }}>dp{i}</span>
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--ink,#0a0a0a)", marginBottom: 2 }}>{e.level}</div>
              <div style={{ fontSize: 12, color: "#3D55CC", fontWeight: 600, marginBottom: 3 }}>{e.use}</div>
              <div style={{ fontSize: 11, color: "var(--mute,#8a8880)", fontFamily: "monospace", lineHeight: 1.5, wordBreak: "break-all" }}>{e.shadow === "none" ? "box-shadow: none" : e.shadow}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── SIDEBAR NAVIGATION ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Sidebar Navigation Component</div>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: 24, alignItems: "start" }}>
          {/* Live sidebar preview */}
          <div style={{ background: "#0f1220", borderRadius: 12, padding: "14px 10px", display: "flex", flexDirection: "column", gap: 3 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "4px 8px 12px", borderBottom: "1px solid rgba(255,255,255,.08)", marginBottom: 6 }}>
              <div style={{ width: 26, height: 26, borderRadius: 6, background: "#3D55CC", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: "white" }}>K</div>
              <span style={{ fontSize: 14, fontWeight: 800, color: "white" }}>KPoin POS</span>
            </div>
            {[
              { label: "Orders", state: "active", badge: null },
              { label: "Inventory", state: "default", badge: "3" },
              { label: "Customers", state: "hover", badge: null },
              { label: "Promos", state: "default", badge: null },
              { label: "Finance", state: "default", badge: null },
              { label: "Settings", state: "default", badge: null }
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "8px 10px", borderRadius: 7, background: item.state === "active" ? "#3D55CC" : item.state === "hover" ? "rgba(255,255,255,.07)" : "transparent" }}>
                <span style={{ fontSize: 14, fontWeight: item.state === "active" ? 700 : 500, color: item.state === "active" ? "white" : item.state === "hover" ? "rgba(255,255,255,.8)" : "rgba(255,255,255,.45)" }}>{item.label}</span>
                {item.badge && <div style={{ width: 16, height: 16, borderRadius: "50%", background: "#EF4444", fontSize: 9, fontWeight: 800, color: "white", display: "flex", alignItems: "center", justifyContent: "center" }}>{item.badge}</div>}
              </div>
            ))}
          </div>
          {/* State annotations */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { state: "Active", color: "#3D55CC", bg: "#EEF2FF", border: "#C7D2FE", desc: "Filled primary blue. White text. Only one item active at a time. Reflects current location in the app." },
              { state: "Hover", color: "#374151", bg: "#F9FAFB", border: "#E5E7EB", desc: "Subtle white tint overlay. Signals clickability without competing with active state." },
              { state: "Default", color: "#9CA3AF", bg: "transparent", border: "transparent", desc: "Low-opacity text on dark background. Visually recedes — doesn't compete with main content area." },
              { state: "Badge · Red", color: "#EF4444", bg: "#FEF2F2", border: "#FCA5A5", desc: "Notification dot for actionable items only (low stock alerts, pending approvals). Never cosmetic." }
            ].map((s, i) => (
              <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, padding: "4px 10px", borderRadius: 5, background: s.bg, border: `1px solid ${s.border}` }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: s.color, whiteSpace: "nowrap" }}>{s.state}</span>
                </div>
                <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.6, paddingTop: 3 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── DATA TABLE ANATOMY ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Data Table Anatomy</div>
        <div style={{ border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, overflow: "hidden" }}>
          {/* Table header */}
          <div style={{ background: "var(--paper,#f5f3ee)", padding: "10px 18px", display: "grid", gridTemplateColumns: "1fr 110px 70px 80px 110px", gap: 12, alignItems: "center" }}>
            {[
              { h: "Product Name", sort: false },
              { h: "Category", sort: false },
              { h: "Stock", sort: true },
              { h: "Price", sort: false },
              { h: "Status", sort: false }
            ].map((col, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--slate,#6e6e6e)" }}>{col.h}</span>
                {col.sort && <span style={{ fontSize: 9, color: "#3D55CC", fontWeight: 800 }}>▲</span>}
              </div>
            ))}
          </div>
          {/* Rows */}
          {[
            { name: "Nasi Goreng Special", cat: "Main Course", stock: 18, price: "Rp 32K", s: { label: "In Stock", bg: "#F0FDF4", color: "#10B981", border: "#86EFAC" } },
            { name: "Ayam Bakar Taliwang", cat: "Main Course", stock: 4, price: "Rp 45K", s: { label: "Low Stock", bg: "#FFFBEB", color: "#D97706", border: "#FCD34D" } },
            { name: "Es Teh Manis", cat: "Beverage", stock: 0, price: "Rp 8K", s: { label: "Out of Stock", bg: "#FEF2F2", color: "#EF4444", border: "#FCA5A5" } }
          ].map((row, i) => (
            <div key={i} style={{ padding: "11px 18px", display: "grid", gridTemplateColumns: "1fr 110px 70px 80px 110px", gap: 12, alignItems: "center", borderTop: "1px solid var(--hair,#f0ede8)", background: i % 2 === 0 ? "var(--white,#fff)" : "var(--paper,#f9f7f4)" }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: "var(--ink,#0a0a0a)" }}>{row.name}</div>
              <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)" }}>{row.cat}</div>
              <div style={{ fontSize: 14, fontWeight: 800, color: row.stock === 0 ? "#EF4444" : row.stock < 5 ? "#D97706" : "var(--ink,#0a0a0a)" }}>{row.stock}</div>
              <div style={{ fontSize: 14, color: "var(--ink-soft,#4a4844)" }}>{row.price}</div>
              <span style={{ fontSize: 12, fontWeight: 700, padding: "3px 8px", borderRadius: 5, background: row.s.bg, color: row.s.color, border: `1px solid ${row.s.border}`, display: "inline-block" }}>{row.s.label}</span>
            </div>
          ))}
          {/* Legend footer */}
          <div style={{ background: "var(--paper,#f5f3ee)", padding: "8px 18px", borderTop: "1px solid var(--hair,#e8e6e0)", display: "flex", gap: 18, flexWrap: "wrap" }}>
            {[
              { dot: "#3D55CC", note: "Active sort indicator" },
              { dot: "#6B7280", note: "Alternating row zebra stripe" },
              { dot: "#D97706", note: "Color-coded stock quantity" },
              { dot: "#10B981", note: "Inline status badge" }
            ].map((n, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: n.dot }} />
                <span style={{ fontSize: 11, color: "var(--slate,#6e6e6e)", fontWeight: 600 }}>{n.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── MODAL / OVERLAY ANATOMY ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Modal / Overlay Anatomy</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
          {/* Modal preview */}
          <div>
            <div style={{ background: "rgba(10,10,10,.5)", borderRadius: 12, padding: "28px 20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ background: "var(--white,#fff)", borderRadius: 12, padding: "20px", width: "100%", boxShadow: "0 20px 56px rgba(0,0,0,.25)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14, paddingBottom: 12, borderBottom: "1px solid var(--hair,#e8e6e0)" }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 800, color: "var(--ink,#0a0a0a)" }}>Confirm Delete</div>
                    <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", marginTop: 2 }}>This action cannot be undone</div>
                  </div>
                  <div style={{ width: 22, height: 22, borderRadius: 5, background: "var(--paper,#f5f3ee)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <span style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1, fontWeight: 300 }}>×</span>
                  </div>
                </div>
                <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.65, marginBottom: 18 }}>
                  You are about to delete <strong style={{ color: "var(--ink,#0a0a0a)" }}>Nasi Goreng Special</strong> from the inventory. All stock records across 4 stores will be removed permanently.
                </div>
                <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}>
                  <button style={{ background: "transparent", border: "1.5px solid var(--hair,#e0ddd8)", color: "var(--ink,#0a0a0a)", borderRadius: 7, padding: "7px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Cancel</button>
                  <button style={{ background: "#EF4444", border: "none", color: "white", borderRadius: 7, padding: "7px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Delete Product</button>
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 14, marginTop: 10, flexWrap: "wrap" }}>
              {[{ dot: "rgba(10,10,10,.5)", label: "Scrim backdrop" }, { dot: "#0A0A0A", label: "Modal title" }, { dot: "#6B7280", label: "Descriptor" }, { dot: "#EF4444", label: "Danger CTA" }].map((a, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: a.dot, border: a.dot === "rgba(10,10,10,.5)" ? "1px solid #ccc" : "none" }} />
                  <span style={{ fontSize: 12, color: "var(--slate,#6e6e6e)", fontWeight: 600 }}>{a.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Modal rules */}
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              { rule: "Always a scrim backdrop", detail: "Darkened backdrop confirms the user is in an overlay context. Clicking it should close the modal." },
              { rule: "Title + subtitle header", detail: "Title names the action. Subtitle states the consequence. Together they answer 'What?' and 'So what?'" },
              { rule: "Primary CTA is right-aligned", detail: "Cancel left, confirm right — consistent with OS-level dialogs and muscle memory." },
              { rule: "Destructive actions = red", detail: "Danger CTAs get red, always. No ambiguity. This prevents one accidental deletion per day." },
              { rule: "Two exit paths: X and Escape", detail: "Both must work. Never trap a user. Tab focus stays within the modal until dismissed." }
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 18, height: 18, borderRadius: 5, background: "#EEF2FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <span style={{ fontSize: 12, fontWeight: 800, color: "#3D55CC" }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink,#0a0a0a)", marginBottom: 2 }}>{r.rule}</div>
                  <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.5 }}>{r.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── EMPTY STATE DESIGN ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Empty State Design</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14, marginBottom: 14 }}>
          {[
            { context: "No orders today", icon: "🛒", title: "No orders yet", body: "Tap New Order to start ringing up your first sale.", cta: "New Order", ctaColor: "#3D55CC", type: "Action", typeBg: "#EEF2FF" },
            { context: "Filter has no match", icon: "🔍", title: "No results found", body: "Try adjusting your search or clearing the date range.", cta: "Clear filters", ctaColor: "#6B7280", type: "Retry", typeBg: "#F3F4F6" },
            { context: "Stock fully depleted", icon: "📦", title: "Out of stock", body: "Unavailable across all stores. Restock or remove from menu.", cta: "Reorder now", ctaColor: "#EF4444", type: "Alert", typeBg: "#FEF2F2" }
          ].map((es, i) => (
            <div key={i}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
                <div style={{ fontSize: 11, fontWeight: 800, color: "var(--mute,#8a8880)", letterSpacing: ".06em", textTransform: "uppercase" }}>{es.context}</div>
                <span style={{ fontSize: 11, fontWeight: 800, color: es.ctaColor, background: es.typeBg, padding: "3px 7px", borderRadius: 4 }}>{es.type}</span>
              </div>
              <div style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, padding: "28px 20px", textAlign: "center" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{es.icon}</div>
                <div style={{ fontSize: 16, fontWeight: 800, color: "var(--ink,#0a0a0a)", marginBottom: 6 }}>{es.title}</div>
                <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.6, marginBottom: 16 }}>{es.body}</div>
                <button style={{ background: es.ctaColor, color: "white", border: "none", borderRadius: 7, padding: "7px 16px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>{es.cta}</button>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "var(--paper,#f5f3ee)", borderRadius: 10, padding: "14px 18px" }}>
          <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 6 }}>Design Rule</div>
          <div style={{ fontSize: 14, color: "var(--ink,#0a0a0a)", lineHeight: 1.65 }}>
            Every empty state answers three questions: <strong>What happened?</strong> · <strong>Why?</strong> · <strong>What should I do?</strong> · Empty states are not errors — they are opportunities to guide users toward the correct next action.
          </div>
        </div>
      </div>

      {/* ─── TOAST / FEEDBACK SYSTEM ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Toast Notification System</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
          {[
            { type: "Success", icon: "✓", color: "#10B981", border: "#86EFAC", bg: "#F0FDF4", message: "Order #0041 completed successfully", detail: "Rp 89,000 — paid by card. Receipt sent to printer." },
            { type: "Warning", icon: "⚠", color: "#D97706", border: "#FCD34D", bg: "#FFFBEB", message: "Low stock alert: Es Teh Manis", detail: "4 units remaining across all stores. Consider reordering." },
            { type: "Error", icon: "✕", color: "#EF4444", border: "#FCA5A5", bg: "#FEF2F2", message: "Payment declined", detail: "Card reader timeout. Retry or switch to cash / QR." },
            { type: "Info", icon: "i", color: "#3D55CC", border: "#A5B4FC", bg: "#EEF2FF", message: "Promo activated: Weekend Bundle", detail: "Auto-applies to qualifying orders today until 23:59." }
          ].map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, background: t.bg, border: `1px solid ${t.border}`, borderLeft: `3px solid ${t.color}`, borderRadius: 10, padding: "12px 16px" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: t.color, color: "white", fontSize: 10, fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{t.icon}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink,#0a0a0a)", marginBottom: 2 }}>{t.message}</div>
                <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.5 }}>{t.detail}</div>
              </div>
              <div style={{ fontSize: 11, fontWeight: 800, color: t.color, background: "rgba(255,255,255,.7)", padding: "3px 8px", borderRadius: 4, whiteSpace: "nowrap", flexShrink: 0 }}>{t.type}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {[
            { rule: "4-sec auto-dismiss (success only)", detail: "Success toasts vanish automatically. Errors stay until dismissed — they need acknowledgement." },
            { rule: "Top-right placement, never covering content", detail: "Stacks vertically for multiple toasts. Never overlaps the order grid or tables." },
            { rule: "Action only on errors", detail: "'Retry' or 'View details' on errors. Never add actions to success toasts — don't interrupt the flow." }
          ].map((r, i) => (
            <div key={i} style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 10, padding: "14px" }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink,#0a0a0a)", marginBottom: 5, lineHeight: 1.3 }}>{r.rule}</div>
              <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.5 }}>{r.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── INTERACTION STATES MAP ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Interaction States Map</div>
        <div style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ background: "var(--paper,#f5f3ee)", padding: "10px 18px", display: "grid", gridTemplateColumns: "100px repeat(5,1fr)", gap: 8, alignItems: "center" }}>
            <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--slate,#6e6e6e)" }}>Element</div>
            {["Default", "Hover", "Focus", "Active / Pressed", "Disabled"].map(h => (
              <div key={h} style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".06em", color: "var(--slate,#6e6e6e)", textAlign: "center" }}>{h}</div>
            ))}
          </div>
          {[
            {
              name: "Button",
              states: [
                { bg: "#3D55CC", border: "none", color: "white", text: "Confirm", shadow: "none" },
                { bg: "#3347B8", border: "none", color: "white", text: "Confirm", shadow: "0 4px 14px rgba(61,85,204,.35)" },
                { bg: "#3D55CC", border: "2.5px solid #93A5F8", color: "white", text: "Confirm", shadow: "0 0 0 3px rgba(61,85,204,.18)" },
                { bg: "#2C3F99", border: "none", color: "rgba(255,255,255,.9)", text: "Confirm", shadow: "inset 0 2px 4px rgba(0,0,0,.15)" },
                { bg: "#E5E7EB", border: "none", color: "#9CA3AF", text: "Confirm", shadow: "none" }
              ]
            },
            {
              name: "Input",
              states: [
                { bg: "var(--white,#fff)", border: "1.5px solid var(--hair,#e0ddd8)", color: "#9CA3AF", text: "Enter name…", shadow: "none" },
                { bg: "var(--white,#fff)", border: "1.5px solid #9CA3AF", color: "var(--ink,#0a0a0a)", text: "Enter name…", shadow: "none" },
                { bg: "var(--white,#fff)", border: "1.5px solid #3D55CC", color: "var(--ink,#0a0a0a)", text: "Budi Santoso", shadow: "0 0 0 3px rgba(61,85,204,.14)" },
                { bg: "var(--white,#fff)", border: "1.5px solid #3D55CC", color: "var(--ink,#0a0a0a)", text: "Budi Santoso", shadow: "none" },
                { bg: "var(--paper,#f5f3ee)", border: "1.5px solid var(--hair,#e0ddd8)", color: "#9CA3AF", text: "Locked field", shadow: "none" }
              ]
            },
            {
              name: "Row",
              states: [
                { bg: "var(--white,#fff)", border: "none", color: "var(--ink,#0a0a0a)", text: "Nasi Goreng", shadow: "none" },
                { bg: "var(--paper,#f9f7f4)", border: "none", color: "var(--ink,#0a0a0a)", text: "Nasi Goreng", shadow: "none" },
                { bg: "#EEF2FF", border: "none", color: "#3D55CC", text: "Nasi Goreng", shadow: "none" },
                { bg: "#DBEAFE", border: "none", color: "#1D4ED8", text: "Nasi Goreng", shadow: "none" },
                { bg: "var(--white,#fff)", border: "none", color: "#9CA3AF", text: "Nasi Goreng", shadow: "none" }
              ]
            },
            {
              name: "Chip",
              states: [
                { bg: "var(--paper,#f5f3ee)", border: "1px solid var(--hair,#e0ddd8)", color: "var(--slate,#6e6e6e)", text: "All", shadow: "none" },
                { bg: "var(--white,#fff)", border: "1px solid #9CA3AF", color: "var(--ink,#0a0a0a)", text: "All", shadow: "none" },
                { bg: "#EEF2FF", border: "1.5px solid #3D55CC", color: "#3D55CC", text: "All", shadow: "0 0 0 2px rgba(61,85,204,.12)" },
                { bg: "#3D55CC", border: "none", color: "white", text: "All", shadow: "none" },
                { bg: "var(--paper,#f5f3ee)", border: "1px solid var(--hair,#e0ddd8)", color: "#C4C2BC", text: "All", shadow: "none" }
              ]
            }
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "100px repeat(5,1fr)", gap: 8, padding: "12px 18px", borderTop: "1px solid var(--hair,#f0ede8)", alignItems: "center" }}>
              <div style={{ fontSize: 13, fontWeight: 800, color: "var(--ink,#0a0a0a)" }}>{row.name}</div>
              {row.states.map((s, j) => (
                <div key={j} style={{ background: s.bg, border: s.border, borderRadius: row.name === "Row" ? 5 : 7, padding: "6px 8px", fontSize: 12, fontWeight: row.name === "Button" ? 700 : row.name === "Chip" ? 600 : 400, color: s.color, boxShadow: s.shadow, textAlign: "center", transition: "all .15s", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {s.text}
                </div>
              ))}
            </div>
          ))}
          <div style={{ background: "var(--paper,#f5f3ee)", padding: "9px 18px", borderTop: "1px solid var(--hair,#e8e6e0)", display: "flex", gap: 20, flexWrap: "wrap" }}>
            {[
              { dot: "#6B7280", note: "Default — resting state" },
              { dot: "#374151", note: "Hover — intent signal" },
              { dot: "#3D55CC", note: "Focus — keyboard accessible" },
              { dot: "#1D4ED8", note: "Active — touch/press feedback" },
              { dot: "#9CA3AF", note: "Disabled — unavailable" }
            ].map((n, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: n.dot }} />
                <span style={{ fontSize: 11, color: "var(--slate,#6e6e6e)", fontWeight: 600 }}>{n.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── PAGE LAYOUT GRID ─── */}
      <div>
        <div style={{ fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 }}>Page Layout Grid</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
          {/* Dashboard layout */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate,#6e6e6e)", marginBottom: 10, letterSpacing: ".04em", textTransform: "uppercase" }}>Dashboard / Reports Layout</div>
            <div style={{ background: "var(--paper,#f5f3ee)", borderRadius: 12, padding: "12px", display: "flex", gap: 8 }}>
              <div style={{ width: 36, background: "#0f1220", borderRadius: 8, flexShrink: 0, display: "flex", flexDirection: "column", gap: 4, padding: "8px 5px" }}>
                <div style={{ height: 16, background: "#3D55CC", borderRadius: 4, marginBottom: 4 }} />
                {[0, 1, 2, 3, 4].map(k => (
                  <div key={k} style={{ height: 9, background: k === 1 ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.1)", borderRadius: 3 }} />
                ))}
              </div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6 }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 5 }}>
                  {["#3D55CC", "#10B981", "#F59E0B", "#8B5CF6"].map((c, k) => (
                    <div key={k} style={{ height: 30, background: "var(--white,#fff)", borderRadius: 6, borderTop: `2px solid ${c}` }} />
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 5 }}>
                  <div style={{ height: 50, background: "var(--white,#fff)", borderRadius: 6 }} />
                  <div style={{ height: 50, background: "var(--white,#fff)", borderRadius: 6 }} />
                </div>
                <div style={{ height: 32, background: "var(--white,#fff)", borderRadius: 6 }} />
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
              {[{ c: "#0f1220", l: "Sidebar nav (240px)" }, { c: "#3D55CC", l: "KPI row — 4 cols" }, { c: "#6B7280", l: "Chart 60/40 split" }].map((x, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 7, height: 7, borderRadius: 2, background: x.c }} />
                  <span style={{ fontSize: 11, color: "var(--slate,#6e6e6e)", fontWeight: 600 }}>{x.l}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Order entry layout */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "var(--slate,#6e6e6e)", marginBottom: 10, letterSpacing: ".04em", textTransform: "uppercase" }}>Order Entry (POS) Layout</div>
            <div style={{ background: "var(--paper,#f5f3ee)", borderRadius: 12, padding: "12px", display: "flex", gap: 8 }}>
              <div style={{ width: 36, background: "#0f1220", borderRadius: 8, flexShrink: 0, display: "flex", flexDirection: "column", gap: 4, padding: "8px 5px" }}>
                <div style={{ height: 16, background: "#3D55CC", borderRadius: 4, marginBottom: 4 }} />
                {[0, 1, 2, 3, 4].map(k => (
                  <div key={k} style={{ height: 9, background: k === 0 ? "rgba(255,255,255,.35)" : "rgba(255,255,255,.1)", borderRadius: 3 }} />
                ))}
              </div>
              <div style={{ flex: 1, display: "grid", gridTemplateColumns: "3fr 2fr", gap: 6 }}>
                <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                  <div style={{ height: 18, background: "var(--white,#fff)", borderRadius: 5 }} />
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 4 }}>
                    {[0, 1, 2, 3, 4, 5].map(k => (
                      <div key={k} style={{ height: 26, background: k === 0 ? "#EEF2FF" : "var(--white,#fff)", borderRadius: 4, border: k === 0 ? "1.5px solid #3D55CC" : "none" }} />
                    ))}
                  </div>
                </div>
                <div style={{ background: "var(--white,#fff)", borderRadius: 6, padding: 6, display: "flex", flexDirection: "column", gap: 4 }}>
                  {[14, 14, 14].map((h, k) => (
                    <div key={k} style={{ height: h, background: "var(--paper,#f5f3ee)", borderRadius: 3 }} />
                  ))}
                  <div style={{ flex: 1, minHeight: 10 }} />
                  <div style={{ height: 18, background: "#3D55CC", borderRadius: 5 }} />
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 8, flexWrap: "wrap" }}>
              {[{ c: "#3D55CC", l: "Item grid — 3 cols" }, { c: "#0A0A0A", l: "Cart sidebar (40%)" }, { c: "#10B981", l: "Pay CTA — pinned btm" }].map((x, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <div style={{ width: 7, height: 7, borderRadius: 2, background: x.c }} />
                  <span style={{ fontSize: 11, color: "var(--slate,#6e6e6e)", fontWeight: 600 }}>{x.l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Layout principles */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, marginTop: 16 }}>
          {[
            { rule: "Sidebar always 240px (desktop)", detail: "Fixed width prevents content reflow. Collapses to icon-only at tablet breakpoint (64px)." },
            { rule: "Content max-width: 1280px", detail: "Centered with 40px padding each side. Prevents ultra-wide stretching on large monitors." },
            { rule: "12-column grid internally", detail: "KPIs use 3-col (each 3/12). Charts use 7/12 + 5/12. Consistent rhythm across all pages." }
          ].map((r, i) => (
            <div key={i} style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 10, padding: "14px" }}>
              <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink,#0a0a0a)", marginBottom: 5, lineHeight: 1.3 }}>{r.rule}</div>
              <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.5 }}>{r.detail}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

/* ── Career Solution Design System ── */
function SectionDesignSystemCareer() {
  const P = "#10B981";       // primary green
  const PD = "#059669";      // deep green
  const MINT = "#F0FDF4";    // surface mint
  const INK = "#111827";
  const GRAY = "#6B7280";

  const colors = [
    { hex: P,       name: "Primary Green",  use: "Apply buttons, active nav, salary text, CTA" },
    { hex: PD,      name: "Deep Green",     use: "Profile header, progress bar fill, headings" },
    { hex: MINT,    name: "Mint Surface",   use: "App background, chip fill, icon backgrounds" },
    { hex: "#FFFFFF", name: "Card White",   use: "Job cards, list rows, modal surfaces" },
    { hex: INK,     name: "Rich Black",     use: "Job titles, screen headings, primary text" },
    { hex: GRAY,    name: "Neutral Gray",   use: "Company names, timestamps, secondary labels" },
  ];

  const typeScale = [
    { size: 24, weight: 700, label: "Display",   sample: "Find Opportunities",         use: "Screen titles" },
    { size: 20, weight: 700, label: "Heading",   sample: "Track Your Progress",         use: "Section headers" },
    { size: 16, weight: 600, label: "Job Title", sample: "Senior Product Designer",     use: "Job & card titles" },
    { size: 14, weight: 400, label: "Body",      sample: "Gojek · Jakarta · Full-time", use: "Company, location, desc" },
    { size: 13, weight: 500, label: "Salary",    sample: "Rp 22,000,000 – 35,000,000",  use: "Salary range (green)" },
    { size: 11, weight: 600, label: "Label",     sample: "REMOTE · APPLIED · 2W AGO",   use: "Tags & timestamps (caps)" },
  ];

  const statusBadges = [
    { label: "Applied",    bg: "#F0FDF4", color: "#059669", border: "#6EE7B7" },
    { label: "Review",     bg: "#F9FAFB", color: "#6B7280", border: "#D1D5DB" },
    { label: "Approved",   bg: "#ECFDF5", color: "#065F46", border: "#34D399" },
    { label: "Rejected",   bg: "#FEF2F2", color: "#DC2626", border: "#FCA5A5" },
  ];

  const workTags = [
    { label: "Remote",     bg: "#F0FDF4", color: "#059669" },
    { label: "Hybrid",     bg: "#F0FDF4", color: "#059669" },
    { label: "Full-time",  bg: "#F0FDF4", color: "#059669" },
    { label: "On-site",    bg: "#FFF7ED", color: "#D97706" },
    { label: "3-5 Yrs Exp",bg: "#FFF7ED", color: "#D97706" },
    { label: "Product",    bg: "#EEF2FF", color: "#4F46E5" },
  ];

  // Nav tabs data
  const navTabs = [
    { label: "Home",     icon: "⌂", active: false },
    { label: "Search",   icon: "⌕", active: true  },
    { label: "My Jobs",  icon: "⬡", active: false },
    { label: "Messages", icon: "✉", active: false },
    { label: "Profile",  icon: "◉", active: false },
  ];

  const LABEL_STYLE = { fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: "var(--mute,#8a8880)", marginBottom: 14 };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>

      {/* ── Color Palette ── */}
      <div>
        <div style={LABEL_STYLE}>Color Palette</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 10 }}>
          {colors.map((c, i) => (
            <div key={i}>
              <div style={{
                height: 52, borderRadius: 10, background: c.hex, marginBottom: 8,
                border: c.hex === "#FFFFFF" ? "1px solid var(--hair,#e8e6e0)" : "none",
                boxShadow: c.hex === "#FFFFFF" ? "none" : "0 2px 8px " + c.hex + "55"
              }} />
              <div style={{ fontSize: 13, fontWeight: 700, color: INK }}>{c.name}</div>
              <div style={{ fontSize: 11, color: GRAY, fontFamily: "monospace", marginTop: 1 }}>{c.hex}</div>
              <div style={{ fontSize: 11, color: GRAY, marginTop: 3, lineHeight: 1.4 }}>{c.use}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Typography ── */}
      <div>
        <div style={LABEL_STYLE}>Typography — Inter</div>
        <div style={{ background: "#fff", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, overflow: "hidden" }}>
          {typeScale.map((t, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "100px 1fr 140px",
              padding: "11px 18px", gap: 16, alignItems: "center",
              borderTop: i > 0 ? "1px solid var(--hair,#f0ede8)" : "none",
              background: i % 2 === 0 ? "#fff" : MINT + "44"
            }}>
              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: INK }}>{t.size}px / {t.weight}</div>
                <div style={{ fontSize: 11, color: GRAY, marginTop: 1 }}>{t.label}</div>
              </div>
              <div style={{
                fontSize: Math.min(t.size, 18), fontWeight: t.weight,
                color: t.label === "Salary" ? P : INK,
                fontFamily: "'Inter', 'Manrope', sans-serif",
                textTransform: t.label === "Label" ? "uppercase" : "none",
                letterSpacing: t.label === "Label" ? ".06em" : "normal",
                lineHeight: 1.3, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"
              }}>{t.sample}</div>
              <div style={{ fontSize: 12, color: GRAY }}>{t.use}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Job Card Anatomy ── */}
      <div>
        <div style={LABEL_STYLE}>Job Card Anatomy</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, alignItems: "start" }}>
          {/* Live card */}
          <div style={{ background: "#fff", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 14, padding: "16px", boxShadow: "0 2px 8px rgba(0,0,0,.06)" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              {/* Company icon */}
              <div style={{
                width: 44, height: 44, borderRadius: 10, background: MINT,
                border: "1px solid #D1FAE5", flexShrink: 0,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 18
              }}>◎</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ fontSize: 16, fontWeight: 600, color: INK, lineHeight: 1.2 }}>Senior Product Designer</div>
                  <div style={{ fontSize: 11, color: GRAY, whiteSpace: "nowrap", marginLeft: 8 }}>2w ago</div>
                </div>
                {/* Company */}
                <div style={{ fontSize: 13, color: GRAY, marginTop: 2 }}>Gojek · Jakarta</div>
                {/* Salary */}
                <div style={{ fontSize: 13, fontWeight: 500, color: P, marginTop: 6 }}>Rp 22,000,000 – 35,000,000</div>
                {/* Tags row */}
                <div style={{ display: "flex", gap: 6, marginTop: 8, alignItems: "center", flexWrap: "wrap" }}>
                  {[{ label: "Remote", bg: MINT, color: PD }, { label: "Full-time", bg: MINT, color: PD }].map((tag, j) => (
                    <span key={j} style={{ fontSize: 11, fontWeight: 600, background: tag.bg, color: tag.color, padding: "3px 9px", borderRadius: 99, border: "1px solid #D1FAE5" }}>{tag.label}</span>
                  ))}
                  <div style={{ marginLeft: "auto", display: "flex", gap: 8, alignItems: "center" }}>
                    <span style={{ fontSize: 16, color: "#FCD34D" }}>★</span>
                    <button style={{ background: P, color: "#fff", border: "none", borderRadius: 8, padding: "5px 14px", fontSize: 13, fontWeight: 700, cursor: "pointer", fontFamily: "inherit" }}>Apply</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Annotation rules */}
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {[
              { rule: "Company icon always 44×44 with mint bg", detail: "Consistent size creates a stable scan line down the left edge of every listing." },
              { rule: "Salary in Primary Green — always visible", detail: "Salary is the #1 filter criterion. It's shown before tags so candidates never need to hunt for it." },
              { rule: "Work-type tags before experience tags", detail: "Remote/Full-time answers the where/how first, then experience tells seniority required." },
              { rule: "Apply button inline — no navigation needed", detail: "Quick-apply from the list reduces friction from 8 steps to 1 tap for returning users." },
              { rule: "Star save is always adjacent to Apply", detail: "Save and apply are the only two primary actions. They share the same row to reduce decision cost." },
            ].map((r, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <div style={{ width: 20, height: 20, borderRadius: 6, background: MINT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: PD }}>{i + 1}</span>
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>{r.rule}</div>
                  <div style={{ fontSize: 13, color: GRAY, lineHeight: 1.5 }}>{r.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tag & Status System ── */}
      <div>
        <div style={LABEL_STYLE}>Tag & Status System</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Application status */}
          <div style={{ background: "#fff", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, padding: "16px 20px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: GRAY, textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 12 }}>Application Status</div>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {statusBadges.map((b, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, padding: "5px 14px", borderRadius: 8, background: b.bg, color: b.color, border: `1px solid ${b.border}` }}>{b.label}</span>
                  <span style={{ fontSize: 11, color: GRAY }}>{["Submitted", "Recruiter reviewing", "Shortlisted", "Not moving forward"][i]}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Work type & experience tags */}
          <div style={{ background: "#fff", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, padding: "16px 20px" }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: GRAY, textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 12 }}>Work Type & Experience Tags</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {workTags.map((t, i) => (
                <span key={i} style={{ fontSize: 12, fontWeight: 600, padding: "4px 12px", borderRadius: 99, background: t.bg, color: t.color, border: `1px solid ${t.color}33` }}>{t.label}</span>
              ))}
            </div>
            <div style={{ marginTop: 12, fontSize: 13, color: GRAY, lineHeight: 1.6 }}>
              <strong style={{ color: PD }}>Green tags</strong> = work arrangement & contract type.{" "}
              <strong style={{ color: "#D97706" }}>Amber tags</strong> = location type & experience level.{" "}
              <strong style={{ color: "#4F46E5" }}>Indigo tags</strong> = job category / domain.
            </div>
          </div>
        </div>
      </div>

      {/* ── Button System ── */}
      <div>
        <div style={LABEL_STYLE}>Button System</div>
        <div style={{ background: "#fff", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, padding: "20px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
            {/* Variants */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: GRAY, textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 14 }}>Variants</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  { label: "Primary — Full-width Apply",  btn: { bg: P,    color: "#fff", border: "none",             text: "Apply Now",            radius: 12, pad: "13px 20px", width: "100%" } },
                  { label: "Secondary — Outlined Save",   btn: { bg: "#fff", color: P,   border: `1.5px solid ${P}`,  text: "Save Job",             radius: 10, pad: "10px 20px", width: "100%" } },
                  { label: "Ghost — Text Action",         btn: { bg: "transparent", color: P, border: "none",         text: "Add / Create Resume →", radius: 8,  pad: "8px 0",    width: "auto" } },
                  { label: "Disabled",                    btn: { bg: "#F3F4F6", color: "#9CA3AF", border: "none",     text: "Apply Now",            radius: 12, pad: "13px 20px", width: "100%", cursor: "not-allowed" } },
                ].map((v, i) => (
                  <div key={i}>
                    <div style={{ fontSize: 12, color: GRAY, marginBottom: 5 }}>{v.label}</div>
                    <button style={{ background: v.btn.bg, color: v.btn.color, border: v.btn.border, borderRadius: v.btn.radius, padding: v.btn.pad, fontSize: 14, fontWeight: 700, cursor: v.btn.cursor || "pointer", fontFamily: "inherit", width: v.btn.width, display: "block", textAlign: "center" }}>
                      {v.btn.text}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* Rules */}
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: GRAY, textTransform: "uppercase", letterSpacing: ".05em", marginBottom: 14 }}>Mobile-First Rules</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {[
                  { rule: "Full-width primary on mobile", detail: "Apply and Continue buttons span full width — thumb reach is the constraint, not aesthetics." },
                  { rule: "Minimum 44px touch target height", detail: "iOS HIG requirement. Smaller targets cause missed taps and frustration on job-hunting sessions." },
                  { rule: "Primary green only for forward progression", detail: "Apply, Continue, Next. Never for Cancel or Back — those are text or ghost only." },
                  { rule: "Sticky CTA at bottom of long screens", detail: "The Apply/Continue button is pinned to the bottom so it's always reachable after reading a long job description." },
                ].map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 9, alignItems: "flex-start" }}>
                    <div style={{ width: 18, height: 18, borderRadius: 5, background: MINT, border: `1px solid #D1FAE5`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                      <span style={{ fontSize: 11, fontWeight: 800, color: PD }}>{i + 1}</span>
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 800, color: INK, marginBottom: 2 }}>{r.rule}</div>
                      <div style={{ fontSize: 13, color: GRAY, lineHeight: 1.5 }}>{r.detail}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Navigation ── */}
      <div>
        <div style={LABEL_STYLE}>Bottom Navigation Component</div>
        <div style={{ display: "grid", gridTemplateColumns: "280px 1fr", gap: 24, alignItems: "start" }}>
          {/* Live nav preview in phone frame */}
          <div>
            <div style={{ background: MINT, borderRadius: 14, padding: "12px 12px 8px", border: "1px solid #D1FAE5" }}>
              {/* Mini screen content */}
              <div style={{ background: "#fff", borderRadius: 10, padding: "12px", marginBottom: 8, minHeight: 80 }}>
                <div style={{ fontSize: 10, color: GRAY, marginBottom: 4 }}>Discover Jobs 🔍</div>
                <div style={{ fontSize: 15, fontWeight: 700, color: INK }}>Find Opportunities</div>
                <div style={{ marginTop: 8, height: 28, background: "#F9FAFB", borderRadius: 7, display: "flex", alignItems: "center", paddingLeft: 10 }}>
                  <span style={{ fontSize: 11, color: "#9CA3AF" }}>🔍 Search job title, company...</span>
                </div>
              </div>
              {/* Bottom tab bar */}
              <div style={{ background: "#fff", borderRadius: 10, padding: "8px 4px 4px", display: "flex", justifyContent: "space-around", borderTop: "1px solid var(--hair,#e8e6e0)" }}>
                {navTabs.map((tab, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, padding: "2px 8px" }}>
                    <span style={{ fontSize: 16, color: tab.active ? P : "#9CA3AF", lineHeight: 1 }}>{tab.icon}</span>
                    <span style={{ fontSize: 9, fontWeight: tab.active ? 700 : 400, color: tab.active ? P : "#9CA3AF" }}>{tab.label}</span>
                    {tab.active && <div style={{ width: 4, height: 4, borderRadius: "50%", background: P }} />}
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Nav rules */}
          <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
            {[
              { tab: "Home",     color: PD, role: "Dashboard — profile completion, latest applications, recommended jobs" },
              { tab: "Search",   color: "#4F46E5", role: "Discovery — full job catalog with real-time search and filters" },
              { tab: "My Jobs",  color: "#D97706", role: "Tracker — all submitted applications with live status pipeline" },
              { tab: "Messages", color: "#0EA5E9", role: "Recruiter inbox — one thread per application, context-linked" },
              { tab: "Profile",  color: "#8B5CF6", role: "Identity — resume library, profile completeness, subscription" },
            ].map((t, i) => (
              <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                <span style={{ fontSize: 13, fontWeight: 800, color: t.color, background: t.color + "18", padding: "3px 10px", borderRadius: 6, whiteSpace: "nowrap", flexShrink: 0, minWidth: 80, textAlign: "center" }}>{t.tab}</span>
                <span style={{ fontSize: 13, color: GRAY, lineHeight: 1.6, paddingTop: 2 }}>{t.role}</span>
              </div>
            ))}
            <div style={{ marginTop: 4, background: MINT, borderRadius: 10, padding: "12px 14px", border: "1px solid #D1FAE5" }}>
              <div style={{ fontSize: 13, color: PD, lineHeight: 1.6 }}>
                <strong>Design principle:</strong> each tab maps to exactly one mental model — Find, Track, Communicate, Identity. No overlap forces clarity on what lives where.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Input Fields ── */}
      <div>
        <div style={LABEL_STYLE}>Input Field States</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }}>
          {[
            { state: "Default",  border: "#E5E7EB", shadow: "none",                          bg: "#fff",     val: null,              helper: "Search by title, company, keyword",       helperColor: GRAY },
            { state: "Focus",    border: P,          shadow: `0 0 0 3px ${P}22`,              bg: "#fff",     val: "Product Design",   helper: "Showing results for your query",           helperColor: PD },
            { state: "Error",    border: "#EF4444",  shadow: "0 0 0 3px rgba(239,68,68,.12)", bg: "#FEF9F9",  val: "",                 helper: "⚠ Please enter a job title or keyword",   helperColor: "#DC2626" },
            { state: "Disabled", border: "#E5E7EB",  shadow: "none",                          bg: "#F9FAFB",  val: "Jakarta",          helper: "Location locked to your profile region",  helperColor: "#9CA3AF" },
          ].map((inp, i) => (
            <div key={i}>
              <div style={{ fontSize: 11, fontWeight: 700, color: INK, textTransform: "uppercase", letterSpacing: ".06em", marginBottom: 5 }}>Job Title <span style={{ color: "#EF4444" }}>*</span></div>
              <div style={{
                background: inp.bg, border: `1.5px solid ${inp.border}`, borderRadius: 10,
                padding: "9px 12px", fontSize: 14, color: inp.state === "Disabled" ? "#9CA3AF" : INK,
                boxShadow: inp.shadow, cursor: inp.state === "Disabled" ? "not-allowed" : "text",
                marginBottom: 5, minHeight: 40, display: "flex", alignItems: "center"
              }}>
                {inp.val != null && inp.val !== "" ? inp.val : <span style={{ color: "#9CA3AF" }}>Search jobs…</span>}
              </div>
              <div style={{ fontSize: 12, color: inp.helperColor, lineHeight: 1.4 }}>{inp.helper}</div>
              <div style={{ fontSize: 11, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".06em", color: GRAY, marginTop: 10, textAlign: "center", borderTop: "1px solid var(--hair,#f0ede8)", paddingTop: 5 }}>{inp.state}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

/* ── SkillBoost Design System ── */
function SectionDesignSystemSkillBoost() {
  const P   = "#4F46E5";   // primary indigo
  const PD  = "#3730A3";   // deep indigo
  const ACC = "#10B981";   // accent green (success/enrolled)
  const YEL = "#F59E0B";   // star rating yellow
  const INK = "#111827";
  const GRAY = "#6B7280";

  const colors = [
    { hex: P,       name: "Primary Indigo",  use: "CTAs, active nav, enroll buttons, highlights" },
    { hex: PD,      name: "Deep Indigo",     use: "Headers, pressed states, gradient dark end" },
    { hex: ACC,     name: "Success Green",   use: "Progress fill, enrolled badge, payment success" },
    { hex: YEL,     name: "Star Yellow",     use: "Course ratings, bestseller badges" },
    { hex: "#F5F5FF", name: "Lavender Tint", use: "App background, card surfaces, filter pills" },
    { hex: INK,     name: "Rich Black",      use: "Course titles, screen headings, primary text" },
    { hex: GRAY,    name: "Neutral Gray",    use: "Instructor names, timestamps, secondary labels" },
  ];

  const typeScale = [
    { size: 24, weight: 700, label: "Display",     sample: "My Library",                      use: "Screen titles" },
    { size: 20, weight: 700, label: "Heading",     sample: "Course Recommendation",            use: "Section headers" },
    { size: 16, weight: 600, label: "Course Title",sample: "Advanced Figma Pro",               use: "Course & card titles" },
    { size: 14, weight: 400, label: "Body",        sample: "By Sarah Williams · 32hrs",        use: "Instructor, duration, desc" },
    { size: 13, weight: 600, label: "Price",       sample: "Rp 200,000",                       use: "Price (indigo), Grand Total" },
    { size: 11, weight: 700, label: "Badge",       sample: "BESTSELLER · INCOMING · RUNNING",  use: "Status & category badges (caps)" },
  ];

  const cardColors = { card: "#fff", border: "#E0E7FF" };

  const statusBadges = [
    { label: "BESTSELLER", bg: "#FEF3C7", color: "#92400E" },
    { label: "NEW THIS WEEK", bg: "#D1FAE5", color: "#065F46" },
    { label: "TRENDING NOW", bg: "#EDE9FE", color: "#4C1D95" },
    { label: "INCOMING", bg: "#DBEAFE", color: "#1E40AF" },
    { label: "RUNNING", bg: "#D1FAE5", color: "#065F46" },
    { label: "MARKETING", bg: "#FEE2E2", color: "#991B1B" },
    { label: "DESIGN", bg: "#EDE9FE", color: "#4C1D95" },
  ];

  const catTabs = [
    { label: "All", active: true },
    { label: "Design" },
    { label: "Coding" },
    { label: "Business" },
    { label: "Marketing" },
  ];

  const payMethods = [
    { label: "Card", active: true },
    { label: "E-Wallet" },
    { label: "Bank" },
  ];

  const navTabs = [
    { label: "Home", icon: "🏠" },
    { label: "Library", icon: "📚" },
    { label: "Explore", icon: "🔍" },
    { label: "Profile", icon: "👤" },
  ];

  const box = (style, children) => (
    <div style={{ background: cardColors.card, border: `1.5px solid ${cardColors.border}`, borderRadius: 14, padding: "18px 20px", ...style }}>{children}</div>
  );

  const chip = (label, active) => (
    <span style={{
      display: "inline-block", padding: "6px 14px", borderRadius: 20, fontSize: 12, fontWeight: 600,
      background: active ? P : "#E0E7FF", color: active ? "#fff" : P, marginRight: 6, marginBottom: 6,
    }}>{label}</span>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

      {/* Color palette */}
      {box({}, <>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", color: GRAY, marginBottom: 14, textTransform: "uppercase" }}>Color Palette</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 10 }}>
          {colors.map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: c.hex, flexShrink: 0, border: c.hex === "#F5F5FF" || c.hex === "#fff" ? "1px solid #E0E7FF" : "none" }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: INK }}>{c.name}</div>
                <div style={{ fontSize: 10, color: GRAY, fontFamily: "monospace" }}>{c.hex}</div>
                <div style={{ fontSize: 10, color: GRAY, lineHeight: 1.4 }}>{c.use}</div>
              </div>
            </div>
          ))}
        </div>
      </>)}

      {/* Typography scale */}
      {box({}, <>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", color: GRAY, marginBottom: 14, textTransform: "uppercase" }}>Typography Scale — Inter</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {typeScale.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 14, borderBottom: i < typeScale.length - 1 ? "1px solid #F0F0FF" : "none", paddingBottom: i < typeScale.length - 1 ? 12 : 0 }}>
              <div style={{ width: 80, flexShrink: 0 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: P, background: "#E0E7FF", padding: "2px 7px", borderRadius: 4 }}>{t.label}</span>
              </div>
              <div style={{ flex: 1, fontSize: t.size > 18 ? 18 : t.size, fontWeight: t.weight, color: t.label === "Price" ? P : INK, lineHeight: 1.2 }}>{t.sample}</div>
              <div style={{ fontSize: 10, color: GRAY, flexShrink: 0 }}>{t.size}px / {t.weight}</div>
            </div>
          ))}
        </div>
      </>)}

      {/* Course card anatomy */}
      {box({}, <>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", color: GRAY, marginBottom: 14, textTransform: "uppercase" }}>Course Card Anatomy</div>
        <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ background: "#fff", border: "1.5px solid #E0E7FF", borderRadius: 14, padding: 14, width: 180, flexShrink: 0 }}>
            <div style={{ background: "#E0E7FF", borderRadius: 8, height: 100, marginBottom: 10, position: "relative", display: "flex", alignItems: "flex-start", padding: 8 }}>
              <span style={{ background: YEL, color: "#fff", fontSize: 9, fontWeight: 700, padding: "3px 8px", borderRadius: 4, letterSpacing: ".05em" }}>BESTSELLER</span>
            </div>
            <div style={{ fontSize: 13, fontWeight: 700, color: INK, marginBottom: 3 }}>Advanced Figma Pro</div>
            <div style={{ fontSize: 11, color: GRAY, marginBottom: 8 }}>By Sarah W.</div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 12, color: YEL, fontWeight: 600 }}>★ 4.8</span>
              <span style={{ fontSize: 13, fontWeight: 700, color: P }}>Rp 200K</span>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 160 }}>
            {[
              ["Thumbnail area", "Course cover image. Consistent 16:9 ratio for visual uniformity in grid."],
              ["Status badge", "BESTSELLER / NEW / TRENDING — yellow, green, or purple tint, top-left."],
              ["Course title", "16px / 700. Max 2 lines — truncated with ellipsis on overflow."],
              ["Instructor name", "14px / 400, gray. 'By [Name]' format — always below title."],
              ["Rating + Price", "Star rating left (yellow), price right (indigo bold). Always bottom row."],
            ].map(([rule, desc], i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <span style={{ background: P, color: "#fff", width: 20, height: 20, borderRadius: "50%", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: INK }}>{rule}</div>
                  <div style={{ fontSize: 11, color: GRAY, lineHeight: 1.4 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>)}

      {/* Badge + category system */}
      {box({}, <>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", color: GRAY, marginBottom: 14, textTransform: "uppercase" }}>Badge & Status System</div>
        <div style={{ marginBottom: 12 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: INK, marginBottom: 8 }}>Course Badges</div>
          <div>{statusBadges.map((b, i) => (
            <span key={i} style={{ display: "inline-block", background: b.bg, color: b.color, fontSize: 10, fontWeight: 700, padding: "4px 10px", borderRadius: 4, marginRight: 6, marginBottom: 6, letterSpacing: ".06em" }}>{b.label}</span>
          ))}</div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: INK, marginBottom: 8 }}>Category Filter Tabs</div>
          <div>{catTabs.map((t, i) => chip(t.label, t.active))}</div>
        </div>
      </>)}

      {/* Button system */}
      {box({}, <>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", color: GRAY, marginBottom: 14, textTransform: "uppercase" }}>Button System</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "★  Enroll Now", bg: `linear-gradient(90deg,${P},${PD})`, color: "#fff", desc: "Primary — course enrollment & payment CTA. Full-width, 52px height." },
            { label: "Pay Rp 200,000", bg: `linear-gradient(90deg,${P},#7C3AED)`, color: "#fff", desc: "Payment — gradient indigo-to-purple. Same height, high visual weight." },
            { label: "Register Now", bg: "#fff", color: P, border: `2px solid ${P}`, desc: "Secondary outlined — seminar registration. White fill, indigo border." },
            { label: "Start Free", bg: ACC, color: "#fff", desc: "Free CTA — green fill, used for free/freemium entry points." },
            { label: "Enroll Now", bg: "#E0E7FF", color: P, desc: "Ghost variant — used on banner slides where full fill would clash." },
          ].map((btn, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ background: btn.bg, color: btn.color, border: btn.border || "none", borderRadius: 12, padding: "11px 22px", fontSize: 13, fontWeight: 700, minWidth: 160, textAlign: "center", flexShrink: 0 }}>{btn.label}</div>
              <div style={{ fontSize: 11, color: GRAY, lineHeight: 1.4 }}>{btn.desc}</div>
            </div>
          ))}
        </div>
      </>)}

      {/* Payment methods */}
      {box({}, <>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", color: GRAY, marginBottom: 14, textTransform: "uppercase" }}>Payment Method Selector</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
          {payMethods.map((m, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center", padding: "10px 0", borderRadius: 10, background: m.active ? P : "#F5F5FF", color: m.active ? "#fff" : GRAY, fontSize: 13, fontWeight: 700, border: m.active ? "none" : `1.5px solid #E0E7FF` }}>{m.label}</div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: GRAY, lineHeight: 1.6 }}>
          Three payment methods: Card (default, shows card form), E-Wallet (shows QR/wallet list), Bank (shows VA numbers). Selected tab fills indigo. Inline form fields appear below the selector — no page navigation.
        </div>
      </>)}

      {/* Bottom navigation */}
      {box({}, <>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", color: GRAY, marginBottom: 14, textTransform: "uppercase" }}>Bottom Navigation</div>
        <div style={{ display: "flex", background: "#fff", border: "1.5px solid #E0E7FF", borderRadius: 18, padding: "12px 8px", marginBottom: 14, justifyContent: "space-around" }}>
          {navTabs.map((tab, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, opacity: i === 0 ? 1 : 0.45 }}>
              <span style={{ fontSize: 20 }}>{tab.icon}</span>
              <span style={{ fontSize: 10, fontWeight: i === 0 ? 700 : 400, color: i === 0 ? P : GRAY }}>{tab.label}</span>
              {i === 0 && <div style={{ width: 4, height: 4, borderRadius: "50%", background: P }} />}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            ["Home", "Featured banner + course feed + upcoming seminars. Entry point to explore."],
            ["Library", "Enrolled courses with progress bars + registered events."],
            ["Explore", "Search with category tabs, recommendations, top instructors, popular courses."],
            ["Profile", "Subscription tier, personal info, earned certificates, logout."],
          ].map(([tab, desc], i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ background: "#E0E7FF", color: P, fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4, flexShrink: 0 }}>{tab}</span>
              <span style={{ fontSize: 11, color: GRAY, lineHeight: 1.5 }}>{desc}</span>
            </div>
          ))}
        </div>
      </>)}

    </div>
  );
}

/* ── Did You Eat Design System ── */
function SectionDesignSystemDye() {
  const P    = "#0F7B6C";   // primary teal
  const PD   = "#065F52";   // deep teal
  const MINT = "#F0FDF9";   // surface mint
  const INK  = "#1A1A1A";
  const GRAY = "#6B7280";

  const colors = [
    { hex: P,       name: "Primary Teal",   use: "Log button, active nav, CTA buttons, badges" },
    { hex: PD,      name: "Deep Teal",      use: "Pressed states, gradient dark end, icons" },
    { hex: MINT,    name: "Mint Surface",   use: "App background, card surfaces, input fills" },
    { hex: "#FFFFFF", name: "Pure White",   use: "Meal cards, modal sheets, detail panels" },
    { hex: INK,     name: "Rich Black",     use: "Food names, headings, primary labels" },
    { hex: GRAY,    name: "Neutral Gray",   use: "Locations, timestamps, secondary text" },
  ];

  const typeScale = [
    { size: 22, weight: 700, label: "Display",   sample: "Hello, Tanaka",            use: "Home greeting, screen titles" },
    { size: 18, weight: 700, label: "Heading",   sample: "Logging Preference",        use: "Section headers" },
    { size: 16, weight: 700, label: "Food Name", sample: "Spaghetti",                 use: "Meal card title, detail title" },
    { size: 14, weight: 400, label: "Body",      sample: "Home · Wednesday, 24 June", use: "Location, date, descriptions" },
    { size: 13, weight: 500, label: "Meta",      sample: "19:00 · Dinner",            use: "Time and type label on cards" },
    { size: 11, weight: 700, label: "Badge",     sample: "BREAKFAST · SNACK",         use: "Meal type badges (caps)" },
  ];

  const feelingBadges = [
    { emoji: "😊", label: "Feeling Good",  bg: "#D1FAE5", color: "#065F46" },
    { emoji: "😐", label: "Just Okay",     bg: "#F3F4F6", color: "#374151" },
    { emoji: "😤", label: "A Bit Stressed",bg: "#FEE2E2", color: "#991B1B" },
    { emoji: "😴", label: "Low Energy",    bg: "#DBEAFE", color: "#1E40AF" },
  ];

  const mealTypeBadges = [
    { label: "Breakfast", bg: "#FEF3C7", color: "#92400E" },
    { label: "Lunch",     bg: "#D1FAE5", color: "#065F46" },
    { label: "Dinner",    bg: "#EDE9FE", color: "#4C1D95" },
    { label: "Snack",     bg: "#FEE2E2", color: "#991B1B" },
  ];

  const reflectionTags = [
    { label: "Today",      bg: "#FED7AA", color: "#92400E" },
    { label: "This Week",  bg: "#DBEAFE", color: "#1E40AF" },
    { label: "This Month", bg: "#EDE9FE", color: "#4C1D95" },
  ];

  const toggles = [
    { label: "Camera First",      desc: "Show camera first when add new log", on: true },
    { label: "Auto Time Meal",    desc: "Auto-detect meal type based on time", on: true },
    { label: "Meal Reminder",     desc: "A simple reminder when it's time to eat", on: false },
    { label: "Missed Meal Check", desc: "Reminder when you missed Breakfast or others", on: true },
  ];

  const navTabs = [
    { icon: "🏠", label: "Home",    active: true },
    { icon: "➕", label: "Add Log", active: false },
    { icon: "📋", label: "Logs",    active: false },
  ];

  const box = (style, children) => (
    <div style={{ background: "#fff", border: "1.5px solid #E5F3F0", borderRadius: 14, padding: "18px 20px", ...style }}>{children}</div>
  );

  const sectionLabel = (text) => (
    <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: ".08em", color: GRAY, marginBottom: 14, textTransform: "uppercase" }}>{text}</div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

      {/* Color palette */}
      {box({}, <>
        {sectionLabel("Color Palette")}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(160px,1fr))", gap: 10 }}>
          {colors.map((c, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <div style={{ width: 36, height: 36, borderRadius: 8, background: c.hex, flexShrink: 0, border: c.hex === "#FFFFFF" || c.hex === MINT ? "1px solid #C6E9E3" : "none" }} />
              <div>
                <div style={{ fontSize: 11, fontWeight: 700, color: INK }}>{c.name}</div>
                <div style={{ fontSize: 10, color: GRAY, fontFamily: "monospace" }}>{c.hex}</div>
                <div style={{ fontSize: 10, color: GRAY, lineHeight: 1.4 }}>{c.use}</div>
              </div>
            </div>
          ))}
        </div>
      </>)}

      {/* Typography */}
      {box({}, <>
        {sectionLabel("Typography Scale — Inter")}
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {typeScale.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 14, borderBottom: i < typeScale.length - 1 ? "1px solid #F0FDF9" : "none", paddingBottom: i < typeScale.length - 1 ? 12 : 0 }}>
              <div style={{ width: 80, flexShrink: 0 }}>
                <span style={{ fontSize: 10, fontWeight: 700, color: P, background: "#C6E9E3", padding: "2px 7px", borderRadius: 4 }}>{t.label}</span>
              </div>
              <div style={{ flex: 1, fontSize: Math.min(t.size, 18), fontWeight: t.weight, color: INK, lineHeight: 1.2 }}>{t.sample}</div>
              <div style={{ fontSize: 10, color: GRAY, flexShrink: 0 }}>{t.size}px / {t.weight}</div>
            </div>
          ))}
        </div>
      </>)}

      {/* Meal card anatomy */}
      {box({}, <>
        {sectionLabel("Meal Card Anatomy")}
        <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
          <div style={{ background: "#fff", border: "1.5px solid #E5F3F0", borderRadius: 14, padding: 14, width: 200, flexShrink: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: "#FDE68A", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22 }}>🍝</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: INK }}>Spaghetti</div>
                <div style={{ fontSize: 12, color: GRAY }}>Home</div>
              </div>
              <div style={{ textAlign: "right" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: INK }}>19:00</div>
                <div style={{ fontSize: 11, color: GRAY }}>Dinner</div>
              </div>
            </div>
          </div>
          <div style={{ flex: 1, minWidth: 160 }}>
            {[
              ["Food emoji icon", "Square thumbnail with rounded corners. Colored background per food category."],
              ["Food name", "16px / 700, black. Primary identity of the log entry."],
              ["Location", "14px / 400, gray. Where the meal was eaten (Home / Office / etc)."],
              ["Time", "13px / 600, right-aligned. Exact time the meal was logged."],
              ["Meal type", "11px / gray, right-aligned below time. Breakfast / Lunch / Dinner / Snack."],
            ].map(([rule, desc], i) => (
              <div key={i} style={{ display: "flex", gap: 10, marginBottom: 10 }}>
                <span style={{ background: P, color: "#fff", width: 20, height: 20, borderRadius: "50%", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: INK }}>{rule}</div>
                  <div style={{ fontSize: 11, color: GRAY, lineHeight: 1.4 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>)}

      {/* Feeling + Meal Type badges */}
      {box({}, <>
        {sectionLabel("Badge System")}
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: INK, marginBottom: 8 }}>Feeling Badges</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {feelingBadges.map((b, i) => (
              <span key={i} style={{ background: b.bg, color: b.color, fontSize: 12, fontWeight: 600, padding: "5px 12px", borderRadius: 20 }}>{b.emoji} {b.label}</span>
            ))}
          </div>
          <div style={{ fontSize: 11, color: GRAY, marginTop: 6, lineHeight: 1.5 }}>Attached to every log on the timeline and in meal detail. Captured at log time via a dropdown.</div>
        </div>
        <div style={{ marginBottom: 16 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: INK, marginBottom: 8 }}>Meal Type Badges</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {mealTypeBadges.map((b, i) => (
              <span key={i} style={{ background: b.bg, color: b.color, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 6, letterSpacing: ".04em" }}>{b.label}</span>
            ))}
          </div>
        </div>
        <div>
          <div style={{ fontSize: 11, fontWeight: 600, color: INK, marginBottom: 8 }}>Reflection Period Tags</div>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {reflectionTags.map((b, i) => (
              <span key={i} style={{ background: b.bg, color: b.color, fontSize: 11, fontWeight: 700, padding: "4px 12px", borderRadius: 6 }}>{b.label}</span>
            ))}
          </div>
        </div>
      </>)}

      {/* Toggle system */}
      {box({}, <>
        {sectionLabel("Settings Toggle System")}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {toggles.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 0", borderBottom: i < toggles.length - 1 ? "1px solid #F0FDF9" : "none" }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: INK }}>{t.label}</div>
                <div style={{ fontSize: 12, color: GRAY }}>{t.desc}</div>
              </div>
              <div style={{ width: 44, height: 26, borderRadius: 13, background: t.on ? P : "#D1D5DB", display: "flex", alignItems: "center", padding: "2px", flexShrink: 0, marginLeft: 16 }}>
                <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#fff", transform: t.on ? "translateX(18px)" : "translateX(0)", transition: "transform .2s" }} />
              </div>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 11, color: GRAY, marginTop: 10, lineHeight: 1.5 }}>All preferences use iOS-style toggles. Teal = on, gray = off. Auto Time Meal and Camera First are on by default.</div>
      </>)}

      {/* Button system */}
      {box({}, <>
        {sectionLabel("Button System")}
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "Add New Log", bg: P, color: "#fff", desc: "Primary CTA — full-width, 52px, rounded. Appears at bottom of Add Log form." },
            { label: "Edit Log", bg: P, color: "#fff", desc: "Secondary action — same style as primary, appears in Meal Detail screen." },
            { label: "Save Email", bg: PD, color: "#fff", desc: "Sheet action — appears inside bottom sheets for confirming changes." },
            { label: "Next →", bg: "#fff", color: P, border: `2px solid ${P}`, desc: "Ghost outlined — used in multi-step log flow (preview → form)." },
          ].map((btn, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ background: btn.bg, color: btn.color, border: btn.border || "none", borderRadius: 12, padding: "11px 24px", fontSize: 13, fontWeight: 700, minWidth: 160, textAlign: "center", flexShrink: 0 }}>{btn.label}</div>
              <div style={{ fontSize: 11, color: GRAY, lineHeight: 1.4 }}>{btn.desc}</div>
            </div>
          ))}
        </div>
      </>)}

      {/* Bottom navigation */}
      {box({}, <>
        {sectionLabel("Bottom Navigation")}
        <div style={{ display: "flex", background: "#fff", border: "1.5px solid #E5F3F0", borderRadius: 18, padding: "12px 8px", marginBottom: 14, justifyContent: "space-around" }}>
          {navTabs.map((tab, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>
              {i === 1
                ? <div style={{ width: 44, height: 44, borderRadius: "50%", background: P, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, color: "#fff", marginTop: -8 }}>{tab.icon}</div>
                : <span style={{ fontSize: 22, opacity: tab.active ? 1 : 0.4 }}>{tab.icon}</span>
              }
              <span style={{ fontSize: 10, fontWeight: tab.active ? 700 : 400, color: tab.active ? P : GRAY }}>{tab.label}</span>
              {tab.active && <div style={{ width: 4, height: 4, borderRadius: "50%", background: P }} />}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            ["Home", "Today's meals grouped by type + AI Reflections. Main daily view."],
            ["Add Log", "Floating teal circle — always accessible. Opens photo capture flow."],
            ["Logs", "Full history in weekly timeline or monthly calendar view."],
          ].map(([tab, desc], i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ background: "#C6E9E3", color: P, fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 4, flexShrink: 0 }}>{tab}</span>
              <span style={{ fontSize: 11, color: GRAY, lineHeight: 1.5 }}>{desc}</span>
            </div>
          ))}
        </div>
      </>)}

    </div>
  );
}

/* ── PawSuite Design System ── */
function SectionDesignSystemPawsuite() {
  const P    = "#0D9488";   // primary teal
  const PD   = "#0F766E";   // deep teal
  const MINT = "#F0FDFA";   // surface mint
  const INK  = "#111827";
  const GRAY = "#6B7280";

  const colors = [
    { hex: P,       name: "Primary Teal",   use: "Active nav, CTA buttons, links" },
    { hex: PD,      name: "Deep Teal",      use: "Pressed states, headings" },
    { hex: "#F59E0B", name: "Staff Amber",  use: "Staff portal accent, in-progress" },
    { hex: "#3B82F6", name: "Client Blue",  use: "Client portal hero, primary CTA" },
    { hex: MINT,    name: "Mint Surface",   use: "Sidebar active state, card fill" },
    { hex: GRAY,    name: "Neutral Gray",   use: "Secondary labels, timestamps" },
  ];

  const typeScale = [
    { size: 24, weight: 800, label: "Display",  sample: "$1,390.00",              use: "Dashboard stat values" },
    { size: 18, weight: 700, label: "Heading",  sample: "Reports & Insights",      use: "Page titles" },
    { size: 15, weight: 600, label: "Row Title",sample: "Alice Johnson — Buddy",   use: "Booking & client rows" },
    { size: 13, weight: 400, label: "Body",     sample: "Teeth Cleaning · 30 min", use: "Service, meta text" },
    { size: 11, weight: 700, label: "Label",    sample: "OUTSTANDING · OVERDUE",   use: "Stat labels (caps)" },
  ];

  const statusBadges = [
    { label: "Pending",     bg: "#FFF7ED", color: "#C2410C" },
    { label: "Confirmed",   bg: "#ECFDF5", color: "#059669" },
    { label: "In Progress", bg: "#FFF7ED", color: "#D97706" },
    { label: "Completed",   bg: "#ECFDF5", color: "#047857" },
    { label: "Cancelled",   bg: "#F3F4F6", color: "#6B7280" },
    { label: "Overdue",     bg: "#FEF2F2", color: "#DC2626" },
  ];

  const roleBadges = [
    { label: "Owner", bg: MINT, color: P, desc: "Full back office — bookings, finance, staff, reports" },
    { label: "Staff",  bg: "#FFF7ED", color: "#D97706", desc: "Focused day-view — schedule, clients, invoices" },
    { label: "Client", bg: "#EFF6FF", color: "#3B82F6", desc: "Mobile app — book, track, pay" },
  ];

  const LABEL_STYLE = { fontSize: 12, fontWeight: 800, textTransform: "uppercase", letterSpacing: ".07em", color: GRAY, marginBottom: 14 };
  const box = (children) => (
    <div style={{ background: "#fff", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, padding: "18px 20px" }}>{children}</div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>

      {/* Color palette */}
      {box(<>
        <div style={LABEL_STYLE}>Color Palette</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 10 }}>
          {colors.map((c, i) => (
            <div key={i}>
              <div style={{ height: 48, borderRadius: 8, background: c.hex, marginBottom: 8 }} />
              <div style={{ fontSize: 13, fontWeight: 700, color: INK }}>{c.name}</div>
              <div style={{ fontSize: 11, color: GRAY, fontFamily: "monospace", marginTop: 1 }}>{c.hex}</div>
              <div style={{ fontSize: 11, color: GRAY, marginTop: 3, lineHeight: 1.4 }}>{c.use}</div>
            </div>
          ))}
        </div>
      </>)}

      {/* Typography */}
      {box(<>
        <div style={LABEL_STYLE}>Typography — Inter</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {typeScale.map((t, i) => (
            <div key={i} style={{ display: "flex", alignItems: "baseline", gap: 16, borderBottom: i < typeScale.length - 1 ? "1px solid var(--hair,#f0ede8)" : "none", paddingBottom: i < typeScale.length - 1 ? 12 : 0 }}>
              <div style={{ width: 90, flexShrink: 0 }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: P, background: MINT, padding: "2px 7px", borderRadius: 4 }}>{t.label}</span>
              </div>
              <div style={{ flex: 1, fontSize: Math.min(t.size, 20), fontWeight: t.weight, color: INK }}>{t.sample}</div>
              <div style={{ fontSize: 12, color: GRAY, flexShrink: 0 }}>{t.size}px / {t.weight}</div>
            </div>
          ))}
        </div>
      </>)}

      {/* Booking status system */}
      {box(<>
        <div style={LABEL_STYLE}>Booking & Invoice Status Badges</div>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          {statusBadges.map((b, i) => (
            <span key={i} style={{ fontSize: 13, fontWeight: 700, padding: "5px 12px", borderRadius: 6, background: b.bg, color: b.color }}>{b.label}</span>
          ))}
        </div>
        <div style={{ fontSize: 13, color: GRAY, marginTop: 12, lineHeight: 1.6 }}>
          Every booking and invoice shares the same six-state vocabulary across all three portals — a groomer sees the exact same "In Progress" color an owner does on the reports page.
        </div>
      </>)}

      {/* Role badge / access system */}
      {box(<>
        <div style={LABEL_STYLE}>Role Access System</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
          {roleBadges.map((r, i) => (
            <div key={i} style={{ border: "1px solid var(--hair,#e8e6e0)", borderRadius: 10, padding: "14px" }}>
              <span style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".06em", textTransform: "uppercase", background: r.bg, color: r.color, padding: "3px 10px", borderRadius: 5 }}>{r.label}</span>
              <div style={{ fontSize: 13, color: GRAY, marginTop: 10, lineHeight: 1.5 }}>{r.desc}</div>
            </div>
          ))}
        </div>
      </>)}

      {/* Stat card anatomy */}
      {box(<>
        <div style={LABEL_STYLE}>Stat Card Anatomy</div>
        <div style={{ display: "grid", gridTemplateColumns: "220px 1fr", gap: 24, alignItems: "center" }}>
          <div style={{ border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, padding: "18px", display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: MINT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, color: P, flexShrink: 0 }}>$</div>
            <div>
              <div style={{ fontSize: 22, fontWeight: 800, color: INK, lineHeight: 1 }}>$1,390.00</div>
              <div style={{ fontSize: 12, color: GRAY, marginTop: 3 }}>Revenue This Month</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {[
              "Icon tile always 40×40 with mint fill — never decorative color",
              "Value leads at 22–24px bold — the number is the message",
              "Label sits below in gray, never above the number",
            ].map((rule, i) => (
              <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: P, marginTop: 7, flexShrink: 0 }} />
                <span style={{ fontSize: 13, color: GRAY, lineHeight: 1.5 }}>{rule}</span>
              </div>
            ))}
          </div>
        </div>
      </>)}

      {/* Button system */}
      {box(<>
        <div style={LABEL_STYLE}>Button System</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {[
            { label: "+ New Booking", bg: PD, color: "#fff", desc: "Primary CTA — pinned top-right on every owner & staff page" },
            { label: "Walk In Transaction", bg: P, color: "#fff", desc: "Secondary quick-entry — pairs with New Booking in the header" },
            { label: "View", bg: "transparent", color: P, border: `1.5px solid ${P}`, desc: "Ghost link — inline row actions across tables" },
          ].map((btn, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ background: btn.bg, color: btn.color, border: btn.border || "none", borderRadius: 8, padding: "9px 18px", fontSize: 13, fontWeight: 700, minWidth: 170, textAlign: "center", flexShrink: 0 }}>{btn.label}</div>
              <div style={{ fontSize: 13, color: GRAY, lineHeight: 1.4 }}>{btn.desc}</div>
            </div>
          ))}
        </div>
      </>)}

    </div>
  );
}

/* ── Information Architecture ── */
function SectionIA() {
  const nav = [
    { label: "Orders", color: "#3D55CC", sub: ["New Order", "History", "Holds"] },
    { label: "Inventory", color: "#10B981", sub: ["Products", "Stock", "Reorder"] },
    { label: "Customers", color: "#8B5CF6", sub: ["Directory", "Loyalty", "Segments"] },
    { label: "Promos", color: "#F59E0B", sub: ["Create", "Calendar", "ROI"] },
    { label: "Reports", color: "#EC4899", sub: ["Summary", "Detail"] },
    { label: "Finance", color: "#0EA5E9", sub: ["P&L", "Products", "+6 more"] },
    { label: "Settings", color: "#6B7280", sub: ["Profile", "Store", "Staff"] }
  ];
  const principles = [
    { icon: "→", title: "Role-Based First", desc: "Navigation reflects what users need to accomplish, not which features exist" },
    { icon: "★", title: "Orders First", desc: "The most frequent action is the most prominent — not buried in menus" },
    { icon: "◎", title: "Finance Visible, Not Loud", desc: "Critical for managers, cleanly absent for cashiers — same product, different view" },
    { icon: "⊞", title: "Multi-Store by Default", desc: "Company-wide view is the default — prevents local optimization at company expense" }
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      <div style={{ background: "#0f1220", borderRadius: 12, padding: "20px 20px 24px" }}>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,.35)", letterSpacing: ".09em", textTransform: "uppercase", fontWeight: 800, marginBottom: 16 }}>
          Navigation Hierarchy — KPoin POS
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 8 }}>
          {nav.map((item, i) => (
            <div key={i}>
              <div style={{ background: item.color + "20", border: `1px solid ${item.color}44`, borderRadius: 8, padding: "10px 6px", textAlign: "center", marginBottom: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: "50%", background: item.color, margin: "0 auto 6px" }} />
                <div style={{ fontSize: 12, fontWeight: 800, color: "white", lineHeight: 1.2 }}>{item.label}</div>
              </div>
              {item.sub.map((s, j) => (
                <div key={j} style={{
                  background: "rgba(255,255,255,.06)", borderRadius: 4,
                  padding: "4px 6px", fontSize: 11, color: "rgba(255,255,255,.45)",
                  textAlign: "center", marginBottom: 4, lineHeight: 1.3
                }}>{s}</div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}>
        {principles.map((p, i) => (
          <div key={i} style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 10, padding: "14px" }}>
            <div style={{ fontSize: 18, marginBottom: 8, color: "#3D55CC" }}>{p.icon}</div>
            <div style={{ fontSize: 14, fontWeight: 800, color: "var(--ink,#0a0a0a)", marginBottom: 5, lineHeight: 1.2 }}>{p.title}</div>
            <div style={{ fontSize: 13, color: "var(--slate,#6e6e6e)", lineHeight: 1.5 }}>{p.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Impact Bar Charts ── */
function SectionImpact({ items }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
      {items.map((item, i) => {
        const hib = item.higher_is_better;
        const max = Math.max(item.before, item.after);
        const beforeWidth = (item.before / max) * 100;
        const afterWidth = (item.after / max) * 100;
        return (
          <div key={i} style={{ background: "var(--white,#fff)", border: "1px solid var(--hair,#e8e6e0)", borderRadius: 12, padding: "18px 20px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
              <div style={{ fontSize: 16, fontWeight: 800, color: "var(--ink,#0a0a0a)" }}>{item.label}</div>
              <div style={{ fontSize: 12, fontWeight: 800, color: "#3D55CC", background: "#EEF2FF", padding: "3px 10px", borderRadius: 20 }}>{item.tag}</div>
            </div>
            {/* Before bar */}
            <div style={{ marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--mute,#8a8880)", marginBottom: 5, fontWeight: 700 }}>
                <span>BEFORE</span>
                <span style={{ color: hib ? "var(--mute)" : "#EF4444", fontVariantNumeric: "tabular-nums" }}>{item.before}{item.unit}</span>
              </div>
              <div style={{ height: 8, background: "var(--paper,#f5f3ee)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${beforeWidth}%`, background: hib ? "#D1D5DB" : "#FCA5A5", borderRadius: 4 }} />
              </div>
            </div>
            {/* After bar */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--mute,#8a8880)", marginBottom: 5, fontWeight: 700 }}>
                <span>AFTER</span>
                <span style={{ color: "#10B981", fontVariantNumeric: "tabular-nums" }}>{item.after}{item.unit}</span>
              </div>
              <div style={{ height: 8, background: "var(--paper,#f5f3ee)", borderRadius: 4, overflow: "hidden" }}>
                <div style={{ height: "100%", width: `${afterWidth}%`, background: "#10B981", borderRadius: 4 }} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ── Core Pages ── */
function SectionCorePages({ pages }) {
  // Tilt angles cycle through slight variations for visual rhythm
  const TILTS = [-2, 1.5, -1, 2, -1.5, 1, -2.5, 1.8, -1.2];
  // Soft accent backgrounds cycle per row
  const BGSWATCH = [
    "linear-gradient(135deg,#EEF2FF 0%,#F0FDF4 100%)",
    "linear-gradient(135deg,#FFF7ED 0%,#ECFDF5 100%)",
    "linear-gradient(135deg,#FDF4FF 0%,#EEF2FF 100%)",
    "linear-gradient(135deg,#F0FDF4 0%,#FFF1F2 100%)",
    "linear-gradient(135deg,#FFFBEB 0%,#EEF2FF 100%)",
    "linear-gradient(135deg,#F0FDFA 0%,#FDF4FF 100%)",
    "linear-gradient(135deg,#FFF7ED 0%,#F0FDF4 100%)",
    "linear-gradient(135deg,#EEF2FF 0%,#FFFBEB 100%)",
    "linear-gradient(135deg,#FDF4FF 0%,#F0FDFA 100%)",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
      {pages.map((page, i) => {
        const imageLeft = i % 2 === 0;
        const tilt = TILTS[i % TILTS.length];
        const bg = BGSWATCH[i % BGSWATCH.length];

        const imgCol = (
          <div style={{
            flex: "0 0 48%", display: "flex",
            alignItems: "center", justifyContent: "center",
            padding: "40px 32px",
          }}>
            <div style={{
              width: "100%", borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 12px 40px rgba(0,0,0,.14), 0 2px 8px rgba(0,0,0,.08)",
              transform: `rotate(${tilt}deg)`,
              transition: "transform .4s ease",
              lineHeight: 0,
            }}>
              <img
                src={page.img}
                alt={page.title}
                loading="lazy"
                style={{ width: "100%", display: "block", objectFit: "cover" }}
              />
            </div>
          </div>
        );

        const textCol = (
          <div style={{
            flex: "1 1 0", display: "flex", flexDirection: "column",
            justifyContent: "center", padding: "48px 40px 48px 0",
            paddingLeft: imageLeft ? 0 : 40,
            paddingRight: imageLeft ? 40 : 0,
          }}>
            {/* Tag */}
            <span style={{
              display: "inline-block", fontSize: 12, fontWeight: 800,
              letterSpacing: ".07em", textTransform: "uppercase",
              background: page.tagColor || "#3D55CC", color: "white",
              padding: "4px 10px", borderRadius: 6, marginBottom: 14,
              alignSelf: "flex-start"
            }}>{page.tag}</span>

            {/* Title */}
            <div style={{
              fontFamily: "var(--display,'Plus Jakarta Sans',sans-serif)",
              fontSize: "clamp(22px,2.2vw,30px)", fontWeight: 800,
              color: "var(--ink,#0a0a0a)", lineHeight: 1.2, marginBottom: 6
            }}>{page.title}</div>

            {/* Subtitle */}
            <div style={{
              fontSize: 15, color: "var(--slate,#6e6e6e)",
              fontWeight: 500, marginBottom: 16, lineHeight: 1.4
            }}>{page.subtitle}</div>

            {/* Description */}
            <p style={{
              fontSize: 16, color: "var(--ink-soft,#4a4844)",
              lineHeight: 1.75, margin: "0 0 20px"
            }}>{page.desc}</p>

            {/* Features */}
            {page.features && (
              <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
                {page.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{
                      width: 20, height: 20, borderRadius: 6, flexShrink: 0, marginTop: 1,
                      background: page.tagColor ? page.tagColor + "22" : "#EEF2FF",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>
                      <span style={{
                        fontSize: 11, fontWeight: 800,
                        color: page.tagColor || "#3D55CC"
                      }}>{j + 1}</span>
                    </div>
                    <span style={{ fontSize: 14.5, color: "var(--ink-soft,#4a4844)", lineHeight: 1.6 }}>{f}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Demo link */}
            {page.url && (
              <a
                href={page.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  fontSize: 14, fontWeight: 700,
                  color: page.tagColor || "#3D55CC",
                  textDecoration: "none",
                  alignSelf: "flex-start"
                }}
              >
                View in demo
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 12 L12 4"/><path d="M6 4 H12 V10"/>
                </svg>
              </a>
            )}
          </div>
        );

        return (
          <div
            key={i}
            style={{
              display: "flex",
              flexDirection: imageLeft ? "row" : "row-reverse",
              background: bg,
              borderRadius: 20,
              overflow: "hidden",
              marginBottom: 16,
              minHeight: 320,
            }}
          >
            {page.img && imgCol}
            {textCol}
          </div>
        );
      })}
    </div>
  );
}

/* ── Pull Quote ── */
function SectionQuote({ text, sub }) {
  return (
    <div style={{ background: "linear-gradient(135deg,#3D55CC 0%,#1e3a8a 100%)", borderRadius: 16, padding: "36px 44px", textAlign: "center" }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: "white", fontStyle: "italic", fontFamily: "var(--serif,'Georgia',serif)", lineHeight: 1.55, marginBottom: 14 }}>
        "{text}"
      </div>
      <div style={{ fontSize: 13, color: "rgba(255,255,255,.5)", letterSpacing: ".05em" }}>{sub}</div>
    </div>
  );
}

/* ─── Project Detail Page ─── */
function ProjectDetail({ project, projects, onClose, onJump }) {
  const open = !!project;
  const [activeSection, setActiveSection] = React.useState(null);
  const pageRef = React.useRef(null);

  // Keyboard close
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Scroll to top & reset active section when project changes
  React.useEffect(() => {
    if (pageRef.current) pageRef.current.scrollTop = 0;
    setActiveSection(null);
  }, [project]);

  // TOC scroll-spy
  React.useEffect(() => {
    if (!open || !project?.sections) return;
    const root = pageRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, { root, rootMargin: "-15% 0px -65% 0px" });
    const els = root.querySelectorAll("[data-toc-anchor]");
    els.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [open, project]);

  if (!project) return null;

  const idx = projects.findIndex(p => p.id === project.id);
  const prev = projects[(idx - 1 + projects.length) % projects.length];
  const next = projects[(idx + 1) % projects.length];

  const hasSections = !!project.sections;

  // Pre-process sections: inject anchor IDs on headings
  let hidx = 0;
  const processedSections = hasSections
    ? project.sections.map(s => s.type === "heading" ? { ...s, _anchorId: "sec-" + (hidx++) } : s)
    : [];

  // TOC items from headings
  const tocItems = processedSections.filter(s => s._anchorId);

  const scrollTo = (id) => {
    const el = pageRef.current?.querySelector("#" + id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const titleParts = project.title.split(" — ");

  return (
    <div className={"pd-page " + (open ? "open" : "")} ref={pageRef}>

      {/* ── Top bar ── */}
      <div className="pd-topbar">
        <div className="pd-topbar-inner">
          <button className="pd-back-btn" onClick={onClose}>
            <Ic.ArrowRight style={{ transform: "rotate(180deg)" }} /> Back
          </button>
          <div className="pd-topbar-divider" />
          <span className="pd-topbar-label">{titleParts[0]}</span>
        </div>
      </div>

      {/* ── Hero text ── */}
      <div className="pd-page-hero">
        <span className="pd-page-cat">{project.kind}</span>
        <h1 className="pd-page-title">
          {titleParts[0]}
          {titleParts[1] && <><br /><em>{titleParts[1]}</em></>}
        </h1>
        <div className="pd-page-meta">
          <span>{project.year}</span>
          <span className="sep">·</span>
          <span>{project.duration}</span>
          <span className="sep">·</span>
          <span>{project.role}</span>
        </div>
        {/* Chips */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 8 }}>
          {project.chips.map(c => <span key={c} className="chip">{c}</span>)}
        </div>
      </div>

      {/* ── Cover ── */}
      <div className="pd-cover-wrap">
        {project.coverImg
          ? <img src={project.coverImg} alt={project.title} style={{ borderRadius: 20 }} />
          : <CoverArt kind={project.cover} large />
        }
      </div>

      {/* ── Two-column body ── */}
      <div className="pd-body-wrap">

        {/* Left: TOC + meta */}
        <aside className="pd-toc">
          {tocItems.length > 0 && (
            <>
              <p className="pd-toc-label">On this page</p>
              <div className="pd-toc-list">
                {tocItems.map(s => (
                  <button
                    key={s._anchorId}
                    className={"pd-toc-btn" + (activeSection === s._anchorId ? " active" : "")}
                    onClick={() => scrollTo(s._anchorId)}
                  >
                    {s.title}
                  </button>
                ))}
              </div>
            </>
          )}
          <div className="pd-toc-info">
            <p className="pd-toc-info-label">Project info</p>
            <dl className="pd-toc-info-list">
              {(project.projectInfo || [
                { l: "Role", v: project.role },
                { l: "Year", v: project.year },
                { l: "Duration", v: project.duration },
                { l: "Team", v: project.team },
              ]).map(m => (
                <div key={m.l} className="pd-toc-info-list">
                  <dt>{m.l}</dt>
                  <dd>{m.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>

        {/* Right: article */}
        <article className="pd-article">
          <div className="pd-article-body">
            {hasSections
              ? processedSections.map((section, i) => {
                  if (section._anchorId) {
                    return (
                      <div
                        key={i}
                        id={section._anchorId}
                        data-toc-anchor="true"
                        className="pd-section-anchor"
                      >
                        {renderSection(section, i, project.accent)}
                      </div>
                    );
                  }
                  return renderSection(section, i, project.accent);
                })
              : (
                <>
                  <p style={{ fontSize: 18, color: "var(--ink-soft,#4a4844)", lineHeight: 1.8, margin: 0 }}>
                    {project.summary}
                  </p>
                  {project.body.map((para, i) => (
                    <p key={i} style={{ fontSize: 18, color: "var(--ink-soft,#4a4844)", lineHeight: 1.8, margin: 0 }}>
                      {para}
                    </p>
                  ))}
                </>
              )
            }
          </div>
        </article>
      </div>

      {/* ── Prev / Next ── */}
      <div className="pd-proj-nav">
        <button className="pd-proj-nav-btn" onClick={() => onJump(prev)}>
          <span className="nav-lbl">← Previous</span>
          <span className="nav-ttl">{prev.title.split(" — ")[0]}</span>
        </button>
        <button className="pd-proj-nav-btn" style={{ marginLeft: "auto" }} onClick={() => onJump(next)}>
          <span className="nav-lbl" style={{ textAlign: "right" }}>Next →</span>
          <span className="nav-ttl">{next.title.split(" — ")[0]}</span>
        </button>
      </div>

    </div>
  );
}

/* ─── Cover Art ─── */
function CoverArt({ kind, large }) {
  const wrap = large ? { className: "pd-hero" } : { className: "thumb-art" };

  if (kind === "dashboard") {
    if (large) {
      // Large: use actual screenshot of the POS order screen
      return (
        <div {...wrap} style={{ background: "#f0f2f8", overflow: "hidden", position: "relative" }}>
          <img
            src="pos-order-screen.webp"
            alt="KPoin POS – Order Management Screen"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top left", display: "block" }}
          />
        </div>
      );
    }
    return (
      <div {...wrap} style={{ background: "linear-gradient(160deg,#1a1f3a,#0f1220)", padding: 16, color: "#f3f1ec" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 10 }}>
          {[
            { label: "Today Sales", value: "Rp 12.4M", color: "#3D55CC" },
            { label: "Orders", value: "48", color: "#10B981" }
          ].map((m, i) => (
            <div key={i} style={{ background: "rgba(255,255,255,.06)", borderRadius: 8, padding: 10, border: "1px solid rgba(61,85,204,.2)" }}>
              <div style={{ fontSize: 8, letterSpacing: ".08em", textTransform: "uppercase", color: "#9a9a9a", marginBottom: 6 }}>{m.label}</div>
              <div style={{ fontFamily: "var(--serif)", fontSize: 14, fontWeight: 500, color: m.color }}>{m.value}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12 }}>
          <div style={{ fontSize: 8, letterSpacing: ".08em", textTransform: "uppercase", color: "#9a9a9a", marginBottom: 8 }}>Store Performance</div>
          {["Jakarta", "Surabaya", "Bandung"].map((store, i) => (
            <div key={store} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: 6, borderBottom: "1px solid rgba(243,241,236,.08)", fontSize: 8, marginBottom: 4 }}>
              <span>{store}</span>
              <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                <div style={{ width: [40, 32, 28][i], height: 3, background: "#3D55CC", borderRadius: 1, opacity: 0.6 + i * 0.1 }} />
                <span style={{ color: "#9a9a9a" }}>{[85, 72, 68][i]}%</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10 }}>
          <span style={{ fontSize: 8, padding: "3px 7px", background: "rgba(61,85,204,.15)", color: "#3D55CC", borderRadius: 4, letterSpacing: ".06em" }}>
            Real-time Operations Hub
          </span>
        </div>
      </div>
    );
  }

  if (kind === "type") {
    return (
      <div {...wrap} style={{ background: "linear-gradient(160deg,#0f0f0f,#1c1c1c)", display: "block", padding: large ? "48px 56px" : "28px 30px" }}>
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", color: "#f3f1ec", fontWeight: 400, fontSize: large ? 88 : 36, lineHeight: 1, letterSpacing: "-.02em" }}>Quiet</div>
        <div style={{ fontFamily: "var(--serif)", color: "#f3f1ec", fontWeight: 500, fontSize: large ? 88 : 36, lineHeight: 1, letterSpacing: "-.02em", marginTop: 4 }}>Mornings</div>
        <div style={{ fontFamily: "var(--sans)", color: "rgba(243,241,236,.55)", fontSize: large ? 14 : 11, marginTop: large ? 22 : 12, maxWidth: large ? 480 : 200, lineHeight: 1.5 }}>
          A shelf of long reads, paced for a single sitting. Marginalia returns in the evening as one page.
        </div>
        <div style={{ display: "flex", gap: 8, marginTop: large ? 26 : 14 }}>
          {["Essays", "Fiction", "Poems"].map((t) => (
            <span key={t} style={{ fontSize: large ? 11 : 9, color: "rgba(243,241,236,.7)", padding: large ? "6px 12px" : "4px 8px", border: "1px solid rgba(243,241,236,.18)", borderRadius: 6, letterSpacing: ".06em", textTransform: "uppercase" }}>{t}</span>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "fragrance") {
    return (
      <div {...wrap} style={{ background: "linear-gradient(180deg,#1a1a1a 0%,#2a2a2a 100%)", display: "grid", gridTemplateColumns: "1fr 1fr", gap: large ? 14 : 8, padding: large ? 24 : 14, alignItems: "stretch" }}>
        <div style={{ background: "linear-gradient(160deg,#222,#3a3a3a)", borderRadius: large ? 14 : 8, padding: large ? 24 : 12, color: "#f3f1ec", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: large ? 28 : 13, fontWeight: 500 }}>Premium</div>
          <div>
            <div style={{ fontFamily: "var(--serif)", fontSize: large ? 36 : 16, lineHeight: 1, fontWeight: 500, marginBottom: large ? 12 : 4 }}>
              Fragwater <span style={{ fontStyle: "italic", color: "#9a9a9a" }}>No. 04</span>
            </div>
            <div style={{ fontSize: large ? 11 : 8, letterSpacing: ".12em", textTransform: "uppercase", color: "#9a9a9a" }}>Vetiver · Cedar · Smoke</div>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: large ? 14 : 8 }}>
          <div style={{ borderRadius: large ? 14 : 8, background: "linear-gradient(140deg,#4a4742,#2a2826)" }} />
          <div style={{ borderRadius: large ? 14 : 8, background: "linear-gradient(140deg,#2a2a2a,#0f0f0f)", display: "flex", alignItems: "center", justifyContent: "center", color: "#f3f1ec", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: large ? 22 : 11 }}>
            Shop the edition
          </div>
        </div>
      </div>
    );
  }

  if (kind === "chart") {
    return (
      <div {...wrap} style={{ background: "linear-gradient(160deg,#0f0f0f,#1a1a1a)", padding: large ? 32 : 14, color: "#f3f1ec" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div>
            <div style={{ fontSize: large ? 11 : 9, letterSpacing: ".12em", textTransform: "uppercase", color: "#9a9a9a" }}>This week</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: large ? 48 : 22, fontWeight: 500, letterSpacing: "-.01em", marginTop: 4 }}>$24,180.20</div>
          </div>
          <div style={{ fontSize: large ? 12 : 9, padding: large ? "5px 10px" : "3px 7px", border: "1px solid rgba(243,241,236,.18)", borderRadius: 6 }}>+2.4%</div>
        </div>
        <svg viewBox="0 0 320 80" style={{ width: "100%", height: large ? 110 : 50, marginTop: large ? 18 : 8 }}>
          <path d="M0 60 L24 50 L48 56 L72 40 L96 44 L120 30 L144 36 L168 24 L192 32 L216 20 L240 28 L264 14 L288 22 L312 10 L320 16" fill="none" stroke="#f3f1ec" strokeWidth="1.6" />
          <path d="M0 60 L24 50 L48 56 L72 40 L96 44 L120 30 L144 36 L168 24 L192 32 L216 20 L240 28 L264 14 L288 22 L312 10 L320 16 L320 80 L0 80 Z" fill="rgba(243,241,236,.06)" />
        </svg>
        <div style={{ display: "flex", gap: large ? 8 : 5, marginTop: large ? 18 : 8 }}>
          {["1W", "1M", "3M", "1Y", "All"].map((t, i) => (
            <span key={t} style={{ fontSize: large ? 10 : 8, padding: large ? "5px 10px" : "3px 7px", borderRadius: 999, background: i === 1 ? "#f3f1ec" : "transparent", color: i === 1 ? "#0f0f0f" : "#9a9a9a", border: i === 1 ? "none" : "1px solid rgba(243,241,236,.16)" }}>{t}</span>
          ))}
        </div>
      </div>
    );
  }

  if (kind === "career") {
    return (
      <div {...wrap} style={{ background: "linear-gradient(150deg,#0C4D34 0%,#1E9E6B 100%)", display: "flex", alignItems: "center", justifyContent: "center", gap: large ? 20 : 10, padding: large ? 28 : 14 }}>
        {/* Back phone */}
        <div style={{ width: large ? 160 : 80, height: large ? 320 : 160, borderRadius: large ? 24 : 14, background: "rgba(255,255,255,.08)", border: "1px solid rgba(255,255,255,.15)", padding: large ? 12 : 7, display: "flex", flexDirection: "column", gap: large ? 6 : 3, transform: "translateY(12px) rotate(-4deg)", boxShadow: "0 20px 40px rgba(0,0,0,.35)" }}>
          <div style={{ height: large ? 6 : 4, background: "rgba(255,255,255,.15)", borderRadius: 99, width: "60%" }} />
          {[1,2,3].map(i => (
            <div key={i} style={{ background: "rgba(255,255,255,.1)", borderRadius: large ? 8 : 5, padding: large ? "8px 10px" : "4px 6px", display: "flex", gap: large ? 8 : 4, alignItems: "center" }}>
              <div style={{ width: large ? 28 : 14, height: large ? 28 : 14, borderRadius: "50%", background: ["#1E9E6B","#10B981","#34D399"][i-1], flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ height: large ? 6 : 3, background: "rgba(255,255,255,.3)", borderRadius: 99, marginBottom: large ? 4 : 2, width: "80%" }} />
                <div style={{ height: large ? 5 : 2.5, background: "rgba(255,255,255,.15)", borderRadius: 99, width: "50%" }} />
              </div>
            </div>
          ))}
        </div>
        {/* Main phone */}
        <div style={{ width: large ? 180 : 90, height: large ? 360 : 180, borderRadius: large ? 26 : 16, background: "#F3FBF7", border: "1px solid rgba(255,255,255,.3)", padding: large ? 14 : 7, display: "flex", flexDirection: "column", gap: large ? 7 : 4, boxShadow: "0 28px 56px rgba(0,0,0,.45)", zIndex: 2 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ fontSize: large ? 11 : 6, fontWeight: 800, color: "#0C4D34" }}>Career Solution</div>
            <div style={{ width: large ? 20 : 10, height: large ? 20 : 10, borderRadius: "50%", background: "#1E9E6B" }} />
          </div>
          <div style={{ background: "white", borderRadius: large ? 10 : 6, padding: large ? "6px 10px" : "3px 5px", display: "flex", alignItems: "center", gap: large ? 5 : 3 }}>
            <div style={{ width: large ? 10 : 5, height: large ? 10 : 5, borderRadius: "50%", background: "#d1d5db" }} />
            <div style={{ height: large ? 5 : 3, background: "#e5e7eb", borderRadius: 99, flex: 1 }} />
          </div>
          {[
            { co: "Gojek", role: "Product Designer", salary: "Rp 22–35M" },
            { co: "Tokopedia", role: "UX Lead", salary: "Rp 30–45M" },
            { co: "Shopee", role: "UI Designer", salary: "Rp 18–28M" },
          ].map((job, i) => (
            <div key={i} style={{ background: "white", borderRadius: large ? 10 : 6, padding: large ? "8px 10px" : "4px 6px", display: "flex", gap: large ? 7 : 4, alignItems: "center", boxShadow: "0 1px 4px rgba(0,0,0,.06)" }}>
              <div style={{ width: large ? 26 : 13, height: large ? 26 : 13, borderRadius: large ? 6 : 4, background: ["#1E9E6B","#F59E0B","#EF4444"][i], flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: large ? 8 : 5, fontWeight: 700, color: "#0a0a0a", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{job.co} · {job.role}</div>
                <div style={{ fontSize: large ? 7 : 4, color: "#1E9E6B", fontWeight: 600, marginTop: 1 }}>{job.salary}</div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: "auto", background: "#1E9E6B", borderRadius: large ? 10 : 6, padding: large ? "7px 0" : "3px 0", textAlign: "center" }}>
            <div style={{ fontSize: large ? 9 : 5, fontWeight: 800, color: "white" }}>Apply with One Tap</div>
          </div>
        </div>
      </div>
    );
  }

  if (kind === "phones") {
    return (
      <div {...wrap} style={{ background: "linear-gradient(160deg,#1a1a1a,#0f0f0f)", display: "flex", gap: large ? 16 : 10, alignItems: "center", justifyContent: "center", padding: large ? 28 : 14 }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{ width: large ? 150 : 76, height: large ? 300 : 150, borderRadius: large ? 22 : 12, background: "linear-gradient(160deg,#2a2a2a,#1a1a1a)", border: "1px solid #333", padding: large ? 14 : 8, transform: `translateY(${i === 1 ? -10 : 0}px) rotate(${(i - 1) * 3}deg)`, display: "flex", flexDirection: "column", gap: large ? 8 : 4, color: "#f3f1ec", boxShadow: "0 18px 40px -10px rgba(0,0,0,.5)" }}>
            <div style={{ fontSize: large ? 9 : 7, letterSpacing: ".1em", textTransform: "uppercase", color: "#9a9a9a" }}>This week</div>
            <div style={{ fontFamily: "var(--serif)", fontSize: large ? 24 : 12, fontWeight: 500 }}>${["1,240", "860", "320"][i]}</div>
            <div style={{ height: 1, background: "rgba(243,241,236,.1)", marginTop: 2 }} />
            {[0, 1, 2, 3].map(r => (
              <div key={r} style={{ display: "flex", justifyContent: "space-between", fontSize: large ? 10 : 7, color: "rgba(243,241,236,.6)" }}>
                <span>{["Coffee", "Groceries", "Rent", "Books"][r]}</span>
                <span>${[5, 68, 1200, 24][r]}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return <div {...wrap} />;
}

window.ProjectDetail = ProjectDetail;
window.CoverArt = CoverArt;