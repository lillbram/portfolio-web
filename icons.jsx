// Icons — small inline SVGs. Stroke style, currentColor.
const Ic = {
  Arrow: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 12 L12 4" /><path d="M6 4 H12 V10" />
    </svg>
  ),
  ArrowRight: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 8 H13" /><path d="M9 4 L13 8 L9 12" />
    </svg>
  ),
  Plus: (p) => (
    <svg viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" {...p}>
      <path d="M4 11 H18" /><path d="M11 4 V18" />
    </svg>
  ),
  Close: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6"
      strokeLinecap="round" {...p}>
      <path d="M4 4 L12 12" /><path d="M12 4 L4 12" />
    </svg>
  ),
  Dribbble: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <circle cx="8" cy="8" r="6.3"/>
      <path d="M2.4 5.4c3.6.4 7.5.1 10.3-1.4M14 7.2c-3.8-.4-8 .2-10.9 2.7M5.4 14.3c.7-3.2 2-6 3.9-8.6"/>
    </svg>
  ),
  Instagram: (p) => (
    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4" {...p}>
      <rect x="2.2" y="2.2" width="11.6" height="11.6" rx="3.2"/>
      <circle cx="8" cy="8" r="2.5"/><circle cx="11.4" cy="4.6" r=".6" fill="currentColor" stroke="none"/>
    </svg>
  ),
  LinkedIn: (p) => (
    <svg viewBox="0 0 16 16" fill="currentColor" {...p}>
      <path d="M3.4 5.5h2.3v8.2H3.4zM4.55 2.3a1.35 1.35 0 1 1 0 2.7 1.35 1.35 0 0 1 0-2.7zM7.4 5.5h2.2v1.1c.4-.7 1.3-1.3 2.6-1.3 2.1 0 2.5 1.3 2.5 3v5.4h-2.3V9c0-.9-.3-1.6-1.3-1.6s-1.4.7-1.4 1.5v4.8H7.4z"/>
    </svg>
  ),
  Behance: (p) => (
    <svg viewBox="0 0 16 16" fill="currentColor" {...p}>
      <path d="M5.8 7.4c.9-.3 1.5-1 1.5-2 0-1.7-1.3-2.4-3-2.4H.7v10h4c1.8 0 3.4-.8 3.4-2.8 0-1.2-.6-2.2-2.3-2.8zM2.6 4.6h1.5c.7 0 1.3.2 1.3 1 0 .7-.6 1-1.3 1H2.6zm1.7 6.4H2.6V8.4h1.7c.9 0 1.5.3 1.5 1.3 0 .9-.7 1.3-1.5 1.3zM12.4 5.7c-2 0-3.4 1.5-3.4 3.6 0 2.2 1.3 3.6 3.4 3.6 1.6 0 2.7-.7 3.1-2.2h-1.8c-.2.5-.6.7-1.3.7-1 0-1.5-.7-1.5-1.6h4.7c.1-2.4-1.2-4.1-3.2-4.1zm-1.5 2.9c.1-.8.6-1.4 1.5-1.4.9 0 1.4.6 1.4 1.4zM10.4 3.6h3.5v.9h-3.5z"/>
    </svg>
  ),
};
window.Ic = Ic;
