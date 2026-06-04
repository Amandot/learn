"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  BookOpen,
  BarChart3,
  Settings,
  Menu,
  X,
  CircleHelp,
  Brain,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed top-4 left-4 z-50 p-2 rounded-xl glass-card lg:hidden"
        aria-label="Open navigation menu"
      >
        <Menu size={20} className="text-muted-foreground" />
      </button>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 overlay lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 z-50 h-full
          bg-background/95 backdrop-blur-xl
          border-r border-border
          flex flex-col
          w-[220px]
          transition-transform duration-300 ease-in-out
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0 lg:relative lg:z-auto
        `}
        aria-label="Main navigation"
      >
        {/* Header / Logo */}
        <div className="flex items-center justify-between h-16 px-5">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center">
              <Brain size={18} className="text-white" />
            </div>
            <span className="text-base font-bold tracking-tight">
              <span className="gradient-text">Lumina</span>{" "}
              <span className="text-foreground">Learn</span>
            </span>
          </div>

          {/* Mobile close button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-lg
              hover:bg-white/5 transition-colors"
            aria-label="Close navigation menu"
          >
            <X size={16} className="text-muted-foreground" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-3 py-6 space-y-1" role="navigation">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              pathname.startsWith(item.href + "/") ||
              (item.href === "/dashboard" && pathname === "/");
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`
                  relative flex items-center gap-3 px-3 py-2.5 rounded-xl
                  text-sm font-medium transition-colors duration-200
                  ${
                    isActive
                      ? "sidebar-nav-active"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }
                `}
                aria-current={isActive ? "page" : undefined}
              >
                <span className="relative z-10 flex items-center justify-center w-5 h-5">
                  <Icon size={18} />
                </span>
                <span className="relative z-10 whitespace-nowrap">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="px-4 pb-5 space-y-4">
          {/* Premium Tier Card */}
          <div className="premium-card">
            <p className="text-xs font-semibold text-foreground mb-1">
              Premium Tier
            </p>
            <Link href="/courses" className="premium-btn mt-2 block">
              Explore Courses
            </Link>
          </div>

          {/* Help */}
          <Link
            href="/settings"
            className="flex items-center gap-3 px-3 py-2 text-sm text-muted-foreground
              hover:text-foreground transition-colors rounded-xl hover:bg-white/5"
          >
            <CircleHelp size={18} />
            <span>Help & Settings</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
