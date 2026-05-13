"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type RouteId = "home" | "heroic" | "rules";

const NAV_ITEMS = [
  { id: "heroic" as const, label: "英雄时代", subtitle: "Heroic Era", href: "/intro" },
  { id: "rules" as const, label: "D&D 模组", subtitle: "Rules", href: "/rules" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [, setLastScrollY] = useState(0);

  const activeSection: RouteId = pathname.startsWith("/intro")
    ? "heroic"
    : pathname === "/rules"
      ? "rules"
      : "home";

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY;
    setLastScrollY((prev) => {
      if (currentY < 60) setVisible(true);
      else if (currentY > prev && currentY > 200) setVisible(false);
      else if (currentY < prev) setVisible(true);
      return currentY;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <nav
      className={`pointer-events-none fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 transition-transform duration-300 ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-covenant-silver/10 bg-covenant-void/80 px-2 py-2 shadow-lg shadow-black/20 backdrop-blur-xl md:gap-2 md:px-3">
        <Link href="/" className="mr-1 flex items-center justify-center rounded-full transition-opacity hover:opacity-80" title="返回首页">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/assets/token-icon-sm.webp" alt="圣约" className="h-6 w-6" />
        </Link>

        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.id;
          return (
            <Link key={item.id} href={item.href} className={`group relative rounded-full px-4 py-2 text-sm transition-all duration-300 md:px-6 ${
              isActive ? "text-covenant-silver-light" : "text-covenant-silver/40 hover:text-covenant-silver/70"
            }`}>
              {isActive && <span className="absolute inset-1 rounded-full border border-covenant-gold/20 bg-covenant-gold/10" />}
              <span className="relative z-10 font-heading text-xs tracking-[0.2em] md:text-sm">{item.label}</span>
              <span className={`relative z-10 ml-2 hidden font-body text-[0.625rem] tracking-wider md:inline ${isActive ? "text-covenant-gold/60" : "text-covenant-silver/20"}`}>
                {item.subtitle}
              </span>
            </Link>
          );
        })}

        <div className="ml-1 flex gap-1.5">
          <span className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${activeSection === "heroic" ? "bg-covenant-gold shadow-[0_0_6px_rgba(197,160,89,0.5)]" : "bg-covenant-silver/20"}`} />
          <span className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${activeSection === "rules" ? "bg-covenant-gold shadow-[0_0_6px_rgba(197,160,89,0.5)]" : "bg-covenant-silver/20"}`} />
        </div>
      </div>
    </nav>
  );
}
