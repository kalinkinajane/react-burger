import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IngredirntsBurgerContext} from "../../contexts/burgerConstructorContext";
import AppHeader from "../header/app-header";
import BurgerIngredints from "../burger-ingredients/burger-ingredints";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

import appStyles from "./app.module.css";

import { addIngredient, REMOVE_VIEW_INGREDIENT } from "../../services/actions";


function App() {
  const [data, setData] = useState([]);
  
  const [isOpenOrderDetails, setOpenOrderDetails] = useState(false);
  const [isOpenIngredientDetails, setOpenIngredientDetails] = useState(false);


  const ingredient = useSelector(store => store.ingredients.viewIngredient)
  // временно
  const ingredients = useSelector(store => store.ingredients.items);
  const dispatch = useDispatch()

  const openModal = () => {
    setOpenOrderDetails(!isOpenOrderDetails);
  };

  const closeModal = () => {
    setOpenOrderDetails(false);
    setOpenIngredientDetails(false);
    dispatch({type: REMOVE_VIEW_INGREDIENT})
  };

  const openIngredientDetails = (card) => {
    dispatch(addIngredient(card))
    setOpenIngredientDetails(!isOpenIngredientDetails);
  };

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredints
          onCardClick={openIngredientDetails}
        />
        {ingredient && (
          <IngredientDetails
            isOpen={isOpenIngredientDetails}
            closeModal={closeModal}
            ingredient={ingredient}
          />
        )}
        <IngredirntsBurgerContext.Provider value={{ ingredients, setData }}>
            <BurgerConstructor openOrderDetails={openModal} />
            <OrderDetails isOpen={isOpenOrderDetails} closeModal={closeModal} />
        </IngredirntsBurgerContext.Provider>
      </main>
    </div>
  );
}
export default App;
