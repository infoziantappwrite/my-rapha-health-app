import React from 'react'
import QueueManagementCard from './QueueComponents/QueueManagementCard';
import QueueFiltersCard from './QueueComponents/QueueFiltersCard';
import EmployeeQueue from './QueueComponents/EmployeeQueue';

const Queue = () => {
  return (
    <div >
       <div className='space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8'>
        <QueueManagementCard/>
        <QueueFiltersCard/>
        <EmployeeQueue/>
       </div>
    </div>
  )
}

export default Queue
