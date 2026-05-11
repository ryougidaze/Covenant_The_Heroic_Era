import { GameRule, Faction } from "@/types";

/**
 * game-rules.ts — 圣约 D&D 模组 规则数据
 *
 * All game mechanics extracted from the Covenant document, rendered
 * data-driven in the RulesSection.
 */

export const gameRules: GameRule[] = [
  {
    id: "unconscious",
    title: "失去意识",
    icon: "💫",
    description:
      "当玩家失去意识后，若得到生命值回复，可在十分钟后恢复意识。如果已有生命值超过其最大生命值的四分之一，则立即恢复意识。",
    detail:
      "此规则使得治疗在战斗中更加关键——只要能将队友的生命值拉过四分之一线，他们就能立刻重返战场。",
  },
  {
    id: "fate-check",
    title: "命运豁免 / 检定",
    icon: "🎲",
    description:
      "以 d20 投掷的形式进行。由命运所进行的投掷不受除「超越之力」以外的任何其它能力影响，不可重投，不可改变。",
    detail:
      "命运检定代表了宇宙意志本身的裁决。无论是凡人的祈祷还是恶魔的诅咒，都无法扭曲命运骰子的结果。",
  },
  {
    id: "resurrection",
    title: "复活类法术",
    icon: "⚰️",
    description:
      "除许愿术外的复活类法术将只能复活死亡时间不超过 1 分钟的目标，并且无法回复疾病、衰老、部位缺失等非外伤死亡因素。许愿术可以复活在 10 天内死亡的目标。",
    detail:
      "在圣约的世界中，死亡比标准 D&D 更加沉重。灵魂离开肉身后迅速消散，只有最快的干涉才有机会挽回。",
  },
  {
    id: "true-damage",
    title: "真实伤害",
    icon: "💀",
    description:
      "真实伤害会直接作用于生命值，临时生命值无法抵挡真实伤害。",
    detail:
      "真实伤害是诸神级别的力量——只有少数背景（如黑夜信仰、毁灭信仰）能够操控这种无视一切防护的可怕力量。",
  },
  {
    id: "transcendence",
    title: "超越之力",
    icon: "✨",
    description:
      "命运检定与豁免获得加值：史诗单位 +2，传奇单位 +3，神话单位 +3 且具有神话抗性。",
    detail:
      "超越之力标志着生物已经跨越了凡俗的界限。史诗、传奇、神话三个层次的力量阶梯，是圣约世界中衡量强者的标尺。",
  },
  {
    id: "character-creation",
    title: "开卡规则",
    icon: "📜",
    description:
      "5 级开卡，2014 5e 规则。完成原版人物卡后从额外背景选择一项。禁背景获利、禁银光锐语、禁怪物种族。开放塔莎+珊娜萨扩展，加点采用 dnd 5 或 27 buy + 任意 4 点属性。",
    detail:
      "玩家可以选择 dnd 5e 原版种族并在本模组中改变角色形象为人类或精灵。精灵在人类世界中的活动可能承受劣势，但只有精灵族或半精灵可以选择精灵背景。",
  },
];

export const factions: Faction[] = [
  {
    id: "north",
    name: "北方",
    region: "北境",
    color: "covenant-frost",
    description:
      "北方地区占菲比斯帝国国土面积的三分之一，拥有最强的武装力量。北方贵族信仰北方三女神（冬日女神、冰河女神、冰雪女神），由天柱家族世袭统治。",
    traits: [
      "信仰北方三女神",
      "作风清廉，性格古板认真直白",
      "易冲动，喜形于色",
      "最强武装力量",
      "白钢武器与龙戟闻名天下",
    ],
  },
  {
    id: "west",
    name: "西方",
    region: "西部峡谷",
    color: "covenant-doom",
    description:
      "西方多是峡谷地貌，城市结构空间复杂，风沙气候。西部贵族曾信仰疾风之母（正义与自由之神），如今许多人也转信光辉女神。",
    traits: [
      "性格坚韧，嫉恶如仇",
      "不喜受拘束",
      "经济环境不佳，武装落后",
      "北侧城市受冰河恩惠与北方交好",
      "塔弓为特色武器",
    ],
  },
  {
    id: "central",
    name: "中原",
    region: "大平原",
    color: "covenant-radiant",
    description:
      "中原地区是大平原，菲比斯的政治中心，国都煌烨城便在此地。中原贵族主流信仰转为光辉信仰，分为保守派与激进派。",
    traits: [
      "政治中心，皇族所在地",
      "主流信仰光辉女神",
      "贫富差距严重",
      "保守派 vs 激进派分歧",
      "皇族与天柱家族世代交好联姻",
    ],
  },
  {
    id: "east",
    name: "东方",
    region: "东部港口",
    color: "covenant-jade",
    description:
      "东方是菲比斯的经济中心，拥有全国最发达的港口。如今掌权者白金公爵是唯一并非神裔的贵族，成立了学院派，提倡发展科技与理论知识。",
    traits: [
      "经济中心，最发达港口",
      "贵族大多成为商人",
      "白金公爵为首（非神裔）",
      "学院派：反对神裔统治",
      "奥秘术发源地",
    ],
  },
  {
    id: "south-sea",
    name: "南海",
    region: "南海沿岸",
    color: "covenant-dragon",
    description:
      "南海曾经是菲比斯最强盛的地区之一，但如今岌岌可危。人们依海而生，技术水平落后，难以与外界形成贸易路线。黑涡家族依然尽心尽力辅佐南海公爵。",
    traits: [
      "曾经最强，如今衰落",
      "依靠渔获自给自足",
      "贵族大多偏安一隅",
      "黑涡家族忠心耿耿",
      "贸易路线亟待开拓",
    ],
  },
  {
    id: "sanctuary",
    name: "圣域",
    region: "心湖之畔（大陆中心）",
    color: "covenant-gold",
    description:
      "圣域围绕十字河的源头「心湖」而建，不属于任何王权势力，监管世俗王权。圣女阿斯特莱雅居住在此，镇守人间已超千年。",
    traits: [
      "不属于王权势力",
      "监管世俗王权",
      "圣女阿斯特莱雅坐镇",
      "教宗派与圣女派分裂",
      "圣职者的培育与生活中心",
      "与菲比斯帝国交好",
    ],
  },
];

export const specialRulesSummary = {
  title: "额外游戏规则",
  subtitle: "Additional Game Rules",
  description:
    "以下规则适用于本模组的所有玩家。它们与标准 D&D 5e (2014) 规则并存，旨在营造更具史诗感与风险性的游戏体验。",
};
