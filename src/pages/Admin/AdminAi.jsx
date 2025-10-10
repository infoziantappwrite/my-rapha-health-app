import React from 'react';
import AdminHeader from "./Components/AdminHeader";
import { Cpu } from "lucide-react";
import SafeLoopDashboardCard from './Components/SafeLoopDashboardCard';
import AIPromptDashboardTable from './Components/AIPromptDashboardTable';

const AdminAi = () => {
  return (
    <div className='space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8'>
      <AdminHeader
        icon={<Cpu className="h-6 w-6 text-white" />}
        title="AI Governance"
        subtitle="Oversee AI prompts, validation testing, and safety compliance across all personas"
      />
      <SafeLoopDashboardCard/>
      <AIPromptDashboardTable/>
    </div>
  );
};

export default AdminAi;
