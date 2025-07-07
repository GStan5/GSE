import { ChatbotResponse } from "@/types/chatbot";

const BUSINESS_INFO = {
  name: "Gravix Strategic Edge",
  phone: "(941) 900-3341",
  email: "info@gravixstrategicedge.com",
  services: [
    "Website Design & Development",
    "Local SEO Services",
    "Google Business Profile Setup",
    "Social Media Management",
    "Tour/Rental Booking System",
    "Website SEO Optimization",
    "Chatbot Service System Setup",
    "Review Management System",
    "Citation Building Service",
  ],
};

const QUICK_REPLIES = [
  "Tell me about your services",
  "How much does it cost?",
  "Schedule a consultation",
  "Contact information",
  "How long does it take?",
  "Do you offer hosting?",
];

export async function getChatbotResponse(
  userMessage: string
): Promise<ChatbotResponse> {
  const message = userMessage.toLowerCase();

  // Greeting responses
  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey")
  ) {
    return {
      message:
        "Hello! I'm here to help you learn about our AI-powered local marketing solutions. What would you like to know about?",
      quickReplies: QUICK_REPLIES.slice(0, 3),
    };
  }

  // Services inquiry
  if (
    message.includes("service") ||
    message.includes("what do you do") ||
    message.includes("what can you help")
  ) {
    return {
      message: `We offer comprehensive local marketing solutions including:\n\n• Website Design & Development\n• Local SEO Services\n• Google Business Profile Setup\n• Social Media Management\n• Tour/Rental Booking Systems\n• Website SEO Optimization\n• Chatbot Setup (like this one!)\n• Review Management\n• Citation Building\n\nWhich service interests you most?`,
      quickReplies: [
        "Website Design",
        "Local SEO",
        "Social Media",
        "Booking Systems",
      ],
    };
  }

  // Pricing inquiries
  if (
    message.includes("cost") ||
    message.includes("price") ||
    message.includes("pricing") ||
    message.includes("how much")
  ) {
    return {
      message:
        "Our pricing varies based on your specific needs and business size. We offer competitive rates with results as quick as 3 business days for most services. Would you like me to connect you with our team for a free consultation and custom quote?",
      quickReplies: [
        "Yes, schedule consultation",
        "Tell me more first",
        "Contact information",
      ],
      actions: [
        {
          type: "email",
          value:
            "info@gravixstrategicedge.com?subject=Pricing%20Inquiry%20from%20Chatbot",
          label: "Email for Quote",
        },
        {
          type: "phone",
          value: "(941) 900-3341",
          label: "Call Now",
        },
      ],
    };
  }

  // Website Design inquiries
  if (
    message.includes("website") ||
    message.includes("web design") ||
    message.includes("website design")
  ) {
    return {
      message:
        "Our website design service includes:\n\n• Custom responsive design\n• Mobile-first approach\n• SEO optimization\n• Fast loading speeds\n• Modern, professional appearance\n• Content management system\n• Basic analytics setup\n\nHosting is optional - you can use your own or we can recommend providers. Results typically delivered in 3-5 business days!",
      quickReplies: ["Get a quote", "See examples", "What about hosting?"],
    };
  }

  // SEO inquiries
  if (
    message.includes("seo") ||
    message.includes("search engine") ||
    message.includes("google ranking")
  ) {
    return {
      message:
        "Our SEO services help you dominate local search results:\n\n• Keyword research & optimization\n• Local citation building\n• Google Business Profile optimization\n• On-page SEO improvements\n• Technical SEO audit\n• Monthly performance reports\n\nWe focus on getting you found by local customers. Want to learn more?",
      quickReplies: ["How long for results?", "Free SEO audit", "Pricing info"],
    };
  }

  // Social Media inquiries
  if (
    message.includes("social media") ||
    message.includes("facebook") ||
    message.includes("instagram") ||
    message.includes("social")
  ) {
    return {
      message:
        "Our social media management includes:\n\n• Content creation & posting\n• Community management\n• Social media advertising\n• Performance analytics\n• Brand consistency\n• Engagement strategies\n\nWe help you build a strong social presence that drives real business results.",
      quickReplies: ["Which platforms?", "Content examples", "Get started"],
    };
  }

  // Booking System inquiries
  if (
    message.includes("booking") ||
    message.includes("rental") ||
    message.includes("tour") ||
    message.includes("appointment")
  ) {
    return {
      message:
        "Our booking system is perfect for:\n\n• Tour companies\n• Rental businesses\n• Service appointments\n• Event bookings\n• Resource scheduling\n\nFeatures include online booking, payment processing, calendar management, and customer notifications. Note: This service requires monthly hosting fees.",
      quickReplies: ["See demo", "Pricing details", "Setup time"],
    };
  }

  // Chatbot inquiries
  if (
    message.includes("chatbot") ||
    message.includes("chat bot") ||
    message.includes("bot")
  ) {
    return {
      message:
        "You're experiencing our chatbot service right now! We can set up a custom chatbot for your business that:\n\n• Answers common questions 24/7\n• Captures leads automatically\n• Provides instant customer support\n• Integrates with your website\n• Learns from interactions\n\nRequires monthly hosting fees. Interested in having one like this?",
      quickReplies: [
        "Yes, tell me more",
        "What's the cost?",
        "How long to setup?",
      ],
    };
  }

  // Contact information
  if (
    message.includes("contact") ||
    message.includes("phone") ||
    message.includes("email") ||
    message.includes("reach")
  ) {
    return {
      message: `Here's how to reach us:\n\n📞 Phone: ${BUSINESS_INFO.phone}\n📧 Email: ${BUSINESS_INFO.email}\n\nWe typically respond within 24 hours. Ready to get started?`,
      quickReplies: ["Schedule consultation", "Send email", "Call now"],
      actions: [
        {
          type: "phone",
          value: BUSINESS_INFO.phone,
          label: "Call Us",
        },
        {
          type: "email",
          value: `${BUSINESS_INFO.email}?subject=Inquiry%20from%20Chatbot`,
          label: "Send Email",
        },
      ],
    };
  }

  // Consultation/scheduling
  if (
    message.includes("consultation") ||
    message.includes("schedule") ||
    message.includes("appointment") ||
    message.includes("meeting")
  ) {
    return {
      message:
        "Great! We offer free consultations to discuss your marketing needs. During our call, we'll:\n\n• Analyze your current online presence\n• Identify growth opportunities\n• Provide actionable recommendations\n• Create a custom strategy\n• Give you a detailed quote\n\nWould you like to schedule now?",
      quickReplies: [
        "Yes, schedule now",
        "Tell me more",
        "What info do you need?",
      ],
      actions: [
        {
          type: "email",
          value: `${BUSINESS_INFO.email}?subject=Free%20Consultation%20Request&body=Hi,%20I'd%20like%20to%20schedule%20a%20free%20consultation%20to%20discuss%20my%20marketing%20needs.`,
          label: "Email to Schedule",
        },
        {
          type: "phone",
          value: BUSINESS_INFO.phone,
          label: "Call to Schedule",
        },
      ],
    };
  }

  // Timeline/speed inquiries
  if (
    message.includes("how long") ||
    message.includes("timeline") ||
    message.includes("time") ||
    message.includes("speed") ||
    message.includes("fast")
  ) {
    return {
      message:
        "We pride ourselves on fast delivery:\n\n• Most services: 3-5 business days\n• Simple websites: 3-7 business days\n• SEO setup: 2-3 business days\n• Social media setup: 1-2 business days\n• Booking systems: 5-7 business days\n• Chatbot setup: 3-5 business days\n\nWe'll provide a specific timeline based on your project requirements.",
      quickReplies: [
        "Start my project",
        "Get detailed quote",
        "Ask about rush jobs",
      ],
    };
  }

  // Hosting inquiries
  if (
    message.includes("hosting") ||
    message.includes("host") ||
    message.includes("server")
  ) {
    return {
      message:
        "For hosting:\n\n• Website hosting is optional - you can use your own or we recommend providers\n• Booking systems require monthly hosting fees\n• Chatbots require monthly hosting fees\n• SEO and social media services don't require hosting\n\nWe'll clearly explain any hosting requirements before starting your project.",
      quickReplies: [
        "Hosting costs?",
        "Recommended providers",
        "No hosting needed",
      ],
    };
  }

  // Reviews/testimonials
  if (
    message.includes("review") ||
    message.includes("testimonial") ||
    message.includes("client") ||
    message.includes("example")
  ) {
    return {
      message:
        "We're proud of our client results! Our review management system has helped businesses:\n\n• Increase positive reviews by 300%\n• Improve online reputation\n• Boost local search rankings\n• Attract more customers\n\nWe also offer review management as a service to help you get more positive reviews consistently.",
      quickReplies: [
        "See case studies",
        "Review management service",
        "Get started",
      ],
    };
  }

  // Thank you responses
  if (message.includes("thank") || message.includes("thanks")) {
    return {
      message:
        "You're welcome! I'm here to help. Is there anything else you'd like to know about our services?",
      quickReplies: [
        "Contact information",
        "Schedule consultation",
        "Service pricing",
      ],
    };
  }

  // Default response
  return {
    message:
      "I'd be happy to help you with that! I can provide information about our services, pricing, timelines, or help you get in touch with our team. What specifically would you like to know?",
    quickReplies: QUICK_REPLIES.slice(0, 4),
  };
}
