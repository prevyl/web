import type { NextConfig } from "next";

// CSP for a fully static single-page site.
// - script-src: self + Vercel Analytics' script endpoint. 'unsafe-inline'
//   is retained because React's streaming SSR emits small inline bootstrap
//   scripts; 'unsafe-eval' is dev-only (React Fast Refresh / Turbopack HMR
//   use eval in dev — removed in prod).
// - style-src: self + 'unsafe-inline' for our inline component styles.
// - img-src: self + data: (the fractal-noise overlay is a data: URI).
// - connect-src: self + Vercel Analytics endpoints.
// - font-src: self (Geist is self-hosted at build time via next/font).
// - frame-ancestors 'none' locks out iframing entirely.
// - form-action 'self' — we have no forms, but locks anyway.
// - object-src 'none', base-uri 'self' — hardened defaults.
const isDev = process.env.NODE_ENV === "development";
const scriptSrc = isDev
  ? "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com"
  : "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com";

const csp = [
  "default-src 'self'",
  scriptSrc,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self'",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  // 'self' (not 'none') so the site can be embedded by itself — used by
  // dev tooling + any future same-origin preview needs. Cross-origin
  // embedding is still blocked. X-Frame-Options stays aligned as SAMEORIGIN.
  "frame-ancestors 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "form-action 'self'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig: NextConfig = {
  devIndicators: false,
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains; preload",
          },
          { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
          { key: "Content-Security-Policy", value: csp },
        ],
      },
    ];
  },
};

export default nextConfig;
