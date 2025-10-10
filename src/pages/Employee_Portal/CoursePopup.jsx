import React, { useState } from "react";

const lessons = [
  { title: "What is Cancer?", duration: "8 min" },
  { title: "Common Cancer Types", duration: "10 min" },
  { title: "Risk Factors & Prevention", duration: "12 min" },
  { title: "The Power of Early Detection", duration: "15 min" },
];

const keyPoints = [
  "Early detection significantly improves outcomes.",
  "Lifestyle changes can reduce cancer risk.",
  "Regular screenings and guidelines are crucial.",
];

const importantNotes = [
  "Most cancers are preventable through healthy lifestyle choices.",
  "Include regular exercise, a healthy diet, and screening schedules.",
];

const CoursePopup = ({ isOpen, onClose }) => {
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);

  if (!isOpen) return null;

  return (
    <div className="fixed min-h-screen inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 w-[90%] max-w-6xl rounded-xl shadow-lg flex overflow-hidden">
        {/* Left Sidebar */}
        <div className="w-80 bg-gray-100 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 overflow-y-auto">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h3 className="font-semibold mb-0">Course Progress</h3>
            <button
              className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              onClick={onClose}
            >
              ✕
            </button>
          </div>

          <div className="p-4">
            <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-full mb-2">
              <div
                className="bg-blue-600 h-2 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              25% Complete • 0 of {lessons.length} chapters
            </div>

            <div className="space-y-2">
              {lessons.map((lesson, idx) => (
                <button
                  key={idx}
                  className={`w-full text-left p-3 rounded-lg border transition ${
                    selectedLesson.title === lesson.title
                      ? "bg-blue-100 border-blue-300"
                      : "bg-white border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedLesson(lesson)}
                >
                  <div className="flex justify-between">
                    <span className="font-medium text-sm">{lesson.title}</span>
                    <span className="text-xs text-gray-500">{lesson.duration}</span>
                  </div>
                  {selectedLesson.title === lesson.title && (
                    <div className="text-xs font-medium text-blue-600 mt-1">
                      Currently viewing
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="p-6 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-2">{selectedLesson.title}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Interactive video content • {selectedLesson.duration}
            </p>
          </div>

          <div className="flex-1 overflow-auto p-6">
            <div className="bg-gray-900 rounded-lg h-64 flex items-center justify-center text-white">
              Video / Interactive Content Placeholder
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 bg-gray-100 dark:bg-gray-800 border-l border-gray-200 dark:border-gray-700 overflow-y-auto p-4 space-y-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              Key Learning Points
            </h3>
            <ul className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
              {keyPoints.map((point, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-green-600 mt-0.5">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <h3 className="font-semibold text-gray-800 dark:text-gray-100">
              Important Notes
            </h3>
            <ul className="space-y-1 text-sm text-blue-700 dark:text-blue-300">
              {importantNotes.map((note, idx) => (
                <li key={idx}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursePopup;
