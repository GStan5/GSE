"use client";

import { CONTACT_INFO } from "@/config/contact";

interface StructuredDataProps {
  type?: "organization" | "localBusiness" | "service" | "webpage";
  title?: string;
  description?: string;
  url?: string;
}

export default function StructuredData({
  type = "organization",
  title,
  description,
  url,
}: StructuredDataProps) {
  const baseUrl = "https://gravixstrategicedge.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CONTACT_INFO.company.name,
    alternateName: "GSE",
    description:
      "AI-powered local marketing solutions helping businesses dominate local search and attract more customers through automated digital marketing strategies.",
    url: baseUrl,
    logo: `${baseUrl}/images/gse-logo.png`,
    image: `${baseUrl}/images/gse-og-image.png`,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Local Service Area",
      addressCountry: "US",
    },
    sameAs: [
      CONTACT_INFO.social.facebook,
      CONTACT_INFO.social.twitter,
      CONTACT_INFO.social.linkedin,
      CONTACT_INFO.social.instagram,
    ],
    foundingDate: "2024",
    numberOfEmployees: "2-10",
    slogan: "Your Strategic Edge in Digital Marketing",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Foundation Package",
            description:
              "Essential online presence and reputation management for local businesses",
            serviceType: "Digital Marketing",
            provider: {
              "@type": "Organization",
              name: CONTACT_INFO.company.name,
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Growth Accelerator",
            description:
              "Complete digital marketing system to actively attract new customers",
            serviceType: "Digital Marketing",
            provider: {
              "@type": "Organization",
              name: CONTACT_INFO.company.name,
            },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Enterprise Solution",
            description:
              "Complete marketing automation for businesses ready to scale",
            serviceType: "Digital Marketing",
            provider: {
              "@type": "Organization",
              name: CONTACT_INFO.company.name,
            },
          },
        },
      ],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}#organization`,
    name: CONTACT_INFO.company.name,
    description:
      "Local digital marketing agency specializing in AI-powered marketing automation, local SEO, and online reputation management.",
    url: baseUrl,
    telephone: CONTACT_INFO.phone,
    email: CONTACT_INFO.email,
    image: `${baseUrl}/images/gse-logo.png`,
    logo: `${baseUrl}/images/gse-logo.png`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Local Service Area",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "0.0000",
      longitude: "0.0000",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Credit Card, Bank Transfer, PayPal",
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: "0.0000",
        longitude: "0.0000",
      },
      geoRadius: "50000", // 50km radius
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title || "AI-Powered Local Marketing Solutions",
    description:
      description ||
      "Comprehensive digital marketing services including AI automation, local SEO, social media management, and online reputation management.",
    provider: {
      "@type": "Organization",
      name: CONTACT_INFO.company.name,
      url: baseUrl,
      telephone: CONTACT_INFO.phone,
      email: CONTACT_INFO.email,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI-Powered Social Media Management",
            description:
              "Automated social media content creation, scheduling, and engagement management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Local SEO Optimization",
            description:
              "Google Business Profile optimization, local citation building, and review management",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Marketing Automation",
            description:
              "Email marketing automation, lead nurturing, and customer journey optimization",
          },
        },
      ],
    },
  };

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": url || baseUrl,
    url: url || baseUrl,
    name:
      title || "Gravix Strategic Edge - AI-Powered Local Marketing Solutions",
    description:
      description ||
      "Transform your local business with AI-powered marketing automation and proven digital marketing strategies.",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${baseUrl}#website`,
      url: baseUrl,
      name: CONTACT_INFO.company.name,
      description: "AI-powered local marketing solutions",
      publisher: {
        "@type": "Organization",
        "@id": `${baseUrl}#organization`,
      },
    },
    about: {
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
    },
    mainEntity: {
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
    },
  };

  const getSchema = () => {
    switch (type) {
      case "localBusiness":
        return localBusinessSchema;
      case "service":
        return serviceSchema;
      case "webpage":
        return webpageSchema;
      default:
        return organizationSchema;
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getSchema()),
      }}
    />
  );
}
