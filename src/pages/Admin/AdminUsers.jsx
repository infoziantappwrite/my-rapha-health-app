import React, { useState } from 'react';
import AdminHeader from './Components/AdminHeader';
import { Users } from 'lucide-react';;
import UsersManagement from './Components/UsersManagement';


// Main Admin Users Component
const AdminUsers = () => {


  return (
    <div className="space-y-5 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
       <AdminHeader
        icon={<Users className="h-6 w-6 text-white" />}
        title="User Management"
        subtitle="Manage user accounts, roles, and access permissions across the platform"
      />
        <UsersManagement />
    </div>
  );
};

export default AdminUsers;
