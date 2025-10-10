// MultiStepPopup.jsx
import React, { useState } from "react";
import { X } from "lucide-react";

const MultiStepPopup = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("mobile");
  const [hasFasted, setHasFasted] = useState(null);

  const nextStep = () => {
    if (step === 1 && hasFasted === null) {
      alert("Please indicate if you've fasted for 12 hours");
      return;
    }
    setStep((prev) => Math.min(prev + 1, 3));
  };
  
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Calendar data for September 2025
  const september2025 = [
    [31, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 1, 2, 3, 4]
  ];

  const availableTimes = [
    "7:00 AM", "7:30 AM", "8:00 AM", "8:30 AM", 
    "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", 
    "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Dialog */}
      <div
        role="dialog"
        aria-labelledby="popup-title"
        aria-describedby="popup-desc"
        className="relative bg-white dark:bg-gray-900 rounded-lg shadow-xl w-[95%] sm:w-[700px] max-h-[90vh] flex flex-col overflow-hidden"
      >
        {/* Header */}
        <div className="flex flex-col gap-2 px-6 py-4 border-b bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 dark:border-gray-700">
          <h2 id="popup-title" className="text-xl font-semibold text-blue-900 dark:text-blue-300">
            {step === 1 && "Step 1: Are You Ready to Schedule?"}
            {step === 2 && "Step 2: Schedule Your Appointment"}
            {step === 3 && "Step 3: Confirm Your Details"}
          </h2>
          <p id="popup-desc" className="text-blue-700 dark:text-blue-400 text-sm">
            {step === 1 &&
              "Schedule your comprehensive health screening with personalized guidance"}
            {step === 2 && "Pick a convenient date and time for your health screening"}
            {step === 3 && "Verify your readiness and appointment information"}
          </p>
        </div>

        {/* Step indicator */}
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((i) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center space-y-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                      i < step
                        ? "bg-blue-600 text-white"
                        : i === step
                        ? "bg-blue-100 text-blue-600 border-2 border-blue-300 dark:bg-gray-700 dark:text-blue-300 dark:border-blue-400"
                        : "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400"
                    }`}
                  >
                    {i}
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      i <= step ? "text-blue-600 dark:text-blue-300" : "text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {i === 1 ? "Readiness" : i === 2 ? "Schedule" : "Confirm"}
                  </span>
                </div>
                {i < 3 && <div className="flex-1 h-0.5 bg-gray-300 dark:bg-gray-600 mx-2"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto px-6 py-4 text-gray-800 dark:text-gray-200">
          {step === 1 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-center">
                Let's make sure you're ready!
              </h3>
              <p className="text-center text-gray-600 dark:text-gray-400">
                Quick preparation checks to ensure the best screening experience
              </p>

              <div className="p-4 bg-blue-50 dark:bg-gray-800 border border-blue-200 dark:border-gray-700 rounded-lg">
                <h4 className="font-semibold mb-2">Have you fasted for 12 hours?</h4>
                <div className="flex gap-2">
                  <button 
                    className={`flex-1 py-2 rounded-md ${hasFasted === true ? 
                      "bg-green-600 text-white" : 
                      "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
                    onClick={() => setHasFasted(true)}
                  >
                    ✅ Yes
                  </button>
                  <button 
                    className={`flex-1 py-2 rounded-md ${hasFasted === false ? 
                      "bg-red-600 text-white" : 
                      "bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600"}`}
                    onClick={() => setHasFasted(false)}
                  >
                    ❌ No
                  </button>
                </div>
              </div>

              <div className="p-3 text-sm text-blue-800 dark:text-blue-200 bg-blue-100 dark:bg-gray-700 rounded-md">
                <strong>Remember:</strong> Bring insurance card and ID. Only water
                is allowed 12 hours before your appointment.
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-center">Select Date & Time</h3>
              
              {/* Calendar */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
                <h4 className="font-semibold mb-2 text-center">September 2025</h4>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map(day => (
                    <div key={day} className="text-center text-sm font-medium py-1 text-gray-500 dark:text-gray-400">
                      {day}
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-7 gap-1">
                  {september2025.map((week, weekIndex) => 
                    week.map((day, dayIndex) => (
                      <button
                        key={`${weekIndex}-${dayIndex}`}
                        className={`h-10 flex items-center justify-center rounded-md text-sm ${
                          day < 20 && day > 0 // Only enable days 1-19 as available
                            ? selectedDate === day
                              ? "bg-blue-600 text-white"
                              : "bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                            : "text-gray-400 dark:text-gray-600 cursor-not-allowed"
                        }`}
                        onClick={() => day < 20 && day > 0 && setSelectedDate(day)}
                        disabled={!(day < 20 && day > 0)}
                      >
                        {day}
                      </button>
                    ))
                  )}
                </div>
              </div>
              
              {/* Available Times */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
                <h4 className="font-semibold mb-2">Available Times</h4>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                  {availableTimes.map(time => (
                    <button
                      key={time}
                      className={`py-2 rounded-md text-sm ${
                        selectedTime === time
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 dark:bg-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900/30"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Location Selection */}
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
                <h4 className="font-semibold mb-2">Choose Location</h4>
                <div className="space-y-3">
                  <div 
                    className={`p-3 border rounded-lg cursor-pointer ${
                      selectedLocation === "mobile" 
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                    onClick={() => setSelectedLocation("mobile")}
                  >
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2 mt-1 ${
                        selectedLocation === "mobile" 
                          ? "bg-blue-600 border-blue-600" 
                          : "border-gray-400 dark:border-gray-500"
                      }`}>
                        {selectedLocation === "mobile" && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <div>
                        <h5 className="font-medium">Mobile Unit at Your Workplace</h5>
                        <p className="text-sm text-green-600 dark:text-green-400">Recommended</p>
                        <p className="text-sm">TechCorp HQ - Mobile Unit A</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">123 Innovation Drive, Tech City</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Mon-Fri, 7:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                  
                  <div 
                    className={`p-3 border rounded-lg cursor-pointer ${
                      selectedLocation === "lab" 
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20" 
                        : "border-gray-200 dark:border-gray-600"
                    }`}
                    onClick={() => setSelectedLocation("lab")}
                  >
                    <div className="flex items-start">
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center mr-2 mt-1 ${
                        selectedLocation === "lab" 
                          ? "bg-blue-600 border-blue-600" 
                          : "border-gray-400 dark:border-gray-500"
                      }`}>
                        {selectedLocation === "lab" && (
                          <div className="w-2 h-2 rounded-full bg-white"></div>
                        )}
                      </div>
                      <div>
                        <h5 className="font-medium">Partner Lab Near You</h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Alternative Option</p>
                        <p className="text-sm">HealthFirst Laboratory</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">456 Medical Center Blvd, Tech City (2.3 miles)</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">Mon-Sat, 6:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-center">Confirm Your Appointment</h3>
              
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border dark:border-gray-700">
                <h4 className="font-semibold mb-3">Appointment Details</h4>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Date:</span>
                    <span className="font-medium">September {selectedDate}, 2025</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Time:</span>
                    <span className="font-medium">{selectedTime}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Location:</span>
                    <span className="font-medium text-right">
                      {selectedLocation === "mobile" 
                        ? "Mobile Unit at Your Workplace" 
                        : "HealthFirst Laboratory"}
                    </span>
                  </div>
                  
                  <div className="pt-3 border-t dark:border-gray-700">
                    <h5 className="font-medium mb-2">Your Tests:</h5>
                    <ul className="space-y-1">
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Blood Draw (Cancer markers, cholesterol, diabetes)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="text-green-500 mr-2">✅</span>
                        <span>Mammogram (3D breast cancer screening)</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="pt-3 border-t dark:border-gray-700">
                    <h5 className="font-medium mb-2">Preparation:</h5>
                    <p className="text-sm">
                      {hasFasted 
                        ? "✅ You have fasted for 12 hours" 
                        : "❌ You have not fasted for 12 hours (please reschedule)"}
                    </p>
                    <p className="text-sm mt-1">Remember to bring your insurance card and ID</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer buttons */}
        <div className="flex justify-between px-6 py-4 border-t bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          {step > 1 && (
            <button
              onClick={prevStep}
              className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
            >
              ← Back
            </button>
          )}
          {step < 3 ? (
            <button
              onClick={nextStep}
              disabled={step === 2 && (!selectedDate || !selectedTime)}
              className="ml-auto px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={onClose}
              className="ml-auto px-4 py-2 rounded-md bg-green-600 text-white hover:bg-green-700"
            >
              Confirm ✅
            </button>
          )}
        </div>

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
        >
          <X className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MultiStepPopup;