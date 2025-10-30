import { useState } from "react";
import { Check } from "lucide-react";

export default function StepHeart({ data, setData }) {
  const [hasHeartHistory, setHasHeartHistory] = useState(data.hasHeartHistory ?? "");
  const [firstEventAge, setFirstEventAge] = useState(data.firstEventAge ?? "");
  const [suddenDeath, setSuddenDeath] = useState(data.suddenDeath ?? false);

  const handleRadio = (val) => {
    setHasHeartHistory(val);
    setData({ ...data, hasHeartHistory: val });
    console.log("❤️ Heart history:", val);
  };

  const handleAge = (e) => {
    const val = e.target.value;
    setFirstEventAge(val);
    setData({ ...data, firstEventAge: val });
    console.log("🕒 Age at first cardiac event:", val);
  };

  const toggleSudden = () => {
    const newVal = !suddenDeath;
    setSuddenDeath(newVal);
    setData({ ...data, suddenDeath: newVal });
    console.log("⚡ Sudden death before 60:", newVal);
  };

  return (
    <div className="space-y-6">
      {/* Info banner */}
      <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
        <div className="flex items-center space-x-2 mb-2">
          
          <h3 className="font-medium text-gray-900 dark:text-gray-100">
            Heart Disease History
          </h3>
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Family history of heart conditions can indicate increased cardiovascular risk.
        </p>
      </div>

      {/* Radio group */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-gray-800 dark:text-gray-200">
          Has any relative had heart-related conditions?
        </label>
        <div className="flex flex-col gap-2">
          {[
            {
              value: "yes",
              label: "Yes – heart attack, bypass surgery, or stent",
            },
            { value: "no", label: "No known history" },
          ].map((opt) => (
            <div key={opt.value} className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => handleRadio(opt.value)}
                className={`w-4 h-4 rounded-full border flex items-center justify-center transition-all ${
                  hasHeartHistory === opt.value
                    ? "bg-purple-600 border-purple-600"
                    : "border-gray-400 dark:border-gray-600"
                }`}
              >
                {hasHeartHistory === opt.value && (
                  <div className="w-2 h-2 bg-white rounded-full" />
                )}
              </button>
              <span className="text-sm text-gray-800 dark:text-gray-200">
                {opt.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Age input */}
      <div className="space-y-2">
        <label
          htmlFor="heart-age"
          className="block text-sm font-medium text-gray-800 dark:text-gray-200"
        >
          Age at first cardiac event?
        </label>
        <input
          id="heart-age"
          type="number"
          placeholder="e.g., 58"
          value={firstEventAge}
          onChange={handleAge}
          className="w-full rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-sm px-3 py-2 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-purple-500 outline-none"
        />
      </div>

      {/* Checkbox */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggleSudden}
          className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
            suddenDeath
              ? "bg-purple-600 border-purple-600 text-white"
              : "border-gray-400 dark:border-gray-600"
          }`}
        >
          {suddenDeath && <Check className="w-3 h-3" />}
        </button>
        <label
          onClick={toggleSudden}
          className="text-sm cursor-pointer text-gray-800 dark:text-gray-200"
        >
          Any relative died suddenly or before age 60 from heart causes
        </label>
      </div>
    </div>
  );
}
