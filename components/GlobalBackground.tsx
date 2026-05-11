"use client";

import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";

/**
 * GlobalBackground — 昼夜双子动态沉浸系统
 *
 * Left:  白昼与光辉 (radial gold → white gradient, breathing pulse)
 * Right: 黑夜与未来 (deep purple → void black gradient, breathing pulse)
 * Overlay: subtle noise texture for filmic grain
 * Mouse:  parallax-style微调 based on cursor position
 */

export default function GlobalBackground() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Normalise to 0–1, throttle via rAF in the event handler
    setMouse({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  }, []);

  useEffect(() => {
    let raf: number;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => handleMouseMove(e));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [handleMouseMove]);

  // Map mouse X to a subtle offset range (±3% for the gradient midpoint)
  const offsetX = (mouse.x - 0.5) * 6; // -3% → +3%

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* ── Left: 白昼与光辉 ── */}
      <motion.div
        className="absolute bottom-0 left-0 top-0 md:w-[55%] w-full md:h-full h-[45%]"
        style={{
          background: `radial-gradient(ellipse at ${50 + offsetX * 0.5}% 50%, rgba(248,250,252,0.10) 0%, rgba(197,160,89,0.06) 35%, rgba(197,160,89,0.02) 60%, transparent 85%)`,
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ── Center: golden thread (the boundary between day and night) ── */}
      <motion.div
        className="absolute left-1/2 top-0 hidden h-full w-px md:block"
        style={{
          background: `linear-gradient(180deg, transparent 5%, rgba(197,160,89,0.15) 25%, rgba(197,160,89,0.3) 50%, rgba(197,160,89,0.15) 75%, transparent 95%)`,
          transform: `translateX(${offsetX}%)`,
        }}
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* ── Right: 黑夜与未来 ── */}
      <motion.div
        className="absolute bottom-0 right-0 top-0 md:w-[55%] w-full md:h-full h-[55%] md:top-0 top-[45%]"
        style={{
          background: `radial-gradient(ellipse at ${50 - offsetX * 0.5}% 50%, rgba(30,27,75,0.15) 0%, rgba(15,10,40,0.10) 40%, rgba(2,6,23,0.08) 70%, transparent 90%)`,
        }}
        animate={{
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* ── Noise texture overlay (filmic grain) ── */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* ── Vignette (dark edges for depth) ── */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(2,6,23,0.35) 100%)`,
        }}
      />
    </div>
  );
}
