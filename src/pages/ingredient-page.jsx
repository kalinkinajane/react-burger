import React from "react";
import { useSelector } from "react-redux";

import IngredientDetails from "../components/ingredient-details/ingredient-details";

export const IngredientPage = () => {
    const ingredient = useSelector(
        (store) => store.ingredientDetail.viewIngredient
      );
    return (
        <IngredientDetails ingredient={ingredient}/>
    )
};
