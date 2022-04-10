import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "./components/modal-overlay/modal-overlay";

import modalStyle from "./modal.module.css";

const Modal = ({ title = '', children, isOpen, closeModal }) => {
  function handleESCclose(evt) {
    if (evt.key === "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleESCclose);
    return () => {
      document.removeEventListener("keydown", handleESCclose);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isOpen) return null;
  
  return ReactDOM.createPortal(
    <ModalOverlay closeModal={closeModal}>
      <div className={`${modalStyle.modal} pt-10 pl-10 pr-10 pb-15`}>
        <div className={modalStyle.container}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button className={modalStyle.button} onClick={closeModal}>
            <CloseIcon type="primary" />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </ModalOverlay>,
    document.getElementById("react-modals")
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func,
};

export default Modal;
