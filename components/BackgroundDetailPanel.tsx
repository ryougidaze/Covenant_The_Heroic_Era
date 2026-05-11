"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BackgroundDetail, DetailBlock } from "@/types";
import CrossScarDecoration from "./CrossScarDecoration";

interface BackgroundDetailPanelProps {
  detail: BackgroundDetail;
  accentClass: string;
  onClose: () => void;
}

export default function BackgroundDetailPanel({
  detail,
  accentClass,
  onClose,
}: BackgroundDetailPanelProps) {
  const [openLevels, setOpenLevels] = useState<Set<number>>(new Set());

  const toggleLevel = useCallback((level: number) => {
    setOpenLevels((prev) => {
      const next = new Set(prev);
      if (next.has(level)) next.delete(level);
      else next.add(level);
      return next;
    });
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* ── Frosted backdrop ── */}
      <div className="absolute inset-0 bg-covenant-void/85 backdrop-blur-xl" />

      {/* ── Panel container ── */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-covenant-silver/10 bg-covenant-abyss/90 shadow-2xl shadow-black/40"
      >
        {/* ── Close button ── */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-covenant-silver/10 bg-covenant-midnight/80 text-covenant-silver/50 backdrop-blur-sm transition-all hover:border-covenant-gold/30 hover:text-covenant-gold"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M4 4L14 14M14 4L4 14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {/* ── Scrollable content ── */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="border-b border-covenant-silver/5 px-8 pb-6 pt-10">
            <CrossScarDecoration variant="ornament" className="mb-3 h-8 w-8" />
            <h2 className={`font-heading text-2xl tracking-[0.15em] ${accentClass}`}>
              {detail.intro.slice(0, 30)}...
            </h2>
          </div>

          {/* Intro + 阵营 */}
          <div className="space-y-6 px-8 py-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <p className="font-body leading-relaxed text-covenant-silver-dark/80">
                {detail.intro}
              </p>
            </motion.div>

            {detail.阵营 && (
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="flex items-center gap-3 rounded-xl border border-covenant-gold/15 bg-covenant-gold/5 px-5 py-3"
              >
                <span className="font-heading text-sm tracking-wider text-covenant-gold/70">
                  可选阵营
                </span>
                <span className="font-body text-covenant-silver-light">
                  {detail.阵营}
                </span>
              </motion.div>
            )}
          </div>

          {/* Sections */}
          {detail.sections.map((section, sIdx) => (
            <div key={section.title} className="border-t border-covenant-silver/5 px-8 py-6">
              <motion.h3
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + sIdx * 0.05 }}
                className={`mb-5 font-heading text-xl tracking-[0.12em] ${accentClass}`}
              >
                {section.title}
              </motion.h3>

              <div className="space-y-4">
                {section.content.map((block, bIdx) => (
                  <DetailBlockRenderer
                    key={bIdx}
                    block={block}
                    index={bIdx + sIdx * 10}
                    accentClass={accentClass}
                    isOpen={block.level != null && openLevels.has(block.level)}
                    onToggle={
                      block.level != null
                        ? () => toggleLevel(block.level!)
                        : undefined
                    }
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Single block renderer ── */
function DetailBlockRenderer({
  block,
  index,
  accentClass,
  isOpen,
  onToggle,
}: {
  block: DetailBlock;
  index: number;
  accentClass: string;
  isOpen?: boolean;
  onToggle?: () => void;
}) {
  const hasAccordion = block.type === "feature" && block.level != null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.35, ease: "easeOut" }}
    >
      {/* ── Feature block (accordion) ── */}
      {block.type === "feature" && hasAccordion && (
        <div className="rounded-xl border border-covenant-silver/5 bg-covenant-midnight/40 overflow-hidden">
          <button
            onClick={onToggle}
            className="flex w-full items-center gap-4 px-5 py-4 text-left transition-colors hover:bg-covenant-silver/[0.03]"
          >
            {/* Level badge */}
            <span className={`flex h-8 w-8 flex-none items-center justify-center rounded-full border font-heading text-sm ${accentClass} border-current/20 bg-covenant-midnight`}>
              {block.level}
            </span>

            {/* Title */}
            <span className="flex-1 font-heading text-sm tracking-wider text-covenant-silver-light/90">
              {block.title}
            </span>

            {/* Expand chevron */}
            <motion.svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.25 }}
              className="flex-none text-covenant-silver/40"
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

          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="border-t border-covenant-silver/5 px-5 pb-5 pt-3">
                  <HighlightedText
                    text={block.text}
                    highlights={block.highlights}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}

      {/* ── Lore block ── */}
      {block.type === "lore" && (
        <p className="font-body leading-relaxed text-covenant-silver-dark/70">
          <HighlightedText text={block.text} highlights={block.highlights} />
        </p>
      )}

      {/* ── Quote block ── */}
      {block.type === "quote" && (
        <blockquote className="rounded-xl border-l-2 border-covenant-gold/30 bg-covenant-gold/[0.03] px-5 py-4">
          <p className="font-heading text-sm italic leading-relaxed tracking-wider text-covenant-gold/70">
            {block.text}
          </p>
        </blockquote>
      )}

      {/* ── Note block ── */}
      {block.type === "note" && (
        <div className="rounded-xl border border-covenant-gold/10 bg-covenant-gold/[0.03] px-5 py-4">
          <p className="font-body text-sm leading-relaxed text-covenant-gold/60">
            <HighlightedText text={block.text} highlights={block.highlights} />
          </p>
        </div>
      )}
    </motion.div>
  );
}

/* ── Gold-highlighted text renderer ── */
function HighlightedText({
  text,
  highlights,
}: {
  text: string;
  highlights?: string[];
}) {
  if (!highlights || highlights.length === 0) return <>{text}</>;

  // Build regex from highlights, escape special chars
  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  );
  const pattern = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(pattern);

  return (
    <>
      {parts.map((part, i) => {
        const isHighlight = highlights.some((h) => part === h);
        return isHighlight ? (
          <span
            key={i}
            className="font-semibold text-covenant-gold"
          >
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );
}
