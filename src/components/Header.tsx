"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll for header shrinking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    setIsMenuOpen(false); // Close mobile menu

    // If we're not on the home page, navigate there first
    if (window.location.pathname !== "/") {
      window.location.href = `/#${targetId}`;
      return;
    }

    // If we're on the home page, smooth scroll to the section
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const isActivePage = (path: string) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`bg-gradient-to-r from-slate-900 via-charcoal-gray to-slate-900 backdrop-blur-md shadow-2xl border-b border-slate-700/60 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Go to homepage"
          >
            <div className="relative flex items-center">
              <div
                className={`mr-3 bg-gradient-to-br from-solar-flare-coral/30 to-digital-teal/30 rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-300 backdrop-blur-sm border border-white/20 group-hover:border-solar-flare-coral/40 ${
                  isScrolled ? "w-10 h-10" : "w-12 h-12"
                }`}
              >
                <Image
                  src="/images/gse-logo.png"
                  alt="GSE Logo"
                  width={isScrolled ? 40 : 48}
                  height={isScrolled ? 40 : 48}
                  className={`object-contain transition-all duration-300 ${
                    isScrolled ? "w-10 h-10" : "w-12 h-12"
                  }`}
                />
              </div>
              <div className="flex flex-col">
                <div
                  className={`font-black text-white font-heading leading-none drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300 ${
                    isScrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
                  }`}
                >
                  GRAVIX
                </div>
                <div
                  className={`text-solar-flare-coral font-semibold uppercase tracking-wider hidden sm:block drop-shadow-sm transition-all duration-300 group-hover:translate-x-2 ${
                    isScrolled ? "text-xs" : "text-xs"
                  }`}
                >
                  Strategic Edge
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center space-x-12"
            role="navigation"
            aria-label="Main navigation"
          >
            <Link
              href="/"
              className={`transition-colors duration-300 font-semibold text-lg relative group ${
                isActivePage("/")
                  ? "text-white"
                  : "text-white/90 hover:text-white"
              }`}
              aria-label="Go to homepage"
            >
              Home
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-solar-flare-coral transition-all duration-300 ${
                  isActivePage("/") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <a
              href="/#services"
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="text-white/90 hover:text-white transition-colors duration-300 font-semibold text-lg relative group"
              aria-label="Go to services section"
            >
              Services
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-solar-flare-coral transition-all duration-300 group-hover:w-full"></span>
            </a>
            <Link
              href="/about"
              className={`transition-colors duration-300 font-semibold text-lg relative group ${
                isActivePage("/about")
                  ? "text-white"
                  : "text-white/90 hover:text-white"
              }`}
              aria-label="Go to about page"
            >
              About
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-solar-flare-coral transition-all duration-300 ${
                  isActivePage("/about") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-300 font-semibold text-lg relative group ${
                isActivePage("/contact")
                  ? "text-white"
                  : "text-white/90 hover:text-white"
              }`}
              aria-label="Go to contact page"
            >
              Contact
              <span
                className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-solar-flare-coral transition-all duration-300 ${
                  isActivePage("/contact") ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <Link
              href="/funnel"
              className="group relative bg-gradient-to-r from-solar-flare-coral via-solar-flare-coral to-yellow-500 hover:from-yellow-500 hover:via-solar-flare-coral hover:to-solar-flare-coral text-white px-6 py-3 rounded-xl font-bold text-base transition-all duration-300 shadow-xl hover:shadow-2xl border border-solar-flare-coral/20 hover:border-yellow-500/40 transform hover:scale-105 overflow-hidden"
              aria-label="Get your free marketing audit"
            >
              <span className="relative z-10 flex items-center">
                <svg
                  className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                Get Free Audit
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            {/* Mobile CTA Button */}
            <Link
              href="/funnel"
              className="bg-gradient-to-r from-solar-flare-coral to-yellow-500 text-white px-4 py-2 rounded-lg font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              aria-label="Get your free marketing audit"
            >
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                    clipRule="evenodd"
                  />
                </svg>
                Audit
              </span>
            </Link>

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/40"
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-1" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 mt-1 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 bg-white transition-all duration-300 mt-1 ${
                    isMenuOpen ? "-rotate-45 -translate-y-1" : ""
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="py-4 border-t border-white/10 mt-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-semibold transition-colors duration-300 py-2 px-4 rounded-lg ${
                  isActivePage("/")
                    ? "text-white bg-solar-flare-coral/20 border-l-4 border-solar-flare-coral"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Go to homepage"
              >
                Home
              </Link>
              <a
                href="/#services"
                onClick={(e) => handleSmoothScroll(e, "services")}
                className="text-white/90 hover:text-white text-lg font-semibold transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/10"
                aria-label="Go to services section"
              >
                Services
              </a>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-semibold transition-colors duration-300 py-2 px-4 rounded-lg ${
                  isActivePage("/about")
                    ? "text-white bg-solar-flare-coral/20 border-l-4 border-solar-flare-coral"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Go to about page"
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`text-lg font-semibold transition-colors duration-300 py-2 px-4 rounded-lg ${
                  isActivePage("/contact")
                    ? "text-white bg-solar-flare-coral/20 border-l-4 border-solar-flare-coral"
                    : "text-white/90 hover:text-white hover:bg-white/10"
                }`}
                aria-label="Go to contact page"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
