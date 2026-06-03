"use client";

import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="relative">
      <Search
        size={16}
        className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
      />
      <input
        type="text"
        placeholder="Search courses..."
        className="search-input"
        aria-label="Search courses"
      />
    </div>
  );
}
