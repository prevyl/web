import type { CSSProperties } from "react";

/* All sections render as React Server Components — no `"use client"`,
   no motion library. Entry animation is CSS keyframes + animation-delay,
   scroll reveals use @supports (animation-timeline: view()), every hover
   is pure CSS. The whole route prerenders to static HTML at build time. */

function ArrowOutIcon({ size = 12 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8 10H5.5v8H8v-8zM6.75 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM18.5 18v-4.5c0-2.2-1.2-3.25-2.75-3.25-1.26 0-1.82.69-2.13 1.17V10h-2.5c.03.67 0 8 0 8h2.5v-4.47c0-.22.02-.44.08-.6.17-.45.58-.91 1.27-.91.9 0 1.26.68 1.26 1.67V18h2.27z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 2c-3.866 0-7 3.134-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Header() {
  return (
    // Inline backdrop-filter — see globals.css `.site-header` for the rationale.
    // Tailwind v4's Lightning CSS minifier was stripping the unprefixed
    // declaration from the stylesheet, breaking the frosted-glass effect on
    // modern Chromium. Inline style is immutable through the build pipeline.
    <header
      className="site-header"
      style={{
        backdropFilter: "blur(16px) saturate(180%)",
        WebkitBackdropFilter: "blur(16px) saturate(180%)",
      }}
    >
      <div className="site-header-inner">
        {/* No aria-label here: the visible text "prevyl RESEARCH · BLR"
            already serves as the accessible name. Adding aria-label that
            doesn't start with the visible text fails axe rule
            label-content-name-mismatch (WCAG SC 2.5.3). */}
        <a href="#top" className="brand">
          <span>
            prev<span className="y">y</span>l
          </span>
          <span className="brand-sublabel">RESEARCH · BLR</span>
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#research" className="nav-pill">
            <span className="num">/01</span> Research
          </a>
          <a href="#work" className="nav-pill">
            <span className="num">/02</span> Work
          </a>
          <a href="#contact" className="nav-pill">
            <span className="num">/03</span> Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="page-wrap col-720" style={{ width: "100%" }}>
        <div className="hero-fade hero-fade-1">
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            <span>RESEARCH PHASE · BANGALORE</span>
          </span>
        </div>
        <h1 className="hero-h1 hero-fade hero-fade-2">
          I&apos;m researching what wastes Indian SME exporters&apos;{" "}
          <em>time</em>.
        </h1>
        <p className="hero-sub hero-fade hero-fade-3">
          Outside the research, I take on freelance and contract work — from
          one-off integrations to end-to-end product builds. If you have an
          idea you want tested before committing budget to a real build,
          I&apos;ll do the research without a fee and tell you what&apos;s
          possible. If a fix is buildable and we agree on scope, we discuss
          price then.
        </p>
        <div className="hero-cta-row hero-fade hero-fade-4">
          <a href="#contact" className="btn btn-primary">
            Talk to me
            <span className="arrow">
              <ArrowOutIcon />
            </span>
          </a>
          <a
            href="https://aryanbv.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            See the work
            <span className="arrow">
              <ArrowOutIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Research() {
  return (
    <section id="research" className="section">
      <div className="page-wrap col-720">
        <div className="eyebrow reveal">
          <span className="num">/01</span>
          <span>RESEARCH</span>
        </div>
        <h2 className="h2-tight reveal">What I&apos;m doing right now.</h2>
        <div className="body-stack">
          <p className="reveal">
            I&apos;m <strong>Aryan B V</strong>, a full-stack engineer in
            Bangalore with a B.Tech in AI/ML. I&apos;ve shipped a PDF editing
            trilogy on PyPI and npm, and a PWA running daily at a family-owned
            spare parts retailer in Karnataka.
          </p>
          <p className="reveal">
            <strong>prevyl is a research project, not a product.</strong>{" "}
            I&apos;m interviewing Indian SME exporters about what wastes their
            time — the manual spreadsheet juggling, the chasing-payments loops,
            the paperwork roundtrips with banks and customs — before writing a
            single line of product code.
          </p>
          <p className="reveal">
            No product yet. That comes after the interviews tell me what to
            build.
          </p>
        </div>
      </div>
    </section>
  );
}

const DOOR_URL_CHARS = Array.from("aryanbv.com");

export function Work() {
  return (
    <section id="work" className="section door-section">
      <div className="page-wrap col-1100">
        <div className="eyebrow reveal">
          <span className="num">/02</span>
          <span>WORK</span>
        </div>
        <h2 className="h2-tight reveal">Things I&apos;ve built live elsewhere.</h2>
        <div className="door-intro reveal">
          <p>
            My shipped work lives at <strong>aryanbv.com</strong> — the PDF
            editing trilogy (<strong>628 tests, 85% coverage</strong>, on PyPI
            and npm), a PWA running daily at a family-owned spare parts
            retailer, and a few others.
          </p>
          <p style={{ color: "var(--text-muted)" }}>
            Source, case studies, and metrics — all there.
          </p>
        </div>

        {/* No aria-label here: the visible content (eyebrow, URL, meta) is
            the accessible name for screen readers. The previous
            "Visit aryanbv.com..." aria-label failed axe rule
            label-content-name-mismatch because visible text didn't begin
            with "Visit". Screen readers will read the full content, which
            is informative — and `target="_blank"` triggers the standard
            "opens in a new tab" announcement automatically. */}
        <a
          href="https://aryanbv.com"
          target="_blank"
          rel="noopener noreferrer"
          className="door"
        >
          <div className="door-eyebrow">
            <span style={{ marginRight: 14 }}>PORTFOLIO ↗</span>
            <span style={{ color: "var(--text-muted)" }}>OPENS IN NEW TAB</span>
          </div>
          <div className="door-row">
            <span className="door-url">
              {DOOR_URL_CHARS.map((ch, i) => (
                <span
                  key={i}
                  className="ch"
                  style={{ "--i": i } as CSSProperties}
                >
                  {ch}
                </span>
              ))}
            </span>
            <span className="door-arrow" aria-hidden="true">
              <ArrowOutIcon size={22} />
            </span>
          </div>
          <div className="door-meta">
            <div className="door-meta-item">
              <span className="door-meta-label">PROJECTS</span>
              <span className="door-meta-value">6 shipped</span>
            </div>
            <div className="door-meta-item">
              <span className="door-meta-label">PACKAGES</span>
              <span className="door-meta-value">PyPI · npm</span>
            </div>
            <div className="door-meta-item">
              <span className="door-meta-label">COVERAGE</span>
              <span className="door-meta-value">
                <span className="accent">85%</span> · 628 tests
              </span>
            </div>
            <div className="door-meta-item">
              <span className="door-meta-label">UPDATED</span>
              <span className="door-meta-value">Weekly</span>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="page-wrap col-720">
        <div className="eyebrow reveal">
          <span className="num">/03</span>
          <span>CONTACT</span>
        </div>
        <h2 className="h2-tight reveal">Talk to me.</h2>
        <div className="body-stack reveal">
          <p>
            If you export from India and have <strong>20 minutes</strong>,
            I&apos;d like to hear how you actually work. In person if
            you&apos;re in Bangalore, a call if you&apos;re elsewhere. No
            pitch, no signup, no list.
          </p>
        </div>

        <div className="aside-block reveal">
          <div className="aside-eyebrow">One more thing.</div>
          <p>
            In the meantime, I take on technical work — web apps, MCP servers,
            Python tooling, AI integrations. Bring me an idea you want tested
            before you commit budget to building it, and I&apos;ll do the
            research without a fee.
          </p>
        </div>

        <div className="contact-list reveal">
          <a href="mailto:aryan@prevyl.com" className="contact-row">
            <span className="icon">
              <MailIcon />
            </span>
            <span className="label">EMAIL</span>
            <span className="value">aryan@prevyl.com</span>
            <span className="arrow">
              <ArrowOutIcon size={14} />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/aryan-b-v-78aa63246/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-row"
          >
            <span className="icon">
              <LinkedInIcon />
            </span>
            <span className="label">LINKEDIN</span>
            <span className="value">/in/aryan-b-v</span>
            <span className="arrow">
              <ArrowOutIcon size={14} />
            </span>
          </a>
        </div>

        <span className="location-pill">
          <PinIcon />
          <span>BANGALORE, IN</span>
        </span>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <p>
        prevyl · Built by Aryan B V · See more at{" "}
        <a
          href="https://aryanbv.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          aryanbv.com
        </a>
      </p>
    </footer>
  );
}
