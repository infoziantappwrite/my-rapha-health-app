import React, { useState } from "react";
import { CircleCheckBig, Share, Download } from "lucide-react";

const getBadgeColor = (flag) => {
  switch (flag.toLowerCase()) {
    case "green":
      return "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100";
    case "red":
      return "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100";
    case "yellow":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-100";
  }
};

const ResultsTable = () => {
  const [selectedRows, setSelectedRows] = useState([]);

  const data = [
    { id: 1, employee: "Sarah Johnson", modality: "Breast – Mammogram", panelMetric: "BI-RADS 2", collected: "2025-01-14", received: "2025-01-14 09:20", resulted: "2025-01-14 10:05", flag: "Green", status: "Reported", navigator: "Lisa Rodriguez" },
    { id: 2, employee: "Mike Chen", modality: "Prostate – Blood", panelMetric: "PSA 6.2 ng/mL (H)", collected: "2025-01-13", received: "2025-01-13 08:42", resulted: "2025-01-13 09:10", flag: "Red", status: "Reported", navigator: "Sarah Chen" },
    { id: 3, employee: "Emily Davis", modality: "Chest – X-Ray", panelMetric: "Normal", collected: "2025-01-12", received: "2025-01-12 07:55", resulted: "2025-01-12 08:30", flag: "Green", status: "Reported", navigator: "John Smith" },
    { id: 4, employee: "David Lee", modality: "Blood – CBC", panelMetric: "WBC 11.2 (H)", collected: "2025-01-11", received: "2025-01-11 10:20", resulted: "2025-01-11 11:05", flag: "Yellow", status: "Pending", navigator: "Mary Johnson" },
    { id: 5, employee: "Sophia Brown", modality: "Abdomen – Ultrasound", panelMetric: "Normal", collected: "2025-01-10", received: "2025-01-10 09:15", resulted: "2025-01-10 09:50", flag: "Green", status: "Reported", navigator: "Paul Martinez" },
  ];

  const toggleRow = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((row) => row !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr>
              <th className="p-2 w-[40px]">
                <input
                  type="checkbox"
                  checked={selectedRows.length === data.length}
                  onChange={() =>
                    setSelectedRows(
                      selectedRows.length === data.length
                        ? []
                        : data.map((row) => row.id)
                    )
                  }
                />
              </th>
              <th className="p-2">Employee</th>
              <th className="p-2">Modality</th>
              <th className="p-2">Panel / Metric</th>
              <th className="p-2">Collected</th>
              <th className="p-2">Received</th>
              <th className="p-2">Resulted</th>
              <th className="p-2">Flag</th>
              <th className="p-2">Status</th>
              <th className="p-2">Navigator</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr
                key={row.id}
                className={`border-b border-gray-200 dark:border-gray-700 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800`}
              >
                <td className="p-2">
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => toggleRow(row.id)}
                  />
                </td>
                <td className="p-2">{row.employee}</td>
                <td className="p-2">{row.modality}</td>
                <td className="p-2">{row.panelMetric}</td>
                <td className="p-2">{row.collected}</td>
                <td className="p-2">{row.received}</td>
                <td className="p-2">{row.resulted}</td>
                <td className="p-2">
                  <span
                    className={`inline-flex px-2 py-0.5 rounded-md text-xs font-medium ${getBadgeColor(
                      row.flag
                    )}`}
                  >
                    {row.flag}
                  </span>
                </td>
                <td className="p-2">
                  <span className="inline-flex px-2 py-0.5 rounded-md text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100">
                    {row.status}
                  </span>
                </td>
                <td className="p-2">{row.navigator}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Action Card */}
      {selectedRows.length > 0 && (
        <div className="text-card-foreground flex flex-col gap-6 rounded-xl border border-blue-500 bg-blue-50 dark:bg-blue-900 dark:border-blue-400">
          <div className="[&:last-child]:pb-6 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">{selectedRows.length} rows selected</span>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center justify-center gap-1.5 text-sm font-medium px-3 h-8 rounded-md border bg-background dark:bg-input/30 hover:bg-accent hover:text-accent-foreground dark:hover:bg-input/50">
                  <CircleCheckBig className="w-4 h-4" /> Accept Selected
                </button>
                <button className="inline-flex items-center justify-center gap-1.5 text-sm font-medium px-3 h-8 rounded-md border bg-background dark:bg-input/30 hover:bg-accent hover:text-accent-foreground dark:hover:bg-input/50">
                  <Share className="w-4 h-4" /> Share Selected
                </button>
                <button className="inline-flex items-center justify-center gap-1.5 text-sm font-medium px-3 h-8 rounded-md border bg-background dark:bg-input/30 hover:bg-accent hover:text-accent-foreground dark:hover:bg-input/50">
                  <Download className="w-4 h-4" /> Export Selected
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultsTable;
