import React, { useState } from "react";
import { Plus, Building2 } from "lucide-react";
import EmployerOnboardingPopup from "./EmployerOnboardingPopup";

const EmployerOnboardingCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const startOnboarding = () => {
    // Add your onboarding logic here
    closeModal();
  };

  return (
    <>
      {/* Card */}
      <div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 my-6">
        <div className="grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-t-lg">
          <h4 className="leading-none flex items-center justify-between">
            <span>New Employer Setup Wizard</span>
            <button
              type="button"
              aria-haspopup="dialog"
              aria-expanded={isModalOpen}
              className="inline-flex items-center justify-center text-sm font-medium transition-all bg-white text-purple-700 hover:bg-secondary/80 h-8 rounded-md gap-1.5 px-3"
              data-devlink-id="admin-employers-start-onboarding"
              onClick={openModal}
            >
              <Plus className="h-4 w-4 mr-2" />
              Start Onboarding
            </button>
          </h4>
        </div>

        <div className="p-6 [&:last-child]:pb-6">
          <div className="text-center py-8">
            <Building2 className="h-16 w-16 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">
              Ready to Onboard New Employers
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Use our guided wizard to seamlessly set up new employer accounts
              with proper configuration and admin access.
            </p>
            <button
              className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all h-9 px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
              onClick={openModal}
            >
              Start New Onboarding
            </button>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      <EmployerOnboardingPopup
        isOpen={isModalOpen}
        onClose={closeModal}
        onStart={startOnboarding}
      />
    </>
  );
};

export default EmployerOnboardingCard;
