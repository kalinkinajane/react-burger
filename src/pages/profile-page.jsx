import React from "react";
import { NavLink } from "react-router-dom";
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

import pageStyle from "./page.module.css";

export const ProfilePage = () => {
    const [data, setData] = React.useState({
        name: 'Марк',
        email: "mail@stellar.burgers",
        password: "******|",
      });
    const inputRef = React.useRef(null);
    const onIconClick = () => {
      setTimeout(() => inputRef.current.focus(), 0);
      alert("Icon Click Callback");
    };
  
  return (
    <div className={pageStyle.profile}>
        <div className={pageStyle.profileContainer}>
      <ul className={`${pageStyle.navigation} mr-15 text text_type_main-medium`}>
        <li className={pageStyle.navigationItem}><NavLink to="/profile"  className={pageStyle.linkNav} activeClassName={pageStyle.activeLink}>Профиль</NavLink></li>
        <li className={pageStyle.navigationItem}><NavLink to="/profile/orders"  className={pageStyle.linkNav} activeClassName={pageStyle.activeLink}>История заказов</NavLink></li>
        <li className={pageStyle.navigationItem}>Выход</li>
      </ul>
      <form>
        <Input
          type={"text"}
          placeholder={"Имя"}
          value={data.name}
          name={"name"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          disabled={true}
          icon={"EditIcon"}
        />
        <Input
          type={"email"}
          placeholder={"E-mail"}
          value={data.email}
          name={"email"}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
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
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={"Ошибка"}
          disabled={true}
        />
      </form>
      </div>
      <p className={`${pageStyle.notice} text text_type_main-default text_color_inactive mt-2`}>В этом разделе вы можете
изменить свои персональные данные</p>
    </div>
  );
};
