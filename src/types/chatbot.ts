export interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  isTyping?: boolean;
  actions?: {
    type: "email" | "phone" | "link";
    value: string;
    label: string;
  }[];
  leadScore?: number;
  language?: string;
}

export interface ChatbotConfig {
  welcomeMessage: string;
  quickReplies: string[];
  businessInfo: {
    name: string;
    phone: string;
    email: string;
    services: string[];
  };
}

export interface ChatbotResponse {
  message: string;
  quickReplies?: string[];
  actions?: {
    type: "email" | "phone" | "link";
    value: string;
    label: string;
  }[];
  leadScore?: number;
  detectedLanguage?: string;
}

export interface ConversationContext {
  role: "user" | "assistant";
  content: string;
}

export interface LeadScoreData {
  score: number;
  factors: {
    serviceInquiry: boolean;
    pricingInterest: boolean;
    contactInfoShared: boolean;
    auditRequested: boolean;
    multipleInteractions: boolean;
    urgencyIndicators: boolean;
  };
}

export interface ChatAnalytics {
  sessionId: string;
  timestamp: Date;
  messageCount: number;
  leadScore: number;
  topicsCovered: string[];
  conversationOutcome: "lead" | "info" | "abandoned";
  userLanguage: string;
  responseTime: number;
  userSatisfaction?: number;
}

export interface ConversationMemory {
  userId: string;
  sessionId: string;
  messages: Message[];
  leadScore: number;
  preferences: {
    language: string;
    interests: string[];
    previousQuestions: string[];
  };
  lastInteraction: Date;
}
