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
        title: "神圣",
        level: 1,
        icon: "✚",
        summary: "指定60尺内一名可见目标，恢复其最大生命值一半的生命值。",
        description:
          "以一个动作借助光辉之力，你指定60尺内一名可见目标（包括自己），恢复其最大生命值一半（向下取整）的生命值，若其当前生命值+恢复生命值超出最大生命值，则多出的生命值变为临时生命值。该临时生命值不可与其它临时生命值叠加。神圣每天可使用（等级/4向上取整）次，在长休后恢复所有使用次数。",
        details: [
          { label: "施法距离", value: "60尺" },
          { label: "施法时间", value: "1动作" },
          { label: "使用次数", value: "等级/4（向上取整）/长休" },
        ],
      },
      {
        title: "慈爱",
        level: 3,
        icon: "🕊️",
        summary: "执行治疗行为时，所有投掷结果中的1都将被视为2。",
        description:
          "当你成功执行任何治疗行为后，对恢复值进行投掷时，所有投掷结果中的1都将被视为2。此效果持续生效，无需消耗任何资源。",
        details: [{ label: "类型", value: "被动特性" }],
      },
      {
        title: "营救",
        level: 3,
        icon: "✦",
        summary: "以反应将120尺内一个自愿目标拖拽至你身边。",
        description:
          "以一个反应使用，指定120尺范围内一个自愿目标，以光辉神力将其拖拽至你身边5尺范围内空置区域。你不能营救被近战攻击、远程攻击或者法术攻击命中的玩家。每天两次。",
        details: [
          { label: "施法距离", value: "120尺" },
          { label: "施法时间", value: "1反应" },
          { label: "使用次数", value: "2次/长休" },
        ],
      },
      {
        title: "向白昼祈祷",
        level: 5,
        icon: "☀️",
        summary: "与白昼女神沟通，获取过往智慧与历史奥秘。",
        description:
          "你向白昼与光辉的女神发出虔诚的祈祷。祈祷不可在战斗中进行。在旅途之中，当你经过一些特殊区域时，能够隐约感受到白昼的意志，此时便可祈祷。祈祷时，你可以指定视线范围之内的一件特殊物品、一头特殊生物或一片特殊区域，请求女神将与之相关的历史与奥秘通过画面的形式告知你。在你完成祈祷后十分钟内所做出的第一次检定将获得优势，并且将所有小于等于10的投掷结果视为10。你每日可请求与白昼沟通一次，在长休后恢复。你也可以通过向白昼的祈祷来治愈一种疾病或者诅咒。",
        details: [
          { label: "施法时间", value: "1动作（非战斗）" },
          { label: "使用次数", value: "1次/长休" },
          { label: "特殊", value: "可治愈疾病或诅咒" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["神圣", "驱散不死（微弱）"] },
      { level: 3, abilities: ["慈爱", "营救"] },
      { level: 5, abilities: ["向白昼祈祷", "神名祝祷"] },
      { level: 7, abilities: ["天赐祝福", "神圣精通", "涤罪之心"] },
      { level: 9, abilities: ["溺爱"] },
      { level: 11, abilities: ["神爱抚", "全大赦"] },
      { level: 13, abilities: ["苦难之心"] },
      { level: 17, abilities: ["光辉圣十字"] },
      { level: 20, abilities: ["光轮（无尽神圣/神名祝祷精通/炽天强袭）"] },
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
        title: "深夜",
        level: 1,
        icon: "🌑",
        summary: "与黑夜女神进行不可逃避的交易，投掷3次1d6选择命运。",
        description:
          "你与黑夜女神进行不可逃避的交易，投掷三次1d6，并在三次结果中选择一个作为最终结果。交易内容从献上珍贵生命到成为英雄，各不相同。当你首次完成与女神的交易后，可获得任意属性+1作为奖励（上限30），并在对黑夜的祈祷中获得优势。",
        details: [
          { label: "施法时间", value: "1动作" },
          { label: "类型", value: "命运交易" },
          { label: "奖励", value: "属性+1（上限30）" },
        ],
      },
      {
        title: "黑夜亲和",
        level: 1,
        icon: "👁️",
        summary: "获得60尺魔法黑暗视觉。",
        description:
          "你获得60尺魔法黑暗视觉。此能力使你在完全的魔法黑暗中亦能清晰视物。",
        details: [{ label: "类型", value: "被动特性" }],
      },
      {
        title: "梦游",
        level: 3,
        icon: "🌙",
        summary: "长休时可执行简单行动，仍获得长休全部收益。",
        description:
          "当你进行长休时，你可以选择完成一些简单的行动，并且你依然能够获得长休所带来的所有收益。你执行行动的地点必须在休息场所附近。你无法在主观上靠梦游为自己创造任何收益，但如果你足够聪明且运气足够好，也可能会有意想不到的收获。好奇心重的黑夜女神也会在必要时对你进行引导。",
        details: [
          { label: "施法时间", value: "长休期间" },
          { label: "类型", value: "特殊能力" },
        ],
      },
      {
        title: "向黑夜祈祷",
        level: 3,
        icon: "🔮",
        summary: "通过检定获取黑夜启示，宣告敌方下一轮重要行动。",
        description:
          "你向黑夜女神发出虔诚的祈祷（传奇动作），进行一次感知或者魅力检定。若检定失败，则答案模糊晦涩；若检定成功，你可以获得黑夜的启示，黑夜将向你宣告敌方会在下一轮进行的重要行动。你每天最多进行等同于熟练加值次数的成功祈祷，该能力在长休后恢复。",
        details: [
          { label: "施法时间", value: "1传奇动作" },
          { label: "使用次数", value: "熟练加值次/长休" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["深夜", "黑夜亲和"] },
      { level: 3, abilities: ["梦游", "向黑夜祈祷"] },
      { level: 5, abilities: ["彼岸之镜", "暗夜布道"] },
      { level: 7, abilities: ["黑夜轻纱", "黑夜祈祷精通"] },
      { level: 8, abilities: ["暗夜布道精通", "黑夜沉沦", "暗影锋"] },
      { level: 10, abilities: ["死亡宣告（青春版）"] },
      { level: 11, abilities: ["吸血深渊"] },
      { level: 13, abilities: ["掠影的蔑视"] },
      { level: 15, abilities: ["掠影示现"] },
      { level: 17, abilities: ["大黑天"] },
      { level: 19, abilities: ["死亡宣告（正式版）"] },
      { level: 20, abilities: ["夜刃（暗影步/死而不僵）"] },
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
        title: "幻痛",
        level: 1,
        icon: "💀",
        summary: "长休后进行DC10命运豁免，失败则受到等级×1d4真实伤害。",
        description:
          "自从了解到毁灭的秘密后，你时常会感受到一些毫无由来的痛苦。每次长休结束后，你需要进行一次DC为10的d20命运豁免。若豁免成功，则你幸免于难；若豁免失败，你将受到冒险者等级个1d4点真实伤害。",
        details: [
          { label: "豁免DC", value: "10（命运豁免）" },
          { label: "失败伤害", value: "等级×1d4 真实伤害" },
        ],
      },
      {
        title: "毁灭刻印",
        level: 1,
        icon: "🔥",
        summary: "肃清扭曲后获得刻印，每天可使用一次（9级后两次）。",
        description:
          "当你肃清扭曲后，其残影将会形成刻印寄存在你身上。你可以使用毁灭刻印，每天一次，当你达到9级时每天两次。刻印的具体效果由主持人根据所肃清的扭曲类型裁定。",
        details: [
          { label: "使用次数", value: "1次/天（9级2次）" },
          { label: "类型", value: "特性" },
        ],
      },
      {
        title: "扭曲命运",
        level: 3,
        icon: "🎲",
        summary: "令120尺内一次判定强制成功或失败（传奇反应）。",
        description:
          "毁灭意志正是命运与规则的肃清者。一天一次，你可以以一个传奇反应，让120尺范围内的一次失败的判定强制成功，或者让一次成功的判定强制失败。对史诗及以上单位无效。每轮至多发动一次。",
        details: [
          { label: "施法距离", value: "120尺" },
          { label: "施法时间", value: "1传奇反应" },
          { label: "使用次数", value: "1次/天" },
        ],
      },
      {
        title: "挪移命运",
        level: 3,
        icon: "↔️",
        summary: "将目标受到的伤害转移给另一个可视目标。",
        description:
          "一天两次，反应使用。当一个目标受到伤害时，你可以将这次伤害转移给可视范围内另一个目标。若非自愿则需通过DC8命运豁免。最大转移伤害不超过你最大生命值的两倍。",
        details: [
          { label: "施法时间", value: "1反应" },
          { label: "使用次数", value: "2次/天" },
          { label: "上限", value: "最大生命值×2" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["幻痛", "毁灭刻印"] },
      { level: 3, abilities: ["传奇级火焰免疫", "扭曲命运", "挪移命运"] },
      { level: 5, abilities: ["凛冬肃正", "阳炎肃正", "洋流肃正"] },
      { level: 7, abilities: ["毁灭意志", "真火残焰", "孤注一掷"] },
      { level: 8, abilities: ["扭曲命运精通"] },
      { level: 9, abilities: ["创造意志"] },
      { level: 13, abilities: ["掠夺命运"] },
      { level: 17, abilities: ["审判命运", "真火剑"] },
      { level: 19, abilities: ["毁灭命运"] },
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
        title: "北方体魄",
        level: 1,
        icon: "🛡️",
        summary: "获得寒冷伤害抗性。",
        description:
          "你获得对寒冷伤害的抗性。此特性体现了北方子民在极寒环境中世代生存所锤炼出的坚韧体魄。",
        details: [{ label: "类型", value: "被动特性" }],
      },
      {
        title: "北方猎人",
        level: 1,
        icon: "🏹",
        summary: "大狩猎中猎物投掷+2，可额外进行一次投掷。",
        description:
          "在大狩猎中，你每次对猎物种类进行的投掷获得+2值，并且你可额外进行一次投掷。北方猎人的追踪技巧在雪原上无人能及。",
        details: [
          { label: "类型", value: "特性（大狩猎）" },
          { label: "加值", value: "猎物投掷+2" },
        ],
      },
      {
        title: "初级北方铁匠",
        level: 3,
        icon: "⚒️",
        summary: "消耗白钢打造+1武器或+1轻中甲。",
        description:
          "你可以消耗两块白钢将武器打造成+1武器，可以消耗两块白钢将金属材质的轻中甲打造成+1轻中甲。白钢是北方独有的珍贵矿石。",
        details: [
          { label: "消耗", value: "2块白钢" },
          { label: "选择", value: "二选一特性" },
        ],
      },
      {
        title: "挑衅",
        level: 3,
        icon: "💢",
        summary: "强制120尺内一个目标本轮将你视为攻击目标。",
        description:
          "以一个反应使用，指定120尺范围内一个可视目标，强制对方这一轮将你视为攻击（攻击检定）目标。每天两次。",
        details: [
          { label: "施法距离", value: "120尺" },
          { label: "施法时间", value: "1反应" },
          { label: "使用次数", value: "2次/天" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["北方体魄", "北方猎人"] },
      { level: 3, abilities: ["初级北地铁匠/矿工", "挑衅"] },
      { level: 5, abilities: ["成熟稳重的北方人", "死斗"] },
      { level: 6, abilities: ["原初的直觉", "蛮荒崩裂"] },
      { level: 7, abilities: ["精益求精的北方人", "原初的血气", "死斗光环"] },
      { level: 8, abilities: ["原初的解放（裂石飞环/地毁人亡）"] },
      { level: 10, abilities: ["北地传奇"] },
      { level: 11, abilities: ["北方天骄", "摆脱"] },
      { level: 13, abilities: ["狂魂"] },
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
        title: "贪财",
        level: 1,
        icon: "💰",
        summary: "魅力+1（上限20），分配报酬时游说不公平分配获优势。",
        description:
          "魅力+1（上限20）。当你和队友对报酬进行分配时，你如果游说队友进行不公平的分配，那你将会获得优势。金钱是你的信仰，贪婪是你的美德。",
        details: [
          { label: "属性", value: "魅力+1" },
          { label: "条件", value: "不公平分配游说" },
        ],
      },
      {
        title: "勤勉",
        level: 1,
        icon: "📋",
        summary: "可接取赏金任务，每完成一个获额外10%报酬。",
        description:
          "你总是能够接取到一些赏金任务：斩杀一头凶兽；谋杀一个人物；寻找一个珍宝。你可以与主持人讨论让他给你安排一个任务，并且在你完成一个任务后可以提出申请新的任务。你同时最多接取一个任务。每完成一个任务，你都将从赏金协会获得额外10%报酬。",
        details: [
          { label: "类型", value: "角色扮演特性" },
          { label: "奖励", value: "额外10%报酬" },
        ],
      },
      {
        title: "好色",
        level: 3,
        icon: "💋",
        summary: "对指定性别的生物检定/豁免获优势，每天两次。",
        description:
          "每天两次，可以在任何时候使用。你对属于自己性取向的生物（你只能选择一个性别）进行的检定或者进行由该生物造成的豁免时具有优势，长休后恢复所有使用次数。",
        details: [
          { label: "使用次数", value: "2次/长休" },
          { label: "目标", value: "选定性别" },
        ],
      },
      {
        title: "老练",
        level: 5,
        icon: "🎭",
        summary: "针对你的巧手/洞悉/欺瞒/威吓获劣势，被动察觉+1。",
        description:
          "任何针对你进行的巧手、洞悉、欺瞒、威吓将获得劣势。你的被动察觉永久+1。多年的江湖经验让你变得难以看透。",
        details: [
          { label: "效果", value: "敌方检定劣势" },
          { label: "被动", value: "察觉+1" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["贪财", "勤勉"] },
      { level: 3, abilities: ["好色"] },
      { level: 5, abilities: ["老练", "老鼠屎"] },
      { level: 7, abilities: ["唯物主义"] },
      { level: 9, abilities: ["赏金传奇"] },
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
        title: "剑客",
        level: 1,
        icon: "⚔️",
        summary: "获得东洲长剑专精，单手剑+另一手空时AC+1且速度+10尺。",
        description:
          "你获得东洲长剑专精。你单手使用东洲长剑进行攻击，并且另一只手没有任何装备时，你的AC+1，你的速度增加10尺。若触发借机攻击，你可以在对方攻击前宣告使用一个反应完全格挡这次攻击。满足剑客条件时每轮可额外攻击一次，每天至多等同于熟练加值的次数。东洲长剑：挥砍1d10+力量；穿刺1d10+敏捷。专精御剑：可以承受劣势为代价让攻击距离延长到10尺。",
        details: [
          { label: "武器", value: "东洲长剑 1d10" },
          { label: "效果", value: "AC+1/速度+10尺" },
          { label: "使用", value: "熟练加值次/天" },
        ],
      },
      {
        title: "入世境",
        level: 3,
        icon: "🏔️",
        summary: "获得健壮专长效果，修习伏魔剑与迅雷剑。",
        description:
          "初入武林，异于常人。你获得等同于专长「健壮」的效果。你修习剑法「伏魔剑」与「迅雷剑」。伏魔剑：每场战斗一次，命中邪恶阵营敌人时额外造成等级/4（向上取整）个1d10真实伤害。迅雷剑：每场战斗一次，进行敏捷豁免或检定时获得一次优势。",
        details: [
          { label: "效果", value: "健壮专长" },
          { label: "剑法", value: "伏魔剑 + 迅雷剑" },
        ],
      },
      {
        title: "金刚境",
        level: 5,
        icon: "💎",
        summary: "AC+1，修习金钟罩（减伤）与梯云纵（传送）。",
        description:
          "骨若金刚，刀剑不惧。你的AC获得+1值。你修习神通「金钟罩」和「梯云纵」。金钟罩：每天两次，受到伤害时免疫最多等级×d8点伤害。梯云纵：每天两次，附赠动作传送到30尺内可见未被占据的空间。",
        details: [
          { label: "防御", value: "AC+1" },
          { label: "神通", value: "金钟罩 + 梯云纵" },
        ],
      },
      {
        title: "逍遥境",
        level: 7,
        icon: "🕊️",
        summary: "敏捷+1，获得轻功飞行能力（每轮60尺）。",
        description:
          "身若飞鸿，天地逍遥。你的敏捷+1。你的轻功已经大成，每天你可以赋予自己至多10分钟的轻功时间，你每轮拥有60尺飞行距离，但你每飞行60尺都需要落地至少一次，你的起点和终点必须是稳固的平台。",
        details: [
          { label: "属性", value: "敏捷+1" },
          { label: "飞行", value: "60尺/轮（需落地）" },
          { label: "持续", value: "至多10分钟/天" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["剑客（御剑专精）"] },
      { level: 3, abilities: ["入世境（伏魔剑/迅雷剑）"] },
      { level: 5, abilities: ["金刚境（金钟罩/梯云纵）", "剑气纵横"] },
      { level: 7, abilities: ["逍遥境（轻功飞行）"] },
      { level: 8, abilities: ["五行混元剑"] },
      { level: 9, abilities: ["天人境（诛心剑意/星月剑意）"] },
      { level: 13, abilities: ["圣人境"] },
      { level: 17, abilities: ["仙人境（大千和合剑诀/九天连星神剑）"] },
    ],
  },
  {
    id: "elf",
    title: "精灵古庭",
    subtitle: "Elf",
    tagline: "聆听古木的低语，编织星辰的轨迹",
    color: "covenant-sylvan",
    textColor: "text-covenant-sylvan-light",
    borderColor: "border-covenant-sylvan-light/30",
    bgColor: "bg-covenant-void",
    imageKeyword: "ancient forest mystical elves",
    description:
      "精灵族诞生于第二纪元，由创造意志亲手塑造——他们仅被赋予一切善的感情，所有的「恶」被剔除。精灵女王化身古树支撑整个位面，如今枯叶渐增，精灵一族急需新的土地。作为精灵族的优秀一员，你受妖精女王委托来到西洲大陆，为族人寻找新的家园。",
    features: [
      {
        title: "位面穿梭",
        level: 1,
        icon: "🌀",
        summary: "即将受伤害时以反应回到精灵位面规避伤害。",
        description:
          "每天1次，以一个反应施展。当你即将受到伤害时，你立即回到精灵位面规避此次伤害，你可以立即返回主位面，或者选择在下一轮开始时花费一个动作回到主位面。该能力对部分锁定型伤害无效。",
        details: [
          { label: "施法时间", value: "1反应" },
          { label: "使用次数", value: "1次/天" },
          { label: "限制", value: "锁定型伤害无效" },
        ],
      },
      {
        title: "连珠",
        level: 3,
        icon: "🎯",
        summary: "伤害投掷出现相同数字时消耗连珠骰增加伤害。",
        description:
          "你获得等同于玩家等级的d6连珠骰（力场伤害）。你在进行伤害投掷时，若其中出现两个或以上的相同数字，取相同数量最高的一组，你可以消耗小于等于该数量的连珠骰增加伤害。例如：8d6火球术中出现3个3与2个4，可选择3个骰子增加3d6连珠伤害。",
        details: [
          { label: "骰子", value: "d6连珠骰×等级" },
          { label: "伤害类型", value: "力场" },
        ],
      },
      {
        title: "战斗之声",
        level: 3,
        icon: "🎵",
        summary: "60尺内至多7目标速度+20尺，敏捷检定/豁免优势。",
        description:
          "特性施展，持续1分钟，你和你身边60尺范围内的至多7个目标的速度增加20尺，并获得一次敏捷检定或者豁免的优势。每天两次。",
        details: [
          { label: "施法距离", value: "自身60尺" },
          { label: "持续", value: "1分钟" },
          { label: "使用次数", value: "2次/天" },
        ],
      },
      {
        title: "光阴神的礼赞凯歌",
        level: 5,
        icon: "🎶",
        summary: "以歌声为可见范围内一名目标解除异常状态。",
        description:
          "你以一个附赠动作开口歌唱（进行曲），为可见范围内一名指定目标解除一种异常状态或一种非魔法疾病或一种易伤。每天两次。精灵的歌声蕴含着光阴之神的力量。",
        details: [
          { label: "施法时间", value: "1附赠动作" },
          { label: "使用次数", value: "2次/天" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["位面穿梭"] },
      { level: 3, abilities: ["连珠", "战斗之声"] },
      { level: 5, abilities: ["光阴神的礼赞凯歌", "大地神的抒情恋歌", "光明神的最终乐章"] },
      { level: 7, abilities: ["放浪神的小步舞曲", "军神的赞美歌", "行吟"] },
      { level: 8, abilities: ["辉煌箭"] },
      { level: 10, abilities: ["九天连箭"] },
      { level: 11, abilities: ["（待更新）"] },
      { level: 13, abilities: ["英雄的幻想曲"] },
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
        title: "龙族羁绊",
        level: 1,
        icon: "🐉",
        summary: "与龙族相关的正向检定获得优势与熟练加值。",
        description:
          "你在与龙族相关的正向的调查、历史、洞悉、驯兽、游说、表演中获得优势与熟练加值。你与龙族之间存在着古老的羁绊。",
        details: [{ label: "类型", value: "被动特性" }],
      },
      {
        title: "龙族至亲",
        level: 3,
        icon: "🐲",
        summary: "拥有一位幼龙伙伴，饮血结为血脉亲人。",
        description:
          "你拥有一位幼龙伙伴，你们将会饮下对方的血液，在你们之间构建起血脉的联系。你的龙族伙伴会说通用语言与龙语。在战斗中它与你同时行动。幼龙具有120尺黑暗视觉与15尺盲视，30尺爬行与飞行距离。命中+8，DC14。免疫自身属性伤害并对对立属性伤害具有抗性。可选白/黑/红/苍/青/银/黄/蓝龙。",
        details: [
          { label: "幼龙AC", value: "14-15" },
          { label: "幼龙HP", value: "18-25+7-9×等级" },
          { label: "攻击", value: "啃咬1d8+4 / 吐息1d8-1d10" },
        ],
      },
      {
        title: "巨龙视线",
        level: 5,
        icon: "👁️",
        summary: "与60尺内队友或龙族伙伴心意相连，分摊伤害。",
        description:
          "附赠动作，你与60尺内一名队友或龙族伙伴心意相连，互相照应，持续10分钟。你们分摊受到的所有伤害，AC+1，豁免+1；若选择的目标为龙族伙伴，则AC+2，豁免+2，同时可选择一种元素类型获得抗性。每天可用两次。",
        details: [
          { label: "施法时间", value: "1附赠动作" },
          { label: "施法距离", value: "60尺" },
          { label: "持续", value: "10分钟" },
          { label: "使用次数", value: "2次/天" },
        ],
      },
      {
        title: "恐惧咆哮",
        level: 5,
        icon: "👑",
        summary: "45尺锥形范围内敌人魅力豁免，失败则下轮攻击劣势。",
        description:
          "特性施展，你自身45尺锥形范围内的所有敌人进行（DC13+熟练）的魅力豁免，豁免成功不受影响，豁免失败下一轮的攻击检定陷入劣势。每天一次。",
        details: [
          { label: "范围", value: "45尺锥形" },
          { label: "豁免DC", value: "13+熟练" },
          { label: "使用次数", value: "1次/天" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["龙族羁绊"] },
      { level: 3, abilities: ["龙族至亲（幼龙伙伴）"] },
      { level: 5, abilities: ["巨龙视线", "恐惧咆哮", "武神枪", "幼龙额外攻击"] },
      { level: 7, abilities: ["腾龙", "坠星冲"] },
      { level: 8, abilities: ["成长1（少年龙）", "天龙点睛"] },
      { level: 12, abilities: ["成长2（青年龙）", "青年龙额外攻击"] },
      { level: 13, abilities: ["天穹破碎"] },
      { level: 16, abilities: ["成长3（成年龙）", "成年龙额外攻击"] },
      { level: 17, abilities: ["苍穹龙炎"] },
      { level: 20, abilities: ["巨龙王冠"] },
    ],
  },
];
