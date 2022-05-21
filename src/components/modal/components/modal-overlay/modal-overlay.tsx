import React, { FC, SyntheticEvent } from "react";

import overlayStyle from "./modal-overlay.module.css";

type TModalOverlayProps ={
  closeModal: ()=> void;
}

const ModalOverlay: FC<TModalOverlayProps> = ({ children, closeModal }) => {
  const handleClose = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <div className={overlayStyle.overlay} onClick={handleClose}>
      {children}
    </div>
  );
};


export default ModalOverlay;


