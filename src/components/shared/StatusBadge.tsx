import React from "react";
import { Sparkles, Clock, CheckCircle2 } from "lucide-react";

interface StatusBadgeProps {
  status: "development" | "verified" | "active";
  customText?: string;
  className?: string;
}

export default function StatusBadge({
  status,
  customText,
  className = "",
}: StatusBadgeProps) {
  if (status === "development") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-amber-500/10 text-amber-900 border border-amber-600/25 ${className}`}
      >
        <Clock className="w-3 h-3 text-amber-700" />
        <span>
          {customText || "In Foundational Development — Verified Transparency"}
        </span>
      </span>
    );
  }

  if (status === "verified") {
    return (
      <span
        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-emerald-500/10 text-emerald-900 border border-emerald-600/25 ${className}`}
      >
        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
        <span>{customText || "Documented & Verified Standard"}</span>
      </span>
    );
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-[#EAF3ED] text-[#064B35] border border-[#064B35]/20 ${className}`}
    >
      <Sparkles className="w-3 h-3 text-[#D6A943]" />
      <span>{customText || "Active Standard"}</span>
    </span>
  );
}
