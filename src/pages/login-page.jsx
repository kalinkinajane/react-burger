import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

import pageStyle from "./page.module.css";

export const LoginPage = () => {
  const [data, setData] = React.useState({
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
  const inputRef = React.useRef(null);
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0);
    alert("Icon Click Callback");
  };

  return (
    <div className={pageStyle.container}>
      <h2 className="text text_type_main-medium">Вход</h2>
      <form>
        <Input
          type={"email"}
          placeholder={"E-mail"}
          onChange={handleChange}
          value={data.email}
          name={"email"}
        />
        <Input
          type={"password"}
          placeholder={"Пароль"}
          onChange={handleChange}
          icon={"ShowIcon"}
          value={data.password}
          name={"password"}
          ref={inputRef}
          onIconClick={onIconClick}
        />
        <Button type="primary" size="medium">
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
