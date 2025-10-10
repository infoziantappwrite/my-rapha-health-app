import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const ChartDetail = () => {
  const pieData = [
    { name: "High", value: 19, color: "#ef4444" },
    { name: "Medium", value: 23, color: "#facc15" },
    { name: "Low", value: 15, color: "#22c55e" },
    { name: "Unknown", value: 8, color: "#9ca3af" },
  ];

  const lineData = [
    { day: "1", risk: 10 },
    { day: "5", risk: 15 },
    { day: "10", risk: 12 },
    { day: "15", risk: 18 },
    { day: "20", risk: 14 },
    { day: "25", risk: 20 },
    { day: "30", risk: 16 },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

      {/* Risk Distribution */}
      <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
  <div className="flex justify-between items-start">
    <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">
      Risk Distribution (click to drill in)
    </h3>
    <button className="text-purple-600 text-xs hover:underline">Explain</button>
  </div>

  <div className="mt-4 flex items-center">
    {/* Left: Donut Chart */}
    <div className="w-32 h-32">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={pieData}
            dataKey="value"
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={60}
          >
            {pieData.map((entry, idx) => (
              <Cell key={idx} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>

    {/* Right: Legend */}
    <div className="ml-6 space-y-2 text-sm text-gray-600 dark:text-gray-300">
      {pieData.map((entry, idx) => (
        <div key={idx} className="flex items-center">
          <span
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: entry.color }}
          ></span>
          <span>{entry.name} — {entry.value}</span>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Risk Trends */}
      <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Risk Trends (30 days)
          </h3>
          <button className="text-purple-600 text-xs hover:underline">Explain</button>
        </div>
        <div className="mt-4 w-full h-32">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="risk" stroke="#7c3aed" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Emerging Risks */}
      <div className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md flex flex-col justify-between">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Top Emerging Risks
          </h3>
          <button className="text-purple-600 text-xs hover:underline">Explain</button>
        </div>
        <div className="mt-4 flex-1 space-y-2 text-sm text-gray-700 dark:text-gray-300">
          {[
            { name: "Sarah Joh...", details: "Tech Solutions • Diabetes", score: "8.7", time: "2h ago" },
            { name: "Mike C...", details: "Acme Co • Hypertension", score: "7.2", time: "4h ago" },
            { name: "Emily D...", details: "Health Inc • Heart Disease", score: "9.1", time: "1d ago" },
            { name: "James W...", details: "Tech Solutions • Cancer", score: "6.8", time: "2d ago" },
            { name: "Anna Marti...", details: "Global Tech • Diabetes", score: "8.3", time: "3h ago" },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between items-center">
              <div className="truncate">
                <span className="font-semibold">{item.name}</span> • {item.details}
              </div>
              <div className="flex items-center space-x-2">
                <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded text-xs font-semibold">{item.score}</span>
                <span className="text-gray-400 text-xs">{item.time}</span>
              </div>
            </div>
          ))}
        </div>
        <button className="mt-4 w-full py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-sm">
          View All Emerging Risks
        </button>
      </div>

    </div>
  );
};

export default ChartDetail;
