import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealVariant = "rise" | "bloom" | "left" | "right" | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Stagger delay in milliseconds */
  delay?: number;
  /** How the block enters the page. Defaults to a gentle rise. */
  variant?: RevealVariant;
};

/**
 * Reveals its children once they scroll into view. The observer starts a little
 * before the element reaches the viewport so the animation is already settling
 * by the time the visitor reads it.
 */
export function Reveal({ children, className = "", delay = 0, variant = "rise" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Anything already on screen at mount (or any visitor who asked for reduced
    // motion) should just be there — no entrance to wait through.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal reveal-${variant} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
