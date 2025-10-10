import React from "react";
import AiTabs from "./components/AiTabs";

const Aiinsights = () => {
  return (
    <div className="mx-auto py-5 p-4 md:p-6 lg:p-0 mt-1">
      {/* White Box Container */}
      <div className="bg-white dark:bg-gray-900 shadow-sm rounded-xl p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-emerald-900 dark:text-emerald-400 mb-2">
            AI Insights
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Executive intelligence powered by artificial intelligence
          </p>
        </div>

        <AiTabs />
      </div>
    </div>
  );
};

export default Aiinsights;
