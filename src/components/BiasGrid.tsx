"use client";

import { motion } from "framer-motion";
import BiasCard from "@/components/BiasCard";
import { BIASES, GRID_LAYOUT } from "@/data/biases";
import type { GridCell } from "@/data/biases";

// Stagger container — triggers children's cardVariants
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.065,
      delayChildren: 0.1,
    },
  },
};

// Dead-space cell variants (subtle fade-in)
const deadVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1 } },
};

// Build a lookup map for fast bias access
const BIAS_MAP = Object.fromEntries(BIASES.map((b) => [b.id, b]));

function renderCell(cell: GridCell, index: number) {
  if (cell.type === "dead") {
    return (
      <motion.div
        key={cell.key}
        variants={deadVariants}
        className="dead-cell hidden sm:block"
        aria-hidden="true"
      />
    );
  }

  const bias = BIAS_MAP[cell.id];
  if (!bias) return null;

  return (
    <BiasCard
      key={bias.id}
      bias={bias}
      featured={bias.featured}
    />
  );
}

export default function BiasGrid() {
  return (
    <section
      className="w-full max-w-[1440px] mx-auto px-6 md:px-12 py-12 md:py-20"
      aria-label="Cognitive biases grid"
    >
      {/* Section label */}
      <div className="flex items-center gap-4 mb-8 md:mb-12">
        <span className="font-mono text-[10px] tracking-[0.3em] text-grey-dim uppercase">
          Catalog
        </span>
        <div className="flex-1 h-px bg-carbon-mid" />
        <span className="font-mono text-[10px] tracking-[0.2em] text-grey-dim uppercase">
          20 Entries
        </span>
      </div>

      {/* Staggered grid */}
      <motion.div
        className="swiss-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {GRID_LAYOUT.map((cell, i) => renderCell(cell, i))}
      </motion.div>

      {/* Footer rule */}
      <div className="mt-16 md:mt-24 flex items-center gap-4">
        <div className="h-px flex-1 bg-carbon-mid" />
        <span className="font-mono text-[9px] tracking-[0.3em] text-grey-subtle uppercase">
          End of Catalog
        </span>
        <div className="h-px flex-1 bg-carbon-mid" />
      </div>
    </section>
  );
}
