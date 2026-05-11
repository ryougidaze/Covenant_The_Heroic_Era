"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { backgrounds } from "@/data/backgrounds";
import { BACKGROUND_IMAGE_URLS, Background } from "@/types";
import HeroSection from "@/components/HeroSection";
import BackgroundSlice from "@/components/BackgroundSlice";
import CrossScarDecoration from "@/components/CrossScarDecoration";

export default function HomePage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedBg: Background | null =
    backgrounds.find((bg) => bg.id === selectedId) ?? null;

  const handleSelect = useCallback((id: string) => {
    setSelectedId((prev) => (prev === id ? null : id));
  }, []);

  const currentBgUrl =
    selectedBg && BACKGROUND_IMAGE_URLS[selectedBg.id]
      ? BACKGROUND_IMAGE_URLS[selectedBg.id]
      : null;

  return (
    <main className="relative flex h-screen flex-col overflow-hidden bg-covenant-void">
      {/* ── Background image layer with cross-scar watermark ── */}
      <AnimatePresence mode="wait">
        {currentBgUrl && (
          <motion.div
            key={selectedBg!.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 z-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentBgUrl}
              alt=""
              className="h-full w-full object-cover"
              loading="eager"
            />
            {/* Dark overlay: ultramarine tint */}
            <div className="absolute inset-0 bg-covenant-void/80 backdrop-blur-[2px]" />
            {/* Subtle radial glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,110,0.15)_0%,_transparent_70%)]" />
            {/* Cross-scar watermark on background */}
            <CrossScarDecoration variant="watermark" className="z-10 opacity-40" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Default background when nothing selected ── */}
      {!currentBgUrl && (
        <div className="absolute inset-0 z-0 bg-covenant-void">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(30,58,110,0.12)_0%,_transparent_70%)]" />
          <CrossScarDecoration variant="watermark" className="opacity-20" />
        </div>
      )}

      {/* ── Content layer ── */}
      <div className="relative z-10 flex h-full flex-col">
        <HeroSection selectedBg={selectedBg} />

        {/* Slices container */}
        <div className="flex flex-1 overflow-hidden md:flex-row max-md:flex-col">
          {backgrounds.map((bg, i) => (
            <BackgroundSlice
              key={bg.id}
              background={bg}
              isSelected={selectedId === bg.id}
              isAnySelected={selectedId !== null}
              onSelect={handleSelect}
              index={i + 1}
            />
          ))}
        </div>

        {/* ── Footer cross-scar ornament ── */}
        <div className="flex-none border-t border-covenant-silver/5 px-6 py-2">
          <div className="flex items-center justify-between">
            <span className="font-heading text-[10px] tracking-[0.3em] text-covenant-silver/20">
              COVENANT
            </span>
            <CrossScarDecoration variant="ornament" className="h-4 w-4 opacity-30" />
            <span className="font-heading text-[10px] tracking-[0.3em] text-covenant-silver/20">
              AGE OF HEROES
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
