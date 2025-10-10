// LessonCard.jsx
import React, { useState } from "react";
import { Microscope, Clock, Target, Play } from "lucide-react";
import CoursePopup from "../CoursePopup"
const LessonCard = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);

  return (
    <>
      <div className="bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700 
                      rounded-2xl p-6 shadow-sm transition-colors duration-300">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
          {/* Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white dark:bg-gray-900 
                          flex items-center justify-center shadow-sm border border-blue-200 dark:border-gray-700">
            <Microscope className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>

          {/* Content */}
          <div className="flex-1 text-center sm:text-left">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Start Here: Understanding Cancer
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mt-1">
              Learn how cancer starts, spreads, and why early detection saves lives
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              Essential foundation knowledge about cancer biology, risk factors,
              and the critical importance of early detection and prevention.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-4 mt-3 justify-center sm:justify-start 
                            text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-pink-600 dark:text-pink-400" /> 15 minutes
              </span>
              <span className="flex items-center gap-1">
                <Target className="w-4 h-4 text-purple-600 dark:text-purple-400" /> Essential for all users
              </span>
            </div>

            {/* Button */}
            <div className="mt-4">
              <button 
                onClick={handleOpenPopup}
                className="flex items-center gap-2 px-4 py-2 
                           bg-blue-600 hover:bg-blue-700 
                           dark:bg-blue-500 dark:hover:bg-blue-600 
                           text-white rounded-lg font-medium transition-colors duration-300"
              >
                <Play className="w-4 h-4" /> Begin Lesson
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Popup */}
      {isPopupOpen && <CoursePopup isOpen={isPopupOpen} onClose={handleClosePopup} />}
    </>
  );
};

export default LessonCard;
