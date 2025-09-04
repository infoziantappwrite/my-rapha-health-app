import React from 'react'
import Progressbar from "./components/Progressbar";
import HealthJourneyTimeline from "./components/HealthJourneyTimeline";
import ActionCards from "./components/ActionCards";
import AIHealthAssistant from './components/HealthAssistant';
import Navbar from '../../components/EmployeeHeader/Navbar';

const MyJourney = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="p-10 space-y-10">

        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Health Journey</h1>
          <p className="text-gray-600">
            Track your progress through comprehensive health screening and education
          </p>
        </div>
        <Progressbar />
        <HealthJourneyTimeline />
        <ActionCards />
        <AIHealthAssistant />





      </div>
    </div>
  )
}

export default MyJourney
