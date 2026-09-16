import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MessageCircle, Package, Palette, Truck } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { OutlineHeart, RibbonBow } from "@/components/brand";
import { PetalField } from "@/components/motion";
import { whatsappOrderLink } from "@/lib/products";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & How to Order — Craftora" },
      {
        name: "description",
        content:
          "Order your handmade woollen bouquet on WhatsApp. Custom colours, gift notes and delivery across India — chat with Craftora.",
      },
      { property: "og:title", content: "Contact & How to Order — Craftora" },
      {
        property: "og:description",
        content:
          "Order your handmade woollen bouquet on WhatsApp. Custom colours, gift notes and delivery across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const steps = [
  {
    icon: MessageCircle,
    title: "1. Message us",
    text: "Tap the WhatsApp button and tell us which bouquet you love.",
  },
  {
    icon: Palette,
    title: "2. Make it yours",
    text: "Pick colours, add a gift note, or ask for a fully custom bouquet.",
  },
  {
    icon: Package,
    title: "3. We weave it",
    text: "Your bouquet is made to order — usually ready in 3–5 days.",
  },
  {
    icon: Truck,
    title: "4. Delivered to you",
    text: "Safely packed and shipped anywhere in India. Tracking shared on chat.",
  },
];

function ContactPage() {
  return (
    <div className="relative mx-auto max-w-6xl overflow-hidden px-4 py-16 sm:px-6">
      <PetalField className="hidden sm:block" />
      <Reveal variant="fade" className="relative mx-auto max-w-2xl text-center">
        <RibbonBow className="animate-ribbon-sway mx-auto mb-4 h-9 w-16 text-primary/70" />
        <p className="mb-3 inline-block rounded-full bg-lilac px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-lilac-foreground">
          <OutlineHeart className="mr-1.5 inline h-3 w-3 align-[-1px]" />
          Contact & ordering
        </p>
        <h1 className="text-4xl tracking-tight sm:text-5xl">
          One <span className="font-script text-primary">message</span> is all it takes
        </h1>
        <p className="mt-4 text-muted-foreground">
          We take every order personally over WhatsApp — no sign-ups, no forms, no fuss.
        </p>
      </Reveal>

      <Reveal delay={150} className="mx-auto mt-10 max-w-md">
        <a
          href={whatsappOrderLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="press shine group flex items-center justify-center gap-3 rounded-full bg-primary px-8 py-4 text-base font-bold text-primary-foreground shadow-warm hover:shadow-lift"
        >
          <MessageCircle className="animate-pulse-soft h-5 w-5 group-hover:[animation-play-state:paused]" />
          Chat on WhatsApp — 81210 86026
        </a>
        <a
          href="https://www.instagram.com/craftora07"
          target="_blank"
          rel="noopener noreferrer"
          className="press group mt-4 flex items-center justify-center gap-3 rounded-full border-2 border-primary px-8 py-3.5 text-base font-bold text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <Instagram className="h-5 w-5 transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:rotate-12 group-hover:scale-110" />
          Follow @craftora07
        </a>
      </Reveal>

      <div className="relative mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, i) => (
          <Reveal key={step.title} delay={i * 120} variant="bloom" className="h-full">
            <div className="hover-lift group h-full rounded-3xl border border-border bg-card p-6 text-center shadow-soft">
              <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-lilac text-lilac-foreground transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:-rotate-6 group-hover:scale-110">
                <step.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
