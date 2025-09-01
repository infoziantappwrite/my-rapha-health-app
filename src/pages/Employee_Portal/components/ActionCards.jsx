import React from "react";
import { GraduationCap, Calendar, Activity, MessageCircle } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Continue Learning",
    description: "Explore health education modules",
    button: "Start Learning",
    icon: GraduationCap,
    color: "text-purple-600",
    bg: "bg-purple-50",
    buttonStyle: "bg-purple-600 hover:bg-purple-700 text-white",
  },
  {
    id: 2,
    title: "Schedule Screening",
    description: "Book your comprehensive health screening",
    button: "Schedule Now",
    icon: Calendar,
    color: "text-blue-600",
    bg: "bg-blue-50",
    buttonStyle: "bg-blue-600 hover:bg-blue-700 text-white",
  },
  {
    id: 3,
    title: "View Results",
    description: "Access your health screening results",
    button: "Results Pending",
    icon: Activity,
    color: "text-green-600",
    bg: "bg-green-50",
    buttonStyle: "bg-green-600 hover:bg-green-700 text-white",
  },
  {
    id: 4,
    title: "Talk With a Navigator",
    description: "Get personalized health guidance",
    button: "Connect Now",
    icon: MessageCircle,
    color: "text-orange-600",
    bg: "bg-orange-50",
    buttonStyle: "bg-orange-600 hover:bg-orange-700 text-white",
  },
];

const ActionCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;
        return (
          <div
            key={card.id}
            className={`flex flex-col items-center p-6 rounded-xl shadow-sm ${card.bg}`}
          >
            <Icon className={`w-10 h-10 mb-4 ${card.color}`} />
            <h3 className="font-semibold text-gray-800 text-lg text-center">
              {card.title}
            </h3>
            <p className="text-sm text-gray-500 text-center mt-1">
              {card.description}
            </p>
            <button
              className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium ${card.buttonStyle}`}
            >
              {card.button}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ActionCards;
