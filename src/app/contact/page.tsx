import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactSection from "@/components/home/ContactSection";
import FAQSection from "@/components/contact/FAQSection";
import { contactFAQs } from "@/data/faqs";
import {
  generateSEOMetadata,
  combineKeywords,
  commonKeywords,
} from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Contact Us | Gravix Strategic Edge - Get Your Free Marketing Audit",
  description:
    "Ready to transform your local business with AI-powered marketing? Contact Gravix Strategic Edge today for your free marketing audit and consultation.",
  keywords: combineKeywords(
    commonKeywords.localMarketing,
    commonKeywords.aiMarketing,
    [
      "contact",
      "free consultation",
      "marketing audit",
      "get started",
      "business consultation",
    ]
  ),
  url: "/contact",
});

export default function Contact() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main>
        {/* Contact Section */}
        <ContactSection />

        {/* FAQ Section */}
        <FAQSection faqs={contactFAQs} />
      </main>

      <Footer />
    </div>
  );
}
