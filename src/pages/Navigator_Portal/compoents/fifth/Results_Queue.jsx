import React from "react";

const resultsData = [
  {
    employee: "Sarah Johnson",
    test: "A1C",
    result: "Elevated",
    collected: "2024-01-10",
    reported: "2024-01-12",
    navigator: "Lisa Rodriguez",
    followUp: "Scheduled",
  },
  {
    employee: "Michael Lee",
    test: "Lipid Panel",
    result: "Normal",
    collected: "2024-02-05",
    reported: "2024-02-06",
    navigator: "John Smith",
    followUp: "Not Required",
  },
  {
    employee: "Ava Martinez",
    test: "Blood Pressure",
    result: "High",
    collected: "2024-03-01",
    reported: "2024-03-02",
    navigator: "Emily Davis",
    followUp: "Pending",
  },
];

const Results_Queue = () => {
  return (
    <div className="p-4 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
        Results Queue
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-t-lg">
            <tr>
              <th className="px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-gray-600">Employee</th>
              <th className="px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-gray-600">Test</th>
              <th className="px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-gray-600">Result</th>
              <th className="px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-gray-600">Collected</th>
              <th className="px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-gray-600">Reported</th>
              <th className="px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-gray-600">Navigator</th>
              <th className="px-4 py-2 text-left font-semibold border-b border-gray-200 dark:border-gray-600">Follow-up</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {resultsData.map((item, idx) => (
              <tr
                key={idx}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition"
              >
                <td className="px-4 py-2">{item.employee}</td>
                <td className="px-4 py-2">{item.test}</td>
                <td className="px-4 py-2">{item.result}</td>
                <td className="px-4 py-2">{item.collected}</td>
                <td className="px-4 py-2">{item.reported}</td>
                <td className="px-4 py-2">{item.navigator}</td>
                <td className="px-4 py-2">{item.followUp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Results_Queue;
