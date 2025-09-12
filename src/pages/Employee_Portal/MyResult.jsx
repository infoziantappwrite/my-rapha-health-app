import React, { useState } from "react";
import HealthCard from "./components/MyResultCompoenent/HealthCard";
import UploadOutside from "./components/MyResultCompoenent/UploadOutside";
import MyNavigator from "./components/MyResultCompoenent/MyNavigator";
import ResultsTimeline from "./components/MyResultCompoenent/ResultsTimeline";

const TABS = [
  "View All Results",
  "Upload Outside Results",
  "My Navigator Notes",
  "Results Timeline",
];

const MyResult = () => {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  const renderTabContent = () => {
    switch (activeTab) {
      case "View All Results":
        return <HealthCard />;
      case "Upload Outside Results":
        return <UploadOutside />;
      case "My Navigator Notes":
        return <MyNavigator />;
      case "Results Timeline":
        return <ResultsTimeline />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 ">
      {/* Title */}
      <div className="space-y-10  max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-2xl font-bold mb-2">Your Screening Results</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Comprehensive health screening results with personalized insights and next steps
      </p>

      {/* Tabs */}
      <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-full flex w-full overflow-x-auto no-scrollbar mb-6">
        {TABS.map((tab) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer flex-1 min-w-max text-center px-4 py-2 rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            }`}
          >
            {tab}
          </div>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mb-6">{renderTabContent()}</div>
      </div>
    </div>
  );
};

export default MyResult;
