import { useState } from "react";
import { Stethoscope, Sparkles, X } from "lucide-react";

export default function RaphaSupportButtons() {
  const [activeDialog, setActiveDialog] = useState(null);

  const handleClose = () => setActiveDialog(null);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 mt-8 border border-gray-200 dark:border-gray-700">
      <div className="text-center">
        <p className="text-base text-gray-800 dark:text-gray-100 mb-4 font-medium">
          Need help? You’re never alone — Rapha is here for you.
        </p>

        {/* --- Buttons Row --- */}
        <div className="flex items-center justify-center gap-4 flex-wrap sm:flex-nowrap">
          {/* Talk to Navigator */}
          <button
            onClick={() => setActiveDialog("navigator")}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium 
              transition-all disabled:pointer-events-none disabled:opacity-50 
              [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none 
              focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 
              py-2 h-9 px-4 rounded-full bg-purple-600 hover:bg-purple-700 text-white 
              dark:bg-purple-500 dark:hover:bg-purple-600"
          >
            <Stethoscope className="h-4 w-4 mr-1" />
            Talk to Rapha Navigator
          </button>

          {/* Ask Rapha (AI Assistant) */}
          <button
            onClick={() => setActiveDialog("ai")}
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium 
              transition-all disabled:pointer-events-none disabled:opacity-50 
              [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none 
              focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 
              py-2 h-9 px-4 rounded-full border border-purple-400 text-purple-700 hover:bg-purple-50 
              dark:border-purple-500 dark:text-purple-300 dark:hover:bg-purple-950/30"
          >
            <Sparkles className="h-4 w-4 mr-1" />
            Ask Rapha
          </button>
        </div>
      </div>

      {/* --- Dialogs --- */}
      {activeDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full mx-4 p-6">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 
                dark:hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Dialog Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-600 dark:bg-purple-500 p-2 rounded-full text-white">
                {activeDialog === "navigator" ? (
                  <Stethoscope className="h-5 w-5" />
                ) : (
                  <Sparkles className="h-5 w-5" />
                )}
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                {activeDialog === "navigator"
                  ? "Talk to Rapha Navigator"
                  : "Ask Rapha (AI Assistant)"}
              </h2>
            </div>

            {/* Dialog Body */}
            <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed">
              {activeDialog === "navigator"
                ? "Our Navigator team is ready to guide you personally — get help understanding results, booking screenings, or connecting with your care coach."
                : "Ask Rapha anything about your wellness journey — from understanding your results to getting daily health insights powered by AI."}
            </p>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={handleClose}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-800 
                  hover:bg-gray-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 
                  transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  handleClose();
                  alert(
                    activeDialog === "navigator"
                      ? "Starting chat with Navigator..."
                      : "Opening AI Assistant..."
                  );
                }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-purple-600 hover:bg-purple-700 
                  text-white dark:bg-purple-500 dark:hover:bg-purple-600 transition-colors"
              >
                {activeDialog === "navigator" ? "Start Chat" : "Ask Now"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
