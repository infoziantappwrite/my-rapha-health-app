import React from 'react';
import FollowUpTriageCard from './FollowUpComponents/FollowUpTriageCard';
import PatientDashboard from './FollowUpComponents/PatientDashboard';
import NavigatorFeedbackTracker from './FollowUpComponents/NavigatorFeedbackTracker';
import AIAssistCard from './FollowUpComponents/AIAssistCard';

const FollowUp = () => {
  return (
     <div className='space-y-10 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8'>
        <FollowUpTriageCard/>
        <PatientDashboard/>
        <NavigatorFeedbackTracker/>
        <AIAssistCard/>
      
    </div>
  )
}

export default FollowUp
