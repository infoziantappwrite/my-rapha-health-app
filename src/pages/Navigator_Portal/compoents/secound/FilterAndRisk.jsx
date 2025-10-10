import React from "react";
import { MessageCircle } from "lucide-react";

const FilterAndRisk = () => {
    return (
        <div className="p-6 space-y-6 bg-white rounded-xl">
            {/* Row 1: Buttons */}
            <div className="flex justify-between items-center">
                <div></div> {/* Left side empty */}

                <div className="flex space-x-2">
                    <button className="flex items-center px-4 py-2 bg-purple-100/30 text-purple-700 border border-purple-500 rounded hover:bg-purple-100/50 transition">
                        <MessageCircle className="w-4 h-4" />
                        <span className="ml-2">Ask Rapha</span>
                    </button>

                    <button className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400 transition dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
                        Help
                    </button>
                </div>
            </div>

            {/* Row 2: Filters */}
            <div className="grid grid-cols-6 gap-4 items-end">
                {/* Condition */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                        Condition
                    </label>
                    <select className="mt-1 p-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition">
                        <option>All Conditions</option>
                    </select>
                </div>

                {/* Employer */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                        Employer
                    </label>
                    <select className="mt-1 p-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition">
                        <option>All Employers</option>
                    </select>
                </div>

                {/* Navigator */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                        Navigator
                    </label>
                    <select className="mt-1 p-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition">
                        <option>All Navigators</option>
                    </select>
                </div>

                {/* Date Range */}
                <div className="flex flex-col">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                        Date Range
                    </label>
                    <select className="mt-1 p-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition">
                        <option>30 days</option>
                    </select>
                </div>

                {/* Search */}
                <div className="flex flex-col col-span-1">
                    <label className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-1">
                        Search
                    </label>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="mt-1 p-2 border rounded-lg bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 shadow-sm focus:ring-2 focus:ring-purple-400 focus:border-purple-500 transition"
                    />
                </div>

                {/* Apply Button */}
                <div className="flex items-end">
                    <button className="px-4 py-2 bg-purple-600 text-white rounded-lg shadow hover:bg-purple-700 transition w-full font-medium">
                        Apply
                    </button>
                </div>
            </div>

            {/* Row 3: Cards */}
           <div className="grid grid-cols-4 gap-4">
  {[
    { label: "High Risk", value: 19, change: "+2.1%", bg: "bg-red-100 dark:bg-red-800" },
    { label: "Medium Risk", value: 23, change: "-1.5%", bg: "bg-yellow-100 dark:bg-yellow-800" },
    { label: "Low Risk", value: 15, change: "+0.8%", bg: "bg-green-100 dark:bg-green-800" },
    { label: "Unknown Risk", value: 8, change: "+3.2%", bg: "bg-gray-100 dark:bg-gray-700" },
  ].map((card, idx) => (
    <div
      key={idx}
      className={`p-4 rounded-lg ${card.bg} shadow-md relative flex flex-col justify-between`}
    >
      {/* Explain button top-right */}
      <button className="absolute top-4 right-4 px-2 py-1 rounded hover:bg-blue-200 transition text-xs">
        <span className="text-purple-600/80">Explain</span>
      </button>

      {/* Card content */}
      <div className="mt-2">
        <div className="text-sm font-medium text-gray-600 dark:text-gray-300">
          {card.label}
        </div>

        {/* Value and Change side by side */}
        <div className="flex items-baseline space-x-2 mt-1">
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {card.value}
          </div>
          <div className={`text-sm ${card.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
            {card.change}
          </div>
        </div>
      </div>

      {/* View Cohort button at bottom */}
      <button className="mt-4 w-full px-3 py-2 bg-purple-600/80 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600/100 hover:shadow-lg transition-all text-sm">
        View Cohort
      </button>
    </div>
  ))}
</div>

        </div>
    );
};

export default FilterAndRisk;
