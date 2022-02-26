import React from "react";
import burgerStyle from "./include-burger.module.css";
import IngredientItem from "../ingredient-item/ingredient-item";


const IncludeBurger = ({ ingredients }) => {
  return (
    <div className={`${burgerStyle.items} pl-4`}>
      {ingredients &&
        ingredients.map((item, index) => (
          <IngredientItem key={index} ingredient={item} />
        ))}
    </div>
  );
};
export default IncludeBurger;
