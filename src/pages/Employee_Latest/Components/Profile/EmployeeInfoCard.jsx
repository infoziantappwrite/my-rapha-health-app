import React, { useState } from "react";
import { User, SquarePen, Save } from "lucide-react";

const EmployeeInfoCard = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    name: "Richard Kellner",
    employeeId: "RPH-1045",
    age: "57",
    gender: "Male",
    role: "Operations Director",
    company: "FaithWorks Industries",
    location: "St. Louis, MO",
    email: "richard.kellner@faithworks.com",
    phone: "(314) 555-0912",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log("Saved Data:", form);
    setOpen(false);
  };

  return (
    <div className="bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-gray-900 dark:text-white rounded-2xl p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h4 className="flex items-center gap-2 text-lg font-semibold text-purple-700 dark:text-purple-400">
          <User className="h-5 w-5" />
          Personal Information
        </h4>
        <button
          onClick={() => setOpen(true)}
          className="inline-flex items-center gap-1.5 text-sm text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-800/30 rounded-md px-3 py-1 transition"
        >
          <SquarePen className="h-4 w-4" />
        </button>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm">
        <InfoRow label="Name" value={form.name} />
        <InfoRow label="Employee ID" value={form.employeeId} />
        <InfoRow label="Age" value={form.age} />
        <InfoRow label="Gender" value={form.gender} />
        <InfoRow label="Role" value={form.role} />
        <InfoRow label="Company" value={form.company} />
        <InfoRow label="Location" value={form.location} />
        <InfoRow label="Contact Email" value={form.email} />
        <InfoRow label="Contact Phone" value={form.phone} full />
      </div>

      {/* Edit Modal */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg">
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2 text-purple-700 dark:text-purple-300">
              <User className="h-5 w-5" /> Edit Personal Information
            </h3>

            <div className="grid grid-cols-2 gap-4 mb-4">
              {Object.keys(form).map((key) => (
                <div key={key} className={key === "phone" ? "col-span-2" : ""}>
                  <label className="block text-sm text-gray-600 dark:text-gray-300 mb-1 capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    name={key}
                    value={form[key]}
                    onChange={handleChange}
                    disabled={key === "employeeId"}
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md text-sm bg-gray-50 dark:bg-gray-900 dark:border-gray-700 ${
                      key === "employeeId" ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:underline"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm rounded-md transition"
              >
                <Save className="h-4 w-4" /> Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Small reusable component for displaying a single info row
const InfoRow = ({ label, value, full }) => (
  <div className={`flex justify-between ${full ? "col-span-2" : ""}`}>
    <span className="text-gray-500 dark:text-gray-400">{label}:</span>
    <span className="font-medium">{value}</span>
  </div>
);

export default EmployeeInfoCard;
