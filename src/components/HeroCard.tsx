"use client";

import { motion } from "framer-motion";
import { Flame, Zap } from "lucide-react";

export default function HeroCard() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ scale: 1.01 }}
      className="relative col-span-full glass-card hero-glow hero-gradient p-8 md:p-10 overflow-hidden"
      aria-label="Welcome hero card"
    >
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 md:top-6 md:right-6 opacity-20">
        <Zap size={80} className="text-accent-cyan" />
      </div>

      <div className="relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Welcome Back, Aman{" "}
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="inline-block"
          >
            👋
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex items-center gap-3"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08]">
            <Flame size={18} className="text-orange-400" />
            <span className="text-sm font-semibold">
              <span className="text-orange-400">12</span> Day Learning Streak
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-4 text-sm text-muted-foreground max-w-lg"
        >
          You&apos;re making great progress! Keep up the momentum and reach your learning goals.
        </motion.p>
      </div>
    </motion.section>
  );
}
