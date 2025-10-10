import React from "react";
import ScreeningProgressHeader from "../components/Screening_Progress_Overview/ScreeningProgressHeader";
import AIExecutiveSummaryCard from "./Screening_Progress_Overview/AIExecutiveSummaryCard";
import DashboardCards from "./Screening_Progress_Overview/DashboardCards";
import NavigatorPerformanceTable from "./Screening_Progress_Overview/NavigatorPerformanceTable";


const NavigatorActivity = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Dynamic Header */}
      <ScreeningProgressHeader
        title="Navigator Team Activity"
        subtitle="Performance dashboard and team management analytics"
        messageButtonLabel="Message Rapha Team"
        scheduleButtonLabel="Download Report"
      />

      {/* AI Executive Summary */}
      <AIExecutiveSummaryCard
        title="🧠 AI Executive Summary"
        overview="Navigator Performance: Excellent team performance with 4.8/5.0 satisfaction and 1.6hr average response time. Dr. Lisa Park needs support with 104 active cases (recommend additional cardiology Navigator)."
        highlights={[
          {
            label: "🌟 Top Performer",
            detail: "Dr. Jennifer Adams: 96% success rate",
            color: "green",
          },
          {
            label: "⚠️ Capacity Alert",
            detail: "Dr. Lisa Park: High workload (104 cases)",
            color: "yellow",
          },
          {
            label: "📈 Efficiency",
            detail: "Peak activity: 2-4 PM weekdays",
            color: "blue",
          },
        ]}
      />
      <DashboardCards/>
      <NavigatorPerformanceTable/>

     
     
    </div>
  );
};

export default NavigatorActivity;
