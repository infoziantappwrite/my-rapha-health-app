import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

export default function Messages() {
  const [chatOpen, setChatOpen] = useState(false);
  const [message, setMessage] = useState("");

  const messages = [
    {
      sender: "Dr. Sarah Chen - Navigator",
      title: "Your Heart Health Results",
      body: "Hi! Your screening shows elevated cholesterol. Let's discuss next steps.",
      actions: ["Schedule Call", "View Plan"],
      date: "2025-01-19 10:30 AM",
      highlight: true,
    },
    {
      sender: "Rapha Health System",
      title: "Welcome to Your Health Journey",
      body: "Your profile is complete! Next step: family risk assessment.",
      actions: ["Take Assessment"],
      date: "2025-01-18 2:15 PM",
      highlight: false,
    },
  ];

  const quickQuestions = [
    "What should I expect during my screening?",
    "How do I prepare for my blood draw?",
    "When will my results be available?",
  ];

  return (
    <div className="space-y-10  max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
        Messages & Support
      </h2>
      <p className="text-gray-500 dark:text-gray-300 mb-6">
        Connect with your health navigator and access support resources
      </p>

      {/* Navigator Card */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-800 dark:to-pink-800 border border-purple-200 dark:border-purple-700 rounded-xl p-6 mb-6">
        <div className="flex items-start gap-4">
          <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full">
            <MessageCircle className="w-7 h-7 text-purple-600 dark:text-purple-200" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              Your Health Navigator
            </h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Dr. Sarah Chen</p>
            <p className="text-purple-600 dark:text-purple-300 font-medium">Senior Health Navigator</p>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Specializes in: Cardiology, Preventive Care, Risk Assessment
            </p>
            <p className="text-green-600 dark:text-green-400 text-sm mt-1">
              • Response time: 1 business day
            </p>
            <button
              onClick={() => setChatOpen(true)}
              className="mt-3 px-5 py-2 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition"
            >
              Start Conversation
            </button>
          </div>
        </div>
      </div>

      {/* Recent Messages */}
      <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-xl p-5">
        <h3 className="text-md font-semibold text-gray-700 dark:text-gray-200 mb-4">Recent Messages</h3>
        <div className="space-y-4">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-lg border ${
                msg.highlight
                  ? "bg-blue-50 border-blue-200 dark:bg-blue-900 dark:border-blue-700"
                  : "bg-gray-50 border-gray-200 dark:bg-gray-700 dark:border-gray-600"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="font-semibold text-gray-800 dark:text-gray-100">{msg.sender}</p>
                  <p className="font-medium text-gray-700 dark:text-gray-200">{msg.title}</p>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">{msg.date}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{msg.body}</p>
              <div className="flex gap-2">
                {msg.actions.map((action, i) => (
                  <button
                    key={i}
                    className="px-3 py-1.5 rounded-md border text-sm font-medium bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
                  >
                    {action}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Modal */}
      {chatOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <div className="bg-white dark:bg-gray-900 w-[400px] rounded-lg shadow-lg flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-4 border-b border-gray-300 dark:border-gray-700 flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">Navigator Chat</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Connect with Dr. Sarah Chen - <span className="text-green-600 dark:text-green-400">Available now</span>
                </p>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="p-4 flex-1 overflow-y-auto">
              <div className="flex items-start gap-2 mb-3">
                <div className="bg-purple-600 dark:bg-purple-500 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm">
                  SC
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg text-sm text-gray-700 dark:text-gray-200 max-w-[80%]">
                  Hi! I'm here to help you with your health screening questions.
                  What would you like to know?
                  <div className="text-xs text-gray-400 dark:text-gray-500 mt-1">Just now</div>
                </div>
              </div>
            </div>

            {/* Quick Questions */}
            <div className="px-4 pb-3">
              <p className="text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Common Questions:</p>
              <div className="flex flex-wrap gap-2">
                {quickQuestions.map((q, i) => (
                  <button
                    key={i}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 rounded-md text-sm hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input */}
            <div className="p-3 border-t border-gray-300 dark:border-gray-700 flex items-center gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-100"
              />
              <button className="bg-purple-600 dark:bg-purple-500 text-white p-2 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600">
                <Send className="w-5 h-5" />
              </button>
            </div>

            {/* Footer */}
            <div className="p-3 text-xs text-gray-400 dark:text-gray-500 flex justify-between items-center border-t border-gray-300 dark:border-gray-700">
              <button
                onClick={() => setChatOpen(false)}
                className="flex items-center gap-1 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100"
              >
                <X className="w-4 h-4" /> Close Chat
              </button>
              <span>Secure, HIPAA-compliant messaging</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
