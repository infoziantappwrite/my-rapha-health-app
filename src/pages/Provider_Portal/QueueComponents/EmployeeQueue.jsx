
import ActionButtons from "./ActionButtons";

// Action Button Component


// Employee Data
const employees = [
  {
    id: "TC-001",
    initials: "JM",
    name: "Jennifer Martinez",
    modalities: ["Blood Draw", "Mammogram"],
    checkInStatus: "7:55 AM",
    time: "8:00 AM",
    status: "in progress",
    navigator: "Dr. Lisa Rodriguez",
    showCheckIn: false,
  },
  {
    id: "TC-002",
    initials: "MT",
    name: "Michael Thompson",
    modalities: ["Blood Draw"],
    checkInStatus: "8:25 AM",
    time: "8:30 AM",
    status: "completed",
    navigator: "Dr. Mark Wilson",
    showCheckIn: false,
  },
  {
    id: "TC-003",
    initials: "SK",
    name: "Sarah Kim",
    modalities: ["Mammogram"],
    checkInStatus: "8:58 AM",
    time: "9:00 AM",
    status: "checked in",
    navigator: "Dr. Lisa Rodriguez",
    showCheckIn: false,
  },
  {
    id: "TC-004",
    initials: "DJ",
    name: "David Johnson",
    modalities: ["Blood Draw"],
    checkInStatus: "Not checked in",
    time: "9:30 AM",
    status: "scheduled",
    navigator: "Dr. Mark Wilson",
    showCheckIn: true,
  },
  {
    id: "TC-005",
    initials: "AF",
    name: "Amanda Foster",
    modalities: ["Blood Draw", "Mammogram"],
    checkInStatus: "Not checked in",
    time: "10:00 AM",
    status: "scheduled",
    navigator: "Dr. Lisa Rodriguez",
    showCheckIn: true,
  },
];

const EmployeeQueue = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700">
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-300 dark:border-gray-700">
        <h4 className="flex items-center gap-2 text-lg font-semibold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-blue-600 dark:text-blue-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <path d="M16 3.128a4 4 0 0 1 0 7.744" />
            <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
            <circle cx="9" cy="7" r="4" />
          </svg>
          Employee Queue
        </h4>
      </div>

      {/* Table */}
      <div className="px-6 pb-6 overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-gray-300 dark:border-gray-700 text-left text-gray-600 dark:text-gray-400">
              <th className="py-2 px-3">Employee Name</th>
              <th className="py-2 px-3">Screening Modality</th>
              <th className="py-2 px-3">QR Check-In Status</th>
              <th className="py-2 px-3">Appointment Time</th>
              <th className="py-2 px-3">Status</th>
              <th className="py-2 px-3">Navigator Assigned</th>
              <th className="py-2 px-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr
                key={emp.id}
                className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <td className="py-3 px-3 flex items-center space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 font-bold">
                    {emp.initials}
                  </div>
                  <div>
                    <p className="font-medium">{emp.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {emp.id}
                    </p>
                  </div>
                </td>
                <td className="py-3 px-3">
                  <div className="flex flex-wrap gap-2">
                    {emp.modalities.map((m, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-300 text-xs px-2 py-1 rounded-md"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-3">{emp.checkInStatus}</td>
                <td className="py-3 px-3">{emp.time}</td>
                <td className="py-3 px-3">
  <span
    className={`px-2 py-1 rounded-md text-xs capitalize whitespace-nowrap
      ${
        emp.status === "completed"
          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
          : emp.status === "in progress"
          ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
          : emp.status === "checked in"
          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
          : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
      }`}
  >
    {emp.status}
  </span>
</td>

                <td className="py-3 px-3">{emp.navigator}</td>
                <td className="py-3 px-3">
                  <ActionButtons employee={emp} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeQueue;
