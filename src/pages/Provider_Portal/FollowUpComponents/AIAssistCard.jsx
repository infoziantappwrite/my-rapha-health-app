import React, { useState } from "react";
import { BrainCircuit, Phone, Mail, FileText } from "lucide-react";

const AIAssistCard = () => {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-600 p-6 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="flex items-center space-x-2 text-lg font-semibold">
          <BrainCircuit className="h-5 w-5 text-purple-600" />
          <span>AI Assist</span>
        </h4>
        <button
          type="button"
          onClick={() => setIsActive(!isActive)}
          className={`peer inline-flex h-6 w-12 items-center rounded-full transition-all ${
            isActive ? "bg-purple-600" : "bg-gray-400 dark:bg-gray-600"
          } relative`}
        >
          <span
            className={`absolute left-1 h-5 w-5 bg-white rounded-full shadow-md transition-transform ${
              isActive ? "translate-x-6" : "translate-x-0"
            }`}
          ></span>
        </button>
      </div>

      {/* Card Content */}
      {isActive && (
        <>
          {/* Suggested Priority Action */}
          <div className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-purple-50 dark:bg-purple-900">
            <h4 className="font-medium text-purple-800 dark:text-purple-200 mb-2">
              Suggested Priority Action
            </h4>
            <p className="text-sm text-purple-700 dark:text-purple-100 mb-3">
              Robert Anderson's PSA levels require immediate urologist referral. Priority: URGENT
            </p>
            <button className="inline-flex items-center justify-center w-full h-10 gap-2 px-3 text-sm font-medium rounded-md bg-purple-600 hover:bg-purple-700 text-white">
              Accept Suggestion
            </button>
          </div>

          {/* Risk Stratification */}
          <div className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-blue-50 dark:bg-blue-900">
            <h4 className="font-medium text-blue-800 dark:text-blue-200 mb-2">
              Risk Stratification
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>High Risk Cases:</span>
                <span className="font-medium text-red-600 dark:text-red-400">2</span>
              </div>
              <div className="flex justify-between">
                <span>Moderate Risk:</span>
                <span className="font-medium text-yellow-600 dark:text-yellow-300">1</span>
              </div>
              <div className="flex justify-between">
                <span>Average Response Time:</span>
                <span className="font-medium text-gray-900 dark:text-gray-100">45 minutes</span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="p-4 rounded-lg border border-gray-300 dark:border-gray-600 bg-green-50 dark:bg-green-900">
            <h4 className="font-medium text-green-800 dark:text-green-200 mb-2">Quick Actions</h4>
            <div className="space-y-2 grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button className="inline-flex items-center justify-start w-full h-10 gap-2 px-3 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100">
                <Phone className="h-4 w-4" /> Call All High-Risk Patients
              </button>
              <button className="inline-flex items-center justify-start w-full h-10 gap-2 px-3 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100">
                <Mail className="h-4 w-4" /> Send Follow-Up Emails
              </button>
              <button className="inline-flex items-center justify-start w-full h-10 gap-2 px-3 text-sm font-medium rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100">
                <FileText className="h-4 w-4" /> Generate Summary Report
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AIAssistCard;
