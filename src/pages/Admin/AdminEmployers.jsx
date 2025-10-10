import React from 'react';
import AdminHeader from './Components/AdminHeader';
import { Users } from 'lucide-react'; // Make sure you import the icon
import EmployerOnboardingCard from './Components/EmployerOnboardingCard';
import EmployerDirectory from './Components/EmployerDirectory';

const AdminEmployers = () => {
  return (
    <div className="space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <AdminHeader
        icon={<Users className="h-6 w-6 text-white" />}
        title="Employer Onboarding"
        subtitle="Streamline employer setup and configuration with guided workflows"
      />
        <EmployerOnboardingCard />
        <EmployerDirectory/>
    </div>
  );
};

export default AdminEmployers;
