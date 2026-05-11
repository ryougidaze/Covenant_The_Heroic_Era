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
 * Fill in each background's full-page image URL.
 * Leave as empty string "" to show only the dark gradient background.
 *
 * Recommended image themes per background:
 *   radiantFaith     — cathedral light, stained glass, divine radiance
 *   nightFaith       — starry night, moonlit sky, celestial darkness
 *   destructionFaith — volcanic fire, ash, blazing inferno
 *   northernFaith    — aurora borealis, snow-capped mountains, frozen tundra
 *   bountyHunter     — desert wasteland, lone wanderer, dusty trail
 *   easternHero      — misty bamboo forest, ancient temple, mountain peak
 *   elf              — enchanted forest, ancient tree, dappled sunlight
 *   dragonLair       — epic mountain peak, storm clouds, dragon's keep
 */
export const BACKGROUND_IMAGE_URLS: Record<string, string> = {
  radiantFaith: "",
  nightFaith: "",
  destructionFaith: "",
  northernFaith: "",
  bountyHunter: "",
  easternHero: "",
  elf: "",
  dragonLair: "",
};
