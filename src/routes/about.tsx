import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";
import { BabysBreath, OutlineHeart } from "@/components/brand";
import { whatsappOrderLink } from "@/lib/products";
import { MessageCircle } from "lucide-react";
import aboutCraft from "@/assets/about-craft.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Craftora Handmade Woollen Bouquets" },
      {
        name: "description",
        content:
          "Craftora is a small home studio weaving woolen flower bouquets by hand — a slow, sustainable alternative to fresh flowers.",
      },
      { property: "og:title", content: "Our Story — Craftora Handmade Woollen Bouquets" },
      {
        property: "og:description",
        content:
          "Craftora is a small home studio weaving woolen flower bouquets by hand — a slow, sustainable alternative to fresh flowers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const steps = [
  {
    title: "Choosing the yarn",
    text: "We pick soft, colourfast wool in earthy shades that feel warm in any home.",
  },
  {
    title: "Weaving each petal",
    text: "Every flower takes hours — petals, stems and leaves are woven one loop at a time.",
  },
  {
    title: "Arranging the bouquet",
    text: "Blooms are arranged like a real florist would, balancing colour, height and texture.",
  },
  {
    title: "Wrapped with love",
    text: "Finished in kraft paper and twine, with a hand-written tag for your special someone.",
  },
];

function AboutPage() {
  return (
    <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6">
      {/* The gypsophila that frames the profile mark, framing the story too. */}
      <BabysBreath className="animate-sway-soft pointer-events-none absolute -left-10 top-24 hidden h-72 w-44 text-primary/15 lg:block" />
      <BabysBreath className="animate-sway-soft pointer-events-none absolute -right-10 top-52 hidden h-72 w-44 -scale-x-100 text-primary/12 [animation-delay:3s] lg:block" />
      <div className="relative grid items-center gap-10 md:grid-cols-2">
        <Reveal variant="left">
          <p className="mb-3 inline-block rounded-full bg-lilac px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lilac-foreground">
            <OutlineHeart className="mr-1.5 inline h-3 w-3 align-[-1px]" />
            Our story
          </p>
          <h1 className="text-4xl tracking-tight sm:text-5xl">
            <span className="font-script text-primary">Slow-made</span> flowers from a small home
            studio
          </h1>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Craftora began with a simple thought — flowers are the sweetest gift, but they fade far
            too quickly. So we started weaving them from wool instead. What started as one bouquet
            for a friend became @craftora07, a little studio where every order is still made by
            hand, one petal at a time.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Each bouquet takes days to finish, uses no plastic stems or glue-heavy shortcuts, and
            arrives ready to gift. When you order from Craftora, you're supporting slow, handmade
            craft — and gifting something that truly lasts.
          </p>
          <a
            href={whatsappOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="press shine group mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-bold text-primary-foreground hover:shadow-warm hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:-rotate-12 group-hover:scale-110" />
            Say hello on WhatsApp
          </a>
        </Reveal>
        <Reveal delay={150} variant="right">
          <img
            src={aboutCraft}
            alt="Hands crocheting a woolen flower at a cozy craft table with yarn and crochet hooks"
            loading="lazy"
            width={1280}
            height={1024}
            className="w-full rounded-[2.5rem] shadow-warm transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]"
          />
        </Reveal>
      </div>

      <div className="mt-24">
        <Reveal variant="fade" className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            How every bouquet comes to life
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 120} variant="bloom" className="h-full">
              <div className="hover-lift group h-full rounded-3xl border border-border bg-card p-6 shadow-soft">
                <span className="font-display text-4xl font-bold text-primary/40 transition-colors duration-500 group-hover:text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
