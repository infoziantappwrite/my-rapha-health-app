import React from "react";
import DownloadWithToast from "./DownloadWithToast";
import { Brain } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Tittlecard = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-50 dark:bg-gray-900 flex flex-col items-center transition-colors">
      {/* Header */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-200 dark:border-gray-700 pb-4 mb-6">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-emerald-900 dark:text-emerald-300">
            Executive Health Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Comprehensive overview of employee health program performance
          </p>
        </div>

        <div className="flex gap-2">
          <button onClick={() => navigate("/employer/insights")} className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition">
            <Brain className="w-4 h-4" /> AI Insights
          </button>
          <DownloadWithToast />
        </div>
      </div>

      {/* AI Insights Card */}
      <div className="w-full bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/30 dark:to-emerald-800/20 border border-emerald-200 dark:border-emerald-700 rounded-xl shadow-md p-5 transition-colors">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          {/* Left side: text */}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                AI Executive Assistant Ready
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-400 text-sm">
              Get instant insights about program performance, risks, and
              strategic recommendations
            </p>
          </div>

          {/* Right side: button */}
          <div className="flex-shrink-0">
            <button onClick={() => navigate("/employer/insights")}  className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition">
              <Brain className="w-4 h-4" /> Open AI Insights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tittlecard;
