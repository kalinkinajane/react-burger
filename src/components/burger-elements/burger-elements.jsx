import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { ingredientsPropTypes } from "../../utils/types";

import elementsStyle from "./burger-elements.module.css";

const BurgerElements = ({ elements }) => {
  return (
    <div className={`${elementsStyle.elements} mt-4 mb-4`}>
      {elements &&
        elements.map((item) => (
          <div className={`${elementsStyle.element} mb-4`} key={item._id}>
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

BurgerElements.propTypes = {
  elements: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
};

export default BurgerElements;
