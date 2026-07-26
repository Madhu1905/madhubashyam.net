import type { Metadata } from "next";
import { FlaskConical } from "lucide-react";
import { SectionIndex } from "@/components/content/section-index";
import { contentSections } from "@/data/content";
import { getAllPosts } from "@/lib/posts";

const config = contentSections.lab;

export const metadata: Metadata = { title: config.title, description: config.description };

export default function LabPage() {
  return <SectionIndex config={config} posts={getAllPosts("lab")} icon={FlaskConical} />;
}
