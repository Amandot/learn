export default function DashboardLoading() {
  return (
    <div className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5">
        {/* Hero skeleton */}
        <div className="col-span-full glass-card p-8 md:p-10">
          <div className="h-10 w-72 rounded-lg skeleton-pulse mb-3" />
          <div className="h-9 w-52 rounded-full skeleton-pulse mb-4" />
          <div className="h-4 w-96 rounded skeleton-pulse" />
        </div>

        {/* Course card skeletons */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="glass-card p-6">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-11 h-11 rounded-xl skeleton-pulse" />
              <div className="flex-1">
                <div className="h-4 w-40 rounded skeleton-pulse mb-2" />
                <div className="h-3 w-24 rounded skeleton-pulse" />
              </div>
            </div>
            <div className="h-2 w-full rounded-full skeleton-pulse mb-2" />
            <div className="flex justify-between">
              <div className="h-2 w-12 rounded skeleton-pulse" />
              <div className="h-2 w-8 rounded skeleton-pulse" />
            </div>
          </div>
        ))}

        {/* Activity skeleton */}
        <div className="glass-card p-6">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl skeleton-pulse" />
              <div>
                <div className="h-4 w-16 rounded skeleton-pulse mb-1" />
                <div className="h-2 w-20 rounded skeleton-pulse" />
              </div>
            </div>
            <div className="h-3 w-20 rounded skeleton-pulse" />
          </div>
          <div
            className="grid gap-[3px]"
            style={{
              gridTemplateColumns: "repeat(7, 1fr)",
              gridTemplateRows: "repeat(5, 1fr)",
            }}
          >
            {Array.from({ length: 35 }).map((_, i) => (
              <div
                key={i}
                className="aspect-square rounded-[3px] skeleton-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
