import React from "react";
import ScreeningProgressHeader from "../components/Screening_Progress_Overview/ScreeningProgressHeader";
import AIExecutiveSummaryCard from "./Screening_Progress_Overview/AIExecutiveSummaryCard";
import RiskCharts from "./RiskCharts";

const RiskSummary = () => {
  return (
    <div className="space-y-8 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Dynamic Header */}
      <ScreeningProgressHeader
        title="At-Risk Population Summary"
        subtitle="Comprehensive risk stratification and Navigator management"
        messageButtonLabel="Message Rapha Team"
        scheduleButtonLabel="Download Report"
      />
      <AIExecutiveSummaryCard
  title="🧠 AI Executive Summary"
  overview="182 high-risk employees (13%) are actively managed with excellent 91% follow-up compliance. Navigator capacity is optimal with Dr. Lisa Park handling highest caseload."
  highlights={[
    {
      label: "✅ Strength",
      detail: "Cancer cohort: 89% follow-up rate",
      color: "green",
    },
    {
      label: "⚠️ Monitor",
      detail: "Cardiovascular cohort: High volume",
      color: "yellow",
    },
    {
      label: "📈 Opportunity",
      detail: "Lifestyle cohort: Expand coaching",
      color: "blue",
    },
  ]}
/>

<RiskCharts/>

      {/* Example placeholder content below header */}
     
    </div>
  );
};

export default RiskSummary;
