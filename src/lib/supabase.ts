import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Course } from "@/types/course";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

const MOCK_COURSES: Course[] = [
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

export async function getCourses(): Promise<Course[]> {
  if (!supabase) {
    // Return mock data when Supabase is not configured
    return MOCK_COURSES;
  }

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    throw new Error(`Failed to fetch courses: ${error.message}`);
  }

  // Merge database data with mock configuration details (like thumbnails and lessons) to guarantee UI presentation
  return ((data as Course[]) ?? []).map((dbCourse) => {
    const mockMatch = MOCK_COURSES.find(
      (m) => m.title.toLowerCase() === dbCourse.title.toLowerCase()
    );
    return {
      ...mockMatch, // fallback defaults
      ...dbCourse,  // database values (like progress)
      // Ensure the UI fields are populated from mock data if they aren't in the DB
      total_lessons: dbCourse.total_lessons ?? mockMatch?.total_lessons ?? 10,
      completed_lessons: dbCourse.completed_lessons ?? mockMatch?.completed_lessons ?? Math.round((dbCourse.progress / 100) * (mockMatch?.total_lessons ?? 10)),
      thumbnail_url: dbCourse.thumbnail_url ?? mockMatch?.thumbnail_url ?? "/react-patterns.png",
      accent_color: dbCourse.accent_color ?? mockMatch?.accent_color ?? "#8b5cf6",
    } as Course;
  });
}
