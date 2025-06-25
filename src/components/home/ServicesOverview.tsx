"use client";

import Link from "next/link";
import { useState } from "react";
import { CONTACT_INFO, formatPhone } from "@/config/contact";

export default function ServicesOverview() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const packages = {
    foundation: {
      name: "Foundation Package",
      subtitle: "Essential Online Presence",
      description:
        "Perfect for businesses starting their digital journey or those needing to establish credibility online.",
      features: [
        "AI-powered social media management across 3 platforms",
        "Google Business Profile optimization and maintenance",
        "24/7 review monitoring with professional responses",
        "Local citation audit and cleanup (up to 20 sites)",
        "Monthly reputation report and recommendations",
        "Basic competitor analysis and insights",
      ],
      benefits: [
        "Look professional online consistently",
        "Never miss responding to customer reviews",
        "Improve local search visibility",
        "Save 10+ hours per week on social media",
      ],
    },
    growth: {
      name: "Growth Accelerator",
      subtitle: "Complete Marketing System",
      description:
        "Designed for businesses ready to actively attract new customers and scale their online presence.",
      features: [
        "Everything in Foundation Package",
        "Multi-platform social media strategy (5+ platforms)",
        "AI content creation with custom brand voice",
        "Active citation building campaign (40+ sites)",
        "Monthly performance analytics and optimization",
        "Social media advertising consultation",
        "Lead generation tracking and reporting",
      ],
      benefits: [
        "Actively attract new customers",
        "Consistent, engaging content that converts",
        "Dominate local search results",
        "Track real ROI from marketing efforts",
      ],
    },
    enterprise: {
      name: "Enterprise Solution",
      subtitle: "Complete Marketing Automation",
      description:
        "For established businesses ready to scale with advanced automation and dedicated strategic support.",
      features: [
        "Everything in Growth Accelerator",
        "Premium multi-platform management (8+ platforms)",
        "AI chatbot implementation and training",
        "Email marketing automation sequences",
        "Advanced lead nurturing campaigns",
        "Dedicated account manager and monthly strategy calls",
        "Custom integrations and advanced reporting",
      ],
      benefits: [
        "Complete marketing automation",
        "Never lose a lead again",
        "Strategic guidance from marketing experts",
        "Scale without increasing workload",
      ],
    },
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-nautical-blue mb-6 font-heading">
            AI-Powered Solutions for Every Business
          </h2>
          <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
            From foundational visibility to complete digital transformation,
            choose the perfect solution to accelerate your local business
            growth.
          </p>
        </div>

        {/* Core Service Packages */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Foundation Package */}
          <div className="bg-gradient-to-br from-digital-teal/5 to-digital-teal/10 border-2 border-digital-teal/20 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col h-full backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-digital-teal to-digital-teal/80 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
              Foundation Package
            </h3>
            <p className="text-charcoal-gray mb-4 text-base leading-relaxed">
              Essential online presence and reputation management to establish
              credibility and maintain visibility.
            </p>
            <div className="bg-digital-teal/10 rounded-lg p-4 mb-6 border border-digital-teal/20 flex-grow">
              <div className="text-sm text-charcoal-gray space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-digital-teal mt-0.5">✓</span>
                  <span>AI-powered social media management</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-digital-teal mt-0.5">✓</span>
                  <span>Google Business Profile optimization</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-digital-teal mt-0.5">✓</span>
                  <span>Review monitoring & response</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-digital-teal mt-0.5">✓</span>
                  <span>Local citation audit & cleanup</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-auto">
              <button
                onClick={() => setSelectedPackage("foundation")}
                className="inline-block bg-digital-teal hover:bg-digital-teal/90 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg w-full"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Growth Accelerator */}
          <div className="bg-gradient-to-br from-solar-flare-coral/5 to-solar-flare-coral/10 border-2 border-solar-flare-coral rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group flex flex-col h-full backdrop-blur-sm">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-solar-flare-coral to-solar-flare-coral text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                MOST POPULAR
              </span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-solar-flare-coral to-solar-flare-coral/80 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
              Growth Accelerator
            </h3>
            <p className="text-charcoal-gray mb-4 text-base leading-relaxed">
              Complete digital marketing system designed to actively attract new
              customers and drive measurable growth.
            </p>
            <div className="bg-solar-flare-coral/10 rounded-lg p-4 mb-6 border border-solar-flare-coral/20 flex-grow">
              <div className="text-sm text-charcoal-gray space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-solar-flare-coral mt-0.5">✓</span>
                  <span>Everything in Foundation Package</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-solar-flare-coral mt-0.5">✓</span>
                  <span>Multi-platform social media strategy</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-solar-flare-coral mt-0.5">✓</span>
                  <span>AI content creation & scheduling</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-solar-flare-coral mt-0.5">✓</span>
                  <span>Active citation building campaign</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-solar-flare-coral mt-0.5">✓</span>
                  <span>Monthly performance analytics</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-auto">
              <button
                onClick={() => setSelectedPackage("growth")}
                className="inline-block bg-solar-flare-coral hover:bg-solar-flare-coral/90 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg w-full"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Enterprise Solution */}
          <div className="bg-gradient-to-br from-nautical-blue/5 to-nautical-blue/10 border-2 border-nautical-blue rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group flex flex-col h-full backdrop-blur-sm">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-nautical-blue to-nautical-blue text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg border border-nautical-blue/30">
                BEST VALUE
              </span>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-nautical-blue to-nautical-blue/80 rounded-lg mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
              Enterprise Solution
            </h3>
            <p className="text-charcoal-gray mb-4 text-base leading-relaxed">
              Complete digital marketing automation system for businesses ready
              to scale and lead their market.
            </p>
            <div className="bg-nautical-blue/10 rounded-lg p-4 mb-6 border border-nautical-blue/20 flex-grow">
              <div className="text-sm text-charcoal-gray space-y-2">
                <div className="flex items-start gap-2">
                  <span className="text-nautical-blue mt-0.5">✓</span>
                  <span>Everything in Growth Accelerator</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-nautical-blue mt-0.5">✓</span>
                  <span>Premium multi-platform management</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-nautical-blue mt-0.5">✓</span>
                  <span>AI chatbot implementation & training</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-nautical-blue mt-0.5">✓</span>
                  <span>Email marketing automation sequences</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-nautical-blue mt-0.5">✓</span>
                  <span>Dedicated account manager & strategy</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-auto">
              <button
                onClick={() => setSelectedPackage("enterprise")}
                className="inline-block bg-nautical-blue hover:bg-nautical-blue/90 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg w-full"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Additional Services Section */}
        <div className="bg-gradient-to-br from-ami-sand to-ami-sand/80 rounded-2xl p-8 text-center border border-ami-sand/50 shadow-lg">
          <div className="max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-nautical-blue rounded-full mx-auto mb-6 flex items-center justify-center">
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
                  d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
              Custom Solutions & One-Time Projects
            </h3>
            <p className="text-charcoal-gray mb-6 max-w-3xl mx-auto leading-relaxed">
              Need something specific? We offer custom solutions and one-time
              projects including website development, SEO optimization, brand
              design, specialized automation setups, custom software solutions,
              and more.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm text-charcoal-gray">
              <div className="flex items-center gap-2">
                <span className="text-digital-teal">✓</span>
                <span>Custom Next.JS Websites</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-digital-teal">✓</span>
                <span>SEO Landing Pages</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-digital-teal">✓</span>
                <span>Brand Design</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-digital-teal">✓</span>
                <span>Automation Setup</span>
              </div>
            </div>
            <Link
              href="#contact"
              className="inline-block bg-nautical-blue hover:bg-nautical-blue/90 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 hover:shadow-lg"
            >
              Discuss Your Project
            </Link>
          </div>
        </div>
      </div>

      {/* Package Details Modal */}
      {selectedPackage && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedPackage(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Top Right */}
            <button
              onClick={() => setSelectedPackage(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white hover:bg-gray-50 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-600 transition-all duration-200 shadow-md hover:shadow-lg border border-gray-200"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="grid md:grid-cols-3 gap-0">
              {/* Content Section - 2/3 width */}
              <div className="md:col-span-2 p-8 pr-16">
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-16 h-16 rounded-xl flex items-center justify-center ${
                        selectedPackage === "foundation"
                          ? "bg-digital-teal"
                          : selectedPackage === "growth"
                          ? "bg-solar-flare-coral"
                          : "bg-nautical-blue"
                      }`}
                    >
                      {selectedPackage === "foundation" && (
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
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      )}
                      {selectedPackage === "growth" && (
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
                            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                          />
                        </svg>
                      )}
                      {selectedPackage === "enterprise" && (
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
                            d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                          />
                        </svg>
                      )}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-nautical-blue mb-1 font-heading">
                        {
                          packages[selectedPackage as keyof typeof packages]
                            .name
                        }
                      </h2>
                      <p
                        className={`text-lg font-semibold ${
                          selectedPackage === "foundation"
                            ? "text-digital-teal"
                            : selectedPackage === "growth"
                            ? "text-solar-flare-coral"
                            : "text-nautical-blue"
                        }`}
                      >
                        {
                          packages[selectedPackage as keyof typeof packages]
                            .subtitle
                        }
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-charcoal-gray mb-8 text-lg leading-relaxed">
                  {
                    packages[selectedPackage as keyof typeof packages]
                      .description
                  }
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-nautical-blue mb-4">
                    What's Included:
                  </h3>
                  <div className="space-y-3">
                    {packages[
                      selectedPackage as keyof typeof packages
                    ].features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span
                          className={`mt-1 flex-shrink-0 ${
                            selectedPackage === "foundation"
                              ? "text-digital-teal"
                              : selectedPackage === "growth"
                              ? "text-solar-flare-coral"
                              : "text-nautical-blue"
                          }`}
                        >
                          ✓
                        </span>
                        <span className="text-charcoal-gray">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-nautical-blue mb-4">
                    Key Benefits:
                  </h3>
                  <div className="space-y-3">
                    {packages[
                      selectedPackage as keyof typeof packages
                    ].benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span
                          className={`mt-1 flex-shrink-0 ${
                            selectedPackage === "foundation"
                              ? "text-digital-teal"
                              : selectedPackage === "growth"
                              ? "text-solar-flare-coral"
                              : "text-nautical-blue"
                          }`}
                        >
                          →
                        </span>
                        <span className="text-charcoal-gray font-medium">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section - 1/3 width */}
              <div className="bg-gray-50 p-8 rounded-r-2xl md:rounded-l-none rounded-b-2xl md:rounded-b-none flex flex-col justify-center border-l border-gray-200">
                <div className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center ${
                      selectedPackage === "foundation"
                        ? "bg-digital-teal"
                        : selectedPackage === "growth"
                        ? "bg-solar-flare-coral"
                        : "bg-nautical-blue"
                    }`}
                  >
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
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-nautical-blue">
                    Ready to Get Started?
                  </h3>

                  <p className="text-charcoal-gray mb-8 leading-relaxed">
                    Let's discuss how this package can transform your business.
                    Get your free audit and custom strategy.
                  </p>

                  <div className="space-y-4 mb-8">
                    <Link
                      href="/funnel"
                      className={`block text-white px-6 py-4 rounded-lg font-bold transition-all duration-300 hover:shadow-lg text-center ${
                        selectedPackage === "foundation"
                          ? "bg-digital-teal hover:bg-digital-teal/90"
                          : selectedPackage === "growth"
                          ? "bg-solar-flare-coral hover:bg-solar-flare-coral/90"
                          : "bg-nautical-blue hover:bg-nautical-blue/90"
                      }`}
                    >
                      Get Your FREE Audit
                    </Link>

                    <div className="text-center">
                      <p className="text-gray-600 text-sm">
                        ✓ No commitment required
                        <br />
                        ✓ Custom strategy included
                        <br />✓ Usually $299 - FREE for limited time
                      </p>
                    </div>
                  </div>

                  {/* Contact for Pricing */}
                  <div className="border-t border-gray-200 pt-6">
                    <h4 className="text-lg font-bold mb-2 text-nautical-blue">
                      Contact for Pricing
                    </h4>
                    <p className="text-sm text-gray-600 mb-4">
                      Get a custom quote tailored to your business needs
                    </p>

                    <div className="space-y-3">
                      <a
                        href={`tel:${formatPhone.tel}`}
                        className="flex items-center gap-3 bg-white hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 text-left border border-gray-200 hover:border-gray-300"
                      >
                        <svg
                          className={`w-5 h-5 ${
                            selectedPackage === "foundation"
                              ? "text-digital-teal"
                              : selectedPackage === "growth"
                              ? "text-solar-flare-coral"
                              : "text-nautical-blue"
                          }`}
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
                        <div>
                          <div className="font-semibold text-gray-800">
                            Call Now
                          </div>
                          <div className="text-sm text-gray-600">
                            {formatPhone.display}
                          </div>
                        </div>
                      </a>

                      <a
                        href={`mailto:${
                          CONTACT_INFO.email
                        }?subject=Interest%20in%20${encodeURIComponent(
                          packages[selectedPackage as keyof typeof packages]
                            .name
                        )}&body=${encodeURIComponent(`Hi there,

I'm interested in learning more about the ${
                          packages[selectedPackage as keyof typeof packages]
                            .name
                        } and would like to discuss pricing and implementation.

My Contact Information:
Name: 
Phone: 
Email: 

My Business Information:
Business Name: 
Industry: 
Location: 
Website: 

Additional Details:
Please share any specific goals, challenges, or questions you have about the ${
                          packages[selectedPackage as keyof typeof packages]
                            .name
                        }

Thank you!`)}`}
                        className="flex items-center gap-3 bg-white hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 text-left border border-gray-200 hover:border-gray-300"
                      >
                        <svg
                          className={`w-5 h-5 ${
                            selectedPackage === "foundation"
                              ? "text-digital-teal"
                              : selectedPackage === "growth"
                              ? "text-solar-flare-coral"
                              : "text-nautical-blue"
                          }`}
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
                        <div>
                          <div className="font-semibold text-gray-800">
                            Email Us
                          </div>
                          <div className="text-sm text-gray-600">
                            {CONTACT_INFO.email}
                          </div>
                        </div>
                      </a>

                      <a
                        href={`sms:${
                          formatPhone.sms
                        }?body=${encodeURIComponent(`Hi! I'm interested in the ${
                          packages[selectedPackage as keyof typeof packages]
                            .name
                        } from ${CONTACT_INFO.company.name}.

My info:
Name: 
Business: 
Phone: 
Email: 

Please contact me to discuss pricing and next steps. Thanks!`)}`}
                        className="flex items-center gap-3 bg-white hover:bg-gray-50 p-3 rounded-lg transition-all duration-300 text-left border border-gray-200 hover:border-gray-300"
                      >
                        <svg
                          className={`w-5 h-5 ${
                            selectedPackage === "foundation"
                              ? "text-digital-teal"
                              : selectedPackage === "growth"
                              ? "text-solar-flare-coral"
                              : "text-nautical-blue"
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                        <div>
                          <div className="font-semibold text-gray-800">
                            Text Us
                          </div>
                          <div className="text-sm text-gray-600">
                            {formatPhone.display}
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
