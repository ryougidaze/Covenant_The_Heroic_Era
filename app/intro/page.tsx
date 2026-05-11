"use client";

import Link from "next/link";
import IntroductionSection from "@/components/IntroductionSection";
import Navigation from "@/components/Navigation";
import GoldenFlameParticles from "@/components/GoldenFlameParticles";

export default function IntroPage() {
  return (
    <>
      <Navigation />
      <div className="relative">
        <GoldenFlameParticles side="left" particleCount={25} />
        <GoldenFlameParticles side="right" particleCount={25} />

        {/* Back to home — top of content */}
        <div className="absolute left-6 top-6 z-30 md:left-10 md:top-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-covenant-silver/10 bg-covenant-void/50 px-4 py-2 text-sm backdrop-blur-md transition-all hover:border-covenant-gold/30 hover:bg-covenant-void/70"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className="text-covenant-silver/60"
            >
              <path
                d="M10 7H4M4 7L7 4M4 7L7 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="font-heading text-xs tracking-[0.2em] text-covenant-silver/60">
              返回首页
            </span>
          </Link>
        </div>

        <IntroductionSection />
      </div>
    </>
  );
}
