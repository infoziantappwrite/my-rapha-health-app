import React from "react";
import NavigatorAssistant from "../NavigatorAssistant";
import ScreeningForecasts from "../ScreeningForecasts";
import CohortIntelligence from "../CohortIntelligence";

const InsightsWrapper = () => {
  return (
    <div className="space-y-8">
      <NavigatorAssistant />

      <hr className="border-t border-gray-300" />

      <ScreeningForecasts />

      <hr className="border-t border-gray-300" />

      <CohortIntelligence />
    </div>
  );
};

export default InsightsWrapper;
