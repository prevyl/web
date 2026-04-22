import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prevyl.com"),
  title: "prevyl — Aryan B V",
  description:
    "prevyl is a research project by Aryan B V, talking to Indian SME exporters in Bangalore.",
  alternates: {
    canonical: "https://prevyl.com/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/assets/prevyl-monogram-dark.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/assets/prevyl-monogram-light.svg",
        type: "image/svg+xml",
        media: "(prefers-color-scheme: light)",
      },
    ],
    apple: { url: "/assets/prevyl-monogram-light.svg" },
  },
  openGraph: {
    title: "prevyl — Aryan B V",
    description:
      "prevyl is a research project by Aryan B V, talking to Indian SME exporters in Bangalore.",
    url: "https://prevyl.com/",
    siteName: "prevyl",
    locale: "en_IN",
    type: "website",
    // No explicit images — Next.js auto-links src/app/opengraph-image.tsx
    // for og:image and reuses it for twitter:image.
  },
  twitter: {
    card: "summary_large_image",
    title: "prevyl — Aryan B V",
    description:
      "prevyl is a research project by Aryan B V, talking to Indian SME exporters in Bangalore.",
  },
};

// Person JSON-LD — binds prevyl.com ↔ aryanbv.com ↔ LinkedIn as the same
// entity in Google's Knowledge Graph. For a credibility site this is the
// single highest-leverage SEO signal: "yes, the Aryan B V behind prevyl
// is the same Aryan B V behind aryanbv.com."
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aryan B V",
  url: "https://prevyl.com/",
  image: "https://prevyl.com/og.png",
  jobTitle: "Founder",
  worksFor: {
    "@type": "Organization",
    name: "prevyl",
    url: "https://prevyl.com/",
  },
  sameAs: [
    "https://aryanbv.com",
    "https://www.linkedin.com/in/aryanbv/",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
        {/* Structured data — safe because personJsonLd is a static object
            literal under our control (no user input, no external data). */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
