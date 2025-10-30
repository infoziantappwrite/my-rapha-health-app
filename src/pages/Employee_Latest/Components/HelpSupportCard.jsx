import React, { useState } from "react";
import { Phone, BrainCircuit, X } from "lucide-react";

export default function HelpSupportCard() {
  const [openPanel, setOpenPanel] = useState(null);

  const closePanel = () => setOpenPanel(null);

  return (
    <div className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-sm p-6 mt-8 border border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <div className="text-center">
        <p className="text-base text-gray-800 dark:text-gray-100 mb-4 font-medium">
          Need help? You're never alone — <span className="text-purple-600 dark:text-purple-400 font-semibold">Rapha</span> is here for you.
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
          {/* Button 1 — Rapha Navigator */}
          <button
            onClick={() => setOpenPanel("navigator")}
            className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-md text-sm font-medium transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <Phone className="w-4 h-4" />
            <span>Talk to Rapha Navigator</span>
          </button>

          {/* Button 2 — AI Assistant */}
          <button
            onClick={() => setOpenPanel("ai")}
            className="flex items-center justify-center gap-2 border border-slate-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-slate-100 dark:hover:bg-gray-700 text-slate-700 dark:text-gray-200 px-6 py-2.5 rounded-md text-sm font-medium transition-all shadow-sm focus-visible:ring-2 focus-visible:ring-purple-400"
          >
            <BrainCircuit className="w-4 h-4" />
            <span>AI Health Assistant</span>
          </button>
        </div>
      </div>

      {/* --- ASIDE PANEL --- */}
      {openPanel && (
        <>
          <div
            onClick={closePanel}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
          ></div>

          <aside
            className="fixed right-0 top-0 h-full w-80 sm:w-96 bg-white dark:bg-gray-900 shadow-xl border-l border-gray-200 dark:border-gray-700 z-50 p-6 transition-transform duration-300 animate-slideIn"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {openPanel === "navigator" ? "Rapha Navigator" : "AI Health Assistant"}
              </h2>
              <button
                onClick={closePanel}
                className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              >
                <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </button>
            </div>

            {openPanel === "navigator" ? (
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <p>
                  📞 Need personal guidance? Our human navigator will connect you to
                  the right care resources, schedule follow-ups, and answer any
                  queries.
                </p>
                <button className="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Start Chat with Navigator
                </button>
              </div>
            ) : (
              <div className="space-y-3 text-gray-700 dark:text-gray-300 text-sm">
                <p>
                  🤖 Your AI Health Assistant can help analyze your symptoms,
                  track vitals, or guide you through wellness goals.
                </p>
                <button className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                  Open AI Assistant
                </button>
              </div>
            )}
          </aside>
        </>
      )}
    </div>
  );
}
