import React from 'react'
import ReportsHeader from './components/ReportsHeader';
import ReportTabs from './components/ReportTabs';
import ComplianceBanner from './components/ComplianceBanner';

const Reports = () => {
  return (
    <>
      <div className="mx-auto py-5 p-4 md:p-6 lg:p-0 mt-1">
        {/* White Box Container */}
        <div className="bg-white dark:bg-gray-900 shadow-sm rounded-xl p-6 space-y-6">
          <ReportsHeader />
          <ReportTabs />
        </div>
      </div>
      <ComplianceBanner />
    </>
  )
}

export default Reports
