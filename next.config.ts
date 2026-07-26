import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Let .md/.mdx files be treated as pages/content.
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  // Pin the workspace root: a stray package-lock.json in the home directory
  // otherwise makes Turbopack infer the wrong root.
  turbopack: {
    root: import.meta.dirname,
  },
};

const withMDX = createMDX({
  options: {
    // String plugin names so Turbopack can load them (functions can't cross the Rust boundary).
    remarkPlugins: ["remark-frontmatter", "remark-gfm"],
    rehypePlugins: ["rehype-slug"],
  },
});

export default withMDX(nextConfig);
