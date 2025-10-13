import React, { useState } from "react";
import { Search } from "lucide-react";
const priorities = ["All Priority", "High", "Medium", "Low"];
const modalities = ["All Modalities", "Telehealth", "In-Person"];
const navigators = ["All Navigators", "Alice", "Bob", "Charlie"];

const ProviderFilterBar = ({ onApply, onClear, }) => {
  const [selectedPriority, setSelectedPriority] = useState(priorities[0]);
  const [selectedModality, setSelectedModality] = useState(modalities[0]);
  const [selectedNavigator, setSelectedNavigator] = useState(navigators[0]);
  const [searchText, setSearchText] = useState("");
   const handleApply = (filters) => {
    console.log("Applied Filters:", filters);
  };

  const handleClear = () => {
    console.log("Filters cleared");
  };

  const commonSelectClasses =
    "h-9 px-3 border rounded-md text-sm bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500";

  return (
    <div className="flex items-center justify-between gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-300 rounded-xl dark:border-gray-700">
      
      {/* Left: Dropdowns */}
      <div className="flex items-center gap-2 flex-1">
        <select
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
          className={`${commonSelectClasses} w-[140px]`}
        >
          {priorities.map((p, idx) => (
            <option key={idx} value={p}>
              {p}
            </option>
          ))}
        </select>

        <select
          value={selectedModality}
          onChange={(e) => setSelectedModality(e.target.value)}
          className={`${commonSelectClasses} w-[160px]`}
        >
          {modalities.map((m, idx) => (
            <option key={idx} value={m}>
              {m}
            </option>
          ))}
        </select>

        <select
          value={selectedNavigator}
          onChange={(e) => setSelectedNavigator(e.target.value)}
          className={`${commonSelectClasses} w-[160px]`}
        >
          {navigators.map((n, idx) => (
            <option key={idx} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>

      {/* Right: Search + Buttons */}
      <div className="flex items-center gap-2">
        {/* Search */}
        <div className="relative w-[240px]">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400 dark:text-gray-300" />
          <input
            type="text"
            placeholder="Search results..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="h-9 w-full rounded-md border border-gray-300 dark:border-gray-800 pl-8 pr-3 text-sm bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Apply & Clear Buttons */}
        <button
          onClick={() => handleApply({ selectedPriority, selectedModality, selectedNavigator, searchText })}
          className="inline-flex border-gray-300 rounded-lg dark:border-gray-700 items-center justify-center h-8 rounded-md px-3 gap-1.5 border bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 hover:bg-blue-100 dark:hover:bg-blue-700 transition"
        >
          Apply
        </button>

        <button
          onClick={() => {
            setSelectedPriority(priorities[0]);
            setSelectedModality(modalities[0]);
            setSelectedNavigator(navigators[0]);
            setSearchText("");
             handleClear();
          }}
          className="inline-flex border-gray-300 rounded-lg dark:border-gray-700 items-center justify-center h-8 rounded-md px-3 gap-1.5 border bg-gray-50 dark:bg-gray-800 text-sm text-gray-900 dark:text-gray-100 hover:bg-red-100 dark:hover:bg-red-700 transition"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

export default ProviderFilterBar;
