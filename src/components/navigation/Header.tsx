"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Heart,
  ArrowRight,
  Activity,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  LifeBuoy,
  Briefcase,
  Compass,
  ShieldCheck,
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { DONATIONS_ENABLED } from "@/lib/constants";
import { ORGANIZATION } from "@/data/organization";

const ICON_MAP: Record<string, any> = {
  Activity,
  GraduationCap,
  ShoppingBag,
  Sparkles,
  LifeBuoy,
  Briefcase,
  Compass,
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProgramsDropdownOpen, setIsProgramsDropdownOpen] = useState(false);
  const [isMobileProgramsOpen, setIsMobileProgramsOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const isHomePage = pathname === "/";

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      // Focus close button on open for accessibility
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Route change resets
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsProgramsDropdownOpen(false);
  }, [pathname]);

  // Outside click closes dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsProgramsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Escape key closes menus
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsProgramsDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-[#064B35]/12 py-2.5 sm:py-3"
            : isHomePage
            ? "bg-[#FFF9EE]/85 backdrop-blur-md border-b border-[#064B35]/8 py-3.5 sm:py-4"
            : "bg-[#FFFDF8]/95 backdrop-blur-md border-b border-[#064B35]/10 py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-3 sm:gap-4">
            {/* Brand Logo */}
            <div className="shrink-0">
              <Logo />
            </div>

            {/* Desktop Navigation */}
            <nav
              className="hidden lg:flex items-center gap-1 xl:gap-1.5"
              aria-label="Main Navigation"
            >
              {MAIN_NAVIGATION.map((item) => {
                if (item.submenu) {
                  const isProgramsActive = pathname.startsWith(item.href);
                  return (
                    <div key={item.label} className="relative" ref={dropdownRef}>
                      <button
                        type="button"
                        onClick={() =>
                          setIsProgramsDropdownOpen(!isProgramsDropdownOpen)
                        }
                        onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                        className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 relative ${
                          isProgramsActive
                            ? "text-[#064B35] bg-[#EAF3ED] font-bold"
                            : "text-[#172B26] hover:text-[#064B35] hover:bg-[#EAF3ED]/60"
                        }`}
                        aria-expanded={isProgramsDropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            isProgramsDropdownOpen ? "rotate-180" : ""
                          }`}
                        />
                        {isProgramsActive && (
                          <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D6A943] rounded-full" />
                        )}
                      </button>

                      {/* Programs Submenu Dropdown */}
                      {isProgramsDropdownOpen && (
                        <div
                          onMouseLeave={() => setIsProgramsDropdownOpen(false)}
                          className="absolute top-full left-0 mt-2 w-[580px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#064B35]/15 p-4 grid grid-cols-2 gap-2.5 animate-in fade-in slide-in-from-top-2 duration-200 z-50"
                        >
                          <div className="col-span-2 pb-2.5 mb-1 border-b border-[#064B35]/10 flex items-center justify-between text-xs">
                            <span className="font-bold uppercase tracking-wider text-[#064B35] flex items-center gap-1.5">
                              <Sparkles className="w-3.5 h-3.5 text-[#D6A943]" />
                              Welfare Initiatives
                            </span>
                            <Link
                              href="/programs"
                              className="font-bold text-[#064B35] hover:text-[#D6A943] transition-colors flex items-center gap-1"
                            >
                              <span>View All 6 Programs</span>
                              <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>

                          {item.submenu.map((sub) => {
                            const IconComp = sub.iconName
                              ? ICON_MAP[sub.iconName] || Activity
                              : Activity;
                            const isCurrentSub = pathname === sub.href;
                            return (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={`flex items-start gap-3 p-2.5 rounded-xl transition-all group ${
                                  isCurrentSub
                                    ? "bg-[#EAF3ED] border border-[#064B35]/20"
                                    : "hover:bg-[#EAF3ED]/70"
                                }`}
                              >
                                <div className="w-8 h-8 rounded-lg bg-[#EAF3ED] text-[#064B35] flex items-center justify-center shrink-0 group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-all shadow-sm">
                                  <IconComp className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs sm:text-sm font-bold text-[#172B26] group-hover:text-[#064B35] truncate">
                                    {sub.label}
                                  </div>
                                  <div className="text-[11px] text-[#4A5B53] line-clamp-1">
                                    {sub.description}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`relative px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "text-[#064B35] bg-[#EAF3ED] font-bold"
                        : "text-[#172B26] hover:text-[#064B35] hover:bg-[#EAF3ED]/60"
                    }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#D6A943] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Button: Donate */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#064B35] text-white text-xs sm:text-sm font-bold hover:bg-[#043526] shadow-sm hover:shadow-lg transition-all duration-200 active:scale-[0.98] border border-[#D6A943]/30"
              >
                <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
                <span>{DONATIONS_ENABLED ? "Donate" : "Support Us"}</span>
              </Link>
            </div>

            {/* Mobile Controls: Donate Mini & Menu Drawer Toggle */}
            <div className="flex items-center gap-2 lg:hidden">
              <Link
                href="/donate"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#064B35] text-white text-xs font-bold sm:hidden shadow-sm"
              >
                <Heart className="w-3.5 h-3.5 text-[#D6A943] fill-[#D6A943]" />
                <span>Donate</span>
              </Link>

              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2.5 rounded-xl text-[#064B35] bg-[#EAF3ED] hover:bg-[#D8EADE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A943]"
                aria-label="Open main navigation menu"
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-HEIGHT PREMIUM MOBILE NAVIGATION DRAWER */}
      {isMobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
        >
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 animate-in fade-in"
            aria-hidden="true"
          />

          {/* Drawer Container */}
          <div className="relative w-full max-w-[340px] sm:max-w-sm h-full bg-[#FFFDF8] shadow-2xl flex flex-col justify-between overflow-hidden z-10 border-l border-[#064B35]/15 animate-in slide-in-from-right duration-300">
            {/* Top Header inside Drawer */}
            <div className="p-5 border-b border-[#064B35]/12 flex items-center justify-between bg-white">
              <Logo showTagline={false} />

              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2.5 rounded-xl text-[#064B35] bg-[#EAF3ED] hover:bg-[#D8EADE] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A943]"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Tagline Strip */}
            <div className="px-5 py-2.5 bg-[#064B35] text-[#FFF9EE] flex items-center justify-between text-[11px] font-semibold">
              <span className="flex items-center gap-1.5 text-[#D6A943]">
                <ShieldCheck className="w-3.5 h-3.5" />
                Humanitarian Platform
              </span>
              <span className="text-[#FFF9EE]/80">Lahore, Pakistan</span>
            </div>

            {/* Scrollable Navigation Area */}
            <div className="flex-1 overflow-y-auto p-5 space-y-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl text-base font-bold transition-all ${
                  pathname === "/"
                    ? "bg-[#064B35] text-white shadow-md"
                    : "text-[#172B26] hover:bg-[#EAF3ED]"
                }`}
              >
                <span>Home</span>
                {pathname === "/" && <ArrowRight className="w-4 h-4 text-[#D6A943]" />}
              </Link>

              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl text-base font-bold transition-all ${
                  pathname === "/about"
                    ? "bg-[#064B35] text-white shadow-md"
                    : "text-[#172B26] hover:bg-[#EAF3ED]"
                }`}
              >
                <span>About Us</span>
                {pathname === "/about" && (
                  <ArrowRight className="w-4 h-4 text-[#D6A943]" />
                )}
              </Link>

              <Link
                href="/mission-vision"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl text-base font-bold transition-all ${
                  pathname === "/mission-vision"
                    ? "bg-[#064B35] text-white shadow-md"
                    : "text-[#172B26] hover:bg-[#EAF3ED]"
                }`}
              >
                <span>Our Mission</span>
                {pathname === "/mission-vision" && (
                  <ArrowRight className="w-4 h-4 text-[#D6A943]" />
                )}
              </Link>

              {/* Expandable Programs Accordion */}
              <div className="rounded-2xl border border-[#064B35]/12 overflow-hidden bg-white/70">
                <button
                  type="button"
                  onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                  className="w-full flex items-center justify-between p-3 text-base font-bold text-[#172B26] hover:bg-[#EAF3ED] transition-colors"
                  aria-expanded={isMobileProgramsOpen}
                >
                  <span className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#064B35]" />
                    Programs
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#064B35] transition-transform duration-200 ${
                      isMobileProgramsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isMobileProgramsOpen && (
                  <div className="p-2.5 pt-0 space-y-1 bg-[#EAF3ED]/30 border-t border-[#064B35]/10">
                    <Link
                      href="/programs"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block p-2 text-xs font-bold text-[#064B35] hover:underline"
                    >
                      All Programs Overview →
                    </Link>
                    <Link
                      href="/programs/medical-aid"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-[#172B26] hover:bg-[#EAF3ED]"
                    >
                      <Activity className="w-3.5 h-3.5 text-[#064B35]" />
                      <span>Aasra Medical Care</span>
                    </Link>
                    <Link
                      href="/programs/education"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-[#172B26] hover:bg-[#EAF3ED]"
                    >
                      <GraduationCap className="w-3.5 h-3.5 text-[#064B35]" />
                      <span>Aasra Education Support</span>
                    </Link>
                    <Link
                      href="/programs/food-support"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-[#172B26] hover:bg-[#EAF3ED]"
                    >
                      <ShoppingBag className="w-3.5 h-3.5 text-[#064B35]" />
                      <span>Aasra Food Support</span>
                    </Link>
                    <Link
                      href="/programs/womens-empowerment"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-[#172B26] hover:bg-[#EAF3ED]"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#064B35]" />
                      <span>Women&apos;s Empowerment</span>
                    </Link>
                    <Link
                      href="/programs/emergency-relief"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-[#172B26] hover:bg-[#EAF3ED]"
                    >
                      <LifeBuoy className="w-3.5 h-3.5 text-[#064B35]" />
                      <span>Emergency Relief</span>
                    </Link>
                    <Link
                      href="/programs/livelihood"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-2 p-2 rounded-xl text-xs font-semibold text-[#172B26] hover:bg-[#EAF3ED]"
                    >
                      <Briefcase className="w-3.5 h-3.5 text-[#064B35]" />
                      <span>Aasra Livelihood Program</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Dedicated Standalone Our Impact Page Link */}
              <Link
                href="/impact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl text-base font-bold transition-all ${
                  pathname === "/impact"
                    ? "bg-[#064B35] text-white shadow-md"
                    : "text-[#172B26] hover:bg-[#EAF3ED]"
                }`}
              >
                <span>Our Impact</span>
                {pathname === "/impact" && (
                  <ArrowRight className="w-4 h-4 text-[#D6A943]" />
                )}
              </Link>

              <Link
                href="/volunteer"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl text-base font-bold transition-all ${
                  pathname === "/volunteer"
                    ? "bg-[#064B35] text-white shadow-md"
                    : "text-[#172B26] hover:bg-[#EAF3ED]"
                }`}
              >
                <span>Get Involved (Volunteer)</span>
                {pathname === "/volunteer" && (
                  <ArrowRight className="w-4 h-4 text-[#D6A943]" />
                )}
              </Link>

              <Link
                href="/apply-for-assistance"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl text-base font-bold transition-all ${
                  pathname === "/apply-for-assistance"
                    ? "bg-[#064B35] text-white shadow-md"
                    : "text-[#172B26] hover:bg-[#EAF3ED]"
                }`}
              >
                <span>Apply for Assistance</span>
                {pathname === "/apply-for-assistance" && (
                  <ArrowRight className="w-4 h-4 text-[#D6A943]" />
                )}
              </Link>

              <Link
                href="/transparency"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl text-base font-bold transition-all ${
                  pathname === "/transparency"
                    ? "bg-[#064B35] text-white shadow-md"
                    : "text-[#172B26] hover:bg-[#EAF3ED]"
                }`}
              >
                <span>Financial Transparency</span>
                {pathname === "/transparency" && (
                  <ArrowRight className="w-4 h-4 text-[#D6A943]" />
                )}
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between p-3 rounded-2xl text-base font-bold transition-all ${
                  pathname === "/contact"
                    ? "bg-[#064B35] text-white shadow-md"
                    : "text-[#172B26] hover:bg-[#EAF3ED]"
                }`}
              >
                <span>Contact</span>
                {pathname === "/contact" && (
                  <ArrowRight className="w-4 h-4 text-[#D6A943]" />
                )}
              </Link>
            </div>

            {/* Mobile Drawer Bottom Action */}
            <div className="p-5 border-t border-[#064B35]/12 bg-white space-y-2">
              <Link
                href="/donate"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#064B35] text-white font-bold text-center shadow-lg active:scale-95 transition-all border border-[#D6A943]/40"
              >
                <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
                <span>
                  {DONATIONS_ENABLED ? "Donate Now" : "Support Our Mission"}
                </span>
              </Link>
              <p className="text-[10px] text-center text-[#4A5B53]">
                {ORGANIZATION.primaryTagline}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
