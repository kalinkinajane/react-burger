import React from "react";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import elementsStyle from "./burger-elements.module.css";

const BurgerElements = ({ elements }) => {
  return (
    <div className={`${elementsStyle.elements} mt-4 mb-4`}>
      {elements &&
        elements.map((item, index) => (
          <div className={`${elementsStyle.element} mb-4`} key={index}>
            <DragIcon type="primary" />
            <ConstructorElement
              text={item.name}
              price={item.price}
              thumbnail={item.image_large}
            />
          </div>
        ))}
    </div>
  );
};
export default BurgerElements;
