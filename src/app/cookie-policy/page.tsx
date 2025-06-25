import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { generateSEOMetadata } from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Cookie Policy | Gravix Strategic Edge",
  description:
    "Learn about how Gravix Strategic Edge uses cookies and similar technologies to improve your browsing experience and provide personalized services.",
  url: "/cookie-policy",
});

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />

      <main className="flex-grow">
        <section className="py-20 bg-gradient-to-br from-nautical-blue/5 to-digital-teal/5">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-black text-nautical-blue mb-6 font-heading">
                Cookie Policy
              </h1>

              <div className="text-charcoal-gray space-y-6 leading-relaxed">
                <div className="bg-ami-sand/20 p-6 rounded-xl border-l-4 border-digital-teal">
                  <p className="text-lg">
                    <strong>Last updated:</strong>{" "}
                    {new Date().toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>

                <section>
                  <h2 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
                    What Are Cookies?
                  </h2>
                  <p>
                    Cookies are small text files that are placed on your
                    computer or mobile device when you visit a website. They are
                    widely used to make websites work more efficiently and
                    provide information to website owners.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
                    How We Use Cookies
                  </h2>
                  <p className="mb-4">
                    Gravix Strategic Edge uses cookies to enhance your browsing
                    experience and improve our services. We use cookies for the
                    following purposes:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-nautical-blue mb-2">
                        Essential Cookies
                      </h3>
                      <p>
                        These cookies are necessary for the website to function
                        properly. They enable basic functions like page
                        navigation and access to secure areas of the website.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-nautical-blue mb-2">
                        Analytics Cookies
                      </h3>
                      <p>
                        We use Google Analytics and Microsoft Clarity to
                        understand how visitors interact with our website. This
                        helps us improve our services and user experience.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-nautical-blue mb-2">
                        Marketing Cookies
                      </h3>
                      <p>
                        These cookies track your browsing habits to provide
                        relevant advertisements and marketing content that may
                        interest you.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h3 className="font-bold text-nautical-blue mb-2">
                        Functional Cookies
                      </h3>
                      <p>
                        These cookies enable enhanced functionality and
                        personalization, such as remembering your preferences
                        and providing customized content.
                      </p>
                    </div>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
                    Third-Party Cookies
                  </h2>
                  <p className="mb-4">
                    Our website may contain content from third-party services
                    that may set their own cookies. These include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      <strong>Google Analytics:</strong> Helps us understand
                      website traffic and user behavior
                    </li>
                    <li>
                      <strong>Microsoft Clarity:</strong> Provides insights into
                      user interactions and website performance
                    </li>
                    <li>
                      <strong>Social Media Platforms:</strong> Enable sharing
                      and social media integration
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
                    Managing Your Cookie Preferences
                  </h2>
                  <p className="mb-4">
                    You can control and manage cookies in various ways:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Most web browsers allow you to control cookies through
                      their settings
                    </li>
                    <li>You can delete existing cookies from your device</li>
                    <li>
                      You can set your browser to prevent cookies from being
                      stored
                    </li>
                    <li>
                      You can opt out of Google Analytics by visiting:{" "}
                      <a
                        href="https://tools.google.com/dlpage/gaoptout"
                        className="text-digital-teal hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Google Analytics Opt-out
                      </a>
                    </li>
                  </ul>

                  <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-lg mt-4">
                    <p className="text-amber-800">
                      <strong>Please note:</strong> Disabling certain cookies
                      may affect the functionality of our website and your user
                      experience.
                    </p>
                  </div>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
                    Cookie Retention
                  </h2>
                  <p>Different cookies have different lifespans:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    <li>
                      <strong>Session Cookies:</strong> Deleted when you close
                      your browser
                    </li>
                    <li>
                      <strong>Persistent Cookies:</strong> Remain on your device
                      for a set period or until manually deleted
                    </li>
                    <li>
                      <strong>Analytics Cookies:</strong> Typically expire after
                      2 years
                    </li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
                    Updates to This Policy
                  </h2>
                  <p>
                    We may update this Cookie Policy from time to time to
                    reflect changes in our practices or applicable laws. We will
                    notify you of any material changes by posting the updated
                    policy on our website.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-bold text-nautical-blue mb-4 font-heading">
                    Contact Us
                  </h2>
                  <p className="mb-4">
                    If you have any questions about our Cookie Policy, please
                    contact us:
                  </p>
                  <div className="bg-nautical-blue/5 p-6 rounded-xl">
                    <div className="space-y-2">
                      <p>
                        <strong>Email:</strong>{" "}
                        <a
                          href="mailto:info@gravixstrategicedge.com"
                          className="text-digital-teal hover:underline"
                        >
                          info@gravixstrategicedge.com
                        </a>
                      </p>
                      <p>
                        <strong>Phone:</strong>{" "}
                        <a
                          href="tel:+16162006370"
                          className="text-digital-teal hover:underline"
                        >
                          (616) 200-6370
                        </a>
                      </p>
                      <p>
                        <strong>Address:</strong> Grand Rapids, MI
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
