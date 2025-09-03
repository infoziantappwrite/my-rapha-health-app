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
        return <ResultsTimeline />
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 px-10 py-8">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-2">Your Screening Results</h1>
      <p className="text-gray-600 mb-6">
        Comprehensive health screening results with personalized insights and next steps
      </p>

      {/* Tabs */}
      <div className="bg-gray-200 p-1 rounded-full flex w-full max-w-full mb-6">
        {TABS.map((tab, index) => (
          <div
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`cursor-pointer flex-1 text-center px-4 py-1 rounded-full font-medium transition ${
              activeTab === tab
                ? "bg-white text-gray-900"
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

export default MyResult;
