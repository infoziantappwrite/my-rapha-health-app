import React, { useState, useMemo } from 'react';
import UserFilters from './UserFilters';
import UserTable from './UserTable';
import CreateUserModal from './CreateUserModal';
import userData from './users.json'; // your main user data

export default function UsersManagement() {
  const [filters, setFilters] = useState({ search: '', role: '', employer: '', showCreateUser: false });

  const uniqueRoles = useMemo(() => [...new Set(userData.map(u => u.role))], []);
  const uniqueEmployers = useMemo(() => [...new Set(userData.map(u => u.employer))], []);

  const filteredUsers = useMemo(() => {
    return userData.filter(user =>
      user.name.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.role ? user.role === filters.role : true) &&
      (filters.employer ? user.employer === filters.employer : true)
    );
  }, [filters]);

  const handleCreateUser = (newUser) => {
    userData.push(newUser); // for demo, ideally use state
  };

  return (
    <div >
      <UserFilters filters={filters} setFilters={setFilters} uniqueRoles={uniqueRoles} uniqueEmployers={uniqueEmployers} />
      <UserTable users={filteredUsers} />

    </div>
  );
}
