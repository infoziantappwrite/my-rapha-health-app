import React from "react";
import { ShieldCheck } from "lucide-react"; // default icon

const AdminHeader = ({
  icon = <ShieldCheck className="w-6 h-6 text-white" />, // default icon
  title = "Admin Dashboard",                              // default title
  subtitle = "Comprehensive platform oversight and stewardship control center", // default subtitle
}) => {
  return (
    <div className="flex items-start gap-4 p-6 rounded-lg shadow-sm         
                    bg-gradient-to-r from-purple-600 to-purple-700 
                    dark:from-purple-700 dark:to-purple-800">
      {icon && (
        <div className="flex-shrink-0 p-3 rounded-full bg-white/10 dark:bg-gray-700/20">
          {icon}
        </div>
      )}
      <div>
        <h1 className="text-2xl font-medium mb-1 text-white dark:text-gray-100">
          {title}
        </h1>
        <p className="text-sm leading-relaxed text-purple-100 dark:text-purple-200">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default AdminHeader;
