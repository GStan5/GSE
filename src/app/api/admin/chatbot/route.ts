import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const {
      message,
      conversationHistory = [],
      analyticsData,
      dashboardData,
    } = await request.json();

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        {
          success: false,
          error: "OpenAI API key not configured",
        },
        { status: 500 }
      );
    }

    // Create admin-specific context with analytics data
    const adminContext = `You are an AI business analytics consultant specifically designed to help GSE (a Florida digital marketing agency) analyze their chatbot performance and improve lead generation.

CURRENT ANALYTICS DATA:
${
  dashboardData
    ? `
- Total Conversations: ${dashboardData.totalConversations}
- Average Lead Score: ${dashboardData.averageLeadScore}
- Conversion Rate: ${dashboardData.conversionRate}%
- High Value Leads: ${dashboardData.highValueLeads}
- Total Messages: ${dashboardData.totalMessages}
- Top Topics: ${dashboardData.topTopics
        ?.map((t: any) => `${t.topic} (${t.count})`)
        .join(", ")}
- Language Distribution: ${Object.entries(
        dashboardData.languageDistribution || {}
      )
        .map(([lang, count]) => `${lang}: ${count}`)
        .join(", ")}
`
    : "No dashboard data available"
}

RECENT CONVERSATIONS SUMMARY:
${
  analyticsData && analyticsData.length > 0
    ? `
- Recent conversations: ${analyticsData
        .slice(-5)
        .map(
          (conv: any) =>
            `Session ${conv.sessionId?.substring(0, 8)}: ${
              conv.messageCount
            } messages, score ${conv.leadScore}, outcome: ${
              conv.conversationOutcome
            }`
        )
        .join("\n- ")}
`
    : "No recent conversation data available"
}

YOUR CAPABILITIES:
1. Analyze chatbot performance metrics and trends
2. Provide actionable recommendations to improve lead quality
3. Suggest conversation flow optimizations
4. Identify patterns in high-performing vs low-performing conversations
5. Recommend A/B testing strategies
6. Analyze topic performance and user engagement
7. Provide insights on conversion rate optimization

GUIDELINES:
- Always base your responses on the actual data provided
- Provide specific, actionable recommendations
- Use marketing and analytics terminology appropriately
- Focus on ROI and business growth opportunities
- If asked about data not available, explain what additional data would be helpful
- Keep responses concise but comprehensive
- Always maintain a professional, consultant-like tone

Current date: ${new Date().toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })}

Remember: You are specifically analyzing GSE's chatbot analytics to help improve their digital marketing results.`;

    // Prepare conversation context
    const messages = [
      {
        role: "system" as const,
        content: adminContext,
      },
      ...conversationHistory,
      {
        role: "user" as const,
        content: message,
      },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      max_tokens: 500, // Longer responses for detailed analysis
      temperature: 0.3, // Lower temperature for more focused, analytical responses
      presence_penalty: 0.1,
      frequency_penalty: 0.1,
    });

    const response =
      completion.choices[0]?.message?.content ||
      "I apologize, but I'm having trouble analyzing the data right now. Please try again.";

    return NextResponse.json({
      success: true,
      response: response,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Admin chatbot API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process admin chat request",
      },
      { status: 500 }
    );
  }
}
