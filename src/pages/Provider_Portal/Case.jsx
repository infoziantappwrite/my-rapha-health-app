import React from 'react'
import CasesCard from './CaseComponent.jsx/CasesCard'
import ProviderFilterBar from './ResultsComponents/ProviderFilterBar'
import ResultsTable from './ResultsComponents/ResultsTable'

const Case = () => {
  return (
    <div className="space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <CasesCard></CasesCard>
        <ProviderFilterBar/>
        <ResultsTable></ResultsTable>
      
    </div>
  )
}

export default Case
