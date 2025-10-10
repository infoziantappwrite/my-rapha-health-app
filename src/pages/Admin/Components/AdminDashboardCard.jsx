import React, { useState } from "react";
import { Activity, Clock, TriangleAlert, X } from "lucide-react";

const AdminDashboardCard = () => {
  const [openCard, setOpenCard] = useState(null); // stores the card currently opened

  const cards = [
    {
      devLinkId: "admin-dashboard-metric-uptime",
      icon: <Activity className="h-6 w-6 text-green-600" />,
      badge: "+0.02%",
      badgeColor: "text-green-600 bg-green-50",
      title: "Uptime %",
      value: "99.97%",
      history: [
        { time: "1 hour ago", value: "99.97%" },
        { time: "6 hours ago", value: "99.95%" },
        { time: "12 hours ago", value: "99.96%" },
      ],
    },
    {
      devLinkId: "admin-dashboard-metric-latency-p95ms",
      icon: <Clock className="h-6 w-6 text-blue-600" />,
      badge: "-12ms",
      badgeColor: "text-blue-600 bg-blue-50",
      title: "Latency (p95 ms)",
      value: "145ms",
      history: [
        { time: "1 hour ago", value: "145ms" },
        { time: "6 hours ago", value: "140ms" },
        { time: "12 hours ago", value: "138ms" },
      ],
    },
    {
      devLinkId: "admin-dashboard-metric-error-rate",
      icon: <TriangleAlert className="h-6 w-6 text-orange-600" />,
      badge: "-0.02%",
      badgeColor: "text-orange-600 bg-orange-50",
      title: "Error Rate %",
      value: "0.08%",
      history: [
        { time: "1 hour ago", value: "0.08%" },
        { time: "6 hours ago", value: "0.07%" },
        { time: "12 hours ago", value: "0.09%" },
      ],
    },
    {
      devLinkId: "admin-dashboard-metric-recent-alerts",
      icon: <TriangleAlert className="h-6 w-6 text-red-600" />,
      badge: "-2",
      badgeColor: "text-red-600 bg-red-50",
      title: "Recent Alerts",
      value: "3",
      history: [
        { time: "1 hour ago", value: "3" },
        { time: "6 hours ago", value: "5" },
        { time: "12 hours ago", value: "2" },
      ],
    },
  ];

  return (
    <div className="my-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 cursor-pointer hover:shadow-lg  dark:hover:shadow-[0_4px_6px_rgba(255,255,255,0.2)]     transition-shadow p-6"
            data-devlink-id={card.devLinkId}
            onClick={() => setOpenCard(card)}
          >
            <div className="flex items-center justify-between">
              <div className={`p-2 rounded-lg ${card.badgeColor.split(" ")[1]}`}>
                {card.icon}
              </div>
              {card.badge && (
                <span
                  className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium text-xs ${card.badgeColor}`}
                >
                  {card.badge}
                </span>
              )}
            </div>
            <div className="mt-4">
              <h3 className="text-sm text-gray-600 dark:text-gray-400">{card.title}</h3>
              <p className="text-2xl font-medium">{card.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openCard && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-lg w-full p-6 relative">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
              onClick={() => setOpenCard(null)}
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <h2 className="text-lg font-semibold mb-4">{openCard.title} Details</h2>

            {/* Current + Change */}
            <div className="grid grid-cols-2 gap-6 mb-4">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">Current Value</p>
                <p className="text-xl font-medium">{openCard.value}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">24h Change</p>
                <p className="text-xl font-medium">{openCard.badge}</p>
              </div>
            </div>

            {/* Recent History */}
            <div className=" border border-gray-300 dark:border-gray-500 rounded-xl p-4 mb-4">
              <h4 className="font-medium mb-2">Recent History</h4>
              <div className="space-y-2 text-sm">
                {openCard.history.map((h, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>{h.time}</span>
                    <span>{h.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2 text-sm font-medium">
                Confirm
              </button>
              <button
                className="flex-1  border border-gray-300 dark:border-gray-500 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 rounded-md py-2 text-sm font-medium"
                onClick={() => setOpenCard(null)}
              >
                Close
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">Audit log entry created.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboardCard;
