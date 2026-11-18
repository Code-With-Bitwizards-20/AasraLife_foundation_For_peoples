import Link from "next/link";
import React from "react";
import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface PageHeroProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  highlight?: string;
  italicWord?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  actions?: React.ReactNode;
}

export default function PageHero({
  badge,
  badgeIcon,
  title,
  highlight,
  italicWord,
  description,
  breadcrumbs,
  actions,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF8] via-[#EAF3ED]/50 to-[#FFF9EE] pt-10 pb-14 sm:pt-16 sm:pb-20 border-b border-[#064B35]/10">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 -mt-20 w-80 h-80 rounded-full bg-[#EAF3ED] blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-10 -mb-20 w-72 h-72 rounded-full bg-[#F7E7C4] blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-6">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-xs text-[#4A5B53] flex-wrap">
          <Link
            href="/"
            className="hover:text-[#064B35] font-medium transition-colors"
          >
            Home
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3.5 h-3.5 text-[#064B35]/40 shrink-0" />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="hover:text-[#064B35] font-medium transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#064B35] font-bold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Hero Title & Description */}
        <div className="max-w-3xl space-y-4">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF3ED] border border-[#064B35]/15 text-[#064B35] text-xs font-semibold tracking-wide">
              {badgeIcon && <span className="text-[#D6A943]">{badgeIcon}</span>}
              <span>{badge}</span>
            </div>
          )}

          <h1 className="font-heading font-extrabold text-[#172B26] tracking-tight">
            {title}{" "}
            {highlight && <span className="text-[#064B35]">{highlight} </span>}
            {italicWord && (
              <span className="font-editorial italic font-normal text-[#D6A943]">
                {italicWord}
              </span>
            )}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-[#2D433B]">
            {description}
          </p>

          {actions && <div className="pt-2 flex flex-wrap items-center gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
