import React from "react";
import {
  Calendar,
  Phone,
  MessageSquare,
  Activity,
  Bot,
  Info,
  TestTubes,
} from "lucide-react";

const options = [
  {
    id: 1,
    title: "Talk with Navigator",
    subtitle: "Get personalized guidance",
    color: "text-pink-500",
    icon: <MessageSquare className="w-6 h-6 text-pink-500 dark:text-pink-400" />,
    actions: [
      { label: "Schedule Navigator Session", icon: <Calendar className="w-4 h-4" /> },
      { label: "Call Navigator Direct", icon: <Phone className="w-4 h-4" /> },
    ],
  },
  {
    id: 2,
    title: "AI-Powered Help",
    subtitle: "Instant answers & guidance",
    color: "text-green-500",
    icon: <Bot className="w-6 h-6 text-green-500 dark:text-green-400" />,
    actions: [
      { label: "Smart Chat Assistant", icon: <Activity className="w-4 h-4" /> },
      { label: "Get AI Recommendations", icon: <Info className="w-4 h-4" /> },
    ],
  },
  {
    id: 3,
    title: "Blood Draw Scheduling",
    subtitle: "Quick cancer & health markers",
    color: "text-red-500",
    icon: <TestTubes className="w-6 h-6 text-red-500 dark:text-red-400" />,
    actions: [
      { label: "Schedule Blood Test", icon: <Calendar className="w-4 h-4" /> },
      { label: "Check Eligibility", icon: <Info className="w-4 h-4" /> },
    ],
  },
  {
    id: 4,
    title: "Mammogram Scheduling",
    subtitle: "3D breast cancer screening",
    color: "text-pink-600",
    icon: <Activity className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
    actions: [
      { label: "Schedule Mammography", icon: <Calendar className="w-4 h-4" /> },
      { label: "Check Eligibility", icon: <Info className="w-4 h-4" /> },
    ],
  },
];

const ScheduleScreen = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 to-blue-600 dark:from-gray-800 dark:to-gray-900 text-white rounded-2xl shadow-md p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <Calendar className="w-10 h-10 mx-auto mb-3" />
        <h2 className="text-2xl font-semibold mb-2">
          Ready to Schedule Your Screening?
        </h2>
        <p className="text-blue-100 dark:text-gray-300 max-w-2xl mx-auto">
          Book your comprehensive health screening today. Our mobile units come
          to your workplace for maximum convenience, or choose from our network
          of partner labs.
        </p>
        <button className="mt-5 bg-white dark:bg-gray-700 dark:text-gray-200 text-blue-700 font-medium px-6 py-3 rounded-lg shadow hover:bg-blue-50 dark:hover:bg-gray-600 flex items-center gap-2 mx-auto">
          <Calendar className="w-5 h-5" /> Schedule Both Tests
          <span className="ml-2 text-xs bg-blue-200 dark:bg-gray-600 text-blue-800 dark:text-gray-200 px-2 py-0.5 rounded">
            Recommended
          </span>
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {options.map((opt) => (
          <div
            key={opt.id}
            className="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-xl p-5 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-3">
              {opt.icon}
              <div>
                <h3 className="font-semibold">{opt.title}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{opt.subtitle}</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              {opt.actions.map((action, idx) => (
                <button
                  key={idx}
                  className="flex items-center justify-between border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-sm font-medium"
                >
                  {action.label}
                  {action.icon}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row justify-center gap-6 text-sm text-blue-100 dark:text-gray-300 border-t border-blue-400 dark:border-gray-700 pt-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" /> Mobile units on-site
        </div>
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4" /> Results in 3-5 days
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="w-4 h-4" /> Navigator support included
        </div>
      </div>
    </section>
  );
};

export default ScheduleScreen;
