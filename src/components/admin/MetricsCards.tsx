"use client";

import { ReactNode } from "react";

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

interface MetricsCardsProps {
  data: DashboardStats | null;
  loading: boolean;
}

const MetricCard = ({
  title,
  value,
  icon,
  color,
  trend,
  loading,
}: {
  title: string;
  value: string | number;
  icon: ReactNode;
  color: string;
  trend?: { value: number; isPositive: boolean };
  loading: boolean;
}) => {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 animate-pulse">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <div className="h-4 bg-slate-200 rounded w-24"></div>
            <div className="h-8 bg-slate-200 rounded w-16"></div>
          </div>
          <div className="w-12 h-12 bg-slate-200 rounded-full"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-lg transition-all duration-300 group">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-slate-600 mb-1">{title}</p>
          <p
            className={`text-3xl font-bold ${color} group-hover:scale-105 transition-transform duration-300`}
          >
            {value}
          </p>
          {trend && (
            <div
              className={`flex items-center mt-2 text-sm ${
                trend.isPositive ? "text-green-600" : "text-red-600"
              }`}
            >
              <svg
                className="w-4 h-4 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    trend.isPositive
                      ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                      : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                  }
                />
              </svg>
              <span>{Math.abs(trend.value)}%</span>
            </div>
          )}
        </div>
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color
            .replace("text-", "bg-")
            .replace(
              "-600",
              "-100"
            )} group-hover:scale-110 transition-transform duration-300`}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default function MetricsCards({ data, loading }: MetricsCardsProps) {
  const metrics = [
    {
      title: "Total Conversations",
      value: data?.totalConversations || 0,
      icon: (
        <svg
          className="w-7 h-7 text-blue-600"
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
      ),
      color: "text-blue-600",
      trend: { value: 12, isPositive: true },
    },
    {
      title: "Lead Conversions",
      value: data?.leadConversions || 0,
      icon: (
        <svg
          className="w-7 h-7 text-green-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
      color: "text-green-600",
      trend: { value: 8, isPositive: true },
    },
    {
      title: "Conversion Rate",
      value: `${data?.conversionRate?.toFixed(1) || 0}%`,
      icon: (
        <svg
          className="w-7 h-7 text-purple-600"
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
      ),
      color: "text-purple-600",
      trend: { value: 3, isPositive: false },
    },
    {
      title: "Avg Lead Score",
      value: data?.averageLeadScore?.toFixed(0) || 0,
      icon: (
        <svg
          className="w-7 h-7 text-orange-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>
      ),
      color: "text-orange-600",
      trend: { value: 5, isPositive: true },
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {metrics.map((metric, index) => (
        <MetricCard
          key={index}
          title={metric.title}
          value={metric.value}
          icon={metric.icon}
          color={metric.color}
          trend={metric.trend}
          loading={loading}
        />
      ))}
    </div>
  );
}
