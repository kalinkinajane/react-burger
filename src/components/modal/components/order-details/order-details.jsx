import React from "react";
import { useSelector } from "react-redux";

import imgDatails from "../../../../images/image.png";

import detailStyle from "./order-details.module.css";
import modalStyle from "../../modal.module.css";

const OrderDetails = () => {
  const { orderDetailRequest, orderDetail, orderDetailFailed } = useSelector(
    (store) => store.orderDetail
  );

  if (orderDetailRequest) {
    return (
      <p className="text text_type_main-medium mb-15">Заказ формируется...</p>
    );
  } else if (orderDetailFailed) {
    return (
      <p className="text text_type_main-medium mb-15">
        Произошла ошибка при формировании заказа
      </p>
    );
  } else {
    return (
      orderDetail && (
        <div className={modalStyle.contant}>
          <p
            className={`${detailStyle.count} text text_type_digits-large mb-8`}
          >
            {orderDetail.order.number}
          </p>
          <p className="text text_type_main-medium mb-15">
            идентификатор заказа
          </p>
          <img className="mt-2 mb-2" src={imgDatails} alt="" />
          <p className="text text_type_main-default mt-15 mb-2">
            Ваш заказ начали готовить
          </p>
          <p className="text text_type_main-default text_color_inactive mb-20">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      )
    );
  }
};

export default OrderDetails;
