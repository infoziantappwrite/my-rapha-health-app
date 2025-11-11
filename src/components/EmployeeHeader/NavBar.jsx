import { NavLink } from "react-router-dom";
import {
  Compass,
  Users,
  HeartPulse,
  BookOpen,
  Calendar,
  Activity,
  FileText,
} from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "My Journey", path: "/employee", icon: Compass },
    { name: "My Profile", path: "/employee/profile", icon: Users },
    { name: "Family Risk", path: "/employee/family-risk", icon: HeartPulse },
    { name: "Health Education", path: "/employee/education", icon: BookOpen },
    { name: "Screening", path: "/employee/screening", icon: Calendar },
    { name: "My Results", path: "/employee/results", icon: Activity },
    { name: "Follow Up", path: "/employee/follow-up", icon: FileText },
  ];

  return (
    <div className="border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 transition-colors">
      <nav className="max-w-7xl mx-auto">
        {/* Desktop view */}
        <div className="hidden md:flex items-center space-x-6 px-6 py-2">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/employee"}
              className={({ isActive }) =>
                `group relative flex items-center space-x-2 px-1 py-1 text-sm font-medium rounded-lg transition-all duration-200 
                ${
                  isActive
                    ? "border-2 border-[#6a50b5] bg-white dark:bg-gray-800 text-[#6a50b5] dark:text-[#b8a4ff] shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#6a50b5] dark:hover:text-[#b8a4ff] hover:bg-[#f4f0ff] dark:hover:bg-gray-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`flex items-center space-x-2 rounded-md px-2 py-1 transition-colors duration-200 
                    ${
                      isActive
                        ? "bg-[#6a50b5] text-white"
                        : "group-hover:bg-[#ede6ff] group-hover:text-[#6a50b5] dark:group-hover:bg-gray-700 dark:group-hover:text-[#b8a4ff]"
                    }`}
                  >
                    <Icon size={16} />
                    <span>{name}</span>
                  </span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile view */}
        <div className="flex md:hidden overflow-x-auto space-x-4 px-4 py-2 scrollbar-hide">
          {navItems.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              end={path === "/employee"}
              className={({ isActive }) =>
                `flex-shrink-0 flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 
                ${
                  isActive
                    ? "border-2 border-[#6a50b5] bg-white dark:bg-gray-800 text-[#6a50b5] dark:text-[#b8a4ff] shadow-sm"
                    : "text-gray-700 dark:text-gray-300 hover:text-[#6a50b5] dark:hover:text-[#b8a4ff] hover:bg-[#f4f0ff] dark:hover:bg-gray-800"
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
