"use client";

import { useState, useCallback, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import { gameRules, specialRulesSummary, factions } from "@/data/game-rules";
import { backgrounds } from "@/data/backgrounds";
import { rewardFeatsTree } from "@/data/reward-feats-tree";
import { backgroundDetailCards } from "@/data/background-detail-cards";
import { BACKGROUND_IMAGE_URLS, getBlurDataUrl, GameRule, Faction } from "@/types";
import CrossScarDecoration from "./CrossScarDecoration";
import BackgroundSlice from "./BackgroundSlice";
import SkeletonPanel from "./SkeletonPanel";

const BackgroundDetailPanel = dynamic(() => import("./BackgroundDetailPanel"), {
  loading: () => <SkeletonPanel />,
});

const RewardFeatsAccordion = dynamic(() => import("./RewardFeatsAccordion"), {
  loading: () => (
    <div className="mx-auto max-w-3xl space-y-3 px-6 py-12">
      {Array.from({ length: 4 }).map((_, i) => (
        <div
          key={i}
          className="h-14 animate-pulse rounded-xl border border-covenant-gold/10 bg-covenant-abyss/50"
        />
      ))}
    </div>
  ),
});

type RulesTab = "rules" | "backgrounds" | "factions" | "feats";

interface TabDef {
  id: RulesTab;
  label: string;
}

const TABS: TabDef[] = [
  { id: "rules", label: "游戏规则" },
  { id: "backgrounds", label: "额外背景" },
  { id: "factions", label: "势力划分" },
  { id: "feats", label: "奖励专长" },
];

export default function RulesSection() {
  const [activeTab, setActiveTab] = useState<RulesTab>("rules");
  const [selectedBgId, setSelectedBgId] = useState<string | null>(null);
  const [hoveredBgId, setHoveredBgId] = useState<string | null>(null);
  const [imgError, setImgError] = useState(false);
  const [detailBgId, setDetailBgId] = useState<string | null>(null);

  const handleBgSelect = useCallback((id: string) => {
    setSelectedBgId((prev) => (prev === id ? null : id));
    setImgError(false);
  }, []);

  const handleHover = useCallback((id: string) => {
    setHoveredBgId(id);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredBgId(null);
  }, []);

  const handleOpenDetail = useCallback((id: string) => {
    setDetailBgId(id);
  }, []);

  const handleCloseDetail = useCallback(() => {
    setDetailBgId(null);
  }, []);

  const detailCard = detailBgId
    ? backgroundDetailCards.find((d) => d.id === detailBgId) ?? null
    : null;
  const detailBg = detailBgId
    ? backgrounds.find((b) => b.id === detailBgId) ?? null
    : null;

  const selectedBg = selectedBgId
    ? backgrounds.find((b) => b.id === selectedBgId) ?? null
    : null;
  const bgUrl =
    selectedBg && BACKGROUND_IMAGE_URLS[selectedBg.id]
      ? BACKGROUND_IMAGE_URLS[selectedBg.id]
      : null;

  // Determine if bg image should zoom
  const isBgZoomed = hoveredBgId !== null;

  return (
    <section
      id="section-rules"
      className="relative min-h-screen"
    >
      {/* Dynamic background image — lightly overlaid so global bg breathes through */}
      <AnimatePresence mode="wait">
        {bgUrl && activeTab === "backgrounds" && (
          <motion.div
            key={selectedBg!.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-0"
          >
            {!imgError && (
              <motion.div
                className="absolute inset-0"
                animate={{ scale: isBgZoomed ? 1.05 : 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Image
                  src={bgUrl}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={selectedBg ? getBlurDataUrl(selectedBg.id) : undefined}
                  priority
                  onError={() => setImgError(true)}
                />
              </motion.div>
            )}
            <div className="absolute inset-0 bg-covenant-void/60 backdrop-blur-[1px]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10">
      {/* ── Section Header ── */}
      <div className="mx-auto max-w-7xl px-6 pb-6 pt-24 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <CrossScarDecoration variant="ornament" className="mx-auto mb-4 h-10 w-10" />
          <h2 className="font-heading text-3xl tracking-[0.2em] text-covenant-silver-light md:text-4xl">
            圣约 D&D 模组
          </h2>
          <p className="mt-2 font-body text-sm tracking-[0.3em] text-covenant-gold/50">
            RULES &amp; MECHANICS
          </p>
        </motion.div>

        {/* ── Tab Bar ── */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full border border-covenant-silver/10 bg-covenant-abyss/60 p-1 backdrop-blur-sm">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    relative rounded-full px-4 py-2 text-sm font-heading tracking-[0.15em] transition-all
                    ${
                      isActive
                        ? "text-covenant-silver-light"
                        : "text-covenant-silver/40 hover:text-covenant-silver/60"
                    }
                  `}
                >
                  {isActive && (
                    <motion.div
                      layoutId="rules-tab-bg"
                      className="absolute inset-1 rounded-full border border-covenant-gold/15 bg-covenant-gold/8"
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Tab Content ── */}
      <div className="mx-auto max-w-[1600px] px-6 pb-32">
        <AnimatePresence mode="wait">
          {activeTab === "rules" && (
            <RulesTabContent key="rules" />
          )}
          {activeTab === "backgrounds" && (
            <BackgroundsTabContent
              key="backgrounds"
              selectedBgId={selectedBgId}
              onSelectBg={handleBgSelect}
              onHoverBg={handleHover}
              onLeaveBg={handleLeave}
              onOpenDetail={handleOpenDetail}
            />
          )}
          {activeTab === "factions" && (
            <FactionsTabContent key="factions" />
          )}
          {activeTab === "feats" && (
            <RewardFeatsAccordion key="feats" feats={rewardFeatsTree} />
          )}
        </AnimatePresence>
      </div>

      </div>{/* close relative z-10 */}

      {/* ── Global Detail Overlay (decoupled from slice DOM) ── */}
      <AnimatePresence>
        {detailCard && detailBg && (
          <BackgroundDetailPanel
            detail={detailCard}
            bgId={detailBg.id}
            accentClass={detailBg.textColor}
            onClose={handleCloseDetail}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

/* ──────────── Tab Content Components ──────────── */

function TabContentWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

/* ── Rules Tab ── */
function RulesTabContent() {
  return (
    <TabContentWrapper>
      <div className="mb-8 text-center">
        <h3 className="font-heading text-xl tracking-[0.15em] text-covenant-silver">
          {specialRulesSummary.title}
        </h3>
        <p className="mt-2 font-body text-sm text-covenant-silver-dark">
          {specialRulesSummary.description}
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {gameRules.map((rule, i) => (
          <RuleCard key={rule.id} rule={rule} index={i} />
        ))}
      </div>
    </TabContentWrapper>
  );
}

function RuleCard({ rule, index }: { rule: GameRule; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group rounded-xl border border-covenant-silver/5 bg-covenant-abyss/60 p-6 backdrop-blur-sm transition-all hover:border-covenant-gold/15"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-covenant-silver/10 bg-covenant-midnight text-lg">
          {rule.icon}
        </span>
        <h4 className="font-heading text-base tracking-[0.12em] text-covenant-silver-light">
          {rule.title}
        </h4>
      </div>
      <p className="font-body text-sm leading-relaxed text-covenant-silver-dark">
        {rule.description}
      </p>
      {rule.detail && (
        <div className="mt-3 border-t border-covenant-silver/5 pt-3">
          <p className="font-body text-xs leading-relaxed text-covenant-silver/40 italic">
            {rule.detail}
          </p>
        </div>
      )}
    </motion.div>
  );
}

/* ── Backgrounds Tab ── */
function BackgroundsTabContent({
  selectedBgId,
  onSelectBg,
  onHoverBg,
  onLeaveBg,
  onOpenDetail,
}: {
  selectedBgId: string | null;
  onSelectBg: (id: string) => void;
  onHoverBg: (id: string) => void;
  onLeaveBg: () => void;
  onOpenDetail: (id: string) => void;
}) {
  return (
    <TabContentWrapper>
      <div className="overflow-hidden rounded-xl border border-covenant-silver/5">
        <div className="flex h-[73vh] md:h-[85vh] md:flex-row max-md:flex-col">
          {backgrounds.map((bg, i) => (
            <BackgroundSlice
              key={bg.id}
              background={bg}
              isSelected={selectedBgId === bg.id}
              isAnySelected={selectedBgId !== null}
              onSelect={onSelectBg}
              onHover={onHoverBg}
              onLeave={onLeaveBg}
              onOpenDetail={onOpenDetail}
              index={i + 1}
            />
          ))}
        </div>
      </div>
    </TabContentWrapper>
  );
}

/* ── Factions Tab ── */
function FactionsTabContent() {
  return (
    <TabContentWrapper>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {factions.map((faction, i) => (
          <FactionCard key={faction.id} faction={faction} index={i} />
        ))}
      </div>
    </TabContentWrapper>
  );
}

function FactionCard({ faction, index }: { faction: Faction; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="group rounded-xl border border-covenant-silver/5 bg-covenant-abyss/60 p-6 backdrop-blur-sm transition-all hover:border-covenant-gold/15"
    >
      {/* Region badge */}
      <div className="mb-3 flex items-center gap-3">
        <span
          className={`
            rounded-full border px-3 py-1 font-heading text-xs tracking-[0.15em]
            border-covenant-silver/10 text-covenant-silver/60
          `}
        >
          {faction.region}
        </span>
      </div>
      <h4 className="font-heading text-lg tracking-[0.12em] text-covenant-silver-light">
        {faction.name}
      </h4>
      <p className="mt-3 font-body text-sm leading-relaxed text-covenant-silver-dark">
        {faction.description}
      </p>
      <ul className="mt-4 space-y-1.5">
        {faction.traits.map((trait) => (
          <li
            key={trait}
            className="flex items-center gap-2 font-body text-xs text-covenant-silver/50"
          >
            <span className="h-1 w-1 rounded-full bg-covenant-gold/40" />
            {trait}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

