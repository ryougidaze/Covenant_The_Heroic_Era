export interface AbilityDetail {
  label: string;   // e.g. "施法距离", "施法时间", "持续时间", "使用次数"
  value: string;
}

export interface BackgroundFeature {
  title: string;
  level: number;
  icon: string;
  summary: string;
  description: string;
  details?: AbilityDetail[];
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
  detailedContent?: string;  // full document text for the "详细信息" panel
}

// ── World Lore ──

export interface LoreChapter {
  id: string;
  title: string;
  subtitle?: string;
  summary: string;
  paragraphs: string[];
  highlight?: string;
}

export interface LoreSection {
  id: string;
  title: string;
  chapters: LoreChapter[];
}

// ── Game Rules ──

export interface GameRule {
  id: string;
  title: string;
  icon: string;
  description: string;
  detail?: string;
}

export interface Faction {
  id: string;
  name: string;
  region: string;
  color: string;
  description: string;
  traits: string[];
}

export interface RewardFeat {
  id: string;
  name: string;
  prerequisite?: string;
  description: string;
  mechanics: string[];
}

export interface FeatMechanic {
  label?: string;
  value?: string;
}

export interface FeatNode {
  id: string;
  title: string;
  subtitle?: string;
  prerequisite?: string;
  description?: string;
  mechanics?: FeatMechanic[];
  children?: FeatNode[];
}

export interface UnsplashImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

/**
 * BACKGROUND_IMAGE_URLS
 *
 * Place your background images in public/assets/ and reference them here.
 * Example: "/assets/radiant-faith.jpg" maps to public/assets/radiant-faith.jpg
 *
 * Leave as empty string "" to show only the dark ultramarine gradient.
 *
 * ── Recommended image themes ──
 *   radiantFaith     — cathedral light, stained glass, divine radiance
 *   nightFaith       — starry night, moonlit sky, celestial darkness
 *   destructionFaith — volcanic fire, ash, blazing inferno
 *   northernFaith    — aurora borealis, snow-capped mountains, frozen tundra
 *   bountyHunter     — desert wasteland, lone wanderer, dusty trail
 *   easternHero      — misty bamboo forest, ancient temple, mountain peak
 *   elf              — enchanted forest, ancient tree, dappled sunlight
 *   dragonLair       — epic mountain peak, storm clouds, dragon's keep
 *
 * ── Image requirements ──
 *   Resolution: 1920×1080 or higher (16:9)
 *   Format:     .jpg or .webp (recommended for performance)
 *   Max size:   < 500KB (Vercel optimises automatically via next/image if used)
 */
export const BACKGROUND_IMAGE_URLS: Record<string, string> = {
  radiantFaith: "/assets/radiant-faith.jpg",
  nightFaith: "/assets/night-faith.jpg",
  destructionFaith: "/assets/destruction-faith.jpg",
  northernFaith: "/assets/northern-faith.jpg",
  bountyHunter: "/assets/bounty-hunter.jpg",
  easternHero: "/assets/eastern-hero.jpg",
  elf: "/assets/elf.jpg",
  dragonLair: "/assets/dragon-lair.jpg",
};
