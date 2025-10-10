import React from "react";

const moduleData = [
  { 
    name: "Heart Health Basics", 
    category: "Cardiovascular", 
    participants: 1287, 
    percent: 89 
  },
  { 
    name: "Diabetes Prevention", 
    category: "Metabolic", 
    participants: 1156, 
    percent: 76 
  },
  { 
    name: "Breast Basics", 
    category: "Oncology", 
    participants: 1098, 
    percent: 74 
  },
  { 
    name: "Colon Basics", 
    category: "Oncology", 
    participants: 1034, 
    percent: 69 
  },
  { 
    name: "Prostate Basics", 
    category: "Oncology", 
    participants: 967, 
    percent: 65 
  },
];

const EducationModules = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl space-y-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-6">
        Education Modules
      </h2>

      {moduleData.map((module, idx) => (
        <div
          key={idx}
          className="flex flex-col md:flex-row items-center justify-between p-3 border border-gray-200 dark:border-gray-700 rounded-lg  transition gap-4"
        >
          {/* Module Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 flex-1">
            <div className="font-medium text-gray-800 dark:text-gray-100">{module.name}</div>
            <span className="text-xs bg-indigo-100 text-indigo-700 dark:bg-indigo-800/30 dark:text-indigo-300 rounded px-3 py-1">
              {module.category}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {module.participants} participants
            </span>
          </div>

          {/* Progress Bar */}
          <div className="flex items-center gap-3 mt-4 md:mt-0 w-full md:w-48">
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-3 rounded-full overflow-hidden">
              <div
                className="h-3 rounded-full bg-purple-600"
                style={{ width: `${module.percent}%` }}
              ></div>
            </div>
            <span className="text-sm font-medium text-gray-800 dark:text-gray-100">
              {module.percent}%
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              Review Cohort
            </button>
            <button className="px-4 py-2 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              Send Nudge
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EducationModules;
