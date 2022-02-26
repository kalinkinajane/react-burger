import React, { useEffect, useState, useRef } from "react";
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
  const [ingredient, setIngredient] = useState({});
  const overlayRef = useRef(null);
console.log(overlayRef)
  useEffect(() => {
    requestApi()
      .then((data) => setData(data.data))
      .catch((err) => console.log(err));
  }, []);

  function handleESCclose(evt) {
    if (evt.key === "Escape") {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", handleESCclose);
    return () => {
      document.removeEventListener("keydown", handleESCclose);
    };
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
        <BurgerConstructor structure={data} openOrderDetails={openModal} />
      </main>
      <OrderDetails isOpen={isOpenOrderDetails} closeModal={closeModal} ref={overlayRef}/>
      <IngredientDetails
        isOpen={isOpenIngredientDetails}
        closeModal={closeModal}
        ingredient={ingredient}
        ref={overlayRef}
      />
    </div>
  );
}
export default App;
