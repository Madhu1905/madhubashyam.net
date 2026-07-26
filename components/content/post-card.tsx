import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/${post.section}/${post.slug}`}
      className="group border-border bg-surface hover:border-accent/40 flex flex-col rounded-xl border p-6 transition-colors"
    >
      <div className="flex items-center justify-between">
        {post.date ? (
          <time className="text-muted font-mono text-xs">{formatDate(post.date)}</time>
        ) : (
          <span />
        )}
        <ArrowUpRight
          className="text-muted group-hover:text-accent h-4 w-4 transition-colors"
          aria-hidden
        />
      </div>
      <h3 className="text-fg group-hover:text-accent font-display mt-3 text-lg font-semibold transition-colors">
        {post.title}
      </h3>
      {post.description && (
        <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">{post.description}</p>
      )}
      {post.tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="border-border bg-bg text-muted rounded border px-2 py-0.5 text-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
