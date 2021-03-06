import React, { useState, useEffect } from "react";
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
  NotFound404,
  FeedPage,
  ProfileOrdersPage,
  ProfileOrderPage,
} from "../../pages";
import { FeedItemsInfo } from "../feed-items-info/feed-items-info";
import { FeedItemsInfoIpage } from "../../pages/feed-itemsinfo-page";

import {
  addIngredient,
  removeIngredient,
} from "../../services/actions/details";
import { getUserData } from "../../services/actions/auth";
import { getItems } from "../../services/actions/items-burger";

import { TLocation, TIngredient } from "../../utils/type";
import { getCookie } from "../../utils/utilsCookie";

import appStyles from "./app.module.css";
import { useDispatch } from "../../utils/hooks";





export default function App() {
  const [isOpenOrderDetails, setOpenOrderDetails] = useState<boolean>(false);
  const history = useHistory();
  const location = useLocation<TLocation>();
  const background = location.state && location.state.background;

  const dispatch = useDispatch();

  const openModal = () => {
    setOpenOrderDetails(!isOpenOrderDetails);
  };

  useEffect(() => {
    const token = getCookie("accessToken")
    dispatch(getItems());
    dispatch(getUserData(token));
  }, [dispatch]);

  const closeModalIngredients = () => {
    history.goBack();
  };

  const closeModal = () => {
    setOpenOrderDetails(false);
    dispatch(removeIngredient());
  };

  const openIngredientDetails = (card: TIngredient) => {
    dispatch(addIngredient(card));
  };

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Switch location={background || location}>
        <ProtectedRoute path="/profile" exact={true}>
          <ProfilePage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders" exact={true}>
          <ProfileOrdersPage />
        </ProtectedRoute>
        <ProtectedRoute path="/profile/orders/:id" exact={true}>
          <ProfileOrderPage />
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
        <Route path="/feed" exact={true}>
          <FeedPage />
        </Route>
        <Route path="/feed/:id" exact={true}>
          <FeedItemsInfoIpage />
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
              title="???????????? ??????????????????????"
              closeModal={closeModalIngredients}
            >
              <IngredientDetails />
            </Modal>
          }
        />
      )}
      {background && (
        <Route
          path="/feed/:id"
          children={
            <Modal
              closeModal={closeModalIngredients}
            >
              <FeedItemsInfo />
            </Modal>
          }
        />
      )}
      {background && (
        <Route
          path="/profile/orders/:id"
          children={
            <Modal
              closeModal={closeModalIngredients}
            >
              <FeedItemsInfo />
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
