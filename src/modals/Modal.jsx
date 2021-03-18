import "../assets/styles/Modal.scss";

import React from "react";

const Modal = ({ show, onClose, children }) => {
  const onCloseModal = (e) => {
    onClose && onClose(false);
  };
  return show ? (
    <div className="modal" id="modal">
      <h2>Mensaje de <span>Proyecta</span></h2>
      <div className="content"> {children}</div>
      <div className="actions">
        <button className="toggle-button" onClick={onCloseModal}>
          CERRAR
        </button>
      </div>
    </div>
  ) : null;
};

export default Modal;
