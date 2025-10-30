import { useState } from "react";
import StepCancer from "./StepCancer";
import StepHeart from "./StepHeart";
import StepDiabetes from "./StepDiabetes";
import StepOther from "./StepOther";
import StepReview from "./StepReview";

export default function RiskAssessmentPopup({ closePopup }) {
  const steps = ["Cancer", "Heart", "Diabetes", "Other", "Review"];
  const [currentStep, setCurrentStep] = useState(0);

  // shared data state
  const [data, setData] = useState({
    cancer: "",
    heart: "",
    diabetes: "",
    other: "",
  });

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      console.log(`Step ${currentStep + 1} data:`, data);
      setCurrentStep(currentStep + 1);
    } else {
      console.log("✅ Final data:", data);
      closePopup();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  // render step component dynamically
  const renderStep = () => {
    switch (steps[currentStep]) {
      case "Cancer":
        return <StepCancer data={data} setData={setData} />;
      case "Heart":
        return <StepHeart data={data} setData={setData} />;
      case "Diabetes":
        return <StepDiabetes data={data} setData={setData} />;
      case "Other":
        return <StepOther data={data} setData={setData} />;
      case "Review":
        return <StepReview data={data} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <h3 className="text-lg font-semibold text-purple-700 dark:text-purple-300 mb-1">
        Complete Your Family Risk Assessment
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Step {currentStep + 1} of {steps.length} - Help us understand your family health history
      </p>

      {/* Step Content */}
      <div className="min-h-[120px]">{renderStep()}</div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="px-4 py-2 text-sm rounded-md border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={handleNext}
          className="px-4 py-2 text-sm rounded-md bg-purple-600 hover:bg-purple-700 text-white"
        >
          {currentStep === steps.length - 1 ? "Finish" : "Next"}
        </button>
      </div>
    </div>
  );
}
