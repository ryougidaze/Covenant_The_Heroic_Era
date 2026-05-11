"use client";

import { useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { backgrounds } from "@/data/backgrounds";
import { BACKGROUND_IMAGE_URLS, Background } from "@/types";
import HeroSection from "@/components/HeroSection";
import BackgroundSlice from "@/components/BackgroundSlice";

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
    <main className="relative flex h-screen flex-col overflow-hidden bg-covenant-dark">
      {/* Background image layer */}
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
            {/* Dark overlay for readability */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Default dark background when nothing selected */}
      {!currentBgUrl && (
        <div className="absolute inset-0 z-0 bg-covenant-dark">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,164,75,0.08)_0%,_transparent_70%)]" />
        </div>
      )}

      {/* Content layer */}
      <div className="relative z-10 flex h-full flex-col">
        {/* Hero section */}
        <HeroSection selectedBg={selectedBg} />

        {/* Background slices container */}
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
      </div>
    </main>
  );
}
