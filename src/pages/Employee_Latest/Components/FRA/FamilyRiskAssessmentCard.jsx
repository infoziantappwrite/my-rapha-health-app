import { useState } from "react";
import { Users, TrendingUp, X } from "lucide-react";
import RiskAssessmentPopup from "./RiskAssessmentPopup"; // 👈 this is the popup component

export default function FamilyRiskAssessmentCard() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main Card */}
      <div className="rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 p-8  transition-all">
        <div className="flex items-center justify-between">
          <div className="flex items-start space-x-4 flex-1">
            {/* Icon */}
            <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
              <Users className="h-6 w-6 text-purple-600 dark:text-purple-300" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h2 className="font-medium mb-2 text-gray-900 dark:text-gray-100">
                Complete Your Family Risk Assessment
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Finish this guided survey to uncover your personalized
                prevention plan. The assessment takes about 5–10 minutes and
                helps us identify your unique health risks.
              </p>

              {/* Button */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setOpen(true)}
                  className="inline-flex items-center justify-center gap-2 h-10 rounded-md px-6 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-all"
                >
                  <TrendingUp className="h-4 w-4 mr-1" />
                  Start Assessment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-2xl p-6 relative">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Popup Content Component */}
            <RiskAssessmentPopup closePopup={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  );
}
