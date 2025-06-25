const steps = [
  {
    number: 1,
    title: "Tell us your business name and basic information.",
    description:
      "Just fill out our simple form with your business details and up to 3 competitors.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
  },
  {
    number: 2,
    title: "Our AI-powered analysis begins immediately.",
    description:
      "We scan your online presence, reviews, listings, and compare you to your competitors.",
    icon: (
      <svg
        className="w-8 h-8"
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
    ),
  },
  {
    number: 3,
    title: "Receive your comprehensive audit report within 24-48 hours.",
    description:
      "Get actionable insights, competitor analysis, and a clear roadmap to improve your local visibility.",
    icon: (
      <svg
        className="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-16 bg-gradient-to-b from-white via-gray-50/30 to-white"
    >
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
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs uppercase tracking-wider text-digital-teal font-bold">
              HOW IT WORKS
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-nautical-blue mb-4 font-heading leading-tight max-w-3xl mx-auto">
            Fill Out Our Brief Form and We Will Do the Rest!
          </h2>
          <p className="text-base text-charcoal-gray/70 max-w-xl mx-auto">
            Our streamlined process makes it easy to get the insights you need
            to outrank your competition.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-2xl shadow-sm border border-gray-200/60 hover:shadow-lg hover:border-digital-teal/30 transition-all duration-300 group"
              >
                {/* Step Number Circle */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="w-10 h-10 bg-gradient-to-br from-digital-teal to-nautical-blue text-white rounded-full flex items-center justify-center text-base font-black shadow-md group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4 mt-3">
                  <div className="bg-digital-teal/10 p-3 rounded-xl group-hover:bg-digital-teal/20 transition-colors duration-300">
                    <div className="text-digital-teal w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h4 className="text-base font-bold text-nautical-blue mb-2 font-heading leading-tight group-hover:text-digital-teal transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-charcoal-gray/70 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connection Arrow (hidden on mobile, last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-white rounded-full border-2 border-digital-teal/20 flex items-center justify-center shadow-sm">
                      <svg
                        className="w-4 h-4 text-digital-teal"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <div className="max-w-lg mx-auto bg-gradient-to-r from-solar-flare-coral/5 to-yellow-500/5 p-4 rounded-xl border border-solar-flare-coral/15 shadow-sm">
            <div className="flex items-center justify-center">
              <div className="bg-solar-flare-coral/10 p-2 rounded-lg mr-3 flex-shrink-0">
                <svg
                  className="w-4 h-4 text-solar-flare-coral"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="text-center">
                <span className="font-bold text-solar-flare-coral text-sm">
                  Time Investment:
                </span>
                <span className="text-charcoal-gray font-medium text-sm ml-1">
                  Just 2 minutes, then we handle everything!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
