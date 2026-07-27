/**
 * GitHub Pages base path — "/<repo>" for a project page, "" for a custom domain
 * or user page. Injected at build by the deploy workflow (actions/configure-pages).
 * Next prefixes routes/CSS/JS automatically, but NOT string-src assets in /public,
 * so prefix those (portrait, résumé PDF, favicon) with `asset()`.
 */
export const BASE_PATH = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/+$/, "");

export function asset(path: string) {
  return `${BASE_PATH}${path}`;
}
