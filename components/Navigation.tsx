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

      {/* Album button — absolutely positioned on the right */}
      <a
        href="https://music.163.com/album?id=375496268&uct2=U2FsdGVkX1/MEhv2WLsQlKsuPkKRZHDL6We5kjShDlo="
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto absolute right-4 top-4 group hidden md:block"
        title="圣约专辑"
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-covenant-gold/30 bg-gradient-to-br from-covenant-abyss/95 via-covenant-void/95 to-covenant-abyss/95 px-4 py-2.5 shadow-lg shadow-black/30 backdrop-blur-xl transition-all duration-500 hover:border-covenant-gold/50 hover:shadow-[0_0_24px_rgba(197,160,89,0.2)] hover:scale-105">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0 text-covenant-gold transition-colors duration-500 group-hover:text-covenant-gold-light">
            <path d="M6 13.5C6 14.8807 4.88071 16 3.5 16C2.11929 16 1 14.8807 1 13.5C1 12.1193 2.11929 11 3.5 11C4.88071 11 6 12.1193 6 13.5Z" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M17 11.5C17 12.8807 15.8807 14 14.5 14C13.1193 14 12 12.8807 12 11.5C12 10.1193 13.1193 9 14.5 9C15.8807 9 17 10.1193 17 11.5Z" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M6 13.5V3L17 2V11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7.5 5.5L15 4.5" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" opacity="0.4"/>
          </svg>
          <span className="font-heading text-xs font-bold tracking-[0.2em] text-covenant-gold transition-colors duration-500 group-hover:text-covenant-gold-light">圣约专辑</span>
        </span>
      </a>

      {/* Mobile album button */}
      <a
        href="https://music.163.com/album?id=375496268&uct2=U2FsdGVkX1/MEhv2WLsQlKsuPkKRZHDL6We5kjShDlo="
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto absolute right-4 top-4 md:hidden"
        title="圣约专辑"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-covenant-gold/30 bg-gradient-to-br from-covenant-abyss/95 via-covenant-void/95 to-covenant-abyss/95 px-2.5 py-2 shadow-lg shadow-black/30 backdrop-blur-xl">
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none" className="shrink-0 text-covenant-gold">
            <path d="M6 13.5C6 14.8807 4.88071 16 3.5 16C2.11929 16 1 14.8807 1 13.5C1 12.1193 2.11929 11 3.5 11C4.88071 11 6 12.1193 6 13.5Z" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M17 11.5C17 12.8807 15.8807 14 14.5 14C13.1193 14 12 12.8807 12 11.5C12 10.1193 13.1193 9 14.5 9C15.8807 9 17 10.1193 17 11.5Z" stroke="currentColor" strokeWidth="1.2"/>
            <path d="M6 13.5V3L17 2V11.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="font-heading text-[10px] font-bold tracking-[0.15em] text-covenant-gold">专辑</span>
        </span>
      </a>
    </nav>
  );
}
