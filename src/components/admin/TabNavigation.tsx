"use client";

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { id: "overview", name: "Overview", icon: "📊" },
  { id: "conversations", name: "Conversations", icon: "💬" },
  { id: "analytics", name: "Analytics", icon: "📈" },
  { id: "settings", name: "Settings", icon: "⚙️" },
];

export default function TabNavigation({
  activeTab,
  onTabChange,
}: TabNavigationProps) {
  return (
    <div className="border-b border-slate-200 mb-8">
      <nav className="-mb-px flex space-x-8" aria-label="Tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              group inline-flex items-center py-4 px-1 border-b-2 font-medium text-sm transition-all duration-300
              ${
                activeTab === tab.id
                  ? "border-nautical-blue text-nautical-blue bg-gradient-to-t from-blue-50 to-transparent"
                  : "border-transparent text-slate-500 hover:text-slate-700 hover:border-slate-300"
              }
            `}
          >
            <span className="text-lg mr-2">{tab.icon}</span>
            {tab.name}
            {activeTab === tab.id && (
              <div className="ml-2 w-2 h-2 bg-nautical-blue rounded-full animate-pulse"></div>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}
