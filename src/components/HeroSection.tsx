"use client";

import { motion } from "framer-motion";

const lineVariants = {
  hidden: { opacity: 0, y: 32, skewX: "-2deg" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    skewX: "0deg",
    transition: {
      duration: 0.7,
      ease: [0.23, 1, 0.32, 1],
      delay: i * 0.12,
    },
  }),
};

const barVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1], delay: 0.3 },
  },
};

const statVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: 0.7 + i * 0.1 },
  }),
};

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-carbon noise" aria-label="Site introduction">
      {/* Structural grid overlay — purely visual */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), " +
            "linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "clamp(4rem, 10vw, 7rem) clamp(4rem, 10vw, 7rem)",
        }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 md:px-12 pt-16 pb-12 md:pt-24 md:pb-20">
        {/* Swiss-style asymmetric layout: text left, dead-space right */}
        <div className="grid grid-cols-4 gap-5">
          {/* Eyebrow label — col 1 only */}
          <div className="col-span-4 md:col-span-1">
            <motion.p
              className="font-mono text-xs tracking-[0.25em] text-grey-dim uppercase mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Site #2 — 2026
            </motion.p>
          </div>

          {/* Dead space right on mobile / top-right on desktop */}
          <div className="hidden md:block md:col-span-3" />

          {/* Main heading — spans 3 cols, right 1 col is dead */}
          <div className="col-span-4 md:col-span-3 mt-2 md:mt-0">
            <div className="overflow-hidden">
              <motion.h1
                className="font-display font-black text-offwhite leading-none"
                style={{
                  fontSize: "clamp(3.5rem, 10vw, 8.5rem)",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.9,
                }}
              >
                <motion.span
                  className="block"
                  custom={0}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  THE
                </motion.span>
                <motion.span
                  className="block"
                  custom={1}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                  style={{ color: "#FF4F00" }}
                >
                  COGNITIVE
                </motion.span>
                <motion.span
                  className="block"
                  custom={2}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  BIAS
                </motion.span>
                <motion.span
                  className="block"
                  custom={3}
                  variants={lineVariants}
                  initial="hidden"
                  animate="visible"
                >
                  PLAYGROUND
                </motion.span>
              </motion.h1>
            </div>
          </div>

          {/* Vertical rule — dead space column on large screens */}
          <div className="hidden md:flex md:col-span-1 items-end justify-center pb-4">
            <motion.div
              className="w-px bg-carbon-mid"
              style={{ height: "60%" }}
              initial={{ scaleY: 0, originY: 1 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.23, 1, 0.32, 1] }}
            />
          </div>
        </div>

        {/* Orange rule */}
        <motion.div
          className="h-[3px] bg-orange mt-6 md:mt-8 w-full"
          variants={barVariants}
          initial="hidden"
          animate="visible"
          style={{ transformOrigin: "left" }}
        />

        {/* Subtext + stats row */}
        <div className="grid grid-cols-4 gap-5 mt-6 md:mt-8">
          <motion.p
            className="col-span-4 md:col-span-2 font-body text-grey-dim text-base md:text-lg leading-relaxed"
            custom={0}
            variants={statVariants}
            initial="hidden"
            animate="visible"
          >
            20 cognitive shortcuts that systematically warp your reality.
            Understand the mechanism. Acquire the fix.
          </motion.p>

          {/* Stat chips — right-aligned on the grid */}
          <div className="col-span-4 md:col-span-2 flex items-center justify-start md:justify-end gap-6 md:gap-8">
            {[
              { n: "20", label: "BIASES" },
              { n: "20", label: "MENTAL FIXES" },
              { n: "∞", label: "TRAPS" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                className="text-center"
                custom={i + 1}
                variants={statVariants}
                initial="hidden"
                animate="visible"
              >
                <div
                  className="font-display font-black text-orange"
                  style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", lineHeight: 1 }}
                >
                  {s.n}
                </div>
                <div className="font-mono text-[10px] tracking-[0.2em] text-grey-dim mt-1 uppercase">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom instruction */}
        <motion.p
          className="mt-10 md:mt-14 font-mono text-xs tracking-widest text-grey-subtle uppercase"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          — Click any card to reveal the Mental Fix
        </motion.p>
      </div>
    </section>
  );
}
