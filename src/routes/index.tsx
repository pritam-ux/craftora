import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  HeartHandshake,
  Leaf,
  MessageCircle,
  Sparkles as SparkleIcon,
  Truck,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { CraftoraCrest, OutlineHeart, RibbonBow } from "@/components/brand";
import { CountUp, PetalField, Sparkles, Tilt } from "@/components/motion";
import { products, whatsappOrderLink } from "@/lib/products";
import { Photo } from "@/components/Photo";
import heroBouquet from "@/assets/hero-bouquet.jpg?photo";
import heroBouquetBlur from "@/assets/hero-bouquet.jpg?lqip";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Craftora — Meet the flowers that never wilt" },
      {
        name: "description",
        content:
          "Handwoven woolen flower bouquets, made petal by petal in India. A gift that lasts forever. Order in one tap on WhatsApp.",
      },
      { property: "og:title", content: "Craftora — Meet the flowers that never wilt" },
      {
        property: "og:description",
        content:
          "Handwoven woolen flower bouquets, made petal by petal in India. A gift that lasts forever.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const marqueeItems = [
  "Handmade with a little magic",
  "Never wilts",
  "Crochet & pipecleaner blooms",
  "Made to make you smile",
  "Ships across India",
  "DM to order",
];

const highlights = [
  {
    icon: HeartHandshake,
    title: "Made by hand",
    text: "Every flower is woven petal by petal — no two bouquets are ever exactly alike.",
  },
  {
    icon: Leaf,
    title: "Never wilts",
    text: "Wool blooms stay fresh forever. A gift that outlives every real bouquet.",
  },
  {
    icon: Truck,
    title: "Delivered with care",
    text: "Each bouquet is wrapped in kraft paper and shipped safely across India.",
  },
];

function HomePage() {
  const featured = products.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Lilac aurora — the profile tile's colour, slowly breathing. */}
        <div
          aria-hidden
          className="animate-aurora absolute -right-24 -top-28 h-[26rem] w-[26rem] rounded-full bg-lilac/60 blur-3xl"
        />
        <div
          aria-hidden
          className="animate-aurora absolute -left-28 bottom-[-6rem] h-[28rem] w-[28rem] rounded-full bg-blush/50 blur-3xl [animation-delay:7s]"
        />
        <div
          aria-hidden
          className="animate-float-soft absolute left-1/3 top-10 h-64 w-64 rounded-full bg-accent/50 blur-3xl [animation-delay:2s]"
        />
        <PetalField />
        <Sparkles className="hidden md:block" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24">
          {/* The hero sits above the fold, so it plays on load — each line
              arriving just after the one above it. */}
          <div>
            <p className="animate-fade-rise mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-lilac/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lilac-foreground backdrop-blur-sm">
              <SparkleIcon className="animate-pulse-soft h-3.5 w-3.5" />
              Handmade with a little magic
            </p>
            <h1 className="animate-fade-rise text-4xl leading-[1.05] tracking-tight [animation-delay:120ms] sm:text-5xl lg:text-6xl">
              Flowers that <span className="font-script text-primary">never wilt</span>, love that
              never fades
            </h1>
            <p className="animate-fade-rise mt-5 max-w-md text-base leading-relaxed text-muted-foreground [animation-delay:240ms] sm:text-lg">
              Every Craftora bouquet is woven by hand, petal by petal — a forever gift for
              birthdays, anniversaries, and the people you love.
            </p>
            <div className="animate-fade-rise mt-8 flex flex-wrap items-center gap-4 [animation-delay:360ms]">
              <Link
                to="/shop"
                className="press shine group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground hover:shadow-warm hover:brightness-110"
              >
                Shop Bouquets
                <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:translate-x-1.5" />
              </Link>
              <a
                href={whatsappOrderLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="press group inline-flex items-center gap-2 rounded-full border-2 border-primary px-7 py-3 text-sm font-bold text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:-rotate-12 group-hover:scale-110" />
                Order on WhatsApp
              </a>
            </div>
          </div>
          <div className="animate-settle-in relative">
            {/* Leans towards the pointer; a bouquet in a vase never sits still. */}
            <Tilt max={6}>
              <div className="animate-sway-soft">
                <Photo
                  picture={heroBouquet}
                  placeholder={heroBouquetBlur}
                  alt="Handmade bouquet of pink and lilac tulips with pink and white lilies, wrapped in pink paper and tied with a ribbon"
                  sizes="(min-width: 1152px) 552px, (min-width: 768px) 48vw, 100vw"
                  priority
                  className="w-full rounded-[2.5rem] shadow-warm"
                />
              </div>
            </Tilt>
            <RibbonBow className="animate-ribbon-sway absolute -top-6 left-1/2 h-10 w-16 -translate-x-1/2 text-primary/70" />
            <div className="animate-pop-in absolute -bottom-5 -left-5 rounded-2xl border border-primary/10 bg-card/95 px-5 py-4 shadow-soft backdrop-blur [animation-delay:900ms]">
              <p className="font-display text-3xl font-bold text-primary">
                <CountUp to={500} suffix="+" />
              </p>
              <p className="text-xs font-bold text-muted-foreground">
                bouquets delivered with love
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <section
        className="marquee-track overflow-hidden border-y border-border bg-primary py-3.5"
        aria-hidden
      >
        <div className="animate-marquee flex w-max gap-8">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-8 whitespace-nowrap text-sm font-bold uppercase tracking-widest text-primary-foreground"
            >
              {item}
              <OutlineHeart className="h-3 w-3 shrink-0 text-primary-foreground/60" />
            </span>
          ))}
        </div>
      </section>

      {/* Why Craftora */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal variant="fade" className="mx-auto max-w-2xl text-center">
          <OutlineHeart className="animate-heartbeat mx-auto mb-4 h-4 w-4 text-blush-foreground/70" />
          <h2 className="text-3xl tracking-tight sm:text-4xl">
            Why a <span className="font-script text-primary">handmade</span> bouquet?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Real flowers fade in a week. A Craftora bouquet is stitched to stay beautiful for a
            lifetime.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 120} variant="bloom" className="h-full">
              <div className="hover-lift group h-full rounded-3xl border border-border bg-card p-7 shadow-soft">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lilac text-lilac-foreground transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:-rotate-6 group-hover:scale-110">
                  <item.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The profile mark, rebuilt — the signature the Instagram page is known by */}
      <section className="relative mx-auto max-w-6xl px-4 pb-4 sm:px-6">
        <Reveal variant="bloom" className="mx-auto max-w-lg">
          <CraftoraCrest />
        </Reveal>
      </section>

      {/* Featured products */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal variant="left" className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl tracking-tight sm:text-4xl">
                <span className="font-script text-primary">Loved</span> bouquets
              </h2>
              <p className="mt-3 max-w-md text-muted-foreground">
                Our most-ordered pieces — each one made to order, just for you.
              </p>
            </div>
            <Link
              to="/shop"
              className="group inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors duration-300 hover:brightness-90"
            >
              View all bouquets
              <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:translate-x-1.5" />
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <Reveal key={product.id} delay={i * 120} variant="bloom" className="h-full">
                <Tilt className="h-full">
                  <ProductCard product={product} />
                </Tilt>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <Reveal variant="bloom">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-14 text-center shadow-warm sm:px-16">
            <div
              aria-hidden
              className="animate-float-soft absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary-foreground/10 blur-2xl"
            />
            <Sparkles className="hidden opacity-70 sm:block" />
            <h2 className="relative text-3xl tracking-tight text-primary-foreground sm:text-4xl">
              Ordering is as easy as a <span className="font-script">hello</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-lg text-primary-foreground/85">
              Pick a bouquet, tap the WhatsApp button, and tell us where to send it. No accounts, no
              checkout forms — just a friendly chat.
            </p>
            <a
              href={whatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="press shine group relative mt-8 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-3.5 text-sm font-bold text-primary hover:shadow-lift"
            >
              <MessageCircle className="animate-pulse-soft h-4 w-4 group-hover:[animation-play-state:paused]" />
              Chat with us on WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
