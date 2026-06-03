"use client";

import { motion } from "framer-motion";
import DynamicIcon from "./DynamicIcon";
import { Course } from "@/types/course";

interface CourseCardProps {
  course: Course;
  index: number;
}

export default function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.15 + index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        scale: 1.02,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="glass-card p-6 group cursor-pointer
        hover:glow-purple transition-shadow duration-300"
      aria-label={`${course.title} — ${course.progress}% complete`}
    >
      {/* Icon + Title */}
      <div className="flex items-start gap-4 mb-5">
        <div className="flex items-center justify-center w-11 h-11 rounded-xl
          bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20
          border border-white/[0.06]
          group-hover:from-accent-purple/30 group-hover:to-accent-cyan/30
          transition-all duration-300">
          <DynamicIcon
            name={course.icon_name}
            size={20}
            className="text-accent-purple group-hover:text-accent-cyan transition-colors duration-300"
          />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold truncate">{course.title}</h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            {course.progress}% Complete
          </p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full h-2 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{
              delay: 0.5 + index * 0.1,
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-full rounded-full progress-gradient relative"
          >
            {/* Glow on progress bar tip */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full
              bg-accent-cyan blur-sm opacity-60" />
          </motion.div>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-muted-foreground">Progress</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 + index * 0.1 }}
            className="text-[10px] font-medium text-accent-cyan"
          >
            {course.progress}%
          </motion.span>
        </div>
      </div>
    </motion.article>
  );
}
