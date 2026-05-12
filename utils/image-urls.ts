import { BLUR_DATA_URLS } from "@/data/blur-placeholders";

export const BACKGROUND_IMAGE_URLS: Record<string, string> = {
  radiantFaith: "/assets/radiant-faith.webp",
  nightFaith: "/assets/night-faith.webp",
  destructionFaith: "/assets/destruction-faith.webp",
  northernFaith: "/assets/northern-faith.webp",
  bountyHunter: "/assets/bounty-hunter.webp",
  easternHero: "/assets/eastern-hero.webp",
  elf: "/assets/elf.webp",
  dragonLair: "/assets/dragon-lair.webp",
};

export function getBlurDataUrl(bgId: string): string {
  const key = bgId
    .replace(/([A-Z])/g, "-$1")
    .toLowerCase()
    .replace(/^-/, "");
  return BLUR_DATA_URLS[key] || "";
}
