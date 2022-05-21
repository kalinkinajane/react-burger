import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import appStyles from "../components/app/app.module.css";
import BurgerIngredints from "../components/burger-ingredients/burger-ingredints";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import { TIngredient } from "../utils/type";

type TMainProps = {
  onCardClick: (ingredient: TIngredient) => void;
  openOrderDetails: () => void;
}
export const MainPage = ({ onCardClick, openOrderDetails }:TMainProps) => {
  return (
    <main className={appStyles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredints onCardClick={onCardClick} />
        <BurgerConstructor openOrderDetails={openOrderDetails} />
      </DndProvider>
    </main>
  );
};

