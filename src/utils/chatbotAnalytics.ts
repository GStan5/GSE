import {
  Message,
  LeadScoreData,
  ChatAnalytics,
  ConversationMemory,
} from "@/types/chatbot";

// Lead Scoring System
export function calculateLeadScore(messages: Message[]): LeadScoreData {
  const factors = {
    serviceInquiry: false,
    pricingInterest: false,
    contactInfoShared: false,
    auditRequested: false,
    multipleInteractions: false,
    urgencyIndicators: false,
  };

  let score = 0;
  const userMessages = messages.filter((m) => m.sender === "user");

  userMessages.forEach((message) => {
    const text = message.text.toLowerCase();

    // Service inquiry (+20 points)
    if (
      text.includes("service") ||
      text.includes("help") ||
      text.includes("need")
    ) {
      factors.serviceInquiry = true;
      score += 20;
    }

    // Pricing interest (+25 points)
    if (
      text.includes("price") ||
      text.includes("cost") ||
      text.includes("quote") ||
      text.includes("how much")
    ) {
      factors.pricingInterest = true;
      score += 25;
    }

    // Contact info shared (+30 points)
    if (
      text.includes("@") ||
      text.includes("phone") ||
      text.includes("call me")
    ) {
      factors.contactInfoShared = true;
      score += 30;
    }

    // Audit requested (+35 points)
    if (
      text.includes("audit") ||
      text.includes("analysis") ||
      text.includes("review")
    ) {
      factors.auditRequested = true;
      score += 35;
    }

    // Urgency indicators (+15 points)
    if (
      text.includes("urgent") ||
      text.includes("asap") ||
      text.includes("quickly") ||
      text.includes("now")
    ) {
      factors.urgencyIndicators = true;
      score += 15;
    }
  });

  // Multiple interactions (+10 points)
  if (userMessages.length >= 3) {
    factors.multipleInteractions = true;
    score += 10;
  }

  // Cap at 100
  score = Math.min(score, 100);

  return { score, factors };
}

// Language Detection (simple implementation)
export function detectLanguage(text: string): string {
  const spanishKeywords = [
    "hola",
    "gracias",
    "por favor",
    "sí",
    "no",
    "precio",
    "servicio",
  ];
  const frenchKeywords = [
    "bonjour",
    "merci",
    "s'il vous plaît",
    "oui",
    "non",
    "prix",
    "service",
  ];

  const lowerText = text.toLowerCase();

  if (spanishKeywords.some((keyword) => lowerText.includes(keyword))) {
    return "es";
  }

  if (frenchKeywords.some((keyword) => lowerText.includes(keyword))) {
    return "fr";
  }

  return "en"; // Default to English
}

// Analytics Storage
export class ChatbotAnalytics {
  private static instance: ChatbotAnalytics;
  private analytics: ChatAnalytics[] = [];

  static getInstance(): ChatbotAnalytics {
    if (!ChatbotAnalytics.instance) {
      ChatbotAnalytics.instance = new ChatbotAnalytics();
    }
    return ChatbotAnalytics.instance;
  }

  async logConversation(data: ChatAnalytics): Promise<void> {
    // Store locally for immediate access
    this.analytics.push(data);

    // Send to server-side API
    try {
      const response = await fetch("/api/analytics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error("Failed to save analytics to server");
      }
    } catch (error) {
      console.error("Error saving analytics to server:", error);
    }

    // Also keep local storage as backup
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("chatbot_analytics") || "[]";
      const existingData = JSON.parse(stored);
      existingData.push(data);
      localStorage.setItem("chatbot_analytics", JSON.stringify(existingData));
    }

    // Send to analytics service (implement your preferred analytics)
    this.sendToAnalytics(data);
  }

  async loadFromServer(): Promise<void> {
    try {
      const response = await fetch("/api/analytics");
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          this.analytics = result.data.analytics || [];
        }
      }
    } catch (error) {
      console.error("Error loading analytics from server:", error);
      // Fallback to localStorage
      this.loadFromStorage();
    }
  }

  private sendToAnalytics(data: ChatAnalytics): void {
    // Send to Google Analytics, Mixpanel, or your analytics service
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "chatbot_interaction", {
        event_category: "chatbot",
        event_label: data.conversationOutcome,
        value: data.leadScore,
        custom_parameter_1: data.topicsCovered.join(","),
        custom_parameter_2: data.userLanguage,
      });
    }
  }

  getAnalytics(): ChatAnalytics[] {
    return this.analytics;
  }

  getDashboardData() {
    const total = this.analytics.length;
    const leads = this.analytics.filter(
      (a) => a.conversationOutcome === "lead"
    ).length;
    const avgScore =
      this.analytics.reduce((sum, a) => sum + a.leadScore, 0) / total || 0;

    const topTopics = this.analytics
      .flatMap((a) => a.topicsCovered)
      .reduce((acc, topic) => {
        acc[topic] = (acc[topic] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

    return {
      totalConversations: total,
      leadConversions: leads,
      conversionRate: total > 0 ? (leads / total) * 100 : 0,
      averageLeadScore: avgScore,
      topTopics: Object.entries(topTopics)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 5),
      languageBreakdown: this.analytics.reduce((acc, a) => {
        acc[a.userLanguage] = (acc[a.userLanguage] || 0) + 1;
        return acc;
      }, {} as Record<string, number>),
    };
  }

  async clearAnalytics(): Promise<void> {
    this.analytics = [];

    // Clear server-side data
    try {
      await fetch("/api/analytics", { method: "DELETE" });
    } catch (error) {
      console.error("Error clearing server analytics:", error);
    }

    // Clear local storage
    if (typeof window !== "undefined") {
      localStorage.removeItem("chatbot_analytics");
    }
  }

  async refreshData(): Promise<void> {
    await this.loadFromServer();
  }

  private loadFromStorage(): void {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("chatbot_analytics");
      if (stored) {
        try {
          this.analytics = JSON.parse(stored);
        } catch (error) {
          console.error("Error loading analytics from storage:", error);
          this.analytics = [];
        }
      }
    }
  }
}

// Conversation Memory Management
export class ConversationMemoryManager {
  private static instance: ConversationMemoryManager;
  private memory: Map<string, ConversationMemory> = new Map();

  static getInstance(): ConversationMemoryManager {
    if (!ConversationMemoryManager.instance) {
      ConversationMemoryManager.instance = new ConversationMemoryManager();
    }
    return ConversationMemoryManager.instance;
  }

  saveConversation(
    userId: string,
    sessionId: string,
    messages: Message[],
    leadScore: number
  ): void {
    const memory: ConversationMemory = {
      userId,
      sessionId,
      messages,
      leadScore,
      preferences: {
        language: this.detectDominantLanguage(messages),
        interests: this.extractInterests(messages),
        previousQuestions: this.extractQuestions(messages),
      },
      lastInteraction: new Date(),
    };

    this.memory.set(userId, memory);

    // Persist to localStorage
    if (typeof window !== "undefined") {
      localStorage.setItem(`conversation_${userId}`, JSON.stringify(memory));
    }
  }

  getConversation(userId: string): ConversationMemory | null {
    // Try memory first
    let memory = this.memory.get(userId);

    // Fall back to localStorage
    if (!memory && typeof window !== "undefined") {
      const stored = localStorage.getItem(`conversation_${userId}`);
      if (stored) {
        memory = JSON.parse(stored);
        this.memory.set(userId, memory!);
      }
    }

    return memory || null;
  }

  private detectDominantLanguage(messages: Message[]): string {
    const languages = messages
      .filter((m) => m.sender === "user")
      .map((m) => detectLanguage(m.text));

    const counts = languages.reduce((acc, lang) => {
      acc[lang] = (acc[lang] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(counts).sort(([, a], [, b]) => b - a)[0]?.[0] || "en";
  }

  private extractInterests(messages: Message[]): string[] {
    const interests = new Set<string>();
    const keywords = {
      website: ["website", "site", "web"],
      seo: ["seo", "search", "google"],
      social: ["social", "facebook", "instagram"],
      marketing: ["marketing", "promotion", "advertising"],
      audit: ["audit", "analysis", "review"],
      branding: ["brand", "logo", "identity"],
    };

    messages
      .filter((m) => m.sender === "user")
      .forEach((message) => {
        const text = message.text.toLowerCase();
        Object.entries(keywords).forEach(([interest, words]) => {
          if (words.some((word) => text.includes(word))) {
            interests.add(interest);
          }
        });
      });

    return Array.from(interests);
  }

  private extractQuestions(messages: Message[]): string[] {
    return messages
      .filter((m) => m.sender === "user" && m.text.includes("?"))
      .map((m) => m.text)
      .slice(-5); // Keep last 5 questions
  }
}

// Smart Notifications
export class SmartNotifications {
  private static instance: SmartNotifications;
  private permission: NotificationPermission = "default";

  static getInstance(): SmartNotifications {
    if (!SmartNotifications.instance) {
      SmartNotifications.instance = new SmartNotifications();
    }
    return SmartNotifications.instance;
  }

  async requestPermission(): Promise<boolean> {
    if ("Notification" in window) {
      this.permission = await Notification.requestPermission();
      return this.permission === "granted";
    }
    return false;
  }

  async showNotification(
    title: string,
    body: string,
    icon?: string
  ): Promise<void> {
    if (this.permission === "granted") {
      new Notification(title, {
        body,
        icon: icon || "/favicon.ico",
        tag: "chatbot",
        requireInteraction: true,
      });
    }
  }

  async notifyHighValueLead(
    leadScore: number,
    lastMessage: string
  ): Promise<void> {
    if (leadScore >= 70) {
      await this.showNotification(
        "High-Value Lead Alert! 🚨",
        `Lead score: ${leadScore}. Recent message: "${lastMessage.substring(
          0,
          50
        )}..."`
      );
    }
  }

  async scheduleFollowUp(minutes: number, message: string): Promise<void> {
    setTimeout(() => {
      this.showNotification("Follow-up Reminder", message);
    }, minutes * 60 * 1000);
  }
}

// Multilingual Support
export const translations = {
  en: {
    welcome:
      "Hi! I'm your AI-powered GSE assistant. I can help you learn about our digital marketing services, get pricing information, or schedule a consultation. What would you like to know?",
    typing: "Typing...",
    sendMessage: "Send message",
    clearChat: "Clear chat",
    minimize: "Minimize",
    close: "Close",
    quickReplies: {
      services: "Tell me about your services",
      pricing: "How much does it cost?",
      consultation: "Schedule a consultation",
      contact: "Contact information",
      audit: "Free audit",
    },
  },
  es: {
    welcome:
      "¡Hola! Soy tu asistente de IA de GSE. Puedo ayudarte a conocer nuestros servicios de marketing digital, obtener información de precios o programar una consulta. ¿Qué te gustaría saber?",
    typing: "Escribiendo...",
    sendMessage: "Enviar mensaje",
    clearChat: "Limpiar chat",
    minimize: "Minimizar",
    close: "Cerrar",
    quickReplies: {
      services: "Cuéntame sobre tus servicios",
      pricing: "¿Cuánto cuesta?",
      consultation: "Programar una consulta",
      contact: "Información de contacto",
      audit: "Auditoría gratuita",
    },
  },
  fr: {
    welcome:
      "Salut! Je suis votre assistant IA GSE. Je peux vous aider à découvrir nos services de marketing numérique, obtenir des informations de prix ou programmer une consultation. Que souhaitez-vous savoir?",
    typing: "Frappe...",
    sendMessage: "Envoyer un message",
    clearChat: "Effacer le chat",
    minimize: "Minimiser",
    close: "Fermer",
    quickReplies: {
      services: "Parlez-moi de vos services",
      pricing: "Combien ça coûte?",
      consultation: "Programmer une consultation",
      contact: "Informations de contact",
      audit: "Audit gratuit",
    },
  },
};

export function getTranslation(key: string, language: string = "en"): string {
  const keys = key.split(".");
  let value: any =
    translations[language as keyof typeof translations] || translations.en;

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
