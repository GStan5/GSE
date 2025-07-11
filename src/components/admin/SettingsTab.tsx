"use client";

interface SettingsTabProps {
  onExportData: () => void;
  onClearData: () => void;
  onRefreshData: () => void;
  onGenerateTestData: () => void;
}

export default function SettingsTab({
  onExportData,
  onClearData,
  onRefreshData,
  onGenerateTestData,
}: SettingsTabProps) {
  return (
    <div className="space-y-8">
      {/* Data Management */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center mb-6">
          <div className="text-2xl mr-3">🛠️</div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Data Management
            </h2>
            <p className="text-slate-600 text-sm">
              Manage your analytics data and settings
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Export Section */}
          <div className="p-6 border border-green-200 rounded-xl bg-green-50">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-green-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="text-lg font-semibold text-green-800">
                Export Data
              </h3>
            </div>
            <p className="text-green-700 text-sm mb-4">
              Download all analytics data as a JSON file for backup or analysis.
            </p>
            <button
              onClick={onExportData}
              className="w-full px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Export Analytics Data
            </button>
          </div>

          {/* Refresh Section */}
          <div className="p-6 border border-blue-200 rounded-xl bg-blue-50">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-blue-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              <h3 className="text-lg font-semibold text-blue-800">
                Refresh Data
              </h3>
            </div>
            <p className="text-blue-700 text-sm mb-4">
              Reload all analytics data from the server and local storage.
            </p>
            <button
              onClick={onRefreshData}
              className="w-full px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Refresh Dashboard
            </button>
          </div>
        </div>
      </div>

      {/* Development Tools */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center mb-6">
          <div className="text-2xl mr-3">🔧</div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              Development Tools
            </h2>
            <p className="text-slate-600 text-sm">
              Tools for testing and development
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Test Data Section */}
          <div className="p-6 border border-purple-200 rounded-xl bg-purple-50">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-purple-600 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <h3 className="text-lg font-semibold text-purple-800">
                Generate Test Data
              </h3>
            </div>
            <p className="text-purple-700 text-sm mb-4">
              Add sample conversation data for testing the dashboard.
            </p>
            <button
              onClick={onGenerateTestData}
              className="w-full px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              Add Test Conversations
            </button>
          </div>

          {/* Clear Data Section */}
          <div className="p-6 border border-red-200 rounded-xl bg-red-50">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-red-600 mr-2"
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
              <h3 className="text-lg font-semibold text-red-800">
                Clear All Data
              </h3>
            </div>
            <p className="text-red-700 text-sm mb-4">
              Permanently delete all analytics data. This action cannot be
              undone.
            </p>
            <button
              onClick={onClearData}
              className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
            >
              Clear All Data
            </button>
          </div>
        </div>
      </div>

      {/* System Information */}
      <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6">
        <div className="flex items-center mb-6">
          <div className="text-2xl mr-3">ℹ️</div>
          <div>
            <h2 className="text-xl font-bold text-slate-800">
              System Information
            </h2>
            <p className="text-slate-600 text-sm">
              Current system status and information
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl font-bold text-slate-700">
              {typeof window !== "undefined" &&
              localStorage.getItem("chatbot_analytics")
                ? "✅"
                : "❌"}
            </div>
            <div className="text-sm text-slate-600 font-medium mt-2">
              Local Storage
            </div>
          </div>

          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl font-bold text-slate-700">
              {typeof window !== "undefined" &&
              sessionStorage.getItem("admin_authenticated")
                ? "✅"
                : "❌"}
            </div>
            <div className="text-sm text-slate-600 font-medium mt-2">
              Authentication
            </div>
          </div>

          <div className="text-center p-4 bg-slate-50 rounded-xl">
            <div className="text-2xl font-bold text-slate-700">
              {new Date().toLocaleDateString()}
            </div>
            <div className="text-sm text-slate-600 font-medium mt-2">
              Current Date
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
