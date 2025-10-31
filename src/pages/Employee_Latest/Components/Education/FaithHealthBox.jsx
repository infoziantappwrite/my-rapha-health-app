import React from "react";

const FaithHealthBox = () => {
  return (
    <div className="rounded-2xl bg-purple-100 text-purple-900 p-6 dark:bg-purple-900 dark:text-purple-200 shadow-sm">
      <h3 className="font-semibold text-lg mb-2">Faith & Health</h3>
      <p className="text-sm italic mb-3">
        “Understanding truth brings peace. Prevention is not fear — it’s stewardship.”
      </p>
      <p className="text-sm mb-2">
        Prevention is stewardship — taking care of what God has given you. Each lesson you complete is an act of wisdom and faith.
      </p>
      <ul className="text-sm space-y-1 mt-3">
        <li>📘 <strong>Knowledge is Power:</strong> Education replaces fear with clarity.</li>
        <li>🌱 <strong>Your Progress Matters:</strong> Every module brings you closer to lifelong health.</li>
      </ul>
    </div>
  );
};

export default FaithHealthBox;
