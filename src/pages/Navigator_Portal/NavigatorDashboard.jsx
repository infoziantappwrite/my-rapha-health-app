import React from 'react'
import { Navigator_Workflow } from './compoents/Navigator_Workflow'
import Highlight from './compoents/Highlight'
import Table from './compoents/Table'
import NavigatorTools from './compoents/NavigatorTools'


const NavigatorDashboard = () => {
  return (
    <div className="relative">
      {/* Sticky workflow */}
      <div className="sticky top-0 z-50">
        <Navigator_Workflow />
      </div>

      {/* Scrollable highlights */}
      <div className="mt-6">
        <Highlight />
        <Table />
        <NavigatorTools />
      </div>
    </div>
  )
}

export default NavigatorDashboard
