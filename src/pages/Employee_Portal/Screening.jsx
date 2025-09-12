import React from 'react'
import ScreeningCards from './components/ScreeningCards'
import ScreeningProgress from './components/ScreeningProgress'
import ScheduleScreen from './components/ScheduleScreen'

const Screening = () => {
  return (
    <div className="space-y-10  max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Health Screening Management
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Schedule and manage your comprehensive health screening appointments
        </p>
      </div>

      {/* Sub-components should also support dark mode internally */}
      <ScreeningCards />
      <ScreeningProgress />
      <ScheduleScreen />
    </div>
  )
}

export default Screening
