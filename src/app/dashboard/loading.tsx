export default function DashboardLoading() {
  return (
    <div className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 max-w-[1400px] mx-auto">
      {/* Top Bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="h-8 w-36 rounded-lg skeleton-pulse" />
        <div className="h-9 w-52 rounded-xl skeleton-pulse" />
      </div>

      {/* Row 1: Hero + Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 mb-8">
        {/* Hero skeleton */}
        <div className="glass-card p-8 md:p-10">
          <div className="h-6 w-48 rounded-full skeleton-pulse mb-5" />
          <div className="h-10 w-72 rounded-lg skeleton-pulse mb-3" />
          <div className="h-4 w-96 rounded skeleton-pulse mb-6" />
          <div className="flex gap-3">
            <div className="h-10 w-44 rounded-xl skeleton-pulse" />
            <div className="h-10 w-36 rounded-xl skeleton-pulse" />
          </div>
        </div>
        {/* Activity skeleton */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-5 w-32 rounded skeleton-pulse" />
            <div className="w-8 h-8 rounded-lg skeleton-pulse" />
          </div>
          <div
            className="grid gap-[4px]"
            style={{
              gridTemplateColumns: "repeat(7, 1fr)",
            }}
          >
            {Array.from({ length: 49 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-[4px] skeleton-pulse"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Section header */}
      <div className="flex items-center justify-between mb-5">
        <div className="h-6 w-48 rounded skeleton-pulse" />
        <div className="h-4 w-16 rounded skeleton-pulse" />
      </div>

      {/* Row 2: Course card skeletons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-card overflow-hidden">
            <div className="aspect-[16/10] skeleton-pulse" />
            <div className="p-4 pt-6">
              <div className="h-4 w-40 rounded skeleton-pulse mb-3" />
              <div className="flex justify-between mb-3">
                <div className="h-3 w-24 rounded skeleton-pulse" />
                <div className="h-3 w-20 rounded skeleton-pulse" />
              </div>
              <div className="h-1.5 w-full rounded-full skeleton-pulse" />
            </div>
          </div>
        ))}
      </div>

      {/* Row 3: Focus Time + Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-5">
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="h-6 w-28 rounded skeleton-pulse" />
            <div className="flex gap-2">
              <div className="h-8 w-20 rounded-full skeleton-pulse" />
              <div className="h-8 w-16 rounded-full skeleton-pulse" />
            </div>
          </div>
          <div className="flex items-end gap-3 min-h-[140px]">
            {[45, 65, 35, 80, 55, 40, 70].map((h, i) => (
              <div key={i} className="flex-1 skeleton-pulse rounded-md" style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
        <div className="glass-card p-6">
          <div className="h-6 w-32 rounded skeleton-pulse mb-5" />
          <div className="grid grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="w-16 h-16 rounded-2xl skeleton-pulse mx-auto" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
