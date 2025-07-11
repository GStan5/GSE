"use client";

interface ConversationsTabProps {
  analyticsData: any[];
  loading: boolean;
}

export default function ConversationsTab({
  analyticsData,
  loading,
}: ConversationsTabProps) {
  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-slate-200 rounded w-48 mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex space-x-4">
                <div className="h-4 bg-slate-200 rounded flex-1"></div>
                <div className="h-4 bg-slate-200 rounded w-20"></div>
                <div className="h-4 bg-slate-200 rounded w-16"></div>
                <div className="h-4 bg-slate-200 rounded w-20"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!analyticsData || analyticsData.length === 0) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-12 text-center">
        <div className="text-6xl mb-4">💬</div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          No Conversations Yet
        </h3>
        <p className="text-slate-600 mb-6">
          Start using the chatbot to see conversation data appear here.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-nautical-blue to-digital-teal text-white rounded-xl hover:from-nautical-blue/90 hover:to-digital-teal/90 transition-all duration-300">
          View Chatbot
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-blue-100 text-sm font-medium">
                Total Conversations
              </p>
              <p className="text-3xl font-bold">{analyticsData.length}</p>
            </div>
            <div className="text-4xl opacity-80">💬</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100 text-sm font-medium">
                High Quality Leads
              </p>
              <p className="text-3xl font-bold">
                {analyticsData.filter((conv) => conv.leadScore >= 70).length}
              </p>
            </div>
            <div className="text-4xl opacity-80">⭐</div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-100 text-sm font-medium">
                Avg Messages
              </p>
              <p className="text-3xl font-bold">
                {(
                  analyticsData.reduce(
                    (sum, conv) => sum + (conv.messageCount || 0),
                    0
                  ) / analyticsData.length
                ).toFixed(1)}
              </p>
            </div>
            <div className="text-4xl opacity-80">📊</div>
          </div>
        </div>
      </div>

      {/* Conversations Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">
            Recent Conversations
          </h2>
          <p className="text-slate-600 text-sm mt-1">
            Detailed view of all chatbot interactions
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Session
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Date & Time
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Messages
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Lead Score
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Language
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Outcome
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                  Topics
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              {analyticsData.slice(0, 20).map((conversation, index) => (
                <tr key={index} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                      <div className="text-sm font-medium text-slate-900">
                        {conversation.sessionId?.substring(0, 8)}...
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-slate-900">
                      {new Date(conversation.timestamp).toLocaleDateString()}
                    </div>
                    <div className="text-sm text-slate-500">
                      {new Date(conversation.timestamp).toLocaleTimeString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm text-slate-900 font-medium">
                        {conversation.messageCount}
                      </div>
                      <div className="ml-2 text-xs text-slate-500">msgs</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        conversation.leadScore >= 70
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : conversation.leadScore >= 40
                          ? "bg-yellow-100 text-yellow-800 border border-yellow-200"
                          : "bg-gray-100 text-gray-800 border border-gray-200"
                      }`}
                    >
                      {conversation.leadScore}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="text-sm text-slate-900 uppercase font-medium">
                      {conversation.userLanguage}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                        conversation.conversationOutcome === "lead"
                          ? "bg-green-100 text-green-800 border border-green-200"
                          : conversation.conversationOutcome === "info"
                          ? "bg-blue-100 text-blue-800 border border-blue-200"
                          : "bg-gray-100 text-gray-800 border border-gray-200"
                      }`}
                    >
                      {conversation.conversationOutcome}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {conversation.topicsCovered
                        ?.slice(0, 3)
                        .map((topic: string, topicIndex: number) => (
                          <span
                            key={topicIndex}
                            className="inline-flex px-2 py-1 rounded-md text-xs bg-slate-100 text-slate-700 border"
                          >
                            {topic}
                          </span>
                        ))}
                      {conversation.topicsCovered?.length > 3 && (
                        <span className="inline-flex px-2 py-1 rounded-md text-xs bg-slate-200 text-slate-600">
                          +{conversation.topicsCovered.length - 3}
                        </span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {analyticsData.length > 20 && (
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200">
            <p className="text-sm text-slate-600 text-center">
              Showing 20 of {analyticsData.length} conversations
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
