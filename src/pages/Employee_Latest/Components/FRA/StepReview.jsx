import React from "react";
import { CircleCheckBig, TriangleAlert } from "lucide-react";

export default function StepReview({ data }) {
  return (
    <div className="flex flex-col h-full max-h-[75vh]">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-1">
        <div className="space-y-6">
          {/* Header */}
          <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h3 className="font-semibold text-gray-900 dark:text-gray-100">
              Review Your Assessment
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Please review your family health history before submitting.
            </p>
          </div>

          {/* Section: Cancer */}
          <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border dark:border-gray-700 border-gray-300">
            <div className="px-6 pt-6">
              <h4 className="text-base font-medium">Cancer History</h4>
            </div>
            <div className="px-6 pb-6 text-sm space-y-1">
              {data.cancer?.hasHistory ? (
                <div className="flex items-center">
                  <CircleCheckBig className="h-4 w-4 mr-2 text-green-600" />
                  <span>{data.cancer?.details || "Family history present"}</span>
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  No family history reported.
                </p>
              )}
            </div>
          </div>

          {/* Section: Heart */}
          <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border dark:border-gray-700  border-gray-300">
            <div className="px-6 pt-6">
              <h4 className="text-base font-medium">Heart Disease</h4>
            </div>
            <div className="px-6 pb-6 text-sm space-y-1">
              {data.heart?.hasHistory ? (
                <div className="flex items-center">
                  <CircleCheckBig className="h-4 w-4 mr-2 text-green-600" />
                  <span>{data.heart?.details || "Family history present"}</span>
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  No family history reported.
                </p>
              )}
            </div>
          </div>

          {/* Section: Diabetes */}
          <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border dark:border-gray-700  border-gray-300">
            <div className="px-6 pt-6">
              <h4 className="text-base font-medium">Diabetes</h4>
            </div>
            <div className="px-6 pb-6 text-sm space-y-1">
              {data.diabetes?.hasHistory ? (
                <div className="flex items-center">
                  <CircleCheckBig className="h-4 w-4 mr-2 text-green-600" />
                  <span>{data.diabetes?.details || "Family history present"}</span>
                </div>
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  No family history reported.
                </p>
              )}
            </div>
          </div>

          {/* Section: Other */}
          <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border dark:border-gray-700  border-gray-300">
            <div className="px-6 pt-6">
              <h4 className="text-base font-medium">Other Conditions</h4>
            </div>
            <div className="px-6 pb-6 text-sm space-y-2">
              {data.other?.conditions?.length > 0 ? (
                data.other.conditions.map((c, i) => (
                  <div key={i} className="flex items-center">
                    <CircleCheckBig className="h-4 w-4 mr-2 text-green-600" />
                    <span>{c}</span>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">
                  No additional hereditary conditions.
                </p>
              )}
            </div>
          </div>

          {/* Notice */}
          <div className="bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-lg p-4 ">
            <div className="flex items-start space-x-3">
              <TriangleAlert className="h-5 w-5 text-amber-600 mt-0.5" />
              <div className="text-sm">
                <p className="font-medium text-amber-900 dark:text-amber-100 mb-1">
                  Important Notice
                </p>
                <p className="text-amber-800 dark:text-amber-200">
                  This information will be used to personalize your prevention plan and screening recommendations. You can update this information at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer buttons - fixed at bottom */}
      
    </div>
  );
}
