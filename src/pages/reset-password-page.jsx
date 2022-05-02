import React from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { resetPassword } from "../utils/authApi";

import pageStyle from "./page.module.css";

export const ResetPasswordPage = () => {
  const { isLogin } = useSelector((store) => store.authDataUser);
  const history = useHistory();
  const [data, setData] = React.useState({
    password: "",
    code: "",
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
    const { password, code } = data;
    resetPassword(password, code)
      .then((data) => {
        if (data.success) {
          history.push("/login");
        }
      })
      .catch((err) => console.log(err));
  };

  if (isLogin) {
    return (
      <Redirect
        to={{
          pathname: "/",
        }}
      />
    );
  }
  return (
    <div className={pageStyle.container}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <form onSubmit={handleSubmit}>
        <PasswordInput
          onChange={handleChange}
          value={data.password}
          name={"password"}
        />
        <Input
          placeholder={"Введите код из письма"}
          onChange={handleChange}
          value={data.code}
          name={"code"}
        />

        <Button type="primary" htmlType="submit" size="medium">
          Сохранить
        </Button>
      </form>
      <div className="text text_type_main-default mt-20">
        <p className="text_color_inactive mb-4">
          <span>Вспомнили пароль? </span>
          <Link className={pageStyle.link} to="/login">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
