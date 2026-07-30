import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { primaryNav } from "@/data/navigation";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const paths = ["/", ...primaryNav.map((n) => n.href), "/projects/secpod"];

  return paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: now,
    priority: path === "/" ? 1 : 0.7,
  }));
}
