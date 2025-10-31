import React from "react";
import { Brain, Check, Clock, Target, ChevronRight } from "lucide-react";

const LearningCard = ({ module, onClick }) => {
  const colorMap = {
    purple: {
      border: "rgb(216, 210, 238)",
      gradientLight: "linear-gradient(135deg, white 0%, rgb(245, 243, 255) 100%)",
      gradientDark: "linear-gradient(135deg, rgb(35, 31, 60) 0%, rgb(50, 45, 85) 100%)",
      accent: "rgb(142, 124, 195)",
    },
    rose: {
      border: "rgb(247, 215, 222)",
      gradientLight: "linear-gradient(135deg, white 0%, rgb(255, 238, 241) 100%)",
      gradientDark: "linear-gradient(135deg, rgb(70, 40, 55) 0%, rgb(100, 55, 70) 100%)",
      accent: "rgb(235, 90, 120)",
    },
    blue: {
      border: "rgb(208, 228, 255)",
      gradientLight: "linear-gradient(135deg, white 0%, rgb(235, 245, 255) 100%)",
      gradientDark: "linear-gradient(135deg, rgb(25, 40, 70) 0%, rgb(40, 60, 90) 100%)",
      accent: "rgb(66, 133, 244)",
    },
    orange: {
      border: "rgb(255, 230, 205)",
      gradientLight: "linear-gradient(135deg, white 0%, rgb(255, 245, 230) 100%)",
      gradientDark: "linear-gradient(135deg, rgb(70, 45, 20) 0%, rgb(90, 55, 30) 100%)",
      accent: "rgb(244, 135, 66)",
    },
    green: {
      border: "rgb(208, 243, 225)",
      gradientLight: "linear-gradient(135deg, white 0%, rgb(235, 255, 243) 100%)",
      gradientDark: "linear-gradient(135deg, rgb(25, 55, 45) 0%, rgb(40, 75, 60) 100%)",
      accent: "rgb(72, 199, 142)",
    },
  };

  const { border, gradientLight, gradientDark, accent } =
    colorMap[module.color] || colorMap.purple;

  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-6 rounded-xl group cursor-pointer hover:shadow-xl transition-all duration-300 border-2 relative overflow-hidden bg-card text-card-foreground"
      style={{
        borderColor: border,
      }}
    >
      {/* Background gradients (theme-aware) */}
      <div
        className="absolute inset-0 transition-colors duration-300"
        style={{
          background: gradientLight,
        }}
      ></div>
      <div
        className="absolute inset-0 hidden dark:block transition-colors duration-300"
        style={{
          background: gradientDark,
        }}
      ></div>

      {/* Left Accent Strip */}
      <div
        className="absolute top-0 left-0 w-2 h-full"
        style={{ background: accent }}
      ></div>

      {/* Header */}
      <div className="relative px-6 pt-6 grid auto-rows-min gap-1.5">
        <div className="flex items-start justify-between mb-3">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ background: accent, color: "white" }}
          >
            <Brain className="h-6 w-6" />
          </div>

          {module.progress === 100 ? (
            <span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-[#48C78E] text-white">
              <Check className="h-3 w-3 mr-1" /> Done
            </span>
          ) : (
            <span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-200">
              {module.progress > 0 ? "In Progress" : "Not Started"}
            </span>
          )}
        </div>

        <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          {module.title}
        </h4>
        <p className="text-sm text-gray-600 dark:text-gray-300">{module.description}</p>
      </div>

      {/* Content */}
      <div className="relative px-6 pb-6 space-y-3">
        {/* Progress Bar */}
        <div className="space-y-1">
          <div className="flex items-center justify-between text-xs">
            <span className="text-gray-500 dark:text-gray-400">Progress</span>
            <span className="font-medium text-gray-700 dark:text-gray-200">
              {module.progress}%
            </span>
          </div>
          <div className="relative w-full overflow-hidden rounded-full h-1.5 bg-gray-200 dark:bg-gray-700">
            <div
              className="h-full rounded-full transition-all"
              style={{
                width: `${module.progress}%`,
                background: accent,
              }}
            ></div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <Clock className="h-3 w-3 mr-1" /> {module.time}
          </span>
          <span className="flex items-center">
            <Target className="h-3 w-3 mr-1" /> {module.concepts} concepts
          </span>
        </div>

        {/* Button */}
        <button
          className="inline-flex items-center justify-center w-full text-sm font-medium rounded-md h-9 px-4 py-2 transition-colors hover:opacity-90"
          style={{
            backgroundColor: accent,
            color: "white",
          }}
        >
          Review Module
          <ChevronRight className="h-4 w-4 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default LearningCard;
