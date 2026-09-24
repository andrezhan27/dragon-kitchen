import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dragonkitchen.pt",
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
