import React from "react";

const PopupButtons = ({ stepData }) => {
  if (!stepData?.popupContent?.buttons) return null;

  return (
    <div className="flex flex-wrap justify-center gap-3">
      {stepData.popupContent.buttons.map((btn, index) => (
        <a
          key={index}
          href={btn.link}
          className="bg-blue-600 dark:bg-blue-500 text-white dark:text-gray-100 px-5 py-2 rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition text-sm font-medium shadow-sm"
        >
          {btn.label}
        </a>
      ))}
    </div>
  );
};

export default PopupButtons;
