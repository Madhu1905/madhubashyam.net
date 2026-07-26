# Deploying madhubashyam.net

This is a **Next.js 16** app. There are two realistic ways to host it. Both start by
pushing the code to GitHub.

---

## Step 1 — Push the code to GitHub (common to both)

1. Create a new **empty** repo on GitHub — https://github.com/new
   - Name it e.g. `madhubashyam.net`
   - **Do not** add a README, .gitignore, or licence (the repo already has them)

2. From this folder, add the remote and push. The repo is already committed on `main`:

   ```bash
   cd "/Users/madhubb/My Website"

   # HTTPS (simplest):
   git remote add origin https://github.com/Madhu1905/madhubashyam.net.git
   git push -u origin main

   # …or SSH, if you have keys set up:
   # git remote add origin git@github.com:Madhu1905/madhubashyam.net.git
   # git push -u origin main
   ```

That's it — your code is on GitHub. Now pick a host.

---

## Option A — Vercel (recommended)

Native Next.js hosting. Everything works with **no code changes**: the generated OG
image, image optimization, and the MDX blog pipeline all run as-is. Free for personal use.

1. Go to https://vercel.com and sign in **with GitHub**.
2. **Add New → Project** → import your `madhubashyam.net` repo.
3. Vercel auto-detects Next.js. Leave the defaults and click **Deploy**.
4. You get a live URL like `madhubashyam-net.vercel.app` in ~1 minute.
5. Every `git push` to `main` redeploys automatically.

### Custom domain (madhubashyam.net)

1. In the Vercel project → **Settings → Domains** → add `madhubashyam.net` (and `www`).
2. Vercel shows the DNS records to set. At your domain registrar, add:
   - An **A record** for `@` → `76.76.21.21`, **or** the `CNAME`/`ALIAS` Vercel gives you.
   - A **CNAME** for `www` → `cname.vercel-dns.com`.
3. Wait for DNS to propagate (minutes to a couple of hours). Vercel issues HTTPS automatically.

> Update `site.url` in `data/site.ts` only if the final domain differs from
> `https://madhubashyam.net` (it's already set to that).

---

## Option B — GitHub Pages (static export)

Free, hosted on GitHub's own infra, but Pages only serves **static files**, so the app
must be exported statically. This needs a few changes:

1. **`next.config.ts`** — add:
   ```ts
   const nextConfig: NextConfig = {
     output: "export",
     images: { unoptimized: true }, // Pages can't run the image optimizer
     // If hosting at username.github.io/<repo> (no custom domain), also:
     // basePath: "/madhubashyam.net",
     // ...existing options
   };
   ```
2. **Build** produces a static site in `out/`:
   ```bash
   npm run build   # with output:"export", emits ./out
   ```
3. Add a **GitHub Actions** workflow (`.github/workflows/deploy.yml`) that builds and
   publishes `out/` to Pages, then enable **Settings → Pages → Source: GitHub Actions**.
4. **Custom domain:** add a `public/CNAME` file containing `madhubashyam.net`, and point
   DNS at GitHub Pages (A records `185.199.108–111.153`, plus a `www` CNAME to
   `Madhu1905.github.io`).

### Tradeoffs vs. Vercel

- No on-the-fly image optimization (all images served at full size).
- The dynamic OG image (`app/opengraph-image.tsx`) is generated at build to a static PNG —
  usually fine, but worth checking after the first deploy.
- No server features (none are used today, so nothing breaks now — but it caps future options
  like a real contact-form backend).

**Recommendation:** use Vercel unless you specifically want everything on GitHub.

---

## Notes

- **Node:** the repo prefers Node ≥ 22.13 (you have 22.11 locally — works, but consider
  `nvm install 22`). Vercel picks a compatible Node automatically.
- **No secrets** are committed; there's no `.env` to configure.
- **Adding blog posts** later: drop an `.mdx` file into `content/<section>/` — see
  `content/README.md`. Commit + push and it deploys.
