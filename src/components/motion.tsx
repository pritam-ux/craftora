import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

/** True when the visitor has asked the OS for less motion. */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/* -------------------------------------------------------------------------- */

type PetalStyle = CSSProperties & {
  "--petal-drift": string;
  "--petal-duration": string;
  "--petal-opacity": string;
};

// Fixed table rather than Math.random so every visit looks the same and the
// markup stays stable between renders.
const PETALS: Array<{
  left: number;
  size: number;
  drift: number;
  duration: number;
  delay: number;
  opacity: number;
}> = [
  { left: 6, size: 14, drift: 70, duration: 19, delay: 0, opacity: 0.45 },
  { left: 18, size: 9, drift: -40, duration: 24, delay: 3.5, opacity: 0.35 },
  { left: 31, size: 17, drift: 55, duration: 16, delay: 7, opacity: 0.4 },
  { left: 44, size: 11, drift: -65, duration: 22, delay: 1.5, opacity: 0.3 },
  { left: 57, size: 15, drift: 45, duration: 18, delay: 9, opacity: 0.42 },
  { left: 69, size: 8, drift: -35, duration: 26, delay: 5, opacity: 0.32 },
  { left: 81, size: 16, drift: 60, duration: 20, delay: 11, opacity: 0.38 },
  { left: 92, size: 10, drift: -50, duration: 23, delay: 2.5, opacity: 0.34 },
];

/**
 * Woollen petals drifting slowly up through a section — the "handmade with a
 * little magic" line from the Instagram bio, made literal. Decorative only.
 */
export function PetalField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {PETALS.map((p, i) => (
        <span
          key={i}
          className="animate-petal-drift absolute bottom-[-8%]"
          style={
            {
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              "--petal-drift": `${p.drift}px`,
              "--petal-duration": `${p.duration}s`,
              "--petal-opacity": `${p.opacity}`,
            } as PetalStyle
          }
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
            {/* a single crocheted petal */}
            <path
              d="M12 2c4.5 3.4 6.5 7.6 6.5 11.2 0 4.2-2.9 7.3-6.5 8.8-3.6-1.5-6.5-4.6-6.5-8.8C5.5 9.6 7.5 5.4 12 2Z"
              fill="currentColor"
              className="text-primary/45"
            />
            <path
              d="M12 4.5c0 5.5 0 11 0 15.5"
              stroke="currentColor"
              strokeWidth="1"
              className="text-primary/30"
            />
          </svg>
        </span>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

type TwinkleStyle = CSSProperties & { "--twinkle-duration": string };

const SPARKS: Array<{ top: number; left: number; size: number; delay: number; duration: number }> =
  [
    { top: 12, left: 8, size: 14, delay: 0, duration: 3.4 },
    { top: 28, left: 88, size: 18, delay: 1.2, duration: 4.1 },
    { top: 62, left: 15, size: 11, delay: 2.4, duration: 3.8 },
    { top: 76, left: 78, size: 16, delay: 0.7, duration: 4.6 },
    { top: 42, left: 52, size: 10, delay: 3.1, duration: 3.2 },
    { top: 86, left: 40, size: 13, delay: 1.9, duration: 4.3 },
  ];

/** Four-point sparkles twinkling in and out. Purely decorative. */
export function Sparkles({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 ${className}`}>
      {SPARKS.map((s, i) => (
        <svg
          key={i}
          viewBox="0 0 24 24"
          className="animate-twinkle absolute text-primary/60"
          style={
            {
              top: `${s.top}%`,
              left: `${s.left}%`,
              width: s.size,
              height: s.size,
              animationDelay: `${s.delay}s`,
              "--twinkle-duration": `${s.duration}s`,
            } as TwinkleStyle
          }
        >
          <path
            d="M12 0c.7 6.4 4.9 10.6 12 12-7.1 1.4-11.3 5.6-12 12-.7-6.4-4.9-10.6-12-12C7.1 10.6 11.3 6.4 12 0Z"
            fill="currentColor"
          />
        </svg>
      ))}
    </div>
  );
}

/* -------------------------------------------------------------------------- */

/** A hairline of violet across the top showing how far down the page you are. */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = ref.current;
      if (!el) return;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(window.scrollY / max, 1) : 0;
      el.style.setProperty("--progress", ratio.toFixed(4));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div aria-hidden className="fixed inset-x-0 top-0 z-[60] h-[3px] bg-transparent">
      <div
        ref={ref}
        className="scroll-progress h-full w-full bg-gradient-to-r from-primary/60 via-primary to-blush-foreground"
      />
    </div>
  );
}

/* -------------------------------------------------------------------------- */

/** Counts up to `to` the first time it scrolls into view. */
export function CountUp({
  to,
  duration = 1600,
  suffix = "",
  className = "",
}: {
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (reduced) {
      setValue(to);
      return;
    }

    let frame = 0;
    let start = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        observer.disconnect();
        const step = (now: number) => {
          if (!start) start = now;
          const t = Math.min((now - start) / duration, 1);
          // ease-out cubic, so the number slows as it lands
          setValue(Math.round(to * (1 - Math.pow(1 - t, 3))));
          if (t < 1) frame = requestAnimationFrame(step);
        };
        frame = requestAnimationFrame(step);
      },
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, [to, duration, reduced]);

  return (
    <span ref={ref} className={className}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

/* -------------------------------------------------------------------------- */

type TiltStyle = CSSProperties & {
  "--tilt-x"?: string;
  "--tilt-y"?: string;
  "--tilt-lift"?: string;
};

/**
 * Tilts its child towards the pointer. Skipped entirely on touch devices and
 * for reduced-motion visitors, where it renders as a plain wrapper.
 */
export function Tilt({
  children,
  className = "",
  max = 7,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();

  const onPointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (reduced || event.pointerType !== "mouse") return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--tilt-y", `${(px * max).toFixed(2)}deg`);
    el.style.setProperty("--tilt-x", `${(-py * max).toFixed(2)}deg`);
    el.style.setProperty("--tilt-lift", "-6px");
  };

  const reset = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tilt-y", "0deg");
    el.style.setProperty("--tilt-x", "0deg");
    el.style.setProperty("--tilt-lift", "0px");
  };

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={reset}
      className={`tilt ${className}`}
      style={{ "--tilt-x": "0deg", "--tilt-y": "0deg", "--tilt-lift": "0px" } as TiltStyle}
    >
      {children}
    </div>
  );
}
