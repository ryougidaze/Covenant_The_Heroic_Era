"use client";

import { motion } from "framer-motion";

interface SkeletonPanelProps {
  className?: string;
}

export default function SkeletonPanel({ className = "" }: SkeletonPanelProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`fixed inset-0 z-[100] flex items-center justify-center p-4 ${className}`}
    >
      <div className="absolute inset-0 bg-covenant-void/90 backdrop-blur-xl" />

      <div className="relative z-10 flex h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-covenant-silver/10 bg-covenant-abyss">
        {/* Left image skeleton (2/5 width) */}
        <div className="hidden w-2/5 flex-none items-center justify-center border-r border-covenant-silver/10 md:flex">
          <div className="relative h-full w-full animate-pulse bg-covenant-midnight/50 p-6">
            <div className="mx-auto h-full max-w-sm rounded-lg bg-covenant-gold/5" />
          </div>
        </div>

        {/* Right content skeleton */}
        <div className="flex flex-1 flex-col overflow-hidden px-8 py-10">
          {/* Close button skeleton */}
          <div className="absolute right-4 top-4 h-10 w-10 animate-pulse rounded-full bg-covenant-gold/5" />

          {/* Content lines */}
          <div className="space-y-4">
            <div className="h-4 w-3/4 animate-pulse rounded bg-covenant-gold/10" />
            <div className="h-4 w-full animate-pulse rounded bg-covenant-gold/5" />
            <div className="h-4 w-5/6 animate-pulse rounded bg-covenant-gold/5" />
            <div className="h-4 w-2/3 animate-pulse rounded bg-covenant-gold/5" />
          </div>

          {/* Badge skeleton */}
          <div className="mt-5 h-8 w-32 animate-pulse rounded-full bg-covenant-gold/10" />

          {/* Section skeletons */}
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="mt-8 space-y-3">
              <div className="h-6 w-48 animate-pulse rounded bg-covenant-gold/15" />
              <div className="h-4 w-full animate-pulse rounded bg-covenant-gold/5" />
              <div className="h-4 w-4/5 animate-pulse rounded bg-covenant-gold/5" />
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
