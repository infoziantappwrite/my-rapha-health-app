import React, { useState } from "react";
import CardActions from "./CardActions";
import NotificationToast from "../../../components/NotificationToast";
import ChatSidebar from "../ChatSidebar";

const patients = [
  {
    initials: "AS",
    name: "Alice Smith",
    flag: "GREEN FLAG",
    flagColor: "text-green-600",
    type: "Diabetes",
    urgency: "LOW",
    timeElapsed: "3h 30m",
    finding: "Blood sugar levels stable (110 mg/dL)",
    provider: "Dr. Kevin Brown",
    nextStep: "Routine checkup in 6 months",
  },
  {
    initials: "BL",
    name: "Benjamin Lee",
    flag: "YELLOW FLAG",
    flagColor: "text-yellow-600",
    type: "Cardiology",
    urgency: "MODERATE",
    timeElapsed: "2h 20m",
    finding: "Mild arrhythmia detected",
    provider: "Dr. Susan White",
    nextStep: "Schedule ECG follow-up",
  },
  {
    initials: "CT",
    name: "Catherine Turner",
    flag: "RED FLAG",
    flagColor: "text-red-600",
    type: "Neurology",
    urgency: "URGENT",
    timeElapsed: "1h 10m",
    finding: "Severe migraine episodes reported",
    provider: "Dr. Michael Johnson",
    nextStep: "Neurologist consultation immediately",
  },
  {
    initials: "DP",
    name: "David Patel",
    flag: "GREEN FLAG",
    flagColor: "text-green-600",
    type: "Orthopedic",
    urgency: "LOW",
    timeElapsed: "5h 45m",
    finding: "Recovering well post knee surgery",
    provider: "Dr. Laura Kim",
    nextStep: "Physiotherapy scheduled",
  },
  
];


const PatientDashboard = () => {
  const [toast, setToast] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatPatient, setChatPatient] = useState(null);

  const showToast = (title, content) => setToast({ title, content });
  const openChat = (patient) => {
    setChatPatient(patient);
    setChatOpen(true);
  };

  const getFlagIcon = (flag) => {
    if (flag === "RED FLAG") return "🔴";
    if (flag === "YELLOW FLAG") return "🟡";
    return "🟢";
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {patients.map((patient, index) => (
          <div
  key={index}
  className={`flex flex-col gap-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-600 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-200 cursor-pointer border-l-4 ${
    patient.flag === "RED FLAG"
      ? "border-l-red-500 dark:border-l-red-400"
      : patient.flag === "YELLOW FLAG"
      ? "border-l-yellow-500 dark:border-l-yellow-400"
      : patient.flag === "GREEN FLAG"
      ? "border-l-green-500 dark:border-l-green-400"
      : "border-l-gray-300 dark:border-l-gray-600"
  }`}
>

            <div className="p-6">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span className="w-12 h-12 shrink-0 overflow-hidden rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-semibold">
                    {patient.initials}
                  </span>
                  <div>
                    <h3 className="font-semibold text-lg flex items-center gap-2">
                      {patient.name} <span>{getFlagIcon(patient.flag)}</span>
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium bg-red-100 text-red-800 border-red-200">
                        {patient.flag}
                      </span>
                      <span className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium">
                        {patient.type}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-sm font-medium ${patient.flagColor}`}>
                    {patient.urgency}
                  </div>
                  <div className="text-xs text-gray-500">{patient.timeElapsed}</div>
                </div>
              </div>

              {/* Body */}
              <div className="space-y-3 mb-4">
                <div>
                  <span className="text-sm text-gray-500">Finding:</span>
                  <div className="text-sm font-medium">{patient.finding}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Assigned Provider:</span>
                  <div className="text-sm font-medium">{patient.provider}</div>
                </div>
                <div>
                  <span className="text-sm text-gray-500">Suggested Next Step:</span>
                  <div className="text-sm font-medium text-blue-600">{patient.nextStep}</div>
                </div>
              </div>

              {/* Actions */}
              <CardActions
                onAssign={() => showToast("Action Complete", "Assigned to Navigator.")}
                onRoute={() => showToast("Action Complete", "Routing started.")}
                onChat={() => openChat(patient)}
                onMarkResolved={() => showToast("Action Complete", "Marked resolved.")}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Global Notification */}
      {toast && (
        <NotificationToast
          title={toast.title}
          content={toast.content}
          onClose={() => setToast(null)}
        />
      )}

      {/* Global Chat Sidebar */}
      {chatOpen && (
        <ChatSidebar
          patient={chatPatient}
          isOpen={chatOpen}
          onClose={() => setChatOpen(false)}
        />
      )}
    </>
  );
};

export default PatientDashboard;
