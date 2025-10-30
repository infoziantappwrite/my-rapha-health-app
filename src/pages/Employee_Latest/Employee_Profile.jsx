import React from "react";
import NavigatorButton from "./Components/NavigatorButton";
import AskRaphaButton from "./Components/AskRaphaButton";
import { User } from "lucide-react";
import EmployeeInfoCard from "./Components/Profile/EmployeeInfoCard";
import EmployeeSnapshotCard from "./Components/Profile/HealthSnapshotCard";
import FamilyHealthHistory from "./Components/Profile/FamilyHealthHistory";
import LifestyleCard from "./Components/Profile/LifestyleCard";
import { useNavigate } from "react-router-dom";
import { Save, Target } from "lucide-react";

const Employee_Profile = () => {
  const navigate = useNavigate();
  return (
    <div className=" max-w-6xl mx-auto ">
      <div className="border-b  sm:py-6 p-6  border-gray-300 dark:border-gray-500">
        {/* --- Header Row --- */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* --- Left Section --- */}
          <div className="text-left">
            <h1 className="text-gray-900 dark:text-white text-xl font-semibold mb-2">
              My Profile
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Your private health record — secure, personal, and always yours.
            </p>
          </div>

          {/* --- Right Section --- */}
          <div className="flex flex-wrap items-center gap-3">
            <NavigatorButton />
            <AskRaphaButton />

            <span
              className="inline-flex items-center justify-center rounded-md border border-transparent 
              px-2.5 py-1 text-xs font-medium bg-purple-100 text-purple-800 
              dark:bg-purple-900/50 dark:text-purple-300"
            >
              <User className="h-3.5 w-3.5 mr-1" />
              Employee Profile
            </span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 bg-white dark:bg-gray-800 p-4 lg:p-6shadow-sm">
  {/* Left Column (3/5 on large screens, full width on mobile) */}
  <div className="space-y-6 lg:space-y-8 lg:col-span-3">
    <EmployeeInfoCard />
    <EmployeeSnapshotCard />
  </div>

  {/* Right Column (2/5 on large screens, full width on mobile) */}
  <div className="space-y-6 lg:space-y-8 lg:col-span-2">
    <FamilyHealthHistory />
    <LifestyleCard />
  </div>

  {/* Bottom Action Buttons — Always full width */}
  <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start lg:col-span-5 mt-6">
    {/* Save Profile */}
    <button
      onClick={() => navigate("/employee/family-risk")}
      className="flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition w-full sm:w-auto"
    >
      <Save className="w-4 h-4" />
      Save Profile
    </button>

    {/* Start Family Risk Assessment */}
    <button
      onClick={() => navigate("/employee/family-risk")}
      className="flex items-center justify-center gap-2 border border-purple-300 text-purple-700 hover:bg-purple-50 dark:hover:bg-purple-800/40 dark:text-purple-300 px-5 py-2.5 rounded-md text-sm font-medium transition w-full sm:w-auto"
    >
      <Target className="w-4 h-4" />
      Start Family Risk Assessment
    </button>
  </div>
</div>



      {/* --- Section Title Below Header --- */}

    </div>
  );
};

export default Employee_Profile;
