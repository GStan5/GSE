"use client";

interface ChatbotHeaderProps {
  onClose: () => void;
  onMinimize: () => void;
  isMinimized: boolean;
  onClear: () => void;
  leadScore?: number;
  userLanguage?: string;
}

export function ChatbotHeader({
  onClose,
  onMinimize,
  isMinimized,
  onClear,
  leadScore,
  userLanguage,
}: ChatbotHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-nautical-blue to-digital-teal text-white p-4 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-nautical-blue"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
        <div>
          <h3 className="font-semibold text-sm">GSE Assistant</h3>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-xs text-ami-sand">Online</span>
            </div>
            {leadScore !== undefined && leadScore > 0 && (
              <div className="flex items-center space-x-1">
                <span className="text-xs text-ami-sand">Score:</span>
                <span
                  className={`text-xs font-bold ${
                    leadScore >= 70 ? "text-yellow-300" : "text-ami-sand"
                  }`}
                >
                  {leadScore}
                </span>
              </div>
            )}
            {userLanguage && userLanguage !== "en" && (
              <span className="text-xs text-ami-sand uppercase">
                {userLanguage}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={onClear}
          className="p-1 hover:bg-black/10 rounded transition-colors"
          title="Clear chat"
        >
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>

        <button
          onClick={onMinimize}
          className="p-1 hover:bg-black/10 rounded transition-colors"
          title={isMinimized ? "Expand" : "Minimize"}
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMinimized ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 12H4"
              />
            )}
          </svg>
        </button>

        <button
          onClick={onClose}
          className="p-1 hover:bg-black/10 rounded transition-colors"
          title="Close"
        >
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
