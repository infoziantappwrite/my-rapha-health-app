import React from "react";

const DashboardCards = () => {
  const cards = [
    { value: "338", label: "Total Active Cases" },
    { value: "1.6 hrs", label: "Avg Response Time" },
    { value: "4.8/5.0", label: "Satisfaction Score" },
    { value: "92.5%", label: "Case Success Rate" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700"
        >
          <div className="p-4 [&:last-child]:pb-6">
            <div className="text-2xl font-bold text-emerald-600">{card.value}</div>
            <div className="text-sm text-gray-500 dark:text-gray-400">{card.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
