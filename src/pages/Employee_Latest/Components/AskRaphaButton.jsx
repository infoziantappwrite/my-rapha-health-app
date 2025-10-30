import { useState } from "react";
import { Sparkles, X } from "lucide-react";

export default function AskRaphaButton() {
  const [open, setOpen] = useState(false);

  return (
    <div >
      {/* --- Ask Rapha Button --- */}
    <button
  onClick={() => setOpen(true)}
  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-xs font-medium transition-all
    disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
    [&_svg:not([class*='size-'])]:size-3 shrink-0 [&_svg]:shrink-0 outline-none
    focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40
    aria-invalid:border-destructive border bg-background hover:text-accent-foreground
    dark:bg-input/30 dark:border-input dark:hover:bg-input/50 py-1.5 has-[>svg]:px-2.5
    border-[#5B3F98] text-[#5B3F98] hover:bg-purple-50 dark:text-[#CBB2FF]
    dark:hover:bg-[#2a1f47] h-8 px-3 rounded-full transition-colors"
>
  <Sparkles className="h-3.5 w-3.5 mr-1" />
  Ask Rapha
</button>


      {/* --- Popup Dialog --- */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div
            className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl
              max-w-md w-full mx-4 p-6 transition-all "
          >
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600
                dark:text-gray-500 dark:hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#5B3F98] p-2 rounded-full text-white dark:bg-[#6a50b5]">
                <Sparkles className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Ask Rapha
              </h2>
            </div>

            {/* Body */}
            <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed">
              Need help with your care journey? Ask Rapha — your AI assistant for
              personalized guidance and health education. Get answers anytime with
              full privacy.
            </p>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-full text-sm font-medium
                  bg-gray-200 text-gray-800 hover:bg-gray-300
                  dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700
                  transition-colors"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  alert('Opening Rapha Assistant…');
                }}
                className="px-4 py-2 rounded-full text-sm font-medium
                  bg-[#5B3F98] hover:bg-[#4a3279] text-white
                  dark:bg-[#6a50b5] dark:hover:bg-[#5b3fa0]
                  transition-colors"
              >
                Start Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
