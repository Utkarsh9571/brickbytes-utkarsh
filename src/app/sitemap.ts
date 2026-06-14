import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://brickbytes.in";
  
  const routes = [
    { path: "", changeFrequency: "weekly" as const, priority: 1.0 },
    { path: "/technology", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/how-it-works", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/pricing", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/about", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/contact", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/privacy", changeFrequency: "monthly" as const, priority: 0.5 },
    { path: "/terms", changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
