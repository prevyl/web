"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE_EMPH: [number, number, number, number] = [0.16, 1, 0.3, 1];

/* Inline mail + LinkedIn icons. Keeps us off external icon libraries
   (per prompt) while still giving the contact rows visual hierarchy. */
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
          aria-label="prevyl — top"
          style={{
            display: "inline-flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: 4,
            lineHeight: 1,
            textDecoration: "none",
            color: "var(--text-primary)",
          }}
        >
          {/* Wordmark SVG is the full brand mark — lowercase prevyl with
              amber y. No accompanying monogram; the wordmark carries the
              name on its own. */}
          <Image
            src="/assets/prevyl-wordmark-dark.svg"
            alt="prevyl"
            width={84}
            height={26}
            priority
            style={{ display: "block", height: 24, width: "auto" }}
          />
          <span
            className="header-sublabel"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              letterSpacing: "0.2em",
              color: "var(--text-muted)",
              paddingLeft: 2,
            }}
          >
            RESEARCH · BLR
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
  const reduce = useReducedMotion();
  const child = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 10 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5, ease: EASE_EMPH },
      };

  return (
    <section
      id="top"
      style={{
        position: "relative",
        minHeight: "90svh",
        display: "flex",
        alignItems: "center",
        paddingTop: "max(7rem, 14vh)",
        paddingBottom: "clamp(2rem, 8vh, 6rem)",
        overflow: "hidden",
      }}
    >
      <motion.div
        initial={reduce ? undefined : "hidden"}
        animate={reduce ? undefined : "visible"}
        variants={
          reduce
            ? undefined
            : {
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }
        }
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: 720,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <motion.span
          className="availability-pill"
          variants={
            reduce
              ? undefined
              : {
                  hidden: { opacity: 0, y: 10 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EMPH } },
                }
          }
        >
          <span aria-hidden="true" className="dot" />
          RESEARCH PHASE · BANGALORE
        </motion.span>

        <motion.h1
          variants={
            reduce
              ? undefined
              : {
                  hidden: { opacity: 0, y: 12 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE_EMPH } },
                }
          }
          style={{
            marginTop: 24,
            fontSize: "var(--fluid-h1)",
            fontWeight: 700,
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            color: "var(--text-primary)",
          }}
        >
          prevyl is a research
          <br />
          project, <em style={{ color: "var(--text-primary)" }}>not</em> a product.
        </motion.h1>

        <motion.p
          variants={
            reduce
              ? undefined
              : {
                  hidden: { opacity: 0, y: 8 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_EMPH } },
                }
          }
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
        </motion.p>

        <motion.div
          {...child}
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
        </motion.div>
      </motion.div>
    </section>
  );
}

function RevealBlock({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: EASE_EMPH }}
    >
      {children}
    </motion.div>
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
      <RevealBlock>
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
            Before prevyl, I built{" "}
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
            prevyl is my current focus. I&apos;m in the research phase — interviewing Indian SME exporters to understand their real workflow. No product yet. That comes after the interviews tell me what to build.
          </p>
        </div>
      </RevealBlock>
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
      <RevealBlock>
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
            marginBottom: 32,
            fontSize: 17,
            lineHeight: 1.65,
            color: "var(--text-secondary)",
          }}
        >
          If you export from India and have 20 minutes, I&apos;d like to hear how you work. In person if you&apos;re in Bangalore, a call if you&apos;re elsewhere.
        </p>

        <div role="list" style={{ borderTop: "1px solid var(--divider)", marginBottom: 36 }}>
          <a href="mailto:aryan@prevyl.com" className="contact-row" role="listitem">
            <span className="icon" aria-hidden="true">
              <MailIcon />
            </span>
            <span className="label">Email</span>
            <span className="value">aryan@prevyl.com</span>
            <span className="arrow" aria-hidden="true">↗</span>
          </a>
          <a
            href="https://www.linkedin.com/in/aryanbv/"
            className="contact-row"
            role="listitem"
            target="_blank"
            rel="noreferrer"
          >
            <span className="icon" aria-hidden="true">
              <LinkedInIcon />
            </span>
            <span className="label">LinkedIn</span>
            <span className="value">/in/aryanbv</span>
            <span className="arrow" aria-hidden="true">↗</span>
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
      </RevealBlock>
    </section>
  );
}

export function SectionDivider() {
  return (
    <div
      aria-hidden="true"
      className="section-divider"
      style={{ marginTop: 16, marginBottom: 16 }}
    />
  );
}

export function Footer() {
  return (
    <footer style={{ padding: "56px 24px 40px", textAlign: "center" }}>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 16,
        }}
      >
        <Image
          src="/assets/prevyl-monogram-dark.svg"
          alt=""
          width={24}
          height={24}
          aria-hidden="true"
          style={{ opacity: 0.6 }}
        />
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.15em",
            color: "var(--text-muted)",
          }}
        >
          prevyl · Built by Aryan B V · Last updated April 2026
        </p>
      </div>
    </footer>
  );
}
