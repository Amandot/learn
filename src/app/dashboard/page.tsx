import { getCourses } from "@/lib/supabase";
import HeroCard from "@/components/HeroCard";
import ActivityCard from "@/components/ActivityCard";
import CourseCard from "@/components/CourseCard";
import FocusTimeCard from "@/components/FocusTimeCard";
import AchievementsCard from "@/components/AchievementsCard";
import SearchBar from "@/components/SearchBar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default async function Dashboard() {
  const courses = await getCourses();

  return (
    <div className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 max-w-[1400px] mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold gradient-text">Dashboard</h1>
        <SearchBar />
      </div>

      {/* Row 1: Hero + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 mb-8">
        <HeroCard />
        <ActivityCard />
      </div>

      {/* Section: Continue Your Courses */}
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

      {/* Row 2: Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}
      </div>

      {/* Row 3: Focus Time + Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5">
        <FocusTimeCard />
        <AchievementsCard />
      </div>
    </div>
  );
}
