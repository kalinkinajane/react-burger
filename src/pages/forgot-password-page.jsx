import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

import pageStyle from "./page.module.css";

export const ForgotPasswordPage = () => {
  const [data, setData] = React.useState('');

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div className={pageStyle.container}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <form>
        <Input
          type={"email"}
          placeholder={"Укажите e-mail"}
          onChange={handleChange}
          value={data}
          name={"email"}
        />

        <Button type="primary" size="medium">
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
