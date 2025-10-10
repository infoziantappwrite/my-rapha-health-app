import React, { useState } from "react";
import ActionDropdown from "./ActionDropdown";
import RollbackPopup from "./RollbackPopup";
import HistoryPopup from "./HistoryPopup";

const sampleData = [
  { id: "CNT-001", module: "Mental Health Awareness", version: "v2.3", status: "Published", checksum: "a7b2c3d4e5f6", history: ["v2.3", "v2.2", "v2.1"], lastModified: "2025-12-25", author: "Dr. Sarah Wilson" },
  { id: "CNT-002", module: "Workplace Safety", version: "v1.8", status: "Draft", checksum: "b6c3d4e5f7g8", history: ["v1.8", "v1.7"], lastModified: "2025-12-20", author: "John Doe" },
  { id: "CNT-003", module: "Nutrition Tips", version: "v3.0", status: "Published", checksum: "c9d8e7f6g5h4", history: ["v3.0", "v2.9", "v2.8"], lastModified: "2025-12-15", author: "Jane Smith" },
  { id: "CNT-004", module: "Exercise Routines", version: "v1.5", status: "Archived", checksum: "d4e5f6g7h8i9", history: ["v1.5", "v1.4"], lastModified: "2025-11-30", author: "Alex Johnson" },
  { id: "CNT-005", module: "Stress Management", version: "v2.0", status: "Published", checksum: "e5f6g7h8i9j0", history: ["v2.0", "v1.9", "v1.8"], lastModified: "2025-12-10", author: "Emily Davis" },
];

const statusColors = {
  Published: "bg-green-50 text-green-700 border-green-200",
  Draft: "bg-yellow-50 text-yellow-700 border-yellow-200",
  Archived: "bg-gray-100 text-gray-600 border-gray-300",
};

export default function CMSDashboardTable() {
  const [selectedRow, setSelectedRow] = useState(null);
  const [showRollbackPopup, setShowRollbackPopup] = useState(false);
  const [showHistoryPopup, setShowHistoryPopup] = useState(false);

  const handleRollbackConfirm = () => {
    setShowRollbackPopup(false);
    setSelectedRow(null);
  };

  const handleRollbackClose = () => {
    setShowRollbackPopup(false);
    setSelectedRow(null);
  };

  const handleHistoryClose = () => {
    setShowHistoryPopup(false);
    setSelectedRow(null);
  };

  return (
    <div className="my-6">
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-xl border border-gray-300 dark:border-gray-700 shadow-md overflow-hidden flex flex-col">
        <div className="px-6 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-xl">
          <h4 className="text-lg font-semibold">CMS Governance Dashboard</h4>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm table-auto border-collapse border-y border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="border-b border-gray-300 dark:border-gray-700">
                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Content ID</th>
                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Module</th>
                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Version</th>
                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Status</th>
                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Checksum</th>
                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Version History</th>
                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Last Modified</th>
                <th className="px-2 py-4 text-left font-medium min-w-[100px]">Author</th>
                <th className="px-2 py-4 text-left w-12"></th>
              </tr>
            </thead>
            <tbody>
              {sampleData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors border-b border-gray-300 dark:border-gray-700">
                  <td className="px-2 py-2 font-mono">{row.id}</td>
                  <td className="px-2 py-2 font-medium truncate">{row.module}</td>
                  <td className="px-2 py-2 font-mono">{row.version}</td>
                  <td className="px-2 py-2">
                    <span className={`inline-flex items-center gap-1 border rounded-md px-2 py-0.5 text-xs border-gray-300 dark:border-gray-700 ${statusColors[row.status]}`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-2 py-2 font-mono truncate">{row.checksum}</td>
                  <td className="px-2 py-2">
                    <div className="flex gap-1 flex-wrap">
                      {row.history.slice(0, 2).map((v, idx) => (
                        <button key={idx} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">{v}</button>
                      ))}
                      {row.history.length > 2 && (
                        <button className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">+{row.history.length - 2}</button>
                      )}
                    </div>
                  </td>
                  <td className="px-2 py-2 text-sm">{row.lastModified}</td>
                  <td className="px-2 py-2 text-sm truncate">{row.author}</td>
                  <td className="px-2 py-2">
                    <ActionDropdown
                      onRollback={() => {
                        setSelectedRow(row);
                        setShowRollbackPopup(true);
                      }}
                      onViewHistory={() => {
                        setSelectedRow(row);
                        setShowHistoryPopup(true);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showRollbackPopup && selectedRow && (
  <RollbackPopup
    row={selectedRow}
    onClose={handleRollbackClose}
    onConfirm={handleRollbackConfirm}
  />
)}

{showHistoryPopup && selectedRow && (
  <HistoryPopup
    row={selectedRow}
    onClose={handleHistoryClose}
  />
)}

    </div>
  );
}
