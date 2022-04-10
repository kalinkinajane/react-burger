import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import Ingredient from "./ingredient";
import { updateIngredients } from "../../../services/actions/ingredients-constructor";
import { ingredientsPropTypes } from "../../../utils/types";

import elementsStyle from "./burger-elements.module.css";


const BurgerElements = ({ ingredients }) => {
  const dispatch = useDispatch();

  const moveCard = useCallback(
    (dragIndex, hoverIndex) => {
      const dragCard = ingredients[dragIndex];
      const newCards = [...ingredients];

      newCards.splice(dragIndex, 1);
      newCards.splice(hoverIndex, 0, dragCard);

      dispatch(updateIngredients(newCards));
    },
    [ingredients, dispatch]
  );

  return (
    <div className={`${elementsStyle.elements} mt-4 mb-4`}>
      {ingredients &&
        ingredients.map((item, index) => (
          <Ingredient
            key={item.itemId}
            item={item}
            index={index}
            moveCard={moveCard}
          />
        ))}
    </div>
  );
};

BurgerElements.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
};

export default BurgerElements;
