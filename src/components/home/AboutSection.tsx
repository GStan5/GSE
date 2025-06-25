"use client";

import Link from "next/link";
import Image from "next/image";

export default function AboutSection() {
  const scrollToServices = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-br from-nautical-blue to-nautical-blue/90 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-digital-teal rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-solar-flare-coral rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium text-blue-100 mb-4">
              <Image
                src="/images/gse-logo.png"
                alt="GSE Logo"
                width={32}
                height={32}
                className="mr-3 rounded-full"
              />
              About Gravix Strategic Edge
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-8 font-heading leading-tight">
              Your Strategic
              <span className="block text-transparent bg-gradient-to-r from-digital-teal to-solar-flare-coral bg-clip-text">
                Digital Marketing
              </span>
              Partner
            </h2>

            <div className="space-y-6">
              <p className="text-xl leading-relaxed text-blue-100">
                At Gravix Strategic Edge, we believe every local business
                deserves to thrive in the digital age. We're not just another
                marketing agency –{" "}
                <span className="text-white font-semibold">
                  we're your strategic partner in growth.
                </span>
              </p>
              <p className="text-lg leading-relaxed text-blue-100">
                Our AI-powered solutions and proven strategies help businesses
                like yours cut through the noise, connect with customers, and
                achieve measurable results. From visibility to market
                leadership, we have the tools and expertise to give you the
                competitive edge you need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/funnel"
                className="group bg-gradient-to-r from-solar-flare-coral to-solar-flare-coral/90 hover:from-solar-flare-coral/90 hover:to-solar-flare-coral text-white px-8 py-4 rounded-xl font-bold text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Start Your Growth Journey
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <a
                href="#services"
                onClick={scrollToServices}
                className="group border-2 border-white/50 text-white hover:bg-white hover:text-nautical-blue px-8 py-4 rounded-xl font-bold text-center transition-all duration-300 hover:border-white backdrop-blur-sm flex items-center justify-center gap-2"
              >
                Explore Our Services
                <svg
                  className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="space-y-6">
            {/* Key Differentiators */}
            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-digital-teal to-digital-teal/80 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">AI-Powered Efficiency</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Harness the power of artificial intelligence to create content,
                manage your online presence, and engage with customers 24/7.
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-solar-flare-coral to-solar-flare-coral/80 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Data-Driven Results</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                Every strategy is backed by data and analytics. Track your
                growth with transparent reporting and measurable ROI.
              </p>
            </div>

            <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-white/10 hover:border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-ami-sand to-ami-sand/80 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <svg
                    className="w-8 h-8 text-nautical-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Local Market Focus</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                We specialize in local businesses and understand the unique
                challenges of connecting with your community and driving foot
                traffic.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Stats/Trust Indicators */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-digital-teal mb-2 group-hover:scale-110 transition-transform duration-300">
                Local
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                Business Specialists
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-solar-flare-coral mb-2 group-hover:scale-110 transition-transform duration-300">
                24/7
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                AI-Powered Support
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-ami-sand mb-2 group-hover:scale-110 transition-transform duration-300">
                All-in-One
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                Marketing Convenience
              </div>
            </div>
            <div className="group">
              <div className="text-3xl md:text-4xl font-black text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                ∞
              </div>
              <div className="text-blue-100 text-sm md:text-base">
                Growth Potential
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
