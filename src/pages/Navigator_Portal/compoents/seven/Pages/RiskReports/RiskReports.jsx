import React from 'react'
import { ArrowLeft } from 'lucide-react'
import Total_Scores from './Total_Scores'
import All_Screenings from './All_Screenings'

const RiskReports = ({ onBack }) => {
  return (
    <div className="space-y-4">
      {/* Top Bar with Right-Aligned Back Button */}
      <div className="flex justify-end">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800 font-medium border border-purple-200 px-3 py-1.5 rounded-md shadow-sm hover:bg-purple-50 transition"
        >
          <ArrowLeft size={16} /> Back
        </button>
      </div>

      {/* Main Content */}
      <Total_Scores />
      <All_Screenings />
    </div>
  )
}

export default RiskReports
