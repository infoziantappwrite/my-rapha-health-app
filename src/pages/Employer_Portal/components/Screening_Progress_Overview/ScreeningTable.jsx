import React, { useState } from "react";
import DiseaseModal from "./DiseaseModal";
const screeningData = [
  {
    disease: "Breast Cancer",
    modalities: ["Mammogram", "Ultrasound"],
    screenings: 234,
    completion: 92,
    status: "Excellent",
    statusColor: "green",
    detected: 12,
    highRisk: 3,
    trend: "+2% vs last quarter",
  },
  {
    disease: "Prostate Cancer",
    modalities: ["PSA Test"],
    screenings: 210,
    completion: 88,
    status: "Good",
    statusColor: "blue",
    detected: 9,
    highRisk: 4,
    trend: "-1% vs last quarter",
  },
  {
    disease: "Colon Cancer",
    modalities: ["Guardant Shield", "Colonoscopy"],
    screenings: 175,
    completion: 76,
    status: "Needs Focus",
    statusColor: "red",
    detected: 6,
    highRisk: 23,
    trend: "-3% vs last quarter",
  },
  {
    disease: "Heart Disease",
    modalities: ["Lipid Panel", "Blood Pressure", "ECG"],
    screenings: 192,
    completion: 83,
    status: "Good",
    statusColor: "blue",
    detected: 15,
    highRisk: 7,
    trend: "+1% vs last quarter",
  },
  {
    disease: "Diabetes",
    modalities: ["A1C", "Fasting Glucose"],
    screenings: 185,
    completion: 79,
    status: "Moderate",
    statusColor: "yellow",
    detected: 10,
    highRisk: 5,
    trend: "-2% vs last quarter",
  },
];
import NotificationToast from "../../../../components/NotificationToast";


const Badge = ({ children }) => (
  <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 font-medium text-xs text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800">
    {children}
  </span>
);

const StatusBadge = ({ status, color }) => {
  const colors = {
    green: "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-200",
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-800 dark:text-blue-200",
    red: "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-200",
    yellow: "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-200",
  };
  return (
    <span
      className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 ${colors[color]}`}
    >
      {status}
    </span>
  );
};


// -------------------- Main Table --------------------
export default function ScreeningTable() {
  const [selectedDisease, setSelectedDisease] = useState(null);
   const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    setShowToast(true);
    setTimeout(() => setShowToast(false), 4000); // auto-close after 4s
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm">
      {/* Card Header */}
      <div className="px-6 p-3 flex items-center justify-between border-b border-gray-300 dark:border-gray-700">
        <h4 className="text-lg font-medium leading-none">Screening by Disease Type</h4>
            <button  onClick={handleClick} className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-700 h-8 rounded-md gap-1.5 px-3 border-gray-300 dark:border-gray-700">
            📨 Message Rapha Team
            </button>
      </div>

      {/* Table */}
      <div className="px-6 pb-6 overflow-x-auto">
        <table className="w-full text-sm border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-50 dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
              <th className="text-left px-2 py-3 font-medium">Disease</th>
              <th className="text-left px-2 py-3 font-medium">Modalities</th>
              <th className="text-left px-2 py-3 font-medium">Screenings</th>
              <th className="text-left px-2 py-3 font-medium">Completion %</th>
              <th className="text-left px-2 py-3 font-medium">Status</th>
              <th className="text-left px-2 py-3 font-medium">Actions</th>
            </tr>
          </thead>

          <tbody>
            {screeningData.map((item, idx) => (
              <tr
                key={idx}
                className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <td className="p-2 font-medium">{item.disease}</td>
                <td className="p-2">
                  <div className="flex flex-wrap gap-1">
                    {item.modalities.map((mod, i) => (
                      <Badge key={i}>{mod}</Badge>
                    ))}
                  </div>
                </td>
                <td className="p-2">{item.screenings}</td>
                <td className="p-2">
                  <div className="flex items-center space-x-2">
                    <div className="bg-gray-200 dark:bg-gray-700 relative overflow-hidden rounded-full w-16 h-2">
                      <div
                        className="bg-blue-600 h-full flex-1 transition-all"
                        style={{ transform: `translateX(-${100 - item.completion}%)` }}
                      ></div>
                    </div>
                    <span>{item.completion}%</span>
                  </div>
                </td>
                <td className="p-2">
                  <StatusBadge status={item.status} color={item.statusColor} />
                </td>
                <td className="p-2">
                  <button
                    onClick={() => setSelectedDisease(item)}
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all border bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 hover:bg-blue-50 dark:hover:bg-blue-700 h-8 rounded-md gap-1.5 px-3 border-gray-300 dark:border-gray-700"
                  >
                    👁️ View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {selectedDisease && (
        <DiseaseModal disease={selectedDisease} onClose={() => setSelectedDisease(null)} />
      )}
      {showToast && (
        <NotificationToast
          title="ℹ️ Information"
          content="Messaging Rapha team for screening optimization insights"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
