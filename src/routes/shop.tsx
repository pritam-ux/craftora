import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { OutlineHeart } from "@/components/brand";
import { Sparkles, Tilt } from "@/components/motion";
import { products } from "@/lib/products";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop Handmade Woollen Bouquets — Craftora" },
      {
        name: "description",
        content:
          "Browse handwoven woolen bouquets — roses, sunflowers, lavender, tulips and daisies. Made to order in India, order on WhatsApp.",
      },
      { property: "og:title", content: "Shop Handmade Woollen Bouquets — Craftora" },
      {
        property: "og:description",
        content:
          "Browse handwoven woolen bouquets — roses, sunflowers, lavender, tulips and daisies. Made to order in India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Sparkles className="hidden h-64 md:block" />
      <Reveal variant="left" className="relative max-w-2xl">
        <p className="mb-3 inline-block rounded-full bg-lilac px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lilac-foreground">
          <OutlineHeart className="mr-1.5 inline h-3 w-3 align-[-1px]" />
          The collection
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Every bouquet, woven to order
        </h1>
        <p className="mt-4 text-muted-foreground">
          Choose your favourite and tap “Order on WhatsApp” — we'll confirm availability, colours
          and delivery in one chat. Custom colours are always welcome.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Cards bloom row by row so the grid fills in like a bouquet being arranged. */}
        {products.map((product, i) => (
          <Reveal key={product.id} delay={(i % 3) * 120} variant="bloom" className="h-full">
            <Tilt className="h-full">
              <ProductCard product={product} />
            </Tilt>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
