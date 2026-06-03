"use client";

import {
  BookOpen,
  Code,
  Rocket,
  Sparkles,
  FileText,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  BookOpen,
  Code,
  Rocket,
  Sparkles,
};

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function DynamicIcon({
  name,
  className = "",
  size = 24,
}: DynamicIconProps) {
  const IconComponent = iconMap[name] || FileText;
  return <IconComponent className={className} size={size} />;
}
