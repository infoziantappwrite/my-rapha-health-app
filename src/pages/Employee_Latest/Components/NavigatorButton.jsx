import { useState } from "react";
import { Stethoscope, X } from "lucide-react";

export default function NavigatorButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* 🚀 Primary Button */}
      <button
  onClick={() => setOpen(true)}
  className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-xs font-medium transition-all
    disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none 
    [&_svg:not([class*='size-'])]:size-3 shrink-0 outline-none focus-visible:border-ring 
    focus-visible:ring-ring/50 focus-visible:ring-[3px] py-1.5 h-8 px-3 rounded-full
    bg-[#5B3F98] hover:bg-[#4a3279] text-white dark:bg-[#6a50b5] dark:hover:bg-[#5b3fa0]"
>
  <Stethoscope className="h-3.5 w-3.5 mr-1" />
  Talk to Rapha Navigator
</button>


      {/* 💬 Dialog Box */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl max-w-md w-full mx-4 p-6 transition-all">
            
            {/* Close Button */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#5B3F98] dark:bg-[#6a50b5] p-2 rounded-full text-white">
                <Stethoscope className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Talk to Rapha Navigator
              </h2>
            </div>

            {/* Body */}
            <p className="text-gray-600 dark:text-gray-300 mb-5 text-sm leading-relaxed">
              Our Navigator is here to help you understand your next steps,
              clarify reports, or connect with your care team.
            </p>

            {/* Actions */}
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-200 text-gray-800 hover:bg-gray-300 
                  dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setOpen(false);
                  alert("Starting Navigator chat...");
                }}
                className="px-4 py-2 rounded-full text-sm font-medium bg-[#5B3F98] hover:bg-[#4a3279] text-white 
                  dark:bg-[#6a50b5] dark:hover:bg-[#5b3fa0] transition-colors"
              >
                Start Chat
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
