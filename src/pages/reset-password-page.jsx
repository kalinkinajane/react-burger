import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

import pageStyle from "./page.module.css";

export const ResetPasswordPage = () => {
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

  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <div className={pageStyle.container}>
      <h2 className="text text_type_main-medium">Восстановление пароля</h2>
      <form>
        <Input
          type={"password"}
          placeholder={"Введите новый пароль"}
          onChange={handleChange}
          icon={"ShowIcon"}
          value={data.password}
          name={"password"}
          ref={inputRef}
          onIconClick={onIconClick}
        />
        <Input
          type={"text"}
          placeholder={"Введите код из письма"}
          onChange={handleChange}
          value={data.code}
          name={"email"}
        />

        <Button type="primary" size="medium">
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
