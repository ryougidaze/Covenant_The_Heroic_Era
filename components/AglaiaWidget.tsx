"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { ChatMessage } from "@/lib/aglaia/types";

export default function AglaiaWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [open]);

  const sendMessage = useCallback(async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/aglaia/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated }),
      });

      const data = await res.json();
      if (!res.ok) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `（${data.error || "出错了，请稍后再试"}）` },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.reply },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "（网络错误，请稍后再试）" },
      ]);
    } finally {
      setLoading(false);
    }
  }, [input, loading, messages]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: open ? 0 : 1, scale: open ? 0.8 : 1 }}
        transition={{ duration: 0.3 }}
        onClick={() => setOpen(true)}
        className={`
          fixed right-4 z-40
          top-[35%] -translate-y-1/2
          w-24 h-24 rounded-full
          ring-2 ring-covenant-gold/40 ring-offset-4 ring-offset-covenant-void/80
          bg-gradient-to-br from-covenant-abyss/95 via-covenant-void/95 to-covenant-abyss/95
          backdrop-blur-xl
          shadow-[0_0_20px_rgba(197,160,89,0.25),0_0_40px_rgba(197,160,89,0.1)]
          transition-all duration-500 overflow-hidden
          hover:ring-covenant-gold/60 hover:shadow-[0_0_30px_rgba(197,160,89,0.4),0_0_60px_rgba(197,160,89,0.15)]
          cursor-pointer
        `}
        title="与阿格莱亚对话"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/aglaia-AIchat.webp"
          alt="阿格莱亚"
          className="w-full h-full object-cover"
        />
      </motion.button>

      {/* Chat Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 40, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={`
              fixed z-50
              right-2 md:right-16
              top-[35%] -translate-y-1/2
              w-[calc(100vw-1rem)] md:w-[500px]
              max-h-[85vh] md:max-h-[720px]
              flex flex-col
              rounded-2xl
              border border-covenant-gold/20
              bg-covenant-void/95 backdrop-blur-xl
              shadow-[0_0_40px_rgba(0,0,0,0.5),0_0_80px_rgba(197,160,89,0.08)]
            `}
          >
            {/* Header */}
            <div className="flex items-center gap-3 px-4 py-3 border-b border-covenant-gold/10 shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/aglaia-AIchat.webp"
                alt="阿格莱亚"
                className="w-9 h-9 rounded-full object-cover ring-1 ring-covenant-gold/30"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-heading text-sm tracking-[0.15em] text-covenant-silver-light">
                  阿格莱亚·晴阳
                </h3>
                <p className="font-body text-[0.65rem] text-covenant-gold/60 tracking-wider">
                  Aglaia-Hyperion · 菲比斯皇女
                </p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-covenant-silver/40 hover:text-covenant-silver-light transition-colors p-1"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.length === 0 && (
                <div className="flex flex-col items-center gap-3 pt-8 pb-4">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/aglaia-AIchat.webp"
                    alt="阿格莱亚"
                    className="w-16 h-16 rounded-full object-cover ring-1 ring-covenant-gold/20 opacity-80"
                  />
                  <p className="font-heading text-xs tracking-[0.2em] text-covenant-gold/50">
                    AGLAIA
                  </p>
                  <p className="font-body text-sm text-covenant-silver/40 text-center leading-relaxed">
                    旅行者，欢迎你来到这片土地。
                    <br />
                    有什么想了解的，尽管问我。
                  </p>
                </div>
              )}

              <AnimatePresence>
                {messages.map((msg, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {msg.role === "assistant" && (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src="/assets/aglaia-AIchat.webp"
                        alt=""
                        className="w-6 h-6 rounded-full object-cover mt-1 shrink-0 ring-1 ring-covenant-gold/20"
                      />
                    )}
                    <div
                      className={`
                        max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed font-body
                        ${msg.role === "user"
                          ? "bg-covenant-gold/10 border border-covenant-gold/20 text-covenant-silver-light rounded-br-md"
                          : "bg-covenant-silver/5 border border-covenant-silver/10 text-covenant-silver-light rounded-bl-md"
                        }
                      `}
                    >
                      {msg.content}
                    </div>
                    {msg.role === "user" && (
                      <div className="w-6 h-6 rounded-full bg-covenant-gold/15 mt-1 shrink-0 flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-covenant-gold/60">
                          <circle cx="6" cy="4" r="2" stroke="currentColor" strokeWidth="1" />
                          <path d="M3 10c0-1.5 1.5-3 3-3s3 1.5 3 3" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
                        </svg>
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Loading */}
              {loading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 justify-start"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/assets/aglaia-AIchat.webp"
                    alt=""
                    className="w-6 h-6 rounded-full object-cover mt-1 shrink-0 ring-1 ring-covenant-gold/20"
                  />
                  <div className="bg-covenant-silver/5 border border-covenant-silver/10 rounded-2xl rounded-bl-md px-4 py-3">
                    <div className="flex gap-1.5">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 h-1.5 rounded-full bg-covenant-gold/60"
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input */}
            <div className="px-4 py-3 border-t border-covenant-gold/10 shrink-0">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="与 AGLAIA 对话..."
                  disabled={loading}
                  className={`
                    flex-1 bg-covenant-silver/5 border border-covenant-silver/10
                    rounded-full px-4 py-2 text-sm font-body
                    text-covenant-silver-light placeholder-covenant-silver/30
                    outline-none transition-colors
                    focus:border-covenant-gold/40 focus:bg-covenant-silver/8
                    disabled:opacity-40
                  `}
                />
                <button
                  onClick={sendMessage}
                  disabled={loading || !input.trim()}
                  className={`
                    w-9 h-9 rounded-full flex items-center justify-center shrink-0
                    transition-all duration-300
                    ${input.trim() && !loading
                      ? "bg-covenant-gold text-covenant-void hover:bg-covenant-gold-light hover:shadow-[0_0_16px_rgba(197,160,89,0.3)] cursor-pointer"
                      : "bg-covenant-silver/10 text-covenant-silver/30 cursor-not-allowed"
                    }
                  `}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M12 7L7.5 2.5M12 7L7.5 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
