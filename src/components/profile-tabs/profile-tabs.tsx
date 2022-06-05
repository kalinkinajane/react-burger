import { Link, NavLink } from "react-router-dom";
import pageStyle from "../../pages/page.module.css";
import { logoutDataUser } from "../../services/actions/auth";
import { useDispatch } from "../../utils/hooks";

export const ProfileTabs = () => {
    const dispatch = useDispatch();

    return (
        <nav className="mr-15">
            <ul
                className={`${pageStyle.navigation}  text text_type_main-medium`}
            >
                <li className={pageStyle.navigationItem}>
                    <NavLink
                        exact
                        to="/profile"
                        className={pageStyle.linkNav}
                        activeClassName={pageStyle.activeLink}
                    >
                        Профиль
                    </NavLink>
                </li>
                <li className={pageStyle.navigationItem}>
                    <NavLink
                        exact
                        to="/profile/orders"
                        className={pageStyle.linkNav}
                        activeClassName={pageStyle.activeLink}
                    >
                        История заказов
                    </NavLink>
                </li>
                <li className={pageStyle.navigationItem}>
                    <Link
                        className={pageStyle.linkNav}
                        to="/"
                        onClick={() => dispatch(logoutDataUser())}
                    >
                        Выход
                    </Link>
                </li>

            </ul>
            <p
                className={`${pageStyle.notice} text text_type_main-default text_color_inactive mt-20`}
            >
                В этом разделе вы можете изменить свои персональные данные
            </p>
        </nav>
    )
}