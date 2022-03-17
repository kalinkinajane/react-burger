import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";

import Modal from "../modal/modal";
import imgDatails from "../../images/image.png";

import { OrderDetailsContext } from "../../contexts/burgerConstructorContext";

import detailStyle from "./order-details.module.css";

const OrderDetails = (props) => {
  const { orderDetails } = useContext(OrderDetailsContext);

  if (!orderDetails) return null;
  return (
    <Modal {...props}>
      <p className={`${detailStyle.count} text text_type_digits-large mb-8`}>
        {orderDetails.order.number}
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

OrderDetails.propTypes = {
  title: PropTypes.string,
  isOpen: PropTypes.bool,
  closeModal: PropTypes.func.isRequired,
};

export default OrderDetails;
