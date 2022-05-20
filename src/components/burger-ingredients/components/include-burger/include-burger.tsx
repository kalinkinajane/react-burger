import { TIngredient } from "../../../../utils/type";

import IngredientItem from "../ingredient-item/ingredient-item";

import burgerStyle from "./include-burger.module.css";

type TIncludeBurgerProps={
  ingredients: Array<TIngredient>
  onCardClick: (ingredient: TIngredient )=> void;
}

const IncludeBurger = ({ ingredients, onCardClick }: TIncludeBurgerProps) => {
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
