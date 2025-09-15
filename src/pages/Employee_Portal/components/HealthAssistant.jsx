import React, { useState } from "react";
import { BrainCircuit } from "lucide-react";
import NotificationToast from "../../../components/NotificationToast";

const AIHealthAssistant = () => {
  const [toastData, setToastData] = useState(null);

  const aiResponses = [
    {
      title: "Information",
      content:
        "🤖 AI Assistant: I'm here to help you understand your health journey. You can ask me about screening preparation, test results, or prevention strategies. What would you like to know?",
    },
    {
      title: "Information",
      content:
        "🤖 AI Assistant: Based on your profile, I recommend focusing on heart health education and scheduling your annual mammogram. Your cancer screening results are excellent! Would you like specific guidance?",
    },
    {
      title: "Information",
      content:
        "🤖 AI Assistant: Your recent screening shows excellent cancer markers and normal diabetes indicators. Your heart health needs attention - elevated cholesterol suggests dietary changes. Would you like a detailed action plan?",
    },
  ];

  const handleButtonClick = (index) => {
    setToastData({
      ...aiResponses[index],
      bgColor: "bg-indigo-50 dark:bg-indigo-800/80",
      borderColor: "border-indigo-200 dark:border-indigo-700",
    });
  };

  return (
    <div className="relative">
      {/* Main AI Assistant Card */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 p-6 rounded-2xl shadow-sm 
        bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-100 dark:border-indigo-800">
        
        {/* Icon */}
        <div className="flex-shrink-0 w-16 h-16 rounded-full bg-white dark:bg-indigo-800 flex items-center justify-center shadow-sm">
          <BrainCircuit className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
        </div>

        {/* Content */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-xl font-semibold text-indigo-900 dark:text-indigo-100">
            AI Health Assistant
          </h2>
          <p className="text-sm text-indigo-700 dark:text-indigo-300 mt-1">
            Get instant answers to your health questions, understand your screening results, and receive personalized recommendations powered by advanced AI.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center lg:justify-start">
            <button
              onClick={() => handleButtonClick(0)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg 
                bg-indigo-600 hover:bg-indigo-700 text-white font-medium 
                dark:bg-indigo-500 dark:hover:bg-indigo-600"
            >
              <BrainCircuit className="w-4 h-4" />
              Ask About My Health
            </button>

            <button
              onClick={() => handleButtonClick(1)}
              className="px-4 py-2 rounded-lg border border-indigo-300 dark:border-indigo-700 
                text-indigo-700 dark:text-indigo-300 font-medium 
                hover:bg-indigo-100 dark:hover:bg-indigo-800"
            >
              Get Recommendations
            </button>

            <button
              onClick={() => handleButtonClick(2)}
              className="px-4 py-2 rounded-lg border border-indigo-300 dark:border-indigo-700 
                text-indigo-700 dark:text-indigo-300 font-medium 
                hover:bg-indigo-100 dark:hover:bg-indigo-800"
            >
              Explain My Results
            </button>
          </div>
        </div>
      </div>

      {/* Notification Toast */}
      {toastData && (
        <NotificationToast
          title={toastData.title}
          content={toastData.content}
          bgColor={toastData.bgColor}
          borderColor={toastData.borderColor}
          onClose={() => setToastData(null)}
        />
      )}
    </div>
  );
};

export default AIHealthAssistant;
