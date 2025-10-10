import React from 'react';
import SampleTrackingCard from './SamplesComponents/SampleTrackingCard';
import SamplesTable from './SamplesComponents/SamplesTable';

const Samples = () => {
  return (
    <div className='space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8'>
        <SampleTrackingCard/>
        <SamplesTable/>
      
    </div>
  )
}

export default Samples
