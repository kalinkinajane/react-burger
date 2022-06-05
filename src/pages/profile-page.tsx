import React, { ChangeEvent, useEffect, useState } from "react";
import {
  Input,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import {getUserData, updateUserData} from "../services/actions/auth";
import pageStyle from "./page.module.css";
import { getCookie } from "../utils/utilsCookie";
import { TDataFormRegister } from "../utils/type";
import { useDispatch, useSelector } from "../utils/hooks";
import { ProfileTabs } from "../components/profile-tabs/profile-tabs";

export const ProfilePage = () => {
  const [isEditeInput, setIsEditeInput] = useState<boolean>(false);
  const [data, setData] = useState<TDataFormRegister>({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const { userProfile } = useSelector((store) => store.authDataUser);

  const inputNameRef = React.useRef<HTMLInputElement>(null);
  const inputEmailRef = React.useRef<HTMLInputElement>(null);

  const onIconClick = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (!inputRef.current) return
    setTimeout(() => {
      inputRef.current && inputRef.current.focus();
    }, 10);
    setIsEditeInput(true);
    inputRef.current.disabled = false;
  };

  const handleCancelChange = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsEditeInput(false);
    setData(userProfile);
    if (inputNameRef.current && inputEmailRef.current) {
      inputNameRef.current.disabled = true;
      inputEmailRef.current.disabled = true;
    }

  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const { name, email } = data;
    const token = getCookie("accessToken")
    dispatch(updateUserData(name, email, token));
    setIsEditeInput(false);
    if (inputNameRef.current && inputEmailRef.current) {
      inputNameRef.current.disabled = true;
      inputEmailRef.current.disabled = true;
    }
  };

  useEffect(() => {
    if (userProfile) {
      setData(userProfile);
    }
  }, [userProfile]);


  return (
    <div className={pageStyle.profile}>
      <ProfileTabs />
      <div className={pageStyle.profileContainer}>
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
            disabled={true} onChange={function (e: ChangeEvent<HTMLInputElement>): void {
              throw new Error("Function not implemented.");
            }} />
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
    </div>
  );
};
