"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundFeature, AbilityDetail } from "@/types";

interface FeatureCardProps {
  feature: BackgroundFeature;
  accentColor: string;
  index: number;
}

export default function FeatureCard({
  feature,
  accentColor,
  index,
}: FeatureCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.07, duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group rounded-xl border border-covenant-silver/5 bg-covenant-abyss/60 backdrop-blur-sm transition-all hover:border-covenant-gold/15"
    >
      {/* ── Collapsed header (always visible, clickable) ── */}
      <button
        onClick={() => setExpanded((prev) => !prev)}
        className="flex w-full items-start gap-4 p-5 text-left md:p-6"
      >
        {/* Level badge */}
        <div
          className={`
            flex h-9 w-9 flex-none items-center justify-center rounded-full
            border font-heading text-sm
            ${accentColor} border-current/20 bg-covenant-midnight
          `}
        >
          {feature.level}
        </div>

        {/* Icon placeholder */}
        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-lg border border-covenant-silver/10 bg-covenant-midnight/60 text-base">
          {feature.icon}
        </div>

        {/* Title + summary */}
        <div className="min-w-0 flex-1">
          <h4 className="font-heading text-sm font-semibold tracking-wider text-covenant-silver-light/90">
            {feature.title}
          </h4>
          <p className="mt-1 font-body text-xs leading-relaxed text-covenant-silver-dark line-clamp-2">
            {feature.summary}
          </p>
        </div>

        {/* Expand indicator */}
        <div className="flex-none pt-1">
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-covenant-silver/10"
          >
            <svg
              width="10"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              className="text-covenant-silver/40"
            >
              <path
                d="M1 1L5 5L9 1"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </div>
      </button>

      {/* ── Expanded detail panel ── */}
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="border-t border-covenant-silver/5 px-5 pb-5 pt-4 md:px-6 md:pb-6">
              {/* Full description */}
              <p className="font-body text-sm leading-relaxed text-covenant-silver-dark">
                {feature.description}
              </p>

              {/* Structured details grid */}
              {feature.details && feature.details.length > 0 && (
                <DetailGrid details={feature.details} />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

/* ── Structured detail pills ── */
function DetailGrid({ details }: { details: AbilityDetail[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {details.map((d) => (
        <span
          key={d.label}
          className="inline-flex items-center gap-1.5 rounded-full border border-covenant-gold/15 bg-covenant-gold/5 px-3 py-1.5"
        >
          <span className="font-heading text-[10px] tracking-wider text-covenant-gold/60">
            {d.label}
          </span>
          <span className="font-body text-xs text-covenant-gold/80">{d.value}</span>
        </span>
      ))}
    </div>
  );
}
