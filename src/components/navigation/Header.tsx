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
} from "lucide-react";
import Logo from "@/components/ui/Logo";
import { MAIN_NAVIGATION } from "@/data/navigation";
import { DONATIONS_ENABLED } from "@/lib/constants";

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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
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
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-[#064B35]/10 py-2.5 sm:py-3"
          : isHomePage
          ? "bg-[#FFF9EE]/85 backdrop-blur-sm border-b border-[#064B35]/5 py-3 sm:py-4"
          : "bg-[#FFF9EE] border-b border-[#064B35]/10 py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
            {MAIN_NAVIGATION.map((item) => {
              if (item.submenu) {
                return (
                  <div key={item.label} className="relative" ref={dropdownRef}>
                    <button
                      type="button"
                      onClick={() => setIsProgramsDropdownOpen(!isProgramsDropdownOpen)}
                      onMouseEnter={() => setIsProgramsDropdownOpen(true)}
                      className={`flex items-center gap-1 px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                        pathname.startsWith(item.href)
                          ? "text-[#064B35] bg-[#EAF3ED]"
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
                    </button>

                    {/* Submenu Dropdown */}
                    {isProgramsDropdownOpen && (
                      <div
                        onMouseLeave={() => setIsProgramsDropdownOpen(false)}
                        className="absolute top-full left-0 mt-1 w-[560px] bg-white rounded-2xl shadow-xl border border-[#064B35]/15 p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-1 duration-200"
                      >
                        <div className="col-span-2 pb-2 mb-1 border-b border-[#064B35]/10 flex items-center justify-between text-xs">
                          <span className="font-bold uppercase tracking-wider text-[#718078]">
                            Our Welfare Programs
                          </span>
                          <Link
                            href="/programs"
                            className="font-bold text-[#064B35] hover:text-[#D6A943] transition-colors"
                          >
                            View All Programs Overview →
                          </Link>
                        </div>

                        {item.submenu.map((sub) => {
                          const IconComp = sub.iconName ? ICON_MAP[sub.iconName] || Activity : Activity;
                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#EAF3ED]/70 transition-colors group"
                            >
                              <div className="w-8 h-8 rounded-lg bg-[#EAF3ED] text-[#064B35] flex items-center justify-center shrink-0 group-hover:bg-[#064B35] group-hover:text-[#D6A943] transition-colors">
                                <IconComp className="w-4 h-4" />
                              </div>
                              <div>
                                <div className="text-xs sm:text-sm font-bold text-[#172B26] group-hover:text-[#064B35]">
                                  {sub.label}
                                </div>
                                <div className="text-[11px] text-[#718078] line-clamp-1">
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
                  className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                    isActive
                      ? "text-[#064B35] bg-[#EAF3ED]"
                      : "text-[#172B26] hover:text-[#064B35] hover:bg-[#EAF3ED]/60"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Button: Donate */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#064B35] text-white text-xs sm:text-sm font-bold hover:bg-[#043526] shadow-sm hover:shadow-md transition-all active:scale-[0.98] border border-[#D6A943]/30"
            >
              <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
              <span>{DONATIONS_ENABLED ? "Donate" : "Support Us"}</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              href="/donate"
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#064B35] text-white text-xs font-bold sm:hidden"
            >
              <Heart className="w-3.5 h-3.5 text-[#D6A943] fill-[#D6A943]" />
              <span>Donate</span>
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl text-[#064B35] hover:bg-[#EAF3ED] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A943]"
              aria-label={isMobileMenuOpen ? "Close main navigation menu" : "Open main navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[70px] z-50 lg:hidden bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="h-[calc(100vh-70px)] max-w-sm w-full bg-[#FFF9EE] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-left duration-300">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#064B35]/15">
                <span className="text-xs font-bold uppercase tracking-wider text-[#718078]">
                  Website Navigation
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#EAF3ED] text-[#064B35] font-semibold">
                  AasraLife
                </span>
              </div>

              <div className="flex flex-col space-y-1">
                <Link
                  href="/"
                  className={`p-3 rounded-xl text-base font-bold transition-colors ${
                    pathname === "/" ? "bg-[#064B35] text-white" : "text-[#172B26] hover:bg-[#EAF3ED]"
                  }`}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className={`p-3 rounded-xl text-base font-bold transition-colors ${
                    pathname === "/about" ? "bg-[#064B35] text-white" : "text-[#172B26] hover:bg-[#EAF3ED]"
                  }`}
                >
                  About Us
                </Link>

                <Link
                  href="/mission-vision"
                  className={`p-3 rounded-xl text-base font-bold transition-colors ${
                    pathname === "/mission-vision" ? "bg-[#064B35] text-white" : "text-[#172B26] hover:bg-[#EAF3ED]"
                  }`}
                >
                  Our Mission
                </Link>

                {/* Mobile Programs Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => setIsMobileProgramsOpen(!isMobileProgramsOpen)}
                    className="w-full flex items-center justify-between p-3 rounded-xl text-base font-bold text-[#172B26] hover:bg-[#EAF3ED] transition-colors"
                  >
                    <span>Programs</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${isMobileProgramsOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  {isMobileProgramsOpen && (
                    <div className="ml-3 pl-3 border-l-2 border-[#064B35]/20 space-y-1 py-1">
                      <Link
                        href="/programs"
                        className="block p-2 text-xs font-bold text-[#064B35] hover:underline"
                      >
                        All Programs Overview →
                      </Link>
                      <Link
                        href="/programs/medical-aid"
                        className="block p-2 text-xs font-medium text-[#172B26] hover:text-[#064B35]"
                      >
                        Aasra Medical Care
                      </Link>
                      <Link
                        href="/programs/education"
                        className="block p-2 text-xs font-medium text-[#172B26] hover:text-[#064B35]"
                      >
                        Aasra Education Support
                      </Link>
                      <Link
                        href="/programs/food-support"
                        className="block p-2 text-xs font-medium text-[#172B26] hover:text-[#064B35]"
                      >
                        Aasra Food Support
                      </Link>
                      <Link
                        href="/programs/womens-empowerment"
                        className="block p-2 text-xs font-medium text-[#172B26] hover:text-[#064B35]"
                      >
                        Women&apos;s Empowerment
                      </Link>
                      <Link
                        href="/programs/emergency-relief"
                        className="block p-2 text-xs font-medium text-[#172B26] hover:text-[#064B35]"
                      >
                        Emergency Relief
                      </Link>
                      <Link
                        href="/programs/livelihood"
                        className="block p-2 text-xs font-medium text-[#172B26] hover:text-[#064B35]"
                      >
                        Aasra Livelihood Program
                      </Link>
                    </div>
                  )}
                </div>

                <Link
                  href="/#impact"
                  className="p-3 rounded-xl text-base font-bold text-[#172B26] hover:bg-[#EAF3ED] transition-colors"
                >
                  Our Impact
                </Link>

                <Link
                  href="/volunteer"
                  className={`p-3 rounded-xl text-base font-bold transition-colors ${
                    pathname === "/volunteer" ? "bg-[#064B35] text-white" : "text-[#172B26] hover:bg-[#EAF3ED]"
                  }`}
                >
                  Get Involved (Volunteer)
                </Link>

                <Link
                  href="/apply-for-assistance"
                  className={`p-3 rounded-xl text-base font-bold transition-colors ${
                    pathname === "/apply-for-assistance" ? "bg-[#064B35] text-white" : "text-[#172B26] hover:bg-[#EAF3ED]"
                  }`}
                >
                  Apply for Assistance
                </Link>

                <Link
                  href="/transparency"
                  className={`p-3 rounded-xl text-base font-bold transition-colors ${
                    pathname === "/transparency" ? "bg-[#064B35] text-white" : "text-[#172B26] hover:bg-[#EAF3ED]"
                  }`}
                >
                  Transparency
                </Link>

                <Link
                  href="/contact"
                  className={`p-3 rounded-xl text-base font-bold transition-colors ${
                    pathname === "/contact" ? "bg-[#064B35] text-white" : "text-[#172B26] hover:bg-[#EAF3ED]"
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile Footer Action */}
            <div className="pt-4 border-t border-[#064B35]/15 space-y-2">
              <Link
                href="/donate"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#064B35] text-white font-bold text-center shadow-md active:scale-95"
              >
                <Heart className="w-4 h-4 text-[#D6A943] fill-[#D6A943]" />
                <span>{DONATIONS_ENABLED ? "Donate Now" : "Support Our Mission"}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
