import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Frequently Asked Questions | Gravix Strategic Edge",
  description:
    "Find answers to common questions about our AI-powered local marketing services, pricing, processes, and how we help businesses dominate their local markets.",
  url: "/faq",
});

const faqs = [
  {
    category: "General Services",
    questions: [
      {
        question:
          "What makes Gravix Strategic Edge different from other marketing agencies?",
        answer:
          "We specialize exclusively in AI-powered local marketing solutions. Unlike traditional agencies, we use cutting-edge artificial intelligence to optimize your local search presence, automate customer acquisition, and provide data-driven insights that deliver measurable results for local businesses.",
      },
      {
        question: "What types of businesses do you work with?",
        answer:
          "We work with local service-based businesses including restaurants, healthcare practices, law firms, home services, retail stores, and professional services. Our strategies are specifically designed for businesses that serve customers in their local geographic area.",
      },
      {
        question: "How quickly can I expect to see results?",
        answer:
          "Most clients begin seeing improvements in their local search rankings within 30-60 days. However, significant traffic and lead generation improvements typically become apparent within 60-90 days. Full optimization results are usually achieved within 3-6 months.",
      },
    ],
  },
  {
    category: "Pricing & Packages",
    questions: [
      {
        question: "What's included in the free marketing audit?",
        answer:
          "Our comprehensive audit includes local SEO analysis, Google Business Profile optimization review, competitor analysis, website performance evaluation, online reputation assessment, and a detailed action plan with specific recommendations for improvement.",
      },
      {
        question:
          "Do you offer month-to-month services or require long-term contracts?",
        answer:
          "We offer flexible engagement options. While we recommend 6-month commitments for optimal results, we can work with month-to-month arrangements. Our Growth and Enterprise packages include different commitment levels to suit your business needs.",
      },
      {
        question: "Are there any setup fees or hidden costs?",
        answer:
          "No hidden fees. Our packages are transparent with all costs outlined upfront. Some services may require one-time setup fees for things like website optimization or Google Ads account setup, but these are always discussed and approved before implementation.",
      },
    ],
  },
  {
    category: "Process & Implementation",
    questions: [
      {
        question: "How do you measure and report results?",
        answer:
          "We provide detailed monthly reports showing key metrics including local search rankings, Google Business Profile insights, website traffic, lead generation, and conversion rates. You'll have access to a client dashboard with real-time performance data.",
      },
      {
        question: "What information do you need to get started?",
        answer:
          "We'll need access to your Google Business Profile, website analytics (if available), current marketing materials, competitor information, and details about your target customers and service areas. Our onboarding process guides you through everything step-by-step.",
      },
      {
        question: "Can you work with my existing website?",
        answer:
          "Absolutely! We can optimize your existing website for local search and mobile performance. If your current site needs significant improvements, we'll recommend updates or redesign options that align with your budget and goals.",
      },
    ],
  },
  {
    category: "Technology & AI",
    questions: [
      {
        question: "How do you use AI in your marketing strategies?",
        answer:
          "Our AI tools analyze local search patterns, predict customer behavior, optimize ad targeting, automate review management, and identify the most effective keywords and content strategies for your specific market and competition.",
      },
      {
        question: "Is my business data secure?",
        answer:
          "Yes, we take data security seriously. We use enterprise-grade security measures, encrypted connections, and follow strict privacy protocols. We never share your business data with third parties and maintain full confidentiality.",
      },
      {
        question: "Do I need to understand the technical aspects?",
        answer:
          "Not at all! We handle all the technical implementation while keeping you informed with clear, jargon-free reports. Our team explains everything in simple terms and focuses on the business impact rather than technical details.",
      },
    ],
  },
  {
    category: "Support & Communication",
    questions: [
      {
        question: "How often will we communicate about my campaign?",
        answer:
          "You'll receive monthly detailed reports, and we're available for questions anytime via email or phone. For Enterprise clients, we provide bi-weekly check-ins and quarterly strategy reviews. We believe in transparent, regular communication.",
      },
      {
        question: "What if I'm not satisfied with the results?",
        answer:
          "We're committed to your success. If you're not seeing the agreed-upon results within the first 90 days, we'll work with you to adjust the strategy at no additional cost. Our goal is long-term partnerships, not short-term contracts.",
      },
      {
        question: "Can I cancel my service anytime?",
        answer:
          "Yes, you can cancel with 30 days written notice. We believe in earning your business every month through results, not locking you into contracts. However, we do recommend giving campaigns at least 3-6 months to show full potential.",
      },
    ],
  },
];

export default function FAQ() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-br from-nautical-blue/5 to-digital-teal/5">
          <div className="max-w-6xl mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-black text-nautical-blue mb-6 font-heading">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-charcoal-gray max-w-3xl mx-auto leading-relaxed">
                Get answers to common questions about our AI-powered local
                marketing services. Can't find what you're looking for?{" "}
                <a
                  href="#contact"
                  className="text-digital-teal hover:underline font-semibold"
                >
                  Contact us directly
                </a>
                .
              </p>
            </div>

            {/* FAQ Content */}
            <div className="space-y-12">
              {faqs.map((category, categoryIndex) => (
                <div
                  key={categoryIndex}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <h2 className="text-2xl font-bold text-nautical-blue mb-8 font-heading border-b border-gray-200 pb-4">
                    {category.category}
                  </h2>

                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div
                        key={faqIndex}
                        className="border-b border-gray-100 last:border-b-0 pb-6 last:pb-0"
                      >
                        <h3 className="text-lg font-bold text-nautical-blue mb-3 font-heading">
                          {faq.question}
                        </h3>
                        <p className="text-charcoal-gray leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-nautical-blue to-digital-teal rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
                Still Have Questions?
              </h2>
              <p className="text-xl mb-8 text-ami-sand">
                Our team is here to help you understand how our AI-powered
                solutions can transform your local business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/funnel"
                  className="bg-white hover:bg-gray-100 text-nautical-blue px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-2"
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
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                  Get Free Audit
                </a>
                <a
                  href="tel:+16162006370"
                  className="bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white flex items-center gap-2"
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
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  Call (616) 200-6370
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
