import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useDrop } from "react-dnd";

import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import BurgerElements from "./components/burger-elements";
import {
  addBun,
  addIngredients,
} from "../../services/actions/ingredients-constructor";
import { createOrderDetails } from "../../services/actions/order";

import constructorStyle from "./burger-constructor.module.css";

const BurgerConstructor = ({ openOrderDetails }) => {
  const { isLogin } = useSelector((store) => store.authDataUser);
  const [ingredientsId, setIngredientsId] = useState({ ingredients: [] });
  const { ingredients, bun } = useSelector((store) => store.ingredients);
  const dispatch = useDispatch();
  const history = useHistory();

  const [{ isHover }, dropTargerRef] = useDrop({
    accept: "ingredient",
    drop(item) {
      item.type === "bun"
        ? dispatch(addBun(item))
        : dispatch(addIngredients(item));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  useEffect(() => {
    const newData = ingredients.map((item) => item._id);
    setIngredientsId({ ingredients: newData });
  }, [ingredients]);

  const countBun = bun ? bun.price * 2 : 0;
  const countPrice =
    ingredients.reduce((sum, current) => sum + current.price, 0) + countBun;

  const handleCreateOrderDetails = () => {
    if (ingredients.length === 0) {
      return;
    }

    if (isLogin) {
      dispatch(createOrderDetails(ingredientsId));
      openOrderDetails();
    } else {
      history.push("/login");
    }
  };

  return (
    <section
      ref={dropTargerRef}
      className={`${constructorStyle.constructor} ${
        isHover ? constructorStyle.onHover : ""
      } mt-15 pt-10 pb-10`}
    >
      <div className={`${constructorStyle.container} mr-4`}>
        {bun && (
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${bun.name}(верх)`}
            price={bun.price}
            thumbnail={bun.image_large}
          />
        )}
      </div>
      {ingredients && <BurgerElements ingredients={ingredients} />}
      <div className={`${constructorStyle.container} mr-4`}>
        {bun && (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${bun.name}(низ)`}
            price={bun.price}
            thumbnail={bun.image_large}
          />
        )}
      </div>

      <div className={`${constructorStyle.result} mt-10 mr-4`}>
        <div className={`${constructorStyle.cost} mr-10`}>
          <p className="text text_type_digits-medium mr-2">
            {countPrice ? countPrice : ""}
          </p>
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
