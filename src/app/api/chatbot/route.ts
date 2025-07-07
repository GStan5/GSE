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
      businessContext,
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

    // Prepare conversation context
    const messages = [
      {
        role: "system" as const,
        content: businessContext,
      },
      ...conversationHistory,
      {
        role: "user" as const,
        content: message,
      },
    ];

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Cost-effective model
      messages: messages,
      max_tokens: 300,
      temperature: 0.7,
      presence_penalty: 0.6,
      frequency_penalty: 0.3,
    });

    const response =
      completion.choices[0]?.message?.content ||
      "I apologize, but I'm having trouble processing your request right now. Please contact us directly at (941) 900-3341 or Marketing@GSE.codes.";

    return NextResponse.json({
      success: true,
      response,
    });
  } catch (error) {
    console.error("OpenAI API error:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process your request",
      },
      { status: 500 }
    );
  }
}
