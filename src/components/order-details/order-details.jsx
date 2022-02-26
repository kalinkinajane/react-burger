import Modal from "../modal/modal";
import detailStyle from "./order-details.module.css";
import imgDatails from "../../images/image.png";

const OrderDetails = ({ isOpen, closeModal }) => {
  return (
    <Modal title="" isOpen={isOpen} closeModal={closeModal} >
      <p className={`${detailStyle.count} text text_type_digits-large mb-8`}>
        034536
      </p>
      <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
      <img className="mt-2 mb-2" src={imgDatails} alt="" />
      <p className="text text_type_main-default mt-15 mb-2">
        Ваш заказ начали готовить
      </p>
      <p className="text text_type_main-default text_color_inactive mb-20">
        Дождитесь готовности на орбитальной станции
      </p>
    </Modal>
  );
};
export default OrderDetails;
