"use client";

import { useState } from "react";

interface ActionButton {
  type: "email" | "phone" | "link";
  value: string;
  label: string;
}

interface ActionButtonsProps {
  actions: ActionButton[];
  onActionClick: (action: ActionButton) => void;
}

export function ActionButtons({ actions, onActionClick }: ActionButtonsProps) {
  const [clickedAction, setClickedAction] = useState<string | null>(null);

  const handleClick = (action: ActionButton) => {
    setClickedAction(action.type);
    onActionClick(action);

    // Reset clicked state after animation
    setTimeout(() => setClickedAction(null), 200);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-3">
      {actions.map((action, index) => (
        <button
          key={index}
          onClick={() => handleClick(action)}
          className={`flex items-center px-3 py-2 text-xs rounded-lg transition-all duration-200 ${
            clickedAction === action.type
              ? "bg-nautical-blue text-white scale-95"
              : "bg-gradient-to-r from-solar-flare-coral to-yellow-500 hover:from-solar-flare-coral/90 hover:to-yellow-500/90 text-white shadow-md hover:shadow-lg"
          }`}
        >
          {action.type === "email" && (
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          )}
          {action.type === "phone" && (
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
          )}
          {action.type === "link" && (
            <svg
              className="w-3 h-3 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          )}
          {action.label}
        </button>
      ))}
    </div>
  );
}
