import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import ReactDOM from "react-dom";
import modalStyle from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";

const Modal = ({ title, children, isOpen, closeModal }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <ModalOverlay>
      <div className={`${modalStyle.modal} pt-10 pl-10 pr-10 pb-15`}>
        <div className={modalStyle.container}>
          <h2 className="text text_type_main-large">{title}</h2>
          <button className={modalStyle.button} onClick={closeModal}>
            <CloseIcon type="primary" />
          </button>
        </div>
        <div className={modalStyle.contant}>{children}</div>
      </div>
    </ModalOverlay>,
    document.getElementById("react-modals")
  );
};
export default Modal;
