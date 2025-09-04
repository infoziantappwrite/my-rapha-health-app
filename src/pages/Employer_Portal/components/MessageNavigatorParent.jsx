import React, { useState } from "react";
import { MessageSquare } from "lucide-react";
import MessageNavigatorModal from "./MessageNavigatorModal";

const MessageNavigatorParent = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Button to open modal */}
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-md px-4 py-2 text-sm"
      >
        <MessageSquare className="h-4 w-4" />
        Message Navigator
      </button>

      {/* Modal */}
      <MessageNavigatorModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};

export default MessageNavigatorParent;
