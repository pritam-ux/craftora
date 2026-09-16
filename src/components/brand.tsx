/**
 * Brand marks drawn from the @craftora07 profile tile: a fine line-art ribbon
 * bow, small outlined hearts, sprigs of baby's breath, and the "Craftora"
 * script over a letter-spaced "MADE WITH LOVE".
 */

type MarkProps = {
  className?: string;
};

/** The ribbon bow that crowns the profile mark. Line art, never filled. */
export function RibbonBow({ className = "" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 40"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {/* ribbon tails, notched at the tip */}
      <path d="M30.4 17.6C26.5 22 19 26 10.2 27.6l3.4 2.6-1.1 4.4 5.2-6C22.4 26.6 27 23.4 30.6 20Z" />
      <path d="M33.6 17.6C37.5 22 45 26 53.8 27.6l-3.4 2.6 1.1 4.4-5.2-6c-4.7-1.6-9.3-4.8-12.9-8.2Z" />
      {/* loops */}
      <path d="M30.6 13.4C24.6 6.6 13.8 4.4 8.6 8.4 3.9 12 5.9 18.6 12.4 20c6.9 1.4 14.3-1.8 18.2-4.6Z" />
      <path d="M33.4 13.4C39.4 6.6 50.2 4.4 55.4 8.4c4.7 3.6 2.7 10.2-3.8 11.6-6.9 1.4-14.3-1.8-18.2-4.6Z" />
      {/* satin highlight inside each loop */}
      <path d="M28.6 13.6C24 9.6 16.8 7.8 12.2 8.8" opacity=".5" />
      <path d="M35.4 13.6C40 9.6 47.2 7.8 51.8 8.8" opacity=".5" />
      {/* knot */}
      <path d="M30.2 11.6h3.6c1.2 0 2.2 1 2.2 2.2v2.4c0 1.2-1 2.2-2.2 2.2h-3.6c-1.2 0-2.2-1-2.2-2.2v-2.4c0-1.2 1-2.2 2.2-2.2Z" />
    </svg>
  );
}

/** The small outlined heart used as a divider throughout the mark. */
export function OutlineHeart({ className = "" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 24 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 20S2.5 14.2 2.5 7.9C2.5 4.6 5 2 8.2 2c1.7 0 3 .8 3.8 2.1C12.8 2.8 14.1 2 15.8 2 19 2 21.5 4.6 21.5 7.9 21.5 14.2 12 20 12 20Z" />
    </svg>
  );
}

/** Floret clusters for the sprig: [x, y, radius]. Generated, then frozen. */
const FLORETS: Array<[number, number, number]> = [
  [14, 26, 1.5],
  [16.7, 26, 0.95],
  [12.5, 28.6, 0.95],
  [12.3, 23.1, 0.95],
  [18.8, 72, 1.5],
  [20.2, 74.8, 0.95],
  [15.4, 71.9, 0.95],
  [20.3, 69.8, 0.95],
  [25.4, 50.8, 1.5],
  [23.4, 53.5, 0.95],
  [24.3, 48.3, 0.95],
  [28.4, 51.1, 0.95],
  [7.2, 37, 1.5],
  [4.6, 36.6, 0.95],
  [9.2, 34.6, 0.95],
  [8.5, 40.2, 0.95],
  [40, 14, 1.5],
  [39.1, 11.1, 0.95],
  [43.3, 14.7, 0.95],
  [38.2, 16, 0.95],
  [44.7, 70.7, 1.5],
  [47.1, 68.3, 0.95],
  [45.4, 73.3, 0.95],
  [41.7, 69.9, 0.95],
  [33.6, 48.3, 1.5],
  [36.2, 49.2, 0.95],
  [31.4, 50.4, 0.95],
  [32.9, 45, 0.95],
  [48.6, 27.5, 1.5],
  [49.1, 30.6, 0.95],
  [45.4, 26.3, 0.95],
  [50.7, 25.9, 0.95],
  [34.6, 16, 1.5],
  [31.9, 18, 0.95],
  [34.3, 13.3, 0.95],
  [37.4, 17.3, 0.95],
  [58, 34, 1.5],
  [55.6, 32.8, 0.95],
  [60.6, 32.3, 0.95],
  [58.2, 37.4, 0.95],
  [55.6, 72.1, 1.5],
  [55.6, 69.1, 0.95],
  [58.5, 73.8, 0.95],
  [53.2, 73.5, 0.95],
  [49.2, 49.6, 1.5],
  [52.2, 48, 0.95],
  [49, 52.3, 0.95],
  [46.7, 47.9, 0.95],
  [66.4, 35, 1.5],
  [68.5, 36.6, 0.95],
  [63.6, 36.2, 0.95],
  [66.7, 31.6, 0.95],
];

/** A sprig of baby's breath — the gypsophila framing the profile tile. */
export function BabysBreath({ className = "" }: MarkProps) {
  return (
    <svg
      viewBox="0 0 72 112"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      className={className}
      aria-hidden
    >
      {/* three stems fanning up from one gathered base */}
      <path d="M36 108 C30 84 18 60 14 26" opacity=".85" />
      <path d="M36 108 C38 80 42 52 40 14" opacity=".85" />
      <path d="M36 108 C44 86 56 62 58 34" opacity=".8" />
      {/* branchlets, each ending in a floret cluster */}
      <path
        d="M26.3 77.0 Q21.2 75.8 18.8 72.0 M21.3 61.0 Q25.2 56.0 25.4 50.8 M17.2 45.3 Q10.6 42.1 7.2 37.0 M38.6 77.3 Q43.2 74.9 44.7 70.7 M39.9 57.3 Q35.0 53.4 33.6 48.3 M40.5 37.7 Q46.4 33.3 48.6 27.5 M40.4 22.9 Q35.8 20.3 34.6 16.0 M48.0 76.9 Q53.1 75.8 55.6 72.1 M53.5 59.7 Q49.5 54.8 49.2 49.6 M56.9 43.9 Q63.3 40.3 66.4 35.0"
        opacity=".65"
      />
      {FLORETS.map(([cx, cy, r], i) => (
        <circle
          key={i}
          cx={cx}
          cy={cy}
          r={r}
          fill="currentColor"
          fillOpacity={r > 1 ? 0.35 : 0.55}
          strokeWidth="0.55"
        />
      ))}
    </svg>
  );
}

type LogoProps = {
  /** Show the "MADE WITH LOVE" lockup line under the wordmark. */
  withTagline?: boolean;
  className?: string;
};

/**
 * The header lockup: bow above the script wordmark. The bow sways, the heart
 * beats, and the whole mark leans in when its link is hovered.
 */
export function CraftoraLogo({ withTagline = false, className = "" }: LogoProps) {
  return (
    <span className={`flex flex-col items-center leading-none ${className}`}>
      <RibbonBow className="animate-ribbon-sway h-5 w-8 text-primary/75 transition-colors duration-500 group-hover:text-primary" />
      <span className="font-script -mt-0.5 text-[1.7rem] text-foreground transition-transform duration-500 ease-[cubic-bezier(0.34,1.32,0.64,1)] group-hover:scale-[1.04]">
        Craftora
      </span>
      {withTagline && (
        <span className="tracking-mark mt-1 flex items-center gap-1.5 text-[0.55rem] font-bold text-muted-foreground">
          <span className="h-px w-5 bg-border" />
          Made with love
          <span className="h-px w-5 bg-border" />
        </span>
      )}
    </span>
  );
}

/**
 * The full profile tile, rebuilt: framed lilac panel, bow, script wordmark,
 * heart divider, lockup line and a sprig of baby's breath down each side.
 */
export function CraftoraCrest({ className = "" }: MarkProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[2rem] border border-primary/15 bg-gradient-to-b from-lilac/70 via-background to-lilac/50 px-8 py-10 text-center ${className}`}
    >
      <BabysBreath className="animate-sway-soft pointer-events-none absolute -left-3 top-6 h-44 w-28 text-primary/35" />
      <BabysBreath className="animate-sway-soft pointer-events-none absolute -right-3 top-10 h-44 w-28 -scale-x-100 text-primary/30 [animation-delay:2s]" />

      <div className="relative">
        <RibbonBow className="animate-ribbon-sway mx-auto h-11 w-20 text-primary/80" />
        <OutlineHeart className="animate-heartbeat mx-auto mt-1.5 h-3 w-3 text-blush-foreground/70" />
        <p className="font-script mt-3 text-5xl text-foreground sm:text-6xl">Craftora</p>
        <div className="mt-5 flex items-center justify-center gap-3">
          <span className="h-px w-14 bg-primary/25" />
          <OutlineHeart className="h-3 w-3 text-primary/60" />
          <span className="h-px w-14 bg-primary/25" />
        </div>
        <p className="tracking-mark mt-4 text-[0.6rem] font-bold text-muted-foreground">
          Made with love
        </p>
      </div>
    </div>
  );
}
