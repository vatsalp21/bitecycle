import { useEffect } from "react";
import ReactDOM from "react-dom";

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal-root");
  const el = document.createElement("div");

  useEffect(() => {
    modalRoot.appendChild(el);
    return () => {
      modalRoot.removeChild(el);
    };
  }, [el, modalRoot]);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full">
        {children}
        <hr />
        <ul className="mx-4 my-2">
          <li>In Stock</li>
          <li>Beware of allergens</li>
          <li className="text-red-800">Discounted Price!</li>
        </ul>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Close
          </button>
        </div>
      </div>
    </div>,
    el
  );
};

export default Modal;
