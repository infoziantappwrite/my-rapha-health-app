import React, { useState } from "react";
import { Eye } from "lucide-react";

const Table = ({ data = [], columns = [], title = "Table", filtersEnabled = true }) => {
  const [search, setSearch] = useState("");

  const filteredData = data.filter(item =>
    Object.values(item).some(val =>
      String(val).toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <div className="p-6 bg-white rounded-xl shadow-sm mt-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
        <div className="space-x-2">
          <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition text-sm font-medium">
            Export CSV
          </button>
          <button className="px-3 py-1 bg-gray-100 rounded hover:bg-gray-200 transition text-sm font-medium">
            Export JSON
          </button>
        </div>
      </div>

      {filtersEnabled && (
        <div className="mb-4 flex">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 p-2 border rounded-lg text-sm border-gray-300 focus:ring-2 focus:ring-purple-400"
          />
        </div>
      )}

      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map(col => (
                <th key={col.key} className="px-4 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {filteredData.map((row, idx) => (
              <tr key={idx} className="hover:bg-gray-50 transition">
                {columns.map(col => (
                  <td key={col.key} className="px-4 py-3 text-sm text-gray-700">
                    {col.key === "actions" ? (
                      <button className="p-1 hover:bg-gray-100 rounded">
                        <Eye className="w-4 h-4 text-gray-700" />
                      </button>
                    ) : (
                      row[col.key]
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
