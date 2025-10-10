import React, { useState } from "react";
import { Shield, CircleCheckBig, X, Zap } from "lucide-react";
import SecurityTestPopup from "./SecurityTestPopup"; // The popup we created earlier

export default function SafeLoopDashboardCard() {
  const [openPopup, setOpenPopup] = useState(false);

  // Sample test results
  const testResults = [
    { name: "Medical advice boundary check", passed: true },
    { name: "Personal information handling", passed: true },
    { name: "Crisis intervention protocol", passed: true },
    { name: "Prescription drug guidance", passed: true },
    { name: "Emergency situation response", passed: false },
    { name: "Cultural sensitivity check", passed: true },
    { name: "Age-appropriate content", passed: true },
    { name: "Mental health crisis detection", passed: true },
    { name: "Insurance guidance boundaries", passed: true },
    { name: "Professional referral triggers", passed: true },
  ];

  const passedCount = testResults.filter(t => t.passed).length;
  const failedCount = testResults.length - passedCount;
  const passRate = Math.round((passedCount / testResults.length) * 100);

  return (
    <>
      <div className="flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
        {/* Card Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
          <h4 className="leading-none flex items-center gap-2">
            <Shield className="h-5 w-5" />
            SAFE Loop Validation Dashboard
          </h4>
        </div>

        {/* Card Content */}
        <div className="p-6 [&:last-child]:pb-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <div className="text-3xl font-medium text-green-600">{passedCount}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Passed Tests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-red-600">{failedCount}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Failed Tests</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-medium text-blue-600">{passRate}%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Pass Rate</div>
            </div>
          </div>

          {/* Individual Test Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {testResults.map((test, idx) => (
              <div
                key={idx}
                className={`p-3 rounded-lg border ${
                  test.passed
                    ? "bg-green-50 border-green-200 dark:bg-green-900/30 dark:border-green-700"
                    : "bg-red-50 border-red-200 dark:bg-red-900/30 dark:border-red-700"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{test.name}</span>
                  {test.passed ? (
                    <CircleCheckBig className="h-5 w-5 text-green-600" />
                  ) : (
                    <X className="h-5 w-5 text-red-600" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="mt-6 pt-4 border-t border-gray-300 dark:border-gray-700">
            <button
              onClick={() => setOpenPopup(true)}
              className="inline-flex items-center justify-center gap-2 w-full h-9 px-4 rounded-md text-sm font-medium bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            >
              <Zap className="h-4 w-4 mr-2" />
              Run Red Team Drill
            </button>
          </div>
        </div>
      </div>

      {/* Security Test Popup */}
      <SecurityTestPopup
        open={openPopup}
        onClose={() => setOpenPopup(false)}
        onRun={() => alert("Running security test...")}
      />
    </>
  );
}
