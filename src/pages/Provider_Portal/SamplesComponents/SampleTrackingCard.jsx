import React, { useState } from "react";
import { TestTube, Printer, Truck } from "lucide-react";
import NotificationToast from "../../../components/NotificationToast";

const SampleTrackingCard = () => {
  const [toast, setToast] = useState(null);

  const showToast = (title, content) => {
    setToast({ title, content });
    setTimeout(() => setToast(null), 3500); // auto-hide
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between px-4 sm:px-6 pt-6 gap-4 sm:gap-0">
  <h4 className="flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 flex-shrink-0">
    <TestTube className="h-6 w-6" />
    <span>Sample Tracking &amp; Management</span>
  </h4>

  <div className="flex flex-wrap gap-2">
    {/* Print All Labels */}
    <button
      onClick={() =>
        showToast("Information", "🏷️ All labels have been printed.")
      }
      className="inline-flex items-center gap-2 rounded-md text-sm font-medium 
        px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white 
        focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <Printer className="h-4 w-4" />
      Print All Labels
    </button>

    {/* Ship Ready Samples */}
    <button
      onClick={() =>
        showToast("Action Complete", "🚚 Ready samples have been shipped.")
      }
      className="inline-flex items-center gap-2 rounded-md text-sm font-medium 
        px-4 py-2 bg-green-600 hover:bg-green-700 text-white 
        focus:outline-none focus:ring-2 focus:ring-green-500"
    >
      <Truck className="h-4 w-4" />
      Ship Ready Samples
    </button>
  </div>
</div>


      {/* Stats */}
      <div className="px-6 pb-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-3 bg-red-50 dark:bg-red-900/30 rounded-lg">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">2</div>
          <div className="text-sm text-red-700 dark:text-red-300">Pending Labels</div>
        </div>
        <div className="text-center p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">1</div>
          <div className="text-sm text-yellow-700 dark:text-yellow-300">Ready to Ship</div>
        </div>
        <div className="text-center p-3 bg-green-50 dark:bg-green-900/30 rounded-lg">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">1</div>
          <div className="text-sm text-green-700 dark:text-green-300">Completed</div>
        </div>
        <div className="text-center p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">1</div>
          <div className="text-sm text-blue-700 dark:text-blue-300">Shipped</div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <NotificationToast
          title={toast.title}
          content={toast.content}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
};

export default SampleTrackingCard;
