"use client";

import { motion } from "framer-motion";
import { Background } from "@/types";
import CovenantContent from "./CovenantContent";

interface BackgroundSliceProps {
  background: Background;
  isSelected: boolean;
  isAnySelected: boolean;
  onSelect: (id: string) => void;
  index: number;
}

export default function BackgroundSlice({
  background,
  isSelected,
  isAnySelected,
  onSelect,
  index,
}: BackgroundSliceProps) {
  const isCollapsed = isAnySelected && !isSelected;

  return (
    <motion.div
      layout
      onClick={() => onSelect(background.id)}
      transition={{
        layout: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] },
      }}
      className={`
        group relative flex cursor-pointer overflow-hidden
        border-r border-covenant-silver/5 last:border-r-0
        ${isSelected ? "flex-[6] md:flex-[7]" : "flex-[0.6] md:flex-[0.5]"}
        ${isCollapsed ? "hover:bg-covenant-silver/[0.02]" : ""}
        bg-covenant-void
        max-md:flex-col max-md:border-b max-md:border-r-0
        ${isSelected ? "max-md:flex-[6]" : "max-md:flex-[0.8]"}
      `}
    >
      {/* ── Dim overlay for collapsed slices ── */}
      {isCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-covenant-mystic-dark/70"
        />
      )}

      {/* ── Title bar (vertical on desktop collapsed, horizontal on mobile) ── */}
      <motion.div
        layout="position"
        className="flex items-center justify-center md:h-full md:w-full"
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
              ${isCollapsed ? "text-covenant-silver/10" : ""}
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
                ${isCollapsed ? "text-covenant-silver/20 md:[writing-mode:vertical-rl]" : "text-covenant-silver-light/90"}
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

      {/* ── Expanded content ── */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.45 }}
          className="flex min-w-0 flex-1 flex-col overflow-hidden border-l border-covenant-silver/5 md:flex-[2]"
        >
          {/* Tagline + Description header */}
          <div className="border-b border-covenant-silver/5 px-6 py-6 md:px-10">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className={`font-heading text-lg italic tracking-wider md:text-xl ${background.textColor}`}
            >
              「{background.tagline}」
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.4 }}
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
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}
