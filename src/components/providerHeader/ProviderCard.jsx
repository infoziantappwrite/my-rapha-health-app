import React from "react";
import { Shield, Stethoscope } from "lucide-react";

const ProviderCard = () => {
    const provider= {
    portalName: "RAPHA Provider Portal",
    doctor: "Dr. Sarah Chen, RN",
    location: "TechCorp Headquarters",
    id: "PROV-20250124",
    time: "10:45 AM",
    badge: "HIPAA",
    badgeColor: "green",
  }
  return (
    <div className="py-2 dark:bg-gray-900 sm:px-10 max-w-7xl mx-auto">
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-card-foreground flex flex-col gap-6 rounded-xl border shrink-0  transition-all">
      <div className="p-4">
        <div className="flex items-center justify-between">
          {/* Left Side: Avatar + Info */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
              <Stethoscope className="h-5 w-5 text-blue-600 dark:text-blue-300" />
            </div>
            <div>
              <h2 className="font-semibold text-base">
                {provider.portalName}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {provider.doctor} • {provider.location}
              </p>
            </div>
          </div>

          {/* Right Side: ID + Time + Badge */}
          <div className="flex items-center space-x-3">
            <div className="text-right">
              <div className="text-sm font-medium">{provider.id}</div>
              <div className="text-xs text-gray-500">{provider.time}</div>
            </div>

            <span
              className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap gap-1 transition-[color,box-shadow] overflow-hidden ${
                provider.badgeColor === "green"
                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                  : provider.badgeColor === "blue"
                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
              }`}
            >
              <Shield className="h-3 w-3" />
              {provider.badge}
            </span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProviderCard;
