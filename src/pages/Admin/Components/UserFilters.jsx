import React, { useState } from "react";
import CreateUserModal from "./CreateUserModal"; // your create user component

const UserFilters = ({ filters, setFilters, uniqueRoles, uniqueEmployers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e) => setFilters({ ...filters, search: e.target.value });
  const handleRoleChange = (e) => setFilters({ ...filters, role: e.target.value });
  const handleEmployerChange = (e) => setFilters({ ...filters, employer: e.target.value });

  return (
    <div data-slot="card" className="bg-alo text-card-foreground flex flex-col gap-6 rounded-xl border border-gray-300 dark:border-gray-700 my-6">
      <div data-slot="card-content" className="[&:last-child]:pb-6 p-6">
        <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
          <div className="flex flex-col sm:flex-row gap-6 flex-1">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-search absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400"
                aria-hidden="true"
              >
                <path d="m21 21-4.34-4.34"></path>
                <circle cx="11" cy="11" r="8"></circle>
              </svg>
              <input
                data-slot="input"
                data-devlink-id="admin-users-search"
                className="placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 flex h-9 w-full min-w-0 rounded-md px-3 py-1 text-base outline-none pl-10"
                placeholder="Search users..."
                value={filters.search || ""}
                onChange={handleSearchChange}
              />
            </div>

            {/* Persona Filter */}
            <select
              data-slot="select-trigger"
              data-devlink-id="admin-users-filter-persona"
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm outline-none w-[180px]"
              value={filters.role || ""}
              onChange={handleRoleChange}
            >
              <option value="">All Personas</option>
              {uniqueRoles.map((role) => (
                <option key={role} value={role}>
                  {role}
                </option>
              ))}
            </select>

            {/* Employer Filter */}
            <select
              data-slot="select-trigger"
              data-devlink-id="admin-users-filter-employer"
              className="border border-gray-300 dark:border-gray-700 dark:bg-gray-800 bg-gray-200 flex items-center justify-between gap-2 rounded-md px-3 py-2 text-sm outline-none w-[200px]"
              value={filters.employer || ""}
              onChange={handleEmployerChange}
            >
              <option value="">All Employers</option>
              {uniqueEmployers.map((employer) => (
                <option key={employer} value={employer}>
                  {employer}
                </option>
              ))}
            </select>
          </div>

          {/* Add User Button */}
          <button
            type="button"
            data-slot="dialog-trigger"
            data-devlink-id="admin-users-add-user"
            className="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium text-white h-9 px-4 py-2 bg-purple-600 hover:bg-purple-700"
            onClick={() => setIsModalOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-plus h-4 w-4 mr-2"
              aria-hidden="true"
            >
              <path d="M5 12h14"></path>
              <path d="M12 5v14"></path>
            </svg>
            Add User
          </button>
        </div>
      </div>

      {/* Create User Modal */}
      {isModalOpen && <CreateUserModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
};

export default UserFilters;
