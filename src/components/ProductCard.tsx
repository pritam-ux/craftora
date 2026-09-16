import { MessageCircle } from "lucide-react";
import { formatPrice, whatsappOrderLink, type Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.07]"
        />
        {/* Warm wash that fades in with the zoom, so the image never feels flat. */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        {product.tag && (
          <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground shadow-soft transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:-translate-y-0.5 group-hover:scale-105">
            {product.tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-semibold leading-snug transition-colors duration-300 group-hover:text-primary">
            {product.name}
          </h3>
          <p className="whitespace-nowrap font-display text-lg font-bold text-primary">
            {formatPrice(product.price)}
          </p>
        </div>
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>
        <a
          href={whatsappOrderLink(product)}
          target="_blank"
          rel="noopener noreferrer"
          className="press mt-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:shadow-warm hover:brightness-110"
        >
          <MessageCircle className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:-rotate-12" />
          Order on WhatsApp
        </a>
      </div>
    </article>
  );
}
