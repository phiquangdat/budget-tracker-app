import { createPortal } from "react-dom";

export default function Confirmation({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;
  return createPortal(
    <dialog open className="confirmation-dialog">
      <p>Are you sure you want to delete this item?</p>
      <div className="confirmation-buttons">
        <button onClick={onConfirm}>Yes</button>
        <button onClick={onCancel}>No</button>
      </div>
    </dialog>,
    document.getElementById("confirmation")
  );
}
