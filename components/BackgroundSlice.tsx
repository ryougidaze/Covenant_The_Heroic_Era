"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Background } from "@/types";
import { backgroundDetails } from "@/data/background-details";
import CovenantContent from "./CovenantContent";

interface BackgroundSliceProps {
  background: Background;
  isSelected: boolean;
  isAnySelected: boolean;
  onSelect: (id: string) => void;
  onHover?: (id: string) => void;
  onLeave?: () => void;
  index: number;
}

export default function BackgroundSlice({
  background,
  isSelected,
  isAnySelected,
  onSelect,
  onHover,
  onLeave,
  index,
}: BackgroundSliceProps) {
  const isCollapsed = isAnySelected && !isSelected;
  const [showDetails, setShowDetails] = useState(false);

  // Reset detail panel when slice is closed
  const handleSelect = (id: string) => {
    if (isSelected) {
      setShowDetails(false);
    }
    onSelect(id);
  };

  return (
    <motion.div
      layout
      onClick={() => handleSelect(background.id)}
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
      {/* ── Gold border glow on hover (collapsed only) ── */}
      {isCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="pointer-events-none absolute inset-0 z-10"
        >
          {/* Top & bottom gold lines */}
          <div className="absolute inset-x-2 top-1 h-px bg-gradient-to-r from-transparent via-covenant-gold/60 to-transparent" />
          <div className="absolute inset-x-2 bottom-1 h-px bg-gradient-to-r from-transparent via-covenant-gold/60 to-transparent" />
          {/* Left & right gold lines */}
          <div className="absolute inset-y-2 left-1 w-px bg-gradient-to-b from-transparent via-covenant-gold/60 to-transparent" />
          <div className="absolute inset-y-2 right-1 w-px bg-gradient-to-b from-transparent via-covenant-gold/60 to-transparent" />
          {/* Corner dots */}
          <div className="absolute left-2 top-2 h-1.5 w-1.5 rounded-full bg-covenant-gold/80 shadow-[0_0_6px_rgba(197,160,89,0.6)]" />
          <div className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-covenant-gold/80 shadow-[0_0_6px_rgba(197,160,89,0.6)]" />
          <div className="absolute bottom-2 left-2 h-1.5 w-1.5 rounded-full bg-covenant-gold/80 shadow-[0_0_6px_rgba(197,160,89,0.6)]" />
          <div className="absolute bottom-2 right-2 h-1.5 w-1.5 rounded-full bg-covenant-gold/80 shadow-[0_0_6px_rgba(197,160,89,0.6)]" />
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
          {/* Index number */}
          <span
            className={`
              font-heading text-3xl font-bold tabular-nums transition-colors duration-500 md:text-4xl
              ${isSelected ? background.textColor : "text-covenant-silver/15"}
              ${isCollapsed ? "text-covenant-silver/10 group-hover:text-covenant-silver/20" : ""}
            `}
          >
            {String(index).padStart(2, "0")}
          </span>

          {/* Title */}
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

            {/* Subtitle — visible only when expanded */}
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

      {/* ── Expanded content — slides in from the right ── */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex min-w-0 flex-1 flex-col overflow-hidden border-l border-covenant-silver/5 md:flex-[2]"
        >
          {/* Tagline + Description header */}
          <div className="border-b border-covenant-silver/5 px-6 py-6 md:px-10">
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

          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto">
            <CovenantContent
              features={background.features}
              levelTiers={background.levelTiers}
              accentColor={background.textColor}
            />

            {/* ── 详细信息 Toggle ── */}
            {backgroundDetails[background.id] && (
              <div className="border-t border-covenant-silver/5 px-6 pb-6 md:px-10">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDetails((prev) => !prev);
                  }}
                  className={`
                    group flex w-full items-center justify-center gap-3 rounded-xl
                    border px-6 py-3 transition-all duration-300
                    ${
                      showDetails
                        ? "border-covenant-gold/30 bg-covenant-gold/5"
                        : "border-covenant-silver/10 bg-covenant-abyss/40 hover:border-covenant-gold/20"
                    }
                  `}
                >
                  <span
                    className={`font-heading text-sm tracking-[0.15em] transition-colors ${
                      showDetails ? "text-covenant-gold" : "text-covenant-silver/50 group-hover:text-covenant-silver/70"
                    }`}
                  >
                    详细信息
                  </span>
                  <motion.svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    animate={{ rotate: showDetails ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={showDetails ? "text-covenant-gold" : "text-covenant-silver/40"}
                  >
                    <path
                      d="M3 5L7 9L11 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </button>

                {/* ── Detailed content panel ── */}
                <AnimatePresence initial={false}>
                  {showDetails && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                      className="overflow-hidden"
                    >
                      <div className="mt-4 max-h-96 overflow-y-auto rounded-xl border border-covenant-silver/5 bg-covenant-abyss/80 p-6">
                        <div className="font-body text-sm leading-relaxed text-covenant-silver-dark/80 whitespace-pre-line">
                          {backgroundDetails[background.id]}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
