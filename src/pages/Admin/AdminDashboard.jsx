import React from 'react'
import AdminHeader from './Components/AdminHeader';
import AdminDashboardCard from './Components/AdminDashboardCard';
import DriftAuditCard from './Components/DriftAuditCard';
import QuickAccessCards from './Components/QuickAccessCards';

const AdminDashboard = () => {
  return (
    <div className='space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8'>
      <AdminHeader 
        title="Admin Dashboard" 
        subtitle="Comprehensive platform oversight and stewardship control center"  
      />
      <AdminDashboardCard />  
      <DriftAuditCard />  
      <QuickAccessCards />

      
    </div>
  )
}

export default AdminDashboard
