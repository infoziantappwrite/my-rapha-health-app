import React from "react";

const NavigatorAssistant = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-1 h-6 bg-emerald-600 rounded-full"></div>
        <h2 className="text-xl font-semibold text-emerald-900 dark:text-emerald-100">
          Navigator Assistant
        </h2>
      </div>

      {/* Card */}
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 shadow-lg">
        {/* Card Header */}
        <div className="px-6 pt-6">
          <h4 className="flex items-center space-x-2 leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-message-square h-5 w-5 text-emerald-600"
              aria-hidden="true"
            >
              <path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path>
            </svg>
            <span>Navigator Assistant</span>
            <span className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 px-2 py-0.5 text-xs font-medium bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300">
              AI Powered
            </span>
          </h4>
        </div>

        {/* Card Content */}
        <div className="px-6 pb-6 space-y-4">
          {/* Input + Send */}
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="Ask about locations, Navigator response times, risk cases..."
              className="flex-1 h-9 rounded-md border border-gray-300 dark:border-gray-600 px-3 py-1 text-sm bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 outline-none focus:ring-2 focus:ring-emerald-300 dark:focus:ring-emerald-500"
            />
            <button
              disabled
              className="inline-flex items-center justify-center rounded-md bg-emerald-600 text-white px-4 py-2 h-9 text-sm hover:bg-emerald-700 disabled:opacity-50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-send h-4 w-4"
                aria-hidden="true"
              >
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                <path d="m21.854 2.147-10.94 10.939"></path>
              </svg>
            </button>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Show Navigator response time", icon: <ClockIcon /> },
              { label: "Highlight high-risk cases", icon: <AlertIcon /> },
              { label: "Export current dashboard", icon: <ExportIcon /> },
              { label: "Compare site performance", icon: <ChartIcon /> },
              { label: "Schedule Navigator meeting", icon: <CalendarIcon /> },
              { label: "Review completion trends", icon: <TrendIcon /> },
            ].map((btn, i) => (
              <button
                key={i}
                className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 px-3 h-7 text-xs hover:bg-emerald-50 dark:hover:bg-gray-800 transition"
              >
                {btn.icon}
                {btn.label}
              </button>
            ))}
          </div>

          {/* Sample Question */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-4 rounded-lg border border-gray-300 dark:border-gray-700">
            <div className="flex items-center space-x-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-bot h-4 w-4 text-emerald-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 8V4H8"></path>
                <rect width="16" height="12" x="4" y="8" rx="2"></rect>
                <path d="M2 14h2"></path>
                <path d="M20 14h2"></path>
                <path d="M15 13v2"></path>
                <path d="M9 13v2"></path>
              </svg>
              <span className="text-sm font-medium text-emerald-900 dark:text-emerald-200">
                Sample Question
              </span>
            </div>
            <p className="text-sm text-emerald-800 dark:text-emerald-300 mb-3">
              "Which locations are falling behind in screening?"
            </p>
            <button className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-600 px-3 h-8 text-xs hover:bg-emerald-100 dark:hover:bg-gray-800 transition">
              Try This Question
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/* === Small inline SVG icon components to keep JSX clean === */
const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 6v6l4 2"></path>
    <circle cx="12" cy="12" r="10"></circle>
  </svg>
);

const AlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
    <path d="M12 9v4"></path>
    <path d="M12 17h.01"></path>
  </svg>
);

const ExportIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M12 15V3"></path>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
    <path d="m7 10 5 5 5-5"></path>
  </svg>
);

const ChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
    <path d="M18 17V9"></path>
    <path d="M13 17V5"></path>
    <path d="M8 17v-3"></path>
  </svg>
);

const CalendarIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M8 2v4"></path>
    <path d="M16 2v4"></path>
    <rect width="18" height="18" x="3" y="4" rx="2"></rect>
    <path d="M3 10h18"></path>
  </svg>
);

const TrendIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 7h6v6"></path>
    <path d="m22 7-8.5 8.5-5-5L2 17"></path>
  </svg>
);

export default NavigatorAssistant;
