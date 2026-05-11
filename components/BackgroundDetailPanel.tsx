"use client";

import { useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { BackgroundDetail, DetailBlock, BACKGROUND_IMAGE_URLS } from "@/types";

interface BackgroundDetailPanelProps {
  detail: BackgroundDetail;
  bgId: string;
  accentClass: string;
  onClose: () => void;
}

export default function BackgroundDetailPanel({
  detail,
  bgId,
  accentClass,
  onClose,
}: BackgroundDetailPanelProps) {
  // Lock scroll synchronously to prevent layout shift flicker
  useLayoutEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ willChange: "opacity" }}
      onClick={onClose}
    >
      {/* Backdrop + panel in one smooth layer */}
      <div className="absolute inset-0 bg-covenant-void/90 backdrop-blur-xl" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ willChange: "transform, opacity" }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 flex h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-covenant-silver/10 bg-covenant-abyss shadow-2xl shadow-black/50"
      >
        {/* ── LEFT: 2:3 Image area ── */}
        <div className="hidden w-2/5 flex-none items-center justify-center border-r border-covenant-silver/10 md:flex">
          <div className="relative flex h-full w-full items-center justify-center p-6">
            {/* Ambient glow */}
            <div
              className="absolute inset-6"
              style={{
                boxShadow: `
                  -14px 0 35px -12px rgba(197,160,89,0.18),
                  14px 0 35px -12px rgba(30,27,75,0.25),
                  inset 0 0 50px rgba(0,0,0,0.35)
                `,
              }}
            />
            {/* Feathered image */}
            <div
              className="relative h-full w-full overflow-hidden"
              style={{
                maskImage: `linear-gradient(
                  to bottom,
                  transparent 0%,
                  rgba(0,0,0,0.35) 4%,
                  rgba(0,0,0,1) 8%,
                  rgba(0,0,0,1) 92%,
                  rgba(0,0,0,0.35) 96%,
                  transparent 100%
                )`,
                WebkitMaskImage: `linear-gradient(
                  to bottom,
                  transparent 0%,
                  rgba(0,0,0,0.35) 4%,
                  rgba(0,0,0,1) 8%,
                  rgba(0,0,0,1) 92%,
                  rgba(0,0,0,0.35) 96%,
                  transparent 100%
                )`,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={BACKGROUND_IMAGE_URLS[bgId] || ""}
                alt=""
                className="h-full w-full object-contain"
                style={{
                  boxShadow: "inset 0 0 30px rgba(0,0,0,0.4)",
                }}
              />
            </div>
          </div>
        </div>

        {/* ── RIGHT: Scrollable rules ── */}
        <div className="flex flex-1 flex-col overflow-hidden">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-covenant-silver/10 bg-covenant-midnight/80 text-covenant-silver/40 backdrop-blur-sm transition-all hover:border-covenant-gold/40 hover:text-covenant-gold"
            aria-label="关闭"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 3L13 13M13 3L3 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>

          <div className="flex-1 overflow-y-auto px-8 py-10">
            {/* Intro */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              <p className="font-body leading-relaxed text-covenant-silver-dark/80">
                {detail.intro}
              </p>
            </motion.div>

            {/* 阵营 badge */}
            {detail.阵营 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className="mt-5 inline-flex items-center gap-3 rounded-full border border-covenant-gold/15 bg-covenant-gold/5 px-5 py-2"
              >
                <span className="font-heading text-sm tracking-wider text-covenant-gold/60">可选阵营</span>
                <span className="font-body text-covenant-silver-light">{detail.阵营}</span>
              </motion.div>
            )}

            {/* Level timeline sections */}
            {detail.sections.map((section, sIdx) => (
              <div key={section.title} className="mt-8">
                <motion.h3
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + sIdx * 0.04, duration: 0.3 }}
                  className={`mb-6 font-heading text-xl tracking-[0.12em] ${accentClass}`}
                >
                  {section.title}
                </motion.h3>

                <LevelGroupList
                  blocks={section.content.filter((b) => b.type === "feature" || b.type === "note")}
                  accentClass={accentClass}
                />
              </div>
            ))}

            <div className="h-8" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Action badge color map ── */
const ACTION_COLORS: Record<string, string> = {
  "动作": "border-blue-400/30 bg-blue-400/10 text-blue-300",
  "附赠动作": "border-emerald-400/30 bg-emerald-400/10 text-emerald-300",
  "反应": "border-amber-400/30 bg-amber-400/10 text-amber-300",
  "被动": "border-slate-400/30 bg-slate-400/10 text-slate-300",
  "特性": "border-purple-400/30 bg-purple-400/10 text-purple-300",
  "传奇动作": "border-red-400/30 bg-red-400/10 text-red-300",
  "传奇反应": "border-red-400/30 bg-red-400/10 text-red-300",
};

/* ── Group blocks by level, render as cards ── */
function LevelGroupList({
  blocks,
  accentClass,
}: {
  blocks: DetailBlock[];
  accentClass: string;
}) {
  // Render blocks in original order: features grouped by level, notes inline
  let globalIdx = 0;
  const elements: React.ReactNode[] = [];
  let currentLevel: number | null = null;
  let currentGroup: DetailBlock[] = [];

  const flushGroup = () => {
    if (currentGroup.length === 0) return;
    const level = currentLevel ?? 0;
    const isMulti = currentGroup.length > 1;
    elements.push(
      <div key={`lv-${level}`} className="mb-5">
        <div className="absolute -left-[29px] top-0 h-3 w-3 rounded-full border-2 border-current/30 bg-covenant-void" />
        <span className={`inline-block mb-3 rounded-full border px-3 py-0.5 font-heading text-xs tracking-wider ${accentClass} border-current/20 bg-covenant-midnight`}>
          Lv.{level}
        </span>
        <div className={isMulti ? "space-y-3" : ""}>
          {currentGroup.map((b) => (
            <AbilityCard key={`${level}-${b.title}`} block={b} index={globalIdx++} />
          ))}
        </div>
      </div>
    );
    currentGroup = [];
    currentLevel = null;
  };

  for (const block of blocks) {
    if (block.type === "note") {
      flushGroup();
      const idx = globalIdx++;
      elements.push(
        <motion.div
          key={`note-${idx}`}
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: idx * 0.03, duration: 0.25 }}
          className="relative mb-5"
        >
          <div className="absolute -left-[29px] top-2 h-3 w-3 rounded-full border-2 border-covenant-gold/30 bg-covenant-void" />
          <div className="rounded-xl border border-covenant-gold/10 bg-covenant-gold/[0.03] px-5 py-3">
            <span className="font-body text-sm leading-relaxed text-covenant-gold/60">
              <HighlightNumbers text={block.text} />
            </span>
          </div>
        </motion.div>
      );
    } else {
      // Feature: group by level
      if (block.level !== currentLevel) {
        flushGroup();
        currentLevel = block.level ?? 0;
      }
      currentGroup.push(block);
    }
  }
  flushGroup();

  return (
    <div className="relative border-l-2 border-covenant-gold/20 pl-6">
      {elements}
    </div>
  );
}

/* ── Individual ability card ── */
function AbilityCard({
  block,
  index,
}: {
  block: DetailBlock;
  index: number;
}) {
  const badgeClass = block.action ? (ACTION_COLORS[block.action] || ACTION_COLORS["被动"]) : "";

  return (
    <motion.div
      initial={{ opacity: 0, x: -8 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.03, duration: 0.25 }}
      className="rounded-xl border border-covenant-silver/5 bg-covenant-abyss/50 p-4 transition-colors hover:border-covenant-gold/10"
    >
      {/* Header: name + badges */}
      <div className="flex flex-wrap items-center gap-2 mb-2">
        {block.title && (
          <h4 className="font-heading text-sm font-semibold tracking-wider text-covenant-silver-light/90">
            {block.title}
          </h4>
        )}
        {block.action && (
          <span className={`rounded-full border px-2 py-0.5 font-body text-xs ${badgeClass}`}>
            {block.action}
          </span>
        )}
        {block.usage && (
          <span className="ml-auto font-heading text-xs tracking-wider text-covenant-gold">
            {block.usage}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="font-body text-sm leading-relaxed text-covenant-silver-dark/70">
        <HighlightNumbers text={block.text} />
      </p>
    </motion.div>
  );
}

/* ── Gold highlight ── */
const HIGHLIGHT_TERMS = [
  /\d+d\d+/g, /\d+尺/g, /\d+级/g, /\d+轮/g, /\d+次/g, /\d+个/g,
  /DC\d+/g, /AC[+-]?\d+/g, /[+-]?\d+尺/g,
  /真实伤害/g, /光耀伤害/g, /火焰伤害/g, /力场伤害/g, /黯蚀伤害/g,
  /闪电伤害/g, /寒冷伤害/g, /心灵伤害/g, /百分比伤害/g,
  /临时生命值/g, /最大生命值/g, /优势/g, /劣势/g, /豁免/g, /重击/g,
  /免疫/g, /抗性/g, /翻倍/g, /每天[一二两三四五六七八九]/g, /每[轮天周月]/g,
];

function HighlightNumbers({ text }: { text: string }) {
  interface Match { start: number; end: number; text: string }
  const all: Match[] = [];
  for (const re of HIGHLIGHT_TERMS) {
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) all.push({ start: m.index, end: m.index + m[0].length, text: m[0] });
  }
  all.sort((a, b) => a.start - b.start);
  const filtered: Match[] = [];
  for (const m of all) {
    if (filtered.length === 0 || m.start >= filtered[filtered.length - 1].end) filtered.push(m);
  }
  if (filtered.length === 0) return <>{text}</>;

  const result: React.ReactNode[] = [];
  let cursor = 0;
  filtered.forEach((m, i) => {
    if (m.start > cursor) result.push(<span key={`t-${i}`}>{text.slice(cursor, m.start)}</span>);
    result.push(<span key={`h-${i}`} className="font-semibold text-covenant-gold">{m.text}</span>);
    cursor = m.end;
  });
  if (cursor < text.length) result.push(<span key="tail">{text.slice(cursor)}</span>);
  return <>{result}</>;
}
