import React from "react";
import Table from "../Table"; // Make sure you have your Table component
import { ArrowUp, ArrowDown, ArrowRight } from "lucide-react";

const TablePage = () => {
  // Sample data for the table
  const data = [
    { employee: "Sarah Johnson", module: "Heart Health Basics", progress: 89, trend: "up", status: "High" },
    { employee: "Mike Chen", module: "Diabetes Prevention", progress: 76, trend: "down", status: "Medium" },
    { employee: "Emily Davis", module: "Breast Basics", progress: 74, trend: "right", status: "Low" },
    { employee: "James Wilson", module: "Colon Basics", progress: 69, trend: "up", status: "Unknown" },
    { employee: "Olivia Brown", module: "Heart Health Basics", progress: 85, trend: "down", status: "Medium" },
    { employee: "Liam Smith", module: "Diabetes Prevention", progress: 92, trend: "up", status: "High" },
  ];

  // Column definitions
  const columns = [
    { key: "employee", label: "EMPLOYEE" },
    { key: "module", label: "MODULE" },
    { key: "progress", label: "PROGRESS (%)" },
    { key: "trend", label: "TREND", type: "trend" },
    { key: "status", label: "STATUS", type: "status" },
    { key: "actions", label: "ACTIONS", type: "action" },
  ];

  // Map trend icons
  const mapTrend = (trend) => {
    switch (trend) {
      case "up":
        return <ArrowUp className="w-4 h-4 text-green-600" />;
      case "down":
        return <ArrowDown className="w-4 h-4 text-red-600" />;
      default:
        return <ArrowRight className="w-4 h-4 text-gray-500" />;
    }
  };

  // Map status badges
  const mapStatus = (status) => {
    switch (status) {
      case "High":
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-red-600 text-white">High</span>;
      case "Medium":
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-800">Medium</span>;
      case "Low":
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">Low</span>;
      default:
        return <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">Unknown</span>;
    }
  };

  // Transform data for Table component
  const tableData = data.map((row) => ({
    ...row,
    trend: mapTrend(row.trend),
    status: mapStatus(row.status),
  }));

  return <Table data={tableData} columns={columns} title="Module Progress Table" />;
};

export default TablePage;
