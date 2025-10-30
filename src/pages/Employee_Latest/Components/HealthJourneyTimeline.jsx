import React from "react";
import {
  User,
  Users,
  GraduationCap,
  CalendarDays,
  Activity,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const HealthJourneyTimeline = ({ steps = [] }) => {
  const navigate = useNavigate();

  // icon constructors (Lucide components)
  const iconMap = {
    user: User,
    users: Users,
    graduation: GraduationCap,
    calendar: CalendarDays,
    activity: Activity,
    stethoscope: Stethoscope,
  };

  // helper: normalize any status value to a predictable tag
  const normalizeStatus = (raw) => {
    if (raw === true) return "complete";
    if (raw === false) return "pending";
    const s = (raw ?? "").toString().trim().toLowerCase();
    if (["complete", "completed", "done", "true"].includes(s)) return "complete";
    if (["current", "in-progress", "inprogress", "active", "In progress"].includes(s))
      return "In progress";
    if (["pending", "todo", "not-started", ""].includes(s)) return "pending";
    return s; // fallback
  };

  // produce a normalized steps array (do not mutate original)
  const normalizedSteps = steps.map((step) => ({
    ...step,
    _status: normalizeStatus(step.status),
  }));

  // navigation helper
  const handleStepClick = (route) => {
    if (route) navigate(route);
  };

  // progress calculation (only count normalized 'complete')
  const completedCount = normalizedSteps.filter((s) => s._status === "complete")
    .length;
  const progress = Math.round(
    (completedCount / Math.max(1, normalizedSteps.length)) * 100
  );

  // determine current index (prefer explicit 'current'); if none, use first pending
  let currentIndex = normalizedSteps.findIndex((s) => s._status === "current");
  if (currentIndex === -1) {
    currentIndex = normalizedSteps.findIndex((s) => s._status === "pending");
  }
  const nextStep =
    currentIndex >= 0 && currentIndex < normalizedSteps.length - 1
      ? normalizedSteps[currentIndex + 1]
      : null;

  return (
    <div className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md max-w-7xl mx-auto transition-colors duration-500 border border-gray-200 dark:border-gray-700  ">
  {/* Title */}
  <div className="w-full mb-6 text-left">
    <p className="text-blue-600 dark:text-blue-400 font-medium flex items-center gap-2">
      <Activity className="w-4 h-4" /> Health Journey Timeline
    </p>
  </div>

  {/* Steps Row */}
  <div className="flex justify-between items-center w-full mb-4">
    {normalizedSteps.map((step) => {
      const IconComp = iconMap[step.iconKey] ?? User;
      const status = step._status;
      const isComplete = status === "complete";
      const isCurrent = status === "In progress";

      return (
        <div
          key={step.id}
          className="flex flex-col items-center cursor-pointer px-2"
          onClick={() => handleStepClick(step.route)}
        >
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-full transition-colors duration-300 ${
              isComplete
                ? "bg-green-500 text-white dark:bg-emerald-500"
                : isCurrent
                ? "bg-yellow-200 text-yellow-700 dark:bg-amber-400 dark:text-gray-900"
                : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
            }`}
          >
            {isComplete ? (
              <CheckCircle2 className="w-6 h-6" />
            ) : (
              <IconComp className="w-6 h-6" />
            )}
          </div>

          <p className="mt-2 text-sm font-medium text-gray-800 dark:text-gray-200 text-center">
            {step.title}
          </p>

          <p
            className={`text-xs mt-1 ${
              isComplete
                ? "text-green-600 dark:text-emerald-400"
                : isCurrent
                ? "text-yellow-600 dark:text-amber-300"
                : "text-gray-500 dark:text-gray-500"
            }`}
          >
            {isComplete ? "Complete" : isCurrent ? "In progress" : "Pending"}
          </p>
        </div>
      );
    })}
  </div>

  {/* Progress Bar */}
  <div className="w-full mb-6">
    <div className="h-1.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
      <div
        className="h-1.5 bg-green-500 dark:bg-emerald-500 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 text-center">
      {progress}% Complete — You're on your way.
    </p>
  </div>

  <hr className="border-gray-300 dark:border-gray-700 w-full mb-6" />

  {/* Next Step Panel */}
  <div className="text-center w-full">
    {nextStep ? (
      <>
        <div className="flex justify-center items-center gap-3 mb-3">
          {React.createElement(iconMap[nextStep.iconKey] ?? User, {
            className: "w-5 h-5 text-blue-600 dark:text-blue-400",
          })}
          <span className="font-semibold text-gray-800 dark:text-gray-100">
            Next Step: {nextStep.title}
          </span>
        </div>

        <button
          onClick={() => handleStepClick(nextStep.route)}
          className="bg-blue-600 dark:bg-blue-500 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition text-sm font-medium shadow"
        >
          Continue to {nextStep.title}
        </button>

        <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
          {nextStep.subtitle}
        </p>
      </>
    ) : (
      <p className="text-gray-600 dark:text-gray-300">
        🎉 All steps completed! Great job!
      </p>
    )}
  </div>
</div>

  );
};

export default HealthJourneyTimeline;
