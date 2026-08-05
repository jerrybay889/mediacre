import type { MetadataRoute } from "next";
import { projects } from "@/lib/projects";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  const paths = [
    "",
    "/work",
    "/services",
    "/about",
    "/contact",
    ...projects.map((project) => `/work/${project.slug}`),
  ];

  return paths.map((path) => {
    const changeFrequency: "weekly" | "monthly" = path === "" ? "weekly" : "monthly";
    return {
      url: `${baseUrl}${path}`,
      changeFrequency,
      priority: path === "" ? 1 : 0.7,
    };
  });
}

