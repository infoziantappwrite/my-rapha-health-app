import React from 'react';
import NavigatorButton from "./Components/NavigatorButton";
import AskRaphaButton from "./Components/AskRaphaButton";
import ResultsSummary from './Components/Results/ResultsSummary';
import DocumentsCenter from './Components/Results/DocumentsCenter';
import FollowUpCard from './Components/Results/FollowUpCard';

const Employee_Results = () => {
  const results = [
    {
      id: 1,
      type: "breast",
      title: "Breast Cancer Screening",
      message: "Your screening shows no significant findings.",
      buttonText: "Stay on Track",
      note: "Peace through preparation.",
      color: "green",
      status: "ok",
    },
    {
      id: 2,
      type: "heart",
      title: "Heart Risk Assessment",
      message: "Your screening shows mild abnormalities — follow-up recommended.",
      buttonText: "Schedule Follow-Up",
      note: "Faith over fear.",
      color: "amber",
      status: "alert",
    },
    {
      id: 3,
      type: "diabetes",
      title: "Diabetes Risk Score",
      message: "Your screening shows no significant findings.",
      buttonText: "Stay on Track",
      note: "Wisdom leads to wellness.",
      color: "green",
      status: "ok",
    },
    {
      id: 4,
      type: "colon",
      title: "Colon Cancer Screening",
      message: "Your screening shows no significant findings.",
      buttonText: "Stay on Track",
      note: "Peace through preparation.",
      color: "green",
      status: "ok",
    },
  ];

  const documents = [
    {
      id: 1,
      title: "Comprehensive Screening Results - Jan 2025",
      type: "PDF",
      size: 2.4,
      date: "2025-01-19",
      color: "red",
      badge: "New",
    },
    {
      id: 2,
      title: "Blood Work Lab Report",
      type: "PDF",
      size: 1.2,
      date: "2025-01-16",
      color: "red",
    },
    {
      id: 3,
      title: "Previous Mammogram Results",
      type: "PDF",
      size: 1.8,
      date: "2024-01-15",
      color: "blue",
    },
    {
      id: 4,
      title: "Family Medical History",
      type: "PDF",
      size: 0.8,
      date: "2025-01-10",
      color: "blue",
      badge: "Shared",
    },
  ];
  const storage = { used: 6.2, total: 100 };
  const overallProgress = 60
  return (
    <div className="max-w-6xl mx-auto">
      {/* --- Header Section --- */}
      <div className="border-b sm:py-6 p-6 border-gray-300 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-gray-900 dark:text-gray-100 text-xl font-semibold mb-2">
              My Results & Next Steps
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your results are ready — let's understand what they mean and plan your next step.
            </p>

          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              className="inline-flex items-center justify-center gap-1.5 whitespace-nowrap text-xs font-medium transition-all
    disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none
    [&_svg:not([class*='size-'])]:size-3 shrink-0 [&_svg]:shrink-0 outline-none
    focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]
    aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40
    aria-invalid:border-destructive border bg-background hover:text-accent-foreground
    dark:bg-input/30 dark:border-input dark:hover:bg-input/50 py-1.5 has-[>svg]:px-2.5
    border-[#5B3F98] text-[#5B3F98] hover:bg-purple-50 dark:text-[#CBB2FF]
    dark:hover:bg-[#2a1f47] h-8 px-3 rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="lucide lucide-video h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" />
                <rect x="2" y="6" width="14" height="12" rx="2" />
              </svg>
              Virtual Doctor
            </button>

            <NavigatorButton />
            <AskRaphaButton />
          </div>
        </div>
        <p className="text-sm italic text-purple-500 mb-2" >"Truth and understanding replace fear. You are not alone in this journey."</p>

        {/* --- Progress Section --- */}
        <div>
          <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            <span>
              Results Review Progress:{" "}
              <span className="text-green-600 dark:text-green-400">
                {Math.round(overallProgress)}% Complete
              </span>
            </span>
          </div>

          <div className="w-full h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-2 bg-green-600 dark:bg-green-400 transition-all duration-700"
              style={{ width: `${overallProgress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* --- Screening Section --- */}
      <div className="bg-white dark:bg-gray-800 p-6">
        <ResultsSummary results={results} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DocumentsCenter documents={documents} storage={storage} />
          <FollowUpCard />
        </div>


      </div>
    </div>
  )
}

export default Employee_Results
