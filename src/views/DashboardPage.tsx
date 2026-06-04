import { getCourses } from "@/lib/supabase";
import DashboardContent from "@/components/DashboardContent";

export default async function DashboardPage() {
  const courses = await getCourses();
  return <DashboardContent courses={courses} />;
}
