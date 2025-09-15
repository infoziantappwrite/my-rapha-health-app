import React from "react";

const PopupSections = ({ stepData }) => {
  if (!stepData?.popupContent?.sections) return null;

  return (
    <div className="space-y-4">
      {stepData.popupContent.sections.map((section, index) => (
        <div
          key={index}
          className="bg-indigo-50 dark:bg-gray-800 border border-indigo-200 dark:border-gray-700 rounded-lg p-6 shadow-sm transition-colors"
        >
          {/* Section Title */}
          <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
            {section.title}
          </h3>

          {/* Section Items */}
          <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200 text-sm">
            {section.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          {/* Section Buttons */}
         
        </div>
      ))}
    </div>
  );
};

export default PopupSections;
