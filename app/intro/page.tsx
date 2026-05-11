"use client";

import IntroductionSection from "@/components/IntroductionSection";
import Navigation from "@/components/Navigation";
import GoldenFlameParticles from "@/components/GoldenFlameParticles";

export default function IntroPage() {
  return (
    <>
      <Navigation />
      <div className="relative">
        <GoldenFlameParticles side="left" particleCount={20} />
        <GoldenFlameParticles side="right" particleCount={20} />
        <IntroductionSection />
      </div>
    </>
  );
}
