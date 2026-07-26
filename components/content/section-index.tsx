import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { EmptyState } from "@/components/content/empty-state";
import { PostCard } from "@/components/content/post-card";
import type { ContentSection } from "@/data/content";
import type { PostMeta } from "@/lib/posts";

export function SectionIndex({
  config,
  posts,
  icon,
}: {
  config: ContentSection;
  posts: PostMeta[];
  icon: LucideIcon;
}) {
  return (
    <Container className="py-16 sm:py-20">
      <SectionHeading
        as="h1"
        eyebrow={config.eyebrow}
        title={config.title}
        description={config.description}
      />

      {posts.length === 0 ? (
        <EmptyState icon={icon} message={config.emptyState} />
      ) : (
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </Container>
  );
}
