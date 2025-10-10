import React from 'react'
import EmployeeEngagementHeader from './Screening_Progress_Overview/EmployeeEngagementHeader'
import EngagementDashboard from './Screening_Progress_Overview/EngagementDashboard'

const EmployeeEngagement = () => {
  return (
    <div  className="space-y-8 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <EmployeeEngagementHeader/>
        <EngagementDashboard/>
      
    </div>
  )
}

export default EmployeeEngagement
