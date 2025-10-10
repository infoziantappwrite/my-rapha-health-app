import React from "react";
import { Eye } from "lucide-react";

const screenings = [
  {
    employee: "Sarah Johnson",
    employer: "Tech Solutions",
    type: "Mammogram",
    datetime: "2024-01-20 10:00",
    location: "City Medical",
    provider: "Dr. Smith",
    status: "Scheduled",
  },
  {
    employee: "Michael Lee",
    employer: "HealthWorks",
    type: "Blood Work",
    datetime: "2024-02-15 09:30",
    location: "Sunrise Lab",
    provider: "Dr. Patel",
    status: "Completed",
  },
  {
    employee: "Ava Martinez",
    employer: "Bright Future Inc.",
    type: "Guardant Test",
    datetime: "2024-03-05 11:45",
    location: "Prime Diagnostics",
    provider: "Dr. Evans",
    status: "Scheduled",
  },
  {
    employee: "James Brown",
    employer: "NextGen Systems",
    type: "Mammogram",
    datetime: "2024-04-12 14:00",
    location: "City Medical",
    provider: "Dr. Carter",
    status: "Pending",
  },
  {
    employee: "Olivia Wilson",
    employer: "GreenTech",
    type: "Blood Work",
    datetime: "2024-05-18 08:30",
    location: "Wellness Center",
    provider: "Dr. Kim",
    status: "Completed",
  },
  {
    employee: "Liam Davis",
    employer: "CoreLabs",
    type: "Guardant Test",
    datetime: "2024-06-07 13:15",
    location: "Prime Diagnostics",
    provider: "Dr. Hill",
    status: "Cancelled",
  },
  {
    employee: "Emma Thompson",
    employer: "MediLink",
    type: "Mammogram",
    datetime: "2024-07-10 15:45",
    location: "HealthPoint",
    provider: "Dr. Lewis",
    status: "Scheduled",
  },
  {
    employee: "William Harris",
    employer: "BioPharma",
    type: "Blood Work",
    datetime: "2024-08-02 09:00",
    location: "City Medical",
    provider: "Dr. Nguyen",
    status: "Pending",
  },
  {
    employee: "Sophia Clark",
    employer: "HealthFirst",
    type: "Guardant Test",
    datetime: "2024-09-22 10:30",
    location: "Prime Diagnostics",
    provider: "Dr. Scott",
    status: "Completed",
  },
  {
    employee: "Ethan Lewis",
    employer: "NextEra",
    type: "Mammogram",
    datetime: "2024-10-11 12:00",
    location: "Wellness Center",
    provider: "Dr. Adams",
    status: "Scheduled",
  },
];

const All_Screenings = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        All Screenings
      </h2>

      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        <div className="max-h-48 overflow-y-auto">
          <table className="min-w-full text-sm text-gray-700 dark:text-gray-300">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-2 text-left font-semibold">Employee</th>
                <th className="px-4 py-2 text-left font-semibold">Employer</th>
                <th className="px-4 py-2 text-left font-semibold">Type</th>
                <th className="px-4 py-2 text-left font-semibold">
                  Date & Time
                </th>
                <th className="px-4 py-2 text-left font-semibold">Location</th>
                <th className="px-4 py-2 text-left font-semibold">Provider</th>
                <th className="px-4 py-2 text-left font-semibold">Status</th>
                <th className="px-4 py-2 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {screenings.map((item, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-gray-50 dark:hover:bg-gray-800 transition"
                >
                  <td className="px-4 py-2">{item.employee}</td>
                  <td className="px-4 py-2">{item.employer}</td>
                  <td className="px-4 py-2">{item.type}</td>
                  <td className="px-4 py-2">{item.datetime}</td>
                  <td className="px-4 py-2">{item.location}</td>
                  <td className="px-4 py-2">{item.provider}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        item.status === "Completed"
                          ? "bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100"
                          : item.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100"
                          : item.status === "Cancelled"
                          ? "bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100"
                          : "bg-purple-100 text-purple-800 dark:bg-purple-800 dark:text-purple-100"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-center">
                    <button className="p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition">
                      <Eye className="w-4 h-4 text-purple-600" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default All_Screenings;
