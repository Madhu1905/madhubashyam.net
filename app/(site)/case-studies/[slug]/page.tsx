import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostLayout } from "@/components/content/post-layout";
import { getPost, getStaticParamSlugs } from "@/lib/posts";

const SECTION = "case-studies";

export function generateStaticParams() {
  return getStaticParamSlugs(SECTION).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(SECTION, slug);
  return post ? { title: post.title, description: post.description } : {};
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(SECTION, slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/case-studies/${slug}.mdx`);

  return (
    <PostLayout meta={post}>
      <Content />
    </PostLayout>
  );
}
