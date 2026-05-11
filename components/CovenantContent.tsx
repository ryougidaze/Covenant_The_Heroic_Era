"use client";

import { motion } from "framer-motion";
import { LevelTier } from "@/types";
import FeatureCard from "./FeatureCard";
import CrossScarDecoration from "./CrossScarDecoration";
import { BackgroundFeature } from "@/types";

interface CovenantContentProps {
  features: BackgroundFeature[];
  levelTiers: LevelTier[];
  accentColor: string;
}

export default function CovenantContent({
  features,
  levelTiers,
  accentColor,
}: CovenantContentProps) {
  return (
    <div className="space-y-10 overflow-y-auto px-6 py-8 md:px-10">
      {/* ── Features: expandable cards ── */}
      <section>
        <div className="mb-6 flex items-center gap-3">
          <CrossScarDecoration variant="ornament" className="h-6 w-6" />
          <h3
            className={`font-heading text-xl tracking-[0.15em] ${accentColor} md:text-2xl`}
          >
            背景特性
          </h3>
        </div>

        <div className="space-y-3">
          {features.map((feature, i) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              accentColor={accentColor}
              index={i}
            />
          ))}
        </div>
      </section>

      {/* ── Level tiers: compact overview ── */}
      <section>
        <div className="mb-6 flex items-center gap-3">
          <CrossScarDecoration variant="ornament" className="h-6 w-6" />
          <h3
            className={`font-heading text-xl tracking-[0.15em] ${accentColor} md:text-2xl`}
          >
            等级阶梯
          </h3>
        </div>

        <div className="space-y-2">
          {levelTiers.map((tier, i) => (
            <motion.div
              key={tier.level}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: features.length * 0.07 + i * 0.05,
                duration: 0.4,
                ease: "easeOut",
              }}
              className="flex items-start gap-4 rounded-lg border border-covenant-silver/5 bg-covenant-abyss/40 p-3 backdrop-blur-sm transition-all hover:border-covenant-gold/10"
            >
              {/* Level badge */}
              <div
                className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border font-heading text-xs ${accentColor} border-current/15 bg-covenant-midnight`}
              >
                {tier.level}
              </div>

              {/* Ability tags */}
              <div className="flex flex-wrap items-center gap-1.5 pt-0.5">
                {tier.abilities.map((ability) => (
                  <span
                    key={ability}
                    className="rounded-full border border-covenant-silver/5 bg-covenant-midnight/60 px-2.5 py-0.5 font-body text-xs text-covenant-silver/60"
                  >
                    {ability}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
