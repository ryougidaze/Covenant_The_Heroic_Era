"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import CrossScarDecoration from "./CrossScarDecoration";

type RouteId = "home" | "intro" | "rules";

interface NavItem {
  id: RouteId;
  label: string;
  subtitle: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "intro", label: "英雄时代", subtitle: "Introduction", href: "/intro" },
  { id: "rules", label: "D&D 模组", subtitle: "Rules & Mechanics", href: "/rules" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isHome = pathname === "/";

  const activeSection: RouteId =
    pathname === "/intro" ? "intro" : pathname === "/rules" ? "rules" : "home";

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    if (currentY < 60) {
      setVisible(true);
    } else if (currentY > lastScrollY && currentY > 200) {
      setVisible(false);
    } else if (currentY < lastScrollY) {
      setVisible(true);
    }
    setLastScrollY(currentY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-4 pt-4 md:justify-center"
        >
          {/* ── Back-to-home (left side, visible on sub-pages) ── */}
          <div className="flex-none md:absolute md:left-4 md:top-4">
            {!isHome && (
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-covenant-silver/10 bg-covenant-void/70 px-4 py-2.5 text-sm shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:border-covenant-gold/30 hover:bg-covenant-void/80"
              >
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="text-covenant-silver/60"
                >
                  <path
                    d="M10 7H4M4 7L7 4M4 7L7 10"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="font-heading text-xs tracking-[0.2em] text-covenant-silver/60">
                  返回首页
                </span>
              </Link>
            )}
          </div>

          {/* ── Central nav pill ── */}
          <div className="flex items-center gap-1 rounded-full border border-covenant-silver/10 bg-covenant-void/70 px-2 py-2 shadow-lg shadow-black/20 backdrop-blur-xl md:gap-2 md:px-3">
            {/* Home / logo link */}
            <Link
              href="/"
              className="mr-1 flex items-center justify-center rounded-full p-1.5 transition-opacity hover:opacity-80"
              title="返回首页"
            >
              <CrossScarDecoration variant="ornament" className="h-5 w-5 opacity-60" />
            </Link>

            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`
                    group relative rounded-full px-4 py-2 text-sm transition-all duration-300 md:px-6
                    ${
                      isActive
                        ? "text-covenant-silver-light"
                        : "text-covenant-silver/40 hover:text-covenant-silver/70"
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-bg"
                      className="absolute inset-1 rounded-full border border-covenant-gold/20 bg-covenant-gold/10"
                      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    />
                  )}
                  <span className="relative z-10 font-heading text-xs tracking-[0.2em] md:text-sm">
                    {item.label}
                  </span>
                  <span
                    className={`
                      relative z-10 ml-2 hidden font-body text-[0.625rem] tracking-wider md:inline
                      ${isActive ? "text-covenant-gold/60" : "text-covenant-silver/20"}
                    `}
                  >
                    {item.subtitle}
                  </span>
                </Link>
              );
            })}

            {/* Active dot indicator */}
            <div className="ml-1 flex gap-1.5">
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                  activeSection === "intro"
                    ? "bg-covenant-gold shadow-[0_0_6px_rgba(197,160,89,0.5)]"
                    : "bg-covenant-silver/20"
                }`}
              />
              <span
                className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                  activeSection === "rules"
                    ? "bg-covenant-gold shadow-[0_0_6px_rgba(197,160,89,0.5)]"
                    : "bg-covenant-silver/20"
                }`}
              />
            </div>
          </div>

          {/* Spacer for centering on mobile when back button is visible */}
          <div className="flex-none md:hidden" style={{ width: "80px" }} />
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
