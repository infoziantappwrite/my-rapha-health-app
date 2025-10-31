import { useNavigate } from "react-router-dom";
import { Heart, Droplet, Activity, CircleCheckBig, TriangleAlert } from "lucide-react";

const resultsData = [
  {
    id: "breast",
    title: "Breast Cancer",
    color: "green",
    icon: <Heart className="h-6 w-6 text-purple-600" />,
    statusIcon: <CircleCheckBig className="h-5 w-5 text-emerald-700" />,
    results: [
      { label: "Mammogram", value: "Normal" },
      { label: "Risk Score", value: "15%" },
    ],
    updated: "2025-01-15",
  },
  {
    id: "heart",
    title: "Heart Health",
    color: "amber",
    icon: <Activity className="h-6 w-6 text-purple-600" />,
    statusIcon: <TriangleAlert className="h-5 w-5 text-amber-600" />,
    results: [
      { label: "Cholesterol", value: "245 mg/dL" },
      { label: "BP", value: "138/85 mmHg" },
    ],
    updated: "2025-01-15",
  },
  {
    id: "diabetes",
    title: "Diabetes",
    color: "green",
    icon: <Droplet className="h-6 w-6 text-purple-600" />,
    statusIcon: <CircleCheckBig className="h-5 w-5 text-emerald-700" />,
    results: [
      { label: "HbA1C", value: "5.2%" },
      { label: "Glucose", value: "94 mg/dL" },
    ],
    updated: "2025-01-15",
  },
];

export default function ResultsAtAGlance() {
  const navigate = useNavigate();

  const getColorClasses = (color) => {
    switch (color) {
      case "green":
        return "bg-emerald-50 dark:bg-emerald-900/20 border-emerald-400";
      case "amber":
        return "bg-amber-50 dark:bg-amber-900/20 border-amber-400";
      default:
        return "bg-gray-50 dark:bg-gray-800 border-gray-300";
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 
                    text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700  transition-colors">
      {/* Header */}
      <div className="px-6 pt-6 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          Results At-a-Glance
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Quick overview of your screening outcomes
        </p>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {resultsData.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col gap-4 rounded-xl border-l-4 border-1 ${getColorClasses(
              item.color
            )} hover:shadow-md transition-shadow cursor-pointer`}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-3">
                {item.icon}
                {item.statusIcon}
              </div>
              <h4 className="font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {item.title}
              </h4>

              <div className="space-y-1 mb-3">
                {item.results.map((r, i) => (
                  <p
                    key={i}
                    className="text-xs text-gray-700 dark:text-gray-400 flex justify-between"
                  >
                    <span>{r.label}</span>
                    <span className="font-medium">{r.value}</span>
                  </p>
                ))}
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-500 mb-2">
                Updated: {item.updated}
              </p>

              <button
                onClick={() => navigate("/employee/results")}
                className="inline-flex items-center justify-center font-medium text-xs border 
                           border-gray-300 dark:border-gray-700 rounded-md w-full py-1.5 mt-2
                           text-gray-800 dark:text-gray-100 bg-white dark:bg-gray-800
                           hover:bg-gray-100 dark:hover:bg-gray-700 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-eye h-3.5 w-3.5 mr-2 text-purple-600"
                >
                  <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                View Full Result
              </button>

              <p className="text-xs italic text-purple-600 dark:text-purple-400 mt-2 text-center">
                Knowledge is power. Action is healing.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
