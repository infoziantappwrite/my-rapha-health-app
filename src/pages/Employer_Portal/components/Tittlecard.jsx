import React from "react";
import DownloadWithToast from "./DownloadWithToast";
import { Brain, Download } from "lucide-react";

const Tittlecard = () => {
  return (
    <div className="bg-gray-50 flex flex-col items-center">
      {/* Header */}
      <div className="w-full  flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-200 pb-4 mb-6">
        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold text-emerald-900">
            Executive Health Dashboard
          </h1>
          <p className="text-muted-foreground">
            Comprehensive overview of employee health program performance
          </p>
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition">
            <Brain className="w-4 h-4" /> AI Insights
          </button>
            <DownloadWithToast/>
          
        </div>
      </div>

      {/* AI Insights Card */}
      <div className="w-full  bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-xl shadow-md p-5">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-4">
          {/* Left side: text */}
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 mb-2">
              <Brain className="w-5 h-5 text-emerald-600" />
              <h2 className="text-lg font-semibold text-gray-800">
                AI Executive Assistant Ready
              </h2>
            </div>
            <p className="text-gray-700 text-sm">
              Get instant insights about program performance, risks, and
              strategic recommendations
            </p>
          </div>

          {/* Right side: button */}
          <div className="flex-shrink-0">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-emerald-600 text-white rounded-md shadow hover:bg-emerald-700 transition">
              <Brain className="w-4 h-4" /> Open AI Insights
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tittlecard;
