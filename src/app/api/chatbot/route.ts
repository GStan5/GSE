import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { promises as fs } from "fs";
import path from "path";

interface ChatAnalytics {
  id?: string;
  sessionId: string;
  timestamp: string;
  messageCount: number;
  leadScore: number;
  topicsCovered: string[];
  conversationOutcome: "lead" | "info";
  userLanguage: string;
  responseTime?: number;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const ANALYTICS_FILE = path.join(
  process.cwd(),
  "data",
  "chatbot-analytics.json"
);

// Ensure data directory exists
async function ensureDataDir() {
  const dataDir = path.dirname(ANALYTICS_FILE);
  try {
    await fs.access(dataDir);
  } catch {
    await fs.mkdir(dataDir, { recursive: true });
  }
}

// Read analytics from file
async function readAnalytics(): Promise<ChatAnalytics[]> {
  try {
    await ensureDataDir();
    const data = await fs.readFile(ANALYTICS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    // If file doesn't exist, return empty array
    return [];
  }
}

// Write analytics to file
async function writeAnalytics(data: ChatAnalytics[]) {
  await ensureDataDir();
  await fs.writeFile(ANALYTICS_FILE, JSON.stringify(data, null, 2));
}

// Calculate lead score based on conversation content
function calculateLeadScore(message: string, response: string): number {
  let score = 0;
  const combined = (message + " " + response).toLowerCase();
  
  // Business intent keywords
  if (combined.includes("pricing") || combined.includes("cost") || combined.includes("price")) score += 20;
  if (combined.includes("contact") || combined.includes("call") || combined.includes("phone")) score += 25;
  if (combined.includes("service") || combined.includes("help") || combined.includes("need")) score += 15;
  if (combined.includes("local") || combined.includes("business") || combined.includes("marketing")) score += 10;
  if (combined.includes("seo") || combined.includes("website") || combined.includes("online")) score += 10;
  if (combined.includes("schedule") || combined.includes("meeting") || combined.includes("consultation")) score += 30;
  
  return Math.min(score, 100);
}

// Extract topics from conversation
function extractTopics(message: string, response: string): string[] {
  const topics: string[] = [];
  const combined = (message + " " + response).toLowerCase();
  
  if (combined.includes("seo") || combined.includes("search")) topics.push("SEO");
  if (combined.includes("social media") || combined.includes("facebook") || combined.includes("instagram")) topics.push("Social Media");
  if (combined.includes("website") || combined.includes("web design")) topics.push("Website");
  if (combined.includes("marketing") || combined.includes("advertising")) topics.push("Marketing");
  if (combined.includes("local") || combined.includes("google business")) topics.push("Local Marketing");
  if (combined.includes("pricing") || combined.includes("cost")) topics.push("Pricing");
  if (combined.includes("consultation") || combined.includes("audit")) topics.push("Consultation");
  
  return topics.length > 0 ? topics : ["General"];
}

export async function POST(request: NextRequest) {
  const startTime = Date.now();
  
  try {
    const {
      message,
      conversationHistory = [],
      businessContext,
      sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
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
      max_tokens: 800, // Increased for more comprehensive responses
      temperature: 0.7,
      presence_penalty: 0.6,
      frequency_penalty: 0.3,
    });

    const response =
      completion.choices[0]?.message?.content ||
      "I apologize, but I'm having trouble processing your request right now. Please contact us directly at (941) 900-3341 or Marketing@GSE.codes.";

    // Track analytics
    try {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      const leadScore = calculateLeadScore(message, response);
      const topics = extractTopics(message, response);
      const messageCount = conversationHistory.length + 1;
      
      const analytics: ChatAnalytics = {
        id: `conv_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        sessionId,
        timestamp: new Date().toISOString(),
        messageCount,
        leadScore,
        topicsCovered: topics,
        conversationOutcome: leadScore >= 50 ? "lead" : "info",
        userLanguage: "en", // Default to English, could be detected
        responseTime,
      };

      const existingAnalytics = await readAnalytics();
      existingAnalytics.push(analytics);
      await writeAnalytics(existingAnalytics);
    } catch (analyticsError) {
      console.error("Analytics tracking error:", analyticsError);
      // Don't fail the request if analytics fail
    }

    return NextResponse.json({
      success: true,
      response,
      sessionId, // Return sessionId for client to track conversation
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
