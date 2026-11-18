"use client";

import Link from "next/link";
import { ShieldCheck, ArrowRight, Heart } from "lucide-react";
import { DONATIONS_ENABLED } from "@/lib/constants";

export default function AnnouncementBar() {
  return (
    <aside
      aria-label="Foundation Notice"
      className="relative z-50 bg-[#043526] text-[#FFF9EE] text-xs py-2 px-3 sm:px-6 border-b border-[#064B35]/50"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#064B35] text-[#D6A943] text-[10.5px] font-bold tracking-wide uppercase">
            <ShieldCheck className="w-3 h-3" />
            Humanitarian Foundation
          </span>
          <span className="hidden sm:inline text-[#FFF9EE]/90">
            AasraLife Foundation: Connecting Humanity. Creating Opportunities.
          </span>
          <span className="sm:hidden text-[#FFF9EE]/90">
            Every Life Deserves Dignity.
          </span>
        </div>

        <div className="flex items-center gap-3 ml-auto text-xs">
          <Link
            href="/transparency"
            className="hidden md:inline-flex items-center gap-1 text-[#D6A943] hover:text-[#FFF9EE] transition-colors font-medium"
          >
            Transparency Charter
            <ArrowRight className="w-3 h-3" />
          </Link>
          <span className="hidden md:inline text-white/30">|</span>
          <Link
            href="/donate"
            className="inline-flex items-center gap-1.5 font-medium text-[#FFF9EE] hover:text-[#D6A943] transition-colors"
          >
            <Heart className="w-3.5 h-3.5 text-[#D6A943] fill-[#D6A943]/20" />
            <span>{DONATIONS_ENABLED ? "Donate" : "Donation Info"}</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
