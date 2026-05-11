"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CrossScarDecoration from "./CrossScarDecoration";

export type SectionId = "introduction" | "rules";

interface NavItem {
  id: SectionId;
  label: string;
  subtitle: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: "introduction", label: "英雄时代", subtitle: "Introduction" },
  { id: "rules", label: "D&D 模组", subtitle: "Rules & Mechanics" },
];

interface NavigationProps {
  activeSection: SectionId;
  onNavigate: (id: SectionId) => void;
}

export default function Navigation({
  activeSection,
  onNavigate,
}: NavigationProps) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    // Show nav at top of page or when scrolling up; hide when scrolling down past 200px
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
          className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4"
        >
          <div className="flex items-center gap-1 rounded-full border border-covenant-silver/10 bg-covenant-void/70 px-2 py-2 shadow-lg shadow-black/20 backdrop-blur-xl md:gap-2 md:px-3">
            {/* Logo mark */}
            <div className="mr-1 hidden md:block">
              <CrossScarDecoration variant="ornament" className="h-5 w-5 opacity-60" />
            </div>

            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`
                    group relative rounded-full px-4 py-2 text-sm transition-all duration-300 md:px-6 md:text-base
                    ${
                      isActive
                        ? "text-covenant-silver-light"
                        : "text-covenant-silver/40 hover:text-covenant-silver/70"
                    }
                  `}
                >
                  {/* Active background pill */}
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
                      relative z-10 ml-2 hidden font-body text-[10px] tracking-wider md:inline
                      ${isActive ? "text-covenant-gold/60" : "text-covenant-silver/20"}
                    `}
                  >
                    {item.subtitle}
                  </span>
                </button>
              );
            })}

            {/* Active dot indicator */}
            <div className="ml-1 flex gap-1.5">
              {NAV_ITEMS.map((item) => (
                <span
                  key={item.id}
                  className={`
                    h-1.5 w-1.5 rounded-full transition-all duration-500
                    ${
                      activeSection === item.id
                        ? "bg-covenant-gold shadow-[0_0_6px_rgba(197,160,89,0.5)]"
                        : "bg-covenant-silver/20"
                    }
                  `}
                />
              ))}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
