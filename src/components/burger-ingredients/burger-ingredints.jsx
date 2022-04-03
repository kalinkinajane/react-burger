import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import PropTypes from "prop-types";

import Tabs from "../tabs/tabs";
import IncludeBurger from "../include-burger/include-burger";
import { getItems } from "../../services/actions";

import ingredientsStyle from "./burger-ingredints.module.css";


const filterIngredients = (arr, type) => {
  return arr.filter((item) => item.type === type);
};

const BurgerIngredints = ({ onCardClick }) => {
  const ingredients = useSelector(store => store.ingredients.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems())
  }, [dispatch]);

  const ingredientsBun = filterIngredients(ingredients, "bun");
  const ingredientsSauce = filterIngredients(ingredients, "sauce");
  const ingredientsMain = filterIngredients(ingredients, "main");

  return (
    <section className={`${ingredientsStyle.ingredients} pb-10 mr-10`}>
      <h1
        className={`${ingredientsStyle.title} text text_type_main-large mt-10 mb-5`}
      >
        Соберите бургер
      </h1>
      <Tabs />
      <div className={ingredientsStyle.container}>
        <p className="text text_type_main-medium mt-10 mb-5">Булки</p>
        <IncludeBurger ingredients={ingredientsBun} onCardClick={onCardClick} />
        <p className="text text_type_main-medium mt-10 mb-5">Соусы</p>
        <IncludeBurger
          ingredients={ingredientsSauce}
          onCardClick={onCardClick}
        />
        <p className="text text_type_main-medium mt-10 mb-5">Начинки</p>
        <IncludeBurger
          ingredients={ingredientsMain}
          onCardClick={onCardClick}
        />
      </div>
    </section>
  );
};

BurgerIngredints.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export default BurgerIngredints;
