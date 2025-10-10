import React from "react";
import { Funnel, Plus, Search, FileChartColumnIncreasing, Clock } from "lucide-react";

const ReportsHeader = () => {
  return (
    <div className="space-y-6 px-4 sm:px-6">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-emerald-900 dark:text-emerald-400">
            Program Reports &amp; Insights
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground dark:text-gray-400">
            Comprehensive analytics dashboard with AI-powered insights and filtering
          </p>
        </div>

        <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
          <button className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 h-9 px-4 text-sm font-medium transition-all">
            <Funnel className="h-4 w-4" />
            <span>Filters</span>
          </button>

          <button className="flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 dark:bg-emerald-500 dark:hover:bg-emerald-600 h-9 px-4 text-sm font-medium transition-all shadow">
            <Plus className="h-4 w-4" />
            <span>Generate New Report</span>
          </button>
        </div>
      </div>

      {/* Search + Stats */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0">
        {/* Search Input */}
        <div className="w-full sm:w-80 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-500" />
          <input
            className="pl-10 w-full h-9 rounded-md border border-gray-300 bg-white text-sm placeholder:text-gray-400 focus-visible:border-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-200 outline-none transition dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:placeholder:text-gray-500 dark:focus-visible:border-emerald-500 dark:focus-visible:ring-emerald-900"
            placeholder="Search reports and insights..."
          />
        </div>

        {/* Stats */}
        <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center space-x-2">
            <FileChartColumnIncreasing className="h-4 w-4" />
            <span>6 reports</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4" />
            <span>Last updated: Today 11:30 AM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsHeader;
