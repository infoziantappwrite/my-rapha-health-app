import { Clock, ChevronRight } from "lucide-react";

export default function EmployeeFollowUpRoadmap() {
  const steps = [
    {
      id: "clinical-1",
      category: "Clinical",
      title: "Retest Cholesterol Levels",
      description: "Follow-up blood work to monitor cholesterol improvements",
      due: "2025-04-15",
      button: "Schedule Lab",
      color: "blue",
    },
    {
      id: "educational-1",
      category: "Educational",
      title: "Complete Heart Health Module",
      description: "Learn about managing cholesterol through diet and exercise",
      due: "2025-02-01",
      button: "Start Learning",
      color: "purple",
    },
    {
      id: "wellness-1",
      category: "Wellness",
      title: "Start Mediterranean Diet Plan",
      description: "Begin your personalized nutrition journey",
      due: "2025-01-25",
      button: "Get Plan",
      color: "teal",
    },
    {
      id: "wellness-2",
      category: "Wellness",
      title: "Daily Blood Pressure Tracking",
      description: "Monitor and log your blood pressure readings",
      due: "Ongoing",
      button: "View Tracker",
      color: "teal",
    },
  ];

  // Utility to map color classes for the left border and button
  const getColorClasses = (color: string) => {
    switch (color) {
      case "blue":
        return "border-blue-500 dark:border-blue-400";
      case "purple":
        return "border-purple-500 dark:border-purple-400";
      case "teal":
        return "border-teal-500 dark:border-teal-400";
      default:
        return "border-gray-400 dark:border-gray-600";
    }
  };

  const getButtonColor = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-600 hover:bg-blue-700";
      case "purple":
        return "bg-purple-600 hover:bg-purple-700";
      case "teal":
        return "bg-teal-600 hover:bg-teal-700";
      default:
        return "bg-gray-600 hover:bg-gray-700";
    }
  };

  return (
    <div
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 
                 text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 
                 dark:border-gray-700 transition-colors"
    >
      {/* Header */}
      <div className="px-6 pt-6 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          Next Steps Roadmap
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Your personalized action plan for ongoing health
        </p>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-1 gap-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className={`flex flex-col gap-4 rounded-xl border-1 border-gray-300 dark:border-gray-700  hover:shadow-md transition-shadow cursor-pointer bg-white dark:bg-gray-900`}
          >
            <div className="p-4">
              {/* Category */}
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-medium uppercase px-2 py-0.5 rounded-md 
                    ${
                      step.color === "blue"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                        : step.color === "purple"
                        ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                        : "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                    }`}
                >
                  {step.category}
                </span>
                <span className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Clock className="h-3 w-3 mr-1" />
                  {step.due}
                </span>
              </div>

              {/* Title */}
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                {step.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                {step.description}
              </p>

              {/* Button */}
              <button
                className={`inline-flex items-center justify-center font-medium text-xs rounded-md w-full py-1.5 mt-2 text-white transition-all ${getButtonColor(
                  step.color
                )}`}
              >
                {step.button}
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>

              {/* Tagline */}
              <p className="text-xs italic text-purple-600 dark:text-purple-400 mt-2 text-center">
                Keep moving forward — your wellness grows with each step.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
