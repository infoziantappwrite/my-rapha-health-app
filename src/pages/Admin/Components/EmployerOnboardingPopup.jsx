// EmployerOnboardingPopup.jsx
import React, { useState } from "react";
import {
    LucideBuilding2,
    LucideUpload,
    LucideUserPlus,
    LucideSettings,
    LucideFileUp,
    LucideX,
} from "lucide-react";

const steps = [
    {
        label: "Create Employer",
        description: "Basic company information",
        icon: LucideBuilding2,
    },
    {
        label: "Upload Eligibility File",
        description: "Employee eligibility data",
        icon: LucideUpload,
    },
    {
        label: "Assign Employer Admin",
        description: "Designate admin user",
        icon: LucideUserPlus,
    },
    {
        label: "Configure Settings",
        description: "Platform configuration",
        icon: LucideSettings,
    },
];

const EmployerOnboardingPopup = ({ isOpen, onClose }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        companyName: "",
        industry: "",
        employeeCount: "",
        primaryContact: "",
        eligibilityFile: null,
        adminEmail: "",
        configSettings: "",
    });

    if (!isOpen) return null;

    const handleNext = () => {
        if (currentStep < steps.length - 1) setCurrentStep(currentStep + 1);
        else {
            console.log("Onboarding Completed", formData);
            onClose();
        }
    };

    const handlePrevious = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, eligibilityFile: e.target.files[0] });
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg max-w-4xl w-full p-6 border border-gray-300 border-gray-300 dark:border-gray-700 max-h-[90vh] overflow-y-auto relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 rounded-xs opacity-70 hover:opacity-100 p-1"
                >
                    <LucideX className="w-5 h-5" />
                    <span className="sr-only">Close</span>
                </button>

                {/* Header */}
                <h2 className="text-lg font-semibold mb-6 text-gray-900 dark:text-gray-100">
                    Employer Onboarding Wizard
                </h2>

                {/* Step Tabs */}
                <div className="flex justify-between mb-6">
                    {steps.map((step, idx) => {
                        const Icon = step.icon;
                        const isCompleted = idx < currentStep;
                        const isActive = idx === currentStep;
                        return (
                            <div key={idx} className="flex flex-col items-center flex-1">
                                <div
                                    className={`p-3 rounded-full mb-2 border-2 ${isCompleted
                                        ? "bg-green-100 border-green-500 text-green-700"
                                        : isActive
                                            ? "bg-purple-100 border-purple-500 text-purple-700"
                                            : "bg-gray-100 border-gray-300 text-gray-500"
                                        }`}
                                >
                                    <Icon className="h-5 w-5" />
                                </div>
                                <p
                                    className={`text-sm font-medium ${isCompleted
                                        ? "text-green-700"
                                        : isActive
                                            ? "text-purple-700"
                                            : "text-gray-600"
                                        }`}
                                >
                                    {step.label}
                                </p>
                                <p className="text-xs text-gray-500">{step.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Progress Bar */}
                <div className="bg-green-200 relative w-full overflow-hidden rounded-full h-2 mb-6">
                    <div
                        className="bg-green-400 h-full transition-all"
                        style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                    ></div>
                </div>

                {/* Step Content */}
                <div className="space-y-6">
                    {currentStep === 0 && (
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm mb-1">Company Name</label>
                                <input
                                    type="text"
                                    name="companyName"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Industry</label>
                                <select
                                    name="industry"
                                    value={formData.industry}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                >
                                    <option value="">Select Industry</option>
                                    <option value="Technology">Technology</option>
                                    <option value="Healthcare">Healthcare</option>
                                    <option value="Finance">Finance</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Employee Count</label>
                                <input
                                    type="number"
                                    name="employeeCount"
                                    value={formData.employeeCount}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Primary Contact</label>
                                <input
                                    type="email"
                                    name="primaryContact"
                                    value={formData.primaryContact}
                                    onChange={handleChange}
                                    className="w-full p-2 border border-gray-300 rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 1 && (
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                            <LucideFileUp className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                            <p className="text-lg font-medium mb-1">Upload Employee Eligibility CSV</p>
                            <p className="text-sm text-gray-600 mb-4">
                                Upload a CSV file containing employee eligibility data
                            </p>

                            <input
                                type="file"
                                accept=".csv"
                                id="file-upload"
                                className="hidden"
                                onChange={handleFileChange}
                            />
                            <label htmlFor="file-upload">
                                <button
                                    className="px-4 py-2 rounded-md bg-background border border-gray-300 hover:bg-accent hover:text-accent-foreground text-sm"
                                    data-devlink-id="admin-employers-upload-eligibility"
                                >
                                    Select CSV File
                                </button>
                            </label>

                            {/* Optional: Download Template */}
                            <div className="mt-4">
                                <button
                                    className="px-3 py-1 text-sm text-purple-600 hover:underline"
                                    data-devlink-id="admin-employers-download-template"
                                >
                                    Download Template
                                </button>
                            </div>
                        </div>
                    )}


                    {currentStep === 2 && (
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium">Step 3: Assign Employer Admin</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    {/* Admin Full Name */}
                                    <div>
                                        <label
                                            className="flex items-center gap-2 text-sm font-medium"
                                            htmlFor="admin-name"
                                        >
                                            Admin Full Name
                                        </label>
                                        <input
                                            type="text"
                                            id="admin-name"
                                            name="adminName"
                                            value={formData.adminName || "John Smith"}
                                            onChange={handleChange}
                                            placeholder="Enter admin name"
                                            className="border-input flex h-9 w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 text-sm bg-input-background dark:bg-input/30 dark:text-white"
                                        />
                                    </div>

                                    {/* Admin Email */}
                                    <div>
                                        <label
                                            className="flex items-center gap-2 text-sm font-medium"
                                            htmlFor="admin-email"
                                        >
                                            Admin Email
                                        </label>
                                        <input
                                            type="email"
                                            id="admin-email"
                                            name="adminEmail"
                                            value={formData.adminEmail || "john.smith@acme.com"}
                                            onChange={handleChange}
                                            placeholder="Enter admin email"
                                            className="border-input flex h-9 w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 text-sm bg-input-background dark:bg-input/30 dark:text-white"
                                        />
                                    </div>

                                    {/* Admin Role Dropdown */}
                                    <div>
                                        <label
                                            className="flex items-center gap-2 text-sm font-medium"
                                            htmlFor="admin-role"
                                        >
                                            Admin Role
                                        </label>
                                        <button
                                            type="button"
                                            role="combobox"
                                            aria-expanded="false"
                                            data-devlink-id="admin-employers-assign-admin"
                                            className="border-input flex w-full items-center justify-between rounded-md border border-gray-300 dark:border-gray-700 px-3 py-2 text-sm bg-input-background dark:bg-input/30 dark:hover:bg-input/50"
                                        >
                                            <span>{formData.adminRole || "Employer Admin"}</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4 opacity-50"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>
                                    </div>

                                    {/* Department */}
                                    <div>
                                        <label
                                            className="flex items-center gap-2 text-sm font-medium"
                                            htmlFor="department"
                                        >
                                            Department
                                        </label>
                                        <input
                                            type="text"
                                            id="department"
                                            name="department"
                                            value={formData.department || "Human Resources"}
                                            onChange={handleChange}
                                            placeholder="HR, Benefits, etc."
                                            className="border-input flex h-9 w-full rounded-md border border-gray-300 dark:border-gray-700 px-3 text-sm bg-input-background dark:bg-input/30 dark:text-white"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}


                    {currentStep === 3 && (
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-medium">Step 4: Configure Settings</h3>

                                {/* Plan Type & Billing Cycle */}
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium">Plan Type</label>
                                        <button
                                            type="button"
                                            role="combobox"
                                            aria-expanded="false"
                                            className="flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm
                       border-gray-300 dark:border-gray-700 dark:bg-input/30 dark:hover:bg-input/50"
                                        >
                                            <span>Premium</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4 opacity-50"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div>
                                        <label className="flex items-center gap-2 text-sm font-medium">Billing Cycle</label>
                                        <button
                                            type="button"
                                            role="combobox"
                                            aria-expanded="false"
                                            data-devlink-id="admin-employers-configure-save"
                                            className="flex w-full items-center justify-between gap-2 rounded-md border bg-input-background px-3 py-2 text-sm
                       border-gray-300 dark:border-gray-700 dark:bg-input/30 dark:hover:bg-input/50"
                                        >
                                            <span>Monthly</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="w-4 h-4 opacity-50"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Setup Complete */}
                                <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-green-600"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                                            <path d="m9 11 3 3L22 4" />
                                        </svg>
                                        <span className="font-medium text-green-700">Setup Complete</span>
                                    </div>
                                    <p className="text-sm text-green-600">
                                        All configuration steps have been completed successfully.
                                    </p>
                                </div>


                            </div>
                        </div>
                    )}

                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t mt-6">
                    <button
                        className="px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600"
                        onClick={handlePrevious}
                        disabled={currentStep === 0}
                        data-devlink-id={`admin-employers-wizard-back-${currentStep}`}
                    >
                        Previous
                    </button>

                    <button
                        className="px-4 py-2 rounded-md bg-purple-600 text-white hover:bg-purple-700"
                        onClick={handleNext}
                        data-devlink-id={
                            currentStep === steps.length - 1
                                ? "admin-employers-complete-onboarding"
                                : `admin-employers-wizard-next-${currentStep}`
                        }
                    >
                        {currentStep === steps.length - 1 ? "Complete" : "Next Step"}
                    </button>
                </div>


                <div className="text-xs text-gray-500 mt-4">Audit log entry created.</div>
            </div>
        </div>
    );
};

export default EmployerOnboardingPopup;
