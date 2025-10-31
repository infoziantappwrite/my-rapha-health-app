import React, { useState } from "react";
import {
  X,
  Book,
  Clock,
  Target,
  Play,
  Sparkles,
  CircleCheckBig,
  MessageCircle,
  Info,
  Check,
} from "lucide-react";

const LearningModal = ({ module, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");

  if (!module) return null;

  const chapter = module.chapter || {};

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200 transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[80vh]">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {module.title}
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Module {module.moduleNo}
              </p>
            </div>
            <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium bg-green-500 text-white">
              {module.progress}% Complete
            </span>
          </div>

          {/* Meta Info */}
          <div className="flex items-center space-x-5 text-sm text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center gap-1">
              <Book className="w-4 h-4" /> {chapter.title}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" /> {chapter.duration}
            </div>
            <div className="flex items-center gap-1">
              <Target className="w-4 h-4" /> {module.concepts} key concepts
            </div>
          </div>

          {/* Video Section */}
          <div className="rounded-xl border-2 border-rose-200 mb-6 overflow-hidden">
            <div className="relative aspect-video flex items-center justify-center bg-gradient-to-br from-rose-50 to-rose-100 cursor-pointer">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform text-rose-500">
                  <Play className="w-10 h-10 ml-1 fill-current" />
                </div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                  {chapter.title}
                </h3>
                <p className="text-sm text-gray-500">
                  {chapter.type} • {chapter.duration}
                </p>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Watch Progress</span>
                <span>{chapter.watchProgress || 0}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-2 bg-rose-500 transition-all"
                  style={{ width: `${chapter.watchProgress || 0}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1 mb-4">
            {["overview", "resources"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-2 rounded-lg text-sm font-medium transition ${
                  activeTab === tab
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              {/* Overview Text */}
              {chapter.overview && (
                <div className="text-gray-700 dark:text-gray-300 text-sm">
                  {chapter.overview}
                </div>
              )}

              {/* Key Points */}
              {chapter.keyLearningPoints && (
                <div className="rounded-xl border p-6">
                  <h4 className="flex items-center text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    <CircleCheckBig className="w-5 h-5 text-green-500 mr-2" />{" "}
                    Key Learning Points
                  </h4>
                  <ul className="space-y-3">
                    {chapter.keyLearningPoints.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300"
                      >
                        <Check className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />{" "}
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Important Note */}
              {chapter.importantNote && (
                <div className="border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-4 flex items-start gap-3">
                  <Info className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium text-sm text-gray-900 dark:text-gray-100 mb-1">
                      Important Note
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-300 italic">
                      {chapter.importantNote}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "resources" && chapter.resources && (
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Downloadable Resources
              </h4>
              {chapter.resources.map((res, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center p-3 border rounded-lg dark:border-gray-700 text-sm text-gray-700 dark:text-gray-300"
                >
                  <span>{res.name}</span>
                  <span className="text-gray-500 text-xs">{res.type}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Buttons */}
        <div className="grid grid-cols-3 gap-3 border-t p-4 bg-gray-50 dark:bg-gray-800">
          <button className="flex items-center justify-center gap-2 border border-rose-600 text-rose-600 hover:bg-rose-50 rounded-md py-2 text-sm font-medium">
            <Sparkles className="w-4 h-4" /> Explain Simply
          </button>
          <button className="flex items-center justify-center gap-2 bg-green-500 text-white hover:bg-green-600 rounded-md py-2 text-sm font-medium">
            <CircleCheckBig className="w-4 h-4" /> Mark Complete
          </button>
          <button className="flex items-center justify-center gap-2 border border-gray-500 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700 rounded-md py-2 text-sm font-medium">
            <MessageCircle className="w-4 h-4" /> Ask Navigator
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearningModal;
