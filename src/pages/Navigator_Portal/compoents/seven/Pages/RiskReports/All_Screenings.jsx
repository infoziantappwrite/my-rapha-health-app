import React from "react";
import { Eye } from "lucide-react";

const risks = [
  {
    employee: "Sarah Johnson",
    employer: "Tech Solutions",
    condition: "Diabetes",
    riskScore: 8.7,
    lastChange: "2h ago",
  },
  {
    employee: "Michael Lee",
    employer: "HealthWorks",
    condition: "Hypertension",
    riskScore: 7.9,
    lastChange: "1d ago",
  },
  {
    employee: "Ava Martinez",
    employer: "Bright Future Inc.",
    condition: "Asthma",
    riskScore: 7.5,
    lastChange: "3d ago",
  },
  {
    employee: "James Brown",
    employer: "NextGen Systems",
    condition: "COPD",
    riskScore: 8.2,
    lastChange: "5h ago",
  },
  {
    employee: "Olivia Wilson",
    employer: "GreenTech",
    condition: "Obesity",
    riskScore: 7.0,
    lastChange: "6h ago",
  },
];

const TopEmergingRisks = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Top Emerging Risks
      </h2>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <table className="min-w-full text-sm text-gray-700 dark:text-gray-300">
          <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100">
            <tr>
              <th className="px-4 py-2 text-left font-semibold">Employee</th>
              <th className="px-4 py-2 text-left font-semibold">Employer</th>
              <th className="px-4 py-2 text-left font-semibold">Condition</th>
              <th className="px-4 py-2 text-left font-semibold">Risk Score</th>
              <th className="px-4 py-2 text-left font-semibold">Last Change</th>
              <th className="px-4 py-2 text-left font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {risks.map((risk, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
              >
                <td className="px-4 py-2">{risk.employee}</td>
                <td className="px-4 py-2">{risk.employer}</td>
                <td className="px-4 py-2">{risk.condition}</td>
                <td className="px-4 py-2 font-semibold text-red-600 dark:text-red-400">
                  {risk.riskScore}
                </td>
                <td className="px-4 py-2">{risk.lastChange}</td>
                <td className="px-4 py-2 text-center">
                  <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                    <Eye className="w-4 h-4 text-purple-600" />
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
