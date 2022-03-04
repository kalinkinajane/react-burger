import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import {tabTypes} from '../../constants/constants'

const Tabs = () => {
  const [current, setCurrent] = React.useState(tabTypes.bunTab);
  return (
    <div style={{ display: "flex" }}>
      <Tab value={tabTypes.bunTab} active={current === "bun"} onClick={setCurrent}>
        Булки
      </Tab>
      <Tab value={tabTypes.sauceTab} active={current === "sauce"} onClick={setCurrent}>
        Соусы
      </Tab>
      <Tab value={tabTypes.mainTab} active={current === "main"} onClick={setCurrent}>
        Начинки
      </Tab>
    </div>
  );
};
export default Tabs;
