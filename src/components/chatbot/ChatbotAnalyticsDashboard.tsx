"use client";

import { useState, useEffect } from "react";
import { ChatbotAnalytics } from "@/utils/chatbotAnalytics";

export default function ChatbotAnalyticsDashboard() {
  const [dashboardData, setDashboardData] = useState<any>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const analytics = ChatbotAnalytics.getInstance();
    const data = analytics.getDashboardData();
    setDashboardData(data);
  }, []);

  // Admin access (you might want to add proper authentication)
  const handleAdminAccess = () => {
    const password = prompt("Enter admin password:");
    if (password === "gse2025") {
      // Change this to a secure password
      setIsVisible(true);
    }
  };

  if (!isVisible) {
    return (
      <button
        onClick={handleAdminAccess}
        className="fixed bottom-6 left-6 z-50 px-4 py-2 bg-gray-800 text-white rounded-lg text-sm opacity-20 hover:opacity-100 transition-opacity"
      >
        Analytics
      </button>
    );
  }

  if (!dashboardData) {
    return (
      <div className="fixed bottom-6 left-6 z-50 bg-white p-4 rounded-lg shadow-lg">
        <p>Loading analytics...</p>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 bg-white p-6 rounded-lg shadow-2xl border border-gray-200 max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">
          Chatbot Analytics
        </h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-500 hover:text-gray-700"
        >
          ×
        </button>
      </div>

      <div className="space-y-4">
        {/* Key Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-blue-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-blue-600">
              {dashboardData.totalConversations}
            </div>
            <div className="text-sm text-blue-800">Total Conversations</div>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {dashboardData.conversionRate.toFixed(1)}%
            </div>
            <div className="text-sm text-green-800">Conversion Rate</div>
          </div>
        </div>

        {/* Lead Score */}
        <div className="bg-purple-50 p-3 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">
            {dashboardData.averageLeadScore.toFixed(0)}
          </div>
          <div className="text-sm text-purple-800">Average Lead Score</div>
        </div>

        {/* Top Topics */}
        <div>
          <h4 className="font-semibold mb-2">Top Topics</h4>
          <div className="space-y-1">
            {dashboardData.topTopics.map(([topic, count]: [string, number]) => (
              <div key={topic} className="flex justify-between text-sm">
                <span className="capitalize">{topic}</span>
                <span className="text-gray-600">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Language Breakdown */}
        <div>
          <h4 className="font-semibold mb-2">Languages</h4>
          <div className="space-y-1">
            {Object.entries(dashboardData.languageBreakdown).map(
              ([lang, count]) => (
                <div key={lang} className="flex justify-between text-sm">
                  <span className="uppercase">{lang}</span>
                  <span className="text-gray-600">{count as number}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Export Data */}
        <button
          onClick={() => {
            const analytics = ChatbotAnalytics.getInstance();
            const data = analytics.getAnalytics();
            const blob = new Blob([JSON.stringify(data, null, 2)], {
              type: "application/json",
            });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "chatbot-analytics.json";
            a.click();
            URL.revokeObjectURL(url);
          }}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
        >
          Export Data
        </button>
      </div>
    </div>
  );
}
