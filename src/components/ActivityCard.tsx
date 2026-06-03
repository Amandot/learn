"use client";

import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import { useMemo } from "react";

function generateMockActivity(): number[] {
  const data: number[] = [];
  for (let i = 0; i < 35; i++) {
    const rand = Math.random();
    if (rand < 0.25) data.push(0);
    else if (rand < 0.45) data.push(1);
    else if (rand < 0.65) data.push(2);
    else if (rand < 0.85) data.push(3);
    else data.push(4);
  }
  return data;
}

const levelClass = [
  "activity-empty",
  "activity-low",
  "activity-medium",
  "activity-high",
  "activity-max",
];

const levelLabel = ["No activity", "Low activity", "Medium activity", "High activity", "Very high activity"];

export default function ActivityCard() {
  const activity = useMemo(() => generateMockActivity(), []);

  const totalActive = activity.filter((v) => v > 0).length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="glass-card p-6 hover:glow-cyan transition-shadow duration-300"
      aria-label="Activity overview for the last 30 days"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center justify-center w-9 h-9 rounded-xl
            bg-gradient-to-br from-accent-cyan/20 to-accent-blue/20
            border border-white/[0.06]">
            <Activity size={16} className="text-accent-cyan" />
          </div>
          <div>
            <h3 className="text-sm font-semibold">Activity</h3>
            <p className="text-[10px] text-muted-foreground">Last 30 days</p>
          </div>
        </div>
        <span className="text-xs font-medium text-accent-cyan">
          {totalActive} active days
        </span>
      </div>

      {/* Contribution Graph */}
      <div
        className="grid gap-[3px]"
        style={{
          gridTemplateColumns: "repeat(7, 1fr)",
          gridTemplateRows: "repeat(5, 1fr)",
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
              delay: 0.8 + i * 0.02,
              duration: 0.3,
              type: "spring",
              stiffness: 400,
              damping: 25,
            }}
            whileHover={{ scale: 1.4, zIndex: 10 }}
            className={`aspect-square rounded-[3px] cursor-pointer transition-colors
              ${levelClass[level]}`}
            title={levelLabel[level]}
            aria-label={`Day ${i + 1}: ${levelLabel[level]}`}
          />
        ))}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-end gap-1.5 mt-3">
        <span className="text-[9px] text-muted-foreground mr-1">Less</span>
        {levelClass.map((cls, i) => (
          <div
            key={i}
            className={`w-[10px] h-[10px] rounded-[2px] ${cls}`}
          />
        ))}
        <span className="text-[9px] text-muted-foreground ml-1">More</span>
      </div>
    </motion.section>
  );
}
