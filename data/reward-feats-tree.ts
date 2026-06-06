import { FeatNode } from "@/types";

export const rewardFeatsTree: FeatNode[] = [
  {
    id: "arcane",
    title: "奥秘术专长",
    subtitle: "Arcane Arts",
    description:
      "在菲比斯帝国的东方区域，诞生了两种不同于神灵术的魔法——奥术与秘术。奥术魔法运转自然之力（火焰、雷电等元素放出）；秘术魔法运用非自然之力（召唤、诅咒、变形等）。奥秘术的本质是利用已有资源对自然或超自然提出交换。奥秘术师通常来自东方或中原地区，他们是现代科学的忠实拥护者。",
    children: [
      {
        id: "summon-1",
        title: "召唤秘术一型",
        description:
          "你可以使用价值为200gp的宝石，一只凶兽的首级为耗材召唤一头普通召唤兽。与其签订契约后以附赠动作召唤现身，以附赠动作或反应命令其回到超域位面。当召唤兽生命值归零时需花费一小时、消耗50金币恢复。同时最多召唤一只、契约两头，可用附赠动作切换。",
        mechanics: [
          { label: "普通召唤兽 AC", value: "16" },
          { label: "HP", value: "10 × 等级" },
          { label: "命中", value: "+8" },
          { label: "全豁免", value: "+4" },
          { label: "攻击", value: "每轮两次" },
          { label: "近战", value: "2d8+4 挥砍" },
          { label: "远程", value: "2d8 穿刺" },
          { label: "秘技次数", value: "每天一次（特性施放）" },
        ],
        children: [
          {
            id: "fat-chocobo",
            title: "胖陆行鸟",
            subtitle: "Fat Chocobo",
            description:
              "特殊反应「胖胖之墙」：为自身半径60尺范围内至多3个目标附加保护，使其AC+5、豁免+5，持续至你的下一回合开始。",
          },
          {
            id: "cactuar",
            title: "仙人掌",
            subtitle: "Cactuar",
            description:
              "秘技「针千本」：对自身半径15尺范围内所有敌人造成等同于自己最大生命值的真实伤害，敌人进行敏捷豁免，豁免成功伤害减半。",
          },
          {
            id: "moogle",
            title: "莫古力",
            subtitle: "Moogle",
            description:
              "秘技「莫古力激流」：以自身为起点，对宽10尺、长60尺范围内敌人造成眩目效果与8d8点光耀伤害。范围内所有敌人进行感知豁免，豁免失败陷入目盲状态一轮，豁免成功伤害减半。",
          },
        ],
      },
      {
        id: "summon-2",
        title: "召唤秘术二型",
        prerequisite: "召唤秘术一型",
        description:
          "你可以使用价值为500gp的宝石，一个龙族素材或恶魔素材为耗材召唤高等召唤兽。高等召唤兽具有物理抗性。生命值归零时需花费一小时并耗费100金币恢复。",
        mechanics: [
          { label: "高等召唤兽 AC", value: "18" },
          { label: "HP", value: "10 × 等级" },
          { label: "命中", value: "+10" },
          { label: "全豁免", value: "+5" },
          { label: "攻击", value: "每轮两次" },
          { label: "近战", value: "4d8+5 挥砍或钝击" },
          { label: "远程", value: "4d8 穿刺" },
          { label: "倍率", value: "攻击治疗×2 / 生命值×2" },
          { label: "秘技次数", value: "两次 / 长休（特性施放）" },
        ],
        children: [
          {
            id: "fenrir",
            title: "芬里尔",
            subtitle: "Fenrir",
            description:
              "寒冷、黯蚀抗性。秘技「月夜咆哮」：对60尺锥形范围内敌人造成8d8点黯蚀伤害，DC16感知豁免，豁免成功伤害减半，豁免失败受到所有伤害且陷入一轮震慑。",
          },
          {
            id: "ixion",
            title: "伊克西翁",
            subtitle: "Ixion",
            description:
              "毒素、闪电、雷鸣抗性。秘技「天降雷光」：对面前宽10尺、长60尺范围发动落雷攻击，造成10d10点闪电伤害，DC16敏捷豁免，豁免成功伤害减半，豁免失败陷入一轮麻痹。",
          },
          {
            id: "seraph",
            title: "炽天使",
            subtitle: "Seraph",
            description:
              "火焰、光耀抗性。秘技「天使之羽」：选择60尺内至多两个目标，恢复其8d8点生命值，或者造成8d8点光耀伤害。",
          },
          {
            id: "self-destruct",
            title: "通用秘技：自爆",
            subtitle: "Self-Destruct",
            description:
              "触及5尺。召唤兽冲过去自爆，对敌人造成最多等同于其最大生命值15%的伤害（根据召唤兽剩余生命值百分比×15%来计算，向下取整）。",
          },
        ],
      },
      {
        id: "summon-3",
        title: "召唤秘术三型",
        prerequisite: "召唤秘术二型",
        description:
          "你可以使用价值为2000gp的宝石、一颗龙心或恶魔之心召唤特等召唤兽。特等召唤兽免疫挥砍、穿刺、钝击伤害。生命值归零时需花费一小时并耗费400金币恢复。",
        mechanics: [
          { label: "特等召唤兽 AC", value: "22" },
          { label: "HP", value: "10 × 等级" },
          { label: "命中", value: "+12" },
          { label: "全豁免", value: "+7" },
          { label: "倍率", value: "攻击×3 / 生命值×3" },
          { label: "穿透", value: "无视抗性，免疫视为抗性" },
        ],
        children: [
          {
            id: "leviathan",
            title: "利维坦",
            subtitle: "Leviathan",
            description:
              "寒冷、黯蚀免疫。秘技「大海啸」：对正前方20×60尺范围造成8d8点寒冷伤害，DC18体质豁免，豁免成功伤害减半。",
          },
          {
            id: "ifrit",
            title: "伊芙利特",
            subtitle: "Ifrit",
            description:
              "火焰、光耀免疫。秘技「地狱火焰」：对120尺内一点释放半径20尺球形火焰，造成8d8点火焰伤害，DC18敏捷豁免，豁免成功伤害减半。",
          },
          {
            id: "ramuh",
            title: "拉姆",
            subtitle: "Ramuh",
            description:
              "毒素、闪电、雷鸣免疫。秘技「轰雷」：对180尺内至多三个目标释放闪电轰击，造成8d8点闪电伤害，DC18敏捷豁免，豁免成功伤害减半。",
          },
        ],
      },
      {
        id: "generic-formulas",
        title: "泛用魔法公式",
        subtitle: "Generic Arcane Formulas",
        description:
          "你学会以下泛用公式，获得4枚泛用公式骰，每次使用泛用公式消耗1枚，每轮最多使用2枚。泛用公式骰在长休后恢复。",
        children: [
          {
            id: "chain-cast",
            title: "连打",
            description:
              "消耗两枚公式骰，无论你是否使用动作消耗环位进行施法，你都可以使用附赠动作施放一道施法时间为动作的法术。",
            mechanics: [{ label: "消耗", value: "2枚公式骰" }],
          },
          {
            id: "focus",
            title: "集束",
            description:
              "若法术类型为塑能法术且作用区域为范围，可以使法术作用半径减少1/4，并令法术造成的所有伤害（豁免判定前的结果）集中至法术范围内的单个目标，但最终伤害减半。",
          },
          {
            id: "pierce",
            title: "贯穿",
            description:
              "令你造成的一次法术伤害无视目标抗性，或者令目标免疫降级为抗性。",
          },
          {
            id: "rapid",
            title: "极速",
            description:
              "你快速施展法术突袭，你的法术命中获得劣势，但只要命中就可造成重击。",
          },
        ],
      },
      {
        id: "specialized-formulas",
        title: "特化魔法公式",
        subtitle: "Specialized Arcane Formulas",
        prerequisite: "泛用魔法公式",
        description:
          "卢修斯·绮晓，这位卓越的奥术天才在18岁时根据泛用公式发明了特化公式。特化公式能够与泛用公式同时使用，这使得奥秘术施法者的施法能力进一步增强。你学会以下特化公式，获得4枚特化公式骰，每次使用消耗一枚，每轮最多使用2枚，长休后恢复。",
        children: [
          {
            id: "lock-on",
            title: "锁定",
            description:
              "当你在具有优势时进行法术攻击检定，你可以令这次攻击必定命中，或者你可以令一次劣势变为均势。",
          },
          {
            id: "amplify",
            title: "倍增",
            description:
              "将塑能系法术作用半径增加1/4倍。膨胀的法术攻击更加难以抵抗，你本次施法的豁免DC+1。",
          },
          {
            id: "burst",
            title: "爆发",
            description:
              "当你造成法术重击时，追加对敌人造成其最大生命值的1d4+4个百分比的同类型伤害。",
          },
          {
            id: "phase",
            title: "阶段",
            description:
              "你能够更加精准的控制施法，当你所施放的一个法术需要敌人进行豁免时，他必须连续两次通过豁免才能够成功豁免。",
          },
        ],
      },
    ],
  },
  {
    id: "northern",
    title: "北方专长",
    subtitle: "Northern Feats",
    description:
      "北方以白钢锻造闻名于世。北方的骑士们使用模仿巨龙攻击设计的龙戟，并穿戴专为配合巨龙作战而设计的龙铠。",
    children: [
      {
        id: "dragon-halberd",
        title: "龙戟精通",
        subtitle: "Dragon Halberd Mastery",
        description:
          "龙戟是北方军队最常用的制式武器，共有四个部分，都是模仿巨龙的攻击而设计的——由白钢打造的枪杆是龙脊，枪尖是龙牙，枪尖侧部的半月形刀刃是龙爪，而枪尾的钝器配重是龙尾。你获得北方骑士专用武器「龙戟」的精通，并且能够以300gp购买一支龙戟。",
        mechanics: [
          { label: "武器类型", value: "双手 · 重型 · 10尺触及" },
          { label: "主属性", value: "力量 或 敏捷" },
          { label: "伤害", value: "2d8 + 主属性调整值" },
          { label: "伤害类型", value: "穿刺 或 挥砍" },
          { label: "价格", value: "300 gp" },
          { label: "精通·冲锋", value: "冲锋超过10尺后攻击具有优势" },
          { label: "精通·重击", value: "自然19-20即可造成重击" },
        ],
      },
      {
        id: "dragon-armor",
        title: "龙铠精通",
        subtitle: "Dragon Armor Mastery",
        prerequisite: "龙戟精通",
        description:
          "龙铠最初设计给北方最强大的骑士们用来配合与巨龙的合作战斗。甲胄虽沉重却相当灵活，能够让骑士们利用更夸张的姿势做出更好的跳跃。同时，为了防止受到束缚，龙铠还在关节各处设计出了龙牙般的尖刺造型——这种尖刺对巨龙的鳞片来说就像鹅毛般柔软，但对寻常的生物却危险十足。你获得北方骑士专用铠甲「龙铠」的精通，并且能够以2000gp购买一套龙铠。",
        mechanics: [
          { label: "护甲类型", value: "重甲" },
          { label: "AC", value: "19" },
          { label: "力量要求", value: "15" },
          { label: "隐匿", value: "劣势" },
          { label: "重量", value: "50磅" },
          { label: "价格", value: "2000 gp" },
          { label: "精通·免疫擒抱", value: "免疫擒抱状态" },
          { label: "精通·冲锋联动", value: "消耗10尺移动触发龙戟冲锋精通" },
          { label: "精通·天柱威势", value: "10尺内敌人攻击失误时立即反击（每轮一次）" },
        ],
      },
    ],
  },
  {
    id: "western",
    title: "西方专长",
    subtitle: "Western Feats",
    description:
      "为了对抗西部地区的烈风，西方的战士们设计出了更坚实的长弓与特制箭矢。",
    children: [
      {
        id: "tower-bow",
        title: "塔弓精通",
        subtitle: "Tower Bow Mastery",
        description:
          "为了对抗西部地区的烈风，西方的战士们设计出了一种更加坚实的长弓。它有近七尺长，在弓梢处增加了金属传动部件。这种重型弓虽然让射手的移动变得不便，但它所射出的箭矢甚至可以破坏城墙，因此被称为塔弓。你获得西方骑士专用武器「塔弓」的精通，并且能够以300gp购买一支塔弓。",
        mechanics: [
          { label: "武器类型", value: "双手 · 重型" },
          { label: "射程", value: "160 / 700尺" },
          { label: "主属性", value: "力量 或 敏捷" },
          { label: "伤害", value: "2d6 + 主属性调整值" },
          { label: "伤害类型", value: "穿刺" },
          { label: "价格", value: "300 gp" },
          { label: "精通·近射", value: "5尺内射击不陷入劣势且获得优势（视为近战攻击）" },
          { label: "精通·贯穿重射", value: "箭矢可对目标20尺内另一目标擦伤1d6+调整值" },
        ],
      },
      {
        id: "white-feather",
        title: "长翎白羽箭",
        subtitle: "White Feather Arrows",
        prerequisite: "塔弓精通",
        description:
          "你获得西方骑士专用弹药「长翎白羽箭」的精通，并且能够以10gp/支的价格购买该类箭矢。箭矢射出后即被消耗，只能以塔弓射出。",
        mechanics: [
          { label: "弹药类型", value: "重型箭矢（仅塔弓）" },
          { label: "价格", value: "10 gp / 支" },
          { label: "中小型目标", value: "额外 1d6 力场伤害" },
          { label: "大型目标", value: "额外 2d6 力场伤害" },
          { label: "巨型目标", value: "额外 3d6 力场伤害" },
          { label: "超巨型目标", value: "额外 4d6 力场伤害" },
        ],
      },
    ],
  },
  {
    id: "eastern",
    title: "东方专长",
    subtitle: "Eastern Feats",
    description:
      "在商业发达的东方，财富本身就是一种力量。东方贵族以经济利益为纽带，发展出了独特的专长体系。",
    children: [
      {
        id: "wealth-status",
        title: "财富即地位",
        subtitle: "Wealth is Status",
        description:
          "计算你的总资产（现有gp + 装备价值 + 地产价值）。当财富累积到一定门槛时，你的魅力将得到切实的提升。高人一等的姿态让你在社交中游刃有余。",
        mechanics: [
          { label: "10,000 gp", value: "魅力 +1（上限25）" },
          { label: "50,000 gp", value: "魅力 +1（上限25）" },
          { label: "100,000 gp", value: "魅力 +1（上限25）" },
          { label: "财富压制", value: "对财富低于自身1/5者：欺瞒/威吓/游说/洞悉 优势 +5" },
        ],
      },
      {
        id: "business-talent",
        title: "商务型人才",
        subtitle: "Business Talent",
        description:
          "你拥有出色的商业头脑，能够在买卖中获取更大的利润，并通过特殊渠道获取稀有物品。",
        mechanics: [
          { label: "售卖加成", value: "游说卖出更高价格（+10% × 2d4）" },
          { label: "购买折扣", value: "游说以更低价格购入（-10% × 1d4）" },
          { label: "稀有渠道", value: "购买魔法物品的投掷结果 +4" },
        ],
      },
    ],
  },
  {
    id: "sanctuary",
    title: "圣域专长",
    subtitle: "Sanctuary Feats",
    description:
      "圣域的苦修者经过数十年冥想，掌握了超越常人的精神力与治愈之术。",
    children: [
      {
        id: "dual-concentration",
        title: "一心多用",
        subtitle: "Dual Concentration",
        description:
          "你最多可以同时保持两个法术的专注，并且你每轮最多失去对一个法术的专注，失去的专注由你来选择。你的专注豁免DC至多不超过30。",
        mechanics: [
          { label: "专注上限", value: "同时维持两个法术" },
          { label: "失去控制", value: "每轮最多失去一个专注（自行选择）" },
          { label: "豁免DC上限", value: "不超过30" },
        ],
      },
      {
        id: "life-invoke",
        title: "生命祈唤",
        subtitle: "Life Invocation",
        description:
          "你可以忽视环位消耗限制，利用附赠动作施放所有释放时间小于等于十分钟的治疗类法术。施放治疗法术时，你所造成的回复量翻倍。",
        mechanics: [
          { label: "效果", value: "附赠动作施放治疗法术（≤10分钟）" },
          { label: "回复加成", value: "治疗量 ×2" },
        ],
      },
    ],
  },
  {
    id: "eastern-zhou",
    title: "东洲专长",
    subtitle: "Eastern Zhou Feats",
    description:
      "来自东洲大陆的武林绝学，只有踏入金刚境的侠客才有资格修习。",
    children: [
      {
        id: "little-li-dagger",
        title: "小李飞刀",
        subtitle: "Little Li's Flying Dagger",
        prerequisite: "东洲侠客 · 金刚境",
        description:
          "你习得江湖绝技小李飞刀，你的敏捷属性上限变为22。每天你可以准备等同于敏捷调整值数量的小李飞刀，每天可以使用两次探花步。",
        mechanics: [
          { label: "敏捷上限", value: "22" },
          { label: "飞刀数量", value: "敏捷调整值 / 天" },
          { label: "小李飞刀射程", value: "60尺" },
          { label: "小李飞刀附魔", value: "+2 灵巧武器" },
          { label: "小李飞刀伤害", value: "2d10" },
          { label: "小李飞刀重击", value: "自然19-20" },
          { label: "小李飞刀反击恢复", value: "恢复等同于飞刀伤害的生命值" },
        ],
        children: [
          {
            id: "tanhua-step",
            title: "探花步",
            subtitle: "Flower-Seeking Step",
            description:
              "每天可使用两次，以一个反应施展。当你被攻击命中时可以施展探花步躲避攻击：AC获得等同于敏捷调整值的加值（持续到下回合开始）。若使用探花步避开攻击，则可立即使用小李飞刀进行反击，一次反击中可掷出任意数量的飞刀直到全部消耗。",
            mechanics: [
              { label: "使用次数", value: "2次 / 天" },
              { label: "施法时间", value: "1反应" },
              { label: "AC加值", value: "敏捷调整值" },
            ],
          },
        ],
      },
      {
        id: "sunflower-manual",
        title: "葵花宝典",
        subtitle: "Sunflower Manual",
        prerequisite: "欲练此功，必先自宫，断情绝性，了却尘缘",
        description:
          "时至今日，葵花宝典已经不再是武林中的秘密——只要十两银子就能在任何一位说书人手中买到一份正版。只不过整个江湖中依然极少有人修炼这份神功，因为所需付出的代价过于沉重。修炼后，你再不能产生世俗的欲望，你的全身家当不能超过100金币。",
        mechanics: [
          { label: "资产限制", value: "全身家当不能超过100金币" },
          { label: "体质", value: "永久降低至9（不可提升）" },
          { label: "属性上限", value: "六维上限提升至24" },
        ],
        children: [
          {
            id: "sunflower-layer1",
            title: "第一层 · 身残志坚",
            description:
              "修炼葵花宝典后，你的体质降低至9且无法以任何手段提升。你的六维属性上限提升至24，你可以将被降低的体质属性任意分配至其它属性。",
            mechanics: [{ label: "领悟值", value: "10点" }, { label: "奖励", value: "最大生命值 + 玩家等级" }],
          },
          {
            id: "sunflower-layer2",
            title: "真气护体",
            description:
              "当你未着装护甲与盾牌时，你的基础AC = 10 + 力量、敏捷、智力、感知、魅力调整值，你可以将你的敏捷调整值作为加值加在豁免结果上。你获得非魔法性的钝击、挥砍、穿刺伤害抗性。",
            mechanics: [{ label: "领悟值", value: "20点" }, { label: "AC", value: "10+五维调整值" }, { label: "物理抗性", value: "非魔法钝击/挥砍/穿刺" }],
          },
          {
            id: "sunflower-layer3",
            title: "真气化刃",
            description:
              "你可以用真气模仿任何你熟练或精通的武器，真气武器视为武器附魔+3武器，真气武器的伤害类型为力场伤害。",
            mechanics: [{ label: "领悟值", value: "30点" }, { label: "附魔", value: "+3" }, { label: "伤害类型", value: "力场" }],
          },
          {
            id: "sunflower-layer4",
            title: "真气外放",
            description:
              "你可以利用真气强化施法，你的法术命中和法术DC+3。",
            mechanics: [{ label: "领悟值", value: "40点" }, { label: "法术命中", value: "+3" }, { label: "法术DC", value: "+3" }],
          },
          {
            id: "sunflower-layer5",
            title: "身外金身",
            description:
              "你将被自己遗弃的「珍视之物」变为一件需要同调的奇物装备。该装备具有三点充能，每天恢复三点充能。消耗1充能：将一次劣势变为均势；消耗2充能：进行死亡豁免时恢复1点生命值并立即恢复意识。",
            mechanics: [{ label: "领悟值", value: "50点" }, { label: "充能", value: "3点/天" }],
          },
          {
            id: "sunflower-layer6",
            title: "人剑合一",
            description:
              "你可以用意念操纵你的「身外金身」进行攻击，身外金身可在你周身30尺范围内活动，并且每轮进行至多一次近战攻击，它的攻击等同于你的普通攻击。",
            mechanics: [{ label: "领悟值", value: "60点" }, { label: "范围", value: "30尺" }, { label: "攻击", value: "等同于普通攻击" }],
          },
        ],
      },
    ],
  },
];
