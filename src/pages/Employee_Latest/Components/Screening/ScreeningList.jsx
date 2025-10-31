import React, { useEffect, useState } from "react";
import { Droplet, Activity, Shield } from "lucide-react";

const initialScreenings = [
  {
    icon: Droplet,
    title: "Blood Test Panel",
    desc: "Comprehensive blood work for colon, heart & diabetes screening",
    frequency: "Annually",
    status: "Not Scheduled",
  },
  {
    icon: Activity,
    title: "Mammogram",
    desc: "Breast cancer screening for early detection",
    frequency: "Annually (Age 40+)",
    status: "Not Scheduled",
  },
  {
    icon: Shield,
    title: "Shield Test / Colonoscopy",
    desc: "Colon cancer screening (blood test or procedure)",
    frequency: "Every 3 years (Age 45+)",
    status: "Not Scheduled",
  },
];

export default function ScreeningList({ onSchedule, onDataChange }) {
  const [screenings, setScreenings] = useState(initialScreenings);

  // Push data up whenever it changes
  useEffect(() => {
    onDataChange?.(screenings);
  }, [screenings, onDataChange]);

  const handleSchedule = (screening) => {
    // Update local state
    const updated = screenings.map((s) =>
      s.title === screening.title ? { ...s, status: "Scheduled" } : s
    );
    setScreenings(updated);

    // Trigger parent modal
    onSchedule?.(screening);
  };

  return (
    <div className="space-y-3 mt-6">
      <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
        Your Recommended Screenings
      </h3>

      {screenings.map((s) => (
        <div
          key={s.title}
          className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 rounded-xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 shadow-sm hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-3">
            <s.icon className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-1" />
            <div>
              <h4 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                {s.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {s.desc}
              </p>
              <div className="flex gap-3 mt-2 text-xs text-gray-500 dark:text-gray-400">
                <span>{s.frequency}</span>
                <span>•</span>
                <span>
                  {s.status === "Scheduled"
                    ? "Scheduled"
                    : "Available for Scheduling"}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 w-full sm:w-auto">
            <button
              disabled={s.status === "Scheduled"}
              onClick={() => handleSchedule(s)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all w-full sm:w-auto ${
                s.status === "Scheduled"
                  ? "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 cursor-not-allowed"
                  : "bg-purple-600 text-white hover:bg-purple-700"
              }`}
            >
              {s.status === "Scheduled" ? "Scheduled" : "Schedule Now"}
            </button>

            <button className="border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-md text-xs font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all">
              Learn Why
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
