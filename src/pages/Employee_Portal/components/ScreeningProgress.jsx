import React from "react";
import { CheckCircle2, Calendar, Activity, BarChart } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Profile Complete",
    description: "Personal health information and risk assessment completed",
    icon: <CheckCircle2 className="w-10 h-10 text-green-500" />,
    completed: true,
  },
  {
    id: 2,
    title: "Screening Scheduled",
    description: "Schedule your comprehensive health screening",
    icon: <Calendar className="w-10 h-10 text-gray-400" />,
    completed: false,
  },
  {
    id: 3,
    title: "Results Review",
    description: "Health results and Navigator consultation coming soon",
    icon: <Activity className="w-10 h-10 text-gray-400" />,
    completed: false,
  },
];

const ScreeningProgress = () => {
  const progress = 33; // Example: 33% completed

  return (
    <div className="bg-white border border-gray-300 rounded-2xl shadow-sm p-6 w-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <BarChart className="w-6 h-6 text-purple-500" />
        <div>
          <h2 className="text-lg font-semibold">Your Screening Progress</h2>
          <p className="text-sm text-gray-500">
            Track your health screening milestones
          </p>
        </div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div className="mb-2">{step.icon}</div>
            <h3
              className={`font-medium ${
                step.completed ? "text-gray-900" : "text-gray-700"
              }`}
            >
              {step.title}
            </h3>
            <p className="text-sm text-gray-500">{step.description}</p>
          </div>
        ))}
      </div>

      <hr className="mb-4 " />

      {/* Progress Bar */}
      <div className="flex items-center justify-between mb-2 text-sm text-gray-600">
        <span>Overall Progress</span>
        <span>{progress}% Complete</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="bg-indigo-900 h-2.5 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Labels under progress bar */}
      <div className="flex justify-between mt-2 text-xs text-gray-500">
        <span>Profile</span>
        <span>Scheduled</span>
        <span>Complete</span>
      </div>
    </div>
  );
};

export default ScreeningProgress;
