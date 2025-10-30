import React from "react";
import HealthJourneyTimeline from "./Components/HealthJourneyTimeline";
import HelpSupportCard from "./Components/HelpSupportCard";

const Employee_Health_Journey = () => {
  const steps = [
    {
      id: 1,
      title: "My Profile",
      subtitle: "Employee health basics",
      status: "complete",
      iconKey: "user",
      route: "/employee/profile",
    },
    {
      id: 2,
      title: "Family Risk",
      subtitle: "Family medical history",
      status: "complete",
      iconKey: "users",
      route: "/employee/family-risk",
    },
    {
      id: 3,
      title: "Education",
      subtitle: "Learn preventive care steps",
      status: "current",
      iconKey: "graduation",
      route: "/employee/education",
    },
    {
      id: 4,
      title: "Screening",
      subtitle: "Schedule your health screening",
      status: "pending",
      iconKey: "calendar",
      route: "/employee/screening",
    },
    {
      id: 5,
      title: "Results",
      subtitle: "Review your screening results",
      status: "pending",
      iconKey: "activity",
      route: "/employee/results",
    },
    {
      id: 6,
      title: "Follow-Up",
      subtitle: "Coaching and continued support",
      status: "pending",
      iconKey: "stethoscope",
      route: "/employee/follow-up",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 space-y-8">
      {/* --- Header Section --- */}
      <div className="text-center sm:text-left">
        <h1 className="text-gray-900 dark:text-white text-xl font-semibold mb-2">
          Your Health Journey
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          Take personal control — one step at a time.
        </p>
      </div>

      {/* --- Timeline Section --- */}
    
        <HealthJourneyTimeline steps={steps} />
     

      {/* --- Support Section --- */}
      
        <HelpSupportCard />
    
    </div>
  );
};

export default Employee_Health_Journey;
