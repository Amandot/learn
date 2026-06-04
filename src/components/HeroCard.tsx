"use client";

import { motion } from "framer-motion";
import { Flame, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useProfileName } from "@/hooks/useProfileName";

export default function HeroCard() {
  const name = useProfileName();
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative glass-card hero-glow hero-gradient p-8 md:p-10 overflow-hidden"
      aria-label="Welcome hero card"
    >
      {/* Decorative stars */}
      <div className="absolute top-6 right-8 md:top-8 md:right-12 opacity-30 pointer-events-none">
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 10L65 50L100 55L65 62L60 100L55 62L20 55L55 50L60 10Z"
            fill="rgba(139, 92, 246, 0.4)"
          />
          <path
            d="M90 25L93 40L105 42L93 45L90 58L87 45L75 42L87 40L90 25Z"
            fill="rgba(6, 182, 212, 0.3)"
          />
          <path
            d="M35 70L37 80L45 81L37 83L35 92L33 83L25 81L33 80L35 70Z"
            fill="rgba(255, 255, 255, 0.15)"
          />
        </svg>
      </div>

      <div className="relative z-10">
        {/* Streak Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-5"
        >
          <span className="streak-badge">
            <Flame size={14} />
            12 DAY LEARNING STREAK
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-[42px] font-bold mb-3 leading-tight"
        >
          Welcome Back, {name}{" "}
          <motion.span
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="inline-block"
          >
            👋
          </motion.span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-sm text-muted-foreground max-w-lg mb-6 leading-relaxed"
        >
          You&apos;re making incredible progress! You&apos;ve completed 4
          lessons this week. Keep the momentum going to unlock your next
          certification.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex items-center gap-3 flex-wrap"
        >
          <Link href="/courses" className="btn-primary">
            Continue Learning
            <ArrowRight size={16} />
          </Link>
          <Link href="/analytics" className="btn-secondary">
            View Roadmap
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
}
