import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "圣约·英雄时代 | Covenant: Age of Heroes",
  description:
    "D&D跑团模组展示 — 探索八大背景，选择你的英雄命运。光辉信仰、黑夜信仰、毁灭信仰、北方信仰、赏金猎人、东洲侠客、精灵、龙巢神殿。",
  keywords: [
    "D&D",
    "跑团",
    "模组",
    "圣约",
    "英雄时代",
    "Covenant",
    "Age of Heroes",
    "TRPG",
  ],
  openGraph: {
    title: "圣约·英雄时代 | Covenant: Age of Heroes",
    description: "探索八大背景，选择你的英雄命运",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" className={`${playfair.variable} ${cormorant.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
