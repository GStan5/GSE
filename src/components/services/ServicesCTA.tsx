"use client";

import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Modern Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-solar-flare-coral/20 via-digital-teal/20 to-solar-flare-coral/20 opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-solar-flare-coral/30 to-digital-teal/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-digital-teal/30 to-solar-flare-coral/30 rounded-full blur-xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-solar-flare-coral/20 to-digital-teal/20 rounded-full blur-2xl animate-pulse delay-500"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <div className="mb-16">
          <h2 className="text-5xl md:text-7xl font-black font-heading mb-8 leading-tight bg-gradient-to-r from-white via-ami-sand to-white bg-clip-text text-transparent">
            Ready to Transform Your Business?
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto leading-relaxed font-light">
            Start with our{" "}
            <span className="text-solar-flare-coral font-bold">
              FREE $299 audit
            </span>{" "}
            or browse our premium services
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-solar-flare-coral to-digital-teal mx-auto rounded-full"></div>
        </div>

        {/* Primary CTAs */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-20 max-w-4xl mx-auto">
          <Link
            href="/funnel"
            className="group relative bg-gradient-to-r from-solar-flare-coral to-red-500 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:shadow-2xl hover:shadow-solar-flare-coral/50 transform hover:scale-105 flex items-center gap-4 min-w-[280px] justify-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-solar-flare-coral opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <svg
              className="w-8 h-8 relative z-10"
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
            <span className="relative z-10">Get FREE $299 Audit</span>
          </Link>

          <button
            onClick={() => {
              const servicesSection = document.getElementById("services-list");
              if (servicesSection) {
                servicesSection.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="group relative border-2 border-white text-white hover:bg-white hover:text-gray-900 px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-500 hover:shadow-2xl transform hover:scale-105 flex items-center gap-4 min-w-[280px] justify-center"
          >
            <svg
              className="w-8 h-8 transition-transform group-hover:rotate-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              />
            </svg>
            <span>Browse All Services</span>
          </button>
        </div>

        {/* Contact Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-3xl mx-auto">
          <a
            href="mailto:CustomServices@GSE.codes?subject=Custom Marketing Services Request&body=Hi! I'm interested in discussing custom marketing services for my business.%0A%0APlease contact me to discuss my specific needs and requirements.%0A%0AThanks!"
            className="group bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-white/20 transform hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-digital-teal p-4 rounded-full">
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
                    d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Email Us</h3>
                <p className="text-gray-300">
                  Get a detailed response within 24 hours
                </p>
              </div>
            </div>
            <p className="text-digital-teal font-semibold text-lg group-hover:text-white transition-colors">
              CustomServices@GSE.codes →
            </p>
          </a>

          <a
            href="tel:+1941-900-3341"
            className="group bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 hover:bg-gradient-to-br hover:from-green-500/30 hover:to-green-600/30 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 transform hover:scale-105 animate-pulse hover:animate-none"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-500 p-4 rounded-full">
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
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-1">Call Now</h3>
                <p className="text-gray-300">
                  Speak with an expert immediately
                </p>
              </div>
            </div>
            <p className="text-green-400 font-semibold text-lg group-hover:text-white transition-colors">
              (941) 900-3341 →
            </p>
          </a>
        </div>

        {/* Benefits Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-solar-flare-coral/50 transition-all duration-300 hover:shadow-xl hover:shadow-solar-flare-coral/20 transform hover:scale-105">
            <div className="bg-gradient-to-br from-solar-flare-coral to-red-500 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-solar-flare-coral transition-colors">
              Transparent Pricing
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              No hidden fees or hourly billing. You know exactly what you'll
              invest before we start.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-digital-teal/50 transition-all duration-300 hover:shadow-xl hover:shadow-digital-teal/20 transform hover:scale-105">
            <div className="bg-gradient-to-br from-digital-teal to-blue-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
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
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-digital-teal transition-colors">
              Lightning Fast
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Most services delivered in 3-10 business days. See results
              immediately, not months later.
            </p>
          </div>

          <div className="group bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-green-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-green-400/20 transform hover:scale-105">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl w-20 h-20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg
                className="w-10 h-10 text-white"
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
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-green-400 transition-colors">
              Risk-Free Guarantee
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              100% satisfaction guaranteed. Not happy? We'll make it right or
              refund your investment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
