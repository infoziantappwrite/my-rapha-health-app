import React from "react";
import { CheckCircle, Clock, Sparkles } from "lucide-react";

const StepProgressCard = ({ stepData }) => {
  if (!stepData) return null;

  // Choose badge color & icon dynamically
  const renderBadge = () => {
    switch (stepData.status) {
      case "Complete":
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-green-600 text-white px-4 py-1.5 text-sm font-medium">
            <CheckCircle className="w-4 h-4" /> Complete
          </span>
        );
      case "In Progress":
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-yellow-500 text-white px-4 py-1.5 text-sm font-medium">
            <Clock className="w-4 h-4" /> In Progress
          </span>
        );
      case "Available":
      default:
        return (
          <span className="inline-flex items-center gap-1 rounded-md bg-blue-600 text-white px-4 py-1.5 text-sm font-medium">
            <Sparkles className="w-4 h-4" />  Available
          </span>
        );
    }
  };

  return (
   <div className="flex flex-col gap-6 rounded-xl border bg-gradient-to-r from-gray-50 to-gray-100 border-gray-300 shadow-md w-full max-w-xl mx-auto dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-lg">
      <div className="p-6 sm:p-8">
        {/* Static Section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div className="text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Step Progress
            </h3>
            <p className="text-muted-foreground text-xs sm:text-base text-gray-600 dark:text-gray-400">
              Track your journey through this health milestone
            </p>
          </div>
          {renderBadge && renderBadge()}
        </div>

        {/* Progress Section */}
        <div className="space-y-4">
          <div className="flex justify-between text-sm sm:text-lg">
            <span className="font-medium text-gray-800 dark:text-gray-200">
              Completion Status
            </span>
            <span className="font-bold text-gray-800 dark:text-gray-100">
              {stepData.completion}%
            </span>
          </div>

          <div
            role="progressbar"
            className="bg-gray-200 dark:bg-gray-700 relative w-full overflow-hidden rounded-full h-3 sm:h-4"
          >
            <div
              className={`h-full transition-all ${
                stepData.status === "Complete"
                  ? "bg-green-600 dark:bg-green-500"
                  : stepData.status === "In Progress"
                  ? "bg-yellow-500 dark:bg-yellow-400"
                  : "bg-blue-600 dark:bg-blue-500"
              }`}
              style={{ width: `${stepData.completion}%` }}
            ></div>
          </div>

          {/* Dynamic per step description */}
          <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            {stepData.description}
          </div>
        </div>
      </div>
    </div>

  );
};

export default StepProgressCard;
