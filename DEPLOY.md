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

## Option B — GitHub Pages (already configured ✅)

The project is set up for GitHub Pages: `next.config.ts` uses `output: "export"` (plus
`trailingSlash` and unoptimized images), the deploy workflow lives at
`.github/workflows/deploy.yml`, and `public/CNAME` holds `madhubashyam.net`. The static
export has been built and verified — every page, nested routes, `sitemap`/`robots`/`manifest`,
and the OG image render correctly served as plain files.

You only need to:

1. **Push** the repo to GitHub (Step 1 above).
2. Repo → **Settings → Pages** → **Build and deployment → Source: `GitHub Actions`**.
   **That is the only Pages setting to change.**
3. The **Deploy to GitHub Pages** workflow runs automatically on each push to `main`
   (watch it under the **Actions** tab). First run takes ~2 minutes; when it's green, the
   site is live.
4. **Custom domain (madhubashyam.net):**
   - Settings → Pages → **Custom domain** → type `madhubashyam.net` → **Save**.
   - At your domain registrar, add these DNS records:
     - Four **A** records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
     - One **CNAME** for `www` → `madhu1905.github.io`
   - Once GitHub issues the certificate, tick **Enforce HTTPS**.

> The committed `CNAME` keeps the custom domain across redeploys. Before DNS propagates, use
> the custom domain (the raw `madhu1905.github.io/…` URL will look unstyled — that's expected).

### Good to know
- Adding a post later still just means dropping an `.mdx` file in `content/<section>/` and
  pushing — the workflow rebuilds and redeploys.
- Tradeoffs vs. Vercel: images aren't auto-optimized, and there's no server runtime (fine
  today — nothing uses one).

---

## Notes

- **Node:** the repo prefers Node ≥ 22.13 (you have 22.11 locally — works, but consider
  `nvm install 22`). Vercel picks a compatible Node automatically.
- **No secrets** are committed; there's no `.env` to configure.
- **Adding blog posts** later: drop an `.mdx` file into `content/<section>/` — see
  `content/README.md`. Commit + push and it deploys.
