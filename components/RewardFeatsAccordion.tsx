"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FeatNode } from "@/types";
import CrossScarDecoration from "./CrossScarDecoration";

/* ── Triangle fold indicator ── */
function FoldIcon({ open }: { open: boolean }) {
  return (
    <motion.svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      animate={{ rotate: open ? 90 : 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex-none text-covenant-gold/70"
    >
      <path
        d="M4 2L9 6L4 10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
}

/* ── Recursive Accordion Node ── */
function FeatAccordionNode({
  node,
  depth,
}: {
  node: FeatNode;
  depth: number;
}) {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;
  const isLeaf = !hasChildren && !!node.description;

  const bgClass =
    depth === 0
      ? "bg-covenant-abyss/80 border-covenant-gold/15"
      : depth === 1
        ? "bg-covenant-midnight/60 border-covenant-silver/10"
        : "bg-covenant-midnight/40 border-covenant-silver/5";

  return (
    <div className="group">
      {/* ── Clickable header ── */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`
          flex w-full items-center gap-3 rounded-xl border px-5 py-4 text-left
          transition-all duration-300
          ${bgClass}
          ${depth === 0 ? "hover:border-covenant-gold/40" : "hover:border-covenant-gold/20"}
          ${depth === 0 ? "mb-4" : "mb-1.5"}
        `}
      >
        {/* Fold indicator */}
        <span className="flex-none">
          <FoldIcon open={open} />
        </span>

        {/* Title */}
        <div className="flex-1 min-w-0">
          <h3
            className={`
              font-heading tracking-[0.12em]
              ${depth === 0 ? "text-lg text-covenant-gold" : ""}
              ${depth === 1 ? "text-base text-covenant-silver-light" : ""}
              ${depth >= 2 ? "text-sm text-covenant-silver/80" : ""}
            `}
          >
            {node.title}
          </h3>
          {node.subtitle && (
            <p className="mt-0.5 font-body text-xs tracking-wider text-covenant-silver/40">
              {node.subtitle}
            </p>
          )}
        </div>

        {/* Prerequisite badge */}
        {node.prerequisite && (
          <span className="flex-none rounded-full border border-red-500/30 bg-red-500/10 px-2.5 py-0.5 font-body text-xs text-red-400">
            先决：{node.prerequisite}
          </span>
        )}

        {/* Child count badge */}
        {hasChildren && (
          <span className="flex-none rounded-full border border-covenant-silver/10 bg-covenant-midnight px-2 py-0.5 font-heading text-xs text-covenant-silver/40">
            {node.children!.length}
          </span>
        )}
      </button>

      {/* ── Expandable content ── */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className={`${depth === 0 ? "ml-0" : "ml-5"} mb-3`}>
              {/* Description */}
              {node.description && isLeaf && (
                <div className="mb-4 rounded-lg border border-covenant-silver/5 bg-covenant-abyss/40 p-5">
                  <p className="font-body text-sm leading-relaxed text-covenant-silver-dark/80">
                    {node.description}
                  </p>

                  {/* Mechanics stat block */}
                  {node.mechanics && node.mechanics.length > 0 && (
                    <div className="mt-4 grid gap-2 md:grid-cols-2">
                      {node.mechanics.map((m, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between rounded-lg bg-covenant-midnight/50 px-3 py-2"
                        >
                          {m.label && (
                            <span className="font-heading text-xs tracking-wider text-covenant-gold/60">
                              {m.label}
                            </span>
                          )}
                          <span
                            className={`font-body text-sm ${m.label ? "text-covenant-silver-light" : "text-covenant-silver-dark/70"}`}
                          >
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Description for non-leaf nodes */}
              {node.description && !isLeaf && (
                <p className="mb-4 ml-5 font-body text-sm leading-relaxed text-covenant-silver-dark/60">
                  {node.description}
                </p>
              )}

              {/* Leaf node (no children, no explicit description) */}
              {!node.description && !hasChildren && (
                <p className="mb-4 ml-5 font-body text-sm italic text-covenant-silver/40">
                  （待补充详细规则）
                </p>
              )}

              {/* Mechanics for non-leaf nodes */}
              {node.mechanics && node.mechanics.length > 0 && !isLeaf && (
                <div className="mb-4 ml-5 grid gap-2 rounded-lg border border-covenant-silver/5 bg-covenant-abyss/30 p-4 md:grid-cols-2">
                  {node.mechanics.map((m, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between rounded-lg bg-covenant-midnight/50 px-3 py-2"
                    >
                      {m.label && (
                        <span className="font-heading text-xs tracking-wider text-covenant-gold/60">
                          {m.label}
                        </span>
                      )}
                      <span className="font-body text-sm text-covenant-silver-light">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Recursive children */}
              {hasChildren &&
                node.children!.map((child) => (
                  <FeatAccordionNode
                    key={child.id}
                    node={child}
                    depth={depth + 1}
                  />
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Top-level container ── */
interface RewardFeatsAccordionProps {
  feats: FeatNode[];
}

export default function RewardFeatsAccordion({
  feats,
}: RewardFeatsAccordionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mx-auto max-w-4xl"
    >
      {/* Section header */}
      <div className="mb-8 text-center">
        <CrossScarDecoration
          variant="ornament"
          className="mx-auto mb-3 h-8 w-8"
        />
        <h2 className="font-heading text-2xl tracking-[0.2em] text-covenant-silver-light">
          奖励专长
        </h2>
        <p className="mt-2 font-body text-sm tracking-[0.2em] text-covenant-gold/50">
          REWARD FEATS
        </p>
        <p className="mt-4 font-body text-sm leading-relaxed text-covenant-silver-dark/60">
          若你满足一些要求或完成特殊事件，DM 会允许你选择以下内容之一作为奖励专长（不占用专长位）。
          如果没有合适的奖励专长，你可以选择任意一种属性 +2 或任意两种属性 +1（上限20）。
        </p>
      </div>

      {/* Feat accordion tree */}
      <div>
        {feats.map((feat) => (
          <FeatAccordionNode key={feat.id} node={feat} depth={0} />
        ))}
      </div>

      {/* Bottom ornament */}
      <div className="mt-8 flex justify-center">
        <CrossScarDecoration variant="ornament" className="h-6 w-6 opacity-30" />
      </div>
    </motion.div>
  );
}
