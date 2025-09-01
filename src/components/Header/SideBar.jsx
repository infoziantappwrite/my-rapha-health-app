import React, { useState } from 'react';
import { Heart, Clock, Menu, X, Award, Folder, BarChart2, MessageSquare, Briefcase, User, Compass, Server, CheckSquare } from 'lucide-react';
import { createPortal } from 'react-dom';

const SideBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activePortalIndex, setActivePortalIndex] = useState(0); // default first portal
    const [activeNavIndex, setActiveNavIndex] = useState(0); // default first nav

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { icon: <Compass size={20} />, label: "My Journey" },
        { icon: <Award size={20} />, label: "Health Education" },
        { icon: <Clock size={20} />, label: "Screening" },
        { icon: <BarChart2 size={20} />, label: "My Results" },
        { icon: <Folder size={20} />, label: "Documents" },
        { icon: <MessageSquare size={20} />, label: "Messages" }
    ];

    const portalItems = [
        { icon: <User size={20} />, label: "Employee Portal" },
        { icon: <Compass size={20} />, label: "Navigator Hub" },
        { icon: <Server size={20} />, label: "Provider Station" },
        { icon: <Briefcase size={20} />, label: "Employer Dashboard" }
    ];

    return (
      <>
           <header className="flex items-center justify-between p-4 mb-1 bg-white shadow-md">
                <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                        <Heart className="text-sky-500 mr-2" size={32} />
                        <div>
                            <h1 className="text-2xl font-semibold text-slate-800">Rapha Health</h1>
                            <p className="text-sm text-gray-500 mt-0.5">Enhanced Screening Platform v2.5</p>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
  <div className="flex items-center px-4 py-2 bg-slate-100 text-sky-700 rounded-full font-medium shadow-inner">
      <Clock size={16} className="mr-2" />
      <span>Employee Portal</span>
  </div>

  <div className="flex items-center px-4 py-2 bg-sky-100 text-sky-700 rounded-full font-medium shadow-inner">
      <Clock size={16} className="mr-2" />
      <div className="flex flex-col text-sm">
          <span>In Progress</span>
          <span className="text-xs text-sky-500">Health Journey In Progress</span>
      </div>
  </div>
</div>

                </div>

                <div className="flex items-center space-x-4">
                    <button onClick={toggleMenu} className="flex items-center justify-center p-2 rounded-full cursor-pointer hover:bg-gray-100 transition-colors">
                        <Menu className="text-gray-500" size={24} />
                    </button>
                </div>
            </header>

            {isMenuOpen && createPortal(
                <div className="fixed inset-0 z-50 flex justify-end">
                    {/* Backdrop for click outside to close */}
                    <div
                        className="fixed inset-0"
                        onClick={toggleMenu}
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                    ></div>

                    {/* Sidebar container with responsive width */}
                    <div className="relative w-full md:max-w-sm bg-white shadow-xl flex flex-col h-full animate-slide-in text-sm">
                        {/* Sidebar Header with close button */}
                        <div className="flex justify-between items-center p-3">
                            <span className="text-lg font-semibold"></span>
                            <button onClick={toggleMenu} className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                                <X size={20} className="text-gray-500" />
                            </button>
                        </div>

                        {/* Scrollable content area */}
                        <div className="flex-1 overflow-y-auto p-3">
                            {/* SWITCH PORTAL section */}
                            <div className="mb-6">
                                <h3 className="text-xs font-semibold text-gray-400 mb-2">SWITCH PORTAL</h3>
                                {portalItems.map((item, index) => {
                                    const isActive = activePortalIndex === index;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setActivePortalIndex(index)}
                                            className={`flex items-center justify-center w-full px-4 py-2 mb-2 rounded-lg transition-colors 
                                                ${isActive
                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                    : 'bg-white text-black border border-gray-300 hover:bg-gray-100'}`}
                                        >
                                            <span className={`mr-2 ${isActive ? 'text-white' : 'text-black'}`}>{item.icon}</span>
                                            <span className="font-medium">{item.label}</span>
                                        </button>
                                    );
                                })}
                            </div>

                            {/* NAVIGATION section */}
                            <div className="mb-6">
                                <h3 className="text-xs font-semibold text-gray-400 mb-2">NAVIGATION</h3>
                                {navItems.map((item, index) => {
                                    const isActive = activeNavIndex === index;
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => setActiveNavIndex(index)}
                                            className={`flex items-center w-full px-4 py-3 mb-2 rounded-lg transition-colors 
                                                ${isActive
                                                    ? 'bg-blue-600 text-white shadow-lg'
                                                    : 'bg-white text-black hover:bg-gray-100'}`}
                                        >
                                            <span className={`mr-3 ${isActive ? 'text-white' : 'text-black'}`}>
                                                {item.icon}
                                            </span>
                                            <span className="font-medium">{item.label}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* User Info section */}
                        <div className="p-3 bg-gray-50 border-t border-gray-200 flex-none text-sm">
                            <div className="flex items-center space-x-3 mb-2">
                                <User size={36} className="text-gray-400 p-2 bg-gray-200 rounded-full" />
                                <div>
                                    <h4 className="font-semibold text-slate-800 text-sm">Sarah Johnson</h4>
                                    <p className="text-xs text-gray-500">Engineering</p>
                                </div>
                            </div>
                            <p className="text-xs text-gray-400">Session: 01/09/2025</p>
                            <div className="flex items-center text-green-500 text-xs mt-2">
                                <CheckSquare size={16} className="mr-1 text-green-500" />
                                Enhanced features active
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
