"use client";

import GlobalBackground from "./GlobalBackground";
import BgmPlayer from "./BgmPlayer";
import Navigation from "./Navigation";
import AglaiaWidget from "./AglaiaWidget";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalBackground />
      <Navigation />
      <BgmPlayer />
      <AglaiaWidget />
      {children}
    </>
  );
}
