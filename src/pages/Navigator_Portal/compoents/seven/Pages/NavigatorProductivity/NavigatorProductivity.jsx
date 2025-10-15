import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import All_Screenings from "./Top_Emerging_Risks";
import { ArrowLeft } from "lucide-react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

// 🟢 Risk Summary Data
const riskData = [
  {
    name: "Active Cases",
    value: 156,
    color: "#ef4444", // red
    desc: "Across all navigators",
  },
  {
    name: "SLA On-time",
    value: 92,
    color: "#facc15", // yellow
    desc: "Response within 24 hours",
  },
  {
    name: "Avg First Response",
    value: 2.1,
    color: "#10b981", // green
    desc: "Initial contact time (hours)",
  },
  {
    name: "Cases per Navigator",
    value: 12.4,
    color: "#3b82f6", // blue
    desc: "Average caseload per navigator",
  },
];

// Navigator Throughput Data
const navigatorData = [
  { name: "Lisa Rodriguez", value: 18 },
  { name: "Sarah Chen", value: 15 },
  { name: "Mike Johnson", value: 12 },
  { name: "Dr. Emily Davis", value: 9 },
];

const NavigatorProductivity = ({ onBack }) => {
  const maxValue = Math.max(...navigatorData.map((n) => n.value));
  const total = 156; // for risk summary bars

  // 📊 Line Chart Data
  const responseTimeData = {
    labels: ["Week 1", "Week 3", "Week 5"], // X-axis
    datasets: [
      {
        label: "Response Time (hrs)",
        data: [2.5, 2, 1.9], // Y-axis
        borderColor: "#7c3aed",
        backgroundColor: "rgba(124, 58, 237, 0.4)", // slightly more visible
        tension: 0.3,
        fill: true, // optional: fill under the line
        pointBackgroundColor: "#7c3aed",
      },
    ],
  };

  const responseTimeOptions = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 1.5, // optional: small margin below lowest value
        max: 3,   // optional: margin above highest value
        ticks: { color: "#6b7280" },
        grid: { color: "#e5e7eb" },
      },
      x: {
        ticks: { color: "#6b7280" },
        grid: { display: false },
      },
    },
  };

  return (
    <div className="space-y-6 rounded-xl">
      {/* Top Bar with Right-Aligned Back Button */}
      <div className="flex justify-end">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 font-medium border border-purple-200 px-3 py-1.5 rounded-md shadow-sm hover:bg-purple-50 transition"
        >
          <ArrowLeft size={16} /> Back
        </button>
      </div>

      {/* 🧾 Risk Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {riskData.map((r, idx) => (
          <div
            key={idx}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {r.name}
              </span>
              <span className="text-purple-600 cursor-pointer text-sm hover:underline">
                Explain
              </span>
            </div>

            <p className="text-xs text-gray-500 dark:text-gray-400 mb-2 leading-snug">
              {r.desc}
            </p>

            <div className="text-2xl font-bold mb-2" style={{ color: r.color }}>
              {r.value}
              {r.name === "SLA On-time" ? "%" : ""}
              {r.name === "Avg First Response" ? "h" : ""}
            </div>

            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden mb-3">
              <div
                className="h-2 rounded-full transition-all duration-500"
                style={{
                  width:
                    r.name === "SLA On-time"
                      ? `${r.value}%`
                      : `${(r.value / total) * 100}%`,
                  backgroundColor: r.color,
                  opacity: 0.9, // slightly reduced transparency
                }}
              ></div>
            </div>

            <button className="px-3 py-1 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              View Cohort
            </button>
          </div>
        ))}
      </div>

      {/* 📈 Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Navigator Throughput */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-12">
            <span className="font-medium text-gray-700 dark:text-gray-200">
              Navigator Throughput
            </span>
            <span className="text-purple-600 cursor-pointer text-sm hover:underline">
              Explain
            </span>
          </div>

          <div className="space-y-3">
            {navigatorData.map((nav, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="w-32 text-gray-700 dark:text-gray-200 text-sm">
                  {nav.name}
                </span>

                <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    className="h-3 rounded-full transition-all duration-500"
                    style={{
                      width: `${(nav.value / maxValue) * 100}%`,
                      backgroundColor: "rgba(124, 58, 237, 0.9)", // dark purple
                    }}
                  ></div>
                </div>

                <span className="w-10 text-gray-700 dark:text-gray-200 text-sm text-right">
                  {nav.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Line Chart */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Response Time Trend
            </span>
            <span className="text-purple-600 cursor-pointer text-sm hover:underline">
              Explain
            </span>
          </div>
          <Line data={responseTimeData} options={responseTimeOptions} />
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
      <All_Screenings />
    </div>
  );
};

export default NavigatorProductivity;
