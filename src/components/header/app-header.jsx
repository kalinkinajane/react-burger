import { Link } from "react-router-dom";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import headerStyle from "./app-header.module.css";

function AppHeader() {
  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.content}>
        <nav className={headerStyle.navigation}>
          <div className={`${headerStyle.flexible} pb-4 pt-4 pl-5 pr-5`}>
            <BurgerIcon type="primary" />
            <p className="text text__item-nav text_type_main-default ml-2">
              Конструктор
            </p>
          </div>
          <div className={`${headerStyle.flexible} pb-4 pt-4 pl-5 pr-5`}>
            <ListIcon type="secondary" />
            <p className="text text__item-nav text_type_main-default text_color_inactive ml-2">
              Лента заказов
            </p>
          </div>
        </nav>
        <div className={headerStyle.logo}>
          <Link to="/">
            <Logo />
          </Link>
        </div>

        <div className={`${headerStyle.flexible} pb-4 pt-4 pl-5 pr-5`}>
          <ProfileIcon type="secondary" />
          <p className="text text__item-nav text_type_main-default ml-2">
            <Link className="text_color_inactive" to="/profile">
              Личный кабинет
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
