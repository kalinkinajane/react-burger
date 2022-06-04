// import { useSelector } from "react-redux";
import { useDrag } from "react-dnd";
import { Link, useLocation } from "react-router-dom";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import ingredientStyle from "./ingredient-item.module.css";
import { TIngredient } from "../../../../utils/type";
import { useSelector } from "../../../../utils/hooks";


type TIngredientItemProps = {
  ingredient: TIngredient;
  onCardClick: (ingredient: TIngredient) => void;
}

const IngredientItem = ({ ingredient, onCardClick }: TIngredientItemProps) => {
  const { image, name, price, _id } = ingredient;
  const { burgerIngredients, bun } = useSelector((store) => store.ingredients);

  const location = useLocation();

  const count: number = [...burgerIngredients, bun].filter(
    (item) => item && item._id === _id
  ).length;

  const handleClick = () => {
    onCardClick(ingredient);
  };

  const [{ opacity }, dragRef] = useDrag({
    type: "ingredient",
    item: { ...ingredient },
    collect: (monitor) => ({
      opacity: monitor.isDragging() ? 0.5 : 1,
    }),
  });

  
  return (
    <div
      ref={dragRef}
      className={ingredientStyle.item}
      onClick={handleClick}
      style={{ opacity }}
    >
      <Link
        to={{
          pathname: `/ingredients/${_id}`,
          state: { background: location },
        }}
        className={ingredientStyle.link}
      >
        {count ? <Counter count={count} size="default" /> : ""}
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
      </Link>
    </div>
  );
};

export default IngredientItem;
