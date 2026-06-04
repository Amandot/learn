"use client";

import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import CourseCard from "@/components/CourseCard";
import { Course } from "@/types/course";
import { BookOpen } from "lucide-react";

interface CoursesGridProps {
  courses: Course[];
  emptyMessage?: string;
}

export default function CoursesGrid({
  courses,
  emptyMessage = "No courses match your search.",
}: CoursesGridProps) {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") ?? "").toLowerCase().trim();

  const filtered = useMemo(() => {
    if (!query) return courses;
    return courses.filter((c) => c.title.toLowerCase().includes(query));
  }, [courses, query]);

  if (filtered.length === 0) {
    return (
      <div className="glass-card p-12 text-center">
        <BookOpen
          size={40}
          className="mx-auto mb-4 text-muted-foreground opacity-50"
        />
        <p className="text-muted-foreground">{emptyMessage}</p>
        {query && (
          <p className="text-xs text-muted mt-2">
            No results for &quot;{query}&quot;
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
      {filtered.map((course, index) => (
        <CourseCard key={course.id} course={course} index={index} />
      ))}
    </div>
  );
}
