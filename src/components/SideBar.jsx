import React, { useState } from "react";
import {
  Heart,
  Clock,
  Menu,
  X,
  Award,
  Folder,
  BarChart2,
  MessageSquare,
  Briefcase,
  User,
  Compass,
  Server,
  Moon,
  Sun,
  Shield,
  LayoutDashboard,
  Users,
  FileText,
  Cpu,
  CheckCircle,
  FileSearch,
  ServerCog,
  Link2,
} from "lucide-react";
import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeProvider";

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePortalIndex, setActivePortalIndex] = useState(0);
  const { isDark, setIsDark } = useTheme();

  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Portal Switcher
 
const portalItems = [
  {
    icon: <User size={20} />,
    label: "Employee Portal",
    path: "/employee",
    activeColor: "bg-blue-600 text-white shadow-lg",
    navActiveColor: "bg-blue-600 text-white shadow-lg",
  },
  {
    icon: <Compass size={20} />,
    label: "Navigator Hub",
    path: "/navigator",
    activeColor: "bg-violet-600 text-white shadow-lg",
    navActiveColor: "bg-violet-600 text-white shadow-lg",
  },
  {
    icon: <Server size={20} />,
    label: "Provider Station",
    path: "/provider",
    activeColor: "bg-green-800 text-white shadow-lg",
    navActiveColor: "bg-green-800 text-white shadow-lg",
  },
  {
    icon: <Briefcase size={20} />,
    label: "Employer Dashboard",
    path: "/employer",
    activeColor: "bg-green-500 text-white shadow-lg",
    navActiveColor: "bg-green-500 text-white shadow-lg",
  },
   {
    icon: <Shield size={20} />, // Admin icon
    label: "Admin Dashboard",
    path: "/admin/dashboard",
    activeColor: "bg-purple-600 text-white shadow-lg", // 🔹 Purple for admin
    navActiveColor: "bg-purple-600 text-white shadow-lg",
  },
];



  // 🔹 Employee Portal Navigation
  const employeeNav = [
    { icon: <Compass size={20} />, label: "My Journey", path: "/employee" },
    { icon: <Award size={20} />, label: "Health Education", path: "/employee/education" },
    { icon: <Clock size={20} />, label: "Screening", path: "/employee/screening" },
    { icon: <BarChart2 size={20} />, label: "My Results", path: "/employee/results" },
    { icon: <Folder size={20} />, label: "Documents", path: "/employee/documents" },
    { icon: <MessageSquare size={20} />, label: "Messages", path: "/employee/messages" },
  ];

  // 🔹 Employer Portal Navigation
  const employerNav = [
    { icon: <Briefcase size={20} />, label: "Dashboard", path: "/employer" },
    { icon: <BarChart2 size={20} />, label: "AI Insights", path: "/employer/insights" },
    { icon: <Folder size={20} />, label: "Reports", path: "/employer/reports" },
    { icon: <MessageSquare size={20} />, label: "Messages", path: "/employer/messages" },
  ];

  // 🔹 Navigator Portal Navigation
  const navigatorNav = [
    { icon: <Compass size={20} />, label: "Navigator Dashboard", path: "/navigator" },
  ];

  // 🔹 Provider Portal Navigation
  const providerNav = [
    { icon: <Clock size={20} />, label: "Queue", path: "/provider" },
    { icon: <Folder size={20} />, label: "Samples", path: "/provider/samples" },
    { icon: <Award size={20} />, label: "Follow Up", path: "/provider/follow-up" },
    { icon: <BarChart2 size={20} />, label: "Appointments", path: "/provider/calendar" },
    { icon: <MessageSquare size={20} />, label: "Settings", path: "/provider/settings" },
  ];

  const adminNav = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", path: "/admin/dashboard" },
  { icon: <Users size={20} />, label: "Users", path: "/admin/users" },
  { icon: <Briefcase size={20} />, label: "Employers", path: "/admin/employers" },
  { icon: <FileText size={20} />, label: "Content", path: "/admin/content" },
  { icon: <Cpu size={20} />, label: "AI", path: "/admin/ai" },
  { icon: <CheckCircle size={20} />, label: "Compliance", path: "/admin/compliance" },
  { icon: <FileSearch size={20} />, label: "Logs", path: "/admin/logs" },
  { icon: <ServerCog size={20} />, label: "System", path: "/admin/system" },
  { icon: <Link2 size={20} />, label: "DevLink ID", path: "/admin/devlink" },
];




  // 🔹 Detect which portal we are in
  // Detect which portal we are in
  let navItems = [];
  let currentPortal = portalItems.find(p => location.pathname.startsWith(p.path));

  if (location.pathname.startsWith("/employee")) navItems = employeeNav;
  else if (location.pathname.startsWith("/employer")) navItems = employerNav;
  else if (location.pathname.startsWith("/navigator")) navItems = navigatorNav;
  else if (location.pathname.startsWith("/provider")) navItems = providerNav;
  else if (location.pathname.startsWith("/admin")) navItems = adminNav

  return (
    <div className=" space-y-6 py-2  shadow-md border-b border-gray-200 dark:border-gray-700">
      {/* HEADER */}
      <div className="max-w-7xl  mx-auto">
        <header className="flex items-center justify-between px-2 py-1 ">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Heart className="text-sky-500 mr-2" size={32} />
              <div>
                <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">
                  Rapha Health
                </h1>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                  Enhanced Screening Platform v2.5
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {/* THEME TOGGLE */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDark ? (
                <Sun className="text-yellow-400" size={22} />
              ) : (
                <Moon className="text-gray-600 dark:text-gray-300" size={22} />
              )}
            </button>

            <button
              onClick={toggleMenu}
              className="flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              <Menu className="text-gray-500 dark:text-gray-300" size={24} />
            </button>
          </div>
        </header>
      </div>
      {/* SIDEBAR PORTAL */}
      {isMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex justify-end">
            <div
              className="fixed inset-0"
              onClick={toggleMenu}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            ></div>

            <div className="relative w-full md:max-w-sm bg-white dark:bg-gray-900 shadow-xl flex flex-col h-full animate-slide-in text-sm">
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-3">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <X size={20} className="text-gray-500 dark:text-gray-300" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto p-3">
                {/* SWITCH PORTAL */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-2">
                    SWITCH PORTAL
                  </h3>
                  {portalItems.map((item, index) => {
                    const isActive = location.pathname.startsWith(item.path);
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setActivePortalIndex(index);
                          navigate(item.path);
                          // toggleMenu();
                        }}
                        className={`flex items-center justify-center w-full px-4 py-2 mb-2 rounded-lg transition-colors ${isActive
                          ? item.activeColor
                          : "bg-white dark:bg-gray-800 text-black dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                      >
                        <span className="mr-2">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>

                    );
                  })}
                </div>

                {/* NAVIGATION */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-400 dark:text-gray-500 mb-2">
                    NAVIGATION
                  </h3>
                  {navItems.map((item, index) => {
                    const isActive = location.pathname === item.path;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          navigate(item.path);
                          toggleMenu();
                        }}
                        className={`flex items-center w-full px-4 py-3 mb-2 rounded-lg transition-colors ${isActive
                          ? currentPortal?.navActiveColor
                          : "bg-white dark:bg-gray-800 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                      >
                        <span className="mr-3">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}

                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default SideBar;
