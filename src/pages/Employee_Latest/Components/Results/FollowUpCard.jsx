import { MessageCircle, Video, BookOpen } from "lucide-react";

export default function FollowUpCard() {
  return (
    <div className="text-card-foreground flex flex-col gap-6 rounded-xl border-2 border-amber-200 bg-amber-50 dark:bg-amber-900/10 dark:border-amber-800 transition-colors">
      {/* Header */}
      <div className="grid auto-rows-min items-start gap-1.5 px-6 pt-6 border-b border-amber-200 dark:border-amber-800 pb-4">
        <h4 className="text-lg font-semibold text-amber-900 dark:text-amber-200">
          ⚠️ Follow up recommended.
        </h4>
        <p className="text-sm text-amber-800 dark:text-amber-300">
          Our team is here to help you take the next step with confidence.
        </p>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 space-y-3">
        {/* Primary Action */}
        <button
          className="inline-flex items-center justify-center gap-2 w-full h-9 px-4 py-2 rounded-md text-sm font-medium
                     bg-amber-600 hover:bg-amber-700 text-white transition-all"
        >
          <MessageCircle className="h-4 w-4" />
          Talk to Rapha Navigator
        </button>

        {/* Secondary Actions */}
        <button
          className="inline-flex items-center justify-center gap-2 w-full h-9 px-4 py-2 rounded-md text-sm font-medium
                     border border-gray-300 bg-white text-gray-800 hover:bg-gray-100
                     dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 transition-all"
        >
          <Video className="h-4 w-4" />
          Schedule Expert Review
        </button>

        <button
          className="inline-flex items-center justify-center gap-2 w-full h-9 px-4 py-2 rounded-md text-sm font-medium
                     border border-gray-300 bg-white text-gray-800 hover:bg-gray-100
                     dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700 transition-all"
        >
          <BookOpen className="h-4 w-4" />
          Learn More About Your Results
        </button>

        <p className="text-sm italic text-center text-amber-800 dark:text-amber-300 mt-4">
          "Wisdom, not worry, leads the way."
        </p>
      </div>
    </div>
  );
}
