"use client";

import { useRef, useState, useEffect } from "react";
import type { ChronicleSection } from "@/data/heroic-era";

interface SplitContentViewProps {
  title: string;
  subtitle?: string;
  sections: ChronicleSection[];
}

function SectionContent({ section }: { section: ChronicleSection }) {
  return (
    <div className="space-y-4">
      {section.content.split("\n\n").filter(Boolean).map((para, i) => {
        if (para.startsWith("### ")) {
          return <h3 key={i} className="mt-8 font-heading text-base font-medium tracking-[0.1em] text-covenant-silver-light/80 first:mt-0 md:text-lg">{para.replace("### ", "")}</h3>;
        }
        return <p key={i} className="font-body text-sm leading-relaxed tracking-[0.02em] text-covenant-silver/85 md:text-base md:leading-loose">{para}</p>;
      })}
    </div>
  );
}

export default function SplitContentView({ title, subtitle, sections }: SplitContentViewProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    contentRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeId]);

  if (sections.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="font-heading text-lg tracking-[0.2em] text-covenant-silver/30">暂无内容 · 敬请期待</p>
      </div>
    );
  }

  const activeSection = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <div className="flex flex-col md:flex-row md:gap-0">
      {/* Left TOC */}
      <nav className="shrink-0 max-md:sticky max-md:top-16 max-md:z-30 max-md:overflow-x-auto max-md:border-b max-md:border-covenant-silver/5 max-md:bg-covenant-void/90 max-md:backdrop-blur-xl md:sticky md:top-20 md:h-fit md:w-1/4 md:min-w-[220px] md:self-start md:pr-6">
        <div className="flex gap-1 px-4 py-3 md:flex-col md:gap-1.5 md:px-0 md:py-0">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveId(s.id)}
                className={`shrink-0 whitespace-nowrap rounded-full px-3 py-1.5 text-left font-heading text-sm tracking-[0.15em] transition-all duration-300 md:rounded-lg md:px-4 md:py-2.5 md:text-lg ${
                  isActive
                    ? "bg-covenant-gold/10 text-covenant-gold border border-covenant-gold/20 shadow-[0_0_12px_rgba(197,160,89,0.1)]"
                    : "text-covenant-silver/40 hover:text-covenant-silver/60 hover:bg-covenant-silver/5 border border-transparent"
                }`}
              >
                {s.title}
              </button>
            );
          })}
        </div>
      </nav>

      {/* Right content */}
      <div ref={contentRef} className="flex-1 px-4 pb-20 pt-6 md:w-3/4 md:pl-8 md:pr-20 lg:pr-28 md:pt-0">
        <h1 className="font-heading text-2xl font-bold tracking-[0.15em] text-covenant-silver-light md:text-3xl">{title}</h1>
        {subtitle && <p className="mt-2 font-body text-sm tracking-wider text-covenant-gold/60 md:text-base">{subtitle}</p>}
        <div className="mt-2 h-px w-full bg-gradient-to-r from-covenant-gold/20 via-covenant-gold/10 to-transparent" />
        <div className="mt-8 md:mt-12">
          <section key={activeSection.id} className="animate-fade-in">
            <h2 className="font-heading text-lg font-semibold tracking-[0.12em] text-covenant-gold md:text-xl">{activeSection.title}</h2>
            {activeSection.image && (
              <div className="mt-6 overflow-hidden rounded-xl border border-covenant-gold/20 shadow-2xl shadow-black/40 md:max-w-[50%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={activeSection.image} alt={activeSection.title} className="w-full h-auto" loading="lazy" decoding="async" />
              </div>
            )}
            <div className="mt-4">
              <SectionContent section={activeSection} />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
