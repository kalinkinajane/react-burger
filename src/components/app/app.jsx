import React, { useEffect, useState } from "react";
import { requestApi } from "../../utils/api";
import appStyles from "./app.module.css";
import AppHeader from "../header/app-header";
import BurgerIngredints from "../burger-ingredients/burger-ingredints";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import OrderDetails from "../order-details/order-details";
import IngredientDetails from "../ingredient-details/ingredient-details";

function App() {
  const [data, setData] = useState([]);
  const [isOpenOrderDetails, setOpenOrderDetails] = useState(false);
  const [isOpenIngredientDetails, setOpenIngredientDetails] = useState(false);
  const [ingredient, setIngredient] = useState(null);

  useEffect(() => {
    requestApi()
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  const openModal = () => {
    setOpenOrderDetails(!isOpenOrderDetails);
  };

  const closeModal = () => {
    setOpenOrderDetails(false);
    setOpenIngredientDetails(false);
  };

  const openIngredientDetails = (card) => {
    setIngredient(card);
    setOpenIngredientDetails(!isOpenIngredientDetails);
  };

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredints
          ingredients={data}
          onCardClick={openIngredientDetails}
        />
        <BurgerConstructor selectIngredients={data} openOrderDetails={openModal} />
      </main>
      <OrderDetails isOpen={isOpenOrderDetails} closeModal={closeModal} />
      {ingredient && (
        <IngredientDetails
          isOpen={isOpenIngredientDetails}
          closeModal={closeModal}
          ingredient={ingredient}
        />
      )}
    </div>
  );
}
export default App;
