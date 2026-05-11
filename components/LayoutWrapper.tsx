"use client";

import GlobalBackground from "./GlobalBackground";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalBackground />
      {children}
    </>
  );
}
