import React from "react";
import AdminHeader from "./Components/AdminHeader";
import { SettingsIcon, Cpu, Cloud, Activity } from "lucide-react";
import EnvironmentCard from "./Components/EnvironmentCard";
import ApiKeyManagementCard from "./Components/ApiKeyManagementCard";
import ErrorMonitoringCard from "./Components/ErrorMonitoringCard";
import RecentAlertsCard from "./Components/RecentAlertsCardRecentAlertsCard";

const AdminSystem = () => {
  return (
    <div className="space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <AdminHeader
        title="System Settings"
        icon={<SettingsIcon className="h-6 w-6 text-white" />}
        subtitle="Configure platform parameters, API management, and system monitoring"
      />

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Card 1 */}
        <EnvironmentCard/>
        <ApiKeyManagementCard/>
        <ErrorMonitoringCard/>
        <RecentAlertsCard/>

        
       
       
      </div>
    </div>
  );
};

export default AdminSystem;
