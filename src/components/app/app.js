import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../header/app-header";
import Modal from "../modal/modal";
import OrderDetails from "../modal/components/order-details/order-details";

import {
  addIngredient,
  removeIngredient,
} from "../../services/actions/details";

import appStyles from "./app.module.css";
import {
  IngredientPage,
  MainPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
} from "../../pages";

export default function App() {
  const [isOpenOrderDetails, setOpenOrderDetails] = useState(false);
  const [isOpenIngredientDetails, setOpenIngredientDetails] = useState(false);

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
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/profile">
            <ProfilePage />
          </Route>
          <Route path="/reset-password">
            <ResetPasswordPage />
          </Route>
          <Route path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
          <Route path="/register">
            <RegisterPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/ingredients/:id">
            <IngredientPage />
          </Route>
          <Route path="/" exact={true}>
            <MainPage
              onCardClick={openIngredientDetails}
              openOrderDetails={openModal}
            />
          </Route>
        </Switch>
      </Router>
      <Modal isOpen={isOpenOrderDetails} closeModal={closeModal}>
        <OrderDetails />
      </Modal>
    </div>
  );
}
