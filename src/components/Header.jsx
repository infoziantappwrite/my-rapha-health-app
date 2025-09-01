import React, { useState } from "react";
import { Menu, X, Clock, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-sm flex items-center justify-between px-6 py-3 border-b">
      {/* Left Section */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="text-2xl">❤️</span>
          <div>
            <h1 className="font-bold text-lg">Rapha Health</h1>
            <p className="text-xs text-gray-500">
              Enhanced Screening Platform v2.5
            </p>
          </div>
        </div>

        {/* Employee Portal */}
        <div className="ml-6 flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium">
          <Shield size={16} />
          Employee Portal
        </div>

        {/* In Progress */}
        <div className="ml-4 flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-50 text-blue-600 text-sm font-medium">
          <Clock size={16} />
          <div>
            <p>In Progress</p>
            <p className="text-xs">Health Journey In Progress</p>
          </div>
        </div>
      </div>

      {/* Right Section (Hamburger) */}
      <button onClick={() => setIsSidebarOpen(true)}>
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      {isSidebarOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg z-50 flex flex-col"
        >
          {/* Sidebar Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="font-semibold text-lg">Switch Portal</h2>
            <button onClick={() => setIsSidebarOpen(false)}>
              <X size={24} />
            </button>
          </div>

          {/* Portal Options */}
          <div className="p-4 flex flex-col gap-3">
            <button className="px-3 py-2 rounded-lg border bg-blue-50 text-blue-600 flex items-center gap-2">
              👤 Employee Portal
            </button>
            <button className="px-3 py-2 rounded-lg border flex items-center gap-2">
              🩺 Navigator Hub
            </button>
            <button className="px-3 py-2 rounded-lg border flex items-center gap-2">
              📷 Provider Station
            </button>
            <button className="px-3 py-2 rounded-lg border flex items-center gap-2">
              🏢 Employer Dashboard
            </button>
          </div>

          {/* Navigation */}
          <div className="border-t p-4 flex flex-col gap-3">
            <h3 className="font-semibold text-gray-600">Navigation</h3>
            <ul className="space-y-3">
              <li>🎯 My Journey</li>
              <li>🎓 Health Education</li>
              <li>📅 Screening</li>
              <li>📈 My Results</li>
              <li>📄 Documents</li>
              <li>💬 Messages</li>
            </ul>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Header;
