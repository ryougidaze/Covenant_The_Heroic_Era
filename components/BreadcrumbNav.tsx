"use client";

import Link from "next/link";

interface BreadcrumbNavProps {
  href: string;
  label: string;
}

export default function BreadcrumbNav({ href, label }: BreadcrumbNavProps) {
  return (
    <div className="fixed left-0 right-0 top-14 z-40 px-4 pt-1 md:top-16 md:px-6 md:pt-2">
      <Link
        href={href}
        className="inline-flex items-center gap-2 rounded-full border border-covenant-silver/10 bg-covenant-void/80 px-4 py-2 text-sm shadow-lg shadow-black/20 backdrop-blur-xl transition-all hover:border-covenant-gold/25 hover:bg-covenant-void/90"
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-covenant-silver/50">
          <path d="M10 7H4M4 7L7 4M4 7L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="font-heading text-xs tracking-[0.2em] text-covenant-silver/60">
          {label}
        </span>
      </Link>
    </div>
  );
}
