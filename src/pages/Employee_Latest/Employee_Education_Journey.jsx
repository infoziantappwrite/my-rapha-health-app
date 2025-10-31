import React, { useState } from "react";
import NavigatorButton from "./Components/NavigatorButton";
import AskRaphaButton from "./Components/AskRaphaButton";
import LearningCard from "./Components/Education/LearningCard";
import FaithHealthBox from "./Components/Education/FaithHealthBox";
import ModuleStats from "./Components/Education/ModuleStats";
import GreatProgressBanner from "./Components/Education/GreatProgressBanner";
import LearningModal from "./Components/Education/LearningModal";

const Employee_Education_Journey = () => {
    const [selected, setSelected] = useState(null);

    const modules = [
        {
            id: 1,
            title: "Understanding Cancer",
            color: "purple",
            description:
                "Learn the fundamentals of cancer biology, risk factors, and the power of early detection.",
            progress: 100,
            time: "8 min",
            concepts: 4,
            status: "Done",
            action: "Review Module",
            moduleNo: "1 of 6",
            chapter: {
                title: "Cancer Basics: What You Need to Know",
                duration: "8:24",
                type: "Interactive Video Content",
                watchProgress: 0,
                overview:
                    "Gain essential understanding of how cancer develops, spreads, and can be detected early for better outcomes.",
                keyLearningPoints: [
                    "Early detection improves survival rates by up to 90% for many cancers.",
                    "Cancer develops when cells grow abnormally and divide uncontrollably.",
                    "Prevention through healthy living can reduce cancer risk by up to 50%.",
                    "Regular screening catches cancer before symptoms appear.",
                ],
                importantNote:
                    "Most cancers are preventable through healthy lifestyle choices and timely screening.",
                resources: [
                    { name: "Overview", type: "text" },
                    { name: "Transcript", type: "text" },
                    { name: "Resources", type: "text" },
                ],
            },
        },
        {
            id: 2,
            title: "Breast Cancer Prevention",
            color: "rose",
            description:
                "Essential knowledge about breast health, screening methods, and risk reduction strategies.",
            progress: 100,
            time: "10 min",
            concepts: 5,
            status: "Done",
            action: "Review Module",
            moduleNo: "2 of 6",
            chapter: {
                title: "Understanding Breast Health & Screening",
                duration: "10:32",
                type: "Interactive Video Content",
                watchProgress: 0,
                overview:
                    "Discover how to identify early warning signs, understand screening schedules, and make preventive lifestyle choices.",
                keyLearningPoints: [
                    "Self-examinations can help detect abnormalities early.",
                    "Regular mammograms are key to early detection and improved outcomes.",
                    "Maintaining a healthy weight and limiting alcohol reduces risk.",
                    "Hormone balance and genetic awareness play key roles in prevention.",
                ],
                importantNote:
                    "Early detection through mammograms can reduce mortality rates by 25–30%.",
                resources: [
                    { name: "Breast Health Checklist", type: "PDF" },
                    { name: "Screening Schedule Guide", type: "PDF" },
                ],
            },
        },
        {
            id: 3,
            title: "Prostate Health & Screening",
            color: "blue",
            description:
                "Comprehensive guide to prostate cancer awareness, PSA testing, and treatment options.",
            progress: 100,
            time: "9 min",
            concepts: 4,
            status: "Not Started",
            action: "Begin Module",
            moduleNo: "3 of 6",
            chapter: {
                title: "Prostate Health: Awareness & Action",
                duration: "9:10",
                type: "Interactive Video Content",
                watchProgress: 0,
                overview:
                    "Understand the importance of prostate health, symptoms to watch for, and screening options for early detection.",
                keyLearningPoints: [
                    "PSA testing can detect prostate issues before symptoms develop.",
                    "Family history increases risk — screening is essential for men over 45.",
                    "Diet and exercise have proven benefits in maintaining prostate health.",
                ],
                importantNote:
                    "Men with a family history should discuss early screening options with their doctor.",
                resources: [
                    { name: "Prostate Screening Guide", type: "PDF" },
                    { name: "Nutrition for Men's Health", type: "PDF" },
                ],
            },
        },
        {
            id: 4,
            title: "Colon Cancer Awareness",
            color: "orange",
            description:
                "Learn about colorectal screening, prevention through diet, and early warning signs.",
            progress: 0,
            time: "11 min",
            concepts: 5,
            status: "Not Started",
            action: "Begin Module",
            moduleNo: "4 of 6",
            chapter: {
                title: "Colorectal Screening & Early Signs",
                duration: "11:05",
                type: "Interactive Video Content",
                watchProgress: 0,
                overview:
                    "Discover how colon cancer develops, how screening works, and lifestyle choices that promote colon health.",
                keyLearningPoints: [
                    "Colonoscopy is the most effective screening method for colon cancer.",
                    "High-fiber diets and regular exercise reduce colorectal cancer risk.",
                    "Symptoms like blood in stool or persistent abdominal pain require attention.",
                ],
                importantNote:
                    "Screening can detect precancerous polyps before they turn into cancer.",
                resources: [
                    { name: "Healthy Gut Guide", type: "PDF" },
                    { name: "Colonoscopy Prep Checklist", type: "PDF" },
                ],
            },
        },
        {
            id: 5,
            title: "Heart Health",
            color: "red",
            description:
                "Understanding cardiovascular disease, risk assessment, and heart-healthy living strategies.",
            progress: 0,
            time: "12 min",
            concepts: 6,
            status: "Not Started",
            action: "Begin Module",
            moduleNo: "5 of 6",
            chapter: {
                title: "Cardiovascular Health Essentials",
                duration: "12:18",
                type: "Interactive Video Content",
                watchProgress: 0,
                overview:
                    "Learn how blood pressure, cholesterol, and lifestyle choices affect heart health and longevity.",
                keyLearningPoints: [
                    "Exercise 30 minutes a day reduces heart disease risk by 40%.",
                    "High blood pressure and high cholesterol are major risk factors.",
                    "Stress management plays a key role in preventing heart attacks.",
                    "Regular checkups and screenings are crucial for early detection.",
                ],
                importantNote:
                    "Heart disease remains the world’s leading cause of death — but is largely preventable.",
                resources: [
                    { name: "Heart Health Tracker", type: "App Link" },
                    { name: "Dietary Fat Guide", type: "PDF" },
                ],
            },
        },
        {
            id: 6,
            title: "Diabetes & Lifestyle",
            color: "green",
            description:
                "Prevent and manage diabetes through nutrition, activity, and blood sugar monitoring.",
            progress: 0,
            time: "10 min",
            concepts: 5,
            status: "Not Started",
            action: "Begin Module",
            moduleNo: "6 of 6",
            chapter: {
                title: "Diabetes Prevention: Lifestyle as Medicine",
                duration: "10:50",
                type: "Interactive Video Content",
                watchProgress: 0,
                overview:
                    "Learn how simple lifestyle changes can prevent or manage diabetes through diet, activity, and monitoring.",
                keyLearningPoints: [
                    "The Diabetes Prevention Program reduces diabetes risk by 58%.",
                    "Balanced meals and portion control help maintain healthy blood sugar.",
                    "Regular activity increases insulin sensitivity and energy.",
                    "Tracking glucose helps identify trends and make better decisions.",
                ],
                importantNote:
                    "Consistent healthy choices can prevent or delay Type 2 diabetes even in high-risk individuals.",
                resources: [
                    { name: "Diabetes Prevention Program", type: "PDF" },
                    { name: "Meal Planning Guide", type: "PDF" },
                    { name: "Blood Sugar Tracking App", type: "Link" },
                ],
            },
        },
    ];

    const total = modules.length;
    const completed = modules.filter((m) => m.progress === 100).length;
    const inProgress = modules.filter(
        (m) => m.progress > 0 && m.progress < 100
    ).length;
    const overallProgress = (completed / modules.length) * 100;


    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <div className="border-b sm:py-6 p-6 border-gray-300 dark:border-gray-500">
                    {/* --- Header Row --- */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                        <div className="text-left">
                            <h1 className="text-gray-900 dark:text-white text-xl font-semibold mb-2">
                                My Education Journey
                            </h1>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                Your knowledge grows one step at a time.
                            </p>
                        </div>

                        <div className="flex flex-wrap items-center gap-3">
                            <NavigatorButton />
                            <AskRaphaButton />
                        </div>
                    </div>

                    {/* --- Progress Section --- */}
                    <div className="w-full">
                        {/* Top Row: Progress Stats */}
                        <div className="flex flex-wrap items-center justify-between text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                            <span>
                                Overall Progress:{" "}
                                <span className="text-green-600 dark:text-green-400">
                                    {Math.round(overallProgress)}% Complete
                                </span>
                            </span>

                            <span className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                                <span>
                                    <span className="text-green-600 dark:text-green-400 font-semibold">
                                        {completed}
                                    </span>{" "}
                                    completed
                                </span>
                                <span className="text-gray-400">•</span>
                                <span>
                                    <span className="text-orange-600 dark:text-orange-400 font-semibold">
                                        {inProgress}
                                    </span>{" "}
                                    in progress
                                </span>
                            </span>
                        </div>

                        {/* Full Width Progress Bar */}
                        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <div
                                className="h-2 bg-green-600 dark:bg-green-400 transition-all duration-700"
                                style={{ width: `${overallProgress}%` }}
                            ></div>
                        </div>
                    </div>
                </div>


                {/* ---- Learning Dashboard ---- */}
                <div className="bg-white dark:bg-gray-800 p-6">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
                        {/* === Main Section (Left) === */}
                        <div className="col-span-1 lg:col-span-3 space-y-6">
                            {/* Header */}
                            <div className="flex flex-col gap-2">
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100">
                                    Start Learning with Rapha
                                </h2>
                                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl">
                                    Each module strengthens your confidence in understanding prevention and early detection.
                                </p>
                            </div>

                            {/* Cards Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                                {modules.map((m) => (
                                    <LearningCard key={m.id} module={m} onClick={() => setSelected(m)} />
                                ))}
                            </div>

                            {/* Progress Banner */}
                            <div className="pt-2">
                                <GreatProgressBanner completed={completed} total={total} />
                            </div>
                        </div>

                        {/* === Sidebar (Right) === */}
                        <div className="col-span-1 space-y-6">
                            <FaithHealthBox />
                            <ModuleStats completed={completed} total={total} progress={overallProgress} />
                        </div>
                    </div>



                </div>
            </div>

            {/* --- Modal --- */}
            {selected && (
  <LearningModal
    module={selected}
    onClose={() => setSelected(null)}
  />
)}

        </div>
    );
};

export default Employee_Education_Journey;
