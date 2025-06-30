"use client";

import { useState } from "react";

export default function ServicesList() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const services = [
    {
      id: 1,
      category: "website",
      title: "Custom Full Website Design & Development",
      description:
        "Complete custom website built from scratch with modern design, mobile responsiveness, and optimized for conversions.",
      duration: "3-4 weeks",
      deliverables: [
        "Custom responsive design",
        "Content management system",
        "SEO optimization",
        "Performance optimization",
        "Mobile-first approach",
        "Analytics integration",
        "Ongoing support included",
      ],
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
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      category: "branding",
      title: "Brand Refresh & Rebranding Kit",
      description:
        "Complete brand makeover including logo design, color palette, typography, and brand guidelines to modernize your business.",
      duration: "2-3 weeks",
      deliverables: [
        "Logo design & variations",
        "Brand color palette",
        "Typography selection",
        "Brand guidelines document",
        "Business card design",
        "Letterhead template",
        "Social media templates",
      ],
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
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2M9 3h10a2 2 0 012 2v12a4 4 0 01-4 4H9"
          />
        </svg>
      ),
    },
    {
      id: 3,
      category: "automation",
      title: "Tour & Rental Booking System Setup",
      description:
        "Automated booking system for tours or rentals with payment processing, calendar integration, and customer management.",
      duration: "2-3 weeks",
      deliverables: [
        "Custom booking interface",
        "Payment gateway integration",
        "Calendar synchronization",
        "Automated confirmations",
        "Customer database",
        "Reporting dashboard",
        "Mobile-friendly design",
      ],
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
            d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l6-6m0 0v6m0-6H6"
          />
        </svg>
      ),
    },
    {
      id: 4,
      category: "automation",
      title: "Chatbot Service System Setup",
      description:
        "AI-powered chatbot to handle customer inquiries, bookings, and support 24/7 with seamless integration to your website.",
      duration: "1-2 weeks",
      deliverables: [
        "Custom chatbot development",
        "AI conversation training",
        "Website integration",
        "Lead capture setup",
        "Analytics dashboard",
        "Multi-platform deployment",
        "Ongoing optimization",
      ],
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
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      id: 5,
      category: "seo",
      title: "SEO Landing Page Creation",
      description:
        "High-converting landing page optimized for search engines and designed to capture leads and drive conversions.",
      duration: "1-2 weeks",
      deliverables: [
        "Custom landing page design",
        "SEO optimization",
        "Conversion optimization",
        "Mobile responsiveness",
        "Analytics integration",
        "Lead capture forms",
        "A/B testing setup",
      ],
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
            d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7z"
          />
        </svg>
      ),
    },
    {
      id: 6,
      category: "seo",
      title: "Website SEO Optimization",
      description:
        "Complete SEO audit and optimization of your existing website to improve search engine rankings and organic traffic.",
      duration: "1-2 weeks",
      deliverables: [
        "Full SEO audit & analysis",
        "On-page optimization",
        "Technical SEO fixes",
        "Content optimization",
        "Local SEO setup",
        "Google Search Console setup",
        "Performance report",
      ],
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      id: 7,
      category: "local",
      title: "Initial Google Business Profile Setup",
      description:
        "Complete setup and optimization of your Google Business Profile to improve local search visibility and attract customers.",
      duration: "3-5 business days",
      deliverables: [
        "Profile creation & verification",
        "Business information optimization",
        "Photo uploads & optimization",
        "Service/product listings",
        "Review management setup",
        "Post scheduling strategy",
      ],
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
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 8,
      category: "social",
      title: "Social Media Branding Setup",
      description:
        "Professional social media profile setup across major platforms with consistent branding and optimization for engagement.",
      duration: "5-7 business days",
      deliverables: [
        "Profile setup (3 platforms)",
        "Custom graphics & covers",
        "Bio optimization",
        "Brand consistency",
        "Content strategy basics",
        "Hashtag research",
      ],
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
            d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
          />
        </svg>
      ),
    },
    {
      id: 9,
      category: "content",
      title: "Blog Setup on Existing Website",
      description:
        "Professional blog integration into your existing website with SEO optimization and content management system setup.",
      duration: "3-5 business days",
      deliverables: [
        "Blog system integration",
        "Custom blog design",
        "SEO optimization",
        "Category setup",
        "Author profiles",
        "Social sharing integration",
      ],
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
            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
          />
        </svg>
      ),
    },
  ];

  const categories = [
    { id: "all", name: "All Services" },
    { id: "website", name: "Website" },
    { id: "branding", name: "Branding" },
    { id: "automation", name: "Automation" },
    { id: "seo", name: "SEO" },
    { id: "local", name: "Local SEO" },
    { id: "social", name: "Social Media" },
    { id: "content", name: "Content" },
  ];

  const filteredServices =
    selectedCategory === "all"
      ? services
      : services.filter((service) => service.category === selectedCategory);

  return (
    <section id="services-list" className="py-20 bg-ami-sand">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black font-heading text-nautical-blue mb-6">
            Professional One-Time Services
          </h2>
          <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
            Expert marketing and development services delivered quickly without
            long-term contracts. Choose exactly what you need to grow your
            business today.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-nautical-blue text-white shadow-lg"
                  : "bg-white text-charcoal-gray hover:bg-nautical-blue hover:text-white border border-charcoal-gray/20"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105 flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-gradient-to-br from-nautical-blue to-digital-teal text-white p-3 rounded-lg">
                    {service.icon}
                  </div>
                  <div className="bg-gradient-to-r from-solar-flare-coral to-yellow-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    One-Time
                  </div>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-nautical-blue mb-3">
                  {service.title}
                </h3>
                <p className="text-charcoal-gray mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Duration */}
                <div className="bg-ami-sand/50 rounded-lg p-3 mb-4">
                  <div className="flex items-center text-sm text-charcoal-gray">
                    <svg
                      className="w-4 h-4 mr-2 text-digital-teal"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <strong>Delivery:</strong> {service.duration}
                  </div>
                </div>

                {/* Deliverables */}
                <div className="mb-6 flex-1">
                  <h4 className="font-semibold text-nautical-blue mb-2">
                    What You'll Get:
                  </h4>
                  <ul className="space-y-1">
                    {service.deliverables.map((deliverable, index) => (
                      <li
                        key={index}
                        className="flex items-start text-sm text-charcoal-gray"
                      >
                        <svg
                          className="w-4 h-4 mr-2 mt-0.5 text-digital-teal flex-shrink-0"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-auto">
                  <a
                    href={`mailto:CustomServices@GSE.codes?subject=Request Quote for ${service.title}&body=Hi! I'm interested in getting a quote for the ${service.title} service.%0A%0AService Details:%0A- ${service.title}%0A- Duration: ${service.duration}%0A%0APlease provide me with pricing and next steps.%0A%0AThanks!`}
                    className="block w-full bg-solar-flare-coral hover:bg-solar-flare-coral/90 text-white py-3 px-6 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl group-hover:shadow-solar-flare-coral/50 text-center"
                  >
                    Request Quote
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-nautical-blue to-digital-teal text-white rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Not Sure Which Service You Need?
            </h3>
            <p className="text-ami-sand mb-6">
              Start with our FREE comprehensive audit to identify your biggest
              opportunities and get personalized recommendations.
            </p>
            <a
              href="/funnel"
              className="inline-block bg-solar-flare-coral hover:bg-solar-flare-coral/90 text-white px-8 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Get Your Free $299 Audit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
