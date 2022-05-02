import React from "react";

import IngredientDetails from "../components/ingredient-details/ingredient-details";

export const IngredientPage = () => {

  return (
    <div>
      <h2 className="text text_type_main-large mt-30">Детали ингредиента</h2>
      <IngredientDetails  />
    </div>
  );
};
