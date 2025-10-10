import React, { useState } from "react";
import { CircleCheckBig, TrendingUp } from "lucide-react";

const DriftAuditCard = () => {
  const [openModal, setOpenModal] = useState(false);

  const cardData = {
    title: "DevLink Drift Audit",
    icon: <TrendingUp className="h-5 w-5" />,
    status: "Last Drift Check: Passed",
    timestamp: "December 26, 2025 at 2:34 PM EST",
    stats: [
      { value: 0, label: "Critical Drifts", color: "text-green-600" },
      { value: 2, label: "Minor Drifts", color: "text-yellow-600" },
      { value: 847, label: "Components Checked", color: "text-gray-600" },
    ],
    devLinkId: "admin-dashboard-drift-audit-details",
  };

  return (
    <>
      {/* Card */}
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 hover:shadow-lg dark:hover:shadow-[0_4px_6px_rgba(255,255,255,0.2)] transition-shadow">
        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
          <h4 className="flex items-center gap-2">
            {cardData.icon}
            {cardData.title}
          </h4>
        </div>

        {/* Content */}
        <div className="p-6 [&:last-child]:pb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <CircleCheckBig className="h-8 w-8 text-green-600" />
              <div>
                <p className="font-medium">{cardData.status}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{cardData.timestamp}</p>
              </div>
            </div>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-gray-300 dark:border-gray-500  bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-600 px-4 py-2 transition-all"
              onClick={() => setOpenModal(true)}
              data-devlink-id={cardData.devLinkId}
            >
              View Details
            </button>
          </div>

          {/* Stats */}
          <div className="mt-6 grid grid-cols-3 gap-6 text-center">
            {cardData.stats.map((stat, idx) => (
              <div key={idx}>
                <p className={`text-2xl font-medium ${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-xs text-gray-500 dark:text-gray-400 mt-4">Audit log entry created.</div>
        </div>
      </div>

      {/* Modal */}
      {openModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-3xl p-6 relative">
    {/* Modal content here */}


            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
              onClick={() => setOpenModal(false)}
            >
              ✕
            </button>

            <h2 className="text-lg font-semibold mb-4">{cardData.title} Details</h2>

            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Status</p>
                <p className="text-xl font-medium">{cardData.status}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Timestamp</p>
                <p className="text-xl font-medium">{cardData.timestamp}</p>
              </div>
            </div>

            <div className="border border-gray-300 dark:border-gray-500  rounded-xl p-4 mb-4">
              <h4 className="font-medium mb-2">Recent Drift Stats</h4>
              <div className="space-y-2 text-sm">
                {cardData.stats.map((stat, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{stat.label}</span>
                    <span>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2 text-sm font-medium">
                Confirm
              </button>
              <button
                className="flex-1 border border-gray-300 dark:border-gray-500  bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-md py-2 text-sm font-medium"
                onClick={() => setOpenModal(false)}
              >
                Close
              </button>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">Audit log entry created.</p>
          </div>
        </div>
      )}
    </>
  );
};

export default DriftAuditCard;
