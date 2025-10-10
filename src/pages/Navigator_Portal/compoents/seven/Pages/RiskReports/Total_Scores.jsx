import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

// Risk data (used in both sections)
const riskData = [
  { name: "High Risk", value: 19, color: "#ef4444" }, // red
  { name: "Medium Risk", value: 23, color: "#facc15" }, // yellow
  { name: "Low Risk", value: 15, color: "#10b981" }, // green
  { name: "Unknown", value: 8, color: "#9ca3af" }, // gray
];

const Total_Scores = () => {
  const total = riskData.reduce((acc, r) => acc + r.value, 0);

  // Line chart data
  const lineData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Scheduled",
        data: [89, 108, 102, 117, 123, 127],
        borderColor: "#7c3aed",
        backgroundColor: "rgba(124, 58, 237, 0.2)",
        tension: 0.3,
      },
    ],
  };

  const lineOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  // Doughnut (Pie) chart data
  const doughnutData = {
    labels: riskData.map((r) => r.name),
    datasets: [
      {
        data: riskData.map((r) => r.value),
        backgroundColor: riskData.map((r) => r.color),
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: { position: "bottom", labels: { color: "#374151" } },
    },
    responsive: true,
    cutout: "60%",
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
      {/* Risk Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {riskData.map((r, idx) => (
          <div
            key={idx}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {r.name}
              </span>
              <span className="text-purple-600 cursor-pointer text-sm">
                Explain
              </span>
            </div>
            {/* Colored number */}
            <div
              className="text-2xl font-bold mb-2"
              style={{ color: r.color }}
            >
              {r.value}
            </div>
            {/* Progress bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden mb-2">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${(r.value / total) * 100}%`,
                  backgroundColor: r.color,
                }}
              ></div>
            </div>
            <button className="px-3 py-1 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              View Cohort
            </button>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Doughnut Chart */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col items-center">
          <span className="text-gray-700 dark:text-gray-200 font-medium mb-2">
            Severity Distribution
          </span>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-64 h-64">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              {riskData.map((r, i) => (
                <li key={i} className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 mr-2 rounded-full"
                    style={{ backgroundColor: r.color }}
                  ></span>
                  {r.name}: {r.value} ({((r.value / total) * 100).toFixed(1)}%)
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Line Chart */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Risk Trend (30 days)
            </span>
            <span className="text-purple-600 cursor-pointer text-sm">
              Explain
            </span>
          </div>
          <Line data={lineData} options={lineOptions} />
          <div className="mt-4 flex gap-2 justify-end">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm">
              Export CSV
            </button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm">
              Export JSON
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total_Scores;
