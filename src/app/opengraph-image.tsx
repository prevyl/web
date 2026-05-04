import { ImageResponse } from "next/og";

// Next.js App Router convention — this file auto-generates the OG
// image at build time via Satori and registers the og:image + twitter:image
// meta tags pointing to /opengraph-image. Source SVG reference lives at
// public/assets/prevyl-og.svg; this file recreates the same design in
// JSX so we get a real PNG that LinkedIn / WhatsApp / Twitter actually
// render in their link previews (SVG og:image is not supported by most).

export const alt =
  "prevyl — Researching what wastes Indian SME exporters' time. By Aryan B V.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Fetch a subset of the Geist variable font from Google Fonts at build
// time. text= reduces the payload to only the glyphs we actually use,
// which keeps ImageResponse generation fast. Cached across builds.
async function loadGoogleFont(family: string, weight: number, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    family,
  )}:wght@${weight}&text=${encodeURIComponent(text)}`;
  const css = await fetch(url).then((r) => r.text());
  const match = css.match(/src: url\((.+?)\) format/);
  if (!match) throw new Error(`Unable to locate ${family}@${weight} font URL`);
  return fetch(match[1]).then((r) => r.arrayBuffer());
}

export default async function OG() {
  // Every unique character in the card — tells Google to send only those glyphs.
  const text = "prevyl.com Researching what wastes Indian SME exporters' time.·";
  const [geistRegular, geistMedium] = await Promise.all([
    loadGoogleFont("Geist", 400, text),
    loadGoogleFont("Geist", 500, text),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0a0a0a",
          color: "#f5f5f5",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          fontFamily: "Geist",
        }}
      >
        {/* Thin amber inner border (matches the SVG reference) */}
        <div
          style={{
            position: "absolute",
            top: 1,
            left: 1,
            right: 1,
            bottom: 1,
            border: "2px solid rgba(245, 166, 35, 0.2)",
          }}
        />

        {/* Top-left URL */}
        <div
          style={{
            position: "absolute",
            top: 56,
            left: 56,
            color: "#a09888",
            fontSize: 22,
            fontWeight: 500,
          }}
        >
          prevyl.com
        </div>

        {/* Top-right amber square — Prevyl's corner mark */}
        <div
          style={{
            position: "absolute",
            top: 64,
            right: 56,
            width: 14,
            height: 14,
            background: "#f5a623",
          }}
        />

        {/* Centered wordmark: prev + amber y + l */}
        <div
          style={{
            fontSize: 220,
            fontWeight: 500,
            letterSpacing: -6,
            lineHeight: 1,
            display: "flex",
          }}
        >
          <span>prev</span>
          <span style={{ color: "#f5a623" }}>y</span>
          <span>l</span>
        </div>

        {/* Tagline — matches the page's research thesis verbatim. Don't
            paraphrase: the OG card is the first thing seen on social
            shares, and any drift from the page copy reads as bait-and-switch. */}
        <div
          style={{
            marginTop: 36,
            color: "#a09888",
            fontSize: 28,
            fontWeight: 400,
            textAlign: "center",
            maxWidth: 980,
          }}
        >
          Researching what wastes Indian SME exporters&apos; time.
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Geist", data: geistRegular, weight: 400, style: "normal" },
        { name: "Geist", data: geistMedium, weight: 500, style: "normal" },
      ],
    },
  );
}
