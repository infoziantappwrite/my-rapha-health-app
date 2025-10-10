import React, { useState } from "react";
import { BarChart2, FileText, TrendingUp, Stethoscope, Shield, Settings } from "lucide-react";

const tools = [
  {
    id: 1,
    title: "Risk Stratification Reports",
    description: "Population health analytics and risk cohort insights",
    icon: <BarChart2 className="h-6 w-6 text-red-500" />,
  },
  {
    id: 2,
    title: "Document Viewer",
    description: "Health records, test results, and file management",
    icon: <FileText className="h-6 w-6 text-blue-500" />,
  },
  {
    id: 3,
    title: "Navigator Productivity",
    description: "Performance metrics and workflow analytics",
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
  },
  {
    id: 4,
    title: "Clinical Protocols",
    description: "Evidence-based care guidelines and triage support",
    icon: <Stethoscope className="h-6 w-6 text-purple-500" />,
  },
  {
    id: 5,
    title: "Audit Trail & History",
    description: "Compliance logging and activity documentation",
    icon: <Shield className="h-6 w-6 text-orange-400" />,
  },
];

const NavigatorTools = () => {
  const [selectedTool, setSelectedTool] = useState(null);

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
        Navigator Utility Tools
      </h2>

      {/* Tools Row */}
      <div className="flex flex-wrap gap-4">
        {tools.map((tool) => (
          <div
  key={tool.id}
  onClick={() => setSelectedTool(tool)}
  className={`flex-1 min-w-[180px] cursor-pointer p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-all bg-white dark:bg-gray-800 ${
    selectedTool?.id === tool.id ? "ring-2 ring-indigo-500" : ""
  }`}
>
            <div className="flex items-center justify-center mb-2">{tool.icon}</div>
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-1 text-center">
              {tool.title}
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 text-center">{tool.description}</p>
          </div>
        ))}
      </div>

      {/* Main Selected Tool Section */}
     <div className="mt-6 p-6 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-900 flex flex-col items-center justify-center min-h-[150px]">
        {selectedTool ? (
          <>
            <div className="mb-2">
              <Settings className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">{selectedTool.title}</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">{selectedTool.description}</p>
          </>
        ) : (
          <>
            <div className="mb-2">
              <Settings className="h-6 w-6 text-purple-500" />
            </div>
            <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">Select a Utility Tool</h3>
            <p className="text-gray-500 dark:text-gray-400 text-center">
              Choose from the Navigator utility tools above to access comprehensive functionality
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default NavigatorTools;
