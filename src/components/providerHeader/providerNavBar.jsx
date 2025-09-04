import React, { useState } from "react";

const TABS = [
  "Queue",
  "Samples",
  "Follow-Up",
  "Calendar",
  "Settings"
];


const providerNavBar = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Queue":
        return <div>Queue</div>;
      case "Samples":
        return <div>Samples</div>;
      case "Follow-Up":
        return <div>Follow-Up</div>;
      case "Calendar":
        return <div>Calendar</div>;
      case "Settings":
        return <div>Settings</div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-10 py-8">
      {/* Tabs */}
      <div className="bg-gray-200 p-1 rounded-2xl flex w-full overflow-x-auto no-scrollbar mb-6">
        {TABS.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer flex-1 min-w-max text-center px-4 py-2 rounded-2xl font-medium transition ${
              activeTab === tab
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mb-6">{renderTabContent()}</div>
    </div>
  );
};

export default providerNavBar;
