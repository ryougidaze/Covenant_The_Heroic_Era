"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Navigation, { SectionId } from "@/components/Navigation";
import IntroductionSection from "@/components/IntroductionSection";
import RulesSection from "@/components/RulesSection";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState<SectionId>("introduction");
  const introRef = useRef<HTMLElement>(null);
  const rulesRef = useRef<HTMLElement>(null);

  /* ── IntersectionObserver: track active section ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry with the largest intersection ratio
        let maxRatio = 0;
        let maxId: SectionId = activeSection;

        for (const entry of entries) {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            const id = entry.target.getAttribute("data-section-id") as SectionId;
            if (id) maxId = id;
          }
        }

        if (maxRatio > 0.2) {
          setActiveSection(maxId);
        }
      },
      {
        threshold: [0, 0.2, 0.5, 0.8],
        rootMargin: "-10% 0px",
      }
    );

    if (introRef.current) observer.observe(introRef.current);
    if (rulesRef.current) observer.observe(rulesRef.current);

    return () => observer.disconnect();
  }, [activeSection]);

  /* ── Smooth-scroll navigation ── */
  const handleNavigate = useCallback((id: SectionId) => {
    const target =
      id === "introduction" ? introRef.current : rulesRef.current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  }, []);

  return (
    <main className="overflow-y-auto" style={{ scrollSnapType: "y mandatory" }}>
      {/* ── Navigation ── */}
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />

      {/* ── Section A: 英雄时代 ── */}
      <section
        ref={introRef}
        data-section-id="introduction"
        style={{ scrollSnapAlign: "start" }}
      >
        <IntroductionSection />
      </section>

      {/* ── Section B: D&D 模组 ── */}
      <section
        ref={rulesRef}
        data-section-id="rules"
        style={{ scrollSnapAlign: "start" }}
      >
        <RulesSection />
      </section>
    </main>
  );
}
