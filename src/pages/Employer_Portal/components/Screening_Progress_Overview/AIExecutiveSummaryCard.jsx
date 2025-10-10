import React from "react";
import { Sparkles } from "lucide-react";

const AIExecutiveSummaryCard = ({
  title = "🧠 AI Executive Summary",
  overview = "Your comprehensive screening program shows strong performance across all five disease areas with 85% overall completion rate.",
  highlights = [
    {
      label: "🎯 Top Performer",
      detail: "Breast Cancer screening at 92% completion",
      color: "green",
    },
    {
      label: "⚠️ Needs Attention",
      detail: "Colon Cancer at 76% - Guardant Shield lag",
      color: "yellow",
    },
    {
      label: "📈 Growth Opportunity",
      detail: "Mobile Unit expansion recommended",
      color: "blue",
    },
  ],
}) => {
  return (
    <div className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-purple-50 border-purple-200 dark:bg-purple-900 dark:border-purple-700 dark:text-purple-200">
      {/* Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 pb-3">
        <h4 className="leading-none flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <span>{title}</span>
        </h4>
      </div>

      {/* Content */}
      <div className="px-6 [&:last-child]:pb-6 text-purple-900 dark:text-purple-200">
        <p className="mb-3">
          <strong>Executive Overview:</strong> {overview}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-3 rounded-lg transition-all"
            >
              <div
                className={`font-medium text-${item.color}-700 dark:text-${item.color}-400`}
              >
                {item.label}
              </div>
              <div
                className={`text-${item.color}-600 dark:text-${item.color}-300`}
              >
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIExecutiveSummaryCard;
