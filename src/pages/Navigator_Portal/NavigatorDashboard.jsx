import React, { useState } from "react";
import NavigatorWorkflow from "./compoents/first/Navigator_Workflow"; 
import RishStratificationCompoenet from "./compoents/secound/Risk_Stratification";
import Education_Completion from "./compoents/third/Education_Completion";
import Screening_Management from "./compoents/fourth/Screening_Management";
import Results_Follow from "./compoents/fifth/Results_Follow";
import Messaging_Notes from "./compoents/six/Messaging_Notes";
import Navigator_Utility_Tools from "./compoents/seven/Navigator_Utility_Tools";


// Step Components
const EmployeeOverview = () => <NavigatorWorkflow />;
const RiskStratification = () => <RishStratificationCompoenet />;
const EducationCompletion = () => <Education_Completion />;
const ScreeningManagement = () => <Screening_Management />;
const ResultsFollowUp = () => <Results_Follow />;
const MessagingNotes = () => <Messaging_Notes />;
const NavigatorUtilityTools = () => <Navigator_Utility_Tools />;

// Steps array
const steps = [
  { id: 1, title: "Employee Overview", component: <EmployeeOverview /> },
  { id: 2, title: "Risk Stratification", component: <RiskStratification /> },
  { id: 3, title: "Education Completion", component: <EducationCompletion /> },
  { id: 4, title: "Screening Management", component: <ScreeningManagement /> },
  { id: 5, title: "Results & Follow-Up", component: <ResultsFollowUp /> },
  { id: 6, title: "Messaging & Notes", component: <MessagingNotes /> },
  { id: 7, title: "Navigator Utility Tools", component: <NavigatorUtilityTools /> },
];

const NavigatorDashboard = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="px-6 py-8 rounded-xl shadow-lg bg-white dark:bg-gray-900 transition-colors duration-300">
      <h2 className="font-bold text-xl mb-2 text-gray-800 dark:text-gray-100">
        Navigator Workflow Timeline
      </h2>
      <p className="text-sm mb-8 text-gray-500 dark:text-gray-400">
        Coordinate employee health journeys through each critical stage
      </p>

      {/* Steps Container */}
      <div className="relative flex items-center justify-between space-x-4 overflow-x-auto">
        {/* Horizontal connector line */}
        <div className="absolute top-10 left-0 right-0 h-1 bg-gray-300 dark:bg-gray-700 -z-10"></div>

        {steps.map((step) => (
          <div
            key={step.id}
            className="mt-2 flex flex-col items-center cursor-pointer flex-shrink-0 relative"
            onClick={() => setActiveStep(step.id)}
          >
            {/* Outer purple ring */}
            <div
              className={`rounded-full p-1 mb-2 transition-all relative ${
                activeStep === step.id ? "ring-4 ring-purple-500 scale-110" : ""
              }`}
            >
              {/* Middle background circle */}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 shadow-md relative">
                {/* Inner number circle */}
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full text-white font-bold ${
                    activeStep === step.id ? "bg-purple-600" : "bg-gray-400 dark:bg-gray-600"
                  }`}
                >
                  {step.id}
                </div>

                {/* Notification badge */}
                <div className="absolute -top-2 -right-2 w-5 h-5 flex items-center justify-center rounded-full bg-green-500 text-white text-xs font-bold shadow-md">
                  {Math.floor(Math.random() * 10)}
                </div>
              </div>
            </div>

            {/* Step title */}
            <div
              className={`text-center text-sm font-medium ${
                activeStep === step.id
                  ? "text-gray-900 dark:text-gray-100"
                  : "text-gray-500 dark:text-gray-400"
              }`}
            >
              {step.title}
            </div>
          </div>
        ))}
      </div>

      {/* Active step content */}
      <div className="mt-12 ">
        {steps.find((s) => s.id === activeStep)?.component}
      </div>
    </div>
  );
};

export default NavigatorDashboard;
