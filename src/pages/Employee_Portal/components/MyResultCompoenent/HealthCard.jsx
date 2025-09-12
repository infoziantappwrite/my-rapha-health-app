import React from 'react';
import { Heart, Droplets, ShieldCheck, Brain, FileText, Download } from "lucide-react";
import { Stethoscope, CalendarDays, MessageCircle, MessageCircleCode } from 'lucide-react';

const HealthCard = () => {
  return (
    <div className="px-4 sm:px-6">

      {/* Health Condition Summary */}
      <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Health Condition Summary</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Cancer Screening */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl bg-green-50 dark:bg-green-900 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="text-green-600" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Cancer Screening</h3>
            </div>
            <span className="text-xs bg-green-100 dark:bg-green-700 text-green-600 dark:text-green-200 px-2 py-1 rounded-full">
              Low
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">No abnormalities detected</p>
          <ul className="text-xs mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>• PSA - Prostate Screen: Normal</li>
            <li>• Guardant Shield - Colon Screen: Clear</li>
          </ul>
          <button className="mt-3 w-full bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
            View Details →
          </button>
        </div>

        {/* Heart Health Risk */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl bg-yellow-50 dark:bg-yellow-900 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="text-yellow-600" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Heart Health Risk</h3>
            </div>
            <span className="text-xs bg-yellow-100 dark:bg-yellow-700 text-yellow-600 dark:text-yellow-200 px-2 py-1 rounded-full">
              Moderate
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Moderate cardiovascular risk – lifestyle changes advised
          </p>
          <ul className="text-xs mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>• Total Cholesterol: 245 mg/dL (Elevated)</li>
            <li>• Blood Pressure: 138/85 mmHg (Stage 1)</li>
          </ul>
          <button className="mt-3 w-full bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
            View Details →
          </button>
        </div>

        {/* Diabetes Screening */}
        <div className="border border-gray-200 dark:border-gray-700 rounded-xl bg-green-50 dark:bg-green-900 p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Droplets className="text-green-600" />
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">Diabetes Screening</h3>
            </div>
            <span className="text-xs bg-green-100 dark:bg-green-700 text-green-600 dark:text-green-200 px-2 py-1 rounded-full">
              Low
            </span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">Blood glucose normal</p>
          <ul className="text-xs mt-2 space-y-1 text-gray-600 dark:text-gray-300">
            <li>• Fasting Glucose: 94 mg/dL (Normal)</li>
            <li>• Hemoglobin A1C: 5.2% (Normal)</li>
          </ul>
          <button className="mt-3 w-full bg-white dark:bg-gray-800 border dark:border-gray-600 rounded-lg py-2 text-sm text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700">
            View Details →
          </button>
        </div>
      </div>

      {/* AI Powered Health Summary */}
      <div className="border border-gray-200 dark:border-gray-700 mt-8 p-6 bg-blue-50 dark:bg-blue-900 rounded-xl shadow-sm flex flex-col sm:flex-row sm:space-x-4">
        <div className="flex-shrink-0 flex justify-center sm:block mb-4 sm:mb-0">
          <Brain className="text-blue-600 dark:text-blue-300 w-12 h-12" />
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-2 text-blue-900 dark:text-blue-100">
            AI-Powered Health Summary
          </h3>
          <p className="text-sm mb-4 text-blue-700 dark:text-blue-200">
            Based on your recent health screenings, you are low risk for diabetes and cancer.
            However, your heart screening indicates moderate cardiovascular risk due to elevated cholesterol and borderline high blood pressure.
            We recommend reviewing these results with a Rapha Navigator and following the next steps below to develop a personalized prevention plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex items-center justify-center bg-blue-600 text-white dark:bg-blue-500 dark:text-gray-100 px-4 py-2 rounded-lg text-sm hover:bg-blue-700 dark:hover:bg-blue-600 w-full sm:w-auto">
              <FileText className="w-4 h-4 mr-2" />
              Show Full Report
            </button>
            <button className="flex items-center justify-center border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-300 px-4 py-2 rounded-lg text-sm hover:text-black dark:hover:text-white hover:border-black dark:hover:border-white hover:bg-gray-50 dark:hover:bg-gray-700 w-full sm:w-auto">
              <Download className="w-4 h-4 mr-2" />
              Download PDF Summary
            </button>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="border border-gray-200 dark:border-gray-700 bg-purple-100 dark:bg-purple-900 rounded-3xl shadow-xl overflow-hidden p-6 sm:p-8 mt-5">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-purple-800 dark:text-purple-300">Next Steps</h2>
          <p className="text-base sm:text-lg text-purple-500 dark:text-purple-200 mt-2">
            Take action on your results with expert guidance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Navigator Assigned Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center flex flex-col items-center justify-center border border-purple-200 dark:border-purple-700">
            <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full mb-4">
              <Stethoscope className="text-purple-600 dark:text-purple-300 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Navigator Assigned</h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium mt-1">Dr. Sarah Chen, MD, MPH</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Cardiology & Preventive Care Specialist</p>
            <p className="text-xs text-purple-600 dark:text-purple-300 mt-2">Response time: &lt; 1 business day</p>
          </div>

          {/* Next Screening Due Card */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 text-center flex flex-col items-center justify-center border border-purple-200 dark:border-purple-700">
            <div className="bg-purple-100 dark:bg-purple-700 p-3 rounded-full mb-4">
              <CalendarDays className="text-purple-600 dark:text-purple-300 w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">Next Screening Due</h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium mt-1">January 19, 2026</p>
            <p className="text-sm text-purple-600 dark:text-purple-300 mt-2">12 months from last screening</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Annual comprehensive health screening</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
          <button className="flex items-center justify-center bg-purple-600 dark:bg-purple-500 text-white dark:text-gray-100 font-medium py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors duration-200 w-full sm:w-auto">
            <MessageCircleCode className="w-5 h-5 mr-2" />
            Review With Navigator
          </button>
          <button className="flex items-center justify-center bg-white dark:bg-gray-800 text-purple-600 dark:text-purple-300 font-medium py-3 px-6 rounded-lg border border-purple-600 dark:border-purple-500 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-black dark:hover:text-white transition-colors duration-200 w-full sm:w-auto">
            <MessageCircle className="w-5 h-5 mr-2" />
            Message Navigator
          </button>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 text-xs text-gray-500 dark:text-gray-300 text-center">
          <span className="flex items-center justify-center">
            <span className="bg-gray-200 dark:bg-gray-700 rounded-full px-2 py-1 text-gray-700 dark:text-gray-300 mr-2">🔒</span>
            HIPAA-compliant secure messaging
          </span>
          <span className="flex items-center justify-center">
            <span className="text-red-500 dark:text-red-400 text-base mr-2">⚡</span>
            Same-day response guarantee
          </span>
          <span className="flex items-center justify-center">
            <span className="text-green-500 dark:text-green-400 text-base mr-2">📱</span>
            Available 24/7
          </span>
        </div>
      </div>
    </div>
  );
};

export default HealthCard;
