import React, { useState } from "react";
import { Building2, ChevronDown, Check } from "lucide-react";

const Dropdown = ({ options, selected, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between bg-gray-100 border border-gray-300 rounded-md px-3 py-1 text-sm w-40 focus:outline-none focus:ring-1 focus:ring-emerald-500"
      >
        <span>{selected}</span>
        <ChevronDown className="w-4 h-4 ml-2 text-gray-600" />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10 animate-fadeIn"
        >
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`flex items-center justify-between px-3 py-2 text-sm cursor-pointer hover:bg-emerald-50 ${
                selected === opt ? "text-emerald-700 font-medium" : "text-gray-700"
              }`}
            >
              <span>{opt}</span>
              {selected === opt && <Check className="w-4 h-4 text-emerald-600" />}
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
    <div className="flex items-center justify-between bg-white px-6 py-3 shadow-sm mb-1">
      {/* Left Section - Logo + Titles */}
      <div className="flex items-center space-x-3">
        <Building2 className="w-8 h-8 text-blue-500" />
        <div>
          <h1 className="text-xl font-semibold text-emerald-700">
            Rapha Employer Hub
          </h1>
          <p className="text-sm text-gray-500">TechCorp Industries</p>
        </div>

        {/* Location Dropdown */}
        <div className="ml-6">
          <Dropdown
            options={["All Locations", "New York", "London", "Tokyo"]}
            selected={location}
            onChange={setLocation}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Time Range Dropdown */}
        <Dropdown
          options={["Last 30 Days", "Last 7 Days", "Today"]}
          selected={timeRange}
          onChange={setTimeRange}
        />

        {/* Updated Timestamp */}
        <span className="bg-emerald-100 text-emerald-700 text-xs px-3 py-1 rounded-md">
          Updated 2025-01-21 11:30 AM
        </span>
      </div>
    </div>
  );
};

export default NavBarLocationTiming;
