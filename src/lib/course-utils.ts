import { Course } from "@/types/course";

const ICON_META: Record<
  string,
  { total_lessons: number; accent_color: string; thumbnail_url: string }
> = {
  BookOpen: {
    total_lessons: 16,
    accent_color: "#8b5cf6",
    thumbnail_url: "/react-patterns.png",
  },
  Rocket: {
    total_lessons: 14,
    accent_color: "#3b82f6",
    thumbnail_url: "/nextjs-mastery.png",
  },
  Code: {
    total_lessons: 20,
    accent_color: "#06b6d4",
    thumbnail_url: "/typescript-fundamentals.png",
  },
  Sparkles: {
    total_lessons: 11,
    accent_color: "#ef4444",
    thumbnail_url: "/animation-design.png",
  },
};

export const MOCK_COURSES: Course[] = [
  {
    id: "1",
    title: "Advanced React Patterns",
    progress: 75,
    icon_name: "BookOpen",
    total_lessons: 16,
    completed_lessons: 12,
    thumbnail_url: "/react-patterns.png",
    accent_color: "#8b5cf6",
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Next.js Mastery",
    progress: 60,
    icon_name: "Rocket",
    total_lessons: 14,
    completed_lessons: 8,
    thumbnail_url: "/nextjs-mastery.png",
    accent_color: "#3b82f6",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "TypeScript Fundamentals",
    progress: 90,
    icon_name: "Code",
    total_lessons: 20,
    completed_lessons: 18,
    thumbnail_url: "/typescript-fundamentals.png",
    accent_color: "#06b6d4",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "UI Animation Design",
    progress: 45,
    icon_name: "Sparkles",
    total_lessons: 11,
    completed_lessons: 5,
    thumbnail_url: "/animation-design.png",
    accent_color: "#ef4444",
    created_at: new Date().toISOString(),
  },
];

export function normalizeCourse(row: Record<string, unknown>): Course {
  const iconName = String(row.icon_name ?? "BookOpen");
  const meta = ICON_META[iconName] ?? {
    total_lessons: 10,
    accent_color: "#8b5cf6",
    thumbnail_url: "",
  };
  const progress = Number(row.progress ?? 0);
  const totalLessons = Number(row.total_lessons ?? meta.total_lessons);
  const completedLessons = Number(
    row.completed_lessons ?? Math.round((totalLessons * progress) / 100)
  );

  return {
    id: String(row.id),
    title: String(row.title ?? "Untitled Course"),
    progress,
    icon_name: iconName,
    total_lessons: totalLessons,
    completed_lessons: completedLessons,
    thumbnail_url: String(row.thumbnail_url ?? meta.thumbnail_url),
    accent_color: String(row.accent_color ?? meta.accent_color),
    created_at: String(row.created_at ?? new Date().toISOString()),
  };
}

export function getCourseStats(courses: Course[]) {
  const totalLessons = courses.reduce((sum, c) => sum + c.total_lessons, 0);
  const completedLessons = courses.reduce(
    (sum, c) => sum + c.completed_lessons,
    0
  );
  const avgProgress =
    courses.length > 0
      ? Math.round(
          courses.reduce((sum, c) => sum + c.progress, 0) / courses.length
        )
      : 0;

  return {
    totalCourses: courses.length,
    totalLessons,
    completedLessons,
    avgProgress,
    inProgress: courses.filter((c) => c.progress > 0 && c.progress < 100)
      .length,
    completed: courses.filter((c) => c.progress >= 100).length,
  };
}
