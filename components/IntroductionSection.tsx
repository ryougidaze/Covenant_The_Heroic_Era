"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { worldLore } from "@/data/world-lore";
import { LoreSection as LoreSectionType, LoreChapter } from "@/types";
import CrossScarDecoration from "./CrossScarDecoration";

export default function IntroductionSection() {
  const [openSectionId, setOpenSectionId] = useState<string | null>(null);

  const toggleSection = (id: string) => {
    setOpenSectionId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="section-introduction"
      className="relative min-h-screen"
    >
      {/* Background watermark */}
      <div className="pointer-events-none fixed inset-0 opacity-10">
        <CrossScarDecoration variant="watermark" />
      </div>

      {/* ── Hero Header ── */}
      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <CrossScarDecoration variant="ornament" className="h-16 w-16 md:h-20 md:w-20" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="font-heading text-5xl font-bold tracking-[0.25em] md:text-7xl lg:text-8xl"
        >
          <span className="bg-gradient-to-b from-covenant-silver-light via-covenant-silver to-covenant-silver-dark bg-clip-text text-transparent">
            圣约·英雄时代
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="mt-6 font-heading text-sm font-medium tracking-[0.4em] text-covenant-gold/60 md:text-base"
        >
          COVENANT: AGE OF HEROES
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 w-72 md:w-96"
        >
          <CrossScarDecoration variant="divider" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 max-w-2xl font-body text-base leading-relaxed text-covenant-silver-dark md:text-lg"
        >
          第三纪元太阳历 1000 年，西洲大陆菲比斯帝国。
          <br />
          神裔统治的千年和平之下，北方动荡再起。
          <br />
          英雄的传说，由此开篇。
        </motion.p>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-10 flex flex-col items-center gap-2"
        >
          <span className="font-body text-xs tracking-[0.3em] text-covenant-silver/30">
            向下探索
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-5 w-px bg-gradient-to-b from-covenant-gold/40 to-transparent"
          />
        </motion.div>
      </div>

      {/* ── Horizontal Accordion: Lore Sections ── */}
      <div className="mx-auto max-w-6xl px-6 pb-32">
        {/* Section title tabs — horizontal row */}
        <div className="mb-2 flex flex-wrap justify-center gap-2 md:gap-3">
          {worldLore.map((section) => {
            const isOpen = openSectionId === section.id;
            return (
              <button
                key={section.id}
                onClick={() => toggleSection(section.id)}
                className={`
                  group relative rounded-full px-5 py-2.5 font-heading text-sm tracking-[0.15em] transition-all duration-300 md:px-7 md:py-3 md:text-base
                  ${
                    isOpen
                      ? "text-covenant-silver-light"
                      : "text-covenant-silver/40 hover:text-covenant-silver/70"
                  }
                `}
              >
                {/* Active background pill */}
                {isOpen && (
                  <motion.div
                    layoutId="lore-tab-bg"
                    className="absolute inset-1 rounded-full border border-covenant-gold/20 bg-covenant-gold/8"
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {/* Collapsed indicator dot */}
                  {!isOpen && (
                    <span className="h-1.5 w-1.5 rounded-full bg-covenant-silver/20 transition-colors group-hover:bg-covenant-gold/50" />
                  )}
                  {isOpen && (
                    <span className="h-1.5 w-1.5 rounded-full bg-covenant-gold/80 shadow-[0_0_6px_rgba(197,160,89,0.5)]" />
                  )}
                  {section.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Divider under tabs */}
        <div className="mb-10">
          <CrossScarDecoration variant="divider" className="w-full opacity-50" />
        </div>

        {/* Expanded section content */}
        <AnimatePresence mode="wait">
          {openSectionId && (
            <LoreSectionContent
              key={openSectionId}
              section={worldLore.find((s) => s.id === openSectionId)!}
            />
          )}
        </AnimatePresence>

        {/* Empty state — when nothing is open */}
        {!openSectionId && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-20 text-center"
          >
            <p className="font-body text-base text-covenant-silver/25">
              点击上方主题以探索世界观
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}

/* ── Expanded Lore Section Content ── */
function LoreSectionContent({ section }: { section: LoreSectionType }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Section title */}
      <div className="mb-8 flex items-center gap-4">
        <CrossScarDecoration variant="ornament" className="h-8 w-8 flex-none" />
        <h2 className="font-heading text-2xl tracking-[0.2em] text-covenant-silver-light md:text-3xl">
          {section.title}
        </h2>
        <div className="ml-auto h-px flex-1 bg-gradient-to-l from-transparent to-covenant-silver/10" />
      </div>

      {/* Chapter cards grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {section.chapters.map((chapter, i) => (
          <ChapterCard key={chapter.id} chapter={chapter} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

/* ── Single Chapter Card ── */
function ChapterCard({
  chapter,
  index,
}: {
  chapter: LoreChapter;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -2 }}
      className="group rounded-xl border border-covenant-silver/5 bg-covenant-abyss/60 p-6 backdrop-blur-sm transition-all hover:border-covenant-gold/15 md:p-8"
    >
      {/* Title */}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="font-heading text-lg tracking-[0.15em] text-covenant-silver-light">
            {chapter.title}
          </h3>
          {chapter.subtitle && (
            <p className="mt-1 font-body text-xs tracking-wider text-covenant-gold/50">
              {chapter.subtitle}
            </p>
          )}
        </div>
        <CrossScarDecoration variant="ornament" className="h-5 w-5 flex-none opacity-40" />
      </div>

      {/* Highlight quote */}
      {chapter.highlight && (
        <blockquote className="mt-4 border-l-2 border-covenant-gold/30 pl-4 font-heading text-sm italic tracking-wider text-covenant-gold/70">
          {chapter.highlight}
        </blockquote>
      )}

      {/* Summary */}
      <p className="mt-4 font-body text-sm leading-relaxed text-covenant-silver/60">
        {chapter.summary}
      </p>

      {/* Detail paragraphs */}
      <div className="mt-4 space-y-3">
        {chapter.paragraphs.map((para, i) => (
          <p
            key={i}
            className="font-body text-sm leading-relaxed text-covenant-silver-dark/80"
          >
            {para}
          </p>
        ))}
      </div>
    </motion.div>
  );
}
