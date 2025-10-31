import { Play, Clock } from "lucide-react";

const guides = [
  {
    title: "Mammogram Basics",
    risk: "Elevated Risk",
    color: {
      light: "border-rose-300 bg-rose-50",
      dark: "dark:border-rose-800 dark:bg-rose-950/50",
      text: "text-rose-700 dark:text-rose-300",
    },
    desc: "Everything you need to know before your breast cancer screening.",
    duration: "5 min",
  },
  {
    title: "Blood Screening for Colon, Heart & Diabetes",
    risk: "Moderate Risk",
    color: {
      light: "border-amber-300 bg-amber-50",
      dark: "dark:border-amber-800 dark:bg-amber-950/50",
      text: "text-amber-800 dark:text-amber-300",
    },
    desc: "Comprehensive guide to understanding your blood work results.",
    duration: "8 min",
  },
];

export default function ScreeningPrep() {
  return (
    <div className="space-y-5">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
        Get Ready for Your Screening
      </h2>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        Here’s what you need to know before you arrive. These quick guides are
        tailored to your personal risk and gender.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {guides.map((g) => (
          <div
            key={g.title}
            className={`flex flex-col justify-between rounded-xl border shadow-sm hover:shadow-lg transition-shadow cursor-pointer ${g.color.light} ${g.color.dark}`}
          >
            {/* Header */}
            <div className="px-6 pt-6 flex flex-col gap-2">
              <div className="flex items-start justify-between mb-2">
                <Play
                  className={`w-8 h-8 ${g.color.text}`}
                  strokeWidth={2}
                />
                <span
                  className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium whitespace-nowrap ${g.color.text} ${g.color.light} ${g.color.dark}`}
                  style={{ borderColor: "currentColor" }}
                >
                  {g.risk}
                </span>
              </div>

              <h4 className="text-base text-gray-900 dark:text-gray-100 font-medium">
                {g.title}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {g.desc}
              </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between px-6 pb-6 mt-4">
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                <Clock className="w-3 h-3" /> {g.duration}
              </span>
              <button
                className={`inline-flex items-center gap-1 text-sm font-medium border rounded-md px-3 py-1 transition-all ${g.color.text} hover:bg-white/40 dark:hover:bg-gray-800/40`}
                style={{ borderColor: "currentColor" }}
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 ml-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
