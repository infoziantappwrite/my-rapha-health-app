import React, { useEffect, useState } from "react";
import { CheckCircle2, Bell } from "lucide-react";

const NotificationToast = ({ title, content, bgColor, borderColor, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Trigger in-animation
    setVisible(true);

    // Auto close after 3s with out-animation
    const timer = setTimeout(() => {
      setVisible(false);
      // Delay calling onClose until animation finishes
      setTimeout(() => {
        if (onClose) onClose();
      }, 300); // Match transition duration
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 z-50">
      <div
        className={`flex items-start gap-3 rounded-lg shadow-md p-4 border ${bgColor} ${borderColor}
          transform transition-all duration-300
          ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"}
        `}
      >
        {/* Left Icon */}
        <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-1" />

        {/* Content */}
        <div className="flex-1">
          <div className="font-semibold">{title}</div>
          <div className="text-sm text-gray-700">{content}</div>
        </div>

        {/* Right Icon */}
        <Bell className="h-5 w-5 text-gray-400" />
      </div>
    </div>
  );
};

export default NotificationToast;
