import { useState } from "react";
import { Printer, CircleCheckBig, SquarePen, MessageCircle, Truck } from "lucide-react";
import ChatSidebar from "../ChatSidebar";
import NotificationToast from "../../../components/NotificationToast";

const ActionButtons = ({ emp }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isNoteOpen, setIsNoteOpen] = useState(false);
  const [note, setNote] = useState("");
  const [toast, setToast] = useState(null); // { title, content }

  const showToast = (title, content) => {
    setToast({ title, content });
  };

  const handleSaveNote = () => {
    showToast("Note Saved", note);
    setIsNoteOpen(false);
    setNote("");
  };

  return (
    <>
      {/* Action Buttons */}
      <div className="flex flex-wrap gap-2">
        {emp.status === "pending label" && (
          <button
            className="btn-action border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => showToast("Label Printed", `${emp.name}'s label has been printed`)}
          >
            <Printer className="h-4 w-4 mr-1" /> Print Label
          </button>
        )}

        {emp.status === "ready to-ship" && (
          <button
            className="btn-action border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            onClick={() => showToast("Shipped", `${emp.name}'s sample is ready to ship`)}
          >
            <Truck className="h-4 w-4 mr-1" /> Ship
          </button>
        )}

        <button
          className="btn-action border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => showToast("Follow-Up", `${emp.name}'s follow-up marked as resolved`)}
        >
          <CircleCheckBig className="h-4 w-4 mr-1" /> Mark Follow-Up Resolved
        </button>

        <button
          className="btn-action border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setIsNoteOpen(true)}
        >
          <SquarePen className="h-4 w-4 mr-1" /> Add Note
        </button>

        <button
          className="btn-action border border-gray-300 dark:border-gray-600 rounded-md px-3 py-1 flex items-center hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setIsChatOpen(true)}
        >
          <MessageCircle className="h-4 w-4 mr-1" /> Chat
        </button>
      </div>

      {/* Chat Sidebar */}
      <ChatSidebar isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* Add Note Modal */}
      {isNoteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-background rounded-lg p-6 shadow-lg w-[90%] max-w-md relative bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700">
            <button
              onClick={() => setIsNoteOpen(false)}
              className="absolute top-4 right-4 p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h2 className="text-lg font-semibold mb-2">Sample Details</h2>
            <p className="text-sm text-gray-500 mb-4">
              {emp.name} - {emp.modality}
            </p>

            <label className="block text-sm font-medium mb-1">Add Note</label>
            <textarea
              className="w-full border border-gray-300 dark:border-gray-600 rounded-md px-3 py-2 mb-4 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
              rows={4}
              placeholder="Enter sample handling notes..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>

            <div className="flex justify-end gap-2">
              <button
                onClick={handleSaveNote}
                className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
              >
                Save Note
              </button>
              <button
                onClick={() => setIsNoteOpen(false)}
                className="px-4 py-2 rounded-md border hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Notification Toast */}
      {toast && (
        <NotificationToast
          title={toast.title}
          content={toast.content}
          onClose={() => setToast(null)}
        />
      )}
    </>
  );
};

export default ActionButtons;
