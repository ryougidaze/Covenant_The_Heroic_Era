"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";

interface FlameParticle {
  id: number;
  offset: number;
  bottom: number;
  size: number;
  duration: number;
  delay: number;
  riseBy: number;
  maxOpacity: number;
}

interface GoldenFlameParticlesProps {
  side: "left" | "right";
  particleCount?: number;
}

export default function GoldenFlameParticles({
  side,
  particleCount = 10,
}: GoldenFlameParticlesProps) {
  const particles = useMemo(() => {
    const items: FlameParticle[] = [];
    for (let i = 0; i < particleCount; i++) {
      items.push({
        id: i,
        offset: Math.random() * 16 + 2,
        bottom: Math.random() * 100,
        size: Math.random() * 2.5 + 1.5,
        duration: Math.random() * 4 + 5,
        delay: Math.random() * 6,
        riseBy: 60 + Math.random() * 180,
        maxOpacity: Math.random() * 0.3 + 0.08,
      });
    }
    return items;
  }, [particleCount]);

  const embers = useMemo(() => {
    return Array.from({ length: 3 }).map((_, i) => ({
      id: i,
      offset: Math.random() * 14 + 3,
      bottom: Math.random() * 100,
      size: 2 + Math.random() * 2.5,
      duration: 5 + Math.random() * 3,
      delay: i * 1.2 + Math.random() * 1.5,
      drift: (Math.random() - 0.5) * 30,
      riseBy: 40 + Math.random() * 100,
    }));
  }, []);

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
            boxShadow: `0 0 ${p.size * 3}px rgba(197,160,89,0.5)`,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -p.riseBy],
            opacity: [0, p.maxOpacity, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

      {embers.map((e) => (
        <motion.div
          key={`ember-${e.id}`}
          className="absolute rounded-full"
          style={{
            width: e.size,
            height: e.size,
            [side]: `${e.offset}%`,
            bottom: `${e.bottom}%`,
            background:
              "radial-gradient(circle, rgba(212,176,106,1) 0%, rgba(197,160,89,0.7) 50%, transparent 100%)",
            boxShadow: "0 0 8px rgba(197,160,89,0.7)",
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -e.riseBy],
            x: [0, e.drift, -e.drift, 0],
            opacity: [0, 0.5, 0.7, 0],
          }}
          transition={{
            duration: e.duration,
            delay: e.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}

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
