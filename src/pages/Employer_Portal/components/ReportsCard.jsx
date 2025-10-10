import React from "react";
import {
  Users,
  Target,
  MessageCircle,
  ChartColumn,
  TriangleAlert,
  DollarSign,
  FileText,
} from "lucide-react";

const reports = [
  {
    title: "Population Engagement",
    description: "Employee participation rates and engagement metrics",
    icon: <Users className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    title: "Screening Outcomes",
    description: "Results and detection rates by screening type",
    icon: <Target className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    title: "Navigator Interactions",
    description: "Care team activity and patient satisfaction",
    icon: <MessageCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    title: "Demographic Trends",
    description: "Health patterns by age, department, and location",
    icon: <ChartColumn className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    title: "Risk Distribution",
    description: "Population health risk analysis and stratification",
    icon: <TriangleAlert className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
  },
  {
    title: "Cost Analysis",
    description: "Program ROI and healthcare cost avoidance",
    icon: <DollarSign className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />,
  },
];

export default function ReportsCard() {
  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-xl border border-gray-300 dark:border-gray-700 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Generate Comprehensive Reports
          </h4>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reports.map((report, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
            >
              {/* Icon + Title */}
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                  {report.icon}
                </div>
                <h3 className="font-semibold text-sm text-gray-900 dark:text-gray-100">
                  {report.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                {report.description}
              </p>

              {/* Button */}
              <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-gray-900 dark:bg-emerald-600 text-white hover:bg-gray-700 dark:hover:bg-emerald-500 h-8 rounded-md gap-1.5 px-3 w-full">
                <FileText className="h-3 w-3 mr-2" />
                Generate Report
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
