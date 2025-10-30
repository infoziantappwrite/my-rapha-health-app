import React from 'react';
import NavigatorButton from "./Components/NavigatorButton";
import AskRaphaButton from "./Components/AskRaphaButton";
import FamilyRiskGrid from './Components/FRA/FamilyRiskGrid';
import FamilyRiskAssessmentCard from './Components/FRA/FamilyRiskAssessmentCard';

const Employee_Family_Risk_Assessment = () => {
  return (
    <div className=" max-w-6xl mx-auto ">
      <div className="border-b sm:py-6 p-6 border-gray-300 dark:border-gray-500">
        {/* --- Header Row --- */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* --- Left Section --- */}
          <div className="text-left">
            <h1 className="text-gray-900 dark:text-white text-xl font-semibold mb-2">
            Family Risk Assessment
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
            Your family's health story is a powerful guide to your own prevention and early detection plan.
            </p>
          </div>

          {/* --- Right Section --- */}
          <div className="flex flex-wrap items-center gap-3">
            <NavigatorButton />
            <AskRaphaButton />

           
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-gray-800 p-6 shadow-sm ">
        <FamilyRiskGrid/>
        <FamilyRiskAssessmentCard/>
        <h3 className='text-center text-sm   italic font-semibold dark:text-purple-200 text-purple-700 pt-3'>"Clarity replaces fear. Knowledge is control. Prevention is power."</h3>
       
      </div>


      {/* --- Section Title Below Header --- */}

    </div>
  );
}

export default Employee_Family_Risk_Assessment
