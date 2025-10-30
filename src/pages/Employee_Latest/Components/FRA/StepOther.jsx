import React, { useState } from "react";

export default function StepOther({ data, setData }) {
  const [condition, setCondition] = useState("");
  const [familyMembers, setFamilyMembers] = useState([]);

  const handleAddCondition = () => {
    if (!condition.trim()) return;
    const updated = [...(data.other?.conditions || []), condition.trim()];
    setData({ ...data, other: { ...data.other, conditions: updated } });
    setCondition("");
  };

  const handleAddMember = (member) => {
    const updated = [...(data.other?.members || []), member];
    setData({ ...data, other: { ...data.other, members: updated } });
  };

  const [memberForm, setMemberForm] = useState({
    relation: "",
    condition: "",
    age: "",
    status: "Alive",
  });

  const handleMemberChange = (field, value) => {
    setMemberForm({ ...memberForm, [field]: value });
  };

  const handleAddMemberClick = () => {
    if (!memberForm.relation || !memberForm.condition) return;
    handleAddMember(memberForm);
    setMemberForm({ relation: "", condition: "", age: "", status: "Alive" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Other Familial Conditions
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Add any other hereditary conditions not covered in previous steps.
        </p>
      </div>

      {/* Add condition */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
          Add other familial conditions
        </label>
        <div className="flex gap-2">
          <input
            type="text"
            value={condition}
            onChange={(e) => setCondition(e.target.value)}
            placeholder="e.g., Parkinson’s – Maternal Uncle"
            className="flex-1 border rounded-md p-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
          />
          <button
            onClick={handleAddCondition}
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 border rounded-md"
          >
            +
          </button>
        </div>

        {data.other?.conditions?.length > 0 && (
          <ul className="list-disc ml-5 text-sm text-gray-700 dark:text-gray-300">
            {data.other.conditions.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Divider */}
      <hr className="border-gray-200 dark:border-gray-700" />

      {/* Add specific family member */}
      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">
          Or add a specific family member with their condition:
        </h3>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
              Relation
            </label>
            <input
              type="text"
              value={memberForm.relation}
              onChange={(e) => handleMemberChange("relation", e.target.value)}
              placeholder="e.g., Mother"
              className="w-full border rounded-md p-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
              Condition
            </label>
            <input
              type="text"
              value={memberForm.condition}
              onChange={(e) => handleMemberChange("condition", e.target.value)}
              placeholder="e.g., Alzheimer’s"
              className="w-full border rounded-md p-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
              Age at Diagnosis
            </label>
            <input
              type="number"
              value={memberForm.age}
              onChange={(e) => handleMemberChange("age", e.target.value)}
              placeholder="e.g., 65"
              className="w-full border rounded-md p-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-700 dark:text-gray-300">
              Status
            </label>
            <select
              value={memberForm.status}
              onChange={(e) => handleMemberChange("status", e.target.value)}
              className="w-full border rounded-md p-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
            >
              <option value="Alive">Alive</option>
              <option value="Deceased">Deceased</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleAddMemberClick}
          disabled={!memberForm.relation || !memberForm.condition}
          className="w-full mt-2 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md text-sm font-medium transition"
        >
          + Add Family Member
        </button>
      </div>

      {/* List added members */}
      {data.other?.members?.length > 0 && (
        <div className="pt-4 space-y-2">
          <h4 className="font-medium text-gray-800 dark:text-gray-200">
            Added Members
          </h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
            {data.other.members.map((m, i) => (
              <li key={i}>
                {m.relation} – {m.condition} ({m.status})
                {m.age && `, Diagnosed at ${m.age}`}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
