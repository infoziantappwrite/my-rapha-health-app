import { PlayCircle, BookOpen, ChevronRight } from "lucide-react";

export default function Employee_EducationCard() {
  const educationData = [
    {
      id: "bp-understanding",
      title: "Understanding Elevated Blood Pressure",
      description: "Learn what your numbers mean and how to improve them",
      type: "Video • 8 min",
      icon: <PlayCircle className="h-10 w-10 text-purple-600" />,
      action: "Watch",
    },
    {
      id: "faith-recovery",
      title: "Faith and Focus During Recovery",
      description: "Finding peace in the healing journey",
      type: "Article • 5 min",
      icon: <BookOpen className="h-10 w-10 text-purple-600" />,
      action: "Read",
    },
    {
      id: "doctor-questions",
      title: "What to Ask at Your Next Doctor Visit",
      description: "Prepare for productive conversations with your care team",
      type: "Article • 4 min",
      icon: <BookOpen className="h-10 w-10 text-purple-600" />,
      action: "Read",
    },
  ];

  return (
    <div
      data-slot="card"
      className="bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 
                 text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 
                 dark:border-gray-700 transition-colors"
    >
      {/* Header */}
      <div
        data-slot="card-header"
        className="px-6 pt-6 border-b border-gray-200 dark:border-gray-700"
      >
        <h4
          data-slot="card-title"
          className="text-base font-semibold text-gray-900 dark:text-gray-100"
        >
          Keep Learning — Knowledge Reduces Fear
        </h4>
        <p
          data-slot="card-description"
          className="italic text-purple-600 dark:text-purple-400"
        >
          "Wisdom leads to wellness."
        </p>
      </div>

      {/* Content */}
      <div data-slot="card-content" className="px-6 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {educationData.map((item) => (
            <div
              key={item.id}
              data-slot="card"
              className="bg-white dark:bg-gray-800 text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-200 
                         dark:border-gray-700
                         hover:shadow-md transition-shadow cursor-pointer"
            >
              <div data-slot="card-content" className="p-4">
                <div className="bg-purple-100 h-24 rounded-md mb-3 flex items-center justify-center">
                  {item.icon}
                </div>

                <h4 className="font-semibold text-sm text-[#303046] dark:text-gray-100 mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between">
                  <span
                    data-slot="badge"
                    className="inline-flex items-center justify-center rounded-md border 
                               px-2 py-0.5 font-medium w-fit text-xs text-gray-700 
                               dark:text-gray-300 border-gray-300 dark:border-gray-700"
                  >
                    {item.type}
                  </span>

                  <button
                    data-slot="button"
                    className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium 
                               transition-all h-8 rounded-md gap-1.5 px-3 bg-transparent hover:bg-gray-100 
                               dark:hover:bg-gray-800 text-gray-800 dark:text-gray-100"
                  >
                    {item.action}
                    <ChevronRight className="h-3 w-3 ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
