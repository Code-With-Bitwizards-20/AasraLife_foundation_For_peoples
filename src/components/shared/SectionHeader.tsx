import React from "react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlight?: string;
  italicWord?: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  highlight,
  italicWord,
  description,
  align = "center",
  theme = "light",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  const isDark = theme === "dark";

  return (
    <div
      className={`space-y-4 max-w-3xl ${
        isCenter ? "mx-auto text-center" : "text-left"
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase ${
            isDark
              ? "bg-white/10 text-[#D6A943] border border-[#D6A943]/30 backdrop-blur-md"
              : "bg-[#EAF3ED] text-[#064B35] border border-[#064B35]/15"
          }`}
        >
          {badgeIcon && <span className="text-[#D6A943]">{badgeIcon}</span>}
          <span>{badge}</span>
        </div>
      )}

      <h2
        className={`font-heading font-extrabold tracking-tight ${
          isDark ? "text-white" : "text-[#172B26]"
        }`}
      >
        {title}{" "}
        {highlight && (
          <span className={isDark ? "text-[#E5B854]" : "text-[#064B35]"}>
            {highlight}{" "}
          </span>
        )}
        {italicWord && (
          <span className="font-editorial italic font-normal text-[#D6A943]">
            {italicWord}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            isDark ? "text-[#FFF9EE]/85" : "text-[#3D5A50]"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
