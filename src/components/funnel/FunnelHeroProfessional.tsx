import Image from "next/image";

export default function FunnelHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-nautical-blue via-nautical-blue/95 to-digital-teal text-white overflow-hidden">
      {/* Professional grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Animated professional background elements */}
      <div className="absolute inset-0">
        {/* Enhanced subtle geometric shapes with better positioning */}
        <div className="absolute top-32 left-16 w-40 h-40 bg-gradient-to-br from-digital-teal/10 to-ami-sand/5 rounded-full blur-2xl animate-float-slow"></div>
        <div className="absolute bottom-32 right-20 w-56 h-56 bg-gradient-to-br from-solar-flare-coral/8 to-digital-teal/5 rounded-full blur-3xl animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-ami-sand/8 to-nautical-blue/5 rounded-full blur-xl animate-pulse-subtle"></div>

        {/* Additional floating elements positioned to avoid text interference */}
        <div className="absolute top-1/4 right-1/3 w-24 h-24 bg-gradient-to-br from-digital-teal/8 to-transparent rounded-full blur-lg animate-float-slow delay-300"></div>
        <div className="absolute bottom-1/3 left-1/4 w-20 h-20 bg-gradient-to-br from-solar-flare-coral/6 to-transparent rounded-full blur-md animate-pulse-subtle delay-700"></div>

        {/* Professional accent lines - moved further from text */}
        <div className="absolute top-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-ami-sand/15 to-transparent"></div>
        <div className="absolute bottom-16 left-0 w-full h-px bg-gradient-to-r from-transparent via-digital-teal/15 to-transparent"></div>

        {/* Corner accent elements */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-ami-sand/30 rounded-tl-lg"></div>
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-digital-teal/30 rounded-br-lg"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-8 py-24 text-center">
        {/* Professional status badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-solar-flare-coral/90 to-solar-flare-coral/80 backdrop-blur-sm text-white px-8 py-4 rounded-full mb-12 font-bold text-sm uppercase tracking-widest shadow-xl border border-solar-flare-coral/30 animate-fade-in-up">
          <div className="w-3 h-3 bg-white rounded-full mr-3 animate-pulse"></div>
          <span className="flex items-center">
            🎯 Exclusive Free Audit - Limited Availability
          </span>
          <div className="w-3 h-3 bg-white rounded-full ml-3 animate-pulse delay-500"></div>
        </div>

        {/* Enhanced professional headline structure with animations */}
        <div className="mb-12 animate-fade-in-up delay-200">
          <div className="text-ami-sand/80 font-semibold text-lg md:text-xl uppercase tracking-widest mb-4 font-heading animate-slide-in-left opacity-0 [animation-fill-mode:forwards] delay-100">
            Gravix Strategic Edge
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 font-heading leading-none tracking-tight">
            <span className="block mb-2 animate-slide-in-left opacity-0 [animation-fill-mode:forwards] delay-200">
              Dominate Your
            </span>
            <span className="block mb-4 bg-gradient-to-r from-white via-ami-sand to-white bg-clip-text text-transparent">
              Local Market
            </span>
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl bg-gradient-to-r from-solar-flare-coral via-yellow-400 to-solar-flare-coral bg-clip-text text-transparent font-extrabold animate-fade-in-up opacity-0 [animation-fill-mode:forwards] delay-600">
              With AI-Powered Marketing
            </span>
          </h1>

          <div className="w-24 h-1 bg-gradient-to-r from-solar-flare-coral to-digital-teal mx-auto rounded-full animate-fade-in-up opacity-0 [animation-fill-mode:forwards] delay-800"></div>
        </div>

        {/* Professional value proposition */}
        <div className="mb-16 animate-fade-in-up delay-400">
          <p className="text-2xl md:text-3xl lg:text-4xl text-ami-sand font-bold mb-6 leading-tight">
            Get Your{" "}
            <span className="text-solar-flare-coral font-black text-3xl md:text-4xl lg:text-5xl">
              $299
            </span>{" "}
            Professional Audit
          </p>
          <p className="text-xl md:text-2xl text-white/90 font-medium mb-4">
            Completely Free for Local Businesses
          </p>
          <p className="text-lg text-ami-sand/80 max-w-4xl mx-auto leading-relaxed">
            Discover the exact strategies your competitors don't want you to
            know. Our AI-powered analysis reveals hidden opportunities to
            outrank, out-market, and out-profit every business in your area.
          </p>
        </div>

        {/* Professional CTA section */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-16 animate-fade-in-up delay-600">
          <a
            href="#audit-form"
            className="group relative bg-gradient-to-r from-solar-flare-coral to-solar-flare-coral/90 hover:from-solar-flare-coral hover:to-yellow-500 text-white font-heading font-black px-12 py-6 rounded-2xl text-xl transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-solar-flare-coral/50 border border-solar-flare-coral/50 overflow-hidden min-w-[280px]"
          >
            <span className="relative z-10 flex items-center justify-center">
              <svg
                className="w-6 h-6 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Claim My Free $299 Audit
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-solar-flare-coral/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>

          <a
            href="#how-it-works"
            className="group border-2 border-ami-sand/40 hover:border-ami-sand hover:bg-ami-sand hover:text-nautical-blue text-ami-sand font-heading font-bold px-12 py-6 rounded-2xl text-xl transition-all duration-500 backdrop-blur-sm bg-white/5 hover:shadow-2xl min-w-[280px]"
          >
            <span className="flex items-center justify-center">
              <svg
                className="w-5 h-5 mr-3 group-hover:rotate-90 transition-transform duration-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                  clipRule="evenodd"
                />
              </svg>
              See How It Works
            </span>
          </a>
        </div>

        {/* Professional trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-ami-sand/70 animate-fade-in-up delay-800">
          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-solar-flare-coral/20 to-digital-teal/20 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-solar-flare-coral"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-semibold text-sm">No Obligation</span>
            <span className="text-xs text-ami-sand/50">100% Risk Free</span>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-digital-teal/20 to-solar-flare-coral/20 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-digital-teal"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
              </svg>
            </div>
            <span className="font-semibold text-sm">Instant Analysis</span>
            <span className="text-xs text-ami-sand/50">AI-Powered Results</span>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-solar-flare-coral/20 to-ami-sand/20 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-solar-flare-coral"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-semibold text-sm">Expert Support</span>
            <span className="text-xs text-ami-sand/50">
              Personalized Service
            </span>
          </div>

          <div className="flex flex-col items-center p-4">
            <div className="w-12 h-12 bg-gradient-to-br from-ami-sand/20 to-digital-teal/20 rounded-xl flex items-center justify-center mb-3">
              <svg
                className="w-6 h-6 text-ami-sand"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <span className="font-semibold text-sm">Proven Results</span>
            <span className="text-xs text-ami-sand/50">Guaranteed ROI</span>
          </div>
        </div>

        {/* Professional call-to-action footer */}
        <div className="mt-16 animate-fade-in-up delay-1000">
          <p className="text-ami-sand/60 text-sm uppercase tracking-widest font-semibold">
            Ready to Transform Your Local Business Presence?
          </p>
        </div>
      </div>

      {/* Professional bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-nautical-blue via-nautical-blue/50 to-transparent"></div>
    </section>
  );
}
