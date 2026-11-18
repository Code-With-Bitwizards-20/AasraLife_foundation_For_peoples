import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "gold";
  hoverEffect?: boolean;
  className?: string;
}

export default function GlassCard({
  children,
  variant = "light",
  hoverEffect = true,
  className = "",
}: GlassCardProps) {
  let styleClasses = "";

  if (variant === "light") {
    styleClasses =
      "bg-white/90 backdrop-blur-md border border-[#064B35]/12 shadow-sm shadow-[#064B35]/5";
  } else if (variant === "dark") {
    styleClasses =
      "bg-[#043526]/90 backdrop-blur-md border border-[#D6A943]/25 text-[#FFF9EE] shadow-xl shadow-black/20";
  } else if (variant === "gold") {
    styleClasses =
      "bg-gradient-to-br from-[#FFFDF8] to-[#F7E7C4]/40 backdrop-blur-md border border-[#D6A943]/40 shadow-md";
  }

  const hoverClasses = hoverEffect
    ? "transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#D6A943]/40"
    : "";

  return (
    <div className={`rounded-3xl p-6 sm:p-8 ${styleClasses} ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
}
