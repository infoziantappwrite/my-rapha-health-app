import React from "react";
import { X, MessageCircle } from "lucide-react";

const ChatSidebar = ({ isOpen, onClose }) => {
  const messages = [
    {
      sender: "Dr. Mark Wilson",
      time: "10:30 AM",
      text: "Robert Anderson's PSA results are concerning. I've scheduled him for urologist consultation tomorrow at 9 AM.",
      outgoing: false,
    },
    {
      sender: "Dr. Sarah Chen",
      time: "10:32 AM",
      text: "Thanks for the quick turnaround. Patient has been notified and is aware of the urgency.",
      outgoing: true,
    },
    {
      sender: "Dr. Mark Wilson",
      time: "10:35 AM",
      text: "Perfect. I'll send the referral paperwork to the urologist and follow up with the patient after the appointment.",
      outgoing: false,
    },
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className={` min-h-screen fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 z-50 h-full transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          w-[90%] sm:max-w-sm md:w-[540px] bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg border-l border-gray-200 dark:border-gray-700 flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <h2 className="flex items-center space-x-2 text-lg font-semibold text-foreground dark:text-white">
            <MessageCircle className="h-5 w-5 text-blue-600" />
            <span>Navigator Communication</span>
          </h2>
          <button
            onClick={onClose}
            className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>
        </div>

        {/* Sub-header */}
        <div className="px-6 text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700 py-2">
          Case: James Wilson - Heart
        </div>

        {/* Chat messages */}
        <div className="flex-1 px-6 py-4 overflow-y-auto flex flex-col space-y-3">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.outgoing ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`inline-block max-w-[80%] p-3 rounded-xl break-words
                  ${msg.outgoing ? "bg-blue-600 text-white" : "bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100"}`}
              >
                <div className="text-xs opacity-70 mb-1">
                  {msg.sender} • {msg.time}
                </div>
                <div className="text-sm text-wrap">{msg.text}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Input area */}
        <div className="px-6 py-3 border-t border-gray-200 dark:border-gray-700 flex space-x-2">
          <textarea
            className="flex-1 resize-none border border-gray-300 dark:border-gray-600 rounded-xl px-3 py-2 text-sm dark:bg-gray-800/80 backdrop-blur-sm break-words"
            placeholder="Type your message..."
            rows="1"
          ></textarea>
          <button className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
