// MultiStepPopup.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

const MultiStepPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-labelledby="popup-title"
      aria-describedby="popup-desc"
      className="bg-background fixed top-[50%] left-[50%] z-50 grid translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg w-[95vw] max-w-5xl max-h-[95vh] overflow-hidden"
      tabIndex={-1}
      style={{ pointerEvents: "auto" }}
    >
      {/* Header */}
      <div className="flex flex-col gap-2 text-center sm:text-left px-8 py-6 border-b bg-gradient-to-r from-blue-50 to-indigo-50">
        <h2 id="popup-title" className="text-2xl font-semibold text-blue-900">
          {step === 1 && "Step 1: Are You Ready to Schedule?"}
          {step === 2 && "Step 2: Schedule Your Appointment"}
          {step === 3 && "Step 3: Confirm Your Details"}
        </h2>
        <p id="popup-desc" className="text-blue-700 text-base">
          {step === 1 && "Schedule your comprehensive health screening with personalized guidance"}
          {step === 2 && "Pick a convenient date and time for your health screening"}
          {step === 3 && "Verify your readiness and appointment information"}
        </p>
      </div>

      {/* Step Indicator */}
      <div className="px-8 py-4 bg-muted/30">
        <div className="flex items-center justify-between max-w-md mx-auto">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex flex-col items-center space-y-2 relative">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                  i < step ? "bg-blue-600 text-white shadow-lg scale-110" :
                  i === step ? "bg-blue-100 text-blue-600 border-2 border-blue-300" :
                  "bg-gray-200 text-gray-500"
                }`}
              >
                <span className="font-semibold">{i}</span>
              </div>
              <div className={`text-xs font-medium ${i <= step ? "text-blue-600" : "text-gray-500"}`}>
                {i === 1 ? "Readiness" : i === 2 ? "Schedule" : "Confirm"}
              </div>
              {i < 3 && (
                <div className="absolute w-24 h-1 mt-6 bg-gray-200" style={{ left: i===1 ? 'calc(50% - 48px)' : 'calc(50% + 48px)', zIndex: -1 }}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Area / Content */}
      <div className="relative flex-1 px-8 py-6 overflow-y-auto">
        {/* Step 1 content */}
        {step === 1 && (
          <div className="space-y-8">
            {/* Your full Step 1 HTML content here */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Let's make sure you're ready!</h2>
              <p className="text-muted-foreground">Quick preparation checks to ensure the best screening experience</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="text-card-foreground flex flex-col gap-6 rounded-xl border bg-blue-50 border-blue-200 shadow-lg">
                <div className="[&:last-child]:pb-6 p-8">
                  <div className="text-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                      {/* SVG icon */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-test-tube h-10 w-10 text-blue-600" aria-hidden="true">
                        <path d="M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5c-1.4 0-2.5-1.1-2.5-2.5V2"></path>
                        <path d="M8.5 2h7"></path>
                        <path d="M14.5 16h-5"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Blood Draw Readiness</h3>
                    <p className="text-blue-700 text-sm">Comprehensive blood panel for health markers</p>
                  </div>
                  <div className="space-y-6">
                    <div className="bg-white/80 rounded-lg p-4">
                      <h4 className="font-semibold mb-3">Have you fasted for 12 hours?</h4>
                      <div className="flex space-x-4">
                        <button className="flex-1 h-12 px-4 py-2 bg-background border rounded-md">✅ Yes</button>
                        <button className="flex-1 h-12 px-4 py-2 bg-red-600 text-white rounded-md">❌ No</button>
                      </div>
                    </div>
                    <div className="bg-blue-100 rounded-lg p-4 text-blue-800 text-sm">
                      <strong>Remember:</strong> Bring insurance card and ID. No food or drinks except water for 12 hours before your appointment.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2 content */}
        {step === 2 && (
          <div className="space-y-8">
            {/* Paste your full Step 2 HTML content here */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Step 2: Select Date & Time</h2>
              <p className="text-muted-foreground">Choose a convenient slot for your appointment</p>
            </div>
            {/* You can add your Step 2 detailed card content here */}
          </div>
        )}

        {/* Step 3 content */}
        {step === 3 && (
          <div className="space-y-8">
            {/* Step 3 content */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-semibold mb-2">Step 3: Confirm Appointment</h2>
              <p className="text-muted-foreground">Review and confirm your selections</p>
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          {step > 1 && (
            <button onClick={prevStep} className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400">
              ← Back
            </button>
          )}
          {step < 3 ? (
            <button onClick={nextStep} className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Next →
            </button>
          ) : (
            <button onClick={onClose} className="ml-auto px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
              Confirm ✅
            </button>
          )}
        </div>
      </div>

      {/* Close Button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-xs opacity-70 hover:opacity-100"
      >
        <X className="w-6 h-6" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
};

export default MultiStepPopup;
