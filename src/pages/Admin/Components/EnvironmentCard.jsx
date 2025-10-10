import React, { useState } from "react";
import { Settings, TriangleAlert, X } from "lucide-react";

const EnvironmentCard = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [reason, setReason] = useState("Routine deployment to production environment");
  const [environment, setEnvironment] = useState("mock"); // track current env

  // open dialog before switching
  const handleToggleClick = () => {
    setIsDialogOpen(true);
  };

  // confirm switch
  const handleSwitch = () => {
    const newEnv = environment === "mock" ? "live" : "mock";
    setEnvironment(newEnv);
    setIsDialogOpen(false);
    alert(`Environment switched to ${newEnv.toUpperCase()}!`);
  };

  return (
    <>
      {/* CARD */}
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-200 dark:border-gray-700 h-fit">
        {/* Header */}
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 border-b border-gray-200 dark:border-gray-700">
          <h4 className="leading-none flex items-center gap-2 text-lg font-semibold">
            <Settings className="h-5 w-5 text-blue-600" />
            Environment & Adapter
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            System environment configuration
          </p>
        </div>

        {/* Content */}
        <div className="px-6 pb-6 space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700/40 rounded-lg">
            <div>
              <h4 className="font-medium">Current Environment</h4>
              <span
                className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap mt-1
                  ${
                    environment === "mock"
                      ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                      : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                  }`}
              >
                {environment === "mock" ? "Mock" : "Live"}
              </span>
            </div>

            {/* Toggle Button */}
            <div className="flex items-center gap-3">
              <span
                className={`text-sm ${
                  environment === "mock"
                    ? "text-gray-900 dark:text-gray-100 font-semibold"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                Mock
              </span>

              <button
                onClick={handleToggleClick}
                type="button"
                data-devlink-id="admin-system-toggle-adapter"
                className={`inline-flex h-[1.15rem] w-9 shrink-0 items-center rounded-full transition-all border border-transparent
                  ${environment === "live" ? "bg-green-500" : "bg-gray-300 dark:bg-gray-600"}
                `}
              >
                <span
                  className={`block size-4 bg-white rounded-full transition-transform duration-200
                    ${environment === "live" ? "translate-x-4" : "translate-x-0"}
                  `}
                ></span>
              </button>

              <span
                className={`text-sm ${
                  environment === "live"
                    ? "text-gray-900 dark:text-gray-100 font-semibold"
                    : "text-gray-500 dark:text-gray-400"
                }`}
              >
                Live
              </span>
            </div>
          </div>

          <div className="text-sm text-gray-600 dark:text-gray-400">
            <p>
              Last switched by{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                admin@rapha.com
              </span>{" "}
              on{" "}
              <span className="font-medium text-gray-900 dark:text-gray-100">
                2025-01-14 16:30:00
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* DIALOG (Popup) */}
      {isDialogOpen && (
        <div
          role="dialog"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-300 dark:border-gray-700 max-w-lg w-full p-6 relative animate-in fade-in duration-200">
            {/* Header */}
            <div className="flex flex-col gap-2 text-center sm:text-left mb-4">
              <h2 className="text-lg font-semibold">Confirm Environment Switch</h2>
            </div>

            {/* Alert */}
            <div className="flex items-start gap-3 bg-gray-50 dark:bg-gray-700/40 border border-gray-200 dark:border-gray-600 rounded-lg p-3 mb-4">
              <TriangleAlert className="h-4 w-4 text-yellow-500 mt-0.5" />
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Switching to {environment === "mock" ? "Live" : "Mock"} environment will affect all system operations.
              </p>
            </div>

            {/* Textarea */}
            <div className="mb-4">
              <label
                htmlFor="switch-reason"
                className="text-sm font-medium block mb-2"
              >
                Reason for switch
              </label>
              <textarea
                id="switch-reason"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                placeholder="Describe why you're switching environments..."
                className="w-full rounded-md border border-gray-300 dark:border-gray-600 dark:bg-gray-700/40 px-3 py-2 text-sm focus-visible:ring-2 focus-visible:ring-blue-400 focus:outline-none resize-none"
                rows={3}
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handleSwitch}
                className="flex-1 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-md px-4 py-2"
              >
                Switch Environment
              </button>
              <button
                onClick={() => setIsDialogOpen(false)}
                className="flex-1 border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700/40 hover:bg-gray-200 dark:hover:bg-gray-700 text-sm font-medium rounded-md px-4 py-2"
              >
                Cancel
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-4">Audit log entry created.</p>

            {/* Close Icon */}
            <button
              onClick={() => setIsDialogOpen(false)}
              className="absolute top-4 right-4 opacity-70 hover:opacity-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default EnvironmentCard;
