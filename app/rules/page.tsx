"use client";

import RulesSection from "@/components/RulesSection";
import Navigation from "@/components/Navigation";
import GoldenFlameParticles from "@/components/GoldenFlameParticles";

export default function RulesPage() {
  return (
    <>
      <Navigation />
      <div className="relative">
        <GoldenFlameParticles side="left" particleCount={25} />
        <GoldenFlameParticles side="right" particleCount={25} />
        <RulesSection />
      </div>
    </>
  );
}
