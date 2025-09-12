import React from "react";

const AskAiDirectlyTab = () => {
  return (
    <div
      role="tabpanel"
      aria-labelledby="tab-ask-ai-direct"
      className="flex-1 outline-none"
    >
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
          <div className="p-8 text-center">
            {/* Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-bot h-12 w-12 mx-auto text-emerald-600 dark:text-emerald-400 mb-4"
              aria-hidden="true"
            >
              <path d="M12 8V4H8"></path>
              <rect width="16" height="12" x="4" y="8" rx="2"></rect>
              <path d="M2 14h2"></path>
              <path d="M20 14h2"></path>
              <path d="M15 13v2"></path>
              <path d="M9 13v2"></path>
            </svg>

            {/* Title */}
            <h3 className="text-lg font-medium mb-2">Ask AI Directly</h3>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get instant answers about your health program performance
            </p>

            {/* Button */}
            <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-9 px-4 py-2 bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 shadow">
              Start with Navigator Assistant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskAiDirectlyTab;
