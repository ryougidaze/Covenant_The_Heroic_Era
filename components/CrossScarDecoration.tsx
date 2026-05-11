"use client";

import { motion } from "framer-motion";

type CrossScarVariant = "ornament" | "corner" | "watermark" | "divider";

interface CrossScarDecorationProps {
  variant?: CrossScarVariant;
  className?: string;
}

/**
 * CrossScarDecoration — 十字伤痕装饰
 *
 * Inspired by the lore: goddess Astraea struck the continent with a cross
 * of divine light, carving the Cross River and Heart Lake into the world.
 * This decoration evokes that iconic "cross scar with flowing gold light."
 */

export default function CrossScarDecoration({
  variant = "ornament",
  className = "",
}: CrossScarDecorationProps) {
  if (variant === "ornament") {
    return <OrnamentCross className={className} />;
  }
  if (variant === "corner") {
    return <CornerCross className={className} />;
  }
  if (variant === "divider") {
    return <DividerCross className={className} />;
  }
  return <WatermarkCross className={className} />;
}

/* ── Small ornamental cross ── */
function OrnamentCross({ className }: { className?: string }) {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        {/* Vertical bar */}
        <motion.rect
          x="18"
          y="2"
          width="4"
          height="36"
          rx="2"
          fill="url(#goldGradient)"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Horizontal bar */}
        <motion.rect
          x="2"
          y="18"
          width="36"
          height="4"
          rx="2"
          fill="url(#goldGradient)"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
        {/* Center glow */}
        <motion.circle
          cx="20"
          cy="20"
          r="6"
          fill="#C5A059"
          initial={{ opacity: 0.2, scale: 0.8 }}
          animate={{ opacity: [0.2, 0.7, 0.2], scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        {/* Flow particles on vertical */}
        <motion.circle
          r="2"
          fill="#D4B06A"
          initial={{ cy: 2, cx: 20 }}
          animate={{ cy: [2, 38, 2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
        {/* Flow particles on horizontal */}
        <motion.circle
          r="2"
          fill="#D4B06A"
          initial={{ cx: 2, cy: 20 }}
          animate={{ cx: [2, 38, 2] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 0.8 }}
        />

        <defs>
          <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#9A7D3A" />
            <stop offset="30%" stopColor="#C5A059" />
            <stop offset="50%" stopColor="#D4B06A" />
            <stop offset="70%" stopColor="#C5A059" />
            <stop offset="100%" stopColor="#9A7D3A" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

/* ── Corner accent cross ── */
function CornerCross({ className }: { className?: string }) {
  return (
    <div className={`absolute ${className}`}>
      <motion.div
        className="relative"
        animate={{ opacity: [0.3, 0.7, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Vertical arm */}
        <div className="absolute left-1/2 h-12 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-covenant-gold/60 to-transparent" />
        {/* Horizontal arm */}
        <div className="absolute top-1/2 w-12 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-covenant-gold/60 to-transparent" />
        {/* Center point */}
        <div className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-covenant-gold/80" />
      </motion.div>
    </div>
  );
}

/* ── Section divider: wide horizontal line with centre cross ── */
function DividerCross({ className }: { className?: string }) {
  return (
    <div className={`flex w-full items-center gap-4 ${className}`}>
      {/* Left line */}
      <motion.div
        className="h-px flex-1 bg-gradient-to-r from-transparent via-covenant-silver/20 to-covenant-silver/40"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
      {/* Centre ornament */}
      <div className="flex-none">
        <OrnamentCross className="h-8 w-8" />
      </div>
      {/* Right line */}
      <motion.div
        className="h-px flex-1 bg-gradient-to-l from-transparent via-covenant-silver/20 to-covenant-silver/40"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      />
    </div>
  );
}

/* ── Large watermark cross for background ── */
function WatermarkCross({ className }: { className?: string }) {
  return (
    <motion.div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="relative h-full w-full max-w-3xl">
        {/* Vertical scar */}
        <motion.div
          className="absolute left-1/2 h-full w-px -translate-x-1/2"
          style={{
            background:
              "linear-gradient(180deg, transparent 0%, rgba(197,160,89,0.15) 20%, rgba(197,160,89,0.3) 50%, rgba(197,160,89,0.15) 80%, transparent 100%)",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Horizontal scar */}
        <motion.div
          className="absolute top-1/2 w-full h-px -translate-y-1/2"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(197,160,89,0.15) 20%, rgba(197,160,89,0.3) 50%, rgba(197,160,89,0.15) 80%, transparent 100%)",
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
        />
        {/* Central glow */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(197,160,89,0.15) 0%, rgba(197,160,89,0.05) 30%, transparent 70%)",
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Orbiting particle */}
        <motion.div
          className="absolute left-1/2 top-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-covenant-gold/60 blur-[1px]"
          animate={{
            scale: [0, 2, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />
      </div>
    </motion.div>
  );
}
