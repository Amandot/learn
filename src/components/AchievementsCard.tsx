"use client";

import { motion } from "framer-motion";
import { Zap, Target, Monitor, Lock } from "lucide-react";

const achievements = [
  { icon: Zap, label: "Speed Learner", unlocked: true },
  { icon: Target, label: "Goal Crusher", unlocked: true },
  { icon: Monitor, label: "Code Master", unlocked: true },
  { icon: Lock, label: "Locked", unlocked: false },
  { icon: Lock, label: "Locked", unlocked: false },
  { icon: Lock, label: "Locked", unlocked: false },
];

export default function AchievementsCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="glass-card p-6 flex flex-col"
      aria-label="Achievements"
    >
      {/* Header */}
      <h3 className="text-lg font-semibold mb-5">Achievements</h3>

      {/* Badge Grid */}
      <div className="grid grid-cols-3 gap-4 flex-1 place-items-center">
        {achievements.map((ach, i) => {
          const Icon = ach.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.8 + i * 0.08,
                duration: 0.4,
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}
              whileHover={ach.unlocked ? { scale: 1.1 } : undefined}
              className={`achievement-badge ${
                ach.unlocked ? "unlocked" : "locked"
              }`}
              title={ach.label}
            >
              <Icon
                size={24}
                className={
                  ach.unlocked ? "text-accent-purple" : "text-muted-foreground"
                }
              />
            </motion.div>
          );
        })}
      </div>

      {/* Footer Link */}
      <button className="mt-5 text-xs text-muted-foreground hover:text-foreground
        transition-colors text-center cursor-pointer">
        Show All Rewards
      </button>
    </motion.section>
  );
}
