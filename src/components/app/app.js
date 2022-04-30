import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";

import AppHeader from "../header/app-header";
import IngredientDetails from "../ingredient-details/ingredient-details";
import { ProtectedRoute } from "../protected-route";
import Modal from "../modal/modal";
import OrderDetails from "../modal/components/order-details/order-details";
import {
  IngredientPage,
  MainPage,
  LoginPage,
  RegisterPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
} from "../../pages";

import {
  addIngredient,
  removeIngredient,
} from "../../services/actions/details";
import { getUserData } from "../../services/actions/auth";

import appStyles from "./app.module.css";
import { NotFound404 } from "../../pages/not-found";

export default function App() {
  const [isOpenOrderDetails, setOpenOrderDetails] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const background = location.state && location.state.background;

  const dispatch = useDispatch();

  const openModal = () => {
    setOpenOrderDetails(!isOpenOrderDetails);
  };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  const closeModalIngredients = () => {
    history.goBack();
  };

  const closeModal = () => {
    setOpenOrderDetails(false);
    dispatch(removeIngredient());
  };

  const openIngredientDetails = (card) => {
    dispatch(addIngredient(card));
  };

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Switch location={background || location}>
        <ProtectedRoute path="/profile" exact={true}>
          <ProfilePage />
        </ProtectedRoute>
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
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
      {background && (
        <Route
          path="/ingredients/:id"
          children={
            <Modal
              title="Детали ингредиента"
              closeModal={closeModalIngredients}
            >
              <IngredientDetails />
            </Modal>
          }
        />
      )}
      {isOpenOrderDetails ? (
        <Modal closeModal={closeModal}>
          <OrderDetails />
        </Modal>
      ) : null}
    </div>
  );
}
