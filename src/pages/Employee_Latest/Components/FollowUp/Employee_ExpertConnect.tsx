import { Shield, HeartPulse, Activity, Video } from "lucide-react";

export default function Employee_ExpertConnect() {
  const experts = [
    {
      id: "oncology",
      title: "Oncology Consult",
      description: "Cancer screening and prevention",
      icon: <Shield className="h-10 w-10 mx-auto mb-3 text-pink-600" />,
      border: "border-pink-200 bg-pink-50 dark:border-pink-700 dark:bg-pink-950/30",
    },
    {
      id: "cardiology",
      title: "Cardiology Review",
      description: "Heart health optimization",
      icon: <HeartPulse className="h-10 w-10 mx-auto mb-3 text-red-600" />,
      border: "border-red-200 bg-red-50 dark:border-red-700 dark:bg-red-950/30",
    },
    {
      id: "endocrinology",
      title: "Endocrinology Visit",
      description: "Metabolic health management",
      icon: <Activity className="h-10 w-10 mx-auto mb-3 text-green-600" />,
      border: "border-green-200 bg-green-50 dark:border-green-700 dark:bg-green-950/30",
    },
  ];

  return (
    <div
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 
                 text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 
                 dark:border-gray-700 transition-colors"
    >
      {/* Header */}
      <div className="px-6 pt-6 border-b border-gray-200 dark:border-gray-700">
        <h4 className="text-base font-semibold text-gray-900 dark:text-gray-100">
          Connect With Medical Experts
        </h4>
        <p className="italic text-purple-600 dark:text-purple-400">
          “Expertise guided by compassion.”
        </p>
      </div>

      {/* Content */}
      <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {experts.map((exp) => (
          <div
            key={exp.id}
            data-slot="card"
            className={`text-card-foreground flex flex-col gap-6 rounded-xl hover:shadow-lg transition-shadow cursor-pointer border-2 ${exp.border}`}
          >
            <div className="p-4 text-center">
              {exp.icon}
              <h4 className="font-semibold text-[#303046] dark:text-gray-100 mb-1">
                {exp.title}
              </h4>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                {exp.description}
              </p>

              <button
                className="inline-flex items-center justify-center w-full text-sm font-medium 
                           h-8 rounded-md gap-1.5 px-3 transition-all bg-purple-600 hover:bg-purple-700 
                           text-white focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:outline-none"
              >
                <Video className="h-3 w-3 mr-1" />
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
