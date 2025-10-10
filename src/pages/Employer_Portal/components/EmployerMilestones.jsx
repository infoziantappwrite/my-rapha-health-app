import React from "react";
import ScreeningProgressHeader from "../components/Screening_Progress_Overview/ScreeningProgressHeader";
import AIExecutiveSummaryCard from "./Screening_Progress_Overview/AIExecutiveSummaryCard";
import EmployerMilestonesTimeline from "./Screening_Progress_Overview/EmployerMilestonesTimeline";


const EmployerMilestones = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Dynamic Header */}
      <ScreeningProgressHeader
        title="Employer Milestones & Timeline"
        subtitle="Phase-by-phase rollout progress and strategic planning"
        messageButtonLabel="Message Rapha Team"
        scheduleButtonLabel="Download Timeline"
      />

      {/* AI Executive Summary */}
      <AIExecutiveSummaryCard
        title="🧠 AI Executive Summary"
        overview="Project Status: Phase 1 completed successfully (98% participation), Phase 2 at 72% with mobile unit scheduling optimization needed. On track for Phase 3 full company coverage by March 31st."
        highlights={[
          {
            label: "✅ Completed",
            detail: "Phase 1: STL HQ (687 employees)",
            color: "green",
          },
          {
            label: "🔄 In Progress",
            detail: "Phase 2: BJC Site & Mobile Unit",
            color: "yellow",
          },
          {
            label: "📅 Planned",
            detail: "Phase 3: Full company coverage",
            color: "blue",
          },
        ]}
      />
      <EmployerMilestonesTimeline/>

      {/* Dashboard Cards */}
    

      {/* Optional: You can create a table for timeline milestones if needed */}
      {/* Example Table: Similar style to NavigatorPerformanceTable */}
      {/* <EmployerTimelineTable /> */}

    </div>
  );
};

export default EmployerMilestones;
