import React from "react";

const ScreeningForecasts = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-1 h-6 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
        <h2 className="text-xl font-semibold text-blue-900 dark:text-blue-100">
          Screening Forecasts
        </h2>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col gap-6 rounded-xl border shadow-lg border-blue-200 dark:border-blue-700">
        {/* Header */}
        <div className="px-6 pt-6 border-b border-blue-200 dark:border-blue-700 pb-6">
          <h4 className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 3v16a2 2 0 0 0 2 2h16"></path>
              <path d="m19 9-5 5-4-4-3 3"></path>
            </svg>
            <span>Screening Forecasts</span>
            <span className="ml-2 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-100 text-xs px-2 py-0.5 rounded-md font-medium">
              Predictive
            </span>
          </h4>
        </div>

        {/* Controls */}
        <div className="px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between space-y-3 sm:space-y-0">
          {/* Time Range */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <label className="text-sm font-medium">Time Range:</label>
            <button className="flex items-center justify-between w-full sm:w-40 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              Next 60 Days
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 opacity-50"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </button>
          </div>

          {/* Export Button */}
          <button className="flex items-center w-full sm:w-auto px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3 w-3 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            Export Forecast
          </button>
        </div>

        {/* Site Forecasts */}
        <div className="px-6 space-y-6">
          <h4 className="font-medium flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-blue-600 dark:text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
              <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
              <path d="M10 6h4"></path>
              <path d="M10 10h4"></path>
              <path d="M10 14h4"></path>
              <path d="M10 18h4"></path>
            </svg>
            <span>Projected Completion by Site</span>
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { site: "STL HQ", current: 87, projected: 98 },
              { site: "BJC Site", current: 74, projected: 91 },
              { site: "Mobile Unit", current: 58, projected: 78 },
            ].map((item) => (
              <div
                key={item.site}
                className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">{item.site}</span>
                  <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-100 px-2 py-0.5 text-xs rounded-md">
                    ▲
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Current:</span>
                    <span className="font-medium">{item.current}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Projected:</span>
                    <span className="font-medium text-blue-600 dark:text-blue-400">
                      {item.projected}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 dark:bg-blue-400 h-2"
                      style={{ width: `${item.current}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forecast Insight */}
        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg border border-green-200 dark:border-green-700 mx-6 mb-6">
          <div className="flex items-center space-x-2 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-green-600 dark:text-green-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path>
              <path d="M20 2v4"></path>
              <path d="M22 4h-4"></path>
              <circle cx="4" cy="20" r="2"></circle>
            </svg>
            <span className="font-medium text-green-900 dark:text-green-100">
              AI Forecast Insight
            </span>
          </div>
          <p className="text-sm text-green-800 dark:text-green-200">
            If current trends hold, STL HQ will reach 98% screening completion
            by March 1st, while Mobile Unit will achieve 78% with additional
            Navigator support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScreeningForecasts;
