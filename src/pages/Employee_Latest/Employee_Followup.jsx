import React from 'react';
import NavigatorButton from "./Components/NavigatorButton";
import AskRaphaButton from "./Components/AskRaphaButton";
import RaphaNavigatorCard from './Components/FollowUp/RaphaNavigatorCard';
import ResultsAtAGlance from './Components/FollowUp/ResultsAtAGlance';
import EmployeeFollowUpRoadmap from './Components/FollowUp/EmployeeFollowUpRoadmap';
import Employee_ExpertConnect from './Components/FollowUp/Employee_ExpertConnect';
import Employee_EducationCard from './Components/FollowUp/Employee_EducationCard';
import HealthRecordsCard from './Components/FollowUp/HealthRecordsCard';
import FollowUpSummary from './Components/FollowUp/FollowUpSummary';

const Employee_Followup = () => {
  return (
    <div className="max-w-6xl mx-auto">
      {/* --- Header Section --- */}
      <div className="border-b sm:py-6 p-6 border-gray-300 dark:border-gray-700">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-gray-900 dark:text-gray-100 text-xl font-semibold mb-2">
              My Rapha Command Center
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your personalized hub for next steps, expert connections, and continued peace of mind.
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
        <p className="text-sm italic text-purple-500 mb-2" >"You've taken the first step toward lasting health. Now we walk together."</p>

        {/* --- Progress Section --- */}
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 ">
          {/* Header + Badge */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-[#303046] dark:text-gray-100">
              You’ve completed 4 of 6 steps
            </h3>
            <span className="inline-flex items-center justify-center rounded-md px-2 py-0.5 text-[10px] font-medium gap-1 bg-[#48C78E] text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-3 w-3"
              >
                <circle cx="12" cy="8" r="6" />
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
              </svg>
              67%
            </span>
          </div>

          {/* Progress Bar */}
          <div className="relative w-full overflow-hidden rounded-full h-2 mb-4 bg-purple-100 dark:bg-purple-950">
            <div
              className="bg-purple-600 dark:bg-purple-400 h-full transition-all"
              style={{ width: "67%" }}
            ></div>
          </div>

          {/* Step Icons */}
          <div className="grid grid-cols-6 gap-1">
            {[
              { label: "Profile", done: true },
              { label: "Education", done: true },
              { label: "Screening", done: true },
              { label: "Results", done: true },
              { label: "Follow-Up", done: false },
              { label: "Sustain", done: false },
            ].map((step, idx) => (
              <div key={idx} className="text-center">
                <div
                  className={`w-9 h-9 rounded-full mx-auto mb-1 flex items-center justify-center border-2 ${step.done
                    ? "bg-purple-500 border-purple-500 text-white"
                    : "bg-white border-gray-300 text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:text-gray-500"
                    }`}
                >
                  {step.done ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                  )}
                </div>
                <p
                  className={`text-[10px] font-medium ${step.done
                    ? "text-purple-900 dark:text-purple-200"
                    : "text-gray-500 dark:text-gray-400"
                    }`}
                >
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* --- Screening Section --- */}
      <div className="bg-white dark:bg-gray-800 ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            <div className='col-span-2 space-y-6'>
              <ResultsAtAGlance/>
              <EmployeeFollowUpRoadmap/>
              <Employee_ExpertConnect/>
              <Employee_EducationCard/>    
              <HealthRecordsCard/>        

            </div>
            <div className='col-span-1'>
              <RaphaNavigatorCard/>

            </div>

          </div>
          <FollowUpSummary/>


      </div>
    </div>
  )
}

export default Employee_Followup
