import Link from "next/link";

export default function AuditCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-nautical-blue via-nautical-blue/95 to-digital-teal text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-solar-flare-coral rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-digital-teal rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-ami-sand rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-solar-flare-coral/20 to-digital-teal/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-bold mb-6 border border-white/20">
            <svg
              className="w-5 h-5 mr-3 text-solar-flare-coral"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
            FREE Marketing Audit - Limited Time
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 font-heading leading-tight">
            Get Your Business
            <span className="block text-transparent bg-gradient-to-r from-solar-flare-coral to-digital-teal bg-clip-text">
              Growth Roadmap
            </span>
          </h2>

          <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Discover the exact steps to attract more customers and grow your
            local business with our comprehensive digital audit.
          </p>
        </div>

        {/* Main CTA Card */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left Side - Benefits */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-solar-flare-coral to-digital-teal rounded-lg flex items-center justify-center">
                  <svg
                    className="w-5 h-5 text-white"
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
                What You'll Receive:
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-6 h-6 bg-gradient-to-r from-digital-teal to-solar-flare-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Complete Online Analysis
                    </div>
                    <div className="text-white/80 text-sm">
                      Deep dive into your digital presence and visibility
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-6 h-6 bg-gradient-to-r from-digital-teal to-solar-flare-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Custom Growth Strategy
                    </div>
                    <div className="text-white/80 text-sm">
                      Tailored recommendations for your specific business
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                  <div className="w-6 h-6 bg-gradient-to-r from-digital-teal to-solar-flare-coral rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-white">
                      Competitor Intelligence
                    </div>
                    <div className="text-white/80 text-sm">
                      See how you stack up against local competition
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-8 border border-white/20">
                <div className="w-16 h-16 bg-gradient-to-r from-solar-flare-coral to-digital-teal rounded-2xl flex items-center justify-center mx-auto mb-6">
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
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>

                <h4 className="text-xl font-bold mb-4">
                  Ready to Start Growing?
                </h4>

                <div className="space-y-2 mb-6 text-sm text-white/80">
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-digital-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Takes only 2 minutes
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-digital-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    No commitment required
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      className="w-4 h-4 text-digital-teal"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    100% FREE forever
                  </div>
                </div>

                <Link
                  href="/funnel"
                  className="group w-full bg-gradient-to-r from-solar-flare-coral to-solar-flare-coral/90 hover:from-solar-flare-coral/90 hover:to-solar-flare-coral text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  Get My FREE Audit Now
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

                <p className="text-xs text-white/60 mt-3">
                  ⚡ Usually $299 - Free for limited time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
