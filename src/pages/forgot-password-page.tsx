import React, { useState } from "react";
import { Link, useHistory, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { forgotPassword } from "../utils/authApi";

import pageStyle from "./page.module.css";


export const ForgotPasswordPage = () => {
  const { isLogin } = useSelector((store: any) => store.authDataUser);
  const history = useHistory();
  const [data, setData] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    forgotPassword(data)
      .then((data) => {
        if (data.success) {
          history.push("/reset-password");
        }
      })
      .catch((err) => console.log(err));
  };

  if (isLogin) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }
  return (
    <div className={pageStyle.container}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type={"email"}
          placeholder={"Укажите e-mail"}
          onChange={handleChange}
          value={data}
          name={"email"}
        />

        <Button type="primary" htmlType="submit" size="medium">
          Восстановить
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
