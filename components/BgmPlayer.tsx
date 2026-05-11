"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";

export default function BgmPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = useCallback(() => {
    // Lazy-init audio on first click so 27MB WAV only loads on demand
    if (!audioRef.current) {
      audioRef.current = new Audio("/assets/bgm.wav");
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
    }
    const a = audioRef.current;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  }, [playing]);

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-covenant-silver/10 bg-covenant-void/70 text-covenant-silver/60 backdrop-blur-md transition-all hover:border-covenant-gold/30 hover:text-covenant-gold"
      title={playing ? "暂停音乐" : "播放音乐"}
    >
      {playing ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <motion.rect x="3" y="3" width="3.5" height="10" rx="0.5" fill="currentColor"
            animate={{ scaleY: [1, 0.7, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.rect x="9.5" y="3" width="3.5" height="10" rx="0.5" fill="currentColor"
            animate={{ scaleY: [1, 0.7, 1] }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5 3L13 8L5 13V3Z" fill="currentColor" />
        </svg>
      )}
    </motion.button>
  );
}
