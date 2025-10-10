import { useState } from "react";
import ActionButtons from "./ActionButtons";

const employees = [
  {
    id: 1,
    name: "Michael Thompson",
    modality: "Guardant Shield",
    barcode: "GS-240125-001",
    timestamp: "8:50 AM",
    status: "pending label",
    elapsed: "1h 55m",
    followUp: { level: "RED", doctor: "Dr. Mark Wilson", note: "pending-review" },
  },
  {
    id: 2,
    name: "Jennifer Martinez",
    modality: "Blood Draw",
    barcode: "BD-240125-002",
    timestamp: "8:15 AM",
    status: "ready to-ship",
    elapsed: "2h 30m",
    followUp: { level: "YELLOW", doctor: "Dr. Lisa Rodriguez", note: "in-progress" },
  },
  {
    id: 3,
    name: "Sarah Kim",
    modality: "Mammogram",
    barcode: "MM-240125-003",
    timestamp: "9:15 AM",
    status: "completed",
    elapsed: "1h 30m",
    followUp: { level: "RED", doctor: "Dr. Lisa Rodriguez", note: "escalated" },
  },
  {
    id: 4,
    name: "Lisa Wong",
    modality: "Blood Draw",
    barcode: "BD-240125-004",
    timestamp: "7:45 AM",
    status: "shipped",
    elapsed: "3h 00m",
    followUp: { level: "-", doctor: "", note: "" },
  },
];

const SamplesTable = () => {
  const [filter, setFilter] = useState("all");

  const filteredEmployees =
    filter === "all"
      ? employees
      : filter === "pending"
      ? employees.filter((e) => e.status !== "completed" && e.status !== "shipped")
      : employees.filter((e) => e.status === "completed" || e.status === "shipped");

  const getStatusBadge = (status) => {
    if (status === "completed" || status === "shipped")
      return "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300";
    if (status.includes("pending"))
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
    if (status.includes("ready"))
      return "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300";
    return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  };

  const getFollowUpBadge = (level) => {
    if (level === "RED")
      return "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300";
    if (level === "YELLOW")
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300";
    return "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  };

  return (
    <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700">
      {/* Filter Tabs */}
      <div className="flex items-center gap-4 px-6 pt-6 border-b border-gray-300 dark:border-gray-700">
        <button
          className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
            filter === "all"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setFilter("all")}
        >
          All ({employees.length})
        </button>
        <button
          className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
            filter === "pending"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setFilter("pending")}
        >
          Pending (
          {
            employees.filter((e) => e.status !== "completed" && e.status !== "shipped")
              .length
          }
          )
        </button>
        <button
          className={`pb-2 text-sm font-medium border-b-2 transition-colors ${
            filter === "completed"
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
          onClick={() => setFilter("completed")}
        >
          Completed (
          {employees.filter((e) => e.status === "completed" || e.status === "shipped").length}
          )
        </button>
      </div>

      {/* Table */}
      <div className="px-6 pb-6 overflow-x-auto">
        <table className="w-full text-sm border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr className="border-b border-gray-300 dark:border-gray-700">
              <th className="px-3 py-2 text-left whitespace-nowrap">Employee Name</th>
              <th className="px-3 py-2 text-left whitespace-nowrap">Modality</th>
              <th className="px-3 py-2 text-left whitespace-nowrap">Barcode</th>
              <th className="px-3 py-2 text-left whitespace-nowrap">Timestamp</th>
              <th className="px-3 py-2 text-left whitespace-nowrap">Status</th>
              <th className="px-3 py-2 text-left whitespace-nowrap">Time Elapsed</th>
              <th className="px-3 py-2 text-left whitespace-nowrap">Follow-Up Status</th>
              <th className="px-3 py-2 text-left whitespace-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b border-gray-300 dark:border-gray-700 hover:bg-muted/50"
              >
                <td className="p-2 whitespace-nowrap font-medium">{emp.name}</td>
                <td className="p-2 whitespace-nowrap">{emp.modality}</td>
                <td className="p-2 whitespace-nowrap font-mono">{emp.barcode}</td>
                <td className="p-2 whitespace-nowrap">{emp.timestamp}</td>
                <td className="p-2 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-md text-xs capitalize ${getStatusBadge(
                      emp.status
                    )}`}
                  >
                    {emp.status}
                  </span>
                </td>
                <td className="p-2 whitespace-nowrap">{emp.elapsed}</td>
               <td className="p-2 whitespace-nowrap">
  <div className="flex items-center justify-between space-x-4">
    {/* Left: Follow-up badge */}
    {emp.followUp.level !== "-" && (
      <span
        className={`px-2 py-1 rounded-md text-xs capitalize ${getFollowUpBadge(
          emp.followUp.level
        )}`}
      >
        {emp.followUp.level}
      </span>
    )}

    {/* Right: Doctor and note */}
    <div className="text-xs text-gray-600 dark:text-gray-300 text-right">
      {emp.followUp.doctor} <br />
      {emp.followUp.note}
    </div>
  </div>
</td>

                <td className="p-2 whitespace-nowrap">
                  <ActionButtons emp={emp} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SamplesTable;
