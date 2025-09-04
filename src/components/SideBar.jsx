import React, { useState } from 'react';
import { Heart, Clock, Menu, X, Award, Folder, BarChart2, MessageSquare, Briefcase, User, Compass, Server, CheckSquare } from 'lucide-react';
import { createPortal } from 'react-dom';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activePortalIndex, setActivePortalIndex] = useState(0);
  const [activeNavIndex, setActiveNavIndex] = useState(0);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { icon: <Compass size={20} />, label: "My Journey", path: "/journey" },
    { icon: <Award size={20} />, label: "Health Education", path: "/education" },
    { icon: <Clock size={20} />, label: "Screening", path: "/screening" },
    { icon: <BarChart2 size={20} />, label: "My Results", path: "/results" },
    { icon: <Folder size={20} />, label: "Documents", path: "/documents" },
    { icon: <MessageSquare size={20} />, label: "Messages", path: "/messages" }
  ];

  const portalItems = [
    { icon: <User size={20} />, label: "Employee Portal", path: "/employee" },
    { icon: <Compass size={20} />, label: "Navigator Hub", path: "/navigator" },
    { icon: <Server size={20} />, label: "Provider Station", path: "/provider" },
    { icon: <Briefcase size={20} />, label: "Employer Dashboard", path: "/employer" }
  ];

  return (
    <>
      {/* HEADER */}
      <header className="flex items-center justify-between p-4 mb-1 bg-white shadow-md">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Heart className="text-sky-500 mr-2" size={32} />
            <div>
              <h1 className="text-2xl font-semibold text-slate-800">Rapha Health</h1>
              <p className="text-sm text-gray-500 mt-0.5">Enhanced Screening Platform v2.5</p>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <Menu className="text-gray-500" size={24} />
          </button>
        </div>
      </header>

      {/* SIDEBAR PORTAL */}
      {isMenuOpen &&
        createPortal(
          <div className="fixed inset-0 z-50 flex justify-end">
            <div
              className="fixed inset-0"
              onClick={toggleMenu}
              style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
            ></div>

            <div className="relative w-full md:max-w-sm bg-white shadow-xl flex flex-col h-full animate-slide-in text-sm">
              {/* Sidebar Header */}
              <div className="flex justify-between items-center p-3">
                <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                  <X size={20} className="text-gray-500" />
                </button>
              </div>

              {/* Scrollable content */}
              <div className="flex-1 overflow-y-auto p-3">
                {/* SWITCH PORTAL */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-400 mb-2">SWITCH PORTAL</h3>
                  {portalItems.map((item, index) => {
                    const isActive = activePortalIndex === index;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setActivePortalIndex(index);
                          navigate(item.path);
                          toggleMenu();
                        }}
                        className={`flex items-center justify-center w-full px-4 py-2 mb-2 rounded-lg transition-colors ${
                          isActive
                            ? "bg-blue-600 text-white shadow-lg"
                            : "bg-white text-black border border-gray-300 hover:bg-gray-100"
                        }`}
                      >
                        <span className={`mr-2 ${isActive ? "text-white" : "text-black"}`}>{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* NAVIGATION */}
                <div className="mb-6">
                  <h3 className="text-xs font-semibold text-gray-400 mb-2">NAVIGATION</h3>
                  {navItems.map((item, index) => {
                    const isActive = activeNavIndex === index;
                    return (
                      <button
                        key={index}
                        onClick={() => {
                          setActiveNavIndex(index);
                          navigate(item.path);
                          toggleMenu();
                        }}
                        className={`flex items-center w-full px-4 py-3 mb-2 rounded-lg transition-colors ${
                          isActive ? "bg-blue-600 text-white shadow-lg" : "bg-white text-black hover:bg-gray-100"
                        }`}
                      >
                        <span className={`mr-3 ${isActive ? "text-white" : "text-black"}`}>{item.icon}</span>
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
    </>
  );
};

export default SideBar;
