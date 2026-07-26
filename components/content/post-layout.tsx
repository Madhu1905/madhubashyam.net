import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { contentSections } from "@/data/content";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function PostLayout({ meta, children }: { meta: PostMeta; children: React.ReactNode }) {
  const section = contentSections[meta.section];

  return (
    <Container className="py-16 sm:py-20">
      <Link
        href={`/${meta.section}`}
        className="text-muted hover:text-fg inline-flex items-center gap-1.5 text-sm transition-colors"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden /> {section?.title ?? "Back"}
      </Link>

      <header className="mt-6 max-w-2xl">
        {meta.date && <time className="text-muted font-mono text-xs">{formatDate(meta.date)}</time>}
        <h1 className="text-fg mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{meta.title}</h1>
        {meta.description && (
          <p className="text-muted mt-3 text-lg leading-relaxed">{meta.description}</p>
        )}
        {meta.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="border-border bg-surface text-muted rounded border px-2 py-0.5 text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="mt-10 max-w-2xl">{children}</article>
    </Container>
  );
}
