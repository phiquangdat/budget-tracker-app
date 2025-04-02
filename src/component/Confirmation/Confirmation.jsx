import { createPortal } from "react-dom";

export default function Confirmation({ handleDelete }) {
  return createPortal(
    <dialog>
      <p>Are you sure you want to delete this item?</p>
      <form open method="dialog">
        <button onClick={() => handleDelete}>Yes</button>
      </form>
    </dialog>,
    document.getElementById("confirmation")
  );
}
