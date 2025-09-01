import React from 'react'
import LessonCard from './components/LessonCard';
import EducationModules from './components/EducationModules';

const HealthEducation = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start p-10 space-y-10">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Health Education Hub</h1>
        <p className="text-gray-600">
          Learn about the health conditions included in your screening
        </p>
      </div>
      <LessonCard />
      <EducationModules />
    </div>
  )
}

export default HealthEducation
