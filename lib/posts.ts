import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostMeta = {
  slug: string;
  section: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
};

const CONTENT_DIR = path.join(process.cwd(), "content");

function sectionDir(section: string) {
  return path.join(CONTENT_DIR, section);
}

export function getPostSlugs(section: string): string[] {
  const dir = sectionDir(section);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.mdx?$/.test(f) && !f.startsWith("_"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

/**
 * Slugs to prerender for a section's [slug] route. Real posts when they exist,
 * otherwise a single `_keep` placeholder so `output: export` always has at least
 * one path to emit (it renders as a not-found page — never linked or listed).
 */
export function getStaticParamSlugs(section: string): string[] {
  const real = getPostSlugs(section);
  return real.length ? real : ["_keep"];
}

export function getPost(section: string, slug: string): PostMeta | null {
  // Underscore-prefixed files are placeholders — treat as not found.
  if (slug.startsWith("_")) return null;

  for (const ext of [".mdx", ".md"]) {
    const file = path.join(sectionDir(section), slug + ext);
    if (fs.existsSync(file)) {
      const { data } = matter(fs.readFileSync(file, "utf8"));
      return {
        slug,
        section,
        title: typeof data.title === "string" ? data.title : slug,
        description: typeof data.description === "string" ? data.description : "",
        date: typeof data.date === "string" ? data.date : "",
        tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      };
    }
  }
  return null;
}

export function getAllPosts(section: string): PostMeta[] {
  return getPostSlugs(section)
    .map((slug) => getPost(section, slug))
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
