"use client";

import { useState, useEffect } from "react";
import { ChatbotAnalytics } from "@/utils/chatbotAnalytics";
import AdminLayout from "@/components/admin/AdminLayout";
import TabNavigation from "@/components/admin/TabNavigation";
import OverviewTab from "@/components/admin/OverviewTab";
import ConversationsTab from "@/components/admin/ConversationsTab";
import AnalyticsTab from "@/components/admin/AnalyticsTab";
import SettingsTab from "@/components/admin/SettingsTab";
import AdminChatbot from "@/components/admin/AdminChatbot";

interface DashboardStats {
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

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [dashboardData, setDashboardData] = useState<DashboardStats | null>(
    null
  );
  const [analyticsData, setAnalyticsData] = useState<any[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("overview");

  useEffect(() => {
    // Check if already authenticated in this session
    const isAuth = sessionStorage.getItem("admin_authenticated");
    if (isAuth === "true") {
      setIsAuthenticated(true);
      loadDashboardData();
    }
  }, []);

  const loadDashboardData = async () => {
    setLoading(true);
    try {
      // Load data from server API
      const response = await fetch("/api/analytics");
      const serverData = await response.json();

      if (serverData.success) {
        // Transform server data to match our interface
        const transformedData: DashboardStats = {
          totalConversations: serverData.data.totalConversations || 0,
          averageLeadScore: serverData.data.averageLeadScore || 0,
          highValueLeads: serverData.data.highValueLeads || 0,
          totalMessages: serverData.data.totalMessages || 0,
          topTopics: (serverData.data.topTopics || []).map((item: any) =>
            Array.isArray(item) ? { topic: item[0], count: item[1] } : item
          ),
          languageDistribution: serverData.data.languageDistribution || {},
          outcomeDistribution: serverData.data.outcomeDistribution || {},
          dailyActivity: serverData.data.dailyActivity || [],
          recentConversations: (serverData.data.recentConversations || []).map(
            (conv: any) => ({
              ...conv,
              timestamp: new Date(conv.timestamp),
            })
          ),
          conversionRate: serverData.data.conversionRate || 0,
          leadConversions: serverData.data.leadConversions || 0,
        };

        setDashboardData(transformedData);
        setAnalyticsData(serverData.data.conversations || []);
      }
    } catch (error) {
      console.error("Error loading dashboard data:", error);
      // Fallback to local analytics
      const analytics = ChatbotAnalytics.getInstance();
      await analytics.refreshData();
      const localData = analytics.getDashboardData();
      const rawData = analytics.getAnalytics();

      // Transform local data to match our interface
      const transformedData: DashboardStats = {
        totalConversations: localData.totalConversations || 0,
        averageLeadScore: localData.averageLeadScore || 0,
        highValueLeads: rawData.filter((conv: any) => conv.leadScore >= 70)
          .length,
        totalMessages: rawData.reduce(
          (sum: number, conv: any) => sum + (conv.messageCount || 0),
          0
        ),
        topTopics: (localData.topTopics || []).map((item: any) =>
          Array.isArray(item)
            ? { topic: item[0], count: item[1] }
            : { topic: item, count: 1 }
        ),
        languageDistribution: localData.languageBreakdown || {},
        outcomeDistribution: rawData.reduce((acc: any, conv: any) => {
          acc[conv.conversationOutcome || "unknown"] =
            (acc[conv.conversationOutcome || "unknown"] || 0) + 1;
          return acc;
        }, {}),
        dailyActivity: [],
        recentConversations: rawData.slice(-10).map((conv: any) => ({
          sessionId: conv.sessionId,
          timestamp: new Date(conv.timestamp),
          leadScore: conv.leadScore,
          messageCount: conv.messageCount,
          outcome: conv.conversationOutcome || "unknown",
          summary: `${conv.messageCount} messages, score: ${conv.leadScore}`,
        })),
        conversionRate: localData.conversionRate || 0,
        leadConversions: rawData.filter((conv: any) => conv.leadScore >= 70)
          .length,
      };

      setDashboardData(transformedData);
      setAnalyticsData(rawData);
    }
    setLoading(false);
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch("/api/admin/auth", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await response.json();

      if (data.success) {
        setIsAuthenticated(true);
        sessionStorage.setItem("admin_authenticated", "true");
        loadDashboardData();
        setPassword("");
      } else {
        setError(data.error || "Authentication failed");
      }
    } catch (error) {
      setError("Connection error. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("admin_authenticated");
    setPassword("");
  };

  const exportData = () => {
    const dataToExport = {
      dashboard: dashboardData,
      conversations: analyticsData,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(dataToExport, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chatbot-analytics-${
      new Date().toISOString().split("T")[0]
    }.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const clearAllData = async () => {
    if (
      confirm(
        "Are you sure you want to clear all analytics data? This cannot be undone."
      )
    ) {
      const analytics = ChatbotAnalytics.getInstance();
      await analytics.clearAnalytics();
      loadDashboardData();
    }
  };

  const refreshData = () => {
    loadDashboardData();
  };

  const generateTestData = () => {
    const analytics = ChatbotAnalytics.getInstance();

    // Add some sample analytics data for testing
    const testData = [
      {
        sessionId: "test_session_" + Date.now(),
        timestamp: new Date(),
        messageCount: 5,
        leadScore: 75,
        topicsCovered: ["pricing", "services"],
        conversationOutcome: "lead" as const,
        userLanguage: "en",
        responseTime: 1200,
      },
      {
        sessionId: "test_session_" + (Date.now() + 1),
        timestamp: new Date(),
        messageCount: 3,
        leadScore: 45,
        topicsCovered: ["services"],
        conversationOutcome: "info" as const,
        userLanguage: "en",
        responseTime: 800,
      },
      {
        sessionId: "test_session_" + (Date.now() + 2),
        timestamp: new Date(),
        messageCount: 8,
        leadScore: 85,
        topicsCovered: ["pricing", "contact", "services"],
        conversationOutcome: "lead" as const,
        userLanguage: "es",
        responseTime: 950,
      },
    ];

    testData.forEach((data) => analytics.logConversation(data));
    loadDashboardData();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 border border-slate-200">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-nautical-blue to-digital-teal rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-nautical-blue to-digital-teal bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-slate-600 mt-3 text-lg">
              Enter password to access analytics
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 mb-3"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-nautical-blue focus:border-transparent transition-all duration-300 text-lg"
                placeholder="Enter admin password"
                required
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center bg-red-50 p-4 rounded-xl border border-red-200">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-nautical-blue to-digital-teal text-white py-4 rounded-xl hover:from-nautical-blue/90 hover:to-digital-teal/90 transition-all duration-300 font-medium text-lg shadow-lg hover:shadow-xl"
            >
              Access Dashboard
            </button>
          </form>
        </div>
      </div>
    );
  }

  const renderActiveTab = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewTab data={dashboardData} loading={loading} />;
      case "conversations":
        return (
          <ConversationsTab analyticsData={analyticsData} loading={loading} />
        );
      case "analytics":
        return (
          <AnalyticsTab
            data={dashboardData}
            analyticsData={analyticsData}
            loading={loading}
          />
        );
      case "settings":
        return (
          <SettingsTab
            onExportData={exportData}
            onClearData={clearAllData}
            onRefreshData={refreshData}
            onGenerateTestData={generateTestData}
          />
        );
      default:
        return <OverviewTab data={dashboardData} loading={loading} />;
    }
  };

  return (
    <AdminLayout onLogout={handleLogout}>
      <div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
        {/* Main Dashboard Content */}
        <div className="xl:col-span-3 space-y-6">
          <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
          {renderActiveTab()}
        </div>

        {/* Integrated Chatbot Sidebar */}
        <div className="xl:col-span-1">
          <div className="sticky top-6">
            <AdminChatbot
              dashboardData={dashboardData}
              analyticsData={analyticsData}
            />
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
