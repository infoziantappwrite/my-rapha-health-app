import React, { useState } from "react";
import { Users, UserPlus, Trash2 } from "lucide-react";

const FamilyHealthHistory = () => {
  const [members, setMembers] = useState([
    { relation: "Father", condition: "Heart Attack + Quadruple Bypass", ageAtDiagnosis: 58, status: "Alive" },
    { relation: "Mother", condition: "Uterine Cancer", ageAtDiagnosis: 60, status: "Alive" },
    { relation: "Paternal Aunt", condition: "Breast Cancer", ageAtDiagnosis: 49, status: "Alive" },
  ]);

  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    relation: "",
    condition: "",
    ageAtDiagnosis: "",
    status: "Alive",
  });

  const handleAdd = () => {
    if (!form.relation || !form.condition || !form.ageAtDiagnosis) return;
    setMembers([...members, form]);
    setForm({ relation: "", condition: "", ageAtDiagnosis: "", status: "Alive" });
    setIsOpen(false);
  };

  const handleRemove = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col gap-6 rounded-2xl  bg-gray-50 border border-gray-200 dark:border-gray-700 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors">
  {/* Header */}
  <div className="px-6 pt-6">
    <h4 className="flex items-center gap-2 text-lg font-semibold text-purple-700 dark:text-purple-400">
      <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
      Family Health History
    </h4>
    <p className="text-sm text-gray-500 dark:text-gray-400">
      Helps us personalize your prevention plan
    </p>
  </div>

  {/* Members List */}
  <div className="px-6 pb-6 space-y-3">
    {members.map((member, index) => (
      <div
        key={index}
        className="p-3 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-300 dark:border-gray-700 hover:border-purple-300 hover:bg-purple-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-start justify-between mb-2">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="font-medium text-sm">{member.relation}</span>
              <span
                className={`inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 ${
                  member.status === "Alive"
                    ? "bg-green-50 text-green-700 border-green-200 dark:bg-green-900/40 dark:text-green-300 dark:border-green-700"
                    : "bg-red-50 text-red-700 border-red-200 dark:bg-red-900/40 dark:text-red-300 dark:border-red-700"
                }`}
              >
                {member.status}
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-300">
              {member.condition}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              Age at diagnosis: {member.ageAtDiagnosis}
            </div>
          </div>
          <button
            onClick={() => handleRemove(index)}
            className="inline-flex items-center justify-center rounded-md h-7 w-7 text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/30 transition"
          >
            <Trash2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    ))}

    {/* Add Member Button */}
    <button
      onClick={() => setIsOpen(true)}
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md border-dashed border-2 border-gray-300 dark:border-gray-600 hover:border-purple-400 hover:bg-purple-50 dark:hover:bg-gray-700 text-sm font-medium h-9 px-4 w-full text-purple-700 dark:text-purple-300 transition-colors"
    >
      <UserPlus className="h-4 w-4 text-purple-600 dark:text-purple-400" />
      Add Family Member
    </button>
  </div>

  {/* Popup Modal */}
  {isOpen && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg w-full max-w-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="flex items-center gap-2 text-lg font-semibold text-purple-700 dark:text-purple-300">
            <UserPlus className="h-5 w-5 text-purple-600 dark:text-purple-400" />
            Add Family Member
          </h3>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium">Relation</label>
            <input
              type="text"
              value={form.relation}
              onChange={(e) =>
                setForm({ ...form, relation: e.target.value })
              }
              placeholder="e.g., Mother, Brother, Grandmother"
              className="w-full mt-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Condition</label>
            <input
              type="text"
              value={form.condition}
              onChange={(e) =>
                setForm({ ...form, condition: e.target.value })
              }
              placeholder="e.g., Heart Disease, Cancer"
              className="w-full mt-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Age at Diagnosis</label>
            <input
              type="number"
              value={form.ageAtDiagnosis}
              onChange={(e) =>
                setForm({ ...form, ageAtDiagnosis: e.target.value })
              }
              placeholder="e.g., 55"
              className="w-full mt-1 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div>
            <label className="text-sm font-medium">Status</label>
            <div className="flex gap-3 mt-1">
              {["Alive", "Deceased"].map((status) => (
                <button
                  key={status}
                  onClick={() => setForm({ ...form, status })}
                  className={`flex-1 px-3 py-2 text-sm rounded-md border ${
                    form.status === status
                      ? "bg-purple-600 text-white border-purple-700"
                      : "bg-gray-50 dark:bg-gray-900 border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 mt-6">
          <button
            onClick={() => setIsOpen(false)}
            className="border border-gray-300 dark:border-gray-600 rounded-md px-4 py-2 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            className="bg-purple-600 text-white rounded-md px-4 py-2 text-sm hover:bg-purple-700"
          >
            <UserPlus className="h-4 w-4 inline mr-1" />
            Add Member
          </button>
        </div>
      </div>
    </div>
  )}
</div>

  );
};

export default FamilyHealthHistory;
