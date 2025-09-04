import React, { useState } from "react";
import { MessageSquare, Paperclip, Send, X } from "lucide-react";

const MessageNavigatorModal = ({ open, onClose }) => {
  const [activeTab, setActiveTab] = useState("compose");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/50"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[80vh] overflow-y-auto p-6 z-50">
        {/* Header */}
        <div className="flex items-center space-x-2 mb-4">
          <MessageSquare className="h-5 w-5 text-emerald-600" />
          <h2 className="text-lg font-semibold">Message Navigator Team</h2>
        </div>

        {/* Tabs */}
        <div className="bg-gray-100 rounded-xl p-1 grid grid-cols-2 mb-6">
          <button
            onClick={() => setActiveTab("compose")}
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              activeTab === "compose"
                ? "bg-white border border-gray-300 text-gray-900"
                : "text-gray-600"
            }`}
          >
            Compose Message
          </button>
          <button
            onClick={() => setActiveTab("history")}
            className={`px-3 py-2 rounded-xl text-sm font-medium ${
              activeTab === "history"
                ? "bg-white border border-gray-300 text-gray-900"
                : "text-gray-600"
            }`}
          >
            Message History
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "compose" && (
          <div className="space-y-4">
            {/* Recipient + Priority */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium">Recipient</label>
                <button className="w-full mt-1 flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm">
                  Rapha Navigator Team
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
              <div>
                <label className="text-sm font-medium">Priority</label>
                <button className="w-full mt-1 flex items-center justify-between border border-gray-300 rounded-md px-3 py-2 text-sm">
                  Medium Priority
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 opacity-50"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Subject */}
            <div>
              <label className="text-sm font-medium">Subject</label>
              <input
                type="text"
                placeholder="Enter message subject..."
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea
                className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm min-h-44 resize-none"
                defaultValue={`Hi Navigator Team,

Please provide an update on our Phase 2 rollout progress:

1. Mobile Unit scheduling optimization status
2. BJC Site screening volume trends
3. High-risk patient follow-up rates
4. Any resource constraints for Phase 3

Best regards,
Jennifer Martinez, CEO`}
              ></textarea>
            </div>

            {/* Attach Button */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center gap-2 border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100">
                <Paperclip className="h-4 w-4" />
                Attach File
              </button>
            </div>

            {/* Footer */}
            <div className="flex justify-between">
              <button
                onClick={onClose}
                className="border border-gray-300 rounded-md px-4 py-2 text-sm hover:bg-gray-100"
              >
                Cancel
              </button>
              <button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md px-4 py-2 text-sm">
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </div>
          </div>
        )}

        {activeTab === "history" && (
  <div className="space-y-4">
    {/* Message 1 */}
    <div className="bg-white border border-gray-300 rounded-xl hover:shadow-sm cursor-pointer p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="font-medium">High-risk employee follow-up status</div>
          <div className="text-sm text-gray-500 mt-1">
            Jennifer Martinez (CEO) → Dr. Sarah Chen
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-500">2025-01-20</div>
          <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded-md text-xs font-medium">
            ✓ Replied
          </span>
        </div>
      </div>
    </div>

    {/* Message 2 */}
    <div className="bg-white border border-gray-300 rounded-xl hover:shadow-sm cursor-pointer p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="font-medium">Cardiovascular screening recommendations</div>
          <div className="text-sm text-gray-500 mt-1">Dr. Lisa Park → HR Team</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-500">2025-01-18</div>
          <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md text-xs font-medium">
            📤 Sent
          </span>
        </div>
      </div>
    </div>

    {/* Message 3 */}
    <div className="bg-white border border-gray-300 rounded-xl hover:shadow-sm cursor-pointer p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="font-medium">Resource allocation update for Q1</div>
          <div className="text-sm text-gray-500 mt-1">Operations Team → Jennifer Martinez (CEO)</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-500">2025-01-15</div>
          <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-md text-xs font-medium">
            ⏳ Pending
          </span>
        </div>
      </div>
    </div>

    {/* Message 4 */}
    <div className="bg-white border border-gray-300 rounded-xl hover:shadow-sm cursor-pointer p-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="font-medium">Monthly screening summary report</div>
          <div className="text-sm text-gray-500 mt-1">Analytics System → Rapha Navigator Team</div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-sm text-gray-500">2025-01-10</div>
          <span className="bg-purple-100 text-purple-800 px-2 py-0.5 rounded-md text-xs font-medium">
            📎 Attachment
          </span>
        </div>
      </div>
    </div>
  </div>
)}


        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default MessageNavigatorModal;
