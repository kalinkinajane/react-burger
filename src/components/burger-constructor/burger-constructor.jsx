import React from "react";
import constructorStyle from "./burger-constructor.module.css";
import {
  ConstructorElement,
  Button,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerElements from "../burger-elements/burger-elements";

const BurgerConstructor = ({structure}) => {
  const selectBun = structure.find((item)=> item.type === 'bun')
  const ingredients = structure.filter((item)=> item.type !== 'bun' )

  return (
    <section className={`${constructorStyle.constructor} pt-25 pb-10`}>
        <div className={`${constructorStyle.container} mr-4`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${selectBun.name}(верх)`}
            price={selectBun.price}
            thumbnail={selectBun.image_large}
          />
        </div>
        <BurgerElements elements={ingredients}/>
        <div className={`${constructorStyle.container} mr-4`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${selectBun.name}(низ)`}
            price={selectBun.price}
            thumbnail={selectBun.image_large}
          />
        </div>
     
      <div className={`${constructorStyle.result} mt-10 mr-4`}>
        <div className={`${constructorStyle.cost} mr-10`}>
          <p className="text text_type_digits-medium mr-2">600</p>
          <CurrencyIcon type="primary" />
        </div>
        <Button type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};
export default BurgerConstructor;
