import React, { useState } from "react";
import { MessageCircle, RefreshCw, Download, X, Info } from "lucide-react";
import NotificationToast from "../../../../components/NotificationToast";



const EmployeeEngagementButtons = () => {
  const [toastInfo, setToastInfo] = useState(null);

  const showToast = (title, content) => {
    setToastInfo({ title, content });

    // Auto close after 3 seconds
    setTimeout(() => setToastInfo(null), 3000);
  };

  return (
    <div>
      {toastInfo && (
        <NotificationToast
          title={toastInfo.title}
          content={toastInfo.content}
          onClose={() => setToastInfo(null)}
        />
      )}

      {/* Responsive Button Container with horizontal scroll */}
      <div className="flex space-x-2 overflow-x-auto py-1">
        {/* Navigator Center Button */}
        <button
          onClick={() =>
            showToast(
              "ℹ️ Navigator Center",
              "Opening the Navigator Center dashboard for detailed insights."
            )
          }
          className="flex items-center justify-center gap-2 bg-emerald-50 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-700 rounded-md text-sm font-medium h-9 px-4 py-2 transition-all hover:bg-emerald-100 dark:hover:bg-emerald-800 whitespace-nowrap"
        >
          <MessageCircle className="h-4 w-4" />
          <span>Navigator Center</span>
        </button>

        {/* Refresh Data Button */}
        <button
          onClick={() =>
            showToast(
              "ℹ️ Refresh Data",
              "Fetching the latest employee engagement data and updating analytics."
            )
          }
          className="flex items-center justify-center gap-2 bg-background dark:bg-gray-700 text-foreground dark:text-gray-100 border rounded-md text-sm font-medium h-9 px-4 py-2 transition-all hover:bg-accent hover:text-accent-foreground dark:hover:bg-input/50 whitespace-nowrap"
        >
          <RefreshCw className="h-4 w-4" />
          Refresh Data
        </button>

        {/* Download Suite Button */}
        <button
          onClick={() =>
            showToast(
              "ℹ️ Download Suite",
              "Preparing your comprehensive engagement analytics report for download."
            )
          }
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground rounded-md text-sm font-medium h-9 px-4 py-2 transition-all hover:bg-primary/90 whitespace-nowrap"
        >
          <Download className="h-4 w-4" />
          Download Suite
        </button>
      </div>
    </div>
  );
};

export default EmployeeEngagementButtons;
