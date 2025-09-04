import React from "react";
import {
  Funnel,
  Plus,
  Search,
  FileChartColumnIncreasing,
  Clock,
} from "lucide-react";

const ReportsHeader = () => {
  return (
    <div className="space-y-6">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold text-emerald-900">
            Program Reports &amp; Insights
          </h1>
          <p className="text-muted-foreground">
            Comprehensive analytics dashboard with AI-powered insights and filtering
          </p>
        </div>

        <div className="flex space-x-2">
          <button className="flex items-center space-x-2 justify-center gap-2 rounded-md border border-gray-300 bg-white text-gray-800 hover:bg-gray-100 h-9 px-4 py-2 text-sm font-medium transition-all">
            <Funnel className="h-4 w-4" />
            <span>Filters</span>
          </button>

          <button className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 h-9 px-4 py-2 text-sm font-medium transition-all">
            <Plus className="h-4 w-4" />
            <span>Generate New Report</span>
          </button>
        </div>
      </div>

      {/* Search + Stats */}
      <div className="flex items-center justify-between">
        {/* Search Input */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              className="pl-10 w-80 h-9 rounded-md border border-gray-300 bg-white px-3 py-1 text-sm placeholder:text-gray-400 focus-visible:border-emerald-400 focus-visible:ring-2 focus-visible:ring-emerald-200 outline-none transition"
              placeholder="Search reports and insights..."
            />
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center space-x-6 text-sm text-gray-600">
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
