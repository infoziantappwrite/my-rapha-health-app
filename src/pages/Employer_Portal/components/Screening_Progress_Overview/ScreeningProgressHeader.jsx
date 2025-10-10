import React, { useState } from "react";
import { MessageSquare, Calendar } from "lucide-react";
import NotificationToast from "../../../../components/NotificationToast";

const ScreeningProgressHeader = ({
  title = "Screening Progress Overview",
  subtitle = "Comprehensive health screening across five focus areas",
  messageButtonLabel = "Message Rapha Team",
  scheduleButtonLabel = "Schedule More Screenings",
}) => {
  const [notification, setNotification] = useState({
    show: false,
    title: "",
    content: "",
  });

  const showNotification = (title, content) => {
    setNotification({ show: true, title, content });

    // Auto-close after 4 seconds
    setTimeout(() => {
      setNotification({ show: false, title: "", content: "" });
    }, 4000);
  };

  return (
    <div className="flex items-center justify-between">
      {/* Left section: Dynamic title + subtitle */}
      <div>
        <h1 className="text-3xl font-semibold text-emerald-900 dark:text-emerald-400">
          {title}
        </h1>
        <p className="text-gray-600 dark:text-gray-300">{subtitle}</p>
      </div>

      {/* Right section: Buttons */}
      <div className="flex space-x-2">
        {/* Message Button */}
        <button
          onClick={() =>
            showNotification(
              "📧 Information",
              "Messaging Rapha Team for screening optimization insights."
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition
                     border border-gray-300 bg-white text-gray-800 hover:bg-gray-100
                     dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-700
                     h-9 px-4 py-2"
        >
          <MessageSquare className="h-4 w-4" />
          {messageButtonLabel}
        </button>

        {/* Schedule Button */}
        <button
          onClick={() =>
            showNotification(
              "🗓️ Screening Update",
              "Your additional screening has been successfully scheduled."
            )
          }
          className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition
                     text-white bg-emerald-600 hover:bg-emerald-700 h-9 px-4 py-2"
        >
          <Calendar className="h-4 w-4" />
          {scheduleButtonLabel}
        </button>
      </div>

      {/* Notification Toast */}
      {notification.show && (
        <NotificationToast
          title={notification.title}
          content={notification.content}
          onClose={() =>
            setNotification({ show: false, title: "", content: "" })
          }
        />
      )}
    </div>
  );
};

export default ScreeningProgressHeader;
