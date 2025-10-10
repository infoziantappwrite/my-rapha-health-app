// PopupParent.jsx
import React, { useState } from "react";
import PopupHeader from "./PopupHeader";
import PopupSections from "./PopupSections";
import PopupButtons from "./Popupbuttons";
import Aiassist from "./Aiassist";
import NotificationToast from "../../../../components/NotificationToast";

const PopupParent = ({ isOpen, step, onClose }) => {
  const [toast, setToast] = useState(null);

  if (!isOpen || !step) return null;

  const showNotification = (title, content) => {
    setToast({ title, content });
  };

  const handleCloseToast = () => setToast(null);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur background */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup box */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto z-10 ">
        <PopupHeader stepData={step} onClose={onClose} />
        <div className="p-6 space-y-4">
          <PopupSections stepData={step} />
          <PopupButtons stepData={step} showNotification={showNotification} />
          <Aiassist step={step} />
        </div>
      </div>

      {/* Notification Toast */}
      {toast && (
        <NotificationToast
          title={toast.title}
          content={toast.content}
          bgColor="bg-blue-50 dark:bg-gray-800"
          borderColor="border-blue-300 dark:border-gray-700"
          onClose={handleCloseToast}
        />
      )}
    </div>
  );
};

export default PopupParent;
