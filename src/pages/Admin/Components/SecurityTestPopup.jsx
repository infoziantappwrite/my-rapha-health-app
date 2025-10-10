import React from "react";

export default function SecurityTestPopup({ open, onClose, onRun }) {
  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    >
      <div className="relative bg-white dark:bg-gray-800 w-full max-w-2xl sm:max-w-lg p-6 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg transform transition-transform duration-200">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center sm:text-left mb-4">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Red Team Security Drill
          </h2>
        </div>

        {/* Test Input */}
        <div className="mb-4">
          <label
            htmlFor="test-input"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 select-none"
          >
            Test Case Input
          </label>
          <textarea
            id="test-input"
            placeholder="Enter a test prompt to evaluate AI safety boundaries..."
            className="mt-2 w-full min-h-16 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 px-3 py-2 text-base text-gray-900 dark:text-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
          />
        </div>

        {/* Mock Response Log */}
        <div className="border rounded-lg p-4 bg-gray-50 dark:bg-gray-700 mb-4 border-gray-300 dark:border-gray-600">
          <h4 className="font-medium mb-2 text-gray-900 dark:text-gray-100">Mock AI Response Log</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Prompt Classification:</span>
              <span className="font-mono text-gray-900 dark:text-gray-100">HEALTH_INQUIRY</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Safety Check:</span>
              <span className="text-green-600 font-medium">✓ PASSED</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Content Filter:</span>
              <span className="text-green-600 font-medium">✓ CLEAR</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-gray-300">Response Time:</span>
              <span className="font-mono text-gray-900 dark:text-gray-100">127ms</span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 mb-2">
          <button
            onClick={onRun}
            className="flex-1 h-9 px-4 rounded-md bg-purple-600 text-white font-medium hover:bg-purple-700 transition"
          >
            Run Security Test
          </button>
          <button
            onClick={onClose}
            className="flex-1 h-9 px-4 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>

        <div className="text-xs text-gray-500 dark:text-gray-400">Audit log entry created.</div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6l12 12M6 18L18 6" />
          </svg>
          <span className="sr-only">Close</span>
        </button>
      </div>
    </div>
  );
}
