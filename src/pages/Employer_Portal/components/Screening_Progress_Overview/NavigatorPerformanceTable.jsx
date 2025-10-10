import React from "react";
import { Star } from "lucide-react"; // Lucide star icon

const navigatorData = [
  {
    name: "Dr. Sarah Chen",
    specialties: ["Oncology", "Genetic Counseling"],
    location: "STL HQ",
    activeCases: 78,
    responseTime: "1.2 hours",
    satisfaction:5,
    successRate: "94%",
    workload: "Optimal",
  },
  {
    name: "Dr. Lisa Park",
    specialties: ["Cardiology", "Preventive Medicine"],
    location: "BJC Site",
    activeCases: 104,
    responseTime: "1.8 hours",
    satisfaction: 3,
    successRate: "91%",
    workload: "High",
  },
  {
    name: "Dr. Michael Torres",
    specialties: ["Endocrinology", "Diabetes Management"],
    location: "Mobile Unit",
    activeCases: 67,
    responseTime: "2.1 hours",
    satisfaction: 4,
    successRate: "89%",
    workload: "Optimal",
  },
  {
    name: "Dr. Jennifer Adams",
    specialties: ["Psychology", "Behavioral Health"],
    location: "STL HQ",
    activeCases: 89,
    responseTime: "1.5 hours",
    satisfaction: 4,
    successRate: "90%",
    workload: "Optimal",
  },
];

const StarRating = ({ rating }) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star
        key={i}
        size={16}
        className={i <= rating ? "text-yellow-400" : "text-gray-300 dark:text-gray-600"}
      />
    );
  }
  return (
    <div className="flex items-center space-x-1">
      {stars} 
      <span className="text-sm ml-1 font-medium">{rating.toFixed(1)}</span>
    </div>
  );
};

const Badge = ({ text, color }) => {
  const colors = {
    green: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100",
    red: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100",
  };
  return (
    <span className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium ${colors[color] || ""}`}>
      {text}
    </span>
  );
};

const NavigatorPerformanceTable = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col gap-4 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm">
      <div className="px-6 pt-6">
        <h4 className="text-lg font-semibold leading-none">Navigator Performance Metrics</h4>
      </div>
      <div className="px-6 pb-6 overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 border-b border-gray-700">
              <th className="text-left px-3 py-2 font-medium border-r border-gray-300 dark:border-gray-600">Navigator</th>
              <th className="text-left px-3 py-2 font-medium border-r border-gray-300 dark:border-gray-600">Specialty</th>
              <th className="text-left px-3 py-2 font-medium border-r border-gray-300 dark:border-gray-600">Location</th>
              <th className="text-left px-3 py-2 font-medium border-r border-gray-300 dark:border-gray-600">Active Cases</th>
              <th className="text-left px-3 py-2 font-medium border-r border-gray-300 dark:border-gray-600">Response Time</th>
              <th className="text-left px-3 py-2 font-medium border-r border-gray-300 dark:border-gray-600">Satisfaction</th>
              <th className="text-left px-3 py-2 font-medium border-r border-gray-300 dark:border-gray-600">Success Rate</th>
              <th className="text-left px-3 py-2 font-medium">Workload</th>
            </tr>
          </thead>
          <tbody>
            {navigatorData.map((nav, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-800 border-b border-gray-300 dark:border-gray-700 transition-colors">
                <td className="px-3 py-2 font-medium border-r border-gray-300 dark:border-gray-600">{nav.name}</td>
                <td className="px-3 py-2 border-r border-gray-300 dark:border-gray-600">
                  <div className="flex flex-wrap gap-1">
                    {nav.specialties.map((spec, i) => (
                      <Badge key={i} text={spec} color="yellow" />
                    ))}
                  </div>
                </td>
                <td className="px-3 py-2 border-r border-gray-300 dark:border-gray-600">{nav.location}</td>
                <td className="px-3 py-2 border-r border-gray-300 dark:border-gray-600">{nav.activeCases}</td>
                <td className="px-3 py-2 border-r border-gray-300 dark:border-gray-600">{nav.responseTime}</td>
                <td className="px-3 py-2 border-r border-gray-300 dark:border-gray-600">
                  <StarRating rating={Math.round(nav.satisfaction)} />
                </td>
                <td className="px-3 py-2 border-r border-gray-300 dark:border-gray-600">{nav.successRate}</td>
                <td className="px-3 py-2">
                  <Badge text={nav.workload} color={nav.workload === "High" ? "red" : "green"} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default NavigatorPerformanceTable;
