import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import MessageNavigatorModal from "./components/MessageNavigatorModal";

const MessageNavigatorParent = () => {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
    // Navigate to dashboard after modal closes
    navigate("/employer");
  };

  return (
    <div className="p-6">
      <MessageNavigatorModal open={open} onClose={handleClose} />
    </div>
  );
};

export default MessageNavigatorParent;
