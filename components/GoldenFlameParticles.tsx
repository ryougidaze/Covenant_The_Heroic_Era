"use client";

import { useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";

interface FlameParticle {
  id: number;
  x: number;       // horizontal offset (%)
  yStart: number;  // start Y (%)
  size: number;    // particle size (px)
  opacity: number; // base opacity
  duration: number; // animation duration (s)
  delay: number;   // animation delay (s)
  drift: number;   // horizontal drift (px)
}

interface GoldenFlameParticlesProps {
  side: "left" | "right";
  particleCount?: number;
}

export default function GoldenFlameParticles({
  side,
  particleCount = 30,
}: GoldenFlameParticlesProps) {
  const particles = useMemo(() => {
    const items: FlameParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      items.push({
        id: i,
        x: Math.random() * 18 + 1,    // 1-19% from edge
        yStart: 60 + Math.random() * 40, // start 60-100% from top
        size: Math.random() * 3 + 1.5,   // 1.5-4.5px
        opacity: Math.random() * 0.35 + 0.1, // 0.1-0.45
        duration: Math.random() * 4 + 3,     // 3-7s
        delay: Math.random() * 3,            // 0-3s
        drift: (Math.random() - 0.5) * 20,   // ±10px
      });
    }
    return items;
  }, [particleCount]);

  return (
    <div
      className="pointer-events-none absolute inset-y-0 overflow-hidden"
      style={{
        [side]: 0,
        width: "20%",
      }}
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            bottom: 0,
            background:
              "radial-gradient(circle, rgba(212,176,106,0.9) 0%, rgba(197,160,89,0.6) 40%, transparent 70%)",
            boxShadow: `0 0 ${p.size * 3}px rgba(197,160,89,0.5), 0 0 ${p.size * 6}px rgba(197,160,89,0.2)`,
          }}
          animate={{
            y: [0, -(p.yStart + Math.random() * 20) + "%"],
            x: [0, p.drift, -p.drift, 0],
            opacity: [0, p.opacity, p.opacity * 1.5, 0],
            scale: [0.5, 1, 0.8, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.3, 0.7, 1],
          }}
        />
      ))}

      {/* ── Larger "ember" particles ── */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute rounded-full blur-[1px]"
          style={{
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            left: `${Math.random() * 14 + 3}%`,
            bottom: 0,
            background:
              "radial-gradient(circle, rgba(212,176,106,1) 0%, rgba(197,160,89,0.7) 50%, transparent 100%)",
            boxShadow: "0 0 8px rgba(197,160,89,0.7), 0 0 16px rgba(197,160,89,0.3)",
          }}
          animate={{
            y: [0, "-120%"],
            x: [0, (Math.random() - 0.5) * 30],
            opacity: [0, 0.6, 0.8, 0],
            scale: [0.3, 1.2, 0.6, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            delay: i * 0.7 + Math.random(),
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.2, 0.6, 1],
          }}
        />
      ))}

      {/* ── Base glow on the bottom edge ── */}
      <div
        className="absolute bottom-0 w-full h-32"
        style={{
          background: `linear-gradient(180deg, transparent 0%, rgba(197,160,89,0.04) 60%, rgba(197,160,89,0.1) 100%)`,
          [side]: 0,
        }}
      />
    </div>
  );
}
