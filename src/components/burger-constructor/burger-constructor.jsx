import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import constructorStyle from "./burger-constructor.module.css";
import BurgerElements from "../burger-elements/burger-elements";
import { createOrder } from "../../utils/api";
import {
  IngredirntsBurgerContext,
 OrderDetailsContext,
} from "../../contexts/burgerConstructorContext";

const BurgerConstructor = ({ openOrderDetails }) => {
  const [ingredientsId, setIngredientsId] = useState({ ingredients: [] });
  const { data } = useContext(IngredirntsBurgerContext);
  const { setOrderDetails} = useContext(OrderDetailsContext);
  const selectBun = data.find((item) => item.type === "bun");
  const ingredients = data.filter((item) => item.type !== "bun");

  useEffect(() => {
    const newData = data.map((item) => item._id);
    setIngredientsId({ ingredients: newData });
  }, [data]);

  const countPrice =
    selectBun &&
    ingredients.reduce(
      (sum, current) => sum + current.price,
      selectBun.price * 2
    );

  const createOrderDetails = () => {
    createOrder(ingredientsId)
      .then((res) => {
        setOrderDetails(res);
      })
      .catch((err) => console.log(err))
      .finally(openOrderDetails());
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
        <Button onClick={createOrderDetails} type="primary" size="medium">
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
