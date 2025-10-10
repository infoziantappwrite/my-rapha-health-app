import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip as PieTooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as AreaTooltip,
} from "recharts";

// Colors
const COLORS = {
  high: "#ef4444",
  moderate: "#f59e0b",
  low: "#10b981",
};

// Risk distribution data
const distributionData = [
  { name: "High Risk", value: 13, type: "high" },
  { name: "Moderate Risk", value: 33, type: "moderate" },
  { name: "Low Risk", value: 54, type: "low" },
];

// Risk trends over time
const trendsData = [
  { month: "Aug", high: 50, moderate: 120, low: 200 },
  { month: "Sep", high: 60, moderate: 150, low: 210 },
  { month: "Oct", high: 70, moderate: 140, low: 220 },
  { month: "Nov", high: 90, moderate: 160, low: 230 },
  { month: "Dec", high: 100, moderate: 170, low: 250 },
  { month: "Jan", high: 110, moderate: 180, low: 260 },
];

// Custom Pie tooltip
const CustomPieTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 rounded shadow border border-gray-200 dark:border-gray-700">
        <strong>{payload[0].name}</strong>: {payload[0].value}%
      </div>
    );
  }
  return null;
};

// Custom Area tooltip
const CustomAreaTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-2 rounded shadow border border-gray-200 dark:border-gray-700">
        <div><strong>{label}</strong></div>
        {payload.map((entry, index) => (
          <div key={index} style={{ color: entry.color }}>
            {entry.name}: {entry.value}
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const RiskCharts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Pie Chart */}
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
        <h4 className="text-lg font-semibold mb-4">Risk Distribution</h4>
        <PieChart width={300} height={300}>
          <Pie
            data={distributionData}
            dataKey="value"
            nameKey="name"
            cx={150}
            cy={150}
            outerRadius={100}
            label={(entry) => `${entry.value}%`}
          >
            {distributionData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[entry.type]} />
            ))}
          </Pie>
          <PieTooltip content={<CustomPieTooltip />} />
        </PieChart>
      </div>

      {/* Area Chart */}
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-200 dark:border-gray-700 p-4">
        <h4 className="text-lg font-semibold mb-4">Risk Trends Over Time</h4>
        <AreaChart width={500} height={300} data={trendsData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="month" stroke="#666" />
          <YAxis stroke="#666" />
          <AreaTooltip content={<CustomAreaTooltip />} />
          <Area type="monotone" dataKey="high" stackId="1" stroke={COLORS.high} fill={COLORS.high} fillOpacity={0.6} />
          <Area type="monotone" dataKey="moderate" stackId="1" stroke={COLORS.moderate} fill={COLORS.moderate} fillOpacity={0.6} />
          <Area type="monotone" dataKey="low" stackId="1" stroke={COLORS.low} fill={COLORS.low} fillOpacity={0.6} />
        </AreaChart>
      </div>
    </div>
  );
};

export default RiskCharts;
