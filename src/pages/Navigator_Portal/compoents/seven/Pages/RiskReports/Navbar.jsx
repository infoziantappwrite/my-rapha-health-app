import React from "react";
import { Search, HelpCircle, Bot } from "lucide-react";

const Navbar = () => {
  return (
    <div className="w-full bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-800 p-3 flex flex-wrap items-center gap-3 rounded-2xl transition-colors duration-300">
      {/* Dropdown Filters */}
      <select className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>All Modules</option>
      </select>

      <select className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>All Employers</option>
      </select>

      <select className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>All Navigators</option>
      </select>

      <select className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>All Status</option>
      </select>

      <select className="border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
        <option>All Time</option>
      </select>

      {/* Search Bar */}
      <div className="flex items-center flex-1 border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 max-w-md bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
        <Search className="w-4 h-4 text-gray-500 dark:text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search employees, modules…"
          className="w-full bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none text-sm placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      {/* Buttons */}
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition">
        Apply
      </button>

      <button className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-lg text-sm hover:bg-gray-300 dark:hover:bg-gray-600 transition">
        Clear
      </button>

      <button className="bg-emerald-500 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-emerald-600 transition">
        <Bot className="w-4 h-4" /> Ask Rapha
      </button>

      <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg text-sm flex items-center gap-2 hover:bg-yellow-500 transition">
        <HelpCircle className="w-4 h-4" /> Help
      </button>
    </div>
  );
};

export default Navbar;
