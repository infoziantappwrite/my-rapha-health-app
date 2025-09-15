import { NavLink } from "react-router-dom";
import { BookOpen, Calendar, Activity, FileText, MessageSquare, Compass } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "My Journey", path: "/employee", icon: Compass },
    { name: "Health Education", path: "/employee/education", icon: BookOpen },
    { name: "Screening", path: "/employee/screening", icon: Calendar },
    { name: "My Results", path: "/employee/results", icon: Activity },
    { name: "Documents", path: "/employee/documents", icon: FileText },
    { name: "Messages", path: "/employee/messages", icon: MessageSquare, badge: 2 },
  ];

  return (
    <div className="border-b border-gray-300 dark:border-gray-700">
    <nav className="max-w-7xl mx-auto dark:bg-gray-900  ">
        {/* Desktop view */}
        <div className="hidden md:flex items-center space-x-6 px-6 py-2">
          {navItems.map(({ name, path, icon: Icon, badge }) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/employee"}
              className={({ isActive }) =>
                `group relative flex items-center space-x-2 px-1 py-1 text-sm font-medium rounded-lg transition-all duration-200 
                ${isActive
                  ? "border-2 border-blue-500 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex items-center space-x-2 rounded-md px-2 py-1 transition-colors duration-200 
                    ${isActive
                      ? "bg-blue-500 text-white"
                      : "group-hover:bg-blue-100 group-hover:text-blue-600 dark:group-hover:bg-gray-700 dark:group-hover:text-blue-400"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{name}</span>
                  </span>
                  {badge && (
                    <span className="ml-1 px-1.5 py-0.5 text-xs bg-gray-800 dark:bg-gray-600 text-white rounded-full min-w-[18px] text-center">
                      {badge}
                    </span>
                  )}
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile view */}
        <div className="flex md:hidden overflow-x-auto space-x-4 px-4 py-2 scrollbar-hide">
          {navItems.map(({ name, path, icon: Icon, badge }) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/employee"}
              className={({ isActive }) =>
                `flex-shrink-0 flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 
                ${isActive
                  ? "border-2 border-blue-500 bg-white dark:bg-gray-800 text-blue-600 dark:text-blue-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800"
                }`
              }
            >
              <Icon size={16} />
              <span>{name}</span>
              {badge && (
                <span className="ml-1 px-1.5 py-0.5 text-xs bg-gray-800 dark:bg-gray-600 text-white rounded-full min-w-[18px] text-center">
                  {badge}
                </span>
              )}
            </NavLink>
          ))}
        </div>
      </nav>
      </div>
  );
}