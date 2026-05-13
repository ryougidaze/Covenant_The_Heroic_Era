"use client";

import dynamic from "next/dynamic";
import RulesSection from "@/components/RulesSection";

const GoldenFlameParticles = dynamic(
  () => import("@/components/GoldenFlameParticles"),
  { ssr: false }
);

export default function RulesPage() {
  return (
    <div className="relative animate-fade-in">
      <GoldenFlameParticles side="left" particleCount={25} />
      <GoldenFlameParticles side="right" particleCount={25} />
      <RulesSection />
    </div>
  );
}
