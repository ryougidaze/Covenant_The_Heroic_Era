"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";
import CrossScarDecoration from "@/components/CrossScarDecoration";

const GoldenFlameParticles = dynamic(
  () => import("@/components/GoldenFlameParticles"),
  { ssr: false }
);

export default function LandingPage() {
  return (
    <main className="relative flex h-screen min-h-[600px] flex-col items-center justify-center overflow-hidden">

      {/* ── Golden flame particles (symmetric) ── */}
      <GoldenFlameParticles side="left" particleCount={30} />
      <GoldenFlameParticles side="right" particleCount={30} />

      {/* ── Cross-scar watermark ── */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <CrossScarDecoration variant="watermark" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 flex flex-col items-center px-6 text-center">
        {/* Ornament above title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <CrossScarDecoration variant="ornament" className="h-14 w-14 md:h-18 md:w-18" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
          className="font-heading text-4xl font-bold tracking-[0.25em] md:text-6xl lg:text-7xl"
        >
          <span className="bg-gradient-to-b from-covenant-silver-light via-covenant-silver to-covenant-silver-dark bg-clip-text text-transparent">
            圣约·英雄时代
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="mt-4 font-heading text-sm font-medium tracking-[0.4em] text-covenant-gold/60 md:text-base"
        >
          COVENANT: AGE OF HEROES
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="mt-7 w-64 md:w-80"
        >
          <CrossScarDecoration variant="divider" />
        </motion.div>

        {/* ── Entry cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: "easeOut" }}
          className="mt-12 flex flex-col gap-5 md:flex-row md:gap-8"
        >
          {/* Card A: 英雄时代 */}
          <EntryCard
            href="/intro"
            title="英雄时代"
            subtitle="Introduction"
            description="探索创世神话、诸神众祖与西洲大陆的千年史诗"
            accentClass="border-covenant-silver/20 hover:border-covenant-silver/40"
            glowClass="from-covenant-ultramarine/20 to-transparent"
          />

          {/* Card B: D&D 模组 */}
          <EntryCard
            href="/rules"
            title="D&D 模组"
            subtitle="Rules & Mechanics"
            description="八大额外背景、特殊游戏规则与势力划分"
            accentClass="border-covenant-gold/20 hover:border-covenant-gold/40"
            glowClass="from-covenant-gold/10 to-transparent"
          />
        </motion.div>

        {/* ── Footer hint ── */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-14 font-body text-xs tracking-[0.3em] text-covenant-silver/25"
        >
          第三纪元 · 太阳历1000年 · 西洲大陆
        </motion.p>
      </div>
    </main>
  );
}

/* ── Entry Card ── */
function EntryCard({
  href,
  title,
  subtitle,
  description,
  accentClass,
  glowClass,
}: {
  href: string;
  title: string;
  subtitle: string;
  description: string;
  accentClass: string;
  glowClass: string;
}) {
  return (
    <Link href={href} className="group block w-full md:w-72">
      <motion.div
        whileHover={{ y: -4 }}
        whileTap={{ y: 0 }}
        className={`
          relative flex flex-col items-center rounded-2xl border
          bg-covenant-abyss/70 px-8 py-10 backdrop-blur-md
          transition-all duration-500
          ${accentClass}
        `}
      >
        {/* Hover glow */}
        <div
          className={`
            pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b
            opacity-0 transition-opacity duration-500 group-hover:opacity-100
            ${glowClass}
          `}
        />

        {/* Arrow indicator */}
        <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-covenant-silver/10 bg-covenant-midnight/80 transition-all duration-500 group-hover:border-covenant-gold/30 group-hover:bg-covenant-gold/10">
          <motion.svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            className="text-covenant-silver/50 transition-colors duration-500 group-hover:text-covenant-gold"
            animate={{ x: [0, 3, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <path
              d="M4 10H16M16 10L11 5M16 10L11 15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </div>

        {/* Title */}
        <h2 className="relative z-10 font-heading text-2xl tracking-[0.15em] text-covenant-silver-light transition-colors duration-500 group-hover:text-covenant-silver-light">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="relative z-10 mt-2 font-heading text-xs tracking-[0.3em] text-covenant-gold/50">
          {subtitle}
        </p>

        {/* Description */}
        <p className="relative z-10 mt-4 font-body text-sm leading-relaxed text-covenant-silver-dark/60 transition-colors duration-500 group-hover:text-covenant-silver-dark/80">
          {description}
        </p>
      </motion.div>
    </Link>
  );
}
