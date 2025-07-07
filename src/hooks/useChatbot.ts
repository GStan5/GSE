"use client";

import { useState, useCallback, useEffect } from "react";
import { Message, ChatbotResponse, ConversationContext } from "@/types/chatbot";
import { getChatbotResponse } from "@/utils/chatbotLogic";
import { getAIResponse } from "@/utils/aiChatbot";
import {
  calculateLeadScore,
  detectLanguage,
  ChatbotAnalytics,
  ConversationMemoryManager,
  SmartNotifications,
  getTranslation,
} from "@/utils/chatbotAnalytics";

export function useChatbot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<
    ConversationContext[]
  >([]);
  const [sessionId] = useState(() => `session_${Date.now()}`);
  const [userId] = useState(() => `user_${Date.now()}`);
  const [userLanguage, setUserLanguage] = useState("en");
  const [leadScore, setLeadScore] = useState(0);

  // Initialize analytics and notifications
  const analytics = ChatbotAnalytics.getInstance();
  const memoryManager = ConversationMemoryManager.getInstance();
  const notifications = SmartNotifications.getInstance();

  // Initialize conversation on first load
  useEffect(() => {
    // Only initialize once when component mounts
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: "1",
        text: "👋 Hi! I'm your GSE Assistant. I'm here to help you learn about our digital marketing services. How can I assist you today?",
        sender: "bot",
        timestamp: new Date(),
        language: "en", // Keep welcome message in English
      };
      setMessages([welcomeMessage]);
    }

    // Request notification permission
    notifications.requestPermission();
  }, []); // Empty dependency array to run only once

  // Remove the language change effect that was causing re-renders

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim()) return;

      // Detect language for this specific message only
      const detectedLang = detectLanguage(text);
      
      // Only update the global language if this is the first user message
      // and it's different from the default English
      if (messages.length <= 1 && detectedLang !== "en" && userLanguage === "en") {
        setUserLanguage(detectedLang);
      }

      const userMessage: Message = {
        id: Date.now().toString(),
        text: text.trim(),
        sender: "user",
        timestamp: new Date(),
        language: detectedLang, // Store language per message
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsLoading(true);
      setIsTyping(true);

      try {
        // Update conversation history
        const newHistory = [
          ...conversationHistory,
          { role: "user" as const, content: text },
        ];

        // Try AI response first (server-side API handles availability)
        let response: ChatbotResponse;

        try {
          response = await getAIResponse(text, newHistory);

          // Update conversation history with AI response
          setConversationHistory([
            ...newHistory,
            { role: "assistant", content: response.message },
          ]);
        } catch (aiError) {
          console.log(
            "AI failed, falling back to rule-based response:",
            aiError
          );
          response = await getChatbotResponse(text);
        }

        // Simulate typing delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: response.message,
          sender: "bot",
          timestamp: new Date(),
          actions: response.actions,
          language: detectedLang, // Bot responds in the same language as user's message
        };

        setMessages((prev) => {
          const updatedMessages = [...prev, botMessage];

          // Calculate lead score
          const scoreData = calculateLeadScore(updatedMessages);
          setLeadScore(scoreData.score);

          // Save conversation to memory
          memoryManager.saveConversation(
            userId,
            sessionId,
            updatedMessages,
            scoreData.score
          );

          // Smart notifications for high-value leads
          if (scoreData.score >= 70) {
            notifications.notifyHighValueLead(scoreData.score, text);
          }

          // Log analytics
          analytics.logConversation({
            sessionId,
            timestamp: new Date(),
            messageCount: updatedMessages.length,
            leadScore: scoreData.score,
            topicsCovered: extractTopics(updatedMessages),
            conversationOutcome: scoreData.score >= 70 ? "lead" : "info",
            userLanguage: detectedLang,
            responseTime: 1000, // Simulated response time
          });

          return updatedMessages;
        });
      } catch (error) {
        console.error("Error sending message:", error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: "I'm sorry, I'm having trouble responding right now. Please try again or contact us directly at (941) 900-3341.",
          sender: "bot",
          timestamp: new Date(),
          actions: [
            {
              type: "phone",
              value: "(941) 900-3341",
              label: "Call Now",
            },
            {
              type: "email",
              value:
                "Marketing@GSE.codes?subject=Chatbot%20Error&body=I%20encountered%20an%20error%20while%20using%20your%20chatbot.",
              label: "Send Email",
            },
          ],
        };
        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsLoading(false);
        setIsTyping(false);
      }
    },
    [
      conversationHistory,
      userId,
      sessionId,
      userLanguage,
      analytics,
      memoryManager,
      notifications,
    ]
  );

  const clearMessages = useCallback(() => {
    const welcomeMessage: Message = {
      id: "1",
      text: "👋 Hi! I'm your GSE Assistant. I'm here to help you learn about our digital marketing services. How can I assist you today?",
      sender: "bot",
      timestamp: new Date(),
      language: "en", // Keep welcome message in English
    };
    setMessages([welcomeMessage]);
    setConversationHistory([]);
    setLeadScore(0);
  }, []);

  const changeLanguage = useCallback((newLanguage: string) => {
    setUserLanguage(newLanguage);
  }, []);

  return {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
    isTyping,
    leadScore,
    userLanguage,
    changeLanguage,
  };
}

// Helper function to extract topics from messages
function extractTopics(messages: Message[]): string[] {
  const topics = new Set<string>();
  const topicKeywords = {
    website: ["website", "site", "web"],
    seo: ["seo", "search", "google", "optimization"],
    social: ["social", "facebook", "instagram", "twitter"],
    marketing: ["marketing", "promotion", "advertising"],
    audit: ["audit", "analysis", "review"],
    branding: ["brand", "logo", "identity"],
    pricing: ["price", "cost", "quote", "money"],
    consultation: ["consultation", "meeting", "call"],
  };

  messages
    .filter((m) => m.sender === "user")
    .forEach((message) => {
      const text = message.text.toLowerCase();
      Object.entries(topicKeywords).forEach(([topic, keywords]) => {
        if (keywords.some((keyword) => text.includes(keyword))) {
          topics.add(topic);
        }
      });
    });

  return Array.from(topics);
}
