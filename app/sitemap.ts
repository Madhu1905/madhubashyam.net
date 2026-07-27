import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { growthNav, primaryNav } from "@/data/navigation";
import { getAllPosts } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const paths = [
    "/",
    ...primaryNav.map((n) => n.href),
    ...growthNav.map((n) => n.href),
    "/projects/secpod",
  ];

  const staticEntries: MetadataRoute.Sitemap = paths.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified: now,
    priority: path === "/" ? 1 : 0.7,
  }));

  const sections = ["blog", "case-studies", "lab", "research"];
  const postEntries: MetadataRoute.Sitemap = sections.flatMap((section) =>
    getAllPosts(section).map((post) => ({
      url: `${site.url}/${section}/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : now,
      priority: 0.6,
    })),
  );

  return [...staticEntries, ...postEntries];
}
