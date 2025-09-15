import React, { useState } from "react";
import { Building2, ChevronDown, Check } from "lucide-react";

const Dropdown = ({ options, selected, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between 
                   bg-gray-100 dark:bg-gray-800 
                   border border-gray-300 dark:border-gray-600 
                   rounded-md px-3 py-1 text-sm w-full sm:w-40 
                   focus:outline-none focus:ring-1 focus:ring-emerald-500
                   text-gray-800 dark:text-gray-200"
      >
        <span>{selected}</span>
        <ChevronDown className="w-4 h-4 ml-2 text-gray-600 dark:text-gray-300" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute left-0 mt-1 w-full sm:w-48 
                     bg-white dark:bg-gray-900 
                     border border-gray-200 dark:border-gray-700 
                     rounded-md shadow-lg z-10 animate-fadeIn"
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`flex items-center justify-between px-3 py-2 text-sm cursor-pointer 
                hover:bg-emerald-50 dark:hover:bg-gray-700 
                ${selected === opt
                  ? "text-emerald-700 dark:text-emerald-400 font-medium"
                  : "text-gray-700 dark:text-gray-200"
                }`}
            >
              <span>{opt}</span>
              {selected === opt && <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Main Component
const NavBarLocationTiming = () => {
  const [location, setLocation] = useState("All Locations");
  const [timeRange, setTimeRange] = useState("Last 30 Days");

  return (
    <div className="shadow-sm border-b border-gray-200 dark:border-gray-700">
    <div
      className="flex flex-col sm:flex-row items-start sm:items-center justify-between  max-w-7xl mx-auto dark:bg-gray-900  px-4 sm:px-6 py-2 space-y-3 sm:space-y-0"
    >
      {/* Left Section - Logo + Titles + Location */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full sm:w-auto">
        <Building2 className="w-6 h-6 text-emerald-500" />
        <div>
          <h1 className="text-lg font-semibold text-emerald-700 dark:text-emerald-400">
            Rapha Employer Hub
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">TechCorp Industries</p>
        </div>

        {/* Location Dropdown */}
        <div className="w-full sm:w-auto sm:ml-6">
          <Dropdown
            options={["All Locations", "New York", "London", "Tokyo"]}
            selected={location}
            onChange={setLocation}
          />
        </div>
      </div>

      {/* Right Section - Time Range + Timestamp */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
        {/* Time Range Dropdown */}
        <div className="w-full sm:w-auto">
          <Dropdown
            options={["Last 30 Days", "Last 7 Days", "Today"]}
            selected={timeRange}
            onChange={setTimeRange}
          />
        </div>

        {/* Updated Timestamp */}
        <span className="bg-emerald-100 dark:bg-emerald-900 
                         text-emerald-700 dark:text-emerald-400 
                         text-xs px-3 py-1 rounded-md whitespace-nowrap">
          Updated 2025-01-21 11:30 AM
        </span>
      </div>
    </div>
    </div>
  );
};

export default NavBarLocationTiming;
