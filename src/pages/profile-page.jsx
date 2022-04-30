import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {
  getUserData,
  logoutDataUser,
  updateUserData,
} from "../services/actions/auth";
import pageStyle from "./page.module.css";

export const ProfilePage = () => {
  const [isEditeInput, setIsEditeInput] = useState(false);
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  const dispatch = useDispatch();
  const { userProfile } = useSelector((store) => store.authDataUser);

  const inputNameRef = React.useRef(null);
  const inputEmailRef = React.useRef(null);

  const onIconClick = (inputRef) => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 10);
    setIsEditeInput(true);
    inputRef.current.disabled = false;
  };

  const handleCancelChange = (e) => {
    e.preventDefault();
    setIsEditeInput(false);
    setData(userProfile);
    inputNameRef.current.disabled = true;
    inputEmailRef.current.disabled = true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = data;
    dispatch(updateUserData(name, email));
    setIsEditeInput(false);
    inputNameRef.current.disabled = true;
    inputEmailRef.current.disabled = true;
  };

  useEffect(() => {
    dispatch(getUserData());
  }, [dispatch]);

  useEffect(() => {
    if (userProfile) {
      setData(userProfile);
    }
  }, [userProfile]);

  return (
    <div className={pageStyle.profile}>
      <div className={pageStyle.profileContainer}>
        <ul
          className={`${pageStyle.navigation} mr-15 text text_type_main-medium`}
        >
          <li className={pageStyle.navigationItem}>
            <NavLink
              exact
              to="/profile"
              className={pageStyle.linkNav}
              activeClassName={pageStyle.activeLink}
            >
              Профиль
            </NavLink>
          </li>
          <li className={pageStyle.navigationItem}>
            <NavLink
              exact
              to="/profile/orders"
              className={pageStyle.linkNav}
              activeClassName={pageStyle.activeLink}
            >
              История заказов
            </NavLink>
          </li>
          <li className={pageStyle.navigationItem}>
            <Link
              className={pageStyle.linkNav}
              to="/"
              onClick={() => dispatch(logoutDataUser())}
            >
              Выход
            </Link>
          </li>
        </ul>
        <form onSubmit={handleSubmit}>
          <Input
            onChange={handleChange}
            type={"text"}
            placeholder={"Имя"}
            value={data.name}
            name={"name"}
            error={false}
            ref={inputNameRef}
            onIconClick={() => onIconClick(inputNameRef)}
            errorText={"Ошибка"}
            disabled={true}
            icon={"EditIcon"}
          />
          <Input
           onChange={handleChange}
            type={"email"}
            placeholder={"E-mail"}
            value={data.email}
            name={"email"}
            error={false}
            ref={inputEmailRef}
            onIconClick={() => onIconClick(inputEmailRef)}
            errorText={"Ошибка"}
            disabled={true}
            icon={"EditIcon"}
          />
          <Input
            type={"password"}
            placeholder={"Пароль"}
            icon={"EditIcon"}
            value={data.password}
            name={"password"}
            error={false}
            errorText={"Ошибка"}
            disabled={true}
          />
          {isEditeInput && (
            <div>
              <Button
                type="secondary"
                size="medium"
                onClick={handleCancelChange}
              >
                Отмена
              </Button>
              <Button type="primary" htmlType="submit" size="medium">
                Сохранить
              </Button>
            </div>
          )}
        </form>
      </div>
      <p
        className={`${pageStyle.notice} text text_type_main-default text_color_inactive mt-2`}
      >
        В этом разделе вы можете изменить свои персональные данные
      </p>
    </div>
  );
};
