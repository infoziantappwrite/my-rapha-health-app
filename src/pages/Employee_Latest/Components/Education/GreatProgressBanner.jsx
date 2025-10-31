import React from "react";

const GreatProgressBanner = ({ completed, total }) => {
  const progress = total > 0 ? Math.round((completed / total) * 100) : 0;

  let message = "";
  let bannerColor = "";
  let textColor = "";

  if (progress === 0) {
    message = "Let's begin your learning journey!";
    bannerColor = "bg-gray-100 dark:bg-gray-800";
    textColor = "text-gray-800 dark:text-gray-200";
  } else if (progress < 50) {
    message = "You're making steady progress — keep going!";
    bannerColor = "bg-blue-100 dark:bg-blue-900/40";
    textColor = "text-blue-700 dark:text-blue-300";
  } else if (progress < 100) {
    message = "Great work! You’re more than halfway there.";
    bannerColor = "bg-purple-100 dark:bg-purple-900/40";
    textColor = "text-purple-700 dark:text-purple-300";
  } else {
    message = "🎉 Congratulations! You’ve completed all modules!";
    bannerColor = "bg-green-100 dark:bg-green-900/40";
    textColor = "text-green-700 dark:text-green-300";
  }

  return (
    <div
      className={`w-full mt-4 mb-6 p-4 rounded-xl flex items-center justify-between ${bannerColor} ${textColor} transition-all`}
    >
      <div className="text-sm sm:text-base font-medium">{message}</div>
      <div className="hidden sm:block text-sm font-semibold">
        {completed}/{total} modules complete
      </div>
    </div>
  );
};

export default GreatProgressBanner;
