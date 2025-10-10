// EducationModules.jsx
import React, {useState} from "react";
import { Heart, Droplet, Activity, Stethoscope, Lock } from "lucide-react";
import NotificationToast from "../../../components/NotificationToast";
const modules = [
  {
    id: 1,
    title: "Breast Cancer",
    subtitle: "Recommended for women 40+",
    time: "20 minutes",
    progress: 0,
    lessons: "0 of 3 lessons completed",
    description: "Understanding mammography screening, self-exams, and risk factors",
    lightColor: "bg-pink-50 border-pink-200",
    darkColor: "dark:bg-pink-900/30 dark:border-pink-700",
    icon: <Heart className="w-6 h-6 text-pink-600 dark:text-pink-400" />,
  },
  {
    id: 2,
    title: "Prostate Cancer",
    subtitle: "Recommended for men 50+",
    time: "18 minutes",
    progress: 50,
    lessons: "1 of 2 lessons completed",
    description: "PSA screening, symptoms to watch for, and treatment options",
    lightColor: "bg-blue-50 border-blue-200",
    darkColor: "dark:bg-blue-900/30 dark:border-blue-700",
    icon: <Stethoscope className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
  },
  {
    id: 3,
    title: "Colon Cancer",
    subtitle: "For adults 45+ or with family history",
    time: "22 minutes",
    progress: 0,
    lessons: "Not started",
    description: "Colonoscopy screening, dietary factors, and warning signs",
    lightColor: "bg-yellow-50 border-yellow-200",
    darkColor: "dark:bg-yellow-900/30 dark:border-yellow-700",
    icon: <Activity className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />,
  },
  {
    id: 4,
    title: "Heart Disease",
    subtitle: "Based on your risk score",
    time: "25 minutes",
    progress: 75,
    lessons: "In progress",
    description: "Cholesterol management, blood pressure, and lifestyle changes",
    lightColor: "bg-red-50 border-red-200",
    darkColor: "dark:bg-red-900/30 dark:border-red-700",
    icon: <Heart className="w-6 h-6 text-red-600 dark:text-red-400" />,
  },
  {
    id: 5,
    title: "Diabetes Prevention",
    subtitle: "Low risk – maintenance tips",
    time: "20 minutes",
    progress: 50,
    lessons: "2 of 4 lessons completed",
    description: "Blood sugar monitoring, nutrition, and preventing Type 2 diabetes",
    lightColor: "bg-green-50 border-green-200",
    darkColor: "dark:bg-green-900/30 dark:border-green-700",
    icon: <Droplet className="w-6 h-6 text-green-600 dark:text-green-400" />,
  },
];

const ModuleCard = ({ module }) => {
  const [showToast, setShowToast] = useState(false);

  const handleClick = () => {
    // Only show toast if the module is locked
    if (module.progress < 100) {
      setShowToast(true);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className={`p-5 rounded-xl border shadow-sm flex flex-col gap-3 transition 
          ${module.lightColor} ${module.darkColor} cursor-pointer`}
      >
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center border dark:border-gray-600">
              {module.icon}
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                {module.title}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {module.subtitle}
              </p>
            </div>
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-300">
            {module.progress}%
          </div>
        </div>

        {/* Progress Info */}
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300">
          <span>{module.time}</span>
          <span>{module.lessons}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {module.description}
        </p>

        {/* Progress Bar */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full overflow-hidden">
          <div
            className="h-2 bg-gray-700 dark:bg-gray-300"
            style={{ width: `${module.progress}%` }}
          />
        </div>

        {/* Locked */}
        {module.progress < 100 && (
          <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 py-2 rounded-md text-sm">
            <Lock className="w-4 h-4" />
            Locked
          </div>
        )}
      </div>

      {/* Notification Toast */}
      {showToast && (
        <NotificationToast
          title="Warning"
          content="🔒 Complete the foundation lesson first to unlock all personalized modules"
          onClose={() => setShowToast(false)}
        />
      )}
    </>
  );
};


// EducationModules
const EducationModules = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          Personalized Education Modules
        </h2>
        <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300 border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          Complete foundation to unlock
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((mod) => (
          <ModuleCard key={mod.id} module={mod} />
        ))}
      </div>
    </div>
  );
};

export default EducationModules;
