import React, { useState } from "react";
import {
  Search,
  BarChart2,
  MessageCircle,
  ListChecks,
  AlertTriangle,
  Clock,
  FileText,
  PhoneCall,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const Highlight = () => {
  const [open, setOpen] = useState(false);

  const highlights = [
    {
      id: 1,
      title: "Red-Level Cases",
      value: 5,
      description: "Critical risk employees requiring immediate attention",
      color: "text-red-600 dark:text-red-400",
      border: "border-red-200 dark:border-red-700",
      bg: "bg-red-100 dark:bg-red-900/30",
      icon: <AlertTriangle className="h-6 w-6 text-red-500 dark:text-red-400" />,
    },
    {
      id: 2,
      title: "Follow-Ups Due",
      value: 12,
      description: "Employees with pending follow-up actions",
      color: "text-yellow-600 dark:text-yellow-400",
      border: "border-yellow-200 dark:border-yellow-700",
      bg: "bg-yellow-100 dark:bg-yellow-900/30",
      icon: <Clock className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />,
    },
    {
      id: 3,
      title: "Pending Results",
      value: 18,
      description: "Test results awaiting Navigator review",
      color: "text-blue-600 dark:text-blue-400",
      border: "border-blue-200 dark:border-blue-700",
      bg: "bg-blue-100 dark:bg-blue-900/30",
      icon: <FileText className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
    },
    {
      id: 4,
      title: "Unread Messages",
      value: 12,
      description: "New messages from employees requiring response",
      color: "text-purple-600 dark:text-purple-400",
      border: "border-purple-200 dark:border-purple-700",
      bg: "bg-purple-100 dark:bg-purple-900/30",
      icon: <MessageCircle className="h-6 w-6 text-purple-500 dark:text-purple-400" />,
    },
  ];

  const highlightsRates = [
    {
      id: 1,
      title: "Total Queue",
      value: 5,
      color: "text-blue-600 dark:text-blue-400",
      bg: "bg-blue-100 dark:bg-blue-900/30 border-blue-100 dark:border-blue-700",
      icon: <ListChecks className="h-6 w-6 text-blue-500 dark:text-blue-400" />,
    },
    {
      id: 2,
      title: "High Risk",
      value: 2,
      color: "text-red-600 dark:text-red-400",
      bg: "bg-red-100 dark:bg-red-900/30 border-red-100 dark:border-red-700",
      icon: <AlertTriangle className="h-6 w-6 text-red-500 dark:text-red-400" />,
    },
    {
      id: 3,
      title: "Needs Contact",
      value: 1,
      color: "text-yellow-600 dark:text-yellow-400",
      bg: "bg-yellow-100 dark:bg-yellow-900/30 border-yellow-100 dark:border-yellow-700",
      icon: <PhoneCall className="h-6 w-6 text-yellow-500 dark:text-yellow-400" />,
    },
    {
      id: 4,
      title: "On Track",
      value: 3,
      color: "text-green-600 dark:text-green-400",
      bg: "bg-green-100 dark:bg-green-900/30 border-green-100 dark:border-green-700",
      icon: <CheckCircle2 className="h-6 w-6 text-green-500 dark:text-green-400" />,
    },
  ];

  return (
    <div className="space-y-6 mt-5">
      {/* Top highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {highlights.map((item) => (
          <div
            key={item.id}
            className={`p-4 rounded-xl shadow-sm bg-white dark:bg-gray-900 border ${item.border} transition-colors duration-300`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {item.title}
                </h2>
                <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
              </div>
              <div className={`p-2 rounded-full shadow ${item.bg}`}>
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search bar + buttons row */}
      <div className="flex justify-end">
        <div className="inline-flex flex-col sm:flex-row items-center justify-start gap-3 p-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg shadow-sm transition-colors duration-300">
          {/* Search bar */}
          <div className="relative w-64">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-500" />
            <input
              type="text"
              placeholder="Search by name/condition"
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm text-gray-700 dark:text-gray-200 transition-colors duration-300"
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium shadow-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
              <BarChart2 className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              Metrics
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium shadow-sm relative text-gray-700 dark:text-gray-200 transition-colors duration-300">
              <MessageCircle className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              Messages
              <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                12
              </span>
            </button>

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium shadow-sm text-gray-700 dark:text-gray-200 transition-colors duration-300">
              <ListChecks className="h-4 w-4 text-gray-600 dark:text-gray-400" />
              My Queue
            </button>
          </div>
        </div>
      </div>

      {/* Summary Grid with 5 items */}
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {highlightsRates.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-xl border ${item.bg} shadow-sm transition-colors duration-300`}
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className={`text-sm font-medium ${item.color}`}>{item.title}</h2>
                  <p className={`text-2xl font-bold ${item.color}`}>{item.value}</p>
                </div>
                <div className="p-2 rounded-full bg-gray-50 dark:bg-gray-800 shadow transition-colors duration-300">
                  {item.icon}
                </div>
              </div>
            </div>
          ))}

          {/* 5th violet dropdown card */}
          <div className="p-4 rounded-xl border border-purple-200 dark:border-purple-700 shadow-sm bg-purple-200 dark:bg-purple-900/30 transition-colors duration-300">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-sm font-medium text-purple-800 dark:text-purple-300">
                  Summarize Employee History
                </h2>

                <button
                  onClick={() => setOpen(!open)}
                  className="mt-2 flex items-center justify-center w-9 h-9 rounded-md border border-purple-200 dark:border-purple-700 bg-purple-50 dark:bg-purple-800 hover:bg-purple-100 dark:hover:bg-purple-700 shadow-sm transition-colors duration-300"
                >
                  {open ? (
                    <ChevronUp className="h-4 w-4 text-purple-600 dark:text-purple-300" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-purple-500 dark:text-purple-300" />
                  )}
                </button>

                {open && (
                  <div className="absolute mt-2 w-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-10 transition-colors duration-300">
                    <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-300">
                      Generate Report
                    </button>
                  </div>
                )}
              </div>

              {/* Icon circle */}
              <div className="p-2 rounded-full bg-purple-100 dark:bg-purple-800 shadow transition-colors duration-300">
                <FileText className="h-6 w-6 text-purple-500 dark:text-purple-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
