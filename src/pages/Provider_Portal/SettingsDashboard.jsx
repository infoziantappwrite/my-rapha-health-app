import React, { useState } from "react";
import {
  FileText,
  MessageCircle,
  Phone,
  Mail,
  Plus,
  Settings,
  Users,
  Clock,
  Calendar,
  Cpu,
  Sliders,
  Bell,
} from "lucide-react";
import NotificationToast from "../../components/NotificationToast";

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

  const [escalationRules, setEscalationRules] = useState({
    navigator: "30 minutes",
    md: "1 hour",
    lab: "2 hours",
    critical: "15 minutes",
  });

  const handleSwitch = (key) => {
    setSwitchStates((prev) => ({ ...prev, [key]: !prev[key] }));
    setToastMessage(
      `${key.replace(/([A-Z])/g, " $1")} toggled ${
        !switchStates[key] ? "ON" : "OFF"
      }`
    );
  };

  const handleDropdownChange = (key, value) => {
    setEscalationRules((prev) => ({ ...prev, [key]: value }));
    setToastMessage(`${key} updated to ${value}`);
  };

  return (
    <div className="min-h-screen p-6 space-y-6 text-gray-900 dark:text-white max-w-6xl mx-auto">
      {/* Toast */}
      {toastMessage && (
        <NotificationToast
          title="Notification"
          content={toastMessage}
          onClose={() => setToastMessage("")}
        />
      )}

      {/* Provider Configuration Card (Full Width Title Section) */}
      <div className="rounded-xl border p-6 space-y-4 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <h4 className="flex items-center gap-2 text-lg font-bold">
          <Settings className="h-6 w-6 text-blue-400" /> Provider Configuration
        </h4>
        <p className="text-gray-700 dark:text-gray-400">
          Configure modalities, AI tools, and operational settings for your provider station.
        </p>
      </div>

      {/* Grid Layout for 3 Next Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Modality Settings */}
        <div className="rounded-xl border p-6 space-y-6 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
          <h4 className="flex items-center gap-2 text-lg font-bold">
            <Sliders className="h-6 w-6 text-green-500" /> Modality Settings
          </h4>
          {["bloodDraw", "mammogram", "fitTest", "guardantShield"].map(
            (key, idx) => (
              <div key={key} className="space-y-1">
                <Switch
                  label={key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                  value={switchStates[key]}
                  onChange={() => handleSwitch(key)}
                />
                <span className="block text-xs">Daily Capacity</span>
                <input
                  type="number"
                  className="w-20 px-2 py-1 rounded-md border bg-gray-50 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                  value={
                    key === "fitTest"
                      ? 0
                      : key === "bloodDraw"
                      ? 6
                      : key === "mammogram"
                      ? 4
                      : 8
                  }
                  onChange={(e) =>
                    console.log(`${key} value changed to ${e.target.value}`)
                  }
                />
                {idx < 3 && (
                  <div className="h-px w-full my-2 bg-gray-300 dark:bg-gray-700" />
                )}
              </div>
            )
          )}
        </div>

        {/* AI Tools & Automation */}
        <div className="rounded-xl border p-6 space-y-4 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
          <h4 className="flex items-center gap-2 text-lg font-bold">
            <Cpu className="h-6 w-6 text-purple-500" /> AI Tools & Automation
          </h4>
          {[
            {
              key: "autoRouting",
              label: "Auto Routing",
              description: "Automatically route urgent cases to specialists",
            },
            {
              key: "followUp",
              label: "Follow Up",
              description: "Send automated reminders for follow-ups",
            },
            {
              key: "riskStratification",
              label: "Risk Stratification",
              description: "AI-powered risk assessment for screening results",
            },
            {
              key: "smartScheduling",
              label: "Smart Scheduling",
              description: "Optimize scheduling using historical data",
            },
          ].map(({ key, label, description }) => (
            <div key={key} className="space-y-1">
              <Switch
                label={label}
                value={switchStates[key]}
                onChange={() => handleSwitch(key)}
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                {description}
              </p>
            </div>
          ))}
        </div>

        {/* Template Library */}
        <div className="rounded-xl border p-6 space-y-4 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700 ">
          <h4 className="flex items-center gap-2 text-lg font-bold">
            <FileText className="h-6 w-6 text-orange-500" /> Template Library
          </h4>
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
         <div className="rounded-xl border p-6 space-y-4 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-700">
        <div className=" space-y-4">
          <h4 className="flex items-center gap-2 text-lg font-bold">
            <Bell className="h-6 w-6 text-red-500" /> Escalation Rules
          </h4>

          {[
            { key: "navigator", label: "Navigator Notification" },
            { key: "md", label: "Md Notification" },
            { key: "lab", label: "Lab Delay Alert" },
            { key: "critical", label: "Critical Result Alert" },
          ].map(({ key, label }) => (
            <div key={key} className="flex items-center justify-between">
              <span className="font-medium text-sm">{label}</span>
              <select
                className="w-36 rounded-md border px-3 py-2 text-sm border-gray-300 bg-white dark:bg-gray-700 dark:text-white"
                value={escalationRules[key]}
                onChange={(e) => handleDropdownChange(key, e.target.value)}
              >
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>1 hour</option>
                <option>2 hours</option>
                <option>6 hours</option>
                <option>12 hours</option>
              </select>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Escalation Rules (Full Width with functional dropdowns) */}
     

      {/* Shift Planning Tools */}
      <div className="bg-card text-card-foreground flex flex-col bg-gray-100 dark:bg-gray-800 gap-6 rounded-xl border border-gray-300 dark:border-gray-600">
        <div className="px-6 pt-6">
          <h4 className="flex items-center gap-2 text-lg font-bold">
            <Calendar className="h-6 w-6 text-indigo-500" /> Shift Planning Tools
          </h4>
        </div>
        <div className="px-6 pb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 justify-start border-gray-300 dark:border-gray-600">
              <Users className="h-4 w-4 mr-2" /> Provider Assignments
            </button>
            <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 justify-start border-gray-300 dark:border-gray-600">
              <Clock className="h-4 w-4 mr-2" /> Time Block Creation
            </button>
            <button className="inline-flex items-center gap-2 rounded-md text-sm font-medium transition-all border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-9 px-4 py-2 justify-start border-gray-300 dark:border-gray-600">
              <Calendar className="h-4 w-4 mr-2" /> Schedule Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDashboard;
