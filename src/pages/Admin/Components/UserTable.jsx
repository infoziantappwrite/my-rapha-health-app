import React ,{useState} from "react";

export default function UserTable({ users }) {
  const [openDropdownId, setOpenDropdownId] = useState(null);
  
  const getRoleBadgeClasses = (role) => {
    switch (role) {
      case "EMPLOYEE":
        return "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900 dark:text-blue-200 dark:border-blue-700";
      case "PROVIDER":
        return "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:border-purple-700";
      case "NAVIGATOR":
        return "bg-green-50 text-green-700 border-green-200 dark:bg-green-900 dark:text-green-200 dark:border-green-700";
      case "EMPLOYER ADMIN":
        return "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-900 dark:text-orange-200 dark:border-orange-700";
      case "EMPLOYER VIEWER":
        return "bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:border-gray-700";
      default:
        return "bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200";
    }
  };
  

  const getStatusBadgeClasses = (status) =>
    status === "Active"
      ? "bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200"
      : "bg-red-50 text-red-700 dark:bg-red-900 dark:text-red-200";



  const handleAction = (userId, action) => {
    
    console.log(`Action: ${action}, UserId: ${userId}`);
    setOpenDropdownId(null);
  };

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 shadow ">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="p-2 text-left">Name</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left">Role</th>
            <th className="p-2 text-left">Employer</th>
            <th className="p-2 text-left">Status</th>
            <th className="p-2 text-left">Last Login</th>
            <th className="p-2 w-12"></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr
              key={idx}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 border-b border-gray-200 dark:border-gray-700"
            >
              <td className="p-2 truncate">{user.name}</td>
              <td className="p-2 truncate">{user.email}</td>
              <td className="p-2">
                <span
                  className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium ${getRoleBadgeClasses(
                    user.role
                  )}`}
                >
                  {user.role}
                </span>
              </td>
              <td className="p-2 truncate">{user.employer}</td>
              <td className="p-2">
                <span
                  className={`inline-flex items-center justify-center rounded-md px-2 py-0.5 text-xs font-medium ${getStatusBadgeClasses(
                    user.status
                  )}`}
                >
                  {user.status}
                </span>
              </td>
              <td className="p-2">{user.lastLogin}</td>
               <td className="p-2 relative">
                {/* 3-dots action button */}
                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenDropdownId(
                        openDropdownId === user.id ? null : user.id
                      )
                    }
                    className="inline-flex items-center justify-center rounded-md p-1 text-gray-500 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    type="button"
                    aria-haspopup="menu"
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
                      className="h-4 w-4"
                    >
                      <circle cx="12" cy="12" r="1"></circle>
                      <circle cx="19" cy="12" r="1"></circle>
                      <circle cx="5" cy="12" r="1"></circle>
                    </svg>
                  </button>

                  {/* Dropdown menu */}
                  {openDropdownId === user.id && (
                    <div className="absolute right-0 mt-1 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-md rounded-md z-50">
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                        onClick={() => handleAction(user.id, "Suspend")}
                        data-devlink-id={`admin-users-suspend-${user.id}`}
                      >
                        Suspend
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                        onClick={() => handleAction(user.id, "Reactivate")}
                        data-devlink-id={`admin-users-reactivate-${user.id}`}
                      >
                        Reactivate
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                        onClick={() => handleAction(user.id, "Reset MFA")}
                        data-devlink-id={`admin-users-reset-mfa-${user.id}`}
                      >
                        Reset MFA
                      </button>
                      <button
                        className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
                        onClick={() => handleAction(user.id, "Assign Role")}
                        data-devlink-id={`admin-users-assign-role-${user.id}`}
                      >
                        Assign Role
                      </button>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
