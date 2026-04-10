import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://decisionfoundry.ai";

  const pages = [
    { url: "", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/how-we-work", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/case-studies", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/industries", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/resources", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.7, changeFrequency: "monthly" as const },
    // Resource articles
    { url: "/resources/what-is-agentic-ai", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/resources/human-in-the-loop", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/resources/ap-processing-transformation", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/resources/integrating-ai-with-legacy-systems", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/resources/ai-automation-readiness-checklist", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/resources/call-quality-at-scale", priority: 0.7, changeFrequency: "monthly" as const },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
