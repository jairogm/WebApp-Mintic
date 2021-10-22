import React from "react";
import "./Popup.css"
const PopUp = ({ closeModal, isOpen }) => {
  const handleModalDialogClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`modal-back ${isOpen && "modal-open"}`} onClick={closeModal}>
      <div className="modal__dialog" onClick={handleModalDialogClick}>
        <div className="titleCloseBtn">
          <button onClick={closeModal}>X</button>
        </div>
        <div className="modal-content">
            <p>lorem*2
            </p>
        </div>
      </div>
    </div>
  );
};

export default PopUp;

// Handle buton if Input is Empty
