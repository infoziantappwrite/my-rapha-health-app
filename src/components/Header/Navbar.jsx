import { NavLink } from "react-router-dom";
import { BookOpen, Calendar, Activity, FileText, MessageSquare, Compass } from "lucide-react";

export default function Navbar() {
  const navItems = [
    { name: "My Journey", path: "/", icon: Compass },
    { name: "Health Education", path: "/education", icon: BookOpen, indicator: "current" },
    { name: "Screening", path: "/screening", icon: Calendar },
    { name: "My Results", path: "/results", icon: Activity },
    { name: "Documents", path: "/documents", icon: FileText },
    { name: "Messages", path: "/messages", icon: MessageSquare, badge: 2 },
  ];

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm">
      {/* Desktop view */}
      <div className="hidden md:flex items-center space-x-6 px-6 py-4">
        {navItems.map(({ name, path, icon: Icon, indicator, badge }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `group relative flex items-center space-x-2 px-1 py-1 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? "border-2 border-blue-500 bg-white text-blue-600 shadow-sm"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span
                  className={`flex items-center space-x-2 rounded-md px-2 py-1 transition-colors duration-200 ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "group-hover:bg-blue-100 group-hover:text-blue-600"
                  }`}
                >
                  <Icon size={16} />
                  <span>{name}</span>
                </span>
                {indicator && !isActive && (
                  <span className="text-xs text-gray-500 ml-1">{indicator}</span>
                )}
                {badge && (
                  <span className="ml-1 px-1.5 py-0.5 text-xs bg-gray-800 text-white rounded-full min-w-[18px] text-center">
                    {badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </div>

      {/* Mobile view: horizontal scroll */}
      <div className="flex md:hidden overflow-x-auto space-x-4 px-4 py-3 scrollbar-hide">
        {navItems.map(({ name, path, icon: Icon, badge }) => (
          <NavLink
            key={name}
            to={path}
            className={({ isActive }) =>
              `flex-shrink-0 flex items-center space-x-2 px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                isActive
                  ? "border-2 border-blue-500 bg-white text-blue-600 shadow-sm"
                  : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
              }`
            }
          >
            <Icon size={16} />
            <span>{name}</span>
            {badge && (
              <span className="ml-1 px-1.5 py-0.5 text-xs bg-gray-800 text-white rounded-full min-w-[18px] text-center">
                {badge}
              </span>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
