import React, { useState, useMemo } from "react";
import { Eye, MessageCircle, Calendar } from "lucide-react";

const employees = [
  { id: 1, name: "David Wilson", dept: "Finance", risk: "High", riskScore: 9.1, condition: "Cancer", lastContact: "Over 1 week", navigator: "Dr. Chen", progress: 1, total: 4 },
  { id: 2, name: "Emily Chen", dept: "Finance", risk: "Low", riskScore: 3.8, condition: "Diabetes", lastContact: "3 days ago", navigator: "Dr. Johnson", progress: 2, total: 4 },
  { id: 3, name: "Jennifer Brown", dept: "HR", risk: "Medium", riskScore: 5.4, condition: "Heart", lastContact: "5 days ago", navigator: "Dr. Smith", progress: 3, total: 4 },
  { id: 4, name: "Michael Davis", dept: "Marketing", risk: "Medium", riskScore: 6.2, condition: "Heart", lastContact: "1 week ago", navigator: "Dr. Smith", progress: 4, total: 4 },
  { id: 5, name: "Sarah Johnson", dept: "Engineering", risk: "High", riskScore: 8.7, condition: "Cancer", lastContact: "2 days ago", navigator: "Dr. Chen", progress: 3, total: 4 },
];

const riskColor = (risk) => {
  switch (risk) {
    case "High": return "bg-red-100 text-red-600";
    case "Medium": return "bg-yellow-100 text-yellow-600";
    case "Low": return "bg-green-100 text-green-600";
    default: return "bg-gray-100 text-gray-600";
  }
};

const Table = () => {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [order, setOrder] = useState("asc");
  const [riskFilter, setRiskFilter] = useState("All");
  const [conditionFilter, setConditionFilter] = useState("All");
  const [navigatorFilter, setNavigatorFilter] = useState("All");

  const filteredEmployees = useMemo(() => {
    let data = [...employees];

    // Search filter
    if (search) {
      data = data.filter(emp => emp.name.toLowerCase().includes(search.toLowerCase()));
    }

    // Risk filter
    if (riskFilter !== "All") data = data.filter(emp => emp.risk === riskFilter);

    // Condition filter
    if (conditionFilter !== "All") data = data.filter(emp => emp.condition === conditionFilter);

    // Navigator filter
    if (navigatorFilter !== "All") data = data.filter(emp => emp.navigator === navigatorFilter);

    // Sort
    data.sort((a, b) => {
      const valA = a[sortBy];
      const valB = b[sortBy];
      if (typeof valA === "string") return order === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      return order === "asc" ? valA - valB : valB - valA;
    });

    return data;
  }, [search, sortBy, order, riskFilter, conditionFilter, navigatorFilter]);

  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">
        Employee Queue Management
      </h2>

      {/* Filters Row */}
      <div className="flex flex-wrap gap-3 mb-4 w-full">
        <div className="flex-2 min-w-[200px] flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-400 mb-1">Search</label>
          <input
            type="text"
            placeholder="Search employee"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          />
        </div>

        <div className="flex-1 min-w-[120px] flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-400 mb-1">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          >
            <option value="name">Employee</option>
            <option value="riskScore">Risk Score</option>
            <option value="dept">Department</option>
          </select>
        </div>

        <div className="flex-1 min-w-[120px] flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-400 mb-1">Order</label>
          <select
            value={order}
            onChange={(e) => setOrder(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>

        <div className="flex-1 min-w-[120px] flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-400 mb-1">Risk Tier</label>
          <select
            value={riskFilter}
            onChange={(e) => setRiskFilter(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          >
            <option>All</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>

        <div className="flex-1 min-w-[120px] flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-400 mb-1">Condition</label>
          <select
            value={conditionFilter}
            onChange={(e) => setConditionFilter(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          >
            <option>All</option>
            <option>Cancer</option>
            <option>Diabetes</option>
            <option>Heart</option>
          </select>
        </div>

        <div className="flex-1 min-w-[120px] flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-400 mb-1">Navigator</label>
          <select
            value={navigatorFilter}
            onChange={(e) => setNavigatorFilter(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700"
          >
            <option>All</option>
            <option>Dr. Chen</option>
            <option>Dr. Johnson</option>
            <option>Dr. Smith</option>
          </select>
        </div>
      </div>

      {/* Table */}
      {/* Table */}
<div className="overflow-x-auto">
  <table className="min-w-full border border-gray-200 dark:border-gray-700 rounded-lg">
    <thead className="bg-gray-50 dark:bg-gray-800">
      <tr className="text-xs text-gray-500 dark:text-gray-400">
        <th className="p-3 text-left">
          <input type="checkbox" />
        </th>
        <th className="p-3 text-left">Employee</th>
        <th className="p-3 text-left">Risk Tier</th>
        {/* hide these on mobile */}
        <th className="p-3 text-left hidden sm:table-cell">Condition</th>
        <th className="p-3 text-left hidden sm:table-cell">Last Contact</th>
        <th className="p-3 text-left hidden md:table-cell">Navigator</th>
        <th className="p-3 text-left">Progress</th>
        <th className="p-3 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {filteredEmployees.map((emp) => (
        <tr
          key={emp.id}
          className="border-t border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
        >
          <td className="p-3">
            <input type="checkbox" />
          </td>
          <td className="p-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-semibold text-sm">
                {emp.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-gray-800 dark:text-gray-200">
                  {emp.name}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {emp.dept}
                </span>
              </div>
            </div>
          </td>
          <td className="p-3">
            <span
              className={`px-2 py-1 rounded-lg text-xs font-semibold ${riskColor(
                emp.risk
              )}`}
            >
              {emp.risk} ({emp.riskScore}/10)
            </span>
          </td>
          {/* hidden on mobile */}
          <td className="p-3 text-gray-600 dark:text-gray-300 hidden sm:table-cell">
            {emp.condition}
          </td>
          <td className="p-3 text-gray-600 dark:text-gray-300 hidden sm:table-cell">
            {emp.lastContact}
          </td>
          <td className="p-3 text-gray-600 dark:text-gray-300 hidden md:table-cell">
            {emp.navigator}
          </td>
          <td className="p-3">
            <div className="w-20 sm:w-24 bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="h-2 rounded-full bg-indigo-600 dark:bg-indigo-500"
                style={{ width: `${(emp.progress / emp.total) * 100}%` }}
              ></div>
            </div>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              {emp.progress}/{emp.total}
            </span>
          </td>
          <td className="p-3 flex gap-2">
            <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              <Eye className="h-4 w-4 text-gray-600 dark:text-gray-200" />
            </button>
            <button className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600">
              <MessageCircle className="h-4 w-4 text-gray-600 dark:text-gray-200" />
            </button>
            <button className="p-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white">
              <Calendar className="h-4 w-4" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

    </div>
  );
};

export default Table;
