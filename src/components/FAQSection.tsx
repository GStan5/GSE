interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
  className?: string;
}

export default function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Get answers to common questions about our services and process.",
  faqs,
  className = "",
}: FAQSectionProps) {
  return (
    <section className={`py-20 bg-gray-50 ${className}`}>
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-nautical-blue mb-6 font-heading">
            {title}
          </h2>
          <p className="text-xl text-charcoal-gray">{subtitle}</p>
        </div>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-nautical-blue mb-4">
                {faq.question}
              </h3>
              <p className="text-charcoal-gray leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
