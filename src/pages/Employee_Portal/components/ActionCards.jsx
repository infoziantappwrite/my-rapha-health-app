import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap, Calendar, Activity, MessageCircle } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Continue Learning",
    description: "Explore health education modules",
    button: "Start Learning",
    link: "/employee/education",
    icon: GraduationCap,
    light: { bg: "bg-purple-50", color: "text-purple-600" },
    dark: { bg: "dark:bg-purple-900/30", color: "dark:text-purple-400" },
    buttonStyle:
      "bg-purple-600 hover:bg-purple-700 text-white dark:bg-purple-500 dark:hover:bg-purple-600",
  },
  {
    id: 2,
    title: "Schedule Screening",
    description: "Book your comprehensive health screening",
    button: "Schedule Now",
    link: "/employee/screening",
    icon: Calendar,
    light: { bg: "bg-blue-50", color: "text-blue-600" },
    dark: { bg: "dark:bg-blue-900/30", color: "dark:text-blue-400" },
    buttonStyle:
      "bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600",
  },
  {
    id: 3,
    title: "View Results",
    description: "Access your health screening results",
    button: "Results Pending",
    link: "/employee/results",
    icon: Activity,
    light: { bg: "bg-green-50", color: "text-green-600" },
    dark: { bg: "dark:bg-green-900/30", color: "dark:text-green-400" },
    buttonStyle:
      "bg-green-600 hover:bg-green-700 text-white dark:bg-green-500 dark:hover:bg-green-600",
  },
  {
    id: 4,
    title: "Talk With a Navigator",
    description: "Get personalized health guidance",
    button: "Connect Now",
    link: "/employee/messages",
    icon: MessageCircle,
    light: { bg: "bg-orange-50", color: "text-orange-600" },
    dark: { bg: "dark:bg-orange-900/30", color: "dark:text-orange-400" },
    buttonStyle:
      "bg-orange-600 hover:bg-orange-700 text-white dark:bg-orange-500 dark:hover:bg-orange-600",
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
            className={`flex flex-col items-center px-2 py-4 rounded-xl shadow-sm ${card.light.bg} ${card.dark.bg}`}
          >
            <Icon className={`w-10 h-10 mb-4 ${card.light.color} ${card.dark.color}`} />
            <h3 className="font-semibold text-gray-800 dark:text-gray-100 text-lg text-center">
              {card.title}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">
              {card.description}
            </p>
            <Link
              to={card.link}
              className={`mt-4 px-4 py-2 rounded-lg text-sm font-medium transition ${card.buttonStyle} text-center`}
            >
              {card.button}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ActionCards;
