export interface BackgroundFeature {
  title: string;
  description: string;
}

export interface LevelTier {
  level: number;
  abilities: string[];
}

export interface Background {
  id: string;
  title: string;
  subtitle: string;
  tagline: string;
  color: string;
  textColor: string;
  borderColor: string;
  bgColor: string;
  imageKeyword: string;
  description: string;
  features: BackgroundFeature[];
  levelTiers: LevelTier[];
}

export interface UnsplashImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export const BACKGROUND_IMAGE_URLS: Record<string, string> = {
  radiantFaith:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&q=80",
  nightFaith:
    "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920&q=80",
  destructionFaith:
    "https://images.unsplash.com/photo-1519810755548-39cd217da494?w=1920&q=80",
  northernFaith:
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1920&q=80",
  bountyHunter:
    "https://images.unsplash.com/photo-1504630083234-14187a9df0f5?w=1920&q=80",
  easternHero:
    "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80",
  elf:
    "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?w=1920&q=80",
  dragonLair:
    "https://images.unsplash.com/photo-1577493340887-b7bfff550145?w=1920&q=80",
};
