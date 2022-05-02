import React, { useEffect } from "react";
import { useHistory, Link, useLocation } from "react-router-dom";

import pageStyle from "./page.module.css";

export function NotFound404() {
  const history = useHistory();
  const { pathname } = useLocation();
  const HOME_CRUMB = { path: "/", url: "/", title: "Home" };
  useEffect(() => {
    const errorBreadcrumb = [
      HOME_CRUMB,
      { path: pathname, url: pathname, title: "404" },
    ];
    history.replace({ state: errorBreadcrumb });
  }, [history, pathname]);

  return (
    <div className={pageStyle.container}>
      <div className={pageStyle.container}>
        <h1 className="text text_type_main-large text_color_inactive">Oops! Страница не найдена 404 Error</h1>
        <p>
          check the address or try{" "}
          <Link to="/" className={pageStyle.link}>
            homepage
          </Link>
        </p>
      </div>
    </div>
  );
}
