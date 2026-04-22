import Image from "next/image";

export function Header() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "18px clamp(16px, 4vw, 32px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <a
          href="#top"
          aria-label="Prevyl — top"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            color: "var(--text-primary)",
          }}
        >
          <span
            style={{
              position: "relative",
              display: "inline-flex",
              width: 32,
              height: 32,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              aria-hidden="true"
              style={{
                position: "absolute",
                inset: 0,
                background: "var(--accent)",
                borderRadius: 6,
                opacity: 0.15,
                filter: "blur(8px)",
              }}
            />
            <Image
              src="/assets/prevyl-monogram-dark.svg"
              alt=""
              width={28}
              height={28}
              priority
              style={{ position: "relative" }}
            />
          </span>
          <span style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
            <span
              style={{
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: "0.02em",
              }}
            >
              Prevyl
            </span>
            <span
              className="header-sublabel"
              style={{
                marginTop: 4,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.2em",
                color: "var(--text-muted)",
              }}
            >
              RESEARCH · BLR
            </span>
          </span>
        </a>

        <nav
          aria-label="Primary"
          className="header-nav"
          style={{ display: "flex", alignItems: "center", gap: 4 }}
        >
          <a href="#about" className="nav-pill">
            <span className="num">/01</span> About
          </a>
          <a href="#contact" className="nav-pill">
            <span className="num">/02</span> Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      style={{
        minHeight: "90svh",
        display: "flex",
        alignItems: "center",
        paddingTop: "max(7rem, 14vh)",
        paddingBottom: "clamp(2rem, 8vh, 6rem)",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <span className="availability-pill">
          <span aria-hidden="true" className="dot" />
          RESEARCH PHASE · BANGALORE
        </span>

        <h1
          style={{
            marginTop: 24,
            fontSize: "var(--fluid-h1)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            color: "var(--text-primary)",
          }}
        >
          Prevyl is a research
          <br />
          project, <em style={{ color: "var(--text-primary)" }}>not</em> a product.
        </h1>

        <p
          style={{
            marginTop: 24,
            maxWidth: 640,
            fontSize: 18,
            lineHeight: 1.55,
            color: "var(--text-secondary)",
          }}
        >
          I&apos;m Aryan B V, talking to Indian SME exporters about what actually wastes their time —{" "}
          <em style={{ color: "var(--text-primary)" }}>before</em> writing a single line of product code.
        </p>

        <div
          className="hero-cta-group"
          style={{
            marginTop: 36,
            display: "flex",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <a href="#about" className="btn-xl primary">
            Read about me →
          </a>
          <a href="#contact" className="btn-xl ghost">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section
      id="about"
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "clamp(4rem, 10vh, 7rem) 24px",
        scrollMarginTop: 88,
      }}
    >
      <div className="eyebrow" style={{ marginBottom: 20 }}>
        <span className="num">/01</span>
        <span>About</span>
      </div>

      <h2
        style={{
          marginBottom: 32,
          fontSize: "var(--fluid-h2)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.005em",
          color: "var(--text-primary)",
        }}
      >
        Who I am.
      </h2>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          fontSize: 17,
          lineHeight: 1.65,
          color: "var(--text-secondary)",
        }}
      >
        <p>
          I&apos;m Aryan B V. Full-stack engineer, B.Tech in AI/ML from Ramaiah University of Applied Sciences (2021–25). Based in Bangalore.
        </p>
        <p>
          Before Prevyl, I built{" "}
          <a
            href="https://aryanbv.com/projects/ajsp-manager"
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            AJSP Manager
          </a>{" "}
          — a PWA running daily at my family&apos;s automotive spare parts shop in Karnataka, replacing a 15-year Excel workflow. I&apos;ve also shipped a trilogy of PDF tooling to PyPI, npm, and the MCP Registry. My full portfolio is at{" "}
          <a
            href="https://aryanbv.com"
            className="text-link"
            target="_blank"
            rel="noreferrer"
          >
            aryanbv.com
          </a>
          .
        </p>
        <p>
          Prevyl is my current focus. I&apos;m in the research phase — interviewing Indian SME exporters to understand their real workflow. No product yet. That comes after the interviews tell me what to build.
        </p>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "clamp(4rem, 10vh, 7rem) 24px",
        scrollMarginTop: 88,
      }}
    >
      <div className="eyebrow" style={{ marginBottom: 20 }}>
        <span className="num">/02</span>
        <span>Contact</span>
      </div>

      <h2
        style={{
          marginBottom: 32,
          fontSize: "var(--fluid-h2)",
          fontWeight: 700,
          lineHeight: 1.1,
          letterSpacing: "-0.005em",
          color: "var(--text-primary)",
        }}
      >
        Talk to me.
      </h2>

      <p
        style={{
          marginBottom: 36,
          fontSize: 17,
          lineHeight: 1.65,
          color: "var(--text-secondary)",
        }}
      >
        If you export from India and have 20 minutes, I&apos;d like to hear how you work. In person if you&apos;re in Bangalore, a call if you&apos;re elsewhere.
      </p>

      <div
        className="contact-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginBottom: 32,
        }}
      >
        <a href="mailto:aryan@prevyl.com" className="contact-card">
          <span className="label">Email</span>
          <span className="value">aryan@prevyl.com</span>
        </a>
        <a
          href="https://www.linkedin.com/in/aryan-b-v-78aa63246/"
          className="contact-card"
          target="_blank"
          rel="noreferrer"
        >
          <span className="label">LinkedIn</span>
          <span className="value">/in/aryan-b-v-78aa63246</span>
        </a>
      </div>

      <span className="location-pill">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M12 2c-3.866 0-7 3.134-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z"
            fill="currentColor"
          />
        </svg>
        Bangalore, IN
      </span>
    </section>
  );
}

export function Footer() {
  return (
    <footer style={{ padding: "56px 24px 40px", textAlign: "center" }}>
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.15em",
          color: "var(--text-muted)",
        }}
      >
        Prevyl · Built by Aryan B V · Last updated April 2026
      </p>
    </footer>
  );
}
