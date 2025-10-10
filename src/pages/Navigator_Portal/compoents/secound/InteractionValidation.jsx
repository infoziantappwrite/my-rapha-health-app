import React from 'react';
import { CheckCircle } from 'lucide-react'; // optional: use lucide icons for check mark

const InteractionValidation = () => {
  const points = [
    "Filters single-row; no horizontal scroll",
    "Tiles → cohorts 4/4 wired",
    "Donut + Trends → cohorts wired",
    "Emerging preview → Quick View + View All",
    "Cohort toolbars: CSV/JSON/AI Insights log-only",
  ];

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded-lg  w-full">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">
        Step 2: Interaction Validation
      </h2>
      <ul className="space-y-2">
        {points.map((point, idx) => (
          <li key={idx} className="flex items-center text-gray-700 dark:text-gray-200">
            {/* Green check icon */}
            <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InteractionValidation;
