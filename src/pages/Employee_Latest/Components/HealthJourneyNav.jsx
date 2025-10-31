import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  User,
  Users,
  GraduationCap,
  Calendar,
  Activity,
  Stethoscope,
  MessageCircle,
} from "lucide-react";

const navItems = [
  { label: "My Profile", icon: User, route: "/employee/profile" },
  { label: "Family Risk", icon: Users, route: "/employee/family-risk" },
  { label: "Education", icon: GraduationCap, route: "/employee/education" },
  { label: "Screening", icon: Calendar, route: "/employee/screening" },
  { label: "Results", icon: Activity, route: "/employee/results" },
  { label: "Follow-Up", icon: Stethoscope, route: "/employee/follow-up" },
  { separator: true },
  { label: "Support", icon: MessageCircle, route: "/employee/support" },
];

const HealthJourneyNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-xl shadow-sm  flex flex-col gap-4">
      {/* Header */}
      <div className="px-6 pt-6 border-b border-gray-300 dark:border-gray-700 pb-4">
        <h4 className="text-base font-semibold">Health Journey</h4>
      </div>

      {/* Navigation Buttons */}
      <div className="px-6 pb-6 space-y-2">
        {navItems.map((item, idx) =>
          item.separator ? (
            <div
              key={`sep-${idx}`}
              className="my-3 border-t border-gray-300 dark:border-gray-700"
            ></div>
          ) : (
            <button
              key={item.route}
              onClick={() => navigate(item.route)}
              className={`w-full flex items-center gap-2 text-sm font-medium rounded-md h-9 px-4 py-2 transition-all
                ${
                  location.pathname === item.route
                    ? "bg-[#5D3FD3] text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-gray-100 text-gray-700 dark:text-gray-300"
                }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default HealthJourneyNav;
