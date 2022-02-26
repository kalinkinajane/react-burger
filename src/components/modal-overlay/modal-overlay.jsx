import overlayStyle from "./modal-overlay.module.css";

const ModalOverlay = ({ children, closeModal }) => {
  const handleClose = (e) => {
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
