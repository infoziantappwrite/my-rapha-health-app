import React, { useState } from "react";
import { Eye, Info, X } from "lucide-react";
import NotificationToast from "../../../../components/NotificationToast";



// Phase Data
const phases = [
  {
    title: "Phase 1: STL HQ Launch",
    badge: "Complete",
    badgeColor: "green",
    description: "Initial rollout to STL HQ employees with comprehensive screening program",
    participants: "687/700",
    screenings: "456/500",
    progress: 100,
  },
  {
    title: "Phase 2: BJC Site & Mobile Unit",
    badge: "72%",
    badgeColor: "yellow",
    description: "Expanding to BJC partner site and launching mobile screening unit",
    participants: "289/400",
    screenings: "234/350",
    progress: 72,
  },
  {
    title: "Phase 3: Full Company Coverage",
    badge: "Planned",
    badgeColor: "blue",
    description: "Complete rollout to all 1400 employees across all locations",
    participants: "0/1400",
    screenings: "0/1400",
    progress: 0,
  },
];

// Badge colors
const badgeColors = {
  green: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-300 border-green-200 dark:border-green-700",
  yellow: "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700",
  blue: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-700",
};

// Main Component
const EmployerMilestonesTimeline = () => {
  const [toastInfo, setToastInfo] = useState(null);

  const handleViewDetails = (phase) => {
    setToastInfo({
      title: "ℹ️ Information",
      content: `Opening detailed ${phase.title} progress tracker`,
    });

    // Auto-close after 3 seconds
    setTimeout(() => setToastInfo(null), 3000);
  };

  return (
    <div className="space-y-6">
      {toastInfo && (
        <NotificationToast
          title={toastInfo.title}
          content={toastInfo.content}
          onClose={() => setToastInfo(null)}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {phases.map((phase, idx) => (
          <div
            key={idx}
            className={`flex flex-col gap-6 rounded-xl border cursor-pointer hover:shadow-lg transition-all ${
              phase.badgeColor === "green"
                ? "border-green-200 dark:border-green-700 bg-green-50 dark:bg-green-900"
                : phase.badgeColor === "yellow"
                ? "border-yellow-200 dark:border-yellow-700 bg-yellow-50 dark:bg-yellow-900"
                : "border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900"
            }`}
          >
            {/* Header */}
            <div className="px-6 pt-6 flex justify-between items-start">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{phase.title}</h4>
              <span className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 ${badgeColors[phase.badgeColor]}`}>
                {phase.badge}
              </span>
            </div>

            {/* Content */}
            <div className="px-6 pb-6 space-y-4">
              <p className="text-sm text-gray-600 dark:text-gray-300">{phase.description}</p>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Participants</div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{phase.participants}</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800 dark:text-gray-200">Screenings</div>
                  <div className="text-lg font-bold text-emerald-600 dark:text-emerald-400">{phase.screenings}</div>
                </div>
              </div>

              <div className="bg-primary/20 dark:bg-primary/50 relative w-full overflow-hidden rounded-full h-2">
                <div
                  className="bg-primary h-full transition-all"
                  style={{ width: `${phase.progress}%` }}
                ></div>
              </div>

              <button
                onClick={() => handleViewDetails(phase)}
                className="inline-flex items-center justify-center w-full gap-2 h-8 px-3 rounded-md border bg-background dark:bg-gray-700 text-foreground dark:text-gray-100 hover:bg-accent hover:text-accent-foreground transition-all"
              >
                <Eye className="h-4 w-4" />
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployerMilestonesTimeline;
