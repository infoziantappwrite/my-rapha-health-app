import React from "react";
import { Eye, FileText, FileJson, ArrowLeft } from "lucide-react";

const auditData = [
  {
    time: "2024-01-15 14:23",
    actor: "Lisa Rodriguez",
    action: "UPDATE",
    object: "Patient Record: Sarah Johnson",
    result: "SUCCESS",
    meta: "IP: 192.168.1.100",
  },
  {
    time: "2024-01-15 14:20",
    actor: "Sarah Chen",
    action: "CREATE",
    object: "Case: Risk Assessment #1234",
    result: "SUCCESS",
    meta: "Session: sess_abc123",
  },
  {
    time: "2024-01-15 14:18",
    actor: "Mike Johnson",
    action: "DELETE",
    object: "Message Thread: Medication Query",
    result: "FAILED",
    meta: "Error: Permission denied",
  },
  {
    time: "2024-01-15 14:15",
    actor: "System",
    action: "EXPORT",
    object: "Report: Weekly Summary",
    result: "SUCCESS",
    meta: "Size: 1.2MB",
  },
  {
    time: "2024-01-15 14:12",
    actor: "Dr. Emily Davis",
    action: "VIEW",
    object: "Protocol: Hypertension Management",
    result: "SUCCESS",
    meta: "Duration: 2.3s",
  },
  {
    time: "2024-01-14 16:45",
    actor: "John Smith",
    action: "UPDATE",
    object: "Patient Record: Michael Brown",
    result: "SUCCESS",
    meta: "IP: 192.168.1.101",
  },
  {
    time: "2024-01-14 16:30",
    actor: "System",
    action: "IMPORT",
    object: "Data: Lab Results Batch #45",
    result: "SUCCESS",
    meta: "Rows: 120",
  },
  {
    time: "2024-01-14 16:15",
    actor: "Sarah Chen",
    action: "VIEW",
    object: "Case: Risk Assessment #1235",
    result: "SUCCESS",
    meta: "Duration: 1.8s",
  },
  {
    time: "2024-01-14 16:00",
    actor: "Mike Johnson",
    action: "DELETE",
    object: "Message Thread: Appointment Query",
    result: "FAILED",
    meta: "Error: Permission denied",
  },
  {
    time: "2024-01-14 15:45",
    actor: "System",
    action: "EXPORT",
    object: "Report: Daily Summary",
    result: "SUCCESS",
    meta: "Size: 900KB",
  },
  {
    time: "2024-01-14 15:30",
    actor: "Dr. Emily Davis",
    action: "UPDATE",
    object: "Protocol: Diabetes Care",
    result: "SUCCESS",
    meta: "IP: 192.168.1.102",
  },
  {
    time: "2024-01-14 15:15",
    actor: "Lisa Rodriguez",
    action: "CREATE",
    object: "Patient Record: Anna Lee",
    result: "SUCCESS",
    meta: "Session: sess_def456",
  },
  {
    time: "2024-01-14 15:00",
    actor: "John Smith",
    action: "VIEW",
    object: "Lab Result: CBC Panel",
    result: "SUCCESS",
    meta: "Duration: 2.1s",
  },
  {
    time: "2024-01-14 14:45",
    actor: "Mike Johnson",
    action: "DELETE",
    object: "Case: Risk Assessment #1236",
    result: "FAILED",
    meta: "Error: Permission denied",
  },
  {
    time: "2024-01-14 14:30",
    actor: "System",
    action: "EXPORT",
    object: "Report: Monthly Summary",
    result: "SUCCESS",
    meta: "Size: 2.4MB",
  },
];



const AuditTrail = ({ onBack }) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen rounded-xl">
      {/* Header */}
      {/* Top Bar with Right-Aligned Back Button */}
      <div className="flex justify-end">
        <button
          onClick={onBack}
          className="flex items-center mb-4 gap-2 text-sm text-purple-600 hover:text-purple-800 font-medium border border-purple-200 px-3 py-1.5 rounded-md shadow-sm hover:bg-purple-50 transition"
        >
          <ArrowLeft size={16} /> Back
        </button>
      </div>

      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
          Audit Events
        </h2>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
            <FileText size={16} /> Export CSV
          </button>
          <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition">
            <FileJson size={16} /> Export JSON
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg shadow-md bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-700">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Time
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actor
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Action
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Object
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Result
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Meta
              </th>
              <th className="px-4 py-2 text-center text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700 max-h-[500px] overflow-y-auto">
            {auditData.map((item, idx) => (
              <tr key={idx} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition">
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{item.time}</td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{item.actor}</td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{item.action}</td>
                <td className="px-4 py-2 text-sm text-gray-700 dark:text-gray-200">{item.object}</td>
                <td className={`px-4 py-2 text-sm font-medium ${
                  item.result === "SUCCESS"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}>{item.result}</td>
                <td className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400">{item.meta}</td>
                <td className="px-4 py-2 text-center">
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition">
                    <Eye size={18} />
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

export default AuditTrail;
