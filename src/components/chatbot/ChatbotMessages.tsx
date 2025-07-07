"use client";

import { Message } from "@/types/chatbot";
import { ActionButtons } from "./ActionButtons";
import { useEffect, useRef } from "react";

interface ChatbotMessagesProps {
  messages: Message[];
  isLoading: boolean;
  isTyping: boolean;
}

export function ChatbotMessages({
  messages,
  isLoading,
  isTyping,
}: ChatbotMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  };

  useEffect(() => {
    // Scroll when messages change or when typing state changes
    const timer = setTimeout(() => {
      scrollToBottom();
    }, 100); // Small delay to ensure DOM has updated

    return () => clearTimeout(timer);
  }, [messages, isTyping]);

  const handleActionClick = (action: {
    type: "email" | "phone" | "link";
    value: string;
    label: string;
  }) => {
    if (action.type === "email") {
      window.location.href = `mailto:${action.value}`;
    } else if (action.type === "phone") {
      window.location.href = `tel:${action.value}`;
    } else if (action.type === "link") {
      window.open(action.value, "_blank");
    }
  };
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-ami-sand/20 to-ami-sand/40 custom-scrollbar">
      {messages.map((message, index) => (
        <div
          key={message.id}
          className={`flex ${
            message.sender === "user" ? "justify-end" : "justify-start"
          } animate-in slide-in-from-bottom-2 duration-300`}
          style={{ animationDelay: `${index * 50}ms` }}
        >
          <div
            className={`max-w-[85%] px-4 py-3 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
              message.sender === "user"
                ? "bg-gradient-to-r from-nautical-blue to-digital-teal text-white rounded-br-md"
                : "bg-white text-charcoal-gray border border-gray-200/60 rounded-bl-md"
            }`}
          >
            {message.sender === "bot" && (
              <div className="flex items-center mb-2">
                <div className="w-7 h-7 bg-gradient-to-r from-nautical-blue to-digital-teal text-white rounded-full flex items-center justify-center mr-2 shadow-sm">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <span className="text-xs font-semibold text-nautical-blue">
                    GSE AI Assistant
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-gray-500">Online</span>
                  </div>
                </div>
              </div>
            )}
            <p className="text-sm whitespace-pre-line leading-relaxed">
              {message.text}
            </p>
            {message.actions && message.actions.length > 0 && (
              <ActionButtons
                actions={message.actions}
                onActionClick={handleActionClick}
              />
            )}
            <div className="flex justify-end mt-2">
              <span className="text-xs opacity-60">
                {message.timestamp.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
        </div>
      ))}

      {isTyping && (
        <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-300">
          <div className="bg-white text-charcoal-gray border border-gray-200/60 shadow-sm max-w-[85%] px-4 py-3 rounded-2xl rounded-bl-md">
            <div className="flex items-center mb-2">
              <div className="w-7 h-7 bg-gradient-to-r from-nautical-blue to-digital-teal text-white rounded-full flex items-center justify-center mr-2 shadow-sm">
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold text-nautical-blue">
                  GSE AI Assistant
                </span>
                <div className="flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                  <span className="text-xs text-gray-500">Thinking...</span>
                </div>
              </div>
            </div>
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-digital-teal rounded-full animate-bounce"></div>
              <div
                className="w-2 h-2 bg-digital-teal rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="w-2 h-2 bg-digital-teal rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Invisible div to scroll to */}
      <div ref={messagesEndRef} />
    </div>
  );
}
