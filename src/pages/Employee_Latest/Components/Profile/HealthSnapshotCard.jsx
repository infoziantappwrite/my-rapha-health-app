import React, { useState } from "react";
import {
  Activity,
  TrendingUp,
  Target,
  Heart,
  Clock,
  Moon,
  BookOpen,
  ChartColumn,
  X,
} from "lucide-react";

const HealthSnapshotCard = () => {
  const [openMetric, setOpenMetric] = useState(null);

  const metrics = [
    {
      label: "Height",
      value: `6'9"`,
      icon: <TrendingUp className="h-4 w-4 text-purple-600" />,
      analysis: "Your height is above average, which may impact BMI calculations.",
    },
    {
      label: "Weight",
      value: "245 lbs",
      icon: <Activity className="h-4 w-4 text-purple-600" />,
      analysis: "Weight is stable for the past 6 months, consider maintaining current diet.",
    },
    {
      label: "BMI",
      value: "25.0",
      icon: <Target className="h-4 w-4 text-purple-600" />,
      analysis: "Your BMI is slightly above optimal. Regular exercise can help reduce it.",
    },
    {
      label: "Exercise Routine",
      value: "P90X3 Daily",
      icon: <Heart className="h-4 w-4 text-purple-600" />,
      analysis: "Strong consistency — maintaining this routine supports cardiovascular health.",
    },
    {
      label: "Fasting Window",
      value: "18 hr (1 PM–6 PM)",
      icon: <Clock className="h-4 w-4 text-purple-600" />,
      analysis: "Great intermittent fasting window. Ensure hydration during fasting hours.",
    },
    {
      label: "Sleep Schedule",
      value: "10 PM – 6 AM",
      icon: <Moon className="h-4 w-4 text-purple-600" />,
      analysis: "Perfect 8-hour cycle! Maintain consistent bedtime for optimal recovery.",
    },
    {
      label: "Faith Routine",
      value: "Prayer + Bible Study 30 min",
      icon: <BookOpen className="h-4 w-4 text-purple-600" />,
      analysis: "Spiritual consistency contributes to stress resilience and well-being.",
    },
  ];

  return (
    <div className="flex flex-col gap-6 rounded-2xl  bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <div className="px-6 pt-6">
        <h4 className="flex items-center gap-2 text-lg font-semibold text-purple-700 dark:text-purple-400">
          <Activity className="h-5 w-5" />
          Health Snapshot
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Your current health metrics and routines
        </p>
      </div>

      {/* Metrics List */}
      <div className="px-6 pb-6 space-y-1">
        {metrics.map((item, idx) => (
            <div className="border-b border-gray-200 dark:border-gray-700 last:border-0">
          <div
            key={idx}
            className="flex items-center justify-between py-2  hover:bg-gray-50 dark:hover:bg-gray-700 px-2 rounded transition group"
          >
            <div className="flex items-center gap-3">
              {item.icon}
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {item.label}:
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">{item.value}</span>
              <button
                onClick={() => setOpenMetric(item)}
                className="opacity-0 group-hover:opacity-100 transition-opacity h-6 w-6 flex items-center justify-center rounded-md hover:bg-purple-50 dark:hover:bg-purple-800/40"
              >
                <ChartColumn className="h-3.5 w-3.5 text-purple-600" />
              </button>
            </div>
          </div>
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {openMetric && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg w-full max-w-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-700 dark:text-purple-300">
                {openMetric.icon}
                {openMetric.label} Analysis
              </h3>
              <button
                onClick={() => setOpenMetric(null)}
                className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
              {openMetric.analysis}
            </p>

            <div className="text-center">
              <button
                onClick={() => setOpenMetric(null)}
                className="bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2 rounded-md inline-flex items-center gap-2"
              >
                <ChartColumn className="h-4 w-4" /> Close Analysis
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthSnapshotCard;
