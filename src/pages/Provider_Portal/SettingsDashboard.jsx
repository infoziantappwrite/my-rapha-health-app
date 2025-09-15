import React, { useState } from "react";
import {
  FileText,
  MessageCircle,
  Phone,
  Mail,
  Plus,
  Settings,
} from "lucide-react";

// Toast Component
const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-md shadow-md flex items-center justify-between w-80 z-50">
    <span>{message}</span>
    <button onClick={onClose} className="ml-2 font-bold">
      X
    </button>
  </div>
);

// Switch Component
const Switch = ({ label, value, onChange }) => (
  <div className="flex items-center justify-between">
    <label className="text-base font-medium">{label}</label>
    <button
      type="button"
      role="switch"
      aria-checked={value}
      onClick={() => onChange(!value)}
      className={`peer inline-flex h-6 w-12 items-center rounded-full transition-colors ${
        value ? "bg-blue-500" : "bg-gray-400"
      }`}
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
          value ? "translate-x-6" : "translate-x-1"
        }`}
      />
    </button>
  </div>
);

const SettingsDashboard = () => {
  const [toastMessage, setToastMessage] = useState("");
  const [switchStates, setSwitchStates] = useState({
    bloodDraw: true,
    mammogram: true,
    fitTest: false,
    guardantShield: true,
    autoRouting: true,
    followUp: true,
    riskStratification: true,
    smartScheduling: true,
  });

  const handleSwitch = (key) => {
    setSwitchStates((prev) => ({ ...prev, [key]: !prev[key] }));
    setToastMessage(`${key.replace(/([A-Z])/g, " $1")} toggled ${!switchStates[key] ? "ON" : "OFF"}`);
  };

  return (
    <div className="min-h-screen p-6 space-y-6  text-gray-900 dark:text-white">
      {/* Toast */}
      {toastMessage && <Toast message={toastMessage} onClose={() => setToastMessage("")} />}

      {/* Provider Configuration Card */}
      <div className="rounded-xl border p-6 space-y-4 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <h4 className="flex items-center gap-2 text-lg font-bold">
          <Settings className="h-6 w-6 text-blue-400" /> Provider Configuration
        </h4>
        <p className="text-gray-700 dark:text-gray-400">
          Configure modalities, AI tools, and operational settings for your provider station.
        </p>
      </div>

      {/* Modality Settings Card */}
      <div className="rounded-xl border p-6 space-y-6 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <h4 className="text-lg font-bold">Modality Settings</h4>
        {["bloodDraw", "mammogram", "fitTest", "guardantShield"].map((key, idx) => (
          <div key={key} className="space-y-1">
            <Switch
              label={key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
              value={switchStates[key]}
              onChange={() => handleSwitch(key)}
            />
            <input
              type="number"
              className="w-20 px-2 py-1 rounded-md border bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
              value={key === "fitTest" ? 0 : key === "bloodDraw" ? 6 : key === "mammogram" ? 4 : 8}
              onChange={(e) => console.log(`${key} value changed to ${e.target.value}`)}
            />
            {idx < 3 && <div className="h-px w-full my-2 bg-gray-300 dark:bg-gray-700" />}
          </div>
        ))}
      </div>

      {/* AI Tools & Automation Card */}
      <div className="rounded-xl border p-6 space-y-4 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <h4 className="text-lg font-bold">AI Tools & Automation</h4>
        {["autoRouting", "followUp", "riskStratification", "smartScheduling"].map((key) => (
          <Switch
            key={key}
            label={key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}
            value={switchStates[key]}
            onChange={() => handleSwitch(key)}
          />
        ))}
      </div>

      {/* Template Library Card */}
      <div className="rounded-xl border p-6 space-y-4 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <h4 className="text-lg font-bold">Template Library</h4>
        {[
          { name: "Pre-Screening Checklist", icon: FileText },
          { name: "Follow-Up Message Templates", icon: MessageCircle },
          { name: "Emergency Contact Scripts", icon: Phone },
          { name: "Result Notification Templates", icon: Mail },
        ].map((btn) => (
          <button
            key={btn.name}
            className="flex items-center gap-2 px-4 py-2 rounded-md w-full text-left bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            onClick={() => setToastMessage(`${btn.name} clicked`)}
          >
            <btn.icon className="w-4 h-4" />
            {btn.name}
          </button>
        ))}
        <button
          className="flex items-center gap-2 justify-center px-4 py-2 rounded-md w-full bg-blue-500 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white transition-colors"
          onClick={() => setToastMessage("Create New Template clicked")}
        >
          <Plus className="w-4 h-4" /> Create New Template
        </button>
      </div>
    </div>
  );
};

export default SettingsDashboard;
