import { X } from "lucide-react";

export default function ScheduleModal({ screening, onClose, onConfirm }) {
  if (!screening) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally collect form data here (date, time, etc.)
    onConfirm(screening);
    onClose(); // ✅ Automatically close after confirming
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md shadow-lg border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Schedule {screening.title}
          </h3>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Please provide the details below to book your {screening.title}.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs text-gray-500 dark:text-gray-400">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5 text-sm
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                         focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="text-xs text-gray-500 dark:text-gray-400">
              Preferred Time
            </label>
            <input
              type="time"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5 text-sm
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                         focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              required
            />
          </div>

          <div>
            <label className="text-xs text-gray-500 dark:text-gray-400">
              Center / Location
            </label>
            <input
              type="text"
              placeholder="Enter center name"
              className="w-full border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1.5 text-sm
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition"
              required
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-2 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              onClick={onClose}
              className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-1.5 rounded-md text-sm transition"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
