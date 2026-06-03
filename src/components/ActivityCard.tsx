"use client";

import { motion } from "framer-motion";
import { BarChart3 } from "lucide-react";
// Deterministic activity data to avoid server/client hydration mismatch
const ACTIVITY_DATA: number[] = [
  3, 4, 2, 0, 4, 3, 1,
  2, 3, 0, 4, 2, 1, 3,
  4, 1, 3, 2, 0, 3, 4,
  1, 2, 4, 3, 0, 2, 1,
  3, 4, 2, 1, 3, 0, 4,
  2, 3, 1, 4, 2, 0, 3,
  4, 1, 2, 3, 4, 0, 2,
];

const levelClass = [
  "activity-empty",
  "activity-low",
  "activity-medium",
  "activity-high",
  "activity-max",
];

const levelLabel = [
  "No activity",
  "Low activity",
  "Medium activity",
  "High activity",
  "Very high activity",
];

export default function ActivityCard() {
  const activity = ACTIVITY_DATA;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="glass-card p-6 hover:glow-cyan transition-shadow duration-300 flex flex-col"
      aria-label="Learning activity heatmap"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-semibold">Learning Activity</h3>
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/[0.04]">
          <BarChart3 size={16} className="text-accent-cyan" />
        </div>
      </div>

      {/* Heatmap Grid */}
      <div
        className="grid gap-[4px] flex-1"
        style={{
          gridTemplateColumns: "repeat(7, 1fr)",
        }}
        role="img"
        aria-label="Activity contribution graph"
      >
        {activity.map((level, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.5 + i * 0.015,
              duration: 0.3,
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            whileHover={{ scale: 1.3, zIndex: 10 }}
            className={`aspect-square rounded-[4px] cursor-pointer transition-colors
              ${levelClass[level]}`}
            title={levelLabel[level]}
            aria-label={`Day ${i + 1}: ${levelLabel[level]}`}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-between mt-4">
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] text-muted-foreground mr-1">Less</span>
          {levelClass.map((cls, i) => (
            <div
              key={i}
              className={`w-[12px] h-[12px] rounded-[3px] ${cls}`}
            />
          ))}
          <span className="text-[10px] text-muted-foreground ml-1">More</span>
        </div>
        <span className="text-xs font-semibold text-accent-cyan">
          324XP this month
        </span>
      </div>
    </motion.section>
  );
}
