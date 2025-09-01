import React from 'react'
import ScreeningCards from './components/ScreeningCards'
import ScreeningProgress from './components/ScreeningProgress'
import ScheduleScreen from './components/ScheduleScreen'

const Screening = () => {
  return (
    <div  className="p-10 space-y-10">
         <div>
        <h1 className="text-2xl font-bold text-gray-900">Health Screening Management</h1>
        <p className="text-gray-600">
       Schedule and manage your comprehensive health screening appointments
        </p>
      </div>
      <ScreeningCards/>
      <ScreeningProgress/>
      <ScheduleScreen/>
      
    </div>
  )
}

export default Screening
