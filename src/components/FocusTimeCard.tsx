"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const DATA_WEEK = [60, 75, 40, 85, 95, 30, 55];
const DATA_ACTIVE = [45, 30, 60, 90, 50, 25, 40];

export default function FocusTimeCard() {
  const [activeTab, setActiveTab] = useState<"week" | "active">("active");
  
  const focusData = activeTab === "week" ? DATA_WEEK : DATA_ACTIVE;
  const maxVal = Math.max(...focusData);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className="glass-card p-6 flex flex-col"
      aria-label="Focus time chart"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold">Focus Time</h3>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab("week")}
            className={`pill-toggle ${activeTab === "week" ? "active" : ""}`}
          >
            This Week
          </button>
          <button
            onClick={() => setActiveTab("active")}
            className={`pill-toggle ${activeTab === "active" ? "active" : ""}`}
          >
            Active
          </button>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex-1 flex items-end gap-3 h-[140px]">
        {focusData.map((val, i) => {
          const barHeight = Math.max(12, (val / maxVal) * 120);
          const isToday = i === 3;

          return (
            <div key={i} className="flex-1 flex items-end h-full">
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: barHeight }}
                transition={{
                  delay: 0.7 + i * 0.08,
                  duration: 0.8,
                  ease: [0.34, 1.56, 0.64, 1],
                }}
                className="w-full focus-bar"
                style={{
                  opacity: isToday ? 1 : 0.6,
                }}
              />
            </div>
          );
        })}
      </div>

      {/* Day Labels */}
      <div className="flex gap-3 mt-3">
        {days.map((day, i) => {
          const isToday = i === 3;
          return (
            <span
              key={day}
              className={`flex-1 text-center text-xs ${
                isToday
                  ? "text-foreground font-semibold"
                  : "text-muted-foreground"
              }`}
            >
              {day}
            </span>
          );
        })}
      </div>
    </motion.section>
  );
}
