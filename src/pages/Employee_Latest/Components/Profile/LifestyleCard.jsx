import React, { useState } from "react";
import { Heart } from "lucide-react";

export default function LifestyleCard() {
  const [level, setLevel] = useState(3); // Default 3/5

  // Convert level (1–5) → fill percentage
  const getFill = () => `${(level / 6) * 100}%`;

  return (
    <div className="flex flex-col gap-6 rounded-2xl bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
      {/* Header */}
      <div className="px-6 pt-6">
        <h4 className="flex items-center space-x-2 text-lg font-semibold text-purple-700 dark:text-purple-400">
          <Heart className="h-5 w-5 text-purple-600 dark:text-purple-400" />
          <span>Lifestyle</span>
        </h4>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Your daily habits and preferences
        </p>
      </div>

      {/* Card Content */}
      <div className="px-6 pb-6 space-y-4">
        {/* Lifestyle Data */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <span className="block text-gray-500 dark:text-gray-400 mb-1">
              Smoking:
            </span>
            <span className="font-medium">No</span>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400 mb-1">
              Alcohol Use:
            </span>
            <span className="font-medium">Occasional</span>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400 mb-1">
              Exercise Frequency:
            </span>
            <span className="font-medium">4× per week</span>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400 mb-1">
              Diet Style:
            </span>
            <span className="font-medium">Balanced / Low-Carb</span>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400 mb-1">
              Sleep Hours:
            </span>
            <span className="font-medium">7</span>
          </div>
          <div>
            <span className="block text-gray-500 dark:text-gray-400 mb-1">
              Faith Preference:
            </span>
            <span className="font-medium">Christian ✓</span>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px bg-gray-200 dark:bg-gray-700" />

        {/* Stress Level (Adjustable) */}
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Stress Level:
            </span>
            <span className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-600 px-2 py-0.5 text-xs font-medium text-gray-800 dark:text-gray-100">
              {level} / 6
            </span>
          </div>

          {/* Slider */}
          <div className="relative w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full">
            {/* Fill */}
            <div
              className="absolute top-0 left-0 h-3 bg-purple-500 rounded-full transition-all duration-300"
              style={{ width: getFill() }}
            ></div>

            {/* Input range (for control) */}
            <input
              type="range"
              min="0"
              max="6"
              step="1"
              value={level}
              onChange={(e) => setLevel(Number(e.target.value))}
              className="absolute top-0 left-0 w-full h-3 opacity-0 cursor-pointer z-10"
            />

            {/* Thumb */}
            <div
              className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-2 border-purple-600 shadow-sm transition-all duration-300 pointer-events-none"
              style={{ left: `calc(${getFill()} - 8px)` }}
            ></div>
          </div>

          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-2">
            <span>Low</span>
            <span>Moderate</span>
            <span>High</span>
          </div>
        </div>
      </div>
    </div>
  );
}
