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
    created_at: new Date().toISOString(),
  },
  {
    id: "2",
    title: "Next.js Mastery",
    progress: 60,
    icon_name: "Rocket",
    created_at: new Date().toISOString(),
  },
  {
    id: "3",
    title: "TypeScript Fundamentals",
    progress: 90,
    icon_name: "Code",
    created_at: new Date().toISOString(),
  },
  {
    id: "4",
    title: "UI Animation Design",
    progress: 45,
    icon_name: "Sparkles",
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

  return (data as Course[]) ?? [];
}
