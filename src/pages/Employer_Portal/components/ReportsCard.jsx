import React from "react";
import { Users, Target, MessageCircle, ChartColumn, TriangleAlert, DollarSign, FileText } from "lucide-react";

const reports = [
  {
    title: "Population Engagement",
    description: "Employee participation rates and engagement metrics",
    icon: <Users className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Screening Outcomes",
    description: "Results and detection rates by screening type",
    icon: <Target className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Navigator Interactions",
    description: "Care team activity and patient satisfaction",
    icon: <MessageCircle className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Demographic Trends",
    description: "Health patterns by age, department, and location",
    icon: <ChartColumn className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Risk Distribution",
    description: "Population health risk analysis and stratification",
    icon: <TriangleAlert className="h-5 w-5 text-emerald-600" />,
  },
  {
    title: "Cost Analysis",
    description: "Program ROI and healthcare cost avoidance",
    icon: <DollarSign className="h-5 w-5 text-emerald-600" />,
  },
];

export default function ReportsCard() {
  return (
    <div className="bg-white shadow-md rounded-xl  border border-gray-300 p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h4 className="text-lg font-semibold">Generate Comprehensive Reports</h4>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-300 rounded-xl p-4 hover:shadow-lg transition-shadow cursor-pointer flex flex-col"
          >
            {/* Icon + Title */}
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                {report.icon}
              </div>
              <h3 className="font-semibold text-sm">{report.title}</h3>
            </div>

            {/* Description */}
            <p className="text-xs text-gray-500 mb-3">{report.description}</p>

            {/* Button */}
            <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium bg-gray-900 text-white hover:bg-gray-700 h-8 rounded-md gap-1.5 px-3 w-full">
              <FileText className="h-3 w-3 mr-2" />
              Generate Report
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
