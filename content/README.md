# Content

Each folder here — `blog/`, `case-studies/`, `lab/`, `research/` — is a section on the site.
To publish a post, drop an `.mdx` file into the matching folder. It appears automatically; no
code changes needed.

## Frontmatter

Every post starts with YAML frontmatter:

```mdx
---
title: "Detecting suspicious sign-ins with KQL"
description: "A short summary shown on the card and at the top of the post."
date: "2026-08-01"
tags: ["Sentinel", "KQL", "Detection"]
---

Your markdown / MDX body goes here…
```

- **title** (required) — the post title.
- **description** — one-line summary (used on the card and as the page meta description).
- **date** — ISO date `YYYY-MM-DD`; posts sort newest-first.
- **tags** — optional list of chips.

The filename becomes the URL slug: `blog/kql-signins.mdx` → `/blog/kql-signins`.

## Notes

- You can use full markdown (headings, lists, tables, code blocks, links) and even import React
  components (that's the "X" in MDX). Element styling lives in `mdx-components.tsx`.
- Files starting with `_` (like `_keep.mdx`) are ignored — they only keep an empty folder's route
  resolvable. Leave them until the folder has a real post; you can delete them once it does.
- Posts can be lab exercises, research notes, or technical write-ups.
