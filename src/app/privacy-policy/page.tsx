import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateSEOMetadata } from "@/lib/seo";
import { CONTACT_INFO } from "@/config/contact";

export const metadata = generateSEOMetadata({
  title: "Privacy Policy | Gravix Strategic Edge",
  description:
    "Learn how Gravix Strategic Edge protects your privacy and handles your personal information. We are committed to transparency and data security.",
  url: "/privacy-policy",
});

export default function PrivacyPolicy() {
  const lastUpdated = "December 25, 2024";

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-black text-nautical-blue mb-6 font-heading">
              Privacy Policy
            </h1>
            <p className="text-xl text-charcoal-gray max-w-3xl mx-auto">
              We respect your privacy and are committed to protecting your
              personal information. This policy explains how we collect, use,
              and safeguard your data.
            </p>
            <div className="mt-4 text-sm text-gray-600">
              Last Updated: {lastUpdated}
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-nautical-blue mb-4">
                Quick Summary
              </h2>
              <ul className="text-charcoal-gray space-y-2">
                <li>
                  ✓ We only collect information necessary to provide our
                  services
                </li>
                <li>
                  ✓ We never sell your personal information to third parties
                </li>
                <li>
                  ✓ We use industry-standard security measures to protect your
                  data
                </li>
                <li>
                  ✓ You can request to see, update, or delete your information
                  at any time
                </li>
              </ul>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Information We Collect
              </h2>

              <h3 className="text-2xl font-semibold text-nautical-blue mb-4">
                Information You Provide
              </h3>
              <p className="text-charcoal-gray mb-4">
                When you use our services, we may collect information you
                voluntarily provide, including:
              </p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information (company name, website, industry)</li>
                <li>Marketing audit requests and business goals</li>
                <li>Communication preferences and feedback</li>
              </ul>

              <h3 className="text-2xl font-semibold text-nautical-blue mb-4">
                Automatically Collected Information
              </h3>
              <p className="text-charcoal-gray mb-4">
                We automatically collect certain information when you visit our
                website:
              </p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>IP address and location data</li>
                <li>Browser type and device information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referral sources and search terms</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                How We Use Your Information
              </h2>
              <p className="text-charcoal-gray mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>Provide and improve our marketing services</li>
                <li>Communicate with you about our services and updates</li>
                <li>Conduct marketing audits and provide recommendations</li>
                <li>Analyze website performance and user experience</li>
                <li>Comply with legal obligations and protect our rights</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Information Sharing
              </h2>
              <p className="text-charcoal-gray mb-4">
                We do not sell, trade, or rent your personal information. We may
                share your information only in these circumstances:
              </p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>With your explicit consent</li>
                <li>
                  With service providers who help us operate our business (under
                  strict confidentiality agreements)
                </li>
                <li>When required by law or to protect our legal rights</li>
                <li>In connection with a business transfer or acquisition</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Data Security
              </h2>
              <p className="text-charcoal-gray mb-6">
                We implement appropriate technical and organizational measures
                to protect your personal information, including:
              </p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>SSL encryption for data transmission</li>
                <li>Secure servers and databases</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Your Rights
              </h2>
              <p className="text-charcoal-gray mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-charcoal-gray mb-6 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt out of marketing communications</li>
                <li>Request data portability</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Cookies and Tracking
              </h2>
              <p className="text-charcoal-gray mb-6">
                We use cookies and similar technologies to improve your
                experience on our website. You can control cookie settings
                through your browser preferences.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Contact Us
              </h2>
              <p className="text-charcoal-gray mb-4">
                If you have questions about this Privacy Policy or our data
                practices, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-charcoal-gray mb-2">
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-nautical-blue hover:underline"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p className="text-charcoal-gray mb-2">
                  <strong>Phone:</strong>{" "}
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-nautical-blue hover:underline"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </p>
                <p className="text-charcoal-gray">
                  <strong>Company:</strong> {CONTACT_INFO.company.name}
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-nautical-blue mb-6">
                Changes to This Policy
              </h2>
              <p className="text-charcoal-gray mb-6">
                We may update this Privacy Policy from time to time. We will
                notify you of significant changes by posting the new policy on
                our website and updating the "Last Updated" date.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
