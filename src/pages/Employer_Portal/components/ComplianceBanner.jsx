import React from "react";
import { Shield } from "lucide-react";

export default function ComplianceBanner() {
  return (
    <div className="bg-emerald-50 dark:bg-emerald-900 border-t border-emerald-200 dark:border-emerald-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:space-x-3 space-y-3 md:space-y-0">
          {/* Icon */}
          <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-800 rounded-full flex items-center justify-center">
            <Shield className="h-6 w-6 text-emerald-600 dark:text-emerald-200" />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h3 className="font-semibold text-emerald-900 dark:text-emerald-100">
              HIPAA-Compliant Executive Dashboard
            </h3>
            <p className="text-sm text-emerald-700 dark:text-emerald-300">
              All employee data is de-identified and aggregated for privacy
              protection. Real-time insights powered by AI while maintaining
              complete confidentiality.
            </p>
          </div>

          {/* Badge */}
          <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 border-transparent bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-200">
            Secure &amp; Compliant
          </span>
        </div>
      </div>
    </div>
  );
}
