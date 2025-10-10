import React from "react";
import { Search, Bot, XCircle } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
      {/* Left Filters */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Condition Filter */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-300">Condition</label>
          <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <option>All</option>
            <option>Heart Health</option>
            <option>Diabetes</option>
            <option>Vision</option>
          </select>
        </div>

        {/* Employer Filter */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-300">Employer</label>
          <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <option>All</option>
            <option>Tech Solutions</option>
            <option>Health Corp</option>
            <option>Global Systems</option>
          </select>
        </div>

        {/* Navigator Filter */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-300">Navigator</label>
          <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <option>All</option>
            <option>Dr. Smith</option>
            <option>Dr. Lee</option>
            <option>Dr. Patel</option>
          </select>
        </div>

        {/* Date Range Filter */}
        <div className="flex flex-col">
          <label className="text-xs text-gray-500 dark:text-gray-300">Date Range</label>
          <select className="border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 text-sm bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200">
            <option>30 days</option>
            <option>60 days</option>
            <option>90 days</option>
          </select>
        </div>
      </div>

      {/* Right Side Controls */}
      <div className="flex flex-wrap items-center gap-3">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-2 top-2.5 text-gray-400 dark:text-gray-300 h-4 w-4" />
          <input
            type="text"
            placeholder="Search employees, cases..."
            className="border border-gray-300 dark:border-gray-600 rounded-lg pl-8 pr-3 py-1 text-sm w-56 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-400"
          />
        </div>

        {/* Apply Button */}
        <button className="bg-blue-500 text-white text-sm px-4 py-1.5 rounded-lg hover:bg-blue-600">
          Apply
        </button>

        {/* Clear Button */}
        <button className="flex items-center text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700">
          <XCircle className="h-4 w-4 mr-1 text-gray-500 dark:text-gray-300" /> Clear
        </button>

        {/* AI Assist */}
        <button className="flex items-center bg-green-500 text-white text-sm px-3 py-1.5 rounded-lg hover:bg-green-600">
          <Bot className="h-4 w-4 mr-1" /> AI Assist
        </button>
      </div>
    </div>
  );
};

export default Navbar;
