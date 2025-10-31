import {
  Phone,
  FileText,
  Info,
  Send,
  CircleCheckBig,
} from "lucide-react";

export default function RaphaNavigatorCard() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col gap-4 rounded-xl sticky top-6 border-2 border-teal-200 dark:border-teal-700 shadow-sm">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-b border-teal-100 dark:border-gray-700 px-6 pt-5 pb-4 flex justify-between items-center rounded-t-xl">
        <div>
          <h4 className="text-base font-semibold text-[#303046] dark:text-gray-100">
            Your Rapha Navigator
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Real people. Real help. Real time.
          </p>
        </div>
        <span className="inline-flex items-center rounded-md px-2 py-0.5 text-xs font-medium bg-green-500 text-white">
          Online
        </span>
      </div>

      {/* Chat Area */}
      <div className="h-[360px] overflow-y-auto p-4 space-y-4">
        {/* Message from Navigator */}
        <div className="flex justify-start">
          <div className="max-w-[80%]">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
                RN
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Navigator
              </span>
            </div>
            <div className="rounded-lg p-3 bg-teal-50 dark:bg-teal-900/30 text-teal-900 dark:text-teal-200 border border-teal-200 dark:border-teal-800">
              <p className="text-sm">
                Hi Sarah! I reviewed your recent heart health results. Let's
                schedule a follow-up call to discuss your next steps.
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-1 px-1">10:30 AM</p>
          </div>
        </div>

        {/* Message from User */}
        <div className="flex justify-end">
          <div className="max-w-[80%]">
            <div className="rounded-lg p-3 bg-purple-500 text-white">
              <p className="text-sm">Thanks! When would be a good time?</p>
            </div>
            <p className="text-xs text-gray-400 mt-1 px-1 text-right">
              10:45 AM
            </p>
          </div>
        </div>

        {/* Message from Navigator */}
        <div className="flex justify-start">
          <div className="max-w-[80%]">
            <div className="flex items-center gap-2 mb-1">
              <div className="h-6 w-6 flex items-center justify-center rounded-full bg-teal-100 text-teal-700 text-xs font-medium">
                RN
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Navigator
              </span>
            </div>
            <div className="rounded-lg p-3 bg-teal-50 dark:bg-teal-900/30 text-teal-900 dark:text-teal-200 border border-teal-200 dark:border-teal-800">
              <p className="text-sm">
                I have availability tomorrow at 2 PM or Friday at 10 AM. Which
                works better for you?
              </p>
            </div>
            <p className="text-xs text-gray-400 mt-1 px-1">10:47 AM</p>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
        <p className="text-xs font-medium text-gray-600 dark:text-gray-300 mb-2">
          Quick Actions
        </p>
        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-1.5 text-xs font-medium border bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-teal-50 dark:hover:bg-gray-700 px-3 py-1.5 rounded-md transition-all">
            <Phone className="h-3 w-3" /> Schedule Call
          </button>
          <button className="flex items-center gap-1.5 text-xs font-medium border bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-purple-50 dark:hover:bg-gray-700 px-3 py-1.5 rounded-md transition-all">
            <FileText className="h-3 w-3" /> Share Document
          </button>
          <button className="flex items-center gap-1.5 text-xs font-medium border bg-white dark:bg-gray-800 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 px-3 py-1.5 rounded-md transition-all">
            <Info className="h-3 w-3" /> Ask About Results
          </button>
        </div>
      </div>

      {/* Input Area */}
      <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full h-9 rounded-md border border-gray-300 dark:border-gray-700 dark:bg-gray-800 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 dark:focus:ring-teal-600 placeholder-gray-400 dark:placeholder-gray-500"
        />
        <button
          disabled
          className="inline-flex items-center justify-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white text-sm rounded-md px-3 py-1.5 disabled:opacity-50"
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
