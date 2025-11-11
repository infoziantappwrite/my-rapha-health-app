import { useState } from "react";
import { Upload, FileText, Eye, Lock } from "lucide-react";

export default function HealthRecordsCard() {
  const [activeTab, setActiveTab] = useState<"results" | "uploads" | "shared">(
    "results"
  );

  const tabClass = (tab: string) =>
    `inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-xl 
     border border-transparent px-2 py-1 text-sm font-medium transition-all 
     ${
       activeTab === tab
         ? "bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border-gray-300 dark:border-gray-700 shadow-sm"
         : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800/60"
     }`;

  const records = [
    {
      title: "Comprehensive Screening Results - Jan 2025",
      size: "PDF • 2.4 MB",
    },
    { title: "Blood Work Lab Report - Jan 2025", size: "PDF • 2.4 MB" },
    { title: "Imaging Results - Dec 2024", size: "PDF • 2.4 MB" },
  ];

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm transition-colors">
      {/* Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 border-b border-gray-200 dark:border-gray-800 pb-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="leading-none text-lg font-semibold">
              My Health Records
            </h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Securely store, view, and share your health documents.
            </p>
          </div>
          <button
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium 
                       border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 
                       text-gray-800 dark:text-gray-200 hover:bg-blue-600 hover:text-white 
                       h-8 rounded-md gap-1.5 px-3 transition-all"
          >
            <Upload className="h-4 w-4 mr-1" /> Upload
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="px-6 pb-6">
        <div className="bg-gray-100 dark:bg-gray-800/70 text-gray-700 dark:text-gray-300 h-9 rounded-xl p-[3px] grid w-full grid-cols-3 mb-4">
          <button onClick={() => setActiveTab("results")} className={tabClass("results")}>
            Results
          </button>
          <button onClick={() => setActiveTab("uploads")} className={tabClass("uploads")}>
            Uploads
          </button>
          <button onClick={() => setActiveTab("shared")} className={tabClass("shared")}>
            Shared
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "results" && (
          <div className="space-y-3 animate-fadeIn">
            {records.map((r, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 
                           border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md 
                           transition-shadow cursor-pointer"
              >
                <div className="flex items-center space-x-3">
                  <FileText className="h-5 w-5 text-red-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-100">{r.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{r.size}</p>
                  </div>
                </div>
                <button
                  className="h-8 px-3 inline-flex items-center justify-center rounded-md 
                             hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
                >
                  <Eye className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "uploads" && (
          <div className="flex items-center justify-center py-6 text-sm text-gray-500 dark:text-gray-400 animate-fadeIn">
            No uploads yet. Start by clicking “Upload”.
          </div>
        )}

        {activeTab === "shared" && (
          <div className="flex items-center justify-center py-6 text-sm text-gray-500 dark:text-gray-400 animate-fadeIn">
            No shared documents yet.
          </div>
        )}

        {/* HIPAA Notice */}
        <div className="mt-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-900 rounded-xl p-3 flex items-start space-x-2">
          <Lock className="h-4 w-4 text-blue-600 dark:text-blue-400 mt-0.5" />
          <p className="text-xs text-blue-900 dark:text-blue-300">
            Your data is protected under HIPAA standards.
          </p>
        </div>
      </div>
    </div>
  );
}
