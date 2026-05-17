"use client";

import { useEffect, useState, useCallback, useRef } from "react";

export default function GlobalBackground() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 });
  const frameRef = useRef(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    // Throttle to ~20fps — skip 2 out of 3 frames
    frameRef.current = (frameRef.current + 1) % 3;
    if (frameRef.current !== 0) return;

    setMouse({
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const offsetX = (mouse.x - 0.5) * 6;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Left: Day & Radiance */}
      <div
        className="absolute bottom-0 left-0 top-0 md:w-[55%] w-full md:h-full h-[45%] animate-breathe-left"
        style={{
          background: `radial-gradient(ellipse at ${50 + offsetX * 0.5}% 50%, rgba(248,250,252,0.10) 0%, rgba(197,160,89,0.06) 35%, rgba(197,160,89,0.02) 60%, transparent 85%)`,
          animation: "breathe 12s ease-in-out infinite",
        }}
      />

      {/* Center: golden thread */}
      <div
        className="absolute hidden h-full w-px md:block"
        style={{
          left: `calc(50% + ${offsetX}%)`,
          background: `linear-gradient(180deg, transparent 5%, rgba(197,160,89,0.15) 25%, rgba(197,160,89,0.3) 50%, rgba(197,160,89,0.15) 75%, transparent 95%)`,
          animation: "breathe 15s ease-in-out 2s infinite",
        }}
      />

      {/* Right: Night & Void */}
      <div
        className="absolute bottom-0 right-0 top-0 md:w-[55%] w-full md:h-full h-[55%] md:top-0 top-[45%]"
        style={{
          background: `radial-gradient(ellipse at ${50 - offsetX * 0.5}% 50%, rgba(30,27,75,0.15) 0%, rgba(15,10,40,0.10) 40%, rgba(2,6,23,0.08) 70%, transparent 90%)`,
          animation: "breathe 14s ease-in-out 1s infinite",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 55%, rgba(2,6,23,0.35) 100%)`,
        }}
      />

      <style jsx>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
