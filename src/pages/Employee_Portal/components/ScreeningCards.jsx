// ScreeningCards.jsx
import React, { useState } from "react";
import { Stethoscope } from "lucide-react";

import MultiStepPopup from "../components/Screening/MultiStepPopup";

const screenings = [
  {
    id: "blood-draw",
    title: "Blood Draw Screening",
    description:
      "Comprehensive blood panel including cancer markers, cholesterol, diabetes, and metabolic health indicators.",
    items: [
      "PSA - Prostate Screen",
      "Guardant Shield - Colon Screen",
      "Cholesterol & Lipid Panel",
      "A1C & Glucose Testing",
    ],
    prepTitle: "Preparation Required",
    prepText: "Fast for 12 hours before appointment • Bring insurance card and ID",
    buttonText: "Schedule Blood Draw",
    buttonColor: "bg-blue-600 hover:bg-blue-700",
    cardColor: "bg-blue-50 dark:bg-blue-900",
    guidelineColor: "bg-blue-100 text-blue-900 dark:bg-blue-800 dark:text-blue-200",
  },
  {
    id: "mammogram",
    title: "Mammogram Screening",
    description:
      "3D mammography for early breast cancer detection using advanced imaging technology.",
    items: [
      "Digital 3D Mammography",
      "Radiologist Review",
      "Same-day Results Available",
      "HIPAA-compliant Reporting",
    ],
    prepTitle: "Screening Guidelines",
    prepText:
      "Recommended annually for women 40+ • Schedule 1 week after menstrual period",
    buttonText: "Schedule Mammogram",
    buttonColor: "bg-pink-600 hover:bg-pink-700",
    cardColor: "bg-pink-50 dark:bg-pink-900",
    guidelineColor: "bg-pink-100 text-pink-900 dark:bg-pink-800 dark:text-pink-200",
  },
];

const ScreeningCards = () => {
  const [selectedScreening, setSelectedScreening] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-6">
        {screenings.map((screen) => (
          <div
            key={screen.id}
            className={`${screen.cardColor} rounded-2xl shadow-sm p-6 flex flex-col`}
          >
            <div className="flex items-center gap-3 mb-3">
              <Stethoscope className="w-6 h-6 text-gray-700 dark:text-gray-200" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{screen.title}</h2>
            </div>

            <p className="text-gray-700 dark:text-gray-300 mb-3">{screen.description}</p>

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4 space-y-1">
              {screen.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>

            <div
              className={`${screen.guidelineColor} p-3 rounded-lg text-sm font-medium mb-4`}
            >
              <p className="font-semibold">{screen.prepTitle}</p>
              <p>{screen.prepText}</p>
            </div>

            <button
              onClick={() => setSelectedScreening(screen)}
              className={`${screen.buttonColor} text-white py-2 px-4 rounded-lg font-medium mb-3`}
            >
              {screen.buttonText}
            </button>

            {/* Footer Buttons on Card */}
            <div className="flex gap-3 text-sm">
              <button className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                Is this right for me?
              </button>
              <button className="flex-1 border border-gray-300 dark:border-gray-600 rounded-lg py-2 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200">
                What to expect
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Multi-Step Popup */}
      {selectedScreening && (
        <MultiStepPopup
          isOpen={!!selectedScreening}
          onClose={() => setSelectedScreening(null)}
          screening={selectedScreening}
        />
      )}
    </>
  );
};

export default ScreeningCards;
