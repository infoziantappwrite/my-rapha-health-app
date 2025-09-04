import React, { useState } from "react";
import { Download } from "lucide-react";
import NotificationToast from "../../../components/NotificationToast";

const DownloadWithToast = () => {
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    // Show toast
    setShowToast(true);

    // Simulate actual download or API call
    setTimeout(() => {
      console.log("Downloading summary...");
    }, 500);
  };

  return (
    <>
      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm border border-gray-300 bg-white text-gray-700 rounded-md shadow hover:bg-gray-100 transition"
      >
        <Download className="w-4 h-4" /> Download Summary
      </button>

      {/* Toast Notification */}
      {showToast && (
        <NotificationToast
          title="Action Completed"
          content="📄 Downloading executive summary report (PDF)"
          bgColor="bg-emerald-50"
          borderColor="border-emerald-200"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};

export default DownloadWithToast;
