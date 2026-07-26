import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PostLayout } from "@/components/content/post-layout";
import { getPost, getPostSlugs } from "@/lib/posts";

const SECTION = "lab";

export function generateStaticParams() {
  return getPostSlugs(SECTION).map((slug) => ({ slug }));
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

export default async function LabPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(SECTION, slug);
  if (!post) notFound();

  const { default: Content } = await import(`@/content/lab/${slug}.mdx`);

  return (
    <PostLayout meta={post}>
      <Content />
    </PostLayout>
  );
}
