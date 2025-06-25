"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Is this really free?",
    answer:
      "Yes, this is a one-time, no-cost audit provided to select local businesses this month. There are no hidden fees, obligations, or automatic enrollments. We&apos;re offering this to help local businesses understand their online presence and identify growth opportunities.",
  },
  {
    question: "How long does it take?",
    answer:
      "You'll receive your comprehensive report within 24–48 business hours, prepared by our team of local marketing consultants. The report includes detailed analysis, competitor comparisons, and actionable recommendations.",
  },
  {
    question: "What exactly will I receive?",
    answer:
      "Your audit includes: Google Business Profile grade (A-F), online reputation score across major platforms, local listings health check, competitor comparison table, and top 3 priority action steps for immediate improvement.",
  },
  {
    question: "Do I need to provide my competitors?",
    answer:
      "While not required, providing competitor information helps us create a more comprehensive analysis. We can identify your main competitors automatically, but knowing who you consider your biggest competition gives us better insights.",
  },
  {
    question: "Will you contact me after I submit the form?",
    answer:
      "We'll email you the audit report and may follow up once to see if you have any questions about the findings. We respect your time and won&apos;t bombard you with sales calls or emails.",
  },
  {
    question: "What makes this audit valuable?",
    answer:
      "Our audit combines AI-powered analysis with human expertise to provide insights that most businesses miss. We analyze over 50 ranking factors and compare your performance against successful competitors in your market.",
  },
];

export default function FunnelFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <div className="mb-16">
          <div className="inline-flex items-center bg-digital-teal/10 px-4 py-2 rounded-full mb-6 border border-digital-teal/20">
            <svg
              className="w-4 h-4 text-digital-teal mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-xs uppercase tracking-wider text-digital-teal font-bold">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-nautical-blue mb-6 font-heading leading-tight">
            Everything You Need to Know
          </h2>
          <p className="text-lg text-charcoal-gray/80 max-w-2xl mx-auto">
            Common questions about our free local visibility audit process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-200/60 group"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-digital-teal/20 transition-all duration-300 hover:bg-gray-50/50"
              >
                <div className="flex justify-between items-center">
                  <h3 className="font-heading font-bold text-lg text-nautical-blue pr-4 group-hover:text-digital-teal transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 bg-digital-teal/10 p-2 rounded-lg group-hover:bg-digital-teal/20 transition-all duration-300">
                    <svg
                      className={`w-5 h-5 text-digital-teal transition-transform duration-300 ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
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
              {openIndex === index && (
                <div className="px-6 pb-6 transition-all duration-300 animate-in slide-in-from-top-2">
                  <div className="border-t border-gray-200/60 pt-4">
                    <p className="text-charcoal-gray/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-digital-teal/20 shadow-lg">
            <div className="text-center">
              <div className="inline-flex items-center bg-digital-teal/10 p-3 rounded-xl mb-4">
                <svg
                  className="w-6 h-6 text-digital-teal"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-xl md:text-2xl font-black text-nautical-blue font-heading mb-3">
                Still Have Questions?
              </h3>
              <p className="text-charcoal-gray/80 mb-6 text-base">
                Our team is here to help. Get in touch and we&apos;ll answer any
                questions about the audit process.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-gradient-to-r from-digital-teal to-nautical-blue hover:from-nautical-blue hover:to-digital-teal text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Contact Our Team
                </button>
                <button className="border-2 border-digital-teal text-digital-teal hover:bg-digital-teal hover:text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
