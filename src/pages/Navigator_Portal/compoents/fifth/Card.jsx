import React from "react";

// Card Component
const Card = ({ title, count, buttonText, bgColor, textColor }) => {
  return (
    <div
      className={`p-6 rounded-2xl shadow-md flex flex-col justify-between transition transform hover:-translate-y-1 hover:shadow-lg ${bgColor} ${textColor}`}
    >
      <div className="flex flex-col space-y-1">
        <span className="text-sm font-medium opacity-80">{title}</span>
        <span className="text-3xl font-bold">{count}</span>
      </div>
      <button
        className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
          bgColor.includes("blue")
            ? "bg-white text-blue-700 dark:bg-gray-700 dark:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-600"
            : bgColor.includes("green")
            ? "bg-white text-green-700 dark:bg-gray-700 dark:text-green-400 hover:bg-gray-100 dark:hover:bg-gray-600"
            : bgColor.includes("orange")
            ? "bg-white text-orange-700 dark:bg-gray-700 dark:text-orange-400 hover:bg-gray-100 dark:hover:bg-gray-600"
            : bgColor.includes("red")
            ? "bg-white text-red-700 dark:bg-gray-700 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600"
            : "bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
};

// Dashboard / Grid Container
const CardGrid = () => {
  const cards = [
    {
      title: "New Results",
      count: 18,
      buttonText: "Review",
      bgColor: "bg-blue-50 dark:bg-blue-900/20",
      textColor: "text-blue-900 dark:text-blue-200",
    },
    {
      title: "Abnormal",
      count: 7,
      buttonText: "Priority Review",
      bgColor: "bg-orange-50 dark:bg-orange-900/20",
      textColor: "text-orange-900 dark:text-orange-200",
    },
    {
      title: "Pending Review",
      count: 23,
      buttonText: "Review Queue",
      bgColor: "bg-green-50 dark:bg-green-900/20",
      textColor: "text-green-900 dark:text-green-200",
    },
    {
      title: "Overdue Follow-Ups",
      count: 9,
      buttonText: "Urgent Action",
      bgColor: "bg-red-50 dark:bg-red-900/20",
      textColor: "text-red-900 dark:text-red-200",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-2">
      {cards.map((card, idx) => (
        <Card
          key={idx}
          title={card.title}
          count={card.count}
          buttonText={card.buttonText}
          bgColor={card.bgColor}
          textColor={card.textColor}
        />
      ))}
    </div>
  );
};

export default CardGrid;
