import React from 'react'
import FilterAndRisk from './FilterAndRisk'
import ChartDetails from './ChartDetail'
import InteractionValidation from './InteractionValidation'

const Risk_Stratification = () => {
  return (
    <div>
        <FilterAndRisk />
        <ChartDetails />
        <InteractionValidation />
    </div>
  )
}

export default Risk_Stratification