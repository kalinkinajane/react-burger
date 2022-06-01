import React from "react";
import { Link, Redirect } from "react-router-dom";

import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";

import { registerUser } from "../services/actions/auth";

import pageStyle from "./page.module.css";
import { TDataFormRegister } from "../utils/type";
import { useDispatch, useSelector } from "../utils/hooks";

export const RegisterPage = () => {
  const { registration } = useSelector((store) => store.authDataUser);
  const dispatch = useDispatch();

  const [data, setData] = React.useState<TDataFormRegister>({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(registerUser(data));
  };

  if (registration) {
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
      <h2 className="text text_type_main-medium">Регистрация</h2>
      <form onSubmit={handleSubmit}>
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
        <PasswordInput
          onChange={handleChange}
          value={data.password}
          name={"password"}
        />
        <Button type="primary" htmlType="submit" size="medium">
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
