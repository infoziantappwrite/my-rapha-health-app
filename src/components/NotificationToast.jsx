import React, { useEffect, useState } from "react";
import { CheckCircle2, Bell } from "lucide-react";

const NotificationToast = ({ title, content, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => {
        if (onClose) onClose();
      }, 300); // Match transition duration
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  // Truncate content if longer than 40 characters
  const truncateContent = content.length > 40 ? content.slice(0, 40) + "..." : content;

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`flex items-start gap-3 rounded-lg shadow-lg p-5 border w-96
          bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700
          transform transition-all duration-300
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-6"}
        `}
      >
        {/* Left Icon */}
        <CheckCircle2 className="h-6 w-6 text-emerald-600 dark:text-emerald-400 mt-1" />

        {/* Content */}
        <div className="flex-1">
          <div className="font-semibold text-gray-900 dark:text-gray-100">{title}</div>
          <div className="text-sm text-gray-700 dark:text-gray-300">{truncateContent}</div>
        </div>

        {/* Right Icon */}
        <Bell className="h-5 w-5 text-gray-400 dark:text-gray-300" />
      </div>
    </div>
  );
};

export default NotificationToast;
