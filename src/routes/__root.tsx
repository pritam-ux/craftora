import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
} from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Instagram, Menu, MessageCircle, X } from "lucide-react";

import { CraftoraLogo, OutlineHeart, RibbonBow } from "../components/brand";
import { ScrollProgress } from "../components/motion";
import { whatsappOrderLink } from "../lib/products";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <RibbonBow className="animate-ribbon-sway mx-auto h-10 w-16 text-primary/70" />
        <h1 className="font-script mt-4 text-7xl text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:brightness-110"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-colors hover:brightness-110"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-full border border-input bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { title: "Craftora — Handmade with a little magic" },
      {
        name: "description",
        content:
          "Meet the flowers that never wilt. Handmade crochet and pipecleaner bouquets, made to make you smile. DM to order — delivered across India.",
      },
      { name: "theme-color", content: "#faf6fd" },
      { name: "author", content: "Craftora" },
      { property: "og:title", content: "Craftora — Handmade with a little magic" },
      {
        property: "og:description",
        content: "Meet the flowers that never wilt. Handmade bouquets, made to make you smile.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const navItems = [
  { to: "/", label: "Home", exact: true },
  { to: "/shop", label: "Shop", exact: false },
  { to: "/about", label: "About", exact: false },
  { to: "/contact", label: "Contact", exact: false },
] as const;

function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Once the page leaves the top, the bar tightens and lifts off the content.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        scrolled
          ? "border-border/70 bg-background/92 shadow-soft backdrop-blur-md"
          : "border-transparent bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 ${
          scrolled ? "py-2" : "py-3.5"
        }`}
      >
        <Link to="/" className="group flex items-center" onClick={() => setOpen(false)}>
          <CraftoraLogo />
          <span className="sr-only">Craftora — home</span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.exact }}
              className="nav-link text-sm font-bold text-muted-foreground transition-colors duration-300 hover:text-foreground data-[status=active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappOrderLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="press shine group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground hover:shadow-warm hover:brightness-110"
          >
            <MessageCircle className="h-4 w-4 transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:-rotate-12 group-hover:scale-110" />
            Order Now
          </a>
        </nav>

        <button
          className="press inline-flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {/* Cross-fade the two icons instead of swapping them outright. */}
          <span className="relative block h-5 w-5">
            <Menu
              className={`absolute inset-0 h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "rotate-90 scale-50 opacity-0" : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              className={`absolute inset-0 h-5 w-5 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-50 opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      {/* 0fr -> 1fr lets the panel animate to its natural height. */}
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav
            className="border-t border-border bg-background px-4 pb-4 pt-2"
            aria-label="Mobile navigation"
            aria-hidden={!open}
          >
            {navItems.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.exact }}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${80 + i * 45}ms` : "0ms" }}
                className={`block rounded-xl px-3 py-3 text-base font-bold text-foreground transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:bg-muted data-[status=active]:text-primary ${
                  open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={whatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${80 + navItems.length * 45}ms` : "0ms" }}
              className={`press mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-bold text-primary-foreground ${
                open ? "translate-x-0 opacity-100" : "-translate-x-3 opacity-0"
              }`}
            >
              <MessageCircle className="h-4 w-4" />
              Order on WhatsApp
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <div className="group flex items-start">
              <CraftoraLogo withTagline />
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Handmade with a little magic — crochet and pipecleaner blooms that never wilt. Every
              petal made by hand, every order wrapped with love.
            </p>
          </div>
          <nav className="flex flex-wrap items-center gap-6" aria-label="Footer navigation">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="nav-link text-sm font-bold text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/craftora07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Craftora on Instagram"
              className="press flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary hover:shadow-soft"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href={whatsappOrderLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with Craftora on WhatsApp"
              className="press flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card hover:border-primary hover:text-primary hover:shadow-soft"
            >
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-border" />
            <OutlineHeart className="animate-heartbeat h-3 w-3 text-blush-foreground/70" />
            <span className="h-px w-12 bg-border" />
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Craftora · Handmade in India · @craftora07
          </p>
        </div>
      </div>
    </footer>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  // Re-keying on the path replays the entrance animation on every navigation.
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  return (
    <QueryClientProvider client={queryClient}>
      <HeadContent />
      <ScrollProgress />
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <div key={pathname} className="animate-page-in">
            <Outlet />
          </div>
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}
