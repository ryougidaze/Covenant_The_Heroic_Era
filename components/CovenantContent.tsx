"use client";

import { motion } from "framer-motion";
import { BackgroundFeature, LevelTier } from "@/types";

interface CovenantContentProps {
  features: BackgroundFeature[];
  levelTiers: LevelTier[];
  accentColor: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function CovenantContent({
  features,
  levelTiers,
  accentColor,
}: CovenantContentProps) {
  return (
    <div className="space-y-10 overflow-y-auto px-6 py-8 md:px-10">
      {/* Features section */}
      <section>
        <h3
          className={`font-serif text-2xl tracking-wider ${accentColor} md:text-3xl`}
        >
          背景特性
        </h3>
        <motion.div
          className="mt-6 grid gap-6 md:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              custom={i}
              className="rounded-lg border border-white/5 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.06]"
            >
              <h4 className="font-serif text-lg tracking-wide text-amber-100/90">
                {feature.title}
              </h4>
              <p className="mt-2 font-body text-sm leading-relaxed text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Level tiers section */}
      <section>
        <h3
          className={`font-serif text-2xl tracking-wider ${accentColor} md:text-3xl`}
        >
          等级阶梯
        </h3>
        <motion.div
          className="mt-6 space-y-4"
          initial="hidden"
          animate="visible"
          variants={{ visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {levelTiers.map((tier, i) => (
            <motion.div
              key={tier.level}
              variants={fadeInUp}
              custom={features.length + i}
              className="flex items-start gap-6 rounded-lg border border-white/5 bg-white/[0.02] p-4 backdrop-blur-sm"
            >
              {/* Level badge */}
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-full border border-white/10 bg-white/5 font-serif text-lg text-amber-100">
                Lv.{tier.level}
              </div>
              {/* Abilities */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                {tier.abilities.map((ability, j) => (
                  <span
                    key={ability}
                    className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-body text-sm text-gray-300"
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
