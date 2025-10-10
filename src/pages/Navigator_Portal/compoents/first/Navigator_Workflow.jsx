import React from "react";
import Highlight from "./Highlight";
import Table from "./Table";
import NavigatorTools from "./NavigatorTools";

const Navigator_Workflow = () => {
  return (
    <div className="relative px-4 md:px-6 lg:px-8 space-y-6">

      {/* Main content */}
      <div className="space-y-6">
        <Highlight />
        <Table />
        <NavigatorTools />
      </div>
    </div>
  );
};

export default Navigator_Workflow;