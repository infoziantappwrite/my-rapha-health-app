import { useState, useRef, useEffect } from "react";

export default function ActionDropdown({
  onRollback,
  onViewHistory,
  onRunRedTeam,
  enableRedTeam = false, // only enable for AI Prompt Governance
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Build menu dynamically
  const menuItems = [];
    menuItems.push("Approve");
  menuItems.push("Revoke");
  if (enableRedTeam) menuItems.push("Run Red Team Test");
  menuItems.push("Rollback");
  menuItems.push("View History");

  const handleClick = (item) => {
    setOpen(false);

    if (item === "Rollback" && onRollback) onRollback();
    else if (item === "View History" && onViewHistory) onViewHistory();
    else if (item === "Run Red Team Test" && onRunRedTeam) onRunRedTeam();
  };

  if (menuItems.length === 0) return null; // no menu to show

  return (
   <div className="relative" ref={dropdownRef}>
  <button
    className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
    onClick={() => setOpen(!open)}
  >
    ⋮
  </button>

  {open && (
    <div className="absolute right-0 mt-2 w-52 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-1 z-50">
      {menuItems.map((item) => (
        <button
          key={item}
          onClick={() => handleClick(item)}
          className="w-full text-left px-4 py-2 text-sm rounded hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {item}
        </button>
      ))}
    </div>
  )}
</div>

  );
}
