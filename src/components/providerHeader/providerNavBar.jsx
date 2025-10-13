import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ListChecks,
  FlaskConical,
  Calendar,
  Settings,
  ClipboardList,
  FolderOpen
} from "lucide-react"; // ✅ Import icons

const TABS = [
  { name: "Queue", path: "/provider", icon: ListChecks },
  { name: "Samples", path: "/provider/samples", icon: FlaskConical },
  { name: "Follow-Up", path: "/provider/follow-up", icon: ClipboardList },
  { name: "Results", path: "/provider/results", icon: FlaskConical },
  { name: "Cases", path: "/provider/cases", icon: FolderOpen },
  { name: "Calendar", path: "/provider/calendar", icon: Calendar },
  { name: "Settings", path: "/provider/settings", icon: Settings }
];

const ProviderNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isTabActive = (tabPath) => {
    if (tabPath === "/provider") return location.pathname === "/provider";
    return location.pathname.startsWith(tabPath);
  };

  return (
    <div className="mb-2">
      <div className="py-2 dark:bg-gray-900 px-4 sm:px-10 max-w-7xl mx-auto">
        <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-2xl flex w-full justify-between">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <div
                key={tab.name}
                onClick={() => navigate(tab.path)}
                className={`cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 flex-1 text-center px-2 py-1 rounded-2xl font-medium transition-all duration-200
                ${
                  isTabActive(tab.path)
                    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProviderNavBar;
