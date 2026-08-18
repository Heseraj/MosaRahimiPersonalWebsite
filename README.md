# Mosa Rahimi — Career Website

A responsive personal career website built with Next.js, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The Digital Twin uses OpenRouter from a server-only route. Add this to `.env`:

```bash
OPEN_ROUTER_API_KEY=your_openrouter_key
```

The model is locked to `openai/gpt-oss-20b`; the key is never exposed to the
browser.

For a production check:

```bash
npm run lint
npm run build
npm start
```
