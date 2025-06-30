"use client";

import Link from "next/link";

export default function ServicesHero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById("services-list");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section className="bg-gradient-to-br from-nautical-blue via-nautical-blue to-digital-teal text-white py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <header>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-heading mb-6 leading-tight">
            Professional
            <span className="text-solar-flare-coral"> One-Time</span> Marketing
            Services
          </h1>

          <p className="text-xl md:text-2xl text-ami-sand mb-8 max-w-4xl mx-auto leading-relaxed">
            Expert marketing solutions delivered project-by-project. Custom
            websites, branding, automation systems, chatbots, and more – no
            long-term contracts required.
          </p>
        </header>

        {/* Value Proposition */}
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-12 max-w-3xl mx-auto border border-white/20">
          <p className="text-ami-sand text-lg font-medium">
            ✨ <strong>Perfect for businesses</strong> who need custom websites,
            rebranding, booking systems, or automation without ongoing contracts
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <button
            onClick={scrollToServices}
            className="bg-solar-flare-coral hover:bg-solar-flare-coral/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative overflow-hidden group"
          >
            <span className="relative z-10">View All Services</span>
            <div className="absolute inset-0 bg-gradient-to-r from-solar-flare-coral to-digital-teal opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <Link
            href="/funnel"
            className="border-2 border-white text-white hover:bg-white hover:text-nautical-blue px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:shadow-lg"
          >
            Start with Free Audit
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-digital-teal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">No Contracts</h3>
            <p className="text-ami-sand">
              Pay for what you need, when you need it
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-digital-teal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
            <p className="text-ami-sand">
              Most services completed within 5-10 business days
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-digital-teal"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-bold mb-2">Expert Quality</h3>
            <p className="text-ami-sand">
              Professional results from certified marketing specialists
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
