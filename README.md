# Craftora Creations

Frontend for Craftora — handwoven woolen flower bouquets that never wilt.
Instagram: [@craftora07](https://www.instagram.com/craftora07)

A client-side single-page app: **React 19 + TypeScript + Vite**, routed with
**TanStack Router** (file-based) and styled with **Tailwind CSS v4** + shadcn/ui
components. There is no backend — orders are placed through WhatsApp links.

## Brand

The theme is taken from the [@craftora07](https://www.instagram.com/craftora07)
profile mark: a soft lilac tile, a fine line-art ribbon bow, small outlined
hearts, sprigs of baby's breath, and "Craftora" in script above a letter-spaced
"MADE WITH LOVE".

- **Colour** — lilac ground `#faf6fd`, violet ink `#6f5296`, the profile tile's
  `#dccbea` as the accent and `#f0d3e2` blush as the second. Defined as oklch
  tokens in [src/styles.css](src/styles.css); every pairing meets WCAG AA.
- **Type** — Parisienne for the wordmark, Cormorant Garamond for headings,
  Karla for body.
- **Marks** — the bow, heart, sprig, header lockup and full crest are SVG
  components in [src/components/brand.tsx](src/components/brand.tsx); the
  favicon reuses the same bow geometry.
- **Photos** — import with `?photo` and render with `<Photo>`
  ([src/components/Photo.tsx](src/components/Photo.tsx)). The build emits AVIF
  and WebP at 480/800/1280px with a JPEG fallback (vite-imagetools), and a
  `?lqip` import gives a ~300-byte blurred placeholder. The first photo on `/`
  and `/about` is preloaded from `index.html` by a plugin in
  [vite.config.ts](vite.config.ts); if you change a page's main photo or its
  `sizes`, update that plugin's route list too.
- **Motion** — shared easing/duration tokens drive every animation, and the
  whole system collapses under `prefers-reduced-motion`. Decorative layers
  (drifting petals, sparkles, aurora) are removed outright for those visitors.

## Getting started

Requires Node.js 20+.

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:8080.

## Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `npm run dev`       | Start the Vite dev server                |
| `npm run build`     | Build the production bundle into `dist/` |
| `npm run preview`   | Serve the built bundle locally           |
| `npm run typecheck` | Run TypeScript with no emit              |
| `npm run lint`      | Lint with ESLint                         |
| `npm run format`    | Format with Prettier                     |

## Project structure

```
index.html            App shell — title, meta tags, fonts
src/main.tsx          Client entry, mounts the router
src/router.tsx        Router + React Query client setup
src/routes/           File-based routes (__root.tsx is the layout)
src/components/brand.tsx   Logo, bow, heart, sprig and crest marks
src/components/motion.tsx  Petals, sparkles, scroll progress, count-up, tilt
src/components/       App components; ui/ holds shadcn/ui primitives
src/lib/products.ts   Product catalogue + WhatsApp order links
src/styles.css        Tailwind theme and design tokens
public/               Static assets served as-is
```

## Deploying

`npm run build` emits a static `dist/` folder — deploy it to any static host
(Netlify, Vercel, GitHub Pages, Cloudflare Pages, nginx…). Because this is a
SPA, configure the host to rewrite unknown paths to `/index.html` so client-side
routes such as `/shop` resolve on a hard refresh.
