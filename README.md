# 圣约·英雄时代 | Covenant: Age of Heroes

D&D 跑团模组展示网页 — 基于 Next.js 14 (App Router) + Tailwind CSS + Framer Motion 构建。

## 项目概览

```
covenant-the-heroic-era/
├── app/
│   ├── globals.css          # 全局样式 + 十字伤痕装饰
│   ├── layout.tsx           # 根布局 (Cinzel + Inter 字体)
│   └── page.tsx             # 主页面 (全页滚动 + 导航)
├── components/
│   ├── BackgroundSlice.tsx  # 纵向切片手风琴
│   ├── CovenantContent.tsx  # 规则内容渲染
│   ├── CrossScarDecoration.tsx # 十字伤痕装饰 (4 种变体)
│   ├── FeatureCard.tsx      # 可展开特性卡片
│   ├── HeroSection.tsx      # 顶部标题区
│   ├── IntroductionSection.tsx # 板块 A：英雄时代 (世界观)
│   ├── Navigation.tsx       # 顶部毛玻璃导航栏
│   └── RulesSection.tsx     # 板块 B：D&D 模组 (规则)
├── data/
│   ├── backgrounds.ts       # 8 个额外背景数据
│   ├── game-rules.ts        # 游戏规则 / 势力 / 专长数据
│   └── world-lore.ts        # 世界观章节数据
├── types/
│   └── index.ts             # TypeScript 类型定义 + 背景图路径
├── public/
│   └── assets/              ← 放置你的 D&D 艺术素材图
├── tailwind.config.ts       # 色彩 / 字体 / 动画系统
├── next.config.js
└── package.json
```

## 快速开始

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
# → http://localhost:3000

# 生产构建
npm run build
npm start
```

## 部署到 Vercel

### 第一步：推送到 GitHub

```bash
# 在 GitHub.com 创建一个新仓库（不要勾选 "Add a README file"）

# 关联远程仓库并推送
git remote add origin https://github.com/<你的用户名>/<仓库名>.git
git branch -M master
git push -u origin master
```

### 第二步：在 Vercel 部署

1. 打开 [vercel.com](https://vercel.com)，用 GitHub 账号登录
2. 点击 **"Add New..." → "Project"**
3. 在列表中找到你的仓库，点击 **"Import"**
4. Vercel 会自动识别为 Next.js 项目，无需修改任何配置
5. 点击 **"Deploy"**，等待 1-2 分钟构建完成
6. 部署成功后你会得到一个 `https://xxx.vercel.app` 域名

> **提示：** 之后每次 `git push` 到 `master` 分支，Vercel 会自动重新部署。

### 第三步：配置自定义域名（可选）

在 Vercel 项目面板 → **Settings → Domains** → 添加你的域名，按提示设置 DNS 记录即可。

## 添加自定义背景图

网页支持为 8 个背景各自配置一张全屏大图。

### 文件放置

将你的 D&D 艺术素材放入 `public/assets/` 目录：

```
public/assets/
├── radiant-faith.jpg       # 光辉信仰
├── night-faith.jpg         # 黑夜信仰
├── destruction-faith.jpg   # 毁灭信仰
├── northern-faith.jpg      # 北方信仰
├── bounty-hunter.jpg       # 赏金猎人
├── eastern-hero.jpg        # 东洲侠客
├── elf.jpg                 # 精灵古庭
└── dragon-lair.jpg         # 龙巢神殿
```

### 图片要求

| 项目 | 建议值 |
|------|--------|
| 分辨率 | 1920×1080 或更高（16:9） |
| 格式 | `.jpg` 或 `.webp`（推荐 webp） |
| 文件大小 | < 500KB（Vercel 边缘网络分发，小文件加载更快） |
| 色调 | 深色/暗色调为佳（页面有 80% 暗色叠加层） |

### 如果不想用背景图

将对应条目设为空字符串 `""`，页面会显示默认的群青色渐变背景：

```ts
// types/index.ts 末尾
export const BACKGROUND_IMAGE_URLS: Record<string, string> = {
  radiantFaith: "",   // ← 留空即使用默认渐变背景
  // ...
};
```

### 更换图片文件名

如果你的图片名称不同，修改 `types/index.ts` 中 `BACKGROUND_IMAGE_URLS` 的路径即可：

```ts
radiantFaith: "/assets/my-custom-name.webp",
```

## 设计系统

### 色彩

| 角色 | 色值 | Tailwind Class |
|------|------|----------------|
| 底色 | `#080C14` | `bg-covenant-void` |
| 银色 | `#B8C4D4` | `text-covenant-silver` |
| 群青 | `#1E3A6E` | `bg-covenant-ultramarine` |
| 圣约金 | `#C5A059` | `text-covenant-gold` |
| 神秘紫 | `#2D1B33` | `bg-covenant-mystic` |

### 字体

- **标题**：Cinzel（`font-heading`）— 史诗感衬线体
- **正文**：Inter（`font-body`）— 高可读性无衬线体

### 动画

所有动画使用 Framer Motion：
- 切片展开/收起：`layout` 动画 0.55s 弹性缓动
- 内容入场：从右侧滑入 + stagger 级联
- 背景图切换：`AnimatePresence` crossfade 0.8s
- 特性卡片展开：高度动画 0.35s

## 技术栈

- **框架**：Next.js 14 (App Router)
- **样式**：Tailwind CSS 3.4
- **动画**：Framer Motion 11
- **字体**：next/font (Cinzel + Inter)
- **语言**：TypeScript
- **部署**：Vercel

## Git 提交历史

```
f759c81 Module 4: expandable FeatureCard component with icons and structured details
644f46a Module 3: refine vertical slice accordion interactions
f72c52b Module 2: full-page scroll architecture with Navigation + two sections
0281aa6 Cleanup: remove unused imports in IntroductionSection
7682108 Design System: silver + ultramarine palette with cross-scar ornament
abc0159 Initial commit: Covenant: Age of Heroes showcase page
```
