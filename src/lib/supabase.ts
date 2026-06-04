import { createClient, SupabaseClient } from "@supabase/supabase-js";
import { Course } from "@/types/course";
import { MOCK_COURSES, normalizeCourse } from "@/lib/course-utils";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
}

export async function getCourses(): Promise<Course[]> {
  if (!supabase) {
    return MOCK_COURSES;
  }

  const { data, error } = await supabase
    .from("courses")
    .select("*")
    .order("created_at", { ascending: true });

  if (error) {
    console.warn("Supabase fetch failed, using mock data:", error.message);
    return MOCK_COURSES;
  }

  if (!data?.length) {
    return MOCK_COURSES;
  }

  return data.map((row) => normalizeCourse(row as Record<string, unknown>));
}
