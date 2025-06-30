"use client";

export default function ServicesBenefits() {
  const benefits = [
    {
      icon: (
        <svg
          className="w-12 h-12 text-digital-teal"
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
      ),
      title: "Cost-Effective Solutions",
      description:
        "Get professional marketing results without the overhead of hiring agencies or full-time staff. Pay only for what you need.",
      stats: "Save 60-80% vs. agency rates",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-digital-teal"
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
      title: "Quick Implementation",
      description:
        "No lengthy onboarding processes or complex contracts. Get started immediately and see results within days, not months.",
      stats: "Results as quick as 3 business days",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-digital-teal"
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
      ),
      title: "Expert Quality Guaranteed",
      description:
        "Work directly with certified marketing professionals who specialize in your industry and understand your challenges.",
      stats: "10+ years average experience",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-digital-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "No Long-Term Commitments",
      description:
        "Perfect for businesses that need specific tasks completed or want to test our services before committing to ongoing partnerships.",
      stats: "100% satisfaction guarantee",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-digital-teal"
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
      title: "Data-Driven Results",
      description:
        "Every service includes detailed analytics and reporting so you can measure the impact and ROI of your investment.",
      stats: "Detailed performance reports",
    },
    {
      icon: (
        <svg
          className="w-12 h-12 text-digital-teal"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: "Personalized Approach",
      description:
        "Unlike templated solutions, every service is customized to your business goals, industry, and target audience.",
      stats: "Tailored to your business",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-nautical-blue via-gray-blue to-nautical-blue text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-heading mb-6">
            Why Choose Our
            <span className="text-solar-flare-coral"> One-Time</span> Services?
          </h2>
          <p className="text-xl text-ami-sand max-w-3xl mx-auto">
            Get professional marketing expertise without the complexity and cost
            of traditional agency relationships. Perfect for businesses that
            need specific results fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white/20 rounded-full p-4 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-ami-sand mb-4 leading-relaxed">
                  {benefit.description}
                </p>
                <div className="bg-solar-flare-coral/20 rounded-full px-4 py-2">
                  <span className="text-solar-flare-coral font-semibold text-sm">
                    {benefit.stats}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Compare Your Options
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/30">
                  <th className="text-left py-4 px-4 text-ami-sand font-semibold">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-solar-flare-coral font-semibold">
                    Our One-Time Services
                  </th>
                  <th className="text-center py-4 px-4 text-ami-sand font-semibold">
                    Traditional Agency
                  </th>
                  <th className="text-center py-4 px-4 text-ami-sand font-semibold">
                    Freelancers
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 text-ami-sand">Contract Length</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-digital-teal">✓</span> No Contract
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-solar-flare-coral">✗</span> 6-12
                    months
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-digital-teal">✓</span> Project-based
                  </td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 text-ami-sand">Delivery Speed</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-digital-teal">✓</span> 3+ business
                    days
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-solar-flare-coral">✗</span> 2-8 weeks
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-ami-sand">~</span> Varies widely
                  </td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 text-ami-sand">Quality Guarantee</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-digital-teal">✓</span> 100% guaranteed
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-ami-sand">~</span> Limited
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-solar-flare-coral">✗</span> No
                    guarantee
                  </td>
                </tr>
                <tr className="border-b border-white/20">
                  <td className="py-3 px-4 text-ami-sand">Cost</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-digital-teal">✓</span> Fixed, upfront
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-solar-flare-coral">✗</span> High
                    monthly fees
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-ami-sand">~</span> Unpredictable
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-ami-sand">Support</td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-digital-teal">✓</span> Direct expert
                    access
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-ami-sand">~</span> Account managers
                  </td>
                  <td className="py-3 px-4 text-center">
                    <span className="text-solar-flare-coral">✗</span> Limited
                    availability
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
