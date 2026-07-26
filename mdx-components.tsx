import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Global MDX element styling — maps rendered markdown to the design tokens.
 * Used by every .mdx post via @next/mdx.
 */
const components: MDXComponents = {
  h1: (props) => <h1 className="text-fg mt-10 mb-4 text-3xl font-bold tracking-tight" {...props} />,
  h2: (props) => (
    <h2 className="text-fg mt-10 mb-3 text-2xl font-semibold tracking-tight" {...props} />
  ),
  h3: (props) => <h3 className="text-fg mt-8 mb-2 text-xl font-semibold" {...props} />,
  h4: (props) => <h4 className="text-fg mt-6 mb-2 text-lg font-semibold" {...props} />,
  p: (props) => <p className="text-fg/90 my-4 leading-relaxed" {...props} />,
  a: ({ href = "", ...props }) => {
    const external = /^https?:\/\//.test(href);
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        className="text-accent underline underline-offset-2 hover:opacity-80"
        {...props}
      />
    ) : (
      <Link href={href} className="text-accent underline underline-offset-2 hover:opacity-80">
        {props.children}
      </Link>
    );
  },
  ul: (props) => <ul className="text-fg/90 my-4 list-disc space-y-1.5 pl-6" {...props} />,
  ol: (props) => <ol className="text-fg/90 my-4 list-decimal space-y-1.5 pl-6" {...props} />,
  li: (props) => <li className="leading-relaxed" {...props} />,
  blockquote: (props) => (
    <blockquote className="border-accent text-muted my-6 border-l-2 pl-4 italic" {...props} />
  ),
  hr: () => <hr className="border-border my-10" />,
  code: (props) => (
    <code
      className="border-border bg-surface-2 text-highlight rounded border px-1.5 py-0.5 font-mono text-[0.85em]"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="border-border bg-surface my-6 overflow-x-auto rounded-xl border p-4 font-mono text-sm [&_code]:border-0 [&_code]:bg-transparent [&_code]:p-0"
      {...props}
    />
  ),
  table: (props) => (
    <div className="my-6 overflow-x-auto">
      <table className="border-border w-full border-collapse text-sm" {...props} />
    </div>
  ),
  th: (props) => (
    <th
      className="border-border bg-surface text-fg border px-3 py-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props) => <td className="border-border text-fg/90 border px-3 py-2" {...props} />,
  // Content images come from markdown without known dimensions, so a plain <img> is intentional.
  img: ({ alt = "", ...props }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img alt={alt} className="border-border my-6 rounded-xl border" {...props} />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
