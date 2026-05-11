"use client";

import { motion } from "framer-motion";
import { Background } from "@/types";

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
        layout: {
          type: "spring",
          stiffness: 300,
          damping: 30,
          mass: 0.8,
        },
      }}
      className={`
        group relative flex cursor-pointer overflow-hidden
        border-r border-covenant-silver/5 last:border-r-0
        ${isSelected ? "flex-[7] md:flex-[8]" : "flex-[0.5] md:flex-[0.35]"}
        bg-covenant-void
        max-md:flex-col max-md:border-b max-md:border-r-0
        ${isSelected ? "max-md:flex-[6]" : "max-md:flex-[0.8]"}
      `}
    >
      {/* ── Dim overlay for collapsed ── */}
      {isCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-covenant-mystic-dark/70"
        />
      )}

      {/* ── Collapsed: index + vertical title ── */}
      {!isSelected && (
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-4 py-8">
          <span className="font-heading text-2xl font-bold text-covenant-silver/10 transition-colors group-hover:text-covenant-silver/25 md:text-3xl">
            {String(index).padStart(2, "0")}
          </span>
          <h2 className="font-heading text-xs tracking-[0.3em] text-covenant-silver/15 transition-colors group-hover:text-covenant-silver/35 md:[writing-mode:vertical-rl] md:text-sm">
            {background.title}
          </h2>
        </div>
      )}

      {/* ── Expanded: image + title + button ── */}
      {isSelected && (
        <div className="flex h-full w-full flex-col">
          {/* 2:3 Image area — fills most of the expanded slice */}
          <div className="relative flex-1 overflow-hidden">
            <div className="mx-auto h-full max-w-sm aspect-[2/3] border border-covenant-silver/10 bg-gradient-to-b from-covenant-abyss/80 via-covenant-midnight/60 to-covenant-void/80">
              {/* Placeholder — replace with your image */}
              <div className="flex h-full w-full flex-col items-center justify-center px-4 text-center">
                <motion.div
                  className="mb-4 h-16 w-16 rounded-full border border-covenant-gold/20 bg-covenant-gold/5"
                  animate={{ boxShadow: ["0 0 0px rgba(197,160,89,0)", "0 0 20px rgba(197,160,89,0.15)", "0 0 0px rgba(197,160,89,0)"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                <p className={`font-heading text-lg tracking-[0.2em] ${background.textColor}`}>
                  {background.title}
                </p>
                <p className="mt-1 font-body text-xs tracking-wider text-covenant-silver/30">
                  {background.subtitle}
                </p>
              </div>
            </div>
          </div>

          {/* Title bar */}
          <div className="flex-none border-t border-covenant-silver/10 px-6 py-4 text-center">
            <p className={`font-heading text-sm italic tracking-wider ${background.textColor}`}>
              「{background.tagline}」
            </p>
          </div>

          {/* ── "查看圣约详情" button ── */}
          <div className="flex-none px-6 pb-6">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onOpenDetail?.(background.id);
              }}
              className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-xl border-2 border-covenant-gold/30 bg-gradient-to-r from-covenant-gold/10 to-covenant-gold/5 px-6 py-4 transition-all duration-500 hover:border-covenant-gold/50 hover:from-covenant-gold/20 hover:to-covenant-gold/10 active:scale-[0.98]"
            >
              <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/[0.04] to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative z-10 font-heading text-base tracking-[0.2em] text-covenant-gold">
                查看圣约详情
              </span>
              <span className="relative z-10 font-body text-sm tracking-wider text-covenant-gold/50">
                View Details
              </span>
              <motion.svg
                width="18" height="18" viewBox="0 0 18 18" fill="none"
                className="relative z-10 text-covenant-gold"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M6 4L12 9L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
