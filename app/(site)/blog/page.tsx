import type { Metadata } from "next";
import { Newspaper } from "lucide-react";
import { SectionIndex } from "@/components/content/section-index";
import { contentSections } from "@/data/content";
import { getAllPosts } from "@/lib/posts";

const config = contentSections.blog;

export const metadata: Metadata = { title: config.title, description: config.description };

export default function BlogPage() {
  return <SectionIndex config={config} posts={getAllPosts("blog")} icon={Newspaper} />;
}
