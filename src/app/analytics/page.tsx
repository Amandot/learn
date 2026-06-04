import { getCourses } from "@/lib/supabase";
import { getCourseStats } from "@/lib/course-utils";
import ActivityCard from "@/components/ActivityCard";
import FocusTimeCard from "@/components/FocusTimeCard";
import DynamicIcon from "@/components/DynamicIcon";
import { TrendingUp, Clock, Target, Award } from "lucide-react";

export default async function AnalyticsPage() {
  const courses = await getCourses();
  const stats = getCourseStats(courses);

  const metrics = [
    {
      icon: TrendingUp,
      label: "Average Progress",
      value: `${stats.avgProgress}%`,
      color: "text-accent-purple",
    },
    {
      icon: Clock,
      label: "Lessons Completed",
      value: `${stats.completedLessons}/${stats.totalLessons}`,
      color: "text-accent-cyan",
    },
    {
      icon: Target,
      label: "Active Courses",
      value: String(stats.inProgress),
      color: "text-accent-blue",
    },
    {
      icon: Award,
      label: "Learning Streak",
      value: "12 days",
      color: "text-green-400",
    },
  ];

  return (
    <div className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 max-w-[1400px] mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold gradient-text">Analytics</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Insights into your learning habits and progress
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.label} className="glass-card p-5">
              <Icon size={20} className={`${m.color} mb-3`} />
              <p className="text-2xl font-bold">{m.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
        <FocusTimeCard />
        <ActivityCard />
      </div>

      <section className="glass-card p-6">
        <h2 className="text-lg font-semibold mb-5">Course Breakdown</h2>
        <div className="space-y-4">
          {courses.map((course) => (
            <div key={course.id} className="flex items-center gap-4">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${course.accent_color}30` }}
              >
                <DynamicIcon
                  name={course.icon_name}
                  size={18}
                  className="text-foreground"
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium truncate">
                    {course.title}
                  </span>
                  <span className="text-xs text-muted-foreground ml-2 shrink-0">
                    {course.progress}%
                  </span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${course.progress}%`,
                      background: `linear-gradient(90deg, ${course.accent_color}, ${course.accent_color}99)`,
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
