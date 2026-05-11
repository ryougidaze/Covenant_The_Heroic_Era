"use client";

import GlobalBackground from "./GlobalBackground";
import BgmPlayer from "./BgmPlayer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalBackground />
      <BgmPlayer />
      {children}
    </>
  );
}
