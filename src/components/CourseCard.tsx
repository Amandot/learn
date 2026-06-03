"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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
        delay: 0.2 + index * 0.1,
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      whileHover={{
        y: -4,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      }}
      className="glass-card group cursor-pointer overflow-hidden
        hover:glow-purple transition-shadow duration-300"
      aria-label={`${course.title} — ${course.progress}% complete`}
    >
      {/* Thumbnail */}
      <div className="course-thumbnail relative">
        {course.thumbnail_url ? (
          <Image
            src={course.thumbnail_url}
            alt={course.title}
            fill
            className="object-cover transition-transform duration-400 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-accent-purple/20 to-accent-cyan/20" />
        )}

        {/* Icon Badge */}
        <div
          className="course-icon-badge"
          style={{ backgroundColor: course.accent_color }}
        >
          <DynamicIcon
            name={course.icon_name}
            size={16}
            className="text-white"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-4 pt-6">
        <h3 className="text-sm font-semibold mb-2 truncate">{course.title}</h3>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <span>{course.progress}% Complete</span>
          <span>
            {course.completed_lessons}/{course.total_lessons} Lessons
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${course.progress}%` }}
            transition={{
              delay: 0.6 + index * 0.1,
              duration: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="h-full rounded-full relative"
            style={{
              background: `linear-gradient(90deg, ${course.accent_color}, ${course.accent_color}dd)`,
              boxShadow: `0 0 8px ${course.accent_color}40`,
            }}
          />
        </div>
      </div>
    </motion.article>
  );
}
