import React, { useEffect, useState, FC } from "react";
import { useHistory } from "react-router-dom";
import { useDrop } from "react-dnd";
import { v4 as uuidv4 } from "uuid";

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
import { TIngredient, TIngredientsId } from "../../utils/type";
import { getCookie } from "../../utils/utilsCookie";
import { useDispatch, useSelector } from "../../utils/hooks";

import constructorStyle from "./burger-constructor.module.css";

type TBurgerConstructorProps ={
  openOrderDetails: ()=> void; 
}

const BurgerConstructor : FC<TBurgerConstructorProps> = ({ openOrderDetails }) => {
  const { isLogin } = useSelector((state) => state.authDataUser);
  const [ingredientsId, setIngredientsId] = useState<TIngredientsId>({ ingredients: [] });
  const { burgerIngredients, bun, price } = useSelector((state) => state.ingredients);
  const dispatch = useDispatch();
  const history = useHistory();

  const [{ isHover }, dropTargerRef] = useDrop({
    accept: "ingredient",
    drop(item : TIngredient ) {
      const newItem = {...item, itemId: uuidv4()}
      item.type === "bun"
        ? dispatch(addBun(newItem))
        : dispatch(addIngredients(newItem));
    },
    collect: (monitor) => ({
      isHover: monitor.isOver(),
    }),
  });

  useEffect(() => {
    const newData = burgerIngredients.map((item: TIngredient ) => item._id);
    if(bun){
      newData.push(bun._id)  
    }
    setIngredientsId({ ingredients: newData });
  }, [burgerIngredients, bun]);

  const countBun: number = bun ? price * 2 : 0;
  const countPrice: number = burgerIngredients &&
  burgerIngredients.reduce((sum: number, current: TIngredient ) => sum + current.price, 0) + countBun;

  const handleCreateOrderDetails = () => {
    if (isLogin && burgerIngredients.length > 0) {
      const token = getCookie("accessToken")
      dispatch(createOrderDetails(ingredientsId, token));
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
      {burgerIngredients && <BurgerElements ingredients={burgerIngredients} />}
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

export default BurgerConstructor;
