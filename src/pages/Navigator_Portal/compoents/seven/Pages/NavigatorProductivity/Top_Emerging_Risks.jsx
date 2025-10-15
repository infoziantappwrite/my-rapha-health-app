import React from "react";
import { Eye } from "lucide-react";

const navigatorData = [
  { name: "Lisa Rodriguez", cases: 18, onTime: 95, avgResponse: 1.8, escalations: 2 },
  { name: "Sarah Chen", cases: 15, onTime: 92, avgResponse: 2.1, escalations: 1 },
  { name: "Mike Johnson", cases: 12, onTime: 89, avgResponse: 2.3, escalations: 3 },
  { name: "Dr. Emily Davis", cases: 9, onTime: 97, avgResponse: 1.6, escalations: 0 },
  { name: "Dr. Robert Kim", cases: 8, onTime: 94, avgResponse: 1.9, escalations: 1 },
];

const TopEmergingRisks = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Navigator Productivity
      </h2>

      <div className="overflow-x-auto border border-gray-200 dark:border-gray-700 rounded-lg">
        <table className="min-w-full text-sm text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Navigator</th>
              <th className="px-4 py-2 text-center font-semibold">Cases</th>
              <th className="px-4 py-2 text-center font-semibold">On-time %</th>
              <th className="px-4 py-2 text-center font-semibold">Avg Response</th>
              <th className="px-4 py-2 text-center font-semibold">Escalations</th>
              <th className="px-4 py-2 text-center font-semibold">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {navigatorData.map((nav, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-4 py-2">{nav.name}</td>
                <td className="px-4 py-2 text-center">{nav.cases}</td>
                <td className="px-4 py-2 text-center">{nav.onTime}%</td>
                <td className="px-4 py-2 text-center">{nav.avgResponse}h</td>
                <td className="px-4 py-2 text-center">{nav.escalations}</td>
                <td className="px-4 py-2 text-center">
                  <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition mr-2">
                    <Eye className="w-4 h-4 text-purple-600 inline-block" />
                  </button>
                  <button className="text-sm text-purple-600 hover:underline">
                    Kudos
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopEmergingRisks;
