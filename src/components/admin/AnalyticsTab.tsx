"use client";

interface AnalyticsTabProps {
  data: any;
  analyticsData: any[];
  loading: boolean;
}

export default function AnalyticsTab({
  data,
  analyticsData,
  loading,
}: AnalyticsTabProps) {
  if (loading) {
    return (
      <div className="space-y-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 animate-pulse"
          >
            <div className="h-6 bg-slate-200 rounded w-48 mb-4"></div>
            <div className="space-y-3">
              <div className="h-4 bg-slate-200 rounded"></div>
              <div className="h-4 bg-slate-200 rounded w-3/4"></div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Calculate advanced analytics
  const totalConversations = analyticsData.length;
  const averageResponseTime =
    analyticsData.length > 0
      ? analyticsData.reduce((sum, conv) => sum + (conv.responseTime || 0), 0) /
        analyticsData.length
      : 0;

  const outcomeBreakdown = analyticsData.reduce((acc, conv) => {
    const outcome = conv.conversationOutcome || "unknown";
    acc[outcome] = (acc[outcome] || 0) + 1;
    return acc;
  }, {});

  const leadScoreDistribution = {
    high: analyticsData.filter((conv) => conv.leadScore >= 70).length,
    medium: analyticsData.filter(
      (conv) => conv.leadScore >= 40 && conv.leadScore < 70
    ).length,
    low: analyticsData.filter((conv) => conv.leadScore < 40).length,
  };

  const monthlyTrends = analyticsData.reduce((acc, conv) => {
    const month = new Date(conv.timestamp).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
    acc[month] = (acc[month] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="space-y-8">
      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-indigo-100 text-sm font-medium">
                Avg Response Time
              </p>
              <p className="text-2xl font-bold">
                {averageResponseTime.toFixed(0)}ms
              </p>
            </div>
            <div className="text-3xl opacity-80">⚡</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-100 text-sm font-medium">Success Rate</p>
              <p className="text-2xl font-bold">
                {totalConversations > 0
                  ? (
                      ((outcomeBreakdown.lead || 0) / totalConversations) *
                      100
                    ).toFixed(1)
                  : 0}
                %
              </p>
            </div>
            <div className="text-3xl opacity-80">🎯</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium">
                Engagement Rate
              </p>
              <p className="text-2xl font-bold">
                {totalConversations > 0
                  ? (
                      (analyticsData.filter((conv) => conv.messageCount > 3)
                        .length /
                        totalConversations) *
                      100
                    ).toFixed(1)
                  : 0}
                %
              </p>
            </div>
            <div className="text-3xl opacity-80">🚀</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-rose-500 to-rose-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-rose-100 text-sm font-medium">Quality Score</p>
              <p className="text-2xl font-bold">
                {data?.averageLeadScore?.toFixed(0) || 0}
              </p>
            </div>
            <div className="text-3xl opacity-80">⭐</div>
          </div>
        </div>
      </div>

      {/* Detailed Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Conversation Outcomes */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Conversation Outcomes
            </h2>
            <div className="text-2xl">🎯</div>
          </div>

          <div className="space-y-4">
            {Object.entries(outcomeBreakdown).map(([outcome, count], index) => {
              const percentage =
                totalConversations > 0
                  ? ((count as number) / totalConversations) * 100
                  : 0;
              const colors = [
                "bg-green-500",
                "bg-blue-500",
                "bg-yellow-500",
                "bg-gray-500",
              ];

              return (
                <div key={outcome} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          colors[index % colors.length]
                        }`}
                      ></div>
                      <span className="font-medium text-slate-700 capitalize">
                        {outcome}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-slate-900">
                        {count as number}
                      </span>
                      <span className="text-xs text-slate-500 ml-1">
                        ({percentage.toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-700 ease-out ${
                        colors[index % colors.length]
                      }`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lead Score Distribution */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Lead Score Distribution
            </h2>
            <div className="text-2xl">📊</div>
          </div>

          <div className="space-y-4">
            {[
              {
                label: "High Quality (70-100)",
                count: leadScoreDistribution.high,
                color: "bg-green-500",
              },
              {
                label: "Medium Quality (40-69)",
                count: leadScoreDistribution.medium,
                color: "bg-yellow-500",
              },
              {
                label: "Low Quality (0-39)",
                count: leadScoreDistribution.low,
                color: "bg-red-500",
              },
            ].map((item, index) => {
              const percentage =
                totalConversations > 0
                  ? (item.count / totalConversations) * 100
                  : 0;

              return (
                <div key={index} className="group">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${item.color}`}
                      ></div>
                      <span className="font-medium text-slate-700">
                        {item.label}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-bold text-slate-900">
                        {item.count}
                      </span>
                      <span className="text-xs text-slate-500 ml-1">
                        ({percentage.toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-700 ease-out ${item.color}`}
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Monthly Trends */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            Monthly Activity Trends
          </h2>
          <div className="text-2xl">📈</div>
        </div>

        {Object.keys(monthlyTrends).length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Object.entries(monthlyTrends).map(([month, count]) => (
              <div
                key={month}
                className="text-center p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border"
              >
                <div className="text-2xl font-bold text-slate-700">
                  {count as number}
                </div>
                <div className="text-sm text-slate-600 font-medium">
                  {month}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-8 text-slate-500">
            <div className="text-4xl mb-2">📊</div>
            <p>No trend data available yet</p>
          </div>
        )}
      </div>

      {/* Advanced Metrics */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800">Advanced Metrics</h2>
          <div className="text-2xl">🔬</div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-lg font-bold text-blue-700">
              {analyticsData.length > 0
                ? (
                    analyticsData.reduce(
                      (sum, conv) => sum + conv.messageCount,
                      0
                    ) / analyticsData.length
                  ).toFixed(1)
                : 0}
            </div>
            <div className="text-sm text-blue-600 font-medium">
              Avg Messages per Conversation
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-lg font-bold text-purple-700">
              {data?.topTopics?.length || 0}
            </div>
            <div className="text-sm text-purple-600 font-medium">
              Unique Topics Discussed
            </div>
          </div>

          <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-lg font-bold text-green-700">
              {Object.keys(data?.languageDistribution || {}).length}
            </div>
            <div className="text-sm text-green-600 font-medium">
              Languages Supported
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
