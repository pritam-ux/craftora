import tailwindcss from "@tailwindcss/vite";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import react from "@vitejs/plugin-react";
import sharp from "sharp";
import { defineConfig, type Plugin } from "vite";
import { imagetools } from "vite-imagetools";

/**
 * `import blur from "./photo.jpg?lqip"` — a ~20px blurred WebP inlined as a data
 * URL. Painted behind a photo so the space is never blank while it downloads.
 */
function lqip(): Plugin {
  return {
    name: "craftora-lqip",
    enforce: "pre",
    async load(id) {
      const [file, query] = id.split("?");
      if (!file || query !== "lqip") return null;
      const buffer = await sharp(file).resize(20).webp({ quality: 40 }).toBuffer();
      return `export default "data:image/webp;base64,${buffer.toString("base64")}";`;
    },
  };
}

/**
 * The first photo on a page is its largest paint, but in this SPA the <img> only
 * exists once the JS bundle and route chunk have run. This injects a tiny head
 * script that preloads that photo straight from index.html, so it downloads in
 * parallel with the JS. Only the current route's photo is fetched.
 */
function preloadRoutePhotos(routes: Record<string, { image: string; sizes: string }>): Plugin {
  return {
    name: "craftora-preload-route-photos",
    apply: "build",
    transformIndexHtml: {
      order: "post",
      handler(_html, ctx) {
        const code = Object.values(ctx.bundle ?? {})
          .map((file) => (file.type === "chunk" ? file.code : ""))
          .join("\n");

        const links: Record<string, { srcset: string; sizes: string }> = {};
        for (const [path, { image, sizes }] of Object.entries(routes)) {
          // imagetools writes each srcset entry as "/assets/<name>-<hash>.avif <width>w".
          const pattern = new RegExp(`/assets/${image}-[\\w-]+\\.avif (\\d+)w`, "g");
          const found = new Map<string, number>();
          for (const match of code.matchAll(pattern)) found.set(match[0], Number(match[1]));
          if (found.size === 0) {
            throw new Error(`[preload] no AVIF variants found for "${image}"`);
          }
          const srcset = [...found].sort((a, b) => a[1] - b[1]).map(([entry]) => entry);
          links[path] = { srcset: srcset.join(", "), sizes };
        }

        const script =
          `(function(){var k=location.pathname;if(k.length>1&&k.slice(-1)==="/")k=k.slice(0,-1);` +
          `var p=${JSON.stringify(links)}[k];if(!p)return;` +
          `var l=document.createElement("link");l.rel="preload";l.as="image";l.type="image/avif";` +
          `l.setAttribute("imagesrcset",p.srcset);l.setAttribute("imagesizes",p.sizes);` +
          `l.setAttribute("fetchpriority","high");document.head.appendChild(l)})()`;
        return [{ tag: "script", children: script, injectTo: "head-prepend" }];
      },
    },
  };
}

// Keep in step with the `sizes` passed to <Photo> on each page.
const HERO_SIZES = "(min-width: 1152px) 552px, (min-width: 768px) 48vw, 100vw";

export default defineConfig({
  plugins: [
    // Must run before the React plugin so generated routes are transformed too.
    tanstackRouter({ target: "react", autoCodeSplitting: true }),
    react(),
    tailwindcss(),
    lqip(),
    // `import photo from "./photo.jpg?photo"` — responsive AVIF/WebP with a JPEG
    // fallback, as a <picture> descriptor. Never upscales past the original.
    imagetools({
      defaultDirectives: (url) =>
        url.searchParams.has("photo")
          ? new URLSearchParams({ w: "480;800;1280", format: "avif;webp;jpg", as: "picture" })
          : new URLSearchParams(),
    }),
    preloadRoutePhotos({
      "/": { image: "hero-bouquet", sizes: HERO_SIZES },
      "/about": { image: "about-craft", sizes: HERO_SIZES },
    }),
  ],
  resolve: {
    // Honours the "@/*" alias declared in tsconfig.json.
    tsconfigPaths: true,
  },
  server: {
    host: true,
    port: 8080,
  },
  build: {
    outDir: "dist",
  },
});
