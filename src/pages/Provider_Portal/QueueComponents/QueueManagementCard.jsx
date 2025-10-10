import React from "react";

const QueueManagementCard = () => {
  return (
    <div className="w-full bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-xl shadow-sm p-3 sm:p-4">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6">
        
        {/* Left Section */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-users text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
              <path d="M16 3.128a4 4 0 0 1 0 7.744"></path>
              <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
              <circle cx="9" cy="7" r="4"></circle>
            </svg>
          </div>
          <div>
            <span className="inline-flex items-center justify-center rounded-md bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 text-xs sm:text-sm px-2.5 sm:px-3 py-1 mb-1.5">
              🟢 Active Session
            </span>
            <h1 className="text-base sm:text-lg font-semibold text-blue-900 dark:text-blue-200">
              Queue Management
            </h1>
            <p className="text-xs sm:text-sm text-blue-700 dark:text-blue-400">
              TechCorp Headquarters • 10:45 AM
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-auto">
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-blue-600 dark:text-blue-400">
              4
            </div>
            <div className="text-xs sm:text-sm text-blue-700 dark:text-blue-400">
              In Progress
            </div>
          </div>
          <div className="text-center">
            <div className="text-lg sm:text-xl font-bold text-green-600 dark:text-green-400">
              25
            </div>
            <div className="text-xs sm:text-sm text-green-700 dark:text-green-400">
              Completed
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default QueueManagementCard;
