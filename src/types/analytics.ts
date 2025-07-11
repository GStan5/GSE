export interface DashboardStats {
  totalConversations: number;
  averageLeadScore: number;
  highValueLeads: number;
  totalMessages: number;
  topTopics: Array<{ topic: string; count: number }>;
  languageDistribution: Record<string, number>;
  outcomeDistribution: Record<string, number>;
  dailyActivity: Array<{ date: string; conversations: number; leads: number }>;
  recentConversations: Array<{
    sessionId: string;
    timestamp: Date;
    leadScore: number;
    messageCount: number;
    outcome: string;
    summary: string;
  }>;
  conversionRate: number;
  leadConversions: number;
}

export interface ConversationData {
  sessionId: string;
  timestamp: Date;
  messageCount: number;
  leadScore: number;
  topicsCovered: string[];
  conversationOutcome: "lead" | "info" | "support" | "other";
  userLanguage: string;
  responseTime: number;
}
