import overlayStyle from "./modal-overlay.module.css";

const ModalOverlay = ({ children}) => {

  return <div className={overlayStyle.overlay} >{children}</div>;
};
export default ModalOverlay;
