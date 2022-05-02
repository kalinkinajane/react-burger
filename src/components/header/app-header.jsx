import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import headerStyle from "./app-header.module.css";

function AppHeader() {
  const { pathname } = useLocation();

  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.content}>
        <nav className={headerStyle.navigation}>
          <div className="pb-4 pt-4 pl-5 pr-5">
            <NavLink
              exact
              to="/"
              className={headerStyle.linkNav}
              activeClassName={headerStyle.activeLink}
            >
              <BurgerIcon type={pathname === "/" ? "primary" : "secondary"} />
              <p className="text text__item-nav text_type_main-default ml-2">
                Конструктор
              </p>
            </NavLink>
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
          <NavLink
            to="/profile"
            className={headerStyle.linkNav}
            activeClassName={headerStyle.activeLink}
          >
            <ProfileIcon
              type={pathname === "/profile" ? "primary" : "secondary"}
            />
            <p className="text text__item-nav text_type_main-default ml-2">
              Личный кабинет
            </p>
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default AppHeader;
