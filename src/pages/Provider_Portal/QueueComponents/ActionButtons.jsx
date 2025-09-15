import React, { useState } from "react";
import { Eye, Printer, Flag, CheckCircle, X } from "lucide-react";
import NotificationToast from "../../../components/NotificationToast";

const EmployeeDialog = ({ employee, onClose }) => {
  if (!employee) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white dark:bg-gray-900 rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg w-full max-w-lg p-6 relative">
        {/* Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-300 font-bold">
            {employee.initials}
          </div>
          <div>
            <h2 className="text-lg font-semibold">{employee.name}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">{employee.id}</p>
          </div>
        </div>

        {/* Details */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-gray-500">QR Code:</span>
            <div className="font-medium">QR-{employee.id}-240125</div>
          </div>
          <div>
            <span className="text-gray-500">Navigator:</span>
            <div className="font-medium">{employee.navigator}</div>
          </div>
        </div>

        {/* Notes */}
        <div className="mt-4">
          <span className="text-gray-500 text-sm">Notes:</span>
          <div className="p-3 bg-blue-50 dark:bg-blue-800 rounded mt-1 text-sm">
            Family history of heart disease
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
        >
          <X size={20} />
        </button>
        <div className="mt-6 text-right">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

const ActionButtons = ({ employee }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);

  const pushNotification = (title, content) => {
    setNotifications((prev) => [...prev, { title, content }]);
  };

  const handleCloseNotification = (index) => {
    setNotifications((prev) => prev.filter((_, i) => i !== index));
  };

  // ✅ Auto-decide if Check In button should show
  const shouldShowCheckIn =
    employee.status?.toLowerCase() === "scheduled" || employee.showCheckIn;

  return (
    <>
      <div className="flex space-x-2">
        {/* Eye → open popup */}
        <button
          onClick={() => setDialogOpen(true)}
          className="p-1 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900 rounded"
        >
          <Eye size={18} />
        </button>

        {/* Printer → notification */}
        <button
          onClick={() =>
            pushNotification("Information", `🏷️ Label printed for ${employee.name}`)
          }
          className="p-1 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
        >
          <Printer size={18} />
        </button>

        {/* Flag → notification */}
        <button
          onClick={() =>
            pushNotification("Warning", `🚩 ${employee.name} flagged for follow-up`)
          }
          className="p-1 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900 rounded"
        >
          <Flag size={18} />
        </button>

        {/* ✅ Check In → notification */}
        {shouldShowCheckIn && (
          <button
            onClick={() =>
              pushNotification("Action Complete", `✅ ${employee.name} checked in`)
            }
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium text-green-700 dark:text-green-300 bg-green-100 dark:bg-green-900 rounded-md hover:opacity-80"
          >
            <CheckCircle size={14} />
            Check In
          </button>
        )}
      </div>

      {/* Dialog */}
      {dialogOpen && (
        <EmployeeDialog employee={employee} onClose={() => setDialogOpen(false)} />
      )}

      {/* Notifications */}
      {notifications.map((n, i) => (
        <NotificationToast
          key={i}
          title={n.title}
          content={n.content}
          onClose={() => handleCloseNotification(i)}
        />
      ))}
    </>
  );
};

export default ActionButtons;
