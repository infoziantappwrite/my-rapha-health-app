import React from "react";

const CohortIntelligence = () => {
  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center space-x-2 mb-4">
        <div className="w-1 h-6 bg-purple-600 rounded-full"></div>
        <h2 className="text-xl font-semibold text-purple-900 dark:text-purple-300">
          Cohort Intelligence
        </h2>
      </div>

      {/* Main Card */}
      <div className="bg-white dark:bg-gray-900 flex flex-col gap-6 rounded-xl border shadow-lg border-purple-200 dark:border-purple-700">
        {/* Header */}
        <div className="px-6 pt-6 border-b border-purple-200 dark:border-purple-700 pb-6">
          <h4 className="flex items-center space-x-2 font-semibold text-gray-900 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-purple-600 dark:text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 21a8 8 0 0 0-16 0"></path>
              <circle cx="10" cy="8" r="5"></circle>
              <path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3"></path>
            </svg>
            <span>Cohort Intelligence</span>
            <span className="ml-2 bg-purple-100 dark:bg-purple-800 text-purple-800 dark:text-purple-200 text-xs px-2 py-0.5 rounded-md font-medium">
              Comparative
            </span>
          </h4>
        </div>

        {/* Cohort Selectors */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium mb-2 block dark:text-gray-200">Cohort A</label>
            <button className="flex w-full items-center justify-between px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              Remote Workers
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
          <div>
            <label className="text-sm font-medium mb-2 block dark:text-gray-200">Cohort B</label>
            <button className="flex w-full items-center justify-between px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700">
              Onsite Staff
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
        </div>

        {/* Cohort Stats */}
        <div className="px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cohort A */}
          <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-700 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium dark:text-gray-100">Remote Workers</h4>
              <span className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-2 py-0.5 text-xs rounded-md font-medium">
                42% Complete
              </span>
            </div>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Enrolled:</span>
                <span className="font-medium">287</span>
              </div>
              <div className="flex justify-between">
                <span>Avg Time:</span>
                <span className="font-medium">12.3 days</span>
              </div>
              <div className="flex justify-between">
                <span>Drop-off Stage:</span>
                <span className="font-medium">Education Viewing</span>
              </div>
              <div className="flex justify-between">
                <span>Satisfaction:</span>
                <span className="font-medium">3.8/5.0</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-600 h-2" style={{ width: "42%" }}></div>
              </div>
            </div>
          </div>

          {/* Cohort B */}
          <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-700 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <h4 className="font-medium dark:text-gray-100">Onsite Staff</h4>
              <span className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-2 py-0.5 text-xs rounded-md font-medium">
                76% Complete
              </span>
            </div>
            <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
              <div className="flex justify-between">
                <span>Enrolled:</span>
                <span className="font-medium">1,113</span>
              </div>
              <div className="flex justify-between">
                <span>Avg Time:</span>
                <span className="font-medium">8.4 days</span>
              </div>
              <div className="flex justify-between">
                <span>Drop-off Stage:</span>
                <span className="font-medium">Results Review</span>
              </div>
              <div className="flex justify-between">
                <span>Satisfaction:</span>
                <span className="font-medium">4.6/5.0</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
                <div className="bg-green-600 h-2" style={{ width: "76%" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Cohort Analysis */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-700 rounded-xl mx-6 mb-6 p-4">
          <div className="flex items-center space-x-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-purple-600 dark:text-purple-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 18V5"></path>
              <path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path>
              <path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path>
              <path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path>
              <path d="M18 18a4 4 0 0 0 2-7.464"></path>
              <path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path>
              <path d="M6 18a4 4 0 0 1-2-7.464"></path>
              <path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path>
            </svg>
            <span className="font-medium text-purple-900 dark:text-purple-200">
              AI Cohort Analysis
            </span>
          </div>
          <div className="text-sm text-purple-800 dark:text-purple-200 space-y-2">
            <p>
              <strong>Remote Workers (42% completion)</strong> vs{" "}
              <strong>Onsite Staff (76% completion)</strong> shows a significant
              34-point gap requiring immediate attention.
            </p>
            <p className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-purple-200 dark:border-purple-700">
              <strong>Recommendation:</strong> Consider targeting remote workers
              with mobile screening vans, concierge scheduling support, and
              extended evening availability to bridge this engagement gap.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center px-6 pb-6">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Cohort analysis ready for executive review
          </span>
          <button className="flex items-center px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 15V3"></path>
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
              <path d="m7 10 5 5 5-5"></path>
            </svg>
            Export Cohort Insight PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default CohortIntelligence;
