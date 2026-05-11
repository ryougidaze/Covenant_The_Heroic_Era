"use client";

import { motion } from "framer-motion";
import { Background } from "@/types";
import CovenantContent from "./CovenantContent";

interface BackgroundSliceProps {
  background: Background;
  isSelected: boolean;
  isAnySelected: boolean;
  onSelect: (id: string) => void;
  onHover?: (id: string) => void;
  onLeave?: () => void;
  onOpenDetail?: (id: string) => void;
  index: number;
}

export default function BackgroundSlice({
  background,
  isSelected,
  isAnySelected,
  onSelect,
  onHover,
  onLeave,
  onOpenDetail,
  index,
}: BackgroundSliceProps) {
  const isCollapsed = isAnySelected && !isSelected;

  return (
    <motion.div
      layout
      onClick={() => onSelect(background.id)}
      onMouseEnter={() => onHover?.(background.id)}
      onMouseLeave={() => onLeave?.()}
      transition={{
        layout: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      className={`
        group relative flex cursor-pointer overflow-hidden
        border-r border-covenant-silver/5 last:border-r-0
        ${isSelected ? "flex-[7] md:flex-[8]" : "flex-[0.6] md:flex-[0.4]"}
        bg-covenant-void
        max-md:flex-col max-md:border-b max-md:border-r-0
        ${isSelected ? "max-md:flex-[6]" : "max-md:flex-[0.8]"}
      `}
    >
      {/* ── Cross-scar animated border (collapsed hover) ── */}
      {isCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="pointer-events-none absolute inset-0 z-10"
        >
          {/* Gold edge lines with crack effect */}
          <div className="absolute inset-x-2 top-1 h-px bg-gradient-to-r from-transparent via-covenant-gold/50 to-transparent" />
          <div className="absolute inset-x-2 bottom-1 h-px bg-gradient-to-r from-transparent via-covenant-gold/50 to-transparent" />
          <div className="absolute inset-y-2 left-1 w-px bg-gradient-to-b from-transparent via-covenant-gold/50 to-transparent" />
          <div className="absolute inset-y-2 right-1 w-px bg-gradient-to-b from-transparent via-covenant-gold/50 to-transparent" />
          {/* Corner "crack" crosses */}
          <CrossScarCorner className="left-1.5 top-1.5" />
          <CrossScarCorner className="right-1.5 top-1.5" />
          <CrossScarCorner className="bottom-1.5 left-1.5" />
          <CrossScarCorner className="bottom-1.5 right-1.5" />
        </motion.div>
      )}

      {/* ── Dim overlay for collapsed slices ── */}
      {isCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-covenant-mystic-dark/70"
        />
      )}

      {/* ── Title bar ── */}
      <motion.div
        layout="position"
        className="relative z-10 flex items-center justify-center md:h-full md:w-full"
      >
        <div
          className={`
            flex items-center gap-3 px-4 py-6 md:gap-4
            ${isCollapsed ? "md:flex-col" : "md:flex-row"}
            ${isSelected ? "md:flex-row" : "md:flex-col"}
            max-md:flex-row max-md:px-6 max-md:py-4
          `}
        >
          <span
            className={`
              font-heading text-3xl font-bold tabular-nums transition-colors duration-500 md:text-4xl
              ${isSelected ? background.textColor : "text-covenant-silver/15"}
              ${isCollapsed ? "text-covenant-silver/10 group-hover:text-covenant-silver/20" : ""}
            `}
          >
            {String(index).padStart(2, "0")}
          </span>

          <div
            className={`flex flex-col ${isCollapsed ? "md:items-center" : ""} ${isSelected ? "md:items-start" : "md:items-center"}`}
          >
            <h2
              className={`
                font-heading tracking-[0.2em] transition-all duration-500
                ${isSelected ? "text-xl md:text-3xl" : "text-sm md:text-base"}
                ${isCollapsed ? "text-covenant-silver/20 md:[writing-mode:vertical-rl] group-hover:text-covenant-silver/40" : "text-covenant-silver-light/90"}
                ${isSelected ? "md:[writing-mode:horizontal-tb]" : ""}
              `}
            >
              {background.title}
            </h2>

            {isSelected && (
              <motion.p
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.35 }}
                className="mt-1 font-body text-xs tracking-[0.2em] text-covenant-silver/40"
              >
                {background.subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>

      {/* ── Expanded content ── */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex min-w-0 flex-1 flex-col overflow-hidden border-l border-covenant-silver/5 md:flex-[2]"
        >
          {/* Tagline + Description header */}
          <div className="flex-none border-b border-covenant-silver/5 px-6 py-6 md:px-10">
            <motion.p
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.25, duration: 0.4 }}
              className={`font-heading text-lg italic tracking-wider md:text-xl ${background.textColor}`}
            >
              「{background.tagline}」
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-4 font-body text-sm leading-relaxed text-covenant-silver-dark"
            >
              {background.description}
            </motion.p>
          </div>

          {/* 2:3 Image area */}
          <div className="flex-none border-b border-covenant-silver/5 px-6 py-4 md:px-10">
            <div className="mx-auto aspect-[2/3] max-h-80 overflow-hidden rounded-xl border border-covenant-silver/10 bg-covenant-abyss/60">
              {/* Image placeholder — replace with actual image */}
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-covenant-abyss/80 via-covenant-midnight/60 to-covenant-void/80">
                <div className="text-center">
                  <CrossScarOrnamentSmall />
                  <p className="mt-3 font-heading text-xs tracking-[0.2em] text-covenant-silver/20">
                    {background.subtitle}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 overflow-y-auto">
            <CovenantContent
              features={background.features}
              levelTiers={background.levelTiers}
              accentColor={background.textColor}
            />
          </div>

          {/* ── Detail button — pinned at bottom ── */}
          <div className="flex-none border-t border-covenant-silver/10 px-6 py-4 md:px-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetail?.(background.id);
              }}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border-2 border-covenant-gold/30 bg-gradient-to-r from-covenant-gold/10 to-covenant-gold/5 px-6 py-4 transition-all duration-500 hover:border-covenant-gold/50 hover:from-covenant-gold/20 hover:to-covenant-gold/10 active:scale-[0.98]"
            >
              {/* Shimmer sweep */}
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full" />

              {/* Cross-scar icon */}
              <CrossScarOrnamentSmall />

              <span className="relative z-10 font-heading text-base tracking-[0.2em] text-covenant-gold">
                详细信息
              </span>
              <span className="relative z-10 font-body text-sm tracking-wider text-covenant-gold/50">
                Detailed Info
              </span>
              <motion.svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                className="relative z-10 text-covenant-gold"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path
                  d="M6 4L12 9L6 14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

/* ── Mini cross-scar corner ornament ── */
function CrossScarCorner({ className }: { className: string }) {
  return (
    <motion.div
      className={`absolute ${className}`}
      animate={{ opacity: [0.4, 0.9, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="relative h-4 w-4">
        <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-covenant-gold/80 via-covenant-gold/40 to-transparent" />
        <div className="absolute top-1/2 w-full h-px -translate-y-1/2 bg-gradient-to-r from-covenant-gold/80 via-covenant-gold/40 to-transparent" />
        <div className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-covenant-gold shadow-[0_0_4px_rgba(197,160,89,0.8)]" />
      </div>
    </motion.div>
  );
}

/* ── Small cross-scar ornament for button ── */
function CrossScarOrnamentSmall() {
  return (
    <motion.div
      className="relative z-10 h-5 w-5"
      animate={{ opacity: [0.5, 1, 0.5] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-covenant-gold to-transparent" />
      <div className="absolute top-1/2 w-full h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-covenant-gold to-transparent" />
    </motion.div>
  );
}
