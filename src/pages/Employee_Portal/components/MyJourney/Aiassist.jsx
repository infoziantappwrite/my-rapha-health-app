import React, { useState } from "react";
import { BrainCircuit, Sparkles, MessageCircle } from "lucide-react";

const Aiassist = () => {
  const [selectedQ, setSelectedQ] = useState(null);
  const [customQ, setCustomQ] = useState("");
  const [answer, setAnswer] = useState("");

  const faqs = [
    {
      q: "How secure is my data?",
      a: "Your data is encrypted and securely stored with strict access controls.",
    },
    {
      q: "What information do you store?",
      a: "We only store essential account details and activity logs to improve service.",
    },
    {
      q: "Can I change my details later?",
      a: "Yes, you can update your profile and account details anytime from settings.",
    },
  ];

  const handleQuestionClick = (q, a) => {
    setSelectedQ(q);
    setAnswer(a);
  };

  const handleCustomSubmit = () => {
    if (!customQ.trim()) return;
    setSelectedQ(customQ);
    setAnswer("🤖 AI is processing your custom question...");
    setCustomQ("");

    // Simulate async AI response
    setTimeout(() => {
      setAnswer("Here’s a helpful response to your custom question! 🚀");
    }, 1200);
  };

  return (
    <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <BrainCircuit className="h-6 w-6 text-purple-600" />
        <h2 className="font-semibold text-lg text-gray-800 dark:text-gray-100">
          AI Assistant
        </h2>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Have questions? Ask our AI assistant for instant help.
      </p>

      {/* Quick Questions */}
      <h4 className="text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
        Quick Questions:
      </h4>
      <div className="grid gap-2 mb-4">
        {faqs.map(({ q, a }, i) => (
          <button
            key={i}
            onClick={() => handleQuestionClick(q, a)}
            className="flex items-center p-3 text-sm border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-gray-800 dark:text-gray-200"
          >
            <Sparkles className="h-4 w-4 mr-2 text-purple-600" />
            {q}
          </button>
        ))}
      </div>

      {/* Custom Question */}
      <div className="flex flex-col sm:flex-row gap-2 mb-4">
        <input
          type="text"
          value={customQ}
          onChange={(e) => setCustomQ(e.target.value)}
          placeholder="Ask your own question..."
          className="flex-1 border border-gray-200 dark:border-gray-700 rounded-lg p-2 text-sm focus:ring-2 focus:ring-purple-400 focus:outline-none bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200"
        />
        <button
          onClick={handleCustomSubmit}
          className="flex items-center justify-center gap-1 px-3 py-2 border border-gray-200 dark:border-gray-700 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors text-sm text-gray-800 dark:text-gray-200"
        >
          <MessageCircle className="h-4 w-4 text-purple-600" />
          Ask
        </button>
      </div>

      {/* Answer Section */}
      {selectedQ && (
        <div className="bg-white dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm animate-fadeIn">
          <h5 className="font-medium text-sm mb-1 text-gray-700 dark:text-gray-300">
            Q: {selectedQ}
          </h5>
          <p className="text-gray-600 dark:text-gray-400 text-sm">A: {answer}</p>
        </div>
      )}
    </div>
  );
};

export default Aiassist;
