import { NavLink } from "react-router-dom";
import { LayoutDashboard, Brain, FileText, MessageSquare } from "lucide-react";

export default function EmployerNavbar() {
  const navItems = [
    { name: "Dashboard", path: "/employer", icon: LayoutDashboard },
    { name: "AI Insights", path: "/employer/insights", icon: Brain },
    { name: "Reports", path: "/employer/reports", icon: FileText },
    { name: "Message Navigator", path: "/employer/messages", icon: MessageSquare },
  ];

  return (
    <div className="border-b  border-gray-300 dark:border-gray-700">
    <nav className=" dark:bg-gray-900 max-w-7xl mx-auto">
      {/* Desktop view */}
      <div className="hidden md:flex items-center space-x-6 px-6 py-2">
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            end={path === "/employer"}
            className={({ isActive }) =>
              `group relative flex items-center space-x-2 px-1 py-1 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? "border-2 border-emerald-500 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800"
              }`
            }
          >
            {({ isActive }) => (
              <span
                className={`flex items-center space-x-2 rounded-md px-2 py-1 transition-colors duration-200 ${
                  isActive
                    ? "bg-emerald-500 text-white"
                    : "group-hover:bg-emerald-100 dark:group-hover:bg-gray-700 group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
                }`}
              >
                <Icon size={16} />
                <span>{name}</span>
              </span>
            )}
          </NavLink>
        ))}
      </div>

      {/* Mobile view: horizontal scroll */}
      <div className="flex md:hidden overflow-x-auto space-x-4 px-4 py-3 scrollbar-hide">
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={name}
            to={path}
            end={path === "/employer"}
            className={({ isActive }) =>
              `flex-shrink-0 flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? "border-2 border-emerald-500 bg-white dark:bg-gray-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-gray-800"
              }`
            }
          >
            <Icon size={16} />
            <span>{name}</span>
          </NavLink>
        ))}
      </div>
    </nav>
    </div>
  );
}
