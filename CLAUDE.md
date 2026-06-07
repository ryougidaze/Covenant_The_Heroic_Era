# 圣约·英雄时代 — 项目规范文档

## 技术栈

| 层 | 技术 | 版本 |
|---|---|---|
| 框架 | Next.js App Router | 15.5 |
| 语言 | TypeScript | 5.4+ |
| 样式 | Tailwind CSS | 3.4 |
| 动画 | Framer Motion | 11.0 |
| 字体 | Cinzel (标题) + Inter (正文) | Google Fonts |
| 部署 | Cloudflare Workers (opennextjs-cloudflare) | — |

## 项目结构

```
├── app/                    # 路由页面 (App Router)
│   ├── layout.tsx          # 根布局 (字体 + LayoutWrapper)
│   ├── page.tsx            # 首页 /
│   ├── intro/
│   │   ├── page.tsx        # 介绍页 /intro
│   │   ├── chronicles/
│   │   │   ├── page.tsx    # 编年史列表 /intro/chronicles
│   │   │   └── [era]/page.tsx  # 纪元详情 /intro/chronicles/[era]
│   │   └── characters/
│   │       ├── page.tsx    # 人物志列表 /intro/characters
│   │       ├── [era]/page.tsx   # 纪元人物列表
│   │       └── [era]/[char]/page.tsx  # 人物详情
│   ├── rules/page.tsx      # 规则页 /rules
│   └── api/aglaia/chat/route.ts  # AI 对话 API
├── components/             # 可复用组件
├── data/                   # 静态数据 (编年史、人物、规则)
├── types/index.ts          # 全局类型定义
├── lib/aglaia/             # Aglaia AI 对话系统
├── public/assets/          # 图片/音频资源
├── scripts/                # 构建工具脚本
└── tailwind.config.ts      # 设计 Token
```

## 组件规范

### Server vs Client 组件

- **Server Component** (默认): 页面文件优先使用 Server Component，直接 import 数据
- **Client Component** (加 `"use client"`): 需要使用 `useState` / `useEffect` / 事件处理 / 浏览器 API 时
- 数据通过 props 从 Server → Client 传递，或 Client 直接 import（静态数据可被打包）

### 核心组件一览

| 组件 | 类型 | 用途 |
|------|------|------|
| `LayoutWrapper` | Client | 全局外层 (背景 + 导航 + BGM + Aglaia) |
| `Navigation` | Client | 顶部浮动导航栏 (自动隐藏) |
| `GlobalBackground` | Client | 鼠标响应式环境背景 |
| `SplitContentView` | **Client** | **编年史/人物志的双栏布局 (TOC + 内容)** |
| `BreadcrumbNav` | Client | 左上角返回导航按钮 |
| `RulesSection` | Client | `/rules` 页面的 4 标签页布局 |
| `BackgroundSlice` | Client | 背景标签页的纵向伸缩卡片 |
| `BackgroundDetailPanel` | Client | 背景详情的全屏模态面板 |
| `RewardFeatsAccordion` | Client | 奖励专长的递归手风琴树 |
| `GoldenFlameParticles` | Client | 金色粒子系统 (dynamic import, ssr:false) |
| `BgmPlayer` | Client | 背景音乐播放器 |
| `AglaiaWidget` | Client | AI 角色对话组件 |
| `CrossScarDecoration` | Client | 十字伤痕装饰 (4 种变体) |

## 数据架构

### 编年史 & 人物志 (`data/heroic-era.ts`)

```typescript
interface ChronicleSection {
  id: string;       // kebab-case 英文 ID
  title: string;    // 中文标题 (如 "一·创世六祖")
  content: string;  // 正文，段落用 \n\n 分隔，三级标题用 ### 前缀
  image?: string;   // 可选插画路径，如 "/assets/chronicles/xxx.webp"
}

interface ChronicleEra {
  id: string;           // "genesis" | "first-era" | "second-era" | "third-era"
  title: string;        // "创世纪元" | "第一纪元" | ...
  description?: string;
  sections: ChronicleSection[];
}

interface CharacterBio {
  id: string;        // "leukodoros" | "han-gang" | ...
  name: string;      // 中文全名
  subtitle?: string; // "生卒年：第一纪元公元85年——第一纪元公元866年"
  portrait?: string; // 立绘路径 "/assets/characters/xxx.webp"
  sections: ChronicleSection[];  // 复用 ChronicleSection
}

interface CharacterEra {
  id: string;
  title: string;
  characters: CharacterBio[];
}
```

**导出**: `CHRONICLES: ChronicleEra[]`, `CHARACTERS: CharacterEra[]`

### 内容格式规范

- 段落分隔符: `\n\n` (在 template literal 中写作 `\\n\\n`)
- 三级标题: 行首 `### ` 前缀 (如 `### 成工与千门之墙`)
- 引号: 使用中文引号 `"` `"`，特殊场景用 `"`
- 所有文本为繁体中文
- 每个 section 的 `id` 使用 kebab-case 英文

### 图片资源规范

- **格式**: 统一 WebP，quality 85
- **插画尺寸**: 宽度 1200px (编年史插画)，宽度 800px (人物立绘)
- **存放路径**: `public/assets/chronicles/` (编年史) 或 `public/assets/characters/` (人物)
- **引用方式**: 页面中直接使用 `<img>` + `loading="lazy"` + `decoding="async"`
- **处理工具**: Sharp (`scripts/convert-to-webp.mjs`)

## 设计 Token

### 核心色彩

| Token | Hex | 语义 |
|-------|-----|------|
| `covenant-void` | `#080C14` | 最深背景 |
| `covenant-abyss` | `#0D1322` | 卡片/面板背景 |
| `covenant-silver-light` | `#D8E0E8` | 主文字色 |
| `covenant-silver` | `#B8C4D4` | 次级文字 |
| `covenant-silver-dark` | `#6B7D9A` | 弱化文字 |
| `covenant-gold` | `#C5A059` | **主强调色** |
| `covenant-ultramarine` | `#1E3A6E` | 基础蓝 |

### 字体

- `font-heading` — 标题 (Cinzel, serif)
- `font-body` — 正文 (Inter, sans-serif)

### 常用动画

| Class | 效果 |
|-------|------|
| `animate-fade-in` | 淡入 0.8s ease-out |
| `animate-slide-up` | 上滑淡入 0.6s ease-out |
| `animate-cross-pulse` | 十字脉冲 3s infinite |
| `animate-shimmer` | 光泽扫过 2s infinite |

## 代码模式

### 添加新人物

```typescript
// 1. 处理立绘 → public/assets/characters/[id].webp (800px, WebP quality 85)
// 2. 在 data/heroic-era.ts 的 CHARACTERS 对应 era 中添加:
{
  id: "character-id",
  name: "中文名（English Name）",
  subtitle: "生卒年：第一纪元公元XX年——第一纪元公元XX年",
  portrait: "/assets/characters/character-id.webp",
  sections: [
    {
      id: "section-1",
      title: "章节标题",
      content: `正文内容。。。\n\n段落分隔。。。`,
    },
    // ... 更多章节
  ],
},
// 无需修改页面组件 — 路由 [era]/[char] 自动处理
```

### 添加编年史章节

```typescript
// 在 data/heroic-era.ts 的 CHRONICLES 对应 era 的 sections 中添加:
{
  id: "section-id",           // kebab-case
  title: "X·章节标题",        // 中文序号 + 标题
  image: "/assets/chronicles/xxx.webp",  // 可选插画
  content: `正文第一段。。。\n\n正文第二段。。。`,
}
// 无需修改组件 — SplitContentView 自动渲染
```

### SplitContentView 交互模式

- 左侧 TOC 使用 `activeId` 状态追踪选中章节
- 点击 TOC 项 → 更新 `activeId` → 仅渲染匹配章节
- 切换时自动 `scrollIntoView({ behavior: "smooth", block: "start" })` 滚动到内容顶部
- 使用 React `key={activeId}` 触发 `animate-fade-in` 重新播放
- 章节插画 (如有) 渲染在 `<h2>` 标题与正文之间，`md:max-w-[50%]` 约束桌面端宽度

### 样式模式

```html
<!-- 玻璃态面板 -->
<div className="border border-covenant-silver/10 bg-covenant-void/80 backdrop-blur-xl">

<!-- 卡片 -->
<div className="rounded-xl bg-covenant-abyss/60 border border-covenant-silver/5">

<!-- 金色强调按钮/链接 -->
<button className="text-covenant-gold bg-covenant-gold/10 border border-covenant-gold/20">

<!-- 渐变分隔线 -->
<div className="h-px bg-gradient-to-r from-covenant-gold/20 via-covenant-gold/10 to-transparent" />
```

## 开发命令

```bash
npm run dev       # 启动开发服务器 (localhost:3000)
npm run build     # 构建 + Cloudflare 打包
npm run lint      # ESLint 检查
npx tsc --noEmit  # TypeScript 类型检查 (提交前必做)
```

## 文档处理流程 (从 .docx 更新数据)

1. 复制 docx 到项目根目录
2. 解压提取 `word/document.xml`
3. 解析 XML: style=2 = 纪元标题, style=3 = 章节标题, style=4 = 子标题/生卒年
4. 按标题层级分组段落
5. 生成 TypeScript sections 数组
6. 替换 `data/heroic-era.ts` 中对应条目

## 提交前检查清单

- [ ] `npx tsc --noEmit` 通过，零错误
- [ ] 新图片已转为 WebP 格式 (quality 85, 插画 1200px / 立绘 800px)
- [ ] 图片路径以 `/assets/...` 开头
- [ ] `ChronicleSection.id` 使用 kebab-case
- [ ] 正文使用 `\\n\\n` 分隔段落
- [ ] 新增的 era/section 在 CHRONICLES 或 CHARACTERS 数组中位置正确
- [ ] 无 console.log、无注释掉的代码块
- [ ] 临时脚本文件 (.ps1, _*.js, .xml) 已清理
