import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://dragonkitchen.pt",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://dragonkitchen.pt/menu",
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];
}
