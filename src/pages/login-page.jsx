import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useLocation } from "react-router-dom";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import pageStyle from "./page.module.css";
import { loginUser } from "../services/actions/auth";

export const LoginPage = () => {
  const { isLogin} = useSelector((store) => store.authDataUser);
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(data));
  };

  if (isLogin) {
    return (
      <Redirect
      to={ state?.from || '/' }
      />
    );
  }

  return (
    <div className={pageStyle.container}>
      <h2 className="text text_type_main-medium">Вход</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type={"email"}
          placeholder={"E-mail"}
          onChange={handleChange}
          value={data.email}
          name={"email"}
        />
        <PasswordInput
          onChange={handleChange}
          value={data.password}
          name={"password"}
        />
        <Button type="primary" htmlType="submit" size="medium">
          Войти
        </Button>
      </form>
      <div className="text text_type_main-default mt-20">
        <p className="text_color_inactive mb-4">
          <span>Вы — новый пользователь? </span>
          <Link className={pageStyle.link} to="/register">
            Зарегистрироваться
          </Link>
        </p>
        <p className="text_color_inactive mb-4">
          <span>Забыли пароль? </span>
          <Link className={pageStyle.link} to="/forgot-password">
            Восстановить пароль
          </Link>
        </p>
      </div>
    </div>
  );
};
