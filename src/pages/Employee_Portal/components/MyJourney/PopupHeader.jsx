import React from "react";
import { X } from "lucide-react";

const PopupHeader = ({
  stepData,
  onClose,
}) => {
  if (!stepData) return null;

  const { id, headerTitle, headerDesc, color, icon: Icon } = stepData;

  return (
    <div className="flex flex-col gap-2 text-center sm:text-left px-6 py-4 border-b border-gray-400 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 dark:border-gray-700">
      {/* Top row: Icon + Title + Close button */}
      <div className="flex items-center justify-between">
        {/* Left side */}
        <div className="flex items-center space-x-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}>
            {Icon && <Icon className="h-6 w-6 text-white" />}
          </div>
          <div>
            <span className="text-xl font-semibold text-gray-800 dark:text-gray-100">{headerTitle}</span>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Step {id} of 6 - Journey Progress
            </div>
          </div>
        </div>

        {/* Close button */}
        <button
          onClick={onClose}
          className="inline-flex items-center justify-center text-sm font-medium transition-all hover:bg-gray-200 dark:hover:bg-gray-700 h-8 rounded-md px-2"
        >
          <X className="h-4 w-4 text-gray-800 dark:text-gray-100" />
        </button>
      </div>

      {/* Description below */}
      {headerDesc && (
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{headerDesc}</p>
      )}
    </div>
  );
};

export default PopupHeader;
