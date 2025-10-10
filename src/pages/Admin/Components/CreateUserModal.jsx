import React, { useState } from "react";

const CreateUserModal = ({ onClose }) => {
  const [name, setName] = useState("John Smith");
  const [email, setEmail] = useState("john.smith@company.com");
  const [role, setRole] = useState("Employee");
  const [employer, setEmployer] = useState("HealthCorp Inc");
  const [mfaEnabled, setMfaEnabled] = useState(true);

  const handleCreate = () => {
    console.log({ name, email, role, employer, mfaEnabled });
    if (onClose) onClose();
  };

  return (
    <>
      {/* Blurred Overlay */}
      <div
        className="fixed inset-0  bg-opacity-30 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="fixed top-1/2 left-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 
                      bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 
                      rounded-xl shadow-xl p-6 text-gray-800 dark:text-gray-100">
        {/* Header */}
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold">Add New User</h2>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4 mt-4">
          {/** Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Full Name
            </label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter full name"
              className="w-full h-10 px-3 py-1 border rounded-md 
                         border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                         outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/** Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="w-full h-10 px-3 py-1 border rounded-md 
                         border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                         outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          {/** Role */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium mb-1">
              Role
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full h-10 px-3 py-2 border rounded-md 
                         border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                         outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>Employee</option>
              <option>Manager</option>
              <option>Admin</option>
            </select>
          </div>

          {/** Employer */}
          <div>
            <label htmlFor="employer" className="block text-sm font-medium mb-1">
              Employer
            </label>
            <select
              id="employer"
              value={employer}
              onChange={(e) => setEmployer(e.target.value)}
              className="w-full h-10 px-3 py-2 border rounded-md 
                         border-gray-300 dark:border-gray-600 
                         bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                         outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option>HealthCorp Inc</option>
              <option>TechSolutions</option>
              <option>GlobalSoft</option>
            </select>
          </div>

          {/** MFA Toggle */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMfaEnabled(!mfaEnabled)}
              className={`peer inline-flex h-6 w-12 rounded-full items-center transition-colors 
                         ${mfaEnabled ? "bg-purple-600" : "bg-gray-300 dark:bg-gray-500"}`}
            >
              <span
                className={`block h-4 w-4 rounded-full bg-white transform transition-transform 
                           ${mfaEnabled ? "translate-x-6" : "translate-x-1"}`}
              />
            </button>
            <label className="text-sm font-medium">Enable MFA</label>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 pt-4">
          <button
            onClick={handleCreate}
            data-devlink-id="admin-users-create-submit"
            className="flex-1 h-10 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition"
          >
            Create User
          </button>
          <button
            onClick={onClose}
            className="flex-1 h-10 px-4 py-2 border rounded-md 
                       bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100 
                       border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-600 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default CreateUserModal;
