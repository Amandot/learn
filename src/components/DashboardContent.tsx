"use client";

import { Suspense } from "react";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityCard from "@/components/ActivityCard";
import FocusTimeCard from "@/components/FocusTimeCard";
import AchievementsCard from "@/components/AchievementsCard";
import PageHeader from "@/components/PageHeader";
import { Course } from "@/types/course";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface DashboardContentProps {
  courses: Course[];
}

export default function DashboardContent({ courses }: DashboardContentProps) {
  const preview = courses.slice(0, 4);

  return (
    <div className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 max-w-[1400px] mx-auto">
      <Suspense fallback={<div className="h-9 w-52 rounded-xl skeleton-pulse mb-8" />}>
        <PageHeader
          title="Dashboard"
          subtitle="Track your learning progress at a glance"
        />
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 mb-8">
        <HeroCard />
        <ActivityCard />
      </div>

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">Continue Your Courses</h2>
        <Link
          href="/courses"
          className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
        >
          View All
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform"
          />
        </Link>
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card aspect-[4/3] skeleton-pulse" />
            ))}
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {preview.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </Suspense>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5">
        <FocusTimeCard />
        <AchievementsCard />
      </div>
    </div>
  );
}
