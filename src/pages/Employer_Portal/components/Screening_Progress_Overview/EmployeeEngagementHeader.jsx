import React from "react";
import { MessageCircle, RefreshCw, Download } from "lucide-react";
import EmployeeEngagementButtons from "./EmployeeEngagementButtons";

const EmployeeEngagementHeader = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 space-y-4 md:space-y-0">
      {/* Title Section */}
      <div className="flex items-center">
        <div
          data-orientation="vertical"
          role="none"
          className="bg-border shrink-0 h-8 w-px"
        />
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Employee Engagement Funnel – Enhanced Analytics
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Comprehensive journey analytics with AI insights and Navigator coordination
          </p>
        </div>
      </div>

      {/* Button Section */}
     <EmployeeEngagementButtons/>
    </div>
  );
};

export default EmployeeEngagementHeader;
