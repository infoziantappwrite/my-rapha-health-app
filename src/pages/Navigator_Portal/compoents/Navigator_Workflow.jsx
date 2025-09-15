import React from "react";
import {
  User,
  AlertCircle,
  BarChart2,
  Calendar,
  Heart,
  Bell,
} from "lucide-react";

const steps = [
  { id: 1, title: "Employee Overview", icon: <User className="h-5 w-5" />, percentage: 85, count: 89, gradient: "from-blue-400 to-blue-600" },
  { id: 2, title: "Risk Stratification", icon: <AlertCircle className="h-5 w-5" />, percentage: 72, count: 5, gradient: "from-red-400 to-red-600" },
  { id: 3, title: "Education Completion", icon: <BarChart2 className="h-5 w-5" />, percentage: 78, count: 156, gradient: "from-green-400 to-green-600" },
  { id: 4, title: "Screening Management", icon: <Calendar className="h-5 w-5" />, percentage: 64, count: 17, gradient: "from-purple-400 to-purple-600" },
  { id: 5, title: "Results & Follow-Up", icon: <Heart className="h-5 w-5" />, percentage: 91, count: 27, gradient: "from-orange-400 to-orange-600" },
  { id: 6, title: "Messaging & Notes", icon: <Bell className="h-5 w-5" />, percentage: 88, count: 12, gradient: "from-teal-400 to-teal-600" },
];

export const Navigator_Workflow = () => {
  return (
    <div className="px-6 py-8 rounded-xl shadow-lg bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Heading */}
      <h2 className="font-bold text-xl mb-1 text-purple-700 dark:text-purple-400">
        Navigator Workflow Timeline
      </h2>
      <p className="text-sm mb-8 text-purple-400 dark:text-purple-300">
        Coordinate employee health journeys through each critical stage
      </p>

      <div className="flex items-start justify-between relative">
        {steps.map((step, idx) => (
          <div key={step.id} className="flex flex-col items-center relative w-full">
            {/* Connector line */}
            {idx < steps.length - 1 && (
              <div className="absolute top-5 left-3/4 w-full h-1 bg-gradient-to-r from-gray-300 to-gray-200 dark:from-gray-700 dark:to-gray-600 -z-10"></div>
            )}

            {/* Step circle with gradient */}
            <div className="relative mb-4">
              <div
                className={`relative rounded-full w-10 h-10 flex items-center justify-center bg-gradient-to-br ${step.gradient} text-white shadow-md`}
              >
                {step.icon}
              </div>
              <span className="absolute -bottom-5 right-0 text-xs font-bold bg-white dark:bg-gray-800 rounded-full px-1.5 py-0.5 border border-gray-200 dark:border-gray-700 shadow-sm text-gray-800 dark:text-gray-200">
                {step.percentage}%
              </span>
            </div>

            {/* Step title and info */}
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{step.title}</div>
              <div className="text-xs font-medium mt-1 text-gray-500 dark:text-gray-400">Step {step.id}</div>
              <div className="text-xs mt-0.5 text-gray-400 dark:text-gray-500">{step.count} employees</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
