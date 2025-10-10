import React from 'react';
import ScreeningProgressHeader from './Screening_Progress_Overview/ScreeningProgressHeader';
import AIExecutiveSummaryCard from './Screening_Progress_Overview/AIExecutiveSummaryCard';
import OverallScreeningProgress from './Screening_Progress_Overview/OverallScreeningProgress';
import ScreeningTable from './Screening_Progress_Overview/ScreeningTable';

const ScreeningProgress = () => {
  return (
    <div className='space-y-8 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8'>
        <ScreeningProgressHeader/>
        <AIExecutiveSummaryCard/>
        <OverallScreeningProgress/>
        <ScreeningTable/>
        
      
    </div>
  )
}

export default ScreeningProgress
