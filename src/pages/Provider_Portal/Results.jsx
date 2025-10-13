import React from 'react';
import ProviderFilterBar from './ResultsComponents/ProviderFilterBar';
import ResultsCards from './ResultsComponents/ResultsCards';
import ResultsTable from './ResultsComponents/ResultsTable';


const Results = () => {


  return (
    <div className="space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <ProviderFilterBar/>
      <ResultsCards/>
      <ResultsTable/>

    </div>
  );
};

export default Results
