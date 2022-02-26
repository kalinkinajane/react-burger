import PropTypes from "prop-types";
import { ingredientsPropTypes } from "../../utils/types";
import ingredientsStyle from "./burger-ingredints.module.css";
import Tabs from "../tabs/tabs";
import IncludeBurger from "../include-burger/include-burger";

const sortIngredients = (arr, type) => {
  return arr.filter((item) => item.type === type);
};

const BurgerIngredints = ({ ingredients, onCardClick }) => {
  const ingredientsBun = sortIngredients(ingredients, "bun");
  const ingredientsSauce = sortIngredients(ingredients, "sauce");
  const ingredientsMain = sortIngredients(ingredients, "main");

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
export default BurgerIngredints;

BurgerIngredints.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientsPropTypes).isRequired,
  onCardClick: PropTypes.func.isRequired,
};