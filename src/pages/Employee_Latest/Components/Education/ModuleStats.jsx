import React from "react";

const ModuleStats = ({ completed, total, progress }) => {
  const roundedProgress = Math.round(progress);

  return (
    <div className="flex-1 p-4 sm:p-6 rounded-2xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900">
      {/* Header */}
      <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-gray-100">
        Your Stats
      </h4>

      {/* Stats Text */}
      <div className="space-y-1.5 mb-3">
        <p className="text-sm text-gray-700 dark:text-gray-400">
          <span className="font-medium">Modules Completed:</span> {completed}/{total}
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          <span className="font-medium">Total Progress:</span> {roundedProgress}%
        </p>
        <p className="text-sm text-gray-700 dark:text-gray-400">
          <span className="font-medium">Next Milestone:</span>{" "}
          {roundedProgress < 50
            ? "50% Complete"
            : roundedProgress < 75
            ? "75% Complete"
            : roundedProgress < 100
            ? "100% Complete"
            : "All Done 🎉"}
        </p>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-in-out"
          style={{
            width: `${roundedProgress}%`,
            background:
              roundedProgress >= 100
                ? "linear-gradient(90deg, #4ade80, #22c55e)" // green for complete
                : "linear-gradient(90deg, #6366f1, #8b5cf6)", // purple for active
          }}
        ></div>
      </div>

      {/* Footer Summary */}
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400 text-right">
        {roundedProgress}% complete
      </div>
    </div>
  );
};

export default ModuleStats;
