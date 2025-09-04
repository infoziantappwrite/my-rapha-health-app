import React, { useState } from "react";
import AskAiDirectlyTab from "./Tabs/AskAiDirectlyTab";
import AiInsightsTab from "./Tabs/AiInsightsTab";
import ReportSummariesTab from "./Tabs/ReportSummariesTab";


const AiTabs = () => {
   const [activeTab, setActiveTab] = useState("insights");

  const renderContent = () => {
    switch (activeTab) {
      case "insights":
        return <AiInsightsTab />;
      case "summaries":
        return <ReportSummariesTab />;
      case "direct":
        return <AskAiDirectlyTab />;
      default:
        return null;
    }
  };
  return (
    <div className="max-w-6xl mx-auto pt-6 space-y-8">
      {/* Tabs Header */}
      <div
        role="tablist"
        aria-orientation="horizontal"
        className="h-10 items-center justify-center rounded-lg  grid w-full grid-cols-3 mb-8 bg-white border border-gray-200 shadow-sm"
      >
        {[
          { id: "insights", label: "AI Insights" },
          { id: "summaries", label: "Report Summaries" },
          { id: "direct", label: "Ask AI Directly" },
        ].map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-lg border border-transparent px-2 py-1 text-base transition-colors ${
              activeTab === tab.id
                ? "bg-emerald-100 text-emerald-800 font-semibold shadow-sm"
                : "text-gray-600 hover:bg-gray-50 font-medium"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
     <div >
        {renderContent()}
      </div>
    </div>
  );
};

export default AiTabs;
