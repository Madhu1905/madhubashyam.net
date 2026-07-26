import type { Metadata } from "next";
import { Microscope } from "lucide-react";
import { SectionIndex } from "@/components/content/section-index";
import { contentSections } from "@/data/content";
import { getAllPosts } from "@/lib/posts";

const config = contentSections.research;

export const metadata: Metadata = { title: config.title, description: config.description };

export default function ResearchPage() {
  return <SectionIndex config={config} posts={getAllPosts("research")} icon={Microscope} />;
}
