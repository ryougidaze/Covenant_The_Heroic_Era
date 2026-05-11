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
        group relative flex cursor-pointer overflow-hidden border-r border-white/5
        last:border-r-0
        ${isSelected ? "flex-[6] md:flex-[7]" : "flex-[0.6] md:flex-[0.5]"}
        ${isCollapsed ? "hover:bg-white/[0.02]" : ""}
        ${background.bgColor}
        max-md:flex-col max-md:border-b max-md:border-r-0
        ${isSelected ? "max-md:flex-[6]" : "max-md:flex-[0.8]"}
      `}
    >
      {/* Dim overlay for collapsed slices */}
      {isCollapsed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60"
        />
      )}

      {/* Vertical title bar (desktop) / Horizontal title bar (mobile) */}
      <motion.div
        layout="position"
        className={`
          flex items-center justify-center
          md:h-full md:w-full
          max-md:h-full max-md:w-full
        `}
      >
        <div
          className={`
            flex
            ${isCollapsed ? "md:flex-col" : "md:flex-row"}
            ${isSelected ? "md:flex-row" : "md:flex-col"}
            items-center gap-3 px-4 py-6 md:gap-4
            max-md:flex-row max-md:px-6 max-md:py-4
          `}
        >
          {/* Index number */}
          <span
            className={`
              font-serif text-4xl font-bold tabular-nums
              transition-colors duration-500
              ${isSelected ? background.textColor : "text-white/20"}
              ${isCollapsed ? "text-white/15" : ""}
              md:text-5xl
            `}
          >
            {String(index).padStart(2, "0")}
          </span>

          {/* Title area */}
          <div
            className={`
              flex flex-col
              ${isCollapsed ? "md:items-center" : ""}
              ${isSelected ? "md:items-start" : "md:items-center"}
            `}
          >
            <h2
              className={`
                font-serif tracking-[0.15em] transition-all duration-500
                ${isSelected ? "text-3xl md:text-4xl" : "text-lg md:text-xl"}
                ${isCollapsed ? "text-white/30 md:[writing-mode:vertical-rl]" : "text-amber-100/90"}
                ${isSelected ? "md:[writing-mode:horizontal-tb]" : ""}
              `}
            >
              {background.title}
            </h2>

            {/* Subtitle - only visible expanded */}
            {isSelected && (
              <motion.p
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-1 font-body text-sm tracking-wider text-white/40"
              >
                {background.subtitle}
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>

      {/* Expanded content */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="flex min-w-0 flex-1 flex-col overflow-hidden border-l border-white/5 md:flex-[2]"
        >
          {/* Tagline */}
          <div className="border-b border-white/5 px-6 py-6 md:px-10">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className={`font-serif text-xl italic tracking-wider md:text-2xl ${background.textColor}`}
            >
              「{background.tagline}」
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 font-body leading-relaxed text-gray-400"
            >
              {background.description}
            </motion.p>
          </div>

          {/* Detailed content */}
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
