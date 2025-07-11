"use client";

import { useState, useEffect } from "react";
import { ChatbotMessages } from "./ChatbotMessages";
import { ChatbotInput } from "./ChatbotInput";
import { ChatbotHeader } from "./ChatbotHeader";
import { useChatbot } from "@/hooks/useChatbot";
import { trackChatbotEvent } from "@/utils/tracking";

export default function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const {
    messages,
    isLoading,
    sendMessage,
    clearMessages,
    isTyping,
    leadScore,
    userLanguage,
  } = useChatbot();

  // Fix hydration by only rendering on client
  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSendMessage = async (message: string) => {
    trackChatbotEvent("message_sent", message.substring(0, 50));
    await sendMessage(message);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
    trackChatbotEvent("closed");
  };

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
    trackChatbotEvent("opened");
  };

  // Don't render anything on server-side to prevent hydration mismatch
  if (!isClient) {
    return null;
  }

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Pulse Animation Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-nautical-blue to-digital-teal opacity-20 animate-ping"></div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-nautical-blue to-digital-teal opacity-40 animate-pulse"></div>

          <button
            onClick={handleOpen}
            className="relative w-16 h-16 bg-gradient-to-br from-nautical-blue to-digital-teal hover:from-nautical-blue/90 hover:to-digital-teal/90 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group transform hover:scale-110"
            aria-label="Open Chat"
          >
            <svg
              className="w-8 h-8 transition-transform group-hover:scale-110"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>

            {/* Notification Badge */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-solar-flare-coral text-white text-xs rounded-full flex items-center justify-center animate-bounce">
              AI
            </div>

            {/* Lead Score Indicator */}
            {leadScore !== undefined && leadScore > 0 && (
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                {leadScore}
              </div>
            )}
          </button>
        </div>
      )}

      {/* Chatbot Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[550px] bg-white rounded-2xl shadow-2xl border border-gray-200/50 flex flex-col overflow-hidden backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-300">
          <ChatbotHeader
            onClose={handleClose}
            onMinimize={handleMinimize}
            isMinimized={isMinimized}
            onClear={clearMessages}
            leadScore={leadScore}
            userLanguage={userLanguage}
          />

          {!isMinimized && (
            <>
              <ChatbotMessages
                messages={messages}
                isLoading={isLoading}
                isTyping={isTyping}
              />
              <ChatbotInput
                onSendMessage={handleSendMessage}
                isLoading={isLoading}
                userLanguage={userLanguage}
              />
            </>
          )}

          {isMinimized && (
            <div className="flex-1 flex items-center justify-center p-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-nautical-blue to-digital-teal text-white rounded-full flex items-center justify-center mx-auto mb-2">
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-500">Chat minimized</p>
                <p className="text-xs text-gray-400">Click to expand</p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
