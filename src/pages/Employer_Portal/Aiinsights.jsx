import React from "react";
import AiTabs from "./components/AiTabs";

const Aiinsights = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-6 py-5 p-4 md:p-6 lg:p-0">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-emerald-900 mb-2">AI Insights</h1>
        <p className="text-muted-foreground">
          Executive intelligence powered by artificial intelligence
        </p>
      </div>
        <AiTabs />
    </div>
  );
};

export default Aiinsights;
