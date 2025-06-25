"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="bg-gradient-to-br from-nautical-blue via-nautical-blue to-digital-teal text-white py-20 md:py-32"
      aria-label="Hero section"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <header>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading mb-6 leading-tight">
            Excel in Your Local Market with
            <span className="text-digital-teal"> AI-Powered</span> Marketing
          </h1>

          <p className="text-xl md:text-2xl text-ami-sand mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your local business with cutting-edge AI marketing
            solutions. From social media automation to reputation management, we
            deliver measurable results that drive real growth.
          </p>
        </header>

        {/* Value Proposition */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-12 max-w-2xl mx-auto border border-white/20">
          <p className="text-ami-sand text-lg font-medium">
            🚀 <strong>Get ahead of 90% of your competitors</strong> who are
            still doing marketing the old way
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <Link
            href="/funnel"
            className="bg-solar-flare-coral hover:bg-solar-flare-coral/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">Get Your FREE $299 Audit</span>
            <div className="absolute inset-0 bg-gradient-to-r from-solar-flare-coral to-digital-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <button
            onClick={() => {
              const servicesSection = document.getElementById("services");
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="border-2 border-white text-white hover:bg-white hover:text-nautical-blue px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg"
          >
            Explore Our Services
          </button>
        </div>

        {/* Social Proof / Urgency */}
        <div className="text-center mb-16">
          <p className="text-ami-sand/80 text-sm">
            ⏰ <strong>Limited Time:</strong> Free audit normally costs $299 •
            No credit card required • Takes 2 minutes
          </p>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-digital-teal/20 rounded-full flex items-center justify-center group-hover:bg-digital-teal/30 transition-colors duration-300">
              <div className="text-2xl font-black text-digital-teal">✓</div>
            </div>
            <div className="text-ami-sand font-medium">
              AI-Powered Marketing Solutions
            </div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-digital-teal/20 rounded-full flex items-center justify-center group-hover:bg-digital-teal/30 transition-colors duration-300">
              <div className="text-2xl font-black text-digital-teal">✓</div>
            </div>
            <div className="text-ami-sand font-medium">
              Local Business Specialists
            </div>
          </div>
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-digital-teal/20 rounded-full flex items-center justify-center group-hover:bg-digital-teal/30 transition-colors duration-300">
              <div className="text-2xl font-black text-digital-teal">✓</div>
            </div>
            <div className="text-ami-sand font-medium">
              Free Comprehensive Audit
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-ami-sand/60"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
