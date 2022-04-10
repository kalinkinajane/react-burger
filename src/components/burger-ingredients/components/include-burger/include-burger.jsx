import PropTypes from "prop-types";

import { ingredientsPropTypes } from "../../../../utils/types";

import IngredientItem from "../ingredient-item/ingredient-item";

import burgerStyle from "./include-burger.module.css";

const IncludeBurger = ({ ingredients, onCardClick }) => {
  return (
    <div className={`${burgerStyle.items} pl-4`}>
      {ingredients &&
        ingredients.map((item) => (
          <IngredientItem
            key={item._id}
            ingredient={item}
            onCardClick={onCardClick}
          />
        ))}
    </div>
  );
};

IncludeBurger.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default IncludeBurger;
