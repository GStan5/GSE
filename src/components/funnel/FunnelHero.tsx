export default function FunnelHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-nautical-blue via-nautical-blue to-digital-teal text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Enhanced floating geometric shapes with new animations */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-digital-teal/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-16 w-40 h-40 bg-solar-flare-coral/15 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-ami-sand/10 rounded-full blur-lg animate-pulse delay-500"></div>

        {/* New animated elements */}
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-digital-teal/10 rounded-full blur-md animate-float delay-200"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-solar-flare-coral/20 rounded-full blur-lg animate-bounce-slow delay-800"></div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-nautical-blue/50 via-transparent to-transparent"></div>

        {/* Enhanced gradient overlay with radial gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-nautical-blue/20 to-nautical-blue/40"></div>

        {/* Decorative SVG patterns */}
        <svg
          className="absolute top-10 left-10 w-32 h-32 text-digital-teal/30 animate-spin-slow"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <circle cx="100" cy="100" r="50" opacity="0.3" />
          <circle cx="100" cy="100" r="30" opacity="0.5" />
          <circle cx="100" cy="100" r="15" opacity="0.8" />
        </svg>

        <svg
          className="absolute bottom-20 right-20 w-28 h-28 text-solar-flare-coral/40 animate-bounce-slow"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <rect
            x="75"
            y="75"
            width="50"
            height="50"
            rx="8"
            transform="rotate(45 100 100)"
          />
        </svg>

        <svg
          className="absolute top-16 right-1/4 w-20 h-20 text-ami-sand/10 animate-float"
          viewBox="0 0 200 200"
          fill="currentColor"
        >
          <polygon points="100,50 150,150 50,150" opacity="0.2" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        {/* Attention-grabbing badge */}
        <div className="inline-flex items-center bg-gradient-to-r from-solar-flare-coral to-solar-flare-coral/80 text-white px-8 py-4 rounded-full mb-8 font-bold text-sm uppercase tracking-widest shadow-2xl animate-pulse-glow border border-solar-flare-coral/50">
          <svg
            className="w-5 h-5 mr-3 animate-spin"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          ⚡ FREE AUDIT - LIMITED TIME OFFER ⚡
        </div>

        {/* Main headline with enhanced styling and animations */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-8 font-heading leading-tight tracking-tight">
          <span className="block mb-4 animate-slide-in-left opacity-0 [animation-fill-mode:forwards]">
            Get Your
          </span>
          <span className="block mb-4 bg-gradient-to-r from-white via-ami-sand to-white bg-clip-text text-transparent animate-slide-in-right opacity-0 [animation-fill-mode:forwards] delay-200">
            COMPLETELY FREE
          </span>
          <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-solar-flare-coral via-yellow-400 to-solar-flare-coral bg-clip-text text-transparent animate-fade-in-up opacity-0 [animation-fill-mode:forwards] delay-400 font-extrabold relative">
            Local Visibility Audit
            {/* Shimmer effect overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer delay-1000"></span>
          </span>
        </h1>

        {/* Enhanced value proposition with improved animations */}
        <div className="mb-12 animate-fade-in-up opacity-0 [animation-fill-mode:forwards] delay-600">
          <p className="text-2xl md:text-3xl lg:text-4xl text-ami-sand font-bold mb-4 drop-shadow-lg">
            A{" "}
            <span className="text-solar-flare-coral font-black text-3xl md:text-4xl lg:text-5xl relative inline-block">
              $299 Value
              {/* Pulsing underline effect */}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-solar-flare-coral to-yellow-400 animate-pulse"></span>
            </span>{" "}
            at No Cost
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed animate-fade-in-up opacity-0 [animation-fill-mode:forwards] delay-800">
            Exclusively for Local Area Businesses This Month - Discover exactly
            how to dominate your{" "}
            <span className="text-ami-sand font-semibold">local market</span>!
          </p>
        </div>

        {/* Enhanced CTA buttons with improved animations */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up opacity-0 [animation-fill-mode:forwards] delay-1000">
          <a
            href="#audit-form"
            className="group relative bg-gradient-to-r from-solar-flare-coral to-solar-flare-coral/90 hover:from-solar-flare-coral/90 hover:to-solar-flare-coral text-white font-heading font-black px-10 py-5 rounded-2xl text-xl transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-solar-flare-coral/50 border-2 border-solar-flare-coral/50 hover:border-solar-flare-coral overflow-hidden animate-pulse-glow"
          >
            <span className="relative z-10 flex items-center">
              🚀 GET MY FREE AUDIT NOW
              <svg
                className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            {/* Enhanced shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-solar-flare-coral/30 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            {/* Pulsing border effect */}
            <div className="absolute inset-0 rounded-2xl border-2 border-white/30 animate-pulse"></div>
          </a>

          <a
            href="#how-it-works"
            className="group border-3 border-white/80 hover:border-white hover:bg-white hover:text-nautical-blue text-white font-heading font-bold px-10 py-5 rounded-2xl text-xl transition-all duration-500 backdrop-blur-sm bg-white/10 hover:shadow-2xl hover:scale-105 transform"
          >
            <span className="flex items-center">
              📊 How It Works
              <svg
                className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Enhanced trust indicators with staggered animations */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-ami-sand/80">
          <div className="flex items-center animate-fade-in-up opacity-0 [animation-fill-mode:forwards] delay-1000">
            <svg
              className="w-6 h-6 text-solar-flare-coral mr-2 animate-pulse"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">No Obligation</span>
          </div>
          <div className="flex items-center animate-fade-in-up opacity-0 [animation-fill-mode:forwards] delay-[1.2s]">
            <svg
              className="w-6 h-6 text-solar-flare-coral mr-2 animate-pulse delay-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">100% Free</span>
          </div>
          <div className="flex items-center animate-fade-in-up opacity-0 [animation-fill-mode:forwards] delay-[1.4s]">
            <svg
              className="w-6 h-6 text-solar-flare-coral mr-2 animate-pulse delay-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="font-semibold">Instant Results</span>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-nautical-blue to-transparent"></div>

      {/* Floating scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow opacity-0 animate-fade-in-up delay-[2s] [animation-fill-mode:forwards]">
        <a
          href="#audit-features"
          className="group flex flex-col items-center text-white/70 hover:text-white transition-colors duration-300"
        >
          <span className="text-sm font-medium mb-2 group-hover:text-ami-sand transition-colors">
            Discover More
          </span>
          <svg
            className="w-6 h-6 animate-bounce"
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
        </a>
      </div>
    </section>
  );
}
