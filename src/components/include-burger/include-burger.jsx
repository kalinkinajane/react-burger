import React from "react";
import burgerStyle from "./include-burger.module.css";
import IngredientItem from "../ingredient-item/ingredient-item";

const IncludeBurger = ({ ingredients, onCardClick }) => {
  return (
    <div className={`${burgerStyle.items} pl-4`}>
      {ingredients &&
        ingredients.map((item, index) => (
          <IngredientItem
            key={index}
            ingredient={item}
            onCardClick={onCardClick}
          />
        ))}
    </div>
  );
};
export default IncludeBurger;
