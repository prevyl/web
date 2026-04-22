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
    images: ["/og.png"],
    type: "website",
  },
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
      </body>
    </html>
  );
}
