import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

import Ingredient from "./ingredient";
import { updateIngredients } from "../../../services/actions/ingredients-constructor";

import { TIngredient } from "../../../utils/type";

import elementsStyle from "./burger-elements.module.css";

type TBurgerElementsProps = {
  ingredients: Array<TIngredient>
}

const BurgerElements = ({ ingredients }: TBurgerElementsProps) => {
  const dispatch = useDispatch();

  const moveCard = useCallback(
    (dragIndex: number, hoverIndex: number) => {
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
        ingredients.map((item: TIngredient, index: number) => (
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

export default BurgerElements;
