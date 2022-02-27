import PropTypes from "prop-types";
import { ingredientsPropTypes } from "../../utils/types";
import burgerStyle from "./include-burger.module.css";
import IngredientItem from "../ingredient-item/ingredient-item";

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
export default IncludeBurger;

IncludeBurger.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
  onCardClick: PropTypes.func.isRequired,
};