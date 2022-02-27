import PropTypes from "prop-types";
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

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ModalOverlay;


