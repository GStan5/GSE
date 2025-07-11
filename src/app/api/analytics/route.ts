import { NextRequest, NextResponse } from "next/server";
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

// GET - Retrieve all analytics
export async function GET() {
  try {
    const analytics = await readAnalytics();

    // Calculate dashboard data
    const total = analytics.length;
    const leads = analytics.filter(
      (a: ChatAnalytics) => a.conversationOutcome === "lead"
    ).length;
    const avgScore =
      analytics.reduce(
        (sum: number, a: ChatAnalytics) => sum + (a.leadScore || 0),
        0
      ) / total || 0;

    const topTopics = analytics
      .flatMap((a: ChatAnalytics) => a.topicsCovered || [])
      .reduce((acc: Record<string, number>, topic: string) => {
        acc[topic] = (acc[topic] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    const dashboardData = {
      totalConversations: total,
      leadConversions: leads,
      conversionRate: total > 0 ? (leads / total) * 100 : 0,
      averageLeadScore: avgScore,
      topTopics: Object.entries(topTopics)
        .sort(([, a], [, b]) => (b as number) - (a as number))
        .slice(0, 5),
      languageBreakdown: analytics.reduce(
        (acc: Record<string, number>, a: ChatAnalytics) => {
          acc[a.userLanguage || "en"] = (acc[a.userLanguage || "en"] || 0) + 1;
          return acc;
        },
        {} as Record<string, number>
      ),
    };

    return NextResponse.json({
      success: true,
      data: {
        analytics,
        dashboard: dashboardData,
      },
    });
  } catch (error) {
    console.error("Error reading analytics:", error);
    return NextResponse.json(
      { success: false, error: "Failed to read analytics" },
      { status: 500 }
    );
  }
}

// POST - Add new analytics entry
export async function POST(request: NextRequest) {
  try {
    const newEntry = await request.json();

    // Add timestamp if not present
    if (!newEntry.timestamp) {
      newEntry.timestamp = new Date().toISOString();
    }

    // Add unique ID
    newEntry.id = `${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const analytics = await readAnalytics();
    analytics.push(newEntry);

    await writeAnalytics(analytics);

    return NextResponse.json({
      success: true,
      message: "Analytics entry added",
      id: newEntry.id,
    });
  } catch (error) {
    console.error("Error saving analytics:", error);
    return NextResponse.json(
      { success: false, error: "Failed to save analytics" },
      { status: 500 }
    );
  }
}

// DELETE - Clear all analytics
export async function DELETE() {
  try {
    await writeAnalytics([]);
    return NextResponse.json({
      success: true,
      message: "Analytics cleared",
    });
  } catch (error) {
    console.error("Error clearing analytics:", error);
    return NextResponse.json(
      { success: false, error: "Failed to clear analytics" },
      { status: 500 }
    );
  }
}
