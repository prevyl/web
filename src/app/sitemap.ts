import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://prevyl.com/",
      lastModified: new Date("2026-05-05"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
