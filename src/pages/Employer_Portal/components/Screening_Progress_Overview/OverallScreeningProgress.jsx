import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jul", Completed: 120, Invited: 140 },
  { month: "Aug", Completed: 135, Invited: 150 },
  { month: "Sep", Completed: 138, Invited: 155 },
  { month: "Oct", Completed: 145, Invited: 160 },
  { month: "Nov", Completed: 150, Invited: 165 },
  { month: "Dec", Completed: 155, Invited: 170 },
  { month: "Jan", Completed: 160, Invited: 180 },
];

const OverallScreeningProgress = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 p-6">
      {/* Card Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 pb-3">
        <h4 className="text-lg font-semibold">Overall Screening Progress</h4>
      </div>

      {/* Card Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
        <div>
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
            1,196
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Completed</div>
        </div>

        <div>
          <div className="text-3xl font-bold text-gray-600 dark:text-gray-300">
            204
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Remaining</div>
        </div>

        <div>
          <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
            85%
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Completion Rate</div>
        </div>

        <div>
          <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
            15%
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">Above Target</div>
        </div>
      </div>

      {/* Area Chart */}
      <div className="mt-6 w-full h-52">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorCompleted" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10b981" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorInvited" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#e5e7eb" stopOpacity={0.6} />
                <stop offset="95%" stopColor="#e5e7eb" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
            <XAxis
              dataKey="month"
              stroke="#666"
              tick={{ fill: "currentColor" }}
            />
            <YAxis
              stroke="#666"
              tick={{ fill: "currentColor" }}
              domain={[0, 200]}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #ccc",
                color: "black",
              }}
              wrapperStyle={{ zIndex: 1000 }}
            />
            <Area
              type="monotone"
              dataKey="Completed"
              stroke="#10b981"
              fill="url(#colorCompleted)"
              strokeWidth={2}
            />
            <Area
              type="monotone"
              dataKey="Invited"
              stroke="#e5e7eb"
              fill="url(#colorInvited)"
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default OverallScreeningProgress;
