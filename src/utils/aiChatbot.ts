import { ChatbotResponse } from "@/types/chatbot";

const BUSINESS_CONTEXT = `
You are a helpful AI assistant for Gravix Strategic Edge (GSE), a digital marketing agency specializing in AI-powered local marketing solutions. 

CURRENT DATE: ${new Date().toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
})}

BUSINESS INFORMATION:
- Company: Gravix Strategic Edge
- Phone: (941) 900-3341
- Email: Marketing@GSE.codes
- Website: GSE.codes

SERVICES OFFERED:
1. Custom Full Website Design & Development (4-24 weeks, hosting optional)
2. Brand Refresh & Rebranding Kit (3-4 weeks)
3. Tour & Rental Booking System Setup (3-4 weeks, requires monthly hosting)
4. Chatbot Service System Setup (2-4 weeks, requires monthly hosting)
5. SEO Landing Page Creation (1-2 weeks)
6. Website SEO Optimization (1-2 weeks)
7. Initial Google Business Profile Setup (7-10 business days)
8. Social Media Branding Setup (3-7 business days)
9. Blog Setup on Existing Website (7-10 business days)

FREE AUDIT SERVICE:
- Free Digital Marketing Audit (normally $299 value)
- Includes: Google Business Profile Grade (A-F), Online Reputation Score across Google/Yelp/Facebook, Local Listings Health Check, Competitor Comparison Table, and Top 3 Action Steps
- Available through our consultation funnel at GSE.codes/funnel
- Perfect for businesses wanting to understand their current online presence

KEY POINTS:
- Results as quick as 3 business days for most services
- Response time: 24 hours
- Some services require monthly hosting fees (booking systems, chatbots)
- Website hosting is optional for websites
- All services are one-time projects, no long-term contracts
- Free consultations available
- Competitive pricing with custom quotes

PERSONALITY:
- Professional but friendly
- Knowledgeable about digital marketing
- Focused on helping local businesses grow
- Direct and helpful
- Always ready to connect users with the team for quotes

CRITICAL INSTRUCTIONS:
- ONLY answer questions related to Gravix Strategic Edge, digital marketing, web design, SEO, local business marketing, or our services
- If asked about topics unrelated to our business (like general knowledge, personal advice, entertainment, politics, news, weather, etc.), politely redirect them to business topics
- For off-topic questions, respond with: "I'm specifically designed to help with questions about Gravix Strategic Edge and our digital marketing services. Is there anything you'd like to know about how we can help grow your business online?"
- Keep responses concise and helpful
- Always offer to connect users with the team for detailed quotes
- Mention specific timelines when relevant
- Be clear about hosting requirements
- Suggest free consultations when appropriate
- When asked about audits, always mention the FREE Digital Marketing Audit
- Direct users to the audit form at /funnel for the free audit
- Provide contact information when requested
- Focus on business growth and results
- If someone asks about the date or time, provide the current date shown above
`;

export async function getAIResponse(
  userMessage: string,
  conversationHistory: Array<{ role: "user" | "assistant"; content: string }>,
  sessionId?: string
): Promise<ChatbotResponse> {
  try {
    // Use server-side API route for OpenAI calls
    const response = await fetch("/api/chatbot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message: userMessage,
        conversationHistory,
        businessContext: BUSINESS_CONTEXT,
        sessionId: sessionId || `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      }),
    });

    const data = await response.json();

    if (!data.success) {
      throw new Error(data.error || "Failed to get AI response");
    }

    const aiResponse = data.response;

    // Determine if we should add action buttons based on the response content
    const actions = [];
    const lowerResponse = aiResponse.toLowerCase();

    if (
      lowerResponse.includes("contact") ||
      lowerResponse.includes("call") ||
      lowerResponse.includes("email") ||
      lowerResponse.includes("quote")
    ) {
      actions.push(
        {
          type: "email" as const,
          value:
            "Marketing@GSE.codes?subject=Inquiry%20from%20AI%20Chatbot&body=Hi!%20I%20was%20chatting%20with%20your%20AI%20assistant%20and%20would%20like%20to%20learn%20more%20about%20your%20services.",
          label: "Send Email",
        },
        {
          type: "phone" as const,
          value: "(941) 900-3341",
          label: "Call Now",
        }
      );
    }

    // Add consultation action if talking about services or pricing
    if (
      lowerResponse.includes("consultation") ||
      lowerResponse.includes("service") ||
      lowerResponse.includes("price") ||
      lowerResponse.includes("audit")
    ) {
      actions.push({
        type: "link" as const,
        value: "/funnel",
        label: "Get Free Audit",
      });
    }

    return {
      message: aiResponse,
      actions: actions.length > 0 ? actions : undefined,
      quickReplies: generateQuickReplies(aiResponse),
    };
  } catch (error) {
    console.error("AI API Error:", error);

    // Fallback to rule-based response
    return {
      message:
        "I'm having trouble with my AI connection right now. Let me connect you with our team directly. You can reach us at (941) 900-3341 or Marketing@GSE.codes for immediate assistance.",
      actions: [
        {
          type: "email",
          value:
            "Marketing@GSE.codes?subject=Chatbot%20Inquiry&body=Hi!%20I%20was%20trying%20to%20use%20your%20chatbot%20and%20need%20assistance.",
          label: "Send Email",
        },
        {
          type: "phone",
          value: "(941) 900-3341",
          label: "Call Now",
        },
      ],
    };
  }
}

function generateQuickReplies(response: string): string[] {
  const lowerResponse = response.toLowerCase();
  const quickReplies = [];

  if (
    lowerResponse.includes("service") ||
    lowerResponse.includes("what we do")
  ) {
    quickReplies.push("Tell me about pricing");
  }

  if (lowerResponse.includes("price") || lowerResponse.includes("cost")) {
    quickReplies.push("Get free audit");
  }

  if (lowerResponse.includes("website") || lowerResponse.includes("seo")) {
    quickReplies.push("How long does it take?");
  }

  if (lowerResponse.includes("booking") || lowerResponse.includes("chatbot")) {
    quickReplies.push("Hosting requirements?");
  }

  if (lowerResponse.includes("audit")) {
    quickReplies.push("What's included in audit?");
  }

  // Always include these common options
  quickReplies.push("Contact information");
  quickReplies.push("Free audit");

  return quickReplies.slice(0, 4); // Limit to 4 quick replies
}
