import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const TABS = [
  { name: "Queue", path: "/provider" },
  { name: "Samples", path: "/provider/samples" },
  { name: "Follow-Up", path: "/provider/follow-up" },
  { name: "Calendar", path: "/provider/calendar" },
  { name: "Settings", path: "/provider/settings" }
];

const ProviderNavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isTabActive = (tabPath) => {
    // A simple check for exact path match
    if (tabPath === "/provider") {
      return location.pathname === "/provider";
    }
    // For other tabs, check if the path starts with the tab's path
    return location.pathname.startsWith(tabPath);
  };

  return (
    <div className="border-b-1 border-gray-300 dark:border-gray-700 mb-4  ">
      {/* Tabs container */}
      <div className="py-2 dark:bg-gray-900 px-4 sm:px-10 max-w-7xl mx-auto">
        <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-2xl flex w-full overflow-x-auto no-scrollbar">
          {TABS.map((tab) => (
            <div
              key={tab.name}
              onClick={() => navigate(tab.path)}
              className={`
                cursor-pointer flex-1 min-w-max text-center px-4 py-2 rounded-2xl font-medium transition
                ${
                  isTabActive(tab.path)
                    ? "bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }
              `}
            >
              {tab.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProviderNavBar;