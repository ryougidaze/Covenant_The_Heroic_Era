"use client";

import dynamic from "next/dynamic";
import IntroductionSection from "@/components/IntroductionSection";
import Navigation from "@/components/Navigation";

const GoldenFlameParticles = dynamic(
  () => import("@/components/GoldenFlameParticles"),
  { ssr: false }
);

export default function IntroPage() {
  return (
    <>
      <Navigation />
      <div className="relative">
        <GoldenFlameParticles side="left" particleCount={25} />
        <GoldenFlameParticles side="right" particleCount={25} />
        <IntroductionSection />
      </div>
    </>
  );
}
