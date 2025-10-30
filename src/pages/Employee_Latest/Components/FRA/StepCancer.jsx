import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";

export default function StepCancer({ data, setData }) {
  const [selectedCancers, setSelectedCancers] = useState(data.cancerTypes || []);
  const [earliestAge, setEarliestAge] = useState(data.earliestAge || "");
  const [multipleRelatives, setMultipleRelatives] = useState(data.multipleRelatives || false);

  const toggleCancer = (type) => {
    const updated =
      selectedCancers.includes(type)
        ? selectedCancers.filter((t) => t !== type)
        : [...selectedCancers, type];
    setSelectedCancers(updated);
    setData({ ...data, cancerTypes: updated });
    console.log("✅ Cancer types:", updated);
  };

  const handleAgeChange = (e) => {
    const val = e.target.value;
    setEarliestAge(val);
    setData({ ...data, earliestAge: val });
  };

  const toggleMultiple = () => {
    const updated = !multipleRelatives;
    setMultipleRelatives(updated);
    setData({ ...data, multipleRelatives: updated });
    console.log("🧬 Multiple relatives:", updated);
  };

  return (
    <div className="space-y-4">
      <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <h3 className="font-medium mb-1 text-gray-900 dark:text-gray-100">
          Family Cancer History
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Understanding your family's cancer history helps us identify your risks early.
        </p>
      </div>

      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
          Has any first-degree relative (parent, sibling, child) had cancer?
        </label>
        <div className="space-y-2">
          {["Breast Cancer", "Colon Cancer", "Prostate Cancer"].map((type) => {
            const checked = selectedCancers.includes(type);
            return (
              <div key={type} className="flex items-center space-x-2">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked={checked}
                  onClick={() => toggleCancer(type)}
                  className={`size-4 rounded border shadow-xs transition-all flex items-center justify-center ${
                    checked
                      ? "bg-purple-600 text-white border-purple-600"
                      : "bg-transparent dark:bg-gray-800 border-gray-400 dark:border-gray-600"
                  }`}
                >
                  {checked && <Check className="size-3.5" />}
                </button>
                <label className="text-sm cursor-pointer text-gray-800 dark:text-gray-200">
                  {type}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
          At what age was the earliest diagnosis in your family?
        </label>
        <select
          value={earliestAge}
          onChange={handleAgeChange}
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select age range</option>
          <option value="<40">Before 40</option>
          <option value="40-60">40–60</option>
          <option value=">60">After 60</option>
        </select>
      </div>

      <div className="flex items-center space-x-2">
        <button
          type="button"
          role="checkbox"
          aria-checked={multipleRelatives}
          onClick={toggleMultiple}
          className={`size-4 rounded border shadow-xs transition-all flex items-center justify-center ${
            multipleRelatives
              ? "bg-purple-600 text-white border-purple-600"
              : "bg-transparent dark:bg-gray-800 border-gray-400 dark:border-gray-600"
          }`}
        >
          {multipleRelatives && <Check className="size-3.5" />}
        </button>
        <label className="text-sm cursor-pointer text-gray-800 dark:text-gray-200">
          Multiple relatives had the same cancer type
        </label>
      </div>
    </div>
  );
}
