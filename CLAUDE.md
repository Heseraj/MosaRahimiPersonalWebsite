# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project overview

A single-page personal career/portfolio site for Mosa Rahimi, built with Next.js (App Router), TypeScript, and Tailwind CSS. It's one long scrolling page (`app/page.tsx`) built from data in `lib/profile.ts`, plus an AI "Digital Twin" chat feature backed by OpenRouter.

## Commands

```bash
npm run dev      # start dev server (http://localhost:3000)
npm run lint     # eslint .
npm run build    # production build
npm start        # run the production build
```

There is no test suite configured.

## Environment

The Digital Twin chat feature requires `OPEN_ROUTER_API_KEY` in `.env` (see `.env` for the current value; never commit it). Without this key, `app/page.tsx` sets `twinEnabled = false` and the entire Digital Twin section is omitted from the page — the feature degrades gracefully rather than erroring.

## Architecture

- **`app/page.tsx`** — the entire site is one page assembled from sections (hero, impact metrics, pivot story, career timeline, education, personal story, technical artifacts, Digital Twin chat, contact). Section content comes from `lib/profile.ts`; there is no CMS or per-section file split. Local photos live at the repo root and are imported directly as static assets via `next/image`.
- **`lib/profile.ts`** — all structured content: `impact` metrics, `career` timeline entries, `education`, and `artifacts` (links to external work). Edit this file to change what the page displays, rather than editing JSX/copy inline in `page.tsx`.
- **`lib/digital-twin-knowledge.ts`** — marked `import "server-only"`, so it can only be imported from server code (the API route). Contains `DIGITAL_TWIN_MODEL` (locked to `openai/gpt-oss-20b`) and `digitalTwinSystemPrompt`, a large system prompt combining Mosa's documented career/bio facts with curated, citable Hazara-history sources (`hazaraSources`). When updating career facts or Hazara sourcing, keep `lib/profile.ts` (UI data) and this system prompt in sync — they describe the same facts independently.
- **`app/api/chat/route.ts`** — server-only proxy to OpenRouter's chat completions API. Never exposes the API key to the client. Includes basic per-IP in-memory rate limiting (15 requests / 10 minutes, keyed by `x-forwarded-for`) and strict request validation (`parseMessages`: max 12 messages, max 1600 chars each, last message must be from `user`). The rate-limit store is in-memory (`Map`), so it resets on redeploy/restart and isn't shared across instances.
- **`components/digital-twin-chat.tsx`** — client component implementing the chat UI; calls `/api/chat`, renders markdown-lite (`**bold**` and auto-linked URLs) via manual regex parsing rather than a markdown library.
- **`components/reveal.tsx`** — generic scroll-reveal wrapper using `IntersectionObserver`; used throughout `page.tsx` to fade/slide sections into view.
- **`components/site-header.tsx`** — sticky nav; the CTA link and its label swap between "Ask my AI twin" (`#digital-twin`) and "Get in touch" (`#contact`) depending on whether `twinEnabled` was passed down from the page.
- **`app/icon.tsx`** / **`app/opengraph-image.tsx`** — dynamically generated favicon and OG image via `next/og`'s `ImageResponse`, not static image files.
- Styling is a single global stylesheet, **`app/globals.css`** (~3,200 lines) with hand-written classes per section (e.g. `.hero`, `.timeline`, `.twin-chat`) rather than component-scoped CSS or utility-first Tailwind classes in JSX — Tailwind/PostCSS is configured but the site's actual styling approach is plain CSS.

## Conventions

- Path alias `@/*` maps to the repo root (see `tsconfig.json`).
- Root-level image files (`.jpg`/`.jpeg`) are personal photos used as static imports in `app/page.tsx` — treat them as content assets, not something to relocate into `public/` without checking every import.
