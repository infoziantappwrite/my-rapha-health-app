import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Progress = () => {
  const data = [
    { title: "Completed", value: 1041, percent: 100 },
    { title: "In Progress", value: 236, percent: 75 },
    { title: "Not Started", value: 137, percent: 20 },
    { title: "Avg Completion", value: "76%", subtitle: "Overall progress", percent: 76 },
  ];

  const moduleData = [
    { name: "Heart Health Basics", percent: 89 },
    { name: "Diabetes Prevention", percent: 76 },
    { name: "Breast Basics", percent: 74 },
    { name: "Colon Basics", percent: 69 },
  ];

  const trendData = [
    { month: "May", completion: 65 },
    { month: "Jun", completion: 70 },
    { month: "Jul", completion: 75 },
    { month: "Aug", completion: 80 },
    { month: "Sep", completion: 78 },
    { month: "Oct", completion: 76 },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-2xl transition-colors duration-300">
      {/* Progress Cards */}
      {data.map((item, index) => (
        <div
          key={index}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300"
        >
          {/* Header */}
          <div className="flex justify-between items-center">
            <h3 className="text-gray-800 dark:text-gray-100 font-semibold text-sm">
              {item.title}
            </h3>
            <button className="text-indigo-600 dark:text-indigo-400 text-xs font-medium hover:underline">
              Explain
            </button>
          </div>

          {/* Value */}
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-50 mt-2">
            {item.value}
          </p>
          {item.subtitle && (
            <p className="text-xs text-gray-500 dark:text-gray-400">{item.subtitle}</p>
          )}

          {/* Progress Bar */}
          <div className="w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 mt-3">
            <div
              className="bg-indigo-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${item.percent}%` }}
            ></div>
          </div>

          {/* Button */}
          <button className="mt-3 text-xs font-medium text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
            View Cohort
          </button>
        </div>
      ))}

      {/* Module Completion Distribution */}
    
  {/* Module Completion Distribution */}
  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm">
    <div className="flex justify-between items-center">
      <h3 className="text-gray-800 dark:text-gray-100 font-semibold text-sm">
        Module Completion Distribution
      </h3>
      <button className="text-indigo-600 dark:text-indigo-400 text-xs font-medium hover:underline">
        Explain
      </button>
    </div>

    <div className="mt-3 space-y-2">
      {moduleData.map((m, i) => (
        <div key={i} className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-md"
              style={{
                backgroundColor: `rgba(111, 66, 255, ${(1 - i * 0.15).toFixed(2)})`,
              }}
            ></span>
            <span className="text-gray-700 dark:text-gray-200">{m.name}</span>
          </div>
          <span className="text-gray-800 dark:text-gray-100 font-medium">
            {m.percent}%
          </span>
        </div>
      ))}
    </div>
  </div>

  {/* Completion Trend Line Chart */}
  <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-4 shadow-sm">
    <div className="flex justify-between items-center">
      <h3 className="text-gray-800 dark:text-gray-100 font-semibold text-sm">
        Completion Trend (6 months)
      </h3>
      <button className="text-indigo-600 dark:text-indigo-400 text-xs font-medium hover:underline">
        Explain
      </button>
    </div>

    <div className="mt-4 h-40">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={trendData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="completion" stroke="#6366F1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  </div>
</div>
   
  );
};

export default Progress;
