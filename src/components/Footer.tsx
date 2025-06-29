import Link from "next/link";
import Image from "next/image";
import { CONTACT_INFO, formatPhone } from "@/config/contact";

export default function Footer() {
  return (
    <footer className="bg-nautical-blue text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative group flex-shrink-0">
                <Image
                  src="/images/gse-logo.png"
                  alt="GSE Logo"
                  width={75}
                  height={75}
                  className="w-[75px] h-[75px] object-contain transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-2xl font-black font-heading text-white leading-tight">
                  Gravix
                </div>
                <div className="text-lg font-bold text-transparent bg-gradient-to-r from-digital-teal to-solar-flare-coral bg-clip-text">
                  Strategic Edge
                </div>
              </div>
            </div>
            <p className="text-ami-sand text-sm leading-relaxed mb-4">
              {CONTACT_INFO.company.tagline}
            </p>
            <p className="text-ami-sand/80 text-xs mb-6">
              {CONTACT_INFO.company.location}
            </p>

            {/* Social Media Links
            <div className="flex gap-3">
              <a
                href={CONTACT_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-ami-sand/10 hover:bg-digital-teal rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Facebook"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href={CONTACT_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-ami-sand/10 hover:bg-digital-teal rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>

              <a
                href={CONTACT_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-ami-sand/10 hover:bg-solar-flare-coral rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>

              <a
                href={CONTACT_INFO.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-ami-sand/10 hover:bg-solar-flare-coral rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
                aria-label="YouTube"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div> */}
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold font-heading mb-4 text-digital-teal">
              Our Services
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#services"
                  className="text-ami-sand hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-solar-flare-coral rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Local SEO Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-ami-sand hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-solar-flare-coral rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Google Business Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-ami-sand hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-solar-flare-coral rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Business Automation
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-ami-sand hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-solar-flare-coral rounded-full group-hover:w-2 transition-all duration-300"></span>
                  AI-Powered Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold font-heading mb-4 text-digital-teal">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="text-ami-sand hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-solar-flare-coral rounded-full group-hover:w-2 transition-all duration-300"></span>
                  About GSE
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-ami-sand hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-solar-flare-coral rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-ami-sand hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-solar-flare-coral rounded-full group-hover:w-2 transition-all duration-300"></span>
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/funnel"
                  className="text-ami-sand hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <span className="w-1 h-1 bg-solar-flare-coral rounded-full group-hover:w-2 transition-all duration-300"></span>
                  Free Marketing Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold font-heading mb-4 text-digital-teal">
              Get Started
            </h4>
            <div className="space-y-4 text-sm">
              <div className="space-y-2">
                <a
                  href={`tel:${formatPhone.tel}`}
                  className="text-ami-sand hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 text-solar-flare-coral"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  {formatPhone.display}
                </a>
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-ami-sand hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                >
                  <svg
                    className="w-4 h-4 text-solar-flare-coral"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  {CONTACT_INFO.email}
                </a>
              </div>

              <Link
                href="/funnel"
                className="inline-block bg-gradient-to-r from-solar-flare-coral to-solar-flare-coral/90 hover:from-solar-flare-coral/90 hover:to-solar-flare-coral text-white px-5 py-3 rounded-lg font-bold text-sm transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Your Free Audit →
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-ami-sand/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-ami-sand text-sm">
              © 2025 {CONTACT_INFO.company.name}. All rights reserved.
            </p>
            <div className="flex gap-6 text-xs text-ami-sand">
              <Link
                href="/privacy-policy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookie-policy"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/contact"
                className="hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
