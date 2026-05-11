"use client";

import { motion } from "framer-motion";
import { BackgroundFeature, LevelTier } from "@/types";
import CrossScarDecoration from "./CrossScarDecoration";

interface CovenantContentProps {
  features: BackgroundFeature[];
  levelTiers: LevelTier[];
  accentColor: string;
}

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

export default function CovenantContent({
  features,
  levelTiers,
  accentColor,
}: CovenantContentProps) {
  return (
    <div className="space-y-10 overflow-y-auto px-6 py-8 md:px-10">
      {/* ── Features section ── */}
      <section>
        <div className="flex items-center gap-3">
          <CrossScarDecoration variant="ornament" className="h-6 w-6" />
          <h3
            className={`font-heading text-xl tracking-[0.15em] ${accentColor} md:text-2xl`}
          >
            背景特性
          </h3>
        </div>

        <motion.div
          className="mt-6 grid gap-4 md:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={slideInRight}
              custom={i}
              className="group rounded-lg border border-covenant-silver/5 bg-covenant-abyss/60 p-5 backdrop-blur-sm transition-all hover:border-covenant-gold/15 hover:bg-covenant-abyss/80"
            >
              <div className="flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-covenant-gold/60" />
                <h4 className="font-heading text-sm font-semibold tracking-wider text-covenant-silver-light/90">
                  {feature.title}
                </h4>
              </div>
              <p className="mt-2.5 font-body text-sm leading-relaxed text-covenant-silver-dark">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ── Level tiers section ── */}
      <section>
        <div className="flex items-center gap-3">
          <CrossScarDecoration variant="ornament" className="h-6 w-6" />
          <h3
            className={`font-heading text-xl tracking-[0.15em] ${accentColor} md:text-2xl`}
          >
            等级阶梯
          </h3>
        </div>

        <motion.div
          className="mt-6 space-y-3"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
        >
          {levelTiers.map((tier, i) => (
            <motion.div
              key={tier.level}
              variants={slideInRight}
              custom={features.length + i}
              className="flex items-start gap-5 rounded-lg border border-covenant-silver/5 bg-covenant-abyss/40 p-4 backdrop-blur-sm transition-all hover:border-covenant-gold/10"
            >
              {/* Level badge */}
              <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full border border-covenant-silver/10 bg-covenant-midnight font-heading text-sm text-covenant-silver-light">
                {tier.level}
              </div>

              {/* Abilities */}
              <div className="flex flex-wrap items-center gap-2 pt-1.5">
                {tier.abilities.map((ability) => (
                  <span
                    key={ability}
                    className="rounded-full border border-covenant-silver/5 bg-covenant-midnight/60 px-3 py-1 font-body text-xs text-covenant-silver/70"
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
