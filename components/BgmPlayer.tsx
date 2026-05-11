"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BgmPlayer() {
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Try autoplay on mount — browsers may block, fall back to prompt
  useEffect(() => {
    const a = new Audio("/assets/bgm.wav");
    a.loop = true;
    a.volume = 0.35;
    audioRef.current = a;

    a.play()
      .then(() => {
        setPlaying(true);
      })
      .catch(() => {
        // Autoplay blocked — show prompt
        setShowPrompt(true);
      });

    return () => {
      a.pause();
      audioRef.current = null;
    };
  }, []);

  const start = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    a.play()
      .then(() => {
        setPlaying(true);
        setShowPrompt(false);
      })
      .catch(() => setShowPrompt(true));
  }, []);

  const toggleMute = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (muted) {
      a.volume = 0.35;
      setMuted(false);
    } else {
      a.volume = 0;
      setMuted(true);
    }
  }, [muted]);

  return (
    <>
      {/* ── Autoplay blocked prompt ── */}
      <AnimatePresence>
        {showPrompt && !playing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-24 right-6 z-50 flex items-center gap-3 rounded-xl border border-covenant-gold/40 bg-covenant-abyss/90 px-5 py-3 backdrop-blur-xl shadow-lg shadow-black/30"
          >
            <span className="font-heading text-sm tracking-[0.1em] text-covenant-gold">
              点击播放背景音乐
            </span>
            <button
              onClick={start}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-covenant-gold/20 text-covenant-gold transition-colors hover:bg-covenant-gold/30"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M5 3L13 8L5 13V3Z" fill="currentColor" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Music toggle (always visible) ── */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        onClick={playing ? toggleMute : start}
        className={`
          fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full
          border backdrop-blur-xl shadow-lg shadow-black/30
          px-4 py-2.5 transition-all duration-500
          ${muted
            ? "border-red-500/30 bg-covenant-abyss/90 text-red-400"
            : playing
              ? "border-covenant-gold/30 bg-covenant-abyss/90 text-covenant-gold"
              : "border-covenant-silver/20 bg-covenant-abyss/90 text-covenant-silver/50 hover:border-covenant-gold/30 hover:text-covenant-gold"
          }
        `}
        title={!playing ? "播放音乐" : muted ? "取消静音" : "静音"}
      >
        {/* Icon */}
        {!playing ? (
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M5.5 4L14.5 9L5.5 14V4Z" fill="currentColor" />
          </svg>
        ) : muted ? (
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
                animate={{
                  height: [8, 14, 6, 12, 8][i] ?? 10,
                }}
                transition={{
                  duration: 1 + i * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                }}
              />
            ))}
          </>
        )}

        {/* Label */}
        <span className="font-heading text-xs tracking-[0.15em]">
          {!playing ? "BGM" : muted ? "静音中" : "BGM"}
        </span>
      </motion.button>
    </>
  );
}
