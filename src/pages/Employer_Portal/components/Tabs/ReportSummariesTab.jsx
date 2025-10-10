import React from "react";

const ReportSummariesTab = () => {
  return (
    <div
      role="tabpanel"
      aria-labelledby="tab-report-summaries"
      className="flex-1 outline-none"
    >
      <div className="text-center py-12">
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
          className="lucide lucide-file-text h-12 w-12 mx-auto text-gray-400 dark:text-gray-500 mb-4"
          aria-hidden="true"
        >
          <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
          <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
          <path d="M10 9H8"></path>
          <path d="M16 13H8"></path>
          <path d="M16 17H8"></path>
        </svg>

        {/* Title */}
        <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
          Report Summaries
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-400">
          AI-generated summaries of all program reports will appear here.
        </p>
      </div>
    </div>
  );
};

export default ReportSummariesTab;
