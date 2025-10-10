export default function RollbackPopup({ row, onClose, onConfirm }) {
  if (!row) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Rollback {row.id}</h3>
        <p>Are you sure you want to rollback this version?</p>
        <div className="mt-4 flex justify-end gap-2">
          <button onClick={onClose} className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700">
            Cancel
          </button>
          <button onClick={onConfirm} className="px-4 py-2 rounded bg-red-500 text-white">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
