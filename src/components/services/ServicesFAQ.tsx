"use client";

import { useState } from "react";

export default function ServicesFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      question: "How long does it take to complete a custom website?",
      answer:
        "Custom website development takes 4-12 weeks from start to finish. This includes design mockups, development, content integration, SEO optimization, and testing. We'll provide regular updates throughout the process and ensure everything meets your expectations before launch.",
    },
    {
      question: "What's included in the Brand Refresh & Rebranding Kit?",
      answer:
        "Our rebranding kit includes a new logo design with variations, complete brand color palette, typography guidelines, brand standards document, business card design, and social media branding templates. Everything you need to consistently present your refreshed brand across all platforms.",
    },
    {
      question: "How does the booking system integration work?",
      answer:
        "We set up a complete automated booking system for tours, rentals, or services directly on your website. This includes calendar integration, payment processing, automated confirmations, and reminder emails. Perfect for tour operators, vacation rentals, or service businesses.",
    },
    {
      question: "What can the AI chatbot service handle?",
      answer:
        "Our AI chatbot can handle customer inquiries 24/7, answer frequently asked questions, capture leads, schedule appointments, provide product information, and escalate complex issues to your team. We customize the chatbot's knowledge base specifically for your business and train it on your services and policies.",
    },
    {
      question:
        "What's the difference between SEO landing pages and website SEO optimization?",
      answer:
        "SEO landing pages are new, targeted pages created for specific keywords or campaigns to drive conversions. Website SEO optimization improves your existing site's search rankings through technical fixes, content optimization, and performance improvements. Both services complement each other for maximum visibility.",
    },

    {
      question: "Can you work with my existing website platform?",
      answer:
        "We work with all major platforms including WordPress, Shopify, Squarespace, Wix, and custom-built sites. Our team has expertise across different technologies and can adapt our services to work seamlessly with your current setup.",
    },
    {
      question: "What information do you need to start a project?",
      answer:
        "Requirements vary by service, but generally include your current website, brand materials, business goals, target audience info, and access to relevant accounts (Google Business Profile, social media, etc.). We'll send a detailed onboarding questionnaire after you place your order.",
    },
    {
      question: "Do you offer package deals for multiple services?",
      answer:
        "Absolutely! Many clients start with our FREE comprehensive audit, then select multiple services based on our recommendations. We offer custom package pricing for multiple services and can create a strategic roadmap for implementing them in the most effective order.",
    },
    {
      question: "What happens if I need changes after a service is completed?",
      answer:
        "We include reasonable revisions in all our services to ensure your complete satisfaction. Each service comes with a specific revision policy, and we'll work with you until the deliverable meets your expectations. For major scope changes, we'll provide transparent pricing for additional work.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-heading text-nautical-blue mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-charcoal-gray max-w-2xl mx-auto">
            Get answers to common questions about our one-time marketing
            services and how they can help your business grow.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-ami-sand/30 rounded-lg border border-ami-sand overflow-hidden"
            >
              <button
                className="w-full text-left p-6 hover:bg-ami-sand/50 transition-colors duration-300 focus:outline-none focus:bg-ami-sand/50"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold text-nautical-blue pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`transform transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg
                      className="w-6 h-6 text-nautical-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </button>
              {openFAQ === index && (
                <div className="px-6 pb-6">
                  <p className="text-charcoal-gray leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-br from-gray-900 via-nautical-blue to-digital-teal text-white rounded-2xl p-12 relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-solar-flare-coral/10 via-digital-teal/10 to-solar-flare-coral/10 opacity-50"></div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-solar-flare-coral/20 to-digital-teal/20 rounded-full blur-xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-digital-teal/20 to-solar-flare-coral/20 rounded-full blur-xl"></div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-black font-heading mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Still have questions? Start with our{" "}
                <span className="text-solar-flare-coral font-bold">
                  FREE $299 audit
                </span>{" "}
                or reach out directly for personalized guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/funnel"
                  className="group bg-gradient-to-r from-solar-flare-coral to-red-500 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-solar-flare-coral/50 transform hover:scale-105 flex items-center gap-3"
                >
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
                  Get FREE $299 Audit
                </a>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="mailto:CustomServices@GSE.codes?subject=Service Questions&body=Hi! I have questions about your one-time marketing services.%0A%0ASpecifically, I'm interested in learning more about:%0A- %0A- %0A%0APlease contact me to discuss further.%0A%0AThanks!"
                    className="group border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl flex items-center gap-3"
                  >
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
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    Email Questions
                  </a>

                  <a
                    href="tel:+19419003341"
                    className="group bg-gradient-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:shadow-xl hover:shadow-green-500/30 flex items-center gap-3"
                  >
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    Call Now
                  </a>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-gray-400 text-sm">
                  💯 100% Satisfaction Guaranteed • 🚀 Fast Delivery • 📞 Expert
                  Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
