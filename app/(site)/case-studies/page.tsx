import type { Metadata } from "next";
import { FileSearch } from "lucide-react";
import { SectionIndex } from "@/components/content/section-index";
import { contentSections } from "@/data/content";
import { getAllPosts } from "@/lib/posts";

const config = contentSections["case-studies"];

export const metadata: Metadata = { title: config.title, description: config.description };

export default function CaseStudiesPage() {
  return <SectionIndex config={config} posts={getAllPosts("case-studies")} icon={FileSearch} />;
}
