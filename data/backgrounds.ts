import { Background } from "@/types";

export const backgrounds: Background[] = [
  {
    id: "radiantFaith",
    title: "光辉信仰",
    subtitle: "Radiant Faith",
    tagline: "以圣光之名，驱逐一切黑暗",
    color: "covenant-radiant",
    textColor: "text-covenant-radiant-light",
    borderColor: "border-covenant-radiant/30",
    bgColor: "bg-covenant-void",
    imageKeyword: "divine light cathedral",
    description:
      "光辉信仰的信徒们是圣光在人间的代行者。他们行走于大地之上，以神圣之力治愈创伤、净化邪恶。每一位光辉信徒都曾在那座永不熄灭的圣光大教堂中立下誓言——以生命守护光明，直至最后一息。",
    features: [
      {
        title: "神圣祷言",
        description:
          "你可以进行一段简短的祈祷，使30尺范围内所有友方生物恢复1d4+你的感知调整值的生命值。此能力在使用后需完成一次短休或长休才能再次使用。",
      },
      {
        title: "驱散不死",
        description:
          "以一个动作，你展现圣徽并吟诵祷文，30尺范围内所有不死生物必须通过感知豁免，否则将被驱散1分钟。被驱散的生物必须使用其回合尽力远离你。",
      },
      {
        title: "光辉之触",
        description:
          "你的接触带有神圣力量。当你触碰一个生物时，你可以消耗一个法术位，使该生物恢复等同于1d8+你的施法关键属性调整值的生命值。",
      },
      {
        title: "圣光护盾",
        description:
          "当盟友受到攻击时，你可以用反应动作在盟友周围召唤圣光护盾，使其AC获得+2加值，持续到你的下个回合开始。",
      },
    ],
    levelTiers: [
      {
        level: 1,
        abilities: ["神圣祷言", "驱散不死（微弱）"],
      },
      {
        level: 3,
        abilities: ["光辉之触", "圣光护盾"],
      },
      {
        level: 5,
        abilities: ["驱散不死（强化）", "额外攻击"],
      },
      {
        level: 7,
        abilities: ["圣光普照", "信仰之盾"],
      },
      {
        level: 10,
        abilities: ["神圣化身", "最终祷言"],
      },
    ],
  },
  {
    id: "nightFaith",
    title: "黑夜信仰",
    subtitle: "Night Faith",
    tagline: "在寂静的暗影中，守护沉睡的世界",
    color: "covenant-night",
    textColor: "text-covenant-night-light",
    borderColor: "border-covenant-night-light/30",
    bgColor: "bg-covenant-void",
    imageKeyword: "night sky stars mystical",
    description:
      "黑夜信仰的追随者深知黑暗并非邪恶——它是安息、秘密与星辰的领域。这些沉默的守护者在月色下巡逻，以阴影为斗篷，以星辰为指引，守护着沉睡中的人们免受暗夜中真正的威胁。",
    features: [
      {
        title: "暗影斗篷",
        description:
          "在微光或黑暗中，你可以用一个附赠动作将自己融入阴影。在接下来的1分钟内，你进行的潜行检定具有优势，且不会在黑暗中留下足迹。",
      },
      {
        title: "星辰指引",
        description:
          "在夜晚的星空下，你可以通过观察星辰来确定方向、时间，以及你所处的大致地理位置。此外，你可以施展「卜筮术」而无需消耗法术位，每次长休可使用一次。",
      },
      {
        title: "沉睡之触",
        description:
          "你触摸一个生物，使其陷入魔法性的深沉睡眠。该生物必须通过感知豁免，否则将陷入沉睡1分钟。若目标受到伤害或被摇醒，效果提前结束。每次长休可使用一次。",
      },
      {
        title: "月影传送",
        description:
          "在微光或黑暗中，你可以用附赠动作传送到60尺范围内另一处你能看到的微光或黑暗区域。每次短休或长休可使用一次。",
      },
    ],
    levelTiers: [
      {
        level: 1,
        abilities: ["暗影斗篷", "星辰指引"],
      },
      {
        level: 3,
        abilities: ["沉睡之触", "暗影步"],
      },
      {
        level: 5,
        abilities: ["月影传送", "额外攻击"],
      },
      {
        level: 7,
        abilities: ["夜色帷幕", "群星之怒"],
      },
      {
        level: 10,
        abilities: ["永夜化身", "星辰坠落"],
      },
    ],
  },
  {
    id: "destructionFaith",
    title: "毁灭信仰",
    subtitle: "Destruction Faith",
    tagline: "焚尽旧世，于灰烬中重铸新生",
    color: "covenant-doom",
    textColor: "text-covenant-doom-light",
    borderColor: "border-covenant-doom-light/30",
    bgColor: "bg-covenant-void",
    imageKeyword: "volcano fire destruction",
    description:
      "毁灭信仰的信徒并非无目的的破坏者——他们信奉万物必有终结，而终结之后即是新生。他们以火焰净化腐朽，以力量粉碎枷锁，是变革的先驱，也是旧秩序的终结者。",
    features: [
      {
        title: "焚尽打击",
        description:
          "当你的攻击命中一个生物时，你可以注入毁灭之力，使该次攻击额外造成1d6火焰伤害。此能力每回合可使用一次。",
      },
      {
        title: "毁灭印记",
        description:
          "以一个附赠动作，你对30尺内一个生物施加毁灭印记。你对被标记生物的攻击造成额外1d4力场伤害。印记持续1分钟，每次短休可使用三次。",
      },
      {
        title: "灰烬重生",
        description:
          "当你的生命值降至0但未被立即杀死时，你可以选择让毁灭之力将你拉回。你的生命值恢复至1，并且周围10尺范围内的所有生物受到2d6火焰伤害。每次长休可使用一次。",
      },
      {
        title: "破灭之吼",
        description:
          "你发出震耳欲聋的战吼，20尺范围内所有敌对生物必须通过体质豁免，否则受到2d8雷鸣伤害并陷入耳聋状态1分钟。每次长休可使用一次。",
      },
    ],
    levelTiers: [
      {
        level: 1,
        abilities: ["焚尽打击", "毁灭印记"],
      },
      {
        level: 3,
        abilities: ["破灭之吼", "烈焰武器"],
      },
      {
        level: 5,
        abilities: ["灰烬重生", "额外攻击"],
      },
      {
        level: 7,
        abilities: ["毁灭光环", "地狱火雨"],
      },
      {
        level: 10,
        abilities: ["末日化身", "灭世之炎"],
      },
    ],
  },
  {
    id: "northernFaith",
    title: "北方信仰",
    subtitle: "Northern Faith",
    tagline: "风雪锻吾骨，冰原铸吾魂",
    color: "covenant-frost",
    textColor: "text-covenant-frost-light",
    borderColor: "border-covenant-frost-light/30",
    bgColor: "bg-covenant-void",
    imageKeyword: "northern lights snow mountains",
    description:
      "在永冬的北境，只有最坚韧的灵魂才能生存。北方信仰的信徒崇拜先祖之灵与自然之力，他们以冰雪为甲，以寒风为刃，是荒原上最顽强的战士。每一位北方勇士的成年礼，都是在暴风雪中独自生存七日。",
    features: [
      {
        title: "冰霜之触",
        description:
          "你的攻击带有极寒之力。当你的武器攻击命中时，可以使其额外造成1d4寒冰伤害，并使目标的速度降低10尺，持续到你的下回合开始。",
      },
      {
        title: "极地坚韧",
        description:
          "你对寒冰伤害具有抗性。此外，在严寒环境中你不会受到力竭惩罚，且你在对抗恐惧和魅惑的豁免检定上具有优势。",
      },
      {
        title: "先祖指引",
        description:
          "你可以呼唤先祖之灵寻求智慧。在进行一次属性检定或豁免检定时，你可以获得先祖的祝福，使该次检定获得优势。每次长休可使用两次。",
      },
      {
        title: "暴风雪",
        description:
          "以一个动作，在你周围30尺范围内召唤一场暴风雪。该区域变为困难地形，且区域内所有生物在感知（察觉）检定上具有劣势。暴风雪持续1分钟，需要专注维持。每次长休可使用一次。",
      },
    ],
    levelTiers: [
      {
        level: 1,
        abilities: ["冰霜之触", "极地坚韧"],
      },
      {
        level: 3,
        abilities: ["先祖指引", "雪地步法"],
      },
      {
        level: 5,
        abilities: ["暴风雪", "额外攻击"],
      },
      {
        level: 7,
        abilities: ["冰霜光环", "先祖之怒"],
      },
      {
        level: 10,
        abilities: ["冬之化身", "永冻纪元"],
      },
    ],
  },
  {
    id: "bountyHunter",
    title: "赏金猎人",
    subtitle: "Bounty Hunter",
    tagline: "没有逃不掉的猎物，只有出不起的价码",
    color: "covenant-steel",
    textColor: "text-covenant-steel-light",
    borderColor: "border-covenant-steel-light/30",
    bgColor: "bg-covenant-void",
    imageKeyword: "bounty hunter desert western",
    description:
      "赏金猎人不侍奉任何神灵——他们只相信手中的武器和悬赏令上的数字。这些独行侠游走于法律的边缘，以追踪与猎杀为生。无论目标躲藏在繁华都市还是荒野尽头，赏金猎人总能找到他们的踪迹。",
    features: [
      {
        title: "猎物标记",
        description:
          "以一个附赠动作，你对60尺内一个你能看到的生物施加猎物标记。此后1小时内，你在追踪该生物的感知（生存）检定上具有优势，且对该生物的攻击检定获得+2加值。每次短休可使用一次。",
      },
      {
        title: "致命追击",
        description:
          "当被你的猎物标记标记的生物移动时，你可以用反应动作向该目标移动至多你移动速度的一半。此移动不会触发借机攻击。",
      },
      {
        title: "陷阱大师",
        description:
          "你擅长设置和拆除陷阱。在进行设置陷阱的相关检定时具有优势。此外，你可以用附赠动作在5尺范围内的地面上快速设置一个绊索陷阱（DC=8+熟练加值+敏捷调整值）。",
      },
      {
        title: "绑定契约",
        description:
          "当你接受一份悬赏契约时，赏金公会将为你提供一份目标的关键信息（弱点、习惯或藏身之处）。此外，在追捕契约目标时，你每天可获得10金币的行动经费。",
      },
    ],
    levelTiers: [
      {
        level: 1,
        abilities: ["猎物标记", "追踪专家"],
      },
      {
        level: 3,
        abilities: ["陷阱大师", "致命追击"],
      },
      {
        level: 5,
        abilities: ["绑定契约", "额外攻击"],
      },
      {
        level: 7,
        abilities: ["赏金令", "无处可逃"],
      },
      {
        level: 10,
        abilities: ["传奇猎人", "一击必杀"],
      },
    ],
  },
  {
    id: "easternHero",
    title: "东洲侠客",
    subtitle: "Eastern Hero",
    tagline: "一箫一剑平生意，负尽狂名十五年",
    color: "covenant-jade",
    textColor: "text-covenant-jade-light",
    borderColor: "border-covenant-jade-light/30",
    bgColor: "bg-covenant-void",
    imageKeyword: "ancient chinese temple mist",
    description:
      "来自遥远东洲的侠客，身负绝世武艺与古老道法。他们既是以剑问天的剑客，也是以诗明志的文人。每一位东洲侠客都遵循着自己的「道」——或行侠仗义，或隐世潜修，或斩妖除魔。",
    features: [
      {
        title: "剑气纵横",
        description:
          "你的近战攻击范围延伸5尺。当你使用近战武器攻击时，你可以将你的感知或魅力调整值（取高）加入伤害掷骰，而非力量或敏捷。",
      },
      {
        title: "轻功步法",
        description:
          "你的移动速度增加10尺，且你可以使用附赠动作进行撤离或疾走。此外，你在困难地形上移动时不会消耗额外的移动力。",
      },
      {
        title: "冥想调息",
        description:
          "通过10分钟的深度冥想，你可以恢复1d8+你的感知调整值的生命值，并移除一项你在当前受到的魅惑或恐惧状态。每次短休可使用一次。",
      },
      {
        title: "剑意化形",
        description:
          "你凝聚内力于剑刃之上，释放出一道剑气斩击60尺内的一条直线上的所有敌人（宽5尺）。每个生物必须通过敏捷豁免，否则受到3d8力场伤害。每次长休可使用一次。",
      },
    ],
    levelTiers: [
      {
        level: 1,
        abilities: ["剑气纵横", "轻功步法"],
      },
      {
        level: 3,
        abilities: ["冥想调息", "流水剑法"],
      },
      {
        level: 5,
        abilities: ["剑意化形", "额外攻击"],
      },
      {
        level: 7,
        abilities: ["万剑归宗", "踏雪无痕"],
      },
      {
        level: 10,
        abilities: ["天人合一", "剑开天门"],
      },
    ],
  },
  {
    id: "elf",
    title: "精灵",
    subtitle: "Elf",
    tagline: "聆听古木的低语，编织星辰的轨迹",
    color: "covenant-sylvan",
    textColor: "text-covenant-sylvan-light",
    borderColor: "border-covenant-sylvan-light/30",
    bgColor: "bg-covenant-void",
    imageKeyword: "ancient forest mystical elves",
    description:
      "精灵是这片大陆上最古老的种族之一。他们与自然共生，以百年的寿命积累智慧与技艺。每一位精灵都天生与魔法亲和，他们的箭矢如林间阳光般精准，他们的歌声能让枯木回春。",
    features: [
      {
        title: "精灵之眼",
        description:
          "你的黑暗视觉延伸至120尺。你进行的感知（察觉）检定具有优势。此外，你不需要睡眠，而是以4小时的冥想代替。",
      },
      {
        title: "自然亲和",
        description:
          "你可以与动植物进行基本的交流。野兽和植物类生物在对你产生敌意之前会犹豫片刻。此外，你在自然环境中进行的潜行检定具有优势。",
      },
      {
        title: "远古记忆",
        description:
          "你可以短暂触及精灵族的集体记忆。在进行历史或奥秘检定时，你可以将其视为拥有熟练项。每次长休可选择一项技能，直到下次长休前视为熟练。",
      },
      {
        title: "精灵之舞",
        description:
          "以一个附赠动作，你可以进入一种优雅的战斗状态。在接下来1分钟内，你的AC获得+2加值，且你的移动不会触发借机攻击。每次短休可使用一次。",
      },
    ],
    levelTiers: [
      {
        level: 1,
        abilities: ["精灵之眼", "自然亲和"],
      },
      {
        level: 3,
        abilities: ["远古记忆", "精灵之舞"],
      },
      {
        level: 5,
        abilities: ["魔法箭矢", "额外攻击"],
      },
      {
        level: 7,
        abilities: ["林地步法", "星落箭雨"],
      },
      {
        level: 10,
        abilities: ["古木化身", "永恒之春"],
      },
    ],
  },
  {
    id: "dragonLair",
    title: "龙巢神殿",
    subtitle: "Dragon Lair Temple",
    tagline: "与巨龙缔约者，将翱翔于九天之上",
    color: "covenant-dragon",
    textColor: "text-covenant-dragon-light",
    borderColor: "border-covenant-dragon-light/30",
    bgColor: "bg-covenant-void",
    imageKeyword: "dragon fantasy epic mountain",
    description:
      "龙巢神殿是远古龙神遗留在凡间的圣所。与神殿缔约的英雄将获得龙族之力——龙的鳞甲化作坚不可摧的防御，龙的吐息成为焚毁敌人的武器。每一位龙契者都拥有一头与之灵魂相连的守护巨龙。",
    features: [
      {
        title: "龙之吐息",
        description:
          "以一个动作，你可以喷吐出与你缔约巨龙相同属性的元素吐息（火、冰、电、酸或毒），对15尺锥形范围内的敌人造成2d6元素伤害，通过敏捷豁免伤害减半。每次短休可使用一次，伤害随等级提升。",
      },
      {
        title: "龙鳞护体",
        description:
          "你的皮肤被一层隐约可见的龙鳞覆盖。当你未穿戴护甲时，你的AC等于13+你的体质调整值。此外，你对与你缔约巨龙相同属性的伤害具有抗性。",
      },
      {
        title: "巨龙感应",
        description:
          "你可以感知到60尺范围内的魔法物品和大量财富（超过100金币）。此外，你在对抗睡眠和麻痹的豁免检定上具有优势。",
      },
      {
        title: "龙翼翱翔",
        description:
          "以一个附赠动作，你从背后展开一对元素龙翼，获得30尺飞行速度。龙翼持续1分钟，需要专注维持。每次长休可使用一次。",
      },
    ],
    levelTiers: [
      {
        level: 1,
        abilities: ["龙之吐息", "龙鳞护体"],
      },
      {
        level: 3,
        abilities: ["巨龙感应", "龙爪攻击"],
      },
      {
        level: 5,
        abilities: ["龙翼翱翔", "额外攻击"],
      },
      {
        level: 7,
        abilities: ["龙威", "龙息强化"],
      },
      {
        level: 10,
        abilities: ["龙神降临", "万龙之怒"],
      },
    ],
  },
];
