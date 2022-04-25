import React from "react";
import { Link } from "react-router-dom";

import {
  Button,
  Input,
} from "@ya.praktikum/react-developer-burger-ui-components";

import pageStyle from "./page.module.css";

export const RegisterPage = () => {
  const [data, setData] = React.useState({
    name: "",
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
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <form>
        <Input
          type={"text"}
          placeholder={"Имя"}
          onChange={handleChange}
          value={data.name}
          name={"name"}
        />
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
          Зарегистрироваться
        </Button>
      </form>
      <div className="text text_type_main-default mt-20">
        <p className="text_color_inactive mb-4">
          <span>Уже зарегистрированы? </span>
          <Link className={pageStyle.link} to="/login">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};
