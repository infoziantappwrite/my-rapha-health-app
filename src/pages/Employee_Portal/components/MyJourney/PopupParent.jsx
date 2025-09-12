import React from "react";
import PopupHeader from "./PopupHeader";
import Aiassist from "./Aiassist";
import StepProgressCard from "./StepProgressCard";
import PopupSections from "./PopupSections";
import Popupbuttons from "./Popupbuttons";

const PopupParent = ({ isOpen, step, onClose }) => {
  if (!isOpen || !step) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Blur background */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Popup box */}
      <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg w-full max-w-lg max-h-[80vh] overflow-y-auto z-10">
        {/* Header (pass full step) */}
        <PopupHeader stepData={step} onClose={onClose} />

        {/* Body */}
        <div className="p-6 flex flex-col gap-6">
  <StepProgressCard stepData={step} />
  <PopupSections stepData={step} />
  <Popupbuttons stepData={step} />
  <Aiassist step={step} />
</div>

      </div>
    </div>
  );
};

export default PopupParent;
