"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

export default function BgmPlayer() {
  const [muted, setMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const a = new Audio("/assets/bgm.wav");
    a.loop = true;
    a.volume = 0.25;
    audioRef.current = a;
    a.play().catch(() => {}); // try autoplay, silently ignore if blocked
    return () => { a.pause(); audioRef.current = null; };
  }, []);

  const toggleMute = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (muted) { a.volume = 0.25; setMuted(false); }
    else { a.volume = 0; setMuted(true); }
  }, [muted]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1 }}
      onClick={toggleMute}
      className={`
        fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full
        border backdrop-blur-xl shadow-lg shadow-black/30
        px-4 py-2.5 transition-all duration-500
        ${muted
          ? "border-red-500/30 bg-covenant-abyss/90 text-red-400"
          : "border-covenant-gold/30 bg-covenant-abyss/90 text-covenant-gold"
        }
      `}
      title={muted ? "取消静音" : "静音"}
    >
      {muted ? (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M5.5 4L14.5 9L5.5 14V4Z" fill="currentColor" opacity="0.3" />
          <path d="M2 6L16 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M16 6L2 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ) : (
        <>
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-[3px] rounded-full bg-current"
              animate={{ height: [8, 14, 6, 12, 8][i] ?? 10 }}
              transition={{ duration: 1 + i * 0.2, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
            />
          ))}
        </>
      )}
      <span className="font-heading text-xs tracking-[0.15em]">
        {muted ? "静音中" : "BGM"}
      </span>
    </motion.button>
  );
}
