"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface FlameParticle {
  id: number;
  offset: number;   // horizontal offset from side edge (%)
  bottom: number;   // starting bottom (%)
  size: number;     // particle size (px)
  duration: number; // rise duration (s)
  delay: number;    // stagger delay (s)
  drift: number;    // horizontal sway (px)
  riseBy: number;   // how far up it travels (px)
  maxOpacity: number;
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
        offset: Math.random() * 16 + 2,         // 2–18% from side edge
        bottom: Math.random() * 100,              // start anywhere along height
        size: Math.random() * 2.5 + 1.5,          // 1.5–4px
        duration: Math.random() * 4 + 4,          // 4–8s rise
        delay: Math.random() * 5,                 // 0–5s stagger
        drift: (Math.random() - 0.5) * 40,        // ±20px sway
        riseBy: 80 + Math.random() * 200,          // travel 80–280px upward
        maxOpacity: Math.random() * 0.35 + 0.1,    // 0.1–0.45
      });
    }
    return items;
  }, [particleCount]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            [side]: `${p.offset}%`,
            bottom: `${p.bottom}%`,
            background:
              "radial-gradient(circle, rgba(212,176,106,0.9) 0%, rgba(197,160,89,0.6) 40%, transparent 70%)",
            boxShadow: `0 0 ${p.size * 3}px rgba(197,160,89,0.5), 0 0 ${p.size * 6}px rgba(197,160,89,0.15)`,
          }}
          animate={{
            y: [0, -p.riseBy * 0.4, -p.riseBy],
            x: [0, p.drift * 0.5, -p.drift * 0.5, p.drift * 0.3, 0],
            opacity: [0, p.maxOpacity, p.maxOpacity * 1.3, p.maxOpacity * 0.5, 0],
            scale: [0.3, 0.6, 1, 0.7, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.15, 0.4, 0.7, 1],
          }}
        />
      ))}

      {/* ── Larger "ember" particles ── */}
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute rounded-full"
          style={{
            width: 2 + Math.random() * 3,
            height: 2 + Math.random() * 3,
            [side]: `${Math.random() * 14 + 3}%`,
            bottom: `${Math.random() * 100}%`,
            background:
              "radial-gradient(circle, rgba(212,176,106,1) 0%, rgba(197,160,89,0.7) 50%, transparent 100%)",
            boxShadow: "0 0 8px rgba(197,160,89,0.7), 0 0 16px rgba(197,160,89,0.25)",
          }}
          animate={{
            y: [0, -60 - Math.random() * 120],
            x: [0, (Math.random() - 0.5) * 50, 0],
            opacity: [0, 0.5, 0.7, 0],
            scale: [0.3, 1.2, 0.6, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 4,
            delay: i * 0.7 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeOut",
            times: [0, 0.2, 0.6, 1],
          }}
        />
      ))}

      {/* ── Base glow along bottom edge ── */}
      <div
        className="absolute bottom-0 h-40"
        style={{
          [side]: 0,
          width: "20%",
          background: `linear-gradient(180deg, transparent 0%, rgba(197,160,89,0.03) 50%, rgba(197,160,89,0.08) 100%)`,
        }}
      />
    </div>
  );
}
