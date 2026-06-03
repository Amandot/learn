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
  ChevronLeft,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/courses", label: "Courses", icon: BookOpen },
  { href: "/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/settings", label: "Settings", icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
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
      <AnimatePresence>
        {(mobileOpen || true) && (
          <motion.aside
            className={`
              fixed top-0 left-0 z-50 h-full
              bg-background/80 backdrop-blur-xl
              border-r border-border
              flex flex-col
              sidebar-transition
              ${collapsed ? "w-[72px]" : "w-[240px]"}
              ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
              lg:translate-x-0 lg:relative lg:z-auto
            `}
            aria-label="Main navigation"
          >
            {/* Header */}
            <div className="flex items-center justify-between h-16 px-4 border-b border-border">
              <AnimatePresence mode="wait">
                {!collapsed && (
                  <motion.span
                    key="logo-text"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.15 }}
                    className="text-sm font-semibold tracking-tight gradient-text"
                  >
                    LearnDash
                  </motion.span>
                )}
              </AnimatePresence>

              {/* Desktop collapse toggle */}
              <button
                onClick={() => setCollapsed(!collapsed)}
                className="hidden lg:flex items-center justify-center w-8 h-8 rounded-lg
                  hover:bg-white/5 transition-colors"
                aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
              >
                <motion.div
                  animate={{ rotate: collapsed ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <ChevronLeft size={16} className="text-muted-foreground" />
                </motion.div>
              </button>

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
            <nav className="flex-1 px-3 py-4 space-y-1" role="navigation">
              {navItems.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                const Icon = item.icon;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      relative flex items-center gap-3 px-3 py-2.5 rounded-xl
                      text-sm font-medium transition-colors duration-200
                      ${isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                      }
                    `}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-xl bg-white/[0.06] border border-white/[0.08]"
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center w-5 h-5">
                      <Icon size={18} />
                    </span>
                    <AnimatePresence mode="wait">
                      {!collapsed && (
                        <motion.span
                          key={item.label}
                          initial={{ opacity: 0, width: 0 }}
                          animate={{ opacity: 1, width: "auto" }}
                          exit={{ opacity: 0, width: 0 }}
                          transition={{ duration: 0.15 }}
                          className="relative z-10 whitespace-nowrap overflow-hidden"
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </Link>
                );
              })}
            </nav>

            {/* Footer */}
            <div className="px-3 py-4 border-t border-border">
              <div className="flex items-center gap-3 px-3 py-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center text-xs font-bold">
                  A
                </div>
                <AnimatePresence mode="wait">
                  {!collapsed && (
                    <motion.div
                      initial={{ opacity: 0, width: 0 }}
                      animate={{ opacity: 1, width: "auto" }}
                      exit={{ opacity: 0, width: 0 }}
                      transition={{ duration: 0.15 }}
                      className="overflow-hidden whitespace-nowrap"
                    >
                      <p className="text-sm font-medium">Aman</p>
                      <p className="text-xs text-muted-foreground">Student</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
