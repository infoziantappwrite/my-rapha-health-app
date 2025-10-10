import React from "react";

export default function HistoryPopup({ row, onClose }) {
  if (!row) return null;

  // Example detailed history data (replace/update as needed)
  const detailedHistory = [
    { version: "v3.0", status: "Published", date: "2025-12-25", description: "Updated nutrition guidelines", author: "Jane Smith" },
    { version: "v2.9", status: "Published", date: "2025-12-20", description: "Added new vitamins section", author: "Jane Smith" },
    { version: "v2.8", status: "Published", date: "2025-12-15", description: "Corrected measurement units", author: "Jane Smith" },
    { version: "v2.7", status: "Draft", date: "2025-12-10", description: "Initial draft of nutrition basics", author: "Jane Smith" },
  ];

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg w-full max-w-2xl sm:max-w-lg p-6 grid gap-4 relative">
        {/* Header */}
        <div className="flex flex-col gap-2 text-center sm:text-left">
          <h2 className="text-lg font-semibold leading-none">Version History</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">{row.module} - ID: {row.id}</p>
        </div>

        {/* History list */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {detailedHistory.map((h, idx) => (
            <div
              key={idx}
              className="border border-gray-300 dark:border-gray-700 rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-700"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-mono text-xs">
                    {h.version}
                  </span>
                  <span className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs ${
                    h.status === "Published"
                      ? "bg-green-50 text-green-700 border-green-200"
                      : "bg-yellow-50 text-yellow-700 border-yellow-200"
                  }`}>
                    {h.status}
                  </span>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{h.date}</span>
              </div>
              <p className="text-sm font-medium mb-1">{h.description}</p>
              <p className="text-xs text-gray-600 dark:text-gray-400">By {h.author}</p>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-end pt-4 border-t border-gray-300 dark:border-gray-700">
          <button
            onClick={onClose}
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            Close
          </button>
        </div>

        {/* Top-right close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-xs opacity-70 hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-700 dark:text-gray-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span className="sr-only">Close</span>
        </button>

        {/* Audit note */}
        <div className="text-xs text-gray-500 dark:text-gray-400">Audit log entry created.</div>
      </div>
    </div>
  );
}
