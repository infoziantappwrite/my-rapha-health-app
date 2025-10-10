import React from "react";

export default function DiseaseModal({ disease, onClose }) {
  if (!disease) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl w-full max-w-4xl max-h-[80vh] overflow-y-auto shadow-lg border border-gray-300 dark:border-gray-700 p-6 relative grid gap-6">
        
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-900 dark:text-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 text-emerald-600"
            >
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
            {disease.name} - Detailed Analytics
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 rounded-md p-1 transition"
          >
            ✕
          </button>
        </div>

        {/* AI Summary */}
        <div className="bg-purple-50 dark:bg-purple-900 border border-purple-200 dark:border-purple-700 rounded-xl p-4">
          <strong className="text-purple-700 dark:text-purple-300">Key Insights:</strong>{" "}
          Completion {disease.completion}%.
          Monitor high-risk cases: {disease.highRisk}.
          <div className="text-xs text-purple-600 dark:text-purple-400 mt-1">
            Risk Flags: {disease.highRisk} • Trend: -3% vs last quarter
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="border rounded-xl p-4 text-center bg-white dark:bg-gray-800">
            <div className="text-2xl font-bold text-emerald-600">{disease.screenings}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Total Screenings</div>
          </div>
          <div className="border rounded-xl p-4 text-center bg-white dark:bg-gray-800">
            <div className="text-2xl font-bold text-emerald-600">{disease.completion}%</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Completion Rate</div>
          </div>
          <div className="border rounded-xl p-4 text-center bg-white dark:bg-gray-800">
            <div className="text-2xl font-bold text-red-600">{disease.highRisk}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">High-Risk Cases</div>
          </div>
          <div className="border rounded-xl p-4 text-center bg-white dark:bg-gray-800">
            <div className="text-2xl font-bold text-blue-600">{disease.detected}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">Cases Detected</div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-between flex-wrap gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            Close
          </button>

          <div className="flex gap-2 flex-wrap">
            <button className="px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              Download Report
            </button>

            <button className="px-4 py-2 rounded-md bg-emerald-600 text-white hover:bg-emerald-700 transition flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 15V3"></path>
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <path d="m7 10 5 5 5-5"></path>
              </svg>
              Message Rapha Team
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
