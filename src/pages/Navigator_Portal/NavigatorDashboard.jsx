import React from "react";
import { Navigator_Workflow } from "./compoents/Navigator_Workflow";
import Highlight from "./compoents/Highlight";
import Table from "./compoents/Table";
import NavigatorTools from "./compoents/NavigatorTools";

const NavigatorDashboard = () => {
  return (
    <div className="relative px-4 md:px-6 lg:px-8 space-y-6">
      {/* Workflow Timeline */}
      <div className="md:sticky md:top-0 md:z-50">
        {/* On mobile, allow horizontal scrolling for steps */}
        <div className="overflow-x-auto md:overflow-visible">
          <div className="min-w-[600px] md:min-w-0">
            <Navigator_Workflow />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="space-y-6">
        <Highlight />
        <Table />
        <NavigatorTools />
      </div>
    </div>
  );
};

export default NavigatorDashboard;
