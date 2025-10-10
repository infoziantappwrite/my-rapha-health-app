import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Users,
  Building2,
  FileText,
  Brain,
  Shield,
  FileSearch,
  Settings,
  Zap,
} from "lucide-react";

const QuickAccessCards = () => {
  const navigate = useNavigate();

  const cards = [
    {
      id: "admin-dashboard-quicklink-users",
      title: "User Management",
      subtitle: "Manage user accounts and permissions",
      icon: <Users className="h-6 w-6 text-purple-600" />,
      badge: "2,847",
      route: "/admin/users",
    },
    {
      id: "admin-dashboard-quicklink-employers",
      title: "Employer Onboarding",
      subtitle: "Track employer setup and configuration",
      icon: <Building2 className="h-6 w-6 text-purple-600" />,
      badge: "156",
      route: "/admin/employers",
    },
    {
      id: "admin-dashboard-quicklink-content",
      title: "Content Management",
      subtitle: "Govern content modules and versions",
      icon: <FileText className="h-6 w-6 text-purple-600" />,
      badge: "89",
      route: "/admin/content",
    },
    {
      id: "admin-dashboard-quicklink-ai",
      title: "AI Governance",
      subtitle: "Oversee AI prompts and validation",
      icon: <Brain className="h-6 w-6 text-purple-600" />,
      badge: "247",
      route: "/admin/ai",
    },
    {
      id: "admin-dashboard-quicklink-compliance",
      title: "Compliance Dashboard",
      subtitle: "Monitor regulatory requirements",
      icon: <Shield className="h-6 w-6 text-purple-600" />,
      badge: "12",
      route: "/admin/compliance",
    },
    {
      id: "admin-dashboard-quicklink-logs",
      title: "Audit Logs",
      subtitle: "Review system activity and changes",
      icon: <FileSearch className="h-6 w-6 text-purple-600" />,
      badge: "15.2k",
      route: "/admin/logs",
    },
    {
      id: "admin-dashboard-quicklink-system",
      title: "System Settings",
      subtitle: "Configure platform parameters",
      icon: <Settings className="h-6 w-6 text-purple-600" />,
      badge: "32",
      route: "/admin/system",
    },
    {
      id: "admin-dashboard-quicklink-devlink",
      title: "DevLink Registry",
      subtitle: "View DevLink ID manifest and audit",
      icon: <Zap className="h-6 w-6 text-purple-600" />,
      badge: "106",
      route: "/admin/devlink",
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-medium mb-4">Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => navigate(card.route)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 flex flex-col gap-2 rounded-xl cursor-pointer hover:shadow-lg dark:hover:shadow-[0_4px_6px_rgba(255,255,255,0.2)] transition-shadow  p-6"
            data-devlink-id={card.id}
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2 bg-purple-50 rounded-lg">{card.icon}</div>
              {card.badge && (
                <span className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-200 text-secondary-foreground px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap">
                  {card.badge}
                </span>
              )}
            </div>
            <h3 className="font-medium mb-1">{card.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{card.subtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAccessCards;
