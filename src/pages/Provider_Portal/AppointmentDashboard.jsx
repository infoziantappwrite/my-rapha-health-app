import React from "react";
import { Calendar, ChevronDown, Plus, RefreshCw } from "lucide-react";


const appointments = [
  {
    time: "8:00 AM",
    name: "Jennifer Martinez",
    service: "Blood + Mammogram",
    status: "in progress",
    statusColor: "bg-amber-100 text-amber-800",
  },
  {
    time: "8:30 AM",
    name: "Michael Thompson",
    service: "Blood Draw",
    status: "completed",
    statusColor: "bg-green-100 text-green-800",
  },
  {
    time: "9:00 AM",
    name: "Sarah Kim",
    service: "Mammogram",
    status: "checked in",
    statusColor: "bg-blue-100 text-blue-800",
  },
  {
    time: "9:30 AM",
    name: "David Johnson",
    service: "Blood Draw",
    status: "scheduled",
    statusColor: "bg-gray-100 text-gray-800",
  },
  {
    time: "10:00 AM",
    name: "Amanda Foster",
    service: "Blood + Mammogram",
    status: "scheduled",
    statusColor: "bg-gray-100 text-gray-800",
  },
];

const AppointmentDashboard = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      {/* Appointment Coordination Card */}
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-600 p-6">
        <div className="flex items-center justify-between">
          <h4 className="flex items-center space-x-2 text-lg font-semibold">
            <Calendar className="h-6 w-6 text-blue-600" />
            <span>Appointment Coordination</span>
          </h4>
          <div className="flex space-x-2">
            <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium px-4 py-2 h-9 bg-blue-600 hover:bg-blue-700 text-white">
              Daily
            </button>
            <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium px-4 py-2 h-9 border bg-gray-50 dark:bg-gray-700 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100">
              Weekly
            </button>
          </div>
        </div>

        {/* Filters & Add Button */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <select className="w-full h-9 px-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <option>All Locations</option>
          </select>
          <select className="w-full h-9 px-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <option>All Modalities</option>
          </select>
          <select className="w-full h-9 px-3 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <option>Dr. Sarah Chen</option>
          </select>
          <button className="inline-flex items-center justify-center gap-2 px-4 py-2 h-9 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            <Plus className="h-4 w-4" />
            Add Appointment
          </button>
        </div>
      </div>

      {/* Daily Schedule Card */}
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-600 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">January 24, 2025 - Daily Schedule</h3>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 text-xs font-medium rounded-md bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200">
              5/6 slots filled
            </span>
            <button className="inline-flex items-center gap-1 px-3 h-8 rounded-md border bg-gray-50 dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-600">
              <RefreshCw className="h-3 w-3" />
              Refresh
            </button>
          </div>
        </div>

        {/* Appointments List */}
        <div className="space-y-2">
          {appointments.map((apt, i) => (
            <div
              key={i}
              className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all cursor-pointer border-blue-200 dark:border-blue-700 bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800`}
            >
              <div className="flex items-center space-x-4">
                <div className="text-lg font-semibold text-blue-600 dark:text-blue-400">{apt.time}</div>
                <div>
                  <div className="font-medium">{apt.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-300">{apt.service}</div>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <span
                  className={`inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded-md ${apt.statusColor}`}
                >
                  {apt.status}
                </span>
                {apt.status === "Available Slot" && (
                  <button className="inline-flex items-center gap-1 px-3 h-8 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    <Plus className="h-3 w-3" /> Book
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Capacity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-600 p-6">
          <h4 className="text-lg font-semibold">Blood Draw Capacity</h4>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Current Utilization:</span>
              <span className="font-medium">4/6 slots</span>
            </div>
            <div className="w-full h-2 bg-blue-200 dark:bg-blue-700 rounded-full overflow-hidden relative">
              <div
                className="bg-blue-600 h-full transition-all"
                style={{ width: "66%" }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">2 slots available today</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-600 p-6">
          <h4 className="text-lg font-semibold">Mammogram Capacity</h4>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Current Utilization:</span>
              <span className="font-medium">3/4 slots</span>
            </div>
            <div className="w-full h-2 bg-blue-200 dark:bg-blue-700 rounded-full overflow-hidden relative">
              <div
                className="bg-blue-600 h-full transition-all"
                style={{ width: "75%" }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">1 slot available today</div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-600 p-6">
          <h4 className="text-lg font-semibold">Overall Efficiency</h4>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Daily Completion Rate:</span>
              <span className="font-medium">83%</span>
            </div>
            <div className="w-full h-2 bg-blue-200 dark:bg-blue-700 rounded-full overflow-hidden relative">
              <div
                className="bg-blue-600 h-full transition-all"
                style={{ width: "83%" }}
              ></div>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">Above target (80%)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentDashboard;
