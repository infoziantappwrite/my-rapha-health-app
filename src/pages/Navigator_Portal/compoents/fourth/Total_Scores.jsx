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

const screenings = [
  { name: "Total Scheduled", value: 127, percent: 100 },
  { name: "Mammograms", value: 45, percent: 35 },
  { name: "Blood Work", value: 68, percent: 54 },
  { name: "Guardant Tests", value: 14, percent: 11 },
];

const Total_Scores = () => {
  // Line chart data
  const lineData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Scheduled",
        data: [89, 108, 102, 117, 123, 127],
        borderColor: "#7c3aed", // purple
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

  // Donut chart data
  const doughnutData = {
    labels: screenings.slice(1).map((s) => s.name),
    datasets: [
      {
        data: screenings.slice(1).map((s) => s.value),
        backgroundColor: ["#7c3aed", "#a78bfa", "#c4b5fd"], // slice colors
        borderWidth: 1,
      },
    ],
  };

  const doughnutOptions = {
    plugins: { legend: { position: "bottom" } },
    responsive: true,
    cutout: "60%", // makes it a donut
  };

  return (
    <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 rounded-xl">
      {/* Progress Bars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {screenings.map((s, idx) => (
          <div
            key={idx}
            className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium text-gray-700 dark:text-gray-200">
                {s.name}
              </span>
              <span className="text-purple-600 cursor-pointer text-sm">
                Explain
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
              {s.value}
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden mb-2">
              <div
                className="h-2 bg-purple-600 rounded-full"
                style={{ width: `${s.percent}%` }}
              ></div>
            </div>
            <button className="px-3 py-1 text-sm font-medium border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition">
              View Cohort
            </button>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Donut Chart */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col items-center">
          <span className="text-gray-700 dark:text-gray-200 font-medium mb-2">
            Screening Distribution
          </span>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="w-70 h-70">
              <Doughnut data={doughnutData} options={doughnutOptions} />
            </div>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
              {screenings.slice(1).map((s, i) => (
                <li key={i} className="flex items-center">
                  <span
                    className={`inline-block w-3 h-3 mr-2 rounded-full`}
                    style={{
                      backgroundColor: doughnutData.datasets[0].backgroundColor[i],
                    }}
                  ></span>
                  {s.name} ({s.value})
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Line Chart */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col justify-between">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-700 dark:text-gray-200 font-medium">
              Screening Trends (6 months)
            </span>
            <span className="text-purple-600 cursor-pointer text-sm">Explain</span>
          </div>
          <Line data={lineData} options={lineOptions} />
          <div className="mt-4 flex gap-2 justify-end">
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm">
              Export CSV
            </button>
            <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition text-sm">
              Export JSON
            </button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition text-sm">
              Schedule New Screening
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Total_Scores;
