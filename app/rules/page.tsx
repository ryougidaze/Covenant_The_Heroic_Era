"use client";

import dynamic from "next/dynamic";
import RulesSection from "@/components/RulesSection";
import Navigation from "@/components/Navigation";

const GoldenFlameParticles = dynamic(
  () => import("@/components/GoldenFlameParticles"),
  { ssr: false }
);

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
