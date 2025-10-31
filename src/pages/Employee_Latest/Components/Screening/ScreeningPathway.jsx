import { CheckCircle2, Lock } from "lucide-react";

const steps = [
  { label: "My Profile", key: "profile" },
  { label: "Family Risk", key: "family" },
  { label: "Education", key: "education" },
  { label: "Screening", key: "screening" },
  { label: "Results", key: "results" },
  { label: "Follow-up", key: "followup" },
];

export default function ScreeningPathway({ active = 3 }) {
  const progressPercent = ((active - 1) / (steps.length - 1)) * 100;

  return (
    <div className="rounded-xl border bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 border-purple-200 dark:border-gray-700 text-card-foreground flex flex-col gap-6 mb-6">
      <div className="p-6">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-1">
          Your Personalized Screening Pathway
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          We’ve matched your screening recommendations to your profile and family risk.
        </p>

        {/* Pathway */}
        <div className="relative flex items-center justify-between mt-8">
          {/* Background Line */}
          <div className="absolute top-1/3 left-0 w-full h-1 bg-gray-300 dark:bg-gray-700 rounded-full -translate-y-1/2"></div>

          {/* Active Progress Line */}
          <div
            className="absolute top-1/3 left-0 h-1 bg-purple-500 rounded-full -translate-y-1/2 transition-all duration-700 ease-in-out"
            style={{ width: `${progressPercent}%` }}
          ></div>

          {/* Steps */}
          {steps.map((step, idx) => {
            const isCompleted = idx + 1 < active;
            const isActive = idx + 1 === active;
            const isUpcoming = idx + 1 > active;

            return (
              <div
                key={step.key}
                className="flex flex-col items-center text-center flex-1 relative z-10"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 shadow-lg transition-all 
                    ${
                      isCompleted
                        ? "bg-green-500 text-white"
                        : isActive
                        ? "bg-purple-500 text-white ring-4 ring-purple-200 dark:ring-purple-800"
                        : "bg-gray-300 dark:bg-gray-700 text-gray-200"
                    }`}
                >
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : isActive ? (
                    <div className="h-3 w-3 rounded-full bg-white animate-pulse"></div>
                  ) : (
                    <Lock className="w-4 h-4" />
                  )}
                </div>
                <span className="text-xs font-medium text-center max-w-[80px] text-gray-800 dark:text-gray-200">
                  {step.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
