import React from 'react'
import Progressbar from "./components/Progressbar";
import HealthJourneyTimeline from "./components/HealthJourneyTimeline";
import ActionCards from "./components/ActionCards";
import AIHealthAssistant from './components/HealthAssistant';

const MyJourney = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="space-y-10 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* Title */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            My Health Journey
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track your progress through comprehensive health screening and education
          </p>
        </div>

        {/* Components */}
        <Progressbar />
        <HealthJourneyTimeline />
        <ActionCards />
        <AIHealthAssistant />
      </div>
    </div>
  )
}

export default MyJourney
