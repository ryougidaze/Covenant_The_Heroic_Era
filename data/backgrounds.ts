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
      "白昼与光辉的女神是六位创世神中第五位诞生的神明，是昼夜双子中更幼者。她是宇宙中一切光的源头，同时也掌管着自最初至终末的一切光辉。光辉信仰是西洲大陆上最普遍的信仰，辉教的影响力辐射整座大陆——辉教圣女阿斯特莱雅既是王权的庇护者，也是王权的监管者，西洲最伟大的菲比斯帝国因她的照耀而生辉。",
    features: [
      {
        title: "神圣",
        level: 1,
        icon: "✚",
        summary: "指定60尺内一名可见目标，恢复其最大生命值一半的生命值。",
        description:
          "以一个动作借助光辉之力，你指定60尺内一名可见目标（包括自己），恢复其最大生命值一半（向下取整）的生命值。每天两次。",
        details: [
          { label: "施法距离", value: "60尺" },
          { label: "施法时间", value: "1动作" },
          { label: "使用次数", value: "2次/长休" },
        ],
      },
      {
        title: "营救",
        level: 3,
        icon: "✦",
        summary: "以反应将120尺内一个自愿目标拖拽至你身边。",
        description:
          "以一个反应使用，指定120尺范围内一个自愿目标，以光辉神力将其拖拽至你身边5尺范围内空置区域。你不能营救被攻击检定命中的玩家。每天两次。",
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
          "你向白昼与光辉的女神发出虔诚的祈祷。祈祷不可在战斗中进行。在旅途之中，当你经过一些特殊区域时，能够隐约感受到白昼的意志，此时便可祈祷。祈祷时，你可以指定视线范围之内的一件特殊物品、一头特殊生物或一片特殊区域，请求女神将与之相关的历史与奥秘通过画面的形式告知你。你也可以通过向光辉白昼的祈祷来治愈一种疾病或者诅咒。",
        details: [
          { label: "施法时间", value: "1动作（非战斗）" },
          { label: "使用次数", value: "1次/长休" },
          { label: "特殊", value: "可治愈疾病或诅咒" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["神圣"] },
      { level: 3, abilities: ["营救"] },
      { level: 5, abilities: ["向白昼祈祷", "神名祝祷"] },
      { level: 7, abilities: ["天赐祝福", "神圣精通"] },
      { level: 9, abilities: ["溺爱"] },
      { level: 11, abilities: ["神爱抚"] },
      { level: 12, abilities: ["苦难之心"] },
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
      "黑夜的女神是六位创世神中第四位诞生的神明，是昼夜双子中更长者。宇宙诞生之初，世间尚未被光辉所照耀时，黑夜笼罩着一切。因未来与黑夜一样是隐秘而深奥的，因此黑夜女神同时也是洞悉未来之神。黑夜信仰在西洲大陆上较为少见，由于大众普遍认知有限，他们常常误把黑夜与黑暗力量联想到一起，因此暴露你黑夜信徒的身份可能会在有时导致意想不到的麻烦。",
    features: [
      {
        title: "深夜",
        level: 1,
        icon: "🌑",
        summary: "与黑夜女神进行不可逃避的交易，自由选择第一个交易。",
        description:
          "你与黑夜女神进行不可逃避的交易，你可以自由选择第一个交易。当你首次完成与女神的交易后，可获得任意属性+2作为奖励（上限30）。在你完成任意交易后，你可以再次投掷1d6，直到投出一个未完成的交易。完成交易1获「黑夜的愉悦」AC永久+2；完成交易2获惩罚「黑夜的乏味」最大生命值永久降低4；完成交易3获特殊技能「至黑之夜」与「夜昏」；完成交易4所有购买行为无条件九五折；完成交易5周围15尺队友豁免-1（共同成长1级后消失）；完成交易6获察觉熟练/精通。",
        details: [
          { label: "施法时间", value: "1动作" },
          { label: "类型", value: "命运交易" },
          { label: "奖励", value: "属性+2（上限30）" },
        ],
      },
      {
        title: "黑夜亲和",
        level: 1,
        icon: "👁️",
        summary: "获得60尺黑暗视觉与30尺盲视。",
        description:
          "你获得60尺黑暗视觉与30尺盲视。",
        details: [{ label: "类型", value: "被动特性" }],
      },
      {
        title: "梦游",
        level: 3,
        icon: "🌙",
        summary: "长休时可执行简单行动，仍获得长休全部收益。",
        description:
          "在你完成交易的过程中，黑夜也将赐予你一些看上去毫无实际意义的能力，比如梦游。当你进行长休时，你可以选择完成一些简单的行动，并且你依然能够获得长休所带来的所有收益。你执行行动的地点必须在休息场所附近，你可以执行的行动包括但不限于：在特定区域排泄；在特定区域随意抛弃杂物（你不可决定要抛弃的物品，如果是装备或贵重道具，你可以在长休结束后将其捡回背包）；尝试以梦游状态参加一场深夜活动，你无法与他人沟通，也不会有任何记忆。你无法在主观上靠梦游为自己创造任何收益，但如果你运气足够好，也可能会有意想不到的收获。好奇心重的黑夜女神也会在必要时对你进行引导。若你要使用梦游效果，你需要在长休时向主持人声明。",
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
      { level: 7, abilities: ["黑夜祈祷精通"] },
      { level: 8, abilities: ["暗夜布道精通", "黑夜沉沦"] },
      { level: 11, abilities: ["死亡宣告（青春版）"] },
      { level: 12, abilities: ["掠影的蔑视"] },
      { level: 15, abilities: ["掠影示现"] },
      { level: 19, abilities: ["死亡宣告（正式版）"] },
      { level: 20, abilities: ["夜刃"] },
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
      "「当时间流尽，大空覆灭，黑夜褪去，白昼燃尽，创造亦不得不休止，便需要结束一切。」于是，宙宇的最终意志——毁灭因此诞生。毁灭代表终结，代表剧变，代表不可抑制的消亡。他是众祖中最受限制者，从诞生时起就开始长眠。在西洲大陆，毁灭意志的存在只被极少数人所知晓。",
    features: [
      {
        title: "幻痛",
        level: 1,
        icon: "💀",
        summary: "长休后进行DC10命运豁免，失败则最大生命值降低2d4。",
        description:
          "自从了解到毁灭的秘密后，你时常会感受到一些毫无由来的痛苦。每次长休结束后，你需要进行一次DC为10的d20命运豁免。若豁免成功，则你幸免于难；若豁免失败，你的最大生命值降低2d4，持续到下一次长休。",
        details: [
          { label: "豁免DC", value: "10（命运豁免）" },
          { label: "失败惩罚", value: "最大生命值降低2d4" },
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
          "毁灭意志正是命运与规则的肃清者。一天一次，你可以以一个传奇反应，让120尺范围内的一次失败的判定强制成功，或者让一次成功的判定强制失败。对史诗及以上单位无效。无论你是否使用这次机会，还可以宣告1-20中的一个数字并投掷两个d20，若包含所宣告数字则成功，失败时受到2d6真实伤害。扭曲命运每轮至多发动一次。",
        details: [
          { label: "施法距离", value: "120尺" },
          { label: "施法时间", value: "1传奇反应" },
          { label: "使用次数", value: "1次/天" },
        ],
      },
      {
        title: "吞噬命运",
        level: 3,
        icon: "🕳️",
        summary: "命令一次伤害完全消失，失败则代为承受。",
        description:
          "一天一次，反应使用。当一个可视目标受到伤害时，你可以尝试命令这次伤害完全消失，仿佛不曾存在，此后你需要进行一次命运豁免（DC11），若豁免失败，则你需要代为承受这次伤害，但这个伤害不会让你的生命值降低至1以下。",
        details: [
          { label: "施法时间", value: "1反应" },
          { label: "使用次数", value: "1次/天" },
          { label: "豁免DC", value: "11（命运豁免）" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["幻痛", "毁灭刻印"] },
      { level: 3, abilities: ["火焰免疫", "扭曲命运", "吞噬命运"] },
      { level: 5, abilities: ["伪造圣约", "凛冬肃正", "阳炎肃正"] },
      { level: 7, abilities: ["真火残焰", "孤注一掷"] },
      { level: 8, abilities: ["扭曲命运精通", "圣卫肃正"] },
      { level: 11, abilities: ["掠夺命运"] },
      { level: 17, abilities: ["审判命运"] },
      { level: 19, abilities: ["毁灭命运"] },
      { level: 20, abilities: ["真火剑"] },
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
      "北方信仰的核心是北方三女神——冬日女神、冰河女神、冰雪女神。传说北方的第一位王者伏尔坎·天柱曾赤身跪在雪原中祈祷七日七夜，侍奉三位女神，为北方人民换来了生存的机会。即便千年过后，北方人始终坚定信仰北方三女神。作为北方人，你天然对天柱家族抱有尊敬与信任。",
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
          "在大狩猎中，你每次对猎物种类进行的投掷获得+2值，并且你可额外进行一次投掷。此外，你在雪原地区进行求生、对北方历史的回忆、对北方信仰的宗教检定中获得优势。",
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
          "你可以消耗两块白钢将武器打造成+1武器，可以消耗两块白钢将金属材质的轻中甲打造成+1轻中甲。白钢是北方独有的珍贵矿石。（与初级北方矿工二选一）",
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
      { level: 11, abilities: ["北方天骄"] },
      { level: 12, abilities: ["狂魂"] },
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
      "赏金猎人是在中原和东方常见的一种职业，最初是绮晓公爵为绕过贵族私兵管控条例而发展的组织。作为赏金猎人，你不信仰任何神明，只信仰金钱带来的绝对安全感。你大概率来自中原或东方，绝不会是北方人。选择此背景时需注意队友可能会天然戒备你。",
    features: [
      {
        title: "贪财",
        level: 1,
        icon: "💰",
        summary: "魅力+2（上限24），分配报酬时游说不公平分配获优势。",
        description:
          "魅力+2（上限24）。当你和队友对报酬进行分配时，你如果游说队友进行不公平的分配，那你将会获得优势。金钱是你的信仰，贪婪是你的美德。",
        details: [
          { label: "属性", value: "魅力+2（上限24）" },
          { label: "条件", value: "不公平分配游说" },
        ],
      },
      {
        title: "勤勉",
        level: 1,
        icon: "📋",
        summary: "通过完成任务或委托获得的报酬+10%。",
        description:
          "你通过完成任务或者委托等形式获得的报酬+10%。",
        details: [
          { label: "类型", value: "角色扮演特性" },
          { label: "奖励", value: "报酬+10%" },
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
        summary: "针对你的巧手/洞悉/欺瞒/威吓获劣势，获得洞悉和隐匿熟练。",
        description:
          "任何针对你进行的巧手、洞悉、欺瞒、威吓将获得劣势。你获得洞悉和隐匿的熟练，若你已有熟练则获得精通。多年的江湖经验让你变得难以看透。",
        details: [
          { label: "效果", value: "敌方检定劣势" },
          { label: "熟练", value: "洞悉 + 隐匿" },
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
      "来自东洲大陆皇天之国的侠客，在西洲极为少见。他们使用的武器以长剑为主，但也可能千奇百怪。每一位东洲侠客都遵循着自己的「道」——或行侠仗义，或隐世潜修，或斩妖除魔。",
    features: [
      {
        title: "剑客",
        level: 1,
        icon: "⚔️",
        summary: "获得东洲长剑专精，单手剑+另一手空时AC+1且速度+10尺。",
        description:
          "你获得东洲长剑专精。你单手使用东洲长剑进行攻击，并且另一只手没有任何装备时，你的AC+1，你的速度增加10尺。若触发借机攻击，你可以在对方攻击前宣告使用一个反应完全格挡这次攻击。满足剑客条件时每轮可额外进行一次剑客攻击，每天至多等同于熟练加值的次数。东洲长剑：挥砍1d12+力量；穿刺1d12+敏捷。专精御剑：可以承受劣势为代价让攻击距离延长到10尺。",
        details: [
          { label: "武器", value: "东洲长剑 1d12" },
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
          "初入武林，异于常人。你获得等同于专长「健壮」的效果。你修习剑法「伏魔剑」与「迅雷剑」。伏魔剑：每场战斗一次，命中邪恶阵营敌人或邪魔、恶魔等异常生物时，额外造成玩家等级×d10点真实伤害。迅雷剑：每场战斗一次，进行敏捷豁免或检定时获得一次优势。",
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
          "骨若金刚，刀剑不惧。你的AC获得+1值。你修习神通「金钟罩」和「梯云纵」。金钟罩：每天1次，受到伤害时免疫最多等级×d10点伤害。梯云纵：每天1次，附赠动作传送到30尺内可见未被占据的空间。",
        details: [
          { label: "防御", value: "AC+1" },
          { label: "神通", value: "金钟罩 + 梯云纵" },
        ],
      },
      {
        title: "逍遥境",
        level: 7,
        icon: "🕊️",
        summary: "敏捷+1，获得轻功飞行能力（每轮30尺）。",
        description:
          "身若飞鸿，天地逍遥。你的敏捷+1。你的轻功已经大成，每天你可以赋予自己至多10分钟的轻功时间，你每轮拥有30尺飞行距离，但你每飞行30尺都需要落地至少一次，你的起点和终点必须是稳固的平台。",
        details: [
          { label: "属性", value: "敏捷+1" },
          { label: "飞行", value: "30尺/轮（需落地）" },
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
      { level: 11, abilities: ["太极两仪剑"] },
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
      "精灵族诞生于第二纪元，由创造意志亲手塑造——他们仅被赋予了一切善的感情，所有的「恶」被剔除。精灵女王化身古树支撑整个位面，如今枯叶渐增，精灵一族急需新的土地。作为精灵族的优秀一员，你受妖精女王委托来到西洲大陆，为族人寻找新的家园。",
    features: [
      {
        title: "位面穿梭",
        level: 1,
        icon: "🌀",
        summary: "即将受伤害时以反应回到精灵位面规避伤害。",
        description:
          "每天1次，以一个反应施展。当你即将受到伤害时，你立即回到精灵位面规避此次伤害，你可以立即返回主位面，或者选择在下一轮开始时回到主位面。该能力对部分锁定型伤害无效。",
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
          "你获得等同于玩家等级的d8连珠骰（力场伤害）。你在进行伤害投掷时，若其中出现两个或以上的相同数字，取相同数量最高的一组，你可以消耗小于等于该数量的连珠骰增加伤害。例如：你施放一次火球术，在8d6中出现了3个3与2个4，则你可以选择3个骰子增加3d8的连珠伤害。",
        details: [
          { label: "骰子", value: "d8连珠骰×等级" },
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
          "你以一个附赠动作开口歌唱（进行曲），为可见范围内一名指定目标解除一种非魔法疾病或一种易伤。每天两次。精灵的歌声蕴含着光阴之神的力量。",
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
      { level: 7, abilities: ["放浪神的小步舞曲", "军神的赞美歌"] },
      { level: 8, abilities: ["辉煌箭"] },
      { level: 10, abilities: ["九天连箭"] },
      { level: 12, abilities: ["完美音调"] },
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
      "自第一纪元起就有一小部分人类成为巨龙之友。龙巢神殿偶尔接纳放弃了凡俗欲望、只渴求宁静与和平的人类或智慧生物成为巨龙的伙伴。作为龙巢神殿的守望者，你必须恪守正义与善良，摒弃邪恶与贪婪，否则巨龙伙伴将离你而去。若弃明投暗，甚至会面临龙王的审判。",
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
          "你拥有一位幼龙伙伴，你们将会饮下对方的血液，在你们之间构建起血脉的联系，从此以后，你们便是真正的亲人，你们必将互相监督，共同捍卫和平与自由。你的龙族伙伴会说通用语言与龙语。在战斗中，它与你同时行动，你替它进行豁免。幼龙具有120尺黑暗视觉与15尺盲视，30尺爬行与飞行距离。命中+8，DC14。免疫自身属性伤害。AC14，HP为10+8×等级。攻击：2d10魔法穿刺/挥砍/钝击；吐息：2d10属性伤害（15尺锥形，魅力豁免成功减半）。",
        details: [
          { label: "幼龙AC", value: "14" },
          { label: "幼龙HP", value: "10+8×等级" },
          { label: "攻击", value: "2d10 魔法伤害" },
          { label: "吐息", value: "2d10 属性伤害" },
        ],
      },
      {
        title: "巨龙视线",
        level: 5,
        icon: "👁️",
        summary: "与龙族伙伴同在视线内时AC+2、豁免+2，共享免疫与抗性。",
        description:
          "若你与巨龙伙伴同时在对方视线范围内，那么你们的AC+2，豁免+2，同时你享有巨龙伙伴的免疫。",
        details: [
          { label: "效果", value: "AC+2/豁免+2" },
          { label: "条件", value: "双方在视线范围内" },
          { label: "共享", value: "免疫 + 抗性" },
        ],
      },
      {
        title: "武神枪",
        level: 5,
        icon: "🔱",
        summary: "将攻击替换为30尺锥形范围攻击，附带等级×d10魔法穿刺。",
        description:
          "你将一次攻击替换成武神枪攻击，本次攻击范围变为30尺锥形，并附带玩家等级×d10点魔法穿刺伤害。每轮至多一次，每天至多两次。",
        details: [
          { label: "范围", value: "30尺锥形" },
          { label: "伤害", value: "等级×d10 魔法穿刺" },
          { label: "使用", value: "每轮一次，每天两次" },
        ],
      },
    ],
    levelTiers: [
      { level: 1, abilities: ["龙族羁绊"] },
      { level: 3, abilities: ["龙族至亲（幼龙伙伴）"] },
      { level: 5, abilities: ["巨龙视线", "武神枪", "幼龙额外攻击"] },
      { level: 7, abilities: ["腾龙", "坠星冲", "成长1（少年龙）"] },
      { level: 8, abilities: ["天龙点睛"] },
      { level: 11, abilities: ["成长2（青年龙）", "青年龙额外攻击"] },
      { level: 13, abilities: ["天穹破碎"] },
      { level: 16, abilities: ["成长3（成年龙）", "成年龙额外攻击"] },
      { level: 17, abilities: ["苍穹龙炎（待定）"] },
    ],
  },
];
