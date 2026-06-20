import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://youngdentalsolutions.com";
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/practice-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/due-diligence`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/coaching`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/services/recruiting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
  ];
}
