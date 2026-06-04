import { Suspense } from "react";
import { getCourses } from "@/lib/supabase";
import { getCourseStats } from "@/lib/course-utils";
import PageHeader from "@/components/PageHeader";
import CoursesGrid from "@/components/CoursesGrid";

export default async function CoursesPage() {
  const courses = await getCourses();
  const stats = getCourseStats(courses);

  return (
    <div className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 max-w-[1400px] mx-auto">
      <Suspense fallback={<div className="h-16 skeleton-pulse rounded-xl mb-8" />}>
        <PageHeader
          title="My Courses"
          subtitle={`${stats.totalCourses} courses · ${stats.completedLessons} lessons completed`}
        />
      </Suspense>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {[
          { label: "Enrolled", value: stats.totalCourses },
          { label: "In Progress", value: stats.inProgress },
          { label: "Completed", value: stats.completed },
          { label: "Avg Progress", value: `${stats.avgProgress}%` },
        ].map((stat) => (
          <div key={stat.label} className="glass-card p-4 text-center">
            <p className="text-2xl font-bold gradient-text">{stat.value}</p>
            <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
          </div>
        ))}
      </div>

      <Suspense
        fallback={
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="glass-card h-64 skeleton-pulse" />
            ))}
          </div>
        }
      >
        <CoursesGrid courses={courses} />
      </Suspense>
    </div>
  );
}
