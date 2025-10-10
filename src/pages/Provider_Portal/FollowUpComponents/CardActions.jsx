import React from "react";
import { UserCog, Zap, MessageCircle, CircleCheckBig } from "lucide-react";

const CardActions = ({ onAssign, onRoute, onChat, onMarkResolved }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
      <button
        onClick={onAssign}
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md gap-1.5 px-3 bg-blue-600 hover:bg-blue-700 text-white border-gray-300 dark:border-gray-700 focus:ring-blue-500 w-full"
      >
        <UserCog className="h-4 w-4 mr-1" />
        Assign to Navigator
      </button>

      <button
        onClick={onRoute}
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md gap-1.5 px-3 border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 border-gray-300 dark:border-gray-700 dark:hover:bg-input/50 w-full"
      >
        <Zap className="h-4 w-4 mr-1" />
        Start Expert Routing
      </button>

      <button
        onClick={onChat}
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md gap-1.5 px-3 border bg-background text-foreground hover:bg-accent hover:text-accent-foreground dark:bg-input/30 border-gray-300 dark:border-gray-700 dark:hover:bg-input/50 w-full"
      >
        <MessageCircle className="h-4 w-4 mr-1" />
        Chat Navigator
      </button>

      <button
        onClick={onMarkResolved}
        className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all h-10 rounded-md gap-1.5 px-3 bg-green-600 hover:bg-green-700 text-white border-gray-300 dark:border-gray-700 focus:ring-green-500 w-full"
      >
        <CircleCheckBig className="h-4 w-4 mr-1" />
        Mark Resolved
      </button>
    </div>
  );
};

export default CardActions;
