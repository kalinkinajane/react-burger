import PropTypes from "prop-types";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { ingredientItemPropTypes } from "../../utils/types";

import ingredientStyle from "./ingredient-item.module.css";


const IngredientItem = ({ ingredient, onCardClick }) => {
  const { image, name, price } = ingredient;
 
  const handleClick = () => { 
    onCardClick(ingredient);
  };

  return (
    <div className={ingredientStyle.item} onClick={handleClick}>
      <Counter count={1} size="default" />
      <img
        className={`${ingredientStyle.image} ml-4 mr-4`}
        src={image}
        alt={name}
      ></img>
      <div className={`${ingredientStyle.counter} mt-1 mb-1`}>
        <p className="text text_type_digits-default mr-2">{price}</p>
        <CurrencyIcon type="primary" />
      </div>
      <p className="text text_type_main-default">{name}</p>
    </div>
  );
};

IngredientItem.propTypes = {
  ingredient: ingredientItemPropTypes.isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default IngredientItem;
