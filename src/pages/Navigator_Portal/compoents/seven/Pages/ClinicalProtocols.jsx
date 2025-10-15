import React, { useState } from "react";
import { Heart, Thermometer, Activity, ShieldCheck, ArrowLeft } from "lucide-react";

const categories = [
  { name: "Cardiology", count: 24, icon: <Heart size={18} /> },
  { name: "Endocrine", count: 18, icon: <Thermometer size={18} /> },
  { name: "Oncology", count: 32, icon: <Activity size={18} /> },
  { name: "Preventive", count: 15, icon: <ShieldCheck size={18} /> },
];

const protocolsData = {
  Cardiology: [
    { title: "Hypertension Management", version: "v2.1", updated: "2024-01-10", status: "Active" },
    { title: "Cardiac Risk Assessment", version: "v1.8", updated: "2024-01-08", status: "Active" },
    { title: "Heart Failure Follow-up", version: "v3.0", updated: "2024-01-05", status: "Active" },
    { title: "Cholesterol Management", version: "v2.3", updated: "2024-01-02", status: "Active" },
  ],
  Endocrine: [
    { title: "Diabetes Care", version: "v1.5", updated: "2024-01-07", status: "Active" },
    { title: "Thyroid Management", version: "v2.0", updated: "2024-01-03", status: "Active" },
  ],
  Oncology: [
    { title: "Breast Cancer Screening", version: "v2.2", updated: "2024-01-06", status: "Active" },
  ],
  Preventive: [
    { title: "Vaccination Schedule", version: "v1.0", updated: "2024-01-09", status: "Active" },
  ],
};

const ClinicalProtocols = ({ onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState("Cardiology");

  return (
    <div className="font-sans bg-gray-100 dark:bg-gray-900 min-h-screen transition-colors duration-300 rounded-xl">
      {/* Back Button */}
      <div className="flex justify-end mb-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 font-medium border border-purple-200 px-3 py-1.5 rounded-md shadow-sm hover:bg-purple-50 transition"
        >
          <ArrowLeft size={16} /> Back
        </button>
      </div>

      {/* Main Content */}
      <div className="flex gap-6 h-[500px]">
        {/* Left Column: Categories */}
        <div className="w-1/4 overflow-y-auto space-y-3 rounded-xl shadow-md p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.name;
            return (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(cat.name)}
                className={`flex items-center w-full px-4 py-2 border-l-4 rounded-lg transition-all duration-200 mb-2
                  ${isActive
                    ? "border-purple-500 text-purple-600 dark:text-purple-400 font-semibold bg-gray-100 dark:bg-gray-900"
                    : "border-transparent text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
              >
                <span className={`mr-3 ${isActive ? "text-purple-500 dark:text-purple-400" : "text-gray-500 dark:text-gray-400"}`}>
                  {cat.icon}
                </span>
                <span className="flex-1">{cat.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{cat.count}</span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Protocols */}
        <div className="w-3/4 overflow-y-auto space-y-3 rounded-xl shadow-md p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
          {protocolsData[selectedCategory].map((protocol, idx) => (
            <div
              key={idx}
              className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow flex justify-between items-center border border-gray-200 dark:border-gray-700"
            >
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">{protocol.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Version {protocol.version} &bull; Updated {protocol.updated}
                </p>
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  Click to view protocol details and apply to case
                </p>
              </div>
              <span
                className={`px-2 py-1 text-xs font-medium rounded-full ${
                  protocol.status === "Active"
                    ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {protocol.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClinicalProtocols;
