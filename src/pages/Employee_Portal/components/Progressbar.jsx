import React from "react";

const Progressbar = () => {
  // Example: current step
  const completed = 1; // change this value (1 to 6) for testing
  const total = 6;

  const progress = Math.round((completed / total) * 100);

  return (
    <div className="bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-lg p-6 shadow-sm transition-colors duration-300">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
        Your Progress
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
        You’re making great progress on your health journey!
      </p>

      {/* Progress Bar */}
      <div className="mt-4">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
          <div
            className="bg-blue-600 dark:bg-blue-400 h-3 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Progress Info */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {completed} of {total} steps completed
          </span>
          <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            {progress}% Complete
          </span>
        </div>
      </div>
    </div>
  );
};

export default Progressbar;
