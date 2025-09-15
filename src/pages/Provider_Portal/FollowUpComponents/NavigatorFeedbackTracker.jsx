import React from "react";
import { UserCog, Clock, FileText } from "lucide-react";

const feedbackData = [
  {
    initials: "MW",
    doctor: "Dr. Mark Wilson",
    patient: "Robert Anderson",
    status: "in progress",
    statusColor: "bg-blue-100 text-blue-800",
    resolutionETA: "2025-01-24 2:00 PM",
    latestNote: "Contacted urologist, appointment scheduled for tomorrow morning",
    noteTime: "10:30 AM",
  },
  {
    initials: "LR",
    doctor: "Dr. Lisa Rodriguez",
    patient: "Maria Gonzalez",
    status: "pending",
    statusColor: "bg-yellow-100 text-yellow-800",
    resolutionETA: "2025-01-24 4:00 PM",
    latestNote: "Reviewing imaging results with radiologist",
    noteTime: "9:15 AM",
  },
  {
    initials: "SC",
    doctor: "Dr. Sarah Chen",
    patient: "James Wilson",
    status: "resolved",
    statusColor: "bg-green-100 text-green-800",
    resolutionETA: "2025-01-24 11:00 AM",
    latestNote: "Cardiologist consultation scheduled, patient notified",
    noteTime: "10:00 AM",
  },
];

const NavigatorFeedbackTracker = () => {
  return (
    <div className="space-y-6 border border-gray-300 dark:border-gray-700 p-6 rounded-xl bg-white dark:bg-gray-800">
      {/* Main Title Card */}
      <div className="bg-card text-card-foreground flex items-center gap-3 p-6 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm">
        <UserCog className="h-6 w-6 text-blue-600" />
        <h2 className="text-lg font-semibold">Navigator Feedback Tracker</h2>
      </div>

      {/* Feedback Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedbackData.map((item, index) => (
          <div
            key={index}
            className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border border-gray-300 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-200"
          >
            <div className="p-4 space-y-3">
              {/* Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <span className="relative flex w-10 h-10 shrink-0 overflow-hidden rounded-full bg-blue-100 text-blue-600 items-center justify-center font-semibold">
                    {item.initials}
                  </span>
                  <div>
                    <div className="font-medium">{item.doctor}</div>
                    <div className="text-sm text-gray-500">{item.patient}</div>
                  </div>
                </div>
                <span
                  className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 ${item.statusColor}`}
                >
                  {item.status}
                </span>
              </div>

              {/* Body */}
              <div className="space-y-2">
                <div className="flex items-center text-sm text-gray-500 gap-1">
                  <Clock className="h-4 w-4" />
                  <span>Resolution ETA:</span>
                  <span className="font-medium text-gray-700 dark:text-gray-200">{item.resolutionETA}</span>
                </div>
                <div>
                  <div className="flex items-center text-sm text-gray-500 gap-1 mb-1">
                    <FileText className="h-4 w-4" />
                    <span>Latest Note:</span>
                  </div>
                  <div className="text-sm bg-gray-50 dark:bg-gray-800 p-2 rounded">{item.latestNote}</div>
                  <div className="text-xs text-gray-400 mt-1">{item.noteTime}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigatorFeedbackTracker;
