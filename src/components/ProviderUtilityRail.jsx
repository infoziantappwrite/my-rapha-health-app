import React from "react";
import { Code, Sparkles, CircleHelp } from "lucide-react";

const ProviderUtilityRail = ({ onDevLinkClick, onAskRapha, onHelp }) => {
  return (
     <div className="py-2 dark:bg-gray-900 sm:px-10 max-w-7xl mx-auto">
    <div className="flex items-center justify-between h-[44px] px-4 gap-2  border-b border-gray-300 dark:bg-gray-900 dark:border-gray-700">
      <div className="flex-1" />

      <div className="flex items-center gap-2">
        {/* DevLink Button */}
        

        {/* Ask Rapha Button */}
        <button
          onClick={onAskRapha}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 h-8 rounded-md gap-1.5 px-3 bg-purple-600 hover:bg-purple-700 text-white"
        >
          <Sparkles className="h-4 w-4 mr-2" />
          Ask Rapha
        </button>

        {/* Help Button */}
        <button
          onClick={onHelp}
          className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground dark:hover:bg-gray-700 h-8 rounded-md gap-1.5 px-3 text-foreground dark:text-gray-100 border border-gray-300 dark:border-gray-700"
        >
          <CircleHelp className="h-4 w-4 mr-2" />
          Help
        </button>
      </div>
    </div>
     </div>
  );
};

export default ProviderUtilityRail;
