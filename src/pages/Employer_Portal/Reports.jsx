import React from 'react'
import ReportsHeader from './components/ReportsHeader';
import ReportTabs from './components/ReportTabs';
import ComplianceBanner from './components/ComplianceBanner';

const Reports = () => {
  return (
    <>
    <div className='max-w-6xl mx-auto space-y-6 py-5 '>
        <ReportsHeader />
        <ReportTabs />

      
    </div>
    <ComplianceBanner/>
    </>
  )
}

export default Reports
