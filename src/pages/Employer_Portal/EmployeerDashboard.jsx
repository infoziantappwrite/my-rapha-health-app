import React from 'react'
import Tittlecard from './components/Tittlecard';
import DashboardLayout from './components/DashboardLayout';
import ReportsCard from './components/ReportsCard';
import ComplianceBanner from './components/ComplianceBanner';

const EmployeerDashboard = () => {
  return (
    
    <div className=" dark:bg-gray-900 p-6 space-y-6 mt-1">
        <Tittlecard/>
        <DashboardLayout/>
        <ReportsCard/>
      
    </div>
    
    
  )
}

export default EmployeerDashboard
