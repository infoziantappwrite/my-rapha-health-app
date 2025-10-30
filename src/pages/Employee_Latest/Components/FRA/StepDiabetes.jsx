import React from "react";

export default function StepDiabetes({ data, setData }) {
  const handleChange = (field, value) => {
    setData({ ...data, diabetes: { ...data.diabetes, [field]: value } });
  };

  return (
    <div className="space-y-6">
      <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
          Diabetes History
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Help us understand if anyone in your family has had diabetes or
          related metabolic conditions.
        </p>
      </div>

      <div className="space-y-4">
        {/* Family History */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
            Any family history of Diabetes?
          </label>
          <select
            value={data.diabetes?.familyHistory || ""}
            onChange={(e) => handleChange("familyHistory", e.target.value)}
            className="w-full border rounded-md p-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
          >
            <option value="">Select</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            <option value="unsure">Not Sure</option>
          </select>
        </div>

        {/* Type of Diabetes */}
        {data.diabetes?.familyHistory === "yes" && (
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
              Type of Diabetes in Family
            </label>
            <select
              value={data.diabetes?.type || ""}
              onChange={(e) => handleChange("type", e.target.value)}
              className="w-full border rounded-md p-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
            >
              <option value="">Select</option>
              <option value="type1">Type 1 Diabetes</option>
              <option value="type2">Type 2 Diabetes</option>
              <option value="gestational">Gestational Diabetes</option>
              <option value="other">Other / Not Sure</option>
            </select>
          </div>
        )}

        {/* Age of Diagnosis */}
        {data.diabetes?.familyHistory === "yes" && (
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
              Average Age of Diagnosis (approx.)
            </label>
            <input
              type="number"
              min="1"
              max="100"
              value={data.diabetes?.diagnosisAge || ""}
              onChange={(e) => handleChange("diagnosisAge", e.target.value)}
              placeholder="e.g., 45"
              className="w-full border rounded-md p-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
            />
          </div>
        )}

        {/* Lifestyle Concerns */}
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-800 dark:text-gray-200">
            Do you or your family members have lifestyle concerns (e.g., obesity, inactivity)?
          </label>
          <textarea
            rows="3"
            value={data.diabetes?.lifestyleConcerns || ""}
            onChange={(e) => handleChange("lifestyleConcerns", e.target.value)}
            placeholder="Describe any relevant lifestyle factors"
            className="w-full border rounded-md p-2 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
