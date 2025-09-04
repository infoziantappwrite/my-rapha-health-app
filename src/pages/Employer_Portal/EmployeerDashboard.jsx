import React from 'react'
import Tittlecard from './components/Tittlecard';
import DashboardLayout from './components/DashboardLayout';
import ReportsCard from './components/ReportsCard';
import ComplianceBanner from './components/ComplianceBanner';

const EmployeerDashboard = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto space-y-6 py-5 p-4 md:p-6 lg:p-0 '>
        <Tittlecard/>
        <DashboardLayout/>
        <ReportsCard/>
      
    </div>
    <ComplianceBanner/>
    </>
  )
}

export default EmployeerDashboard
