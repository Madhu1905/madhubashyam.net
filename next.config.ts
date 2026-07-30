import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Static export for GitHub Pages (emits ./out with plain HTML/CSS/JS).
  output: "export",
  // Emit /about/index.html etc. so paths resolve cleanly on GitHub Pages.
  trailingSlash: true,
  // Prefix routes/assets with the Pages base path so they resolve on the project
  // URL (github.io/<repo>/…). The deploy workflow injects NEXT_PUBLIC_BASE_PATH
  // from actions/configure-pages; empty for a custom domain (served at root).
  basePath: (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/+$/, "") || undefined,
  // Pages can't run the Next image optimizer, so serve images as-is.
  images: { unoptimized: true },
  // Pin the workspace root: a stray package-lock.json in the home directory
  // otherwise makes Turbopack infer the wrong root.
  turbopack: {
    root: import.meta.dirname,
  },
};

export default nextConfig;
