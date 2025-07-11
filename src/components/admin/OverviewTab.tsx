"use client";

import MetricsCards from "./MetricsCards";

interface OverviewTabProps {
  data: any; // Will fix typing later
  loading: boolean;
}

export default function OverviewTab({ data, loading }: OverviewTabProps) {
  return (
    <div className="space-y-8">
      <MetricsCards data={data} loading={loading} />

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Top Topics Chart */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Top Discussion Topics
            </h2>
            <div className="text-2xl">📊</div>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-slate-200 rounded-full"></div>
                      <div className="h-4 bg-slate-200 rounded w-24"></div>
                    </div>
                    <div className="h-6 bg-slate-200 rounded-full w-8"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : data?.topTopics?.length > 0 ? (
            <div className="space-y-4">
              {data.topTopics.map((topicData: any, index: number) => {
                const maxCount = Math.max(
                  ...data.topTopics.map((t: any) => t.count)
                );
                const percentage = (topicData.count / maxCount) * 100;

                return (
                  <div key={topicData.topic} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{
                            backgroundColor: `hsl(${index * 60}, 70%, 60%)`,
                          }}
                        ></div>
                        <span className="font-medium text-slate-700 capitalize group-hover:text-nautical-blue transition-colors">
                          {topicData.topic}
                        </span>
                      </div>
                      <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
                        {topicData.count}
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 rounded-full h-2">
                      <div
                        className="h-2 rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${percentage}%`,
                          backgroundColor: `hsl(${index * 60}, 70%, 60%)`,
                        }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <div className="text-4xl mb-2">📈</div>
              <p>No topic data available yet</p>
            </div>
          )}
        </div>

        {/* Language Distribution */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-slate-800">
              Language Distribution
            </h2>
            <div className="text-2xl">🌐</div>
          </div>

          {loading ? (
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-slate-200 rounded-full"></div>
                      <div className="h-4 bg-slate-200 rounded w-16"></div>
                    </div>
                    <div className="h-6 bg-slate-200 rounded-full w-8"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : data?.languageDistribution &&
            Object.keys(data.languageDistribution).length > 0 ? (
            <div className="space-y-4">
              {Object.entries(data.languageDistribution).map(
                ([lang, count], index) => {
                  const total = Object.values(data.languageDistribution).reduce(
                    (sum: number, val) => sum + (val as number),
                    0
                  );
                  const percentage =
                    total > 0 ? ((count as number) / total) * 100 : 0;

                  return (
                    <div key={lang} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{
                              backgroundColor: `hsl(${
                                index * 90 + 180
                              }, 70%, 60%)`,
                            }}
                          ></div>
                          <span className="font-medium text-slate-700 uppercase group-hover:text-digital-teal transition-colors">
                            {lang}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full font-medium">
                          {count as number}
                        </span>
                      </div>
                      <div className="w-full bg-slate-100 rounded-full h-2">
                        <div
                          className="h-2 rounded-full transition-all duration-700 ease-out"
                          style={{
                            width: `${percentage}%`,
                            backgroundColor: `hsl(${
                              index * 90 + 180
                            }, 70%, 60%)`,
                          }}
                        ></div>
                      </div>
                    </div>
                  );
                }
              )}
            </div>
          ) : (
            <div className="text-center py-8 text-slate-500">
              <div className="text-4xl mb-2">🌍</div>
              <p>No language data available yet</p>
            </div>
          )}
        </div>
      </div>

      {/* Activity Overview */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-800">
            Activity Overview
          </h2>
          <div className="text-2xl">⚡</div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
            <div className="text-2xl font-bold text-blue-600">
              {data?.totalMessages || 0}
            </div>
            <div className="text-sm text-blue-600 font-medium">
              Total Messages
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl">
            <div className="text-2xl font-bold text-green-600">
              {data?.highValueLeads || 0}
            </div>
            <div className="text-sm text-green-600 font-medium">
              High Value Leads
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl">
            <div className="text-2xl font-bold text-purple-600">
              {data?.totalConversations || 0}
            </div>
            <div className="text-sm text-purple-600 font-medium">
              Total Sessions
            </div>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl">
            <div className="text-2xl font-bold text-orange-600">
              {data?.averageLeadScore?.toFixed(0) || 0}
            </div>
            <div className="text-sm text-orange-600 font-medium">Avg Score</div>
          </div>
        </div>
      </div>
    </div>
  );
}
