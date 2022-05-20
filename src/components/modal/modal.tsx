import React, { useEffect, FC } from "react";
import ReactDOM from "react-dom";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

import ModalOverlay from "./components/modal-overlay/modal-overlay";

import modalStyle from "./modal.module.css";

type TModalProps ={
  title?: string;
  closeModal: ()=> void;
}
type TEvent ={
  keyCode: number;
}
const PortalModal = document.getElementById("react-modals")

const Modal: FC<TModalProps> = ({ title = "", children, closeModal }) => {
  function handleESCclose(evt : TEvent) {
    if (evt.keyCode === 27) {
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

  return PortalModal && ReactDOM.createPortal(
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
    PortalModal
  );
};

export default Modal;
