import React from "react";

const EmployerDirectory = () => {
  return (
    <div
      data-slot="card"
      className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700"
    >
      {/* Header */}
      <div
        data-slot="card-header"
        className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border border-gray-300 dark:border-gray-700-b]:pb-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg"
      >
        <h4 data-slot="card-title" className="leading-none">
          Employer Directory
        </h4>
      </div>

      {/* Content */}
      <div data-slot="card-content" className="[&:last-child]:pb-6 p-6">
        <div className="space-y-6">

          {/* --- Employer 1 --- */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">HealthCorp Inc</h3>
                <p className="text-gray-600">Healthcare • 2,847 employees</p>
                <p className="text-sm text-gray-500">Created: 2025-12-01</p>
              </div>
              <span
                data-slot="badge"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-[color,box-shadow] overflow-hidden bg-green-50 text-green-700 border border-gray-300 dark:border-gray-700-green-200"
              >
                Active
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Setup Progress</span>
                <span className="text-sm text-gray-600">100%</span>
              </div>
              <div
                aria-valuemax="100"
                aria-valuemin="0"
                role="progressbar"
                data-state="indeterminate"
                data-max="100"
                data-slot="progress"
                className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"
              >
                <div
                  data-state="indeterminate"
                  data-max="100"
                  data-slot="progress-indicator"
                  className="bg-primary h-full w-full flex-1 transition-all"
                  style={{ transform: "translateX(0%)" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              {["Created", "Eligibility Uploaded", "Active"].map((step) => (
                <div key={step} className="flex items-center gap-2">
                  <CheckIcon className="text-green-600" />
                  <span className="text-sm text-green-700">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* --- Employer 2 --- */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">TechStartup LLC</h3>
                <p className="text-gray-600">Technology • 156 employees</p>
                <p className="text-sm text-gray-500">Created: 2025-12-20</p>
              </div>
              <span
                data-slot="badge"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 bg-yellow-50 text-yellow-700 border border-gray-300 dark:border-gray-700-yellow-200"
              >
                Setup
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Setup Progress</span>
                <span className="text-sm text-gray-600">67%</span>
              </div>
              <div
                role="progressbar"
                data-slot="progress"
                className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"
              >
                <div
                  data-slot="progress-indicator"
                  className="bg-primary h-full w-full flex-1 transition-all"
                  style={{ transform: "translateX(-33%)" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Step status="done" label="Created" />
              <Step status="done" label="Eligibility Uploaded" />
              <Step status="pending" label="Active" />
            </div>
          </div>

          {/* --- Employer 3 --- */}
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg font-medium">Manufacturing Pro</h3>
                <p className="text-gray-600">Manufacturing • 892 employees</p>
                <p className="text-sm text-gray-500">Created: 2025-12-25</p>
              </div>
              <span
                data-slot="badge"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 dark:border-gray-700 px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 bg-orange-50 text-orange-700 border border-gray-300 dark:border-gray-700-orange-200"
              >
                Pending
              </span>
            </div>

            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Setup Progress</span>
                <span className="text-sm text-gray-600">33%</span>
              </div>
              <div
                role="progressbar"
                data-slot="progress"
                className="bg-primary/20 relative w-full overflow-hidden rounded-full h-2"
              >
                <div
                  data-slot="progress-indicator"
                  className="bg-primary h-full w-full flex-1 transition-all"
                  style={{ transform: "translateX(-67%)" }}
                ></div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <Step status="done" label="Created" />
              <Step status="pending" label="Eligibility Uploaded" />
              <Step status="pending" label="Active" />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-500 mt-4 pt-4 ">
          Audit log entry created.
        </div>
      </div>
    </div>
  );
};

/* --- Helper components --- */
const CheckIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-circle-check-big h-5 w-5 ${className}`}
  >
    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
    <path d="m9 11 3 3L22 4" />
  </svg>
);

const ClockIcon = ({ className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`lucide lucide-clock h-5 w-5 ${className}`}
  >
    <path d="M12 6v6l4 2" />
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const Step = ({ status, label }) => (
  <div className="flex items-center gap-2">
    {status === "done" ? (
      <CheckIcon className="text-green-600" />
    ) : (
      <ClockIcon className="text-gray-400" />
    )}
    <span
      className={`text-sm ${
        status === "done" ? "text-green-700" : "text-gray-500"
      }`}
    >
      {label}
    </span>
  </div>
);

export default EmployerDirectory;
