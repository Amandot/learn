"use client";

import { useEffect } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

export default function DashboardError({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error("Dashboard error:", error);
  }, [error]);

  return (
    <div className="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8 max-w-7xl mx-auto flex items-center justify-center min-h-[60vh]">
      <div className="glass-card p-8 md:p-12 text-center max-w-md w-full">
        <div className="flex items-center justify-center w-14 h-14 rounded-2xl mx-auto mb-5
          bg-gradient-to-br from-red-500/20 to-orange-500/20
          border border-red-500/20">
          <AlertTriangle size={24} className="text-red-400" />
        </div>

        <h2 className="text-lg font-semibold mb-2">Unable to load courses</h2>
        <p className="text-sm text-muted-foreground mb-6">
          Something went wrong while fetching your data. Please try again later.
        </p>

        <button
          onClick={() => unstable_retry()}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
            bg-accent-purple/20 border border-accent-purple/30
            text-sm font-medium text-accent-purple
            hover:bg-accent-purple/30 hover:border-accent-purple/50
            transition-all duration-200 cursor-pointer"
          aria-label="Retry loading courses"
        >
          <RefreshCw size={14} />
          Try Again
        </button>

        {error.digest && (
          <p className="mt-4 text-[10px] text-muted-foreground font-mono">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
