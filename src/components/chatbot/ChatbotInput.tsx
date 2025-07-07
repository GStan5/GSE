"use client";

import { useState, KeyboardEvent } from "react";
import { getTranslation } from "@/utils/chatbotAnalytics";

interface ChatbotInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  userLanguage?: string;
}

export function ChatbotInput({
  onSendMessage,
  isLoading,
  userLanguage = "en",
}: ChatbotInputProps) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() && !isLoading) {
      onSendMessage(input);
      setInput("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  // Use stable English quick replies to prevent constant language switching
  const quickReplies = [
    "Tell me about your services",
    "What are your prices?",
    "Book a consultation",
    "Contact information",
  ];

  const handleQuickReply = (reply: string) => {
    if (!isLoading) {
      onSendMessage(reply);
    }
  };

  return (
    <div className="border-t border-gray-200 bg-white">
      {/* Quick Reply Buttons */}
      <div className="p-3 border-b border-gray-100 bg-ami-sand/30">
        <div className="flex flex-wrap gap-2">
          {quickReplies.map((reply, index) => (
            <button
              key={index}
              onClick={() => handleQuickReply(reply)}
              disabled={isLoading}
              className="px-3 py-1 text-xs bg-white hover:bg-nautical-blue hover:text-white text-nautical-blue rounded-full transition-colors disabled:opacity-50 disabled:cursor-not-allowed border border-nautical-blue/20"
            >
              {reply}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 flex items-center space-x-2 bg-white">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type your message..."
          disabled={isLoading}
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nautical-blue focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || isLoading}
          className="px-4 py-2 bg-gradient-to-r from-nautical-blue to-digital-teal text-white rounded-lg hover:from-nautical-blue/90 hover:to-digital-teal/90 focus:outline-none focus:ring-2 focus:ring-nautical-blue focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          {isLoading ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
