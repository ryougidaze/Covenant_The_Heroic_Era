"use client";

import { motion } from "framer-motion";
import { Background } from "@/types";
import CrossScarDecoration from "./CrossScarDecoration";

interface HeroSectionProps {
  selectedBg: Background | null;
}

export default function HeroSection({ selectedBg }: HeroSectionProps) {
  return (
    <header className="relative z-20 flex-none overflow-hidden border-b border-covenant-silver/10">
      {/* Subtle watermark cross in header */}
      <div className="pointer-events-none absolute inset-0 opacity-30">
        <CrossScarDecoration variant="watermark" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-6 md:py-10">
        <motion.div
          className="text-center"
          layout
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Ornament cross above title */}
          <motion.div layout="position" className="mb-3 flex justify-center">
            <CrossScarDecoration variant="ornament" className="h-10 w-10 md:h-12 md:w-12" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            layout="position"
            className="font-heading text-4xl font-bold tracking-[0.25em] md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-b from-covenant-silver-light via-covenant-silver to-covenant-silver-dark bg-clip-text text-transparent">
              圣约·英雄时代
            </span>
          </motion.h1>

          {/* English subtitle */}
          <motion.p
            layout="position"
            className="mt-3 font-heading text-xs font-medium tracking-[0.4em] text-covenant-gold/60 md:text-sm"
          >
            COVENANT: AGE OF HEROES
          </motion.p>

          {/* Divider */}
          <motion.div layout="position" className="mt-5 flex justify-center">
            <CrossScarDecoration variant="divider" className="w-64 md:w-80" />
          </motion.div>

          {/* Selected background indicator */}
          {selectedBg && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              key={selectedBg.id}
              className="mt-4"
            >
              <span className="inline-flex items-center gap-3 rounded-full border border-covenant-gold/20 bg-covenant-gold/5 px-4 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-covenant-gold/80" />
                <span className="font-heading text-xs tracking-[0.25em] text-covenant-gold">
                  {selectedBg.title}
                </span>
                <span className="font-body text-xs tracking-wider text-covenant-silver/50">
                  {selectedBg.subtitle}
                </span>
              </span>
            </motion.div>
          )}
        </motion.div>
      </div>
    </header>
  );
}
