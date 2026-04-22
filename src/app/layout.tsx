import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://prevyl.com"),
  title: "Prevyl — Aryan B V",
  description:
    "Prevyl is a research project by Aryan B V, talking to Indian SME exporters in Bangalore.",
  openGraph: {
    title: "Prevyl — Aryan B V",
    description:
      "Prevyl is a research project by Aryan B V, talking to Indian SME exporters in Bangalore.",
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
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
