import { getCourses } from "@/lib/supabase";
import BentoGrid from "@/components/BentoGrid";
import HeroCard from "@/components/HeroCard";
import CourseCard from "@/components/CourseCard";
import ActivityCard from "@/components/ActivityCard";

export default async function Dashboard() {
  const courses = await getCourses();

  return (
    <div className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 max-w-7xl mx-auto">
      <BentoGrid>
        {/* Hero Card — spans full width */}
        <HeroCard />

        {/* Course Cards */}
        {courses.map((course, index) => (
          <CourseCard key={course.id} course={course} index={index} />
        ))}

        {/* Activity Card */}
        <ActivityCard />
      </BentoGrid>
    </div>
  );
}
