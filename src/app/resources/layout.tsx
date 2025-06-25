import {
  generateSEOMetadata,
  combineKeywords,
  commonKeywords,
} from "@/lib/seo";

export const metadata = generateSEOMetadata({
  title: "Digital Marketing Resources & Insights | Gravix Strategic Edge",
  description:
    "Expert insights on AI-powered marketing, local SEO strategies, and business growth tips. Learn how to dominate your local market with proven digital marketing techniques.",
  keywords: combineKeywords(
    commonKeywords.localMarketing,
    commonKeywords.aiMarketing,
    [
      "marketing tips",
      "SEO guide",
      "business growth",
      "marketing insights",
      "digital marketing blog",
    ]
  ),
  url: "/resources",
});

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className="min-h-screen bg-white">{children}</article>;
}
