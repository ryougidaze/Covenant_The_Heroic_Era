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

/**
 * BACKGROUND_IMAGE_URLS
 *
 * Placeholder Unsplash URLs for each background.
 * Replace with your own curated images to match the
 * silver / ultramarine / dark-gold / mystic-purple design system.
 *
 * Recommended keywords per background:
 *   radiantFaith   — cathedral light, stained glass, divine radiance
 *   nightFaith     — starry night, moonlit sky, celestial darkness
 *   destructionFaith — volcanic fire, ash, blazing inferno
 *   northernFaith  — aurora borealis, snow-capped mountains, frozen tundra
 *   bountyHunter   — desert wasteland, lone wanderer, dusty trail
 *   easternHero    — misty bamboo forest, ancient temple, mountain peak
 *   elf            — enchanted forest, ancient tree, dappled sunlight
 *   dragonLair     — epic mountain peak, storm clouds, dragon's keep
 */
export const BACKGROUND_IMAGE_URLS: Record<string, string> = {
  radiantFaith:
    "https://images.unsplash.com/photo-1445452916036-3a69fb39e316?w=1920&q=80",
  nightFaith:
    "https://images.unsplash.com/photo-1507400492013-162706c8c05e?w=1920&q=80",
  destructionFaith:
    "https://images.unsplash.com/photo-1618336753974-aae8eaa4a68f?w=1920&q=80",
  northernFaith:
    "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1920&q=80",
  bountyHunter:
    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=1920&q=80",
  easternHero:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80",
  elf:
    "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80",
  dragonLair:
    "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&q=80",
};
