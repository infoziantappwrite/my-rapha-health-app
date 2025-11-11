import { Sparkles, Download, Share2, Target } from "lucide-react";

export default function FollowUpSummary() {
  return (
    <div className="bg-gradient-to-r from-purple-100 to-teal-100 border-t border-purple-200 py-6 mt-8">
      <div className="max-w-[1600px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Text Section */}
          <div className="flex-1">
            <p className="text-sm font-medium text-purple-900 mb-1 flex items-center">
              <Sparkles className="h-4 w-4 mr-2 text-purple-700" />
              Based on your progress and results, you are on track for full
              follow-up completion.
            </p>
            <p className="text-xs italic text-purple-700">
              "Peace comes from knowing the next step."
            </p>
          </div>

          {/* Buttons Section */}
          <div className="flex items-center flex-wrap gap-3">
            {/* Download Button */}
            <button
              className="inline-flex items-center justify-center text-sm font-medium border 
                         border-gray-300 bg-white text-gray-800 hover:bg-gray-100 
                         rounded-md gap-1.5 px-3 py-1.5 transition-all shadow-sm"
            >
              <Download className="h-4 w-4 mr-1" />
              Download Summary
            </button>

            {/* Share Button */}
            <button
              className="inline-flex items-center justify-center text-sm font-medium border 
                         border-gray-300 bg-white text-gray-800 hover:bg-gray-100 
                         rounded-md gap-1.5 px-3 py-1.5 transition-all shadow-sm"
            >
              <Share2 className="h-4 w-4 mr-1" />
              Share with Doctor
            </button>

            {/* Plan Next Step Button */}
            <button
              className="inline-flex items-center justify-center text-sm font-medium 
                         bg-purple-600 hover:bg-purple-700 text-white rounded-md 
                         gap-1.5 px-3 py-1.5 transition-all shadow-md"
            >
              <Target className="h-4 w-4 mr-1" />
              Plan Next Step
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
