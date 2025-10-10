import React from 'react'
import LessonCard from './components/LessonCard';
import EducationModules from './components/EducationModules';

const HealthEducation = () => {
  return (
    <div className="min-h-screen w-full flex flex-col justify-start space-y-10  bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className='space-y-10 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8'>
      {/* Title Section */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
          Health Education Hub
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Learn about the health conditions included in your screening
        </p>
      </div>

      {/* Components */}
      <LessonCard />
      <EducationModules />
      </div>
    </div>
  )
}

export default HealthEducation
