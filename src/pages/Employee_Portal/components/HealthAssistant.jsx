import React from "react";
import { BrainCircuit } from "lucide-react";

const AIHealthAssistant = () => {
  return (
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
          Get instant answers to your health questions, understand your
          screening results, and receive personalized recommendations powered by
          advanced AI.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 mt-4 justify-center lg:justify-start">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg 
            bg-indigo-600 hover:bg-indigo-700 text-white font-medium 
            dark:bg-indigo-500 dark:hover:bg-indigo-600">
            <BrainCircuit className="w-4 h-4" />
            Ask About My Health
          </button>

          <button className="px-4 py-2 rounded-lg border border-indigo-300 dark:border-indigo-700 
            text-indigo-700 dark:text-indigo-300 font-medium 
            hover:bg-indigo-100 dark:hover:bg-indigo-800">
            Get Recommendations
          </button>

          <button className="px-4 py-2 rounded-lg border border-indigo-300 dark:border-indigo-700 
            text-indigo-700 dark:text-indigo-300 font-medium 
            hover:bg-indigo-100 dark:hover:bg-indigo-800">
            Explain My Results
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIHealthAssistant;
