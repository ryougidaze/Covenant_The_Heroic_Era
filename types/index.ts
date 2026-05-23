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

// ── Background Detail Panel ──

export interface DetailBlock {
  type: "lore" | "feature" | "note" | "quote";
  level?: number;
  title?: string;
  action?: string;     // "动作" | "附赠动作" | "反应" | "被动" | "特性" | "传奇动作"
  usage?: string;      // "每天两次" | "每天一次" | "每轮一次" etc.
  icon?: string;       // emoji icon
  text: string;
  highlights?: string[];
}

export interface DetailSection {
  title: string;
  content: DetailBlock[];
}

export interface BackgroundDetail {
  id: string;
  intro: string;
 阵营?: string;
  sections: DetailSection[];
}

