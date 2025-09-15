import React, { useState, useRef, useEffect } from "react";
import { Flag, ChevronDown } from "lucide-react";

const FollowUpTriageCard = () => {
  const [selectedOption, setSelectedOption] = useState("Prostate");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const options = ["Prostate", "Liver", "Kidney", "Heart"];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="bg-card text-card-foreground bg-white dark:bg-gray-800 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700">
      {/* Card Header */}
      <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6">
        <h4 className="flex items-center space-x-2 text-lg font-semibold">
          <Flag className="h-6 w-6 text-blue-600" />
          <span>Follow-Up Triage Dashboard</span>
        </h4>
      </div>

      {/* Card Content */}
      <div className="px-6 pb-6">
        <div className="flex flex-wrap gap-4 mt-2">
          {/* Dropdown/select button */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between gap-2 w-48 h-9 px-3 py-2 text-sm border rounded-md border-gray-300 dark:border-gray-600 bg-input-background dark:bg-input/30 hover:bg-gray-50 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <span>{selectedOption}</span>
              <ChevronDown className="w-4 h-4 opacity-50" />
            </button>

            {isOpen && (
              <div className="absolute mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-md shadow-lg z-50">
                {options.map((opt) => (
                  <div
                    key={opt}
                    onClick={() => {
                      setSelectedOption(opt);
                      setIsOpen(false);
                    }}
                    className="px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {opt}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUpTriageCard;
