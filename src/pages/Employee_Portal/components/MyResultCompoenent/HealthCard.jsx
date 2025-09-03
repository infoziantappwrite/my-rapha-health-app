import React from 'react'
import { Heart, Droplets, ShieldCheck, Brain, FileText, Download } from "lucide-react";
import { Stethoscope, CalendarDays, MessageCircle, MessageCircleCode } from 'lucide-react';

const HealthCard = () => {
    return (
        <div>

            {/* Health Condition Summary */}
            <h2 className="text-lg font-semibold mb-4">Health Condition Summary</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {/* Cancer Screening */}
                <div className="border rounded-xl bg-green-50 py-4 px-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <ShieldCheck className="text-green-600" />
                            <h3 className="font-semibold">Cancer Screening</h3>
                        </div>
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                            Low
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">No abnormalities detected</p>
                    <ul className="text-xs mt-2 space-y-1 text-gray-600">
                        <li>• PSA - Prostate Screen: Normal</li>
                        <li>• Guardant Shield - Colon Screen: Clear</li>
                    </ul>
                    <button className="mt-3 w-full bg-white border rounded-lg py-2 text-sm hover:bg-gray-50">
                        View Details →
                    </button>
                </div>

                {/* Heart Health Risk */}
                <div className="border rounded-xl bg-yellow-50 py-4 px-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Heart className="text-yellow-600" />
                            <h3 className="font-semibold">Heart Health Risk</h3>
                        </div>
                        <span className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-full">
                            Moderate
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                        Moderate cardiovascular risk – lifestyle changes advised
                    </p>
                    <ul className="text-xs mt-2 space-y-1 text-gray-600">
                        <li>• Total Cholesterol: 245 mg/dL (Elevated)</li>
                        <li>• Blood Pressure: 138/85 mmHg (Stage 1)</li>
                    </ul>
                    <button className="mt-3 w-full bg-white border rounded-lg py-2 text-sm hover:bg-gray-50">
                        View Details →
                    </button>
                </div>

                {/* Diabetes Screening */}
                <div className="border rounded-xl bg-green-50 py-4 px-4 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <Droplets className="text-green-600" />
                            <h3 className="font-semibold">Diabetes Screening</h3>
                        </div>
                        <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">
                            Low
                        </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Blood glucose normal</p>
                    <ul className="text-xs mt-2 space-y-1 text-gray-600">
                        <li>• Fasting Glucose: 94 mg/dL (Normal)</li>
                        <li>• Hemoglobin A1C: 5.2% (Normal)</li>
                    </ul>
                    <button className="mt-3 w-full bg-white border rounded-lg py-2 text-sm hover:bg-gray-50">
                        View Details →
                    </button>
                </div>
            </div>

            {/* AI Powered Health Summary */}
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border shadow-sm flex space-x-4">
                {/* Icon on the left */}
                <div className="flex-shrink-0">
                    <Brain className="text-blue-600 w-12 h-12" />
                </div>

                {/* Content */}
                <div>
                    <h3 className="font-semibold text-blue-900 text-lg mb-2">
                        AI-Powered Health Summary
                    </h3>
                    <p className="text-sm text-blue-700 mb-4">
                        Based on your recent health screenings, you are low risk for diabetes and cancer.
                        However, your heart screening indicates moderate cardiovascular risk due to elevated cholesterol and borderline high blood pressure.
                        We recommend reviewing these results with a Rapha Navigator and following the next steps below to develop a personalized prevention plan.
                    </p>
                    <div className="flex space-x-3">
                        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700">
                            <FileText className="w-4 h-4 mr-2" />
                            Show Full Report
                        </button>
                        <button className="flex items-center border border-blue-600 text-blue-600 px-4 py-2 rounded-lg text-sm hover:text-black hover:border-black hover:bg-gray-50">
                            <Download className="w-4 h-4 mr-2" />
                            Download PDF Summary
                        </button>
                    </div>
                </div>
            </div>

        

          {/* Inner White Box */}
  <div className="bg-purple-100 rounded-3xl shadow-xl overflow-hidden p-8 mt-5">
    <div className="text-center mb-8">
      <h2 className="text-3xl font-bold text-purple-800">Next Steps</h2>
      <p className="text-lg text-purple-500 mt-2">
        Take action on your results with expert guidance
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Navigator Assigned Card */}
      <div className="bg-purple-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center border border-purple-200">
        <div className="bg-purple-100 p-3 rounded-full mb-4">
          <Stethoscope className="text-purple-600 w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Navigator Assigned</h3>
        <p className="text-gray-700 font-medium mt-1">Dr. Sarah Chen, MD, MPH</p>
        <p className="text-sm text-gray-500">Cardiology & Preventive Care Specialist</p>
        <p className="text-xs text-purple-600 mt-2">Response time: &lt; 1 business day</p>
      </div>

      {/* Next Screening Due Card */}
      <div className="bg-purple-50 rounded-2xl p-6 text-center flex flex-col items-center justify-center border border-purple-50">
        <div className="bg-purple-100 p-3 rounded-full mb-4">
          <CalendarDays className="text-purple-600 w-8 h-8" />
        </div>
        <h3 className="text-xl font-semibold text-gray-800">Next Screening Due</h3>
        <p className="text-gray-700 font-medium mt-1">January 19, 2026</p>
        <p className="text-sm text-purple-600 mt-2">12 months from last screening</p>
        <p className="text-sm text-gray-500">Annual comprehensive health screening</p>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
      <button className="flex items-center justify-center bg-purple-600 text-white font-medium py-3 px-6 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-200">
        <MessageCircleCode className="w-5 h-5 mr-2" />
        Review With Navigator
      </button>
      <button className="flex items-center justify-center bg-white text-purple-600 font-medium py-3 px-6 rounded-lg border border-purple-600 hover:bg-gray-100 transition-colors duration-200">
        <MessageCircle className="w-5 h-5 mr-2" />
        Message Navigator
      </button>
    </div>

    {/* Footer */}
    <div className="flex flex-wrap justify-center items-center gap-4 text-xs text-gray-500 text-center">
      <span className="flex items-center">
        <span className="bg-gray-200 rounded-full px-2 py-1 text-gray-700 mr-2">🔒</span>
        HIPAA-compliant secure messaging
      </span>
      <span className="flex items-center">
        <span className="text-red-500 text-base mr-2">⚡</span>
        Same-day response guarantee
      </span>
      <span className="flex items-center">
        <span className="text-green-500 text-base mr-2">📱</span>
        Available 24/7
      </span>
    </div>
  </div>
        </div>
    )
}

export default HealthCard