import React from "react";
import {
  User,
  Users,
  GraduationCap,
  Calendar,
  BarChart3,
  Stethoscope,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "My Profile",
    description: "Personal health information complete",
    status: "Complete",
    icon: User,
    color: "bg-green-500",
    cardBg: "bg-green-50",
    cardBorder: "border-green-200",
    badgeColor: "bg-green-100 text-green-700",
  },
  {
    id: 2,
    title: "Family Risk",
    description: "Family health history assessment",
    status: "In Progress",
    icon: Users,
    color: "bg-blue-500",
    cardBg: "bg-blue-50",
    cardBorder: "border-blue-200",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    id: 3,
    title: "Health Education",
    description: "Learn about your health conditions",
    status: "Available",
    icon: GraduationCap,
    color: "bg-yellow-500",
    cardBg: "bg-yellow-50",
    cardBorder: "border-yellow-200",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 4,
    title: "Health Screening",
    description: "Schedule your comprehensive screening",
    status: "Available",
    icon: Calendar,
    color: "bg-yellow-500",
    cardBg: "bg-yellow-50",
    cardBorder: "border-yellow-200",
    badgeColor: "bg-yellow-100 text-yellow-700",
  },
  {
    id: 5,
    title: "My Results",
    description: "Review your health screening results",
    status: "Coming Soon",
    icon: BarChart3,
    color: "bg-gray-400",
    cardBg: "bg-gray-50",
    cardBorder: "border-gray-300",
    badgeColor: "bg-gray-100 text-gray-700",
  },
  {
    id: 6,
    title: "Expert Follow-up",
    description: "Connect with health experts",
    status: "Coming Soon",
    icon: Stethoscope,
    color: "bg-gray-400",
    cardBg: "bg-gray-50",
    cardBorder: "border-gray-300",
    badgeColor: "bg-gray-100 text-gray-700",
  },
];

const HealthJourneyTimeline = () => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 shadow-sm bg-white">
      <h2 className="text-lg font-semibold text-gray-800 mb-6">
        Health Journey Timeline
      </h2>

      {/* Mobile / Tablet - Stacked */}
      <div className="flex flex-col gap-4 md:hidden">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className={`flex items-center gap-4 p-4 rounded-lg border ${step.cardBorder} ${step.cardBg}`}
            >
              {/* Circle Icon */}
              <div
                className={`${step.color} text-white w-12 h-12 flex items-center justify-center rounded-full`}
              >
                <Icon className="w-6 h-6" />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800 flex items-center gap-2">
                  Step {step.id}: {step.title}
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${step.badgeColor}`}
                  >
                    {step.status}
                  </span>
                </h3>
                <p className="text-sm text-gray-500">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Desktop - Grid */}
      <div className="hidden md:grid grid-cols-2 lg:grid-cols-6 xl:grid-cols-6 gap-6">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.id}
              className={`flex flex-col items-center text-center rounded-lg p-4 ${step.cardBg} ${step.cardBorder}`}
            >
              <div
                className={`relative ${step.color} text-white w-14 h-14 flex items-center justify-center rounded-full`}
              >
                <Icon className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-white border border-gray-300 text-gray-800 w-6 h-6 flex items-center justify-center rounded-full text-xs font-bold">
                  {step.id}
                </span>
              </div>
              <h3 className="mt-2 font-semibold text-gray-800">{step.title}</h3>
              <p className="text-xs text-gray-500">{step.description}</p>
              <span
                className={`mt-1 text-xs px-2 py-1 rounded-full ${step.badgeColor}`}
              >
                {step.status}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HealthJourneyTimeline;
