const auditFeatures = [
  {
    title: "Google Business Profile Grade",
    description: "(A–F)",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
  {
    title: "Online Reputation Score",
    description: "(across Google, Yelp, Facebook)",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ),
  },
  {
    title: "Local Listings Health Check",
    description: "",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
  {
    title: "Competitor Comparison Table",
    description: "",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
  {
    title: "Top 3 Action Steps",
    description: "for Fastest Results",
    icon: (
      <svg
        className="w-6 h-6"
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
    ),
  },
];

export default function AuditFeatures() {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50/30 to-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-12">
          <div className="inline-flex items-center bg-digital-teal/10 px-4 py-2 rounded-full mb-4 border border-digital-teal/20">
            <svg
              className="w-4 h-4 text-digital-teal mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs uppercase tracking-wider text-digital-teal font-bold">
              WHAT YOU&apos;LL GET
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-nautical-blue mb-4 font-heading leading-tight max-w-3xl mx-auto">
            Discover How Your Business Compares and What&apos;s Holding You Back
          </h2>
          <p className="text-base text-charcoal-gray/70 max-w-xl mx-auto">
            Comprehensive analysis with actionable insights to dominate local
            search.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-6">
          {auditFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gradient-to-br hover:from-white hover:to-gray-50/50 p-8 rounded-3xl shadow-md hover:shadow-xl border border-gray-200/40 hover:border-digital-teal/40 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-digital-teal/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Icon Container */}
              <div className="flex justify-center mb-6 relative z-10">
                <div className="bg-gradient-to-br from-digital-teal/10 to-digital-teal/5 p-4 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-digital-teal/20 group-hover:to-digital-teal/10 transition-all duration-500 shadow-sm group-hover:shadow-md">
                  <div className="text-digital-teal w-7 h-7 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="text-center relative z-10">
                <div className="font-black text-nautical-blue text-sm leading-tight group-hover:text-digital-teal transition-colors duration-500 mb-2 font-heading">
                  {feature.title}
                </div>
                {feature.description && (
                  <div className="text-charcoal-gray/70 text-xs font-semibold group-hover:text-charcoal-gray/90 transition-colors duration-500">
                    {feature.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
