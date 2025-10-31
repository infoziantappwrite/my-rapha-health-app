import React, { useState } from "react";
import NavigatorButton from "./Components/NavigatorButton";
import AskRaphaButton from "./Components/AskRaphaButton";
import ScreeningPrep from "./Components/Screening/ScreeningPrep";
import ScreeningPathway from "./Components/Screening/ScreeningPathway";
import ScreeningList from "./Components/Screening/ScreeningList";
import ScheduleModal from "./Components/Screening/ScheduleModal";
import HealthJourneyNav from "./Components/HealthJourneyNav";

const Employee_Screening = () => {
    const [selected, setSelected] = useState(null);
    const [screeningData, setScreeningData] = useState([]);

    // Calculate progress based on how many are scheduled
    const total = screeningData.length;
    const scheduled = screeningData.filter(
        (s) => s.status.toLowerCase() === "scheduled"
    ).length;
    const overallProgress = total > 0 ? (scheduled / total) * 100 : 0;
    const handleConfirmSchedule = (updated) => {
  setScreeningData((prev) =>
    prev.map((s) =>
      s.id === updated.id ? { ...s, status: "scheduled" } : s
    )
  );
  setSelected(null);
};


    return (
        <div className="max-w-6xl mx-auto">
            {/* --- Header Section --- */}
            <div className="border-b sm:py-6 p-6 border-gray-300 dark:border-gray-700">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 className="text-gray-900 dark:text-gray-100 text-xl font-semibold mb-2">
                          My Screening Journey
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400 text-sm">
                           Your next step toward peace of mind.
                        </p>
                        
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                        <NavigatorButton />
                        <AskRaphaButton />
                    </div>
                </div>
                <p className="text-sm italic text-purple-500 mb-2" >"Courage is not the absence of fear, but the presence of faith and preparation."</p>

                {/* --- Progress Section --- */}
                <div>
                    <div className="flex justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        <span>
                            My Screening Progress:{" "}
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
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                    <div className="col-span-1">
                        <div className="sticky top-4 space-y-6">
                            <HealthJourneyNav />
                            <div
                                role="note"
                                className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-purple-50 border-purple-200 p-4 shadow-sm
                 dark:bg-purple-900/20 dark:border-purple-700"
                            >
                                <div className="flex items-start space-x-3">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="lucide lucide-heart h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0 dark:text-purple-300"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        aria-hidden="true"
                                    >
                                        <path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" />
                                    </svg>

                                    <p className="text-sm italic text-purple-900 dark:text-purple-100">
                                        "Faith replaces fear when we prepare. Taking action honors both your life and the One who gave it."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3 space-y-6">
                        <ScreeningPrep />
                        <div
                            role="separator"
                            className="shrink-0 my-8 
             h-px w-full 
             bg-gray-300 dark:bg-gray-700"
                        ></div>
                        <ScreeningPathway active={4} />
                        <ScreeningList
                            onSchedule={setSelected}
                            onDataChange={setScreeningData}
                        />

                    </div>

                </div>



                <ScheduleModal
  screening={selected}
  onClose={() => setSelected(null)}
  onConfirm={handleConfirmSchedule}
/>

            </div>
        </div>
    );
};

export default Employee_Screening;
