import React from "react";
import AppHeader from "../header/app-header";
import BurgerIngredints from "../burger-ingredients/burger-ingredints";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import appStyles from "./app.module.css";
import {data} from "../../utils/data";

function App() {
  return (
    <div className={appStyles.app}>
      <AppHeader />
      <main className={appStyles.main}>
        <BurgerIngredints ingredients={data} />
        <BurgerConstructor structure={data}/>
      </main>
    </div>
  );
}
export default App;
