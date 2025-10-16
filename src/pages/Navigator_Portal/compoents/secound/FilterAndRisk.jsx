import React from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";

const FilterAndRisk = () => {
  const navigate = useNavigate();

  const cards = [
    { label: "High Risk", value: 19, change: "+2.1%", bg: "bg-red-100 dark:bg-red-800" },
    { label: "Medium Risk", value: 23, change: "-1.5%", bg: "bg-yellow-100 dark:bg-yellow-800" },
    { label: "Low Risk", value: 15, change: "+0.8%", bg: "bg-green-100 dark:bg-green-800" },
    { label: "Unknown Risk", value: 8, change: "+3.2%", bg: "bg-gray-100 dark:bg-gray-700" },
  ];

  return (
    <div className="p-6 space-y-6 bg-white dark:bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
      {/* Row 1: Buttons */}
      <div className="flex justify-between items-center">
        <div></div>
        <div className="flex space-x-2">
          <button className="flex items-center px-4 py-2 bg-purple-100/30 dark:bg-purple-700/20 text-purple-700 dark:text-purple-300 border border-purple-500 dark:border-purple-600 rounded hover:bg-purple-100/50 dark:hover:bg-purple-700/40 transition">
            <MessageCircle className="w-4 h-4" />
            <span className="ml-2">Ask Rapha</span>
          </button>
          <button className="px-4 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-400 dark:hover:bg-gray-600 transition">
            Help
          </button>
        </div>
      </div>

      {/* Row 2: Cards */}
      <div className="grid grid-cols-4 gap-4">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-2xl ${card.bg} shadow-sm hover:shadow-md transition-all duration-300 relative flex flex-col justify-between`}
          >
            <button className="absolute top-4 right-4 px-2 py-1 rounded hover:bg-blue-200 dark:hover:bg-blue-700 transition text-xs">
              <span className="text-purple-600 dark:text-purple-300/80">Explain</span>
            </button>

            <div className="mt-2">
              <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
                {card.label}
              </div>
              <div className="flex items-baseline space-x-2 mt-1">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {card.value}
                </div>
                <div
                  className={`text-sm ${card.change.startsWith("+") ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                >
                  {card.change}
                </div>
              </div>
            </div>

            <button
              onClick={() => navigate(`/navigator/table/${card.label}`)}
              className="mt-4 w-full px-3 py-2 bg-purple-600/80 dark:bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 dark:hover:bg-purple-600 hover:shadow-lg transition-all text-sm"
            >
              View Cohort
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterAndRisk;
