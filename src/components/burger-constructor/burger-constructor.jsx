import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import constructorStyle from "./burger-constructor.module.css";
import BurgerElements from "../burger-elements/burger-elements";
import { IngredirntsBurgerContext } from "../../contexts/burgerConstructorContext";

import { createOrderDetails } from "../../services/actions";

const BurgerConstructor = ({ openOrderDetails }) => {
  const [ingredientsId, setIngredientsId] = useState({ ingredients: [] });
  const { ingredients } = useContext(IngredirntsBurgerContext);

  const dispatch = useDispatch();

  const selectBun = ingredients.find((item) => item.type === "bun");
  const ingredientsFilling = ingredients.filter((item) => item.type !== "bun");

  useEffect(() => {
    const newData = ingredients.map((item) => item._id);
    setIngredientsId({ ingredients: newData });
  }, [ingredients]);

  const countPrice =
    selectBun &&
    ingredientsFilling.reduce(
      (sum, current) => sum + current.price,
      selectBun.price * 2
    );

  const handleCreateOrderDetails = () => {
    dispatch(createOrderDetails(ingredientsId));
    openOrderDetails();
  };

  return (
    <section className={`${constructorStyle.constructor} pt-25 pb-10`}>
      <div className={`${constructorStyle.container} mr-4`}>
        {selectBun && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${selectBun.name}(верх)`}
            price={selectBun.price}
            thumbnail={selectBun.image_large}
          />
        )}
      </div>
      {ingredients && <BurgerElements elements={ingredients} />}
      <div className={`${constructorStyle.container} mr-4`}>
        {selectBun && (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${selectBun.name}(низ)`}
            price={selectBun.price}
            thumbnail={selectBun.image_large}
          />
        )}
      </div>

      <div className={`${constructorStyle.result} mt-10 mr-4`}>
        <div className={`${constructorStyle.cost} mr-10`}>
          <p className="text text_type_digits-medium mr-2">{countPrice}</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={handleCreateOrderDetails} type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  openOrderDetails: PropTypes.func.isRequired,
};

export default BurgerConstructor;
