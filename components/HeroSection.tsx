"use client";

import { motion } from "framer-motion";
import { Background } from "@/types";

interface HeroSectionProps {
  selectedBg: Background | null;
}

export default function HeroSection({ selectedBg }: HeroSectionProps) {
  return (
    <header className="relative z-20 flex-none">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-12">
        <motion.div
          className="text-center"
          layout
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Main title */}
          <motion.h1
            layout="position"
            className="font-serif text-4xl font-bold tracking-[0.2em] text-amber-100 md:text-6xl lg:text-7xl"
          >
            <span className="bg-gradient-to-b from-amber-100 via-covenant-gold to-covenant-gold-dark bg-clip-text text-transparent">
              圣约·英雄时代
            </span>
          </motion.h1>

          {/* English subtitle */}
          <motion.p
            layout="position"
            className="mt-3 font-body text-sm tracking-[0.3em] text-amber-200/50 md:text-base"
          >
            COVENANT: AGE OF HEROES
          </motion.p>

          {/* Divider */}
          <motion.div
            layout="position"
            className="mx-auto mt-6 h-px w-32 bg-gradient-to-r from-transparent via-covenant-gold/50 to-transparent md:w-64"
          />

          {/* Selected background indicator */}
          {selectedBg && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              key={selectedBg.id}
              className={`mt-4 font-body text-lg tracking-wider ${selectedBg.textColor} md:text-xl`}
            >
              {selectedBg.subtitle}
            </motion.p>
          )}
        </motion.div>
      </div>
    </header>
  );
}
