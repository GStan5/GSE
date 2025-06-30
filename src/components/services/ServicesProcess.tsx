"use client";

export default function ServicesProcess() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Service",
      description:
        "Browse our services and select exactly what your business needs. Each service has clear deliverables and timelines.",
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
            d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
          />
        </svg>
      ),
      highlight: "No guesswork",
    },
    {
      number: "02",
      title: "Request Your Quote",
      description:
        "Click 'Request Quote' and we'll send you detailed pricing and next steps via email within 24 hours.",
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
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      highlight: "4-hour response",
    },
    {
      number: "03",
      title: "Secure Payment & Kickoff",
      description:
        "Pay securely online and we'll schedule your discovery call to gather all the details we need to get started.",
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
            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
          />
        </svg>
      ),
      highlight: "Secure & fast",
    },
    {
      number: "04",
      title: "Expert Delivery",
      description:
        "Our team gets to work immediately. You'll receive regular updates and the final deliverables within the promised timeframe.",
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
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      highlight: "Professional results",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-nautical-blue via-nautical-blue to-digital-teal text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">
            How It Works
          </h2>
          <p className="text-xl text-ami-sand max-w-3xl mx-auto">
            Get professional marketing results in 4 simple steps. No complexity,
            no surprises.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-digital-teal via-solar-flare-coral to-digital-teal rounded-full opacity-50"></div>

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="text-center relative">
                  {/* Step Circle */}
                  <div className="relative mx-auto w-20 h-20 bg-gradient-to-r from-digital-teal to-solar-flare-coral rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <div className="absolute inset-1 bg-nautical-blue rounded-full flex items-center justify-center">
                      {step.icon}
                    </div>
                    {/* Step Number */}
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-solar-flare-coral rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 min-h-[12rem] flex flex-col">
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {step.title}
                    </h3>
                    <p className="text-ami-sand text-sm leading-relaxed flex-1">
                      {step.description}
                    </p>
                    <div className="mt-4">
                      <span className="inline-block bg-solar-flare-coral/20 text-solar-flare-coral px-3 py-1 rounded-full text-xs font-semibold">
                        {step.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Stack */}
        <div className="lg:hidden space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-6">
              {/* Step Circle */}
              <div className="flex-shrink-0 relative w-16 h-16 bg-gradient-to-r from-digital-teal to-solar-flare-coral rounded-full flex items-center justify-center shadow-lg">
                <div className="absolute inset-1 bg-nautical-blue rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
                {/* Step Number */}
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-solar-flare-coral rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-bold mb-3 text-white">
                  {step.title}
                </h3>
                <p className="text-ami-sand leading-relaxed mb-3">
                  {step.description}
                </p>
                <span className="inline-block bg-solar-flare-coral/20 text-solar-flare-coral px-3 py-1 rounded-full text-sm font-semibold">
                  {step.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
