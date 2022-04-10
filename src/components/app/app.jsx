import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import AppHeader from "../header/app-header";
import BurgerIngredints from "../burger-ingredients/burger-ingredints";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import Modal from "../modal/modal";
import OrderDetails from "../modal/components/order-details/order-details";
import IngredientDetails from "../modal/components/ingredient-details/ingredient-details";

import {
  addIngredient,
  removeIngredient,
} from "../../services/actions/details";

import appStyles from "./app.module.css";

function App() {
  const [isOpenOrderDetails, setOpenOrderDetails] = useState(false);
  const [isOpenIngredientDetails, setOpenIngredientDetails] = useState(false);

  const ingredient = useSelector(
    (store) => store.ingredientDetail.viewIngredient
  );
  const dispatch = useDispatch();

  const openModal = () => {
    setOpenOrderDetails(!isOpenOrderDetails);
  };

  const closeModal = () => {
    setOpenOrderDetails(false);
    setOpenIngredientDetails(false);
    dispatch(removeIngredient());
  };

  const openIngredientDetails = (card) => {
    dispatch(addIngredient(card));
    setOpenIngredientDetails(!isOpenIngredientDetails);
  };

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredints onCardClick={openIngredientDetails} />
          <BurgerConstructor openOrderDetails={openModal} />
        </DndProvider>
      </main>
      <Modal isOpen={isOpenOrderDetails} closeModal={closeModal}>
        <OrderDetails />
      </Modal>
      <Modal title="Детали ингредиента" isOpen={isOpenIngredientDetails} closeModal={closeModal}>
        {ingredient && <IngredientDetails ingredient={ingredient} />}
      </Modal>
    </div>
  );
}
export default App;
