// LessonCard.jsx
import React from "react";
import { Microscope, Clock, Target, Play } from "lucide-react";

const LessonCard = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
        {/* Icon */}
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-blue-200">
          <Microscope className="w-8 h-8 text-blue-600" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center sm:text-left">
          <h2 className="text-lg font-semibold text-gray-900">
            Start Here: Understanding Cancer
          </h2>
          <p className="text-gray-600 mt-1">
            Learn how cancer starts, spreads, and why early detection saves lives
          </p>
          <p className="text-sm text-gray-500 mt-1">
            Essential foundation knowledge about cancer biology, risk factors,
            and the critical importance of early detection and prevention.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-3 justify-center sm:justify-start text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4 text-pink-600" /> 15 minutes
            </span>
            <span className="flex items-center gap-1">
              <Target className="w-4 h-4 text-purple-600" /> Essential for all users
            </span>
          </div>

          {/* Button */}
          <div className="mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
              <Play className="w-4 h-4" /> Begin Lesson
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;
