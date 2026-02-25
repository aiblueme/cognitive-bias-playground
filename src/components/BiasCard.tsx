"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import type { Bias } from "@/data/biases";

const CATEGORY_LABELS: Record<string, string> = {
  cognitive:    "COGNITIVE",
  social:       "SOCIAL",
  memory:       "MEMORY",
  motivational: "MOTIVATIONAL",
};

// Accent color for the category tag stripe
const CATEGORY_COLORS: Record<string, string> = {
  cognitive:    "#FF4F00",
  teal:         "#00688B",
  social:       "#00688B",
  memory:       "#888888",
  motivational: "#C85000",
};

// Card item animation variants (driven by parent BiasGrid)
export const cardVariants = {
  hidden:  { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] },
  },
};

interface BiasCardProps {
  bias: Bias;
  featured?: boolean;
}

export default function BiasCard({ bias, featured = false }: BiasCardProps) {
  const [flipped, setFlipped] = useState(false);
  const accentColor = CATEGORY_COLORS[bias.category] ?? "#FF4F00";

  const handleFlip = useCallback(() => setFlipped((f) => !f), []);
  const handleKey  = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    },
    []
  );

  return (
    <motion.div
      variants={cardVariants}
      className={`perspective-container ${featured ? "col-span-2" : ""}`}
      style={{ minHeight: featured ? "clamp(280px, 22vw, 380px)" : "clamp(220px, 18vw, 320px)" }}
    >
      {/* Flip wrapper */}
      <div
        className={`card-inner cursor-pointer h-full ${flipped ? "is-flipped" : ""}`}
        onClick={handleFlip}
        onKeyDown={handleKey}
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label={`${bias.name}: ${flipped ? "showing mental fix" : "showing description"}`}
      >
        {/* ── FRONT FACE ─────────────────────────────────────────────────── */}
        <div
          className="card-face flex flex-col justify-between overflow-hidden relative"
          style={{
            background: featured ? "#FF4F00" : "#1A1A1A",
            border: featured ? "none" : `1px solid #2A2A2A`,
            padding: "clamp(1.25rem, 3vw, 1.75rem)",
          }}
        >
          {/* Category stripe */}
          <div
            className="absolute top-0 left-0 w-[3px] h-full"
            style={{ background: featured ? "rgba(255,255,255,0.25)" : accentColor }}
            aria-hidden="true"
          />

          {/* Top row: number badge + category label */}
          <div className="flex items-start justify-between gap-3 pl-3">
            <span
              className="font-mono text-[11px] tracking-[0.2em] uppercase"
              style={{
                color: featured ? "rgba(26,26,26,0.55)" : "rgba(255,255,255,0.3)",
              }}
            >
              {String(bias.number).padStart(2, "0")}
            </span>
            <span
              className="font-mono text-[10px] tracking-[0.15em] uppercase px-2 py-0.5"
              style={{
                /* M-04: invert orange-card tag to dark chip — was 3.51:1 (fail),
                   now off-white on near-black → >12:1 (pass) */
                background: featured
                  ? "rgba(26,26,26,0.75)"
                  : `${accentColor}22`,
                color: featured ? "rgba(245,245,245,0.9)" : accentColor,
                border: featured ? "none" : `1px solid ${accentColor}44`,
              }}
            >
              {CATEGORY_LABELS[bias.category]}
            </span>
          </div>

          {/* Bias name */}
          <div className="pl-3 mt-auto">
            <h2
              className="font-display font-black leading-none"
              style={{
                fontSize: featured
                  ? "clamp(1.6rem, 3.5vw, 2.6rem)"
                  : "clamp(1.2rem, 2.5vw, 1.9rem)",
                letterSpacing: "-0.025em",
                color: featured ? "#1A1A1A" : "#F5F5F5",
                wordBreak: "break-word",
                hyphens: "auto",
              }}
            >
              {bias.name}
            </h2>

            {/* Tagline */}
            <p
              className="font-body mt-2 leading-snug"
              style={{
                fontSize: "clamp(0.75rem, 1.5vw, 0.9rem)",
                /* H-03: raised opacity 0.45 → 0.55 to pass WCAG AA (4.20:1 → 5.37:1) */
                color: featured ? "rgba(26,26,26,0.65)" : "rgba(245,245,245,0.55)",
              }}
            >
              "{bias.tagline}"
            </p>
          </div>

          {/* Watermark number */}
          <span
            className="editorial-number font-display font-black"
            style={{
              /* L-01: raised dark-card stroke from 0.05 → 0.12 so watermark
                 is actually visible as a subtle editorial texture */
              color: "transparent",
              WebkitTextStroke: featured
                ? "1px rgba(26,26,26,0.10)"
                : "1px rgba(245,245,245,0.12)",
            }}
            aria-hidden="true"
          >
            {String(bias.number).padStart(2, "0")}
          </span>

          {/* Flip cue — L-02: bumped from 9px→11px and opacity raised for discoverability */}
          <div
            className="absolute bottom-3 right-3 font-mono text-[11px] tracking-widest uppercase flex items-center gap-1"
            style={{
              color: featured ? "rgba(26,26,26,0.50)" : "rgba(245,245,245,0.35)",
            }}
            aria-hidden="true"
          >
            MENTAL FIX
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M2 5h6M5 2l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* ── BACK FACE ──────────────────────────────────────────────────── */}
        <div
          className="card-face card-back-face flex flex-col justify-between overflow-hidden relative"
          style={{
            background: "#00688B",
            padding: "clamp(1.25rem, 3vw, 1.75rem)",
            border: "1px solid #005577",
          }}
        >
          {/* Top: label */}
          <div className="flex items-center justify-between">
            <span className="font-mono text-[11px] tracking-[0.2em] text-offwhite/40 uppercase">
              {String(bias.number).padStart(2, "0")} — Mental Fix
            </span>
            {/* L-05: reduced opacity (30→20) to subordinate vs the Mental Fix label */}
            <span
              className="font-mono text-[9px] tracking-widest uppercase flex items-center gap-1 text-offwhite/20"
              aria-hidden="true"
            >
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M8 5H2M5 8L2 5l3-3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              FLIP BACK
            </span>
          </div>

          {/* Bias name in small — H-01: was text-orange on teal (1.90:1 fail).
              Now off-white text (5.74:1 pass) with orange left accent stripe. */}
          <div className="mt-3">
            <p
              className="font-display font-bold uppercase tracking-tight"
              style={{
                fontSize: "clamp(0.65rem, 1.4vw, 0.8rem)",
                letterSpacing: "0.05em",
                color: "#F5F5F5",
                borderLeft: "2px solid #FF4F00",
                paddingLeft: "0.5rem",
              }}
            >
              {bias.name}
            </p>
          </div>

          {/* The fix */}
          <p
            className="font-body text-offwhite mt-2 leading-relaxed flex-1"
            style={{ fontSize: "clamp(0.75rem, 1.4vw, 0.88rem)" }}
          >
            {bias.mentalFix}
          </p>

          {/* Example separator */}
          <div className="mt-3 pt-3 border-t border-white/10">
            <p
              className="font-mono uppercase tracking-widest text-offwhite/30"
              style={{ fontSize: "9px" }}
            >
              In The Wild
            </p>
            <p
              className="font-body text-offwhite/55 mt-1 leading-snug italic"
              style={{ fontSize: "clamp(0.68rem, 1.2vw, 0.8rem)" }}
            >
              {bias.example}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
