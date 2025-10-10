import React from "react";

const PopupButtons = ({ stepData, showNotification }) => {
  if (!stepData?.popupContent?.buttons) return null;

  const handleClick = (btn) => {
    if (showNotification) {
      showNotification(
        "Information",
        `🤖 AI Assistant: You clicked "${btn.label}". I'm here to help!`
      );
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {stepData.popupContent.buttons.map((btn, index) => (
        <button
          key={index}
          onClick={() => handleClick(btn)}
          className="bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-100 px-5 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition text-sm font-medium shadow-sm"
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
};

export default PopupButtons;
