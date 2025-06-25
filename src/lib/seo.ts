import { Metadata } from "next";

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string[];
  url?: string;
  image?: string;
  type?: "website" | "article" | "profile";
  siteName?: string;
  locale?: string;
  noIndex?: boolean;
  noFollow?: boolean;
}

const defaultConfig = {
  siteName: "Gravix Strategic Edge",
  locale: "en_US",
  type: "website" as const,
  image: "/images/gse-og-image.png",
  baseUrl: "https://gravixstrategicedge.com",
};

export function generateSEOMetadata(config: SEOConfig): Metadata {
  const {
    title = "Gravix Strategic Edge - AI-Powered Local Marketing Solutions",
    description = "Transform your local business with AI-powered marketing automation. We help businesses dominate local search, attract more customers, and scale their online presence.",
    keywords = [],
    url = defaultConfig.baseUrl,
    image = defaultConfig.image,
    type = defaultConfig.type,
    siteName = defaultConfig.siteName,
    locale = defaultConfig.locale,
    noIndex = false,
    noFollow = false,
  } = config;

  const fullUrl = url.startsWith("http")
    ? url
    : `${defaultConfig.baseUrl}${url}`;
  const fullImageUrl = image.startsWith("http")
    ? image
    : `${defaultConfig.baseUrl}${image}`;

  return {
    title,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    authors: [{ name: siteName }],
    creator: siteName,
    publisher: siteName,
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(defaultConfig.baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName,
      images: [
        {
          url: fullImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale,
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fullImageUrl],
      creator: "@GravixSE",
    },
    robots: {
      index: !noIndex,
      follow: !noFollow,
      googleBot: {
        index: !noIndex,
        follow: !noFollow,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export const commonKeywords = {
  localMarketing: [
    "local marketing",
    "local business marketing",
    "local SEO",
    "local search optimization",
    "local digital marketing",
    "local advertising",
    "local business growth",
    "local search marketing",
  ],
  aiMarketing: [
    "AI marketing",
    "AI marketing automation",
    "automated marketing",
    "marketing automation",
    "AI-powered marketing",
    "artificial intelligence marketing",
    "smart marketing solutions",
    "automated digital marketing",
  ],
  services: [
    "social media management",
    "Google Business Profile optimization",
    "online reputation management",
    "review management",
    "citation building",
    "lead generation",
    "email marketing automation",
    "chatbot implementation",
  ],
  business: [
    "small business marketing",
    "local business solutions",
    "business growth strategies",
    "marketing consultation",
    "digital marketing agency",
    "marketing strategy",
    "business automation",
    "customer acquisition",
  ],
};

export function combineKeywords(...keywordGroups: string[][]): string[] {
  return keywordGroups.flat();
}

export function generateBreadcrumbStructuredData(
  breadcrumbs: Array<{ name: string; url: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((breadcrumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: breadcrumb.name,
      item: breadcrumb.url,
    })),
  };
}

export function generateFAQStructuredData(
  faqs: Array<{ question: string; answer: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateArticleStructuredData(article: {
  title: string;
  description: string;
  author: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: {
      "@type": "Person",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: defaultConfig.siteName,
      logo: {
        "@type": "ImageObject",
        url: `${defaultConfig.baseUrl}/images/gse-logo.png`,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified || article.datePublished,
    image: article.image
      ? `${defaultConfig.baseUrl}${article.image}`
      : undefined,
    url: article.url,
  };
}
