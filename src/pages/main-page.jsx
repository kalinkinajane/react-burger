import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import PropTypes from "prop-types";

import appStyles from "../components/app/app.module.css";
import BurgerIngredints from "../components/burger-ingredients/burger-ingredints";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";

export const MainPage = ({ onCardClick, openOrderDetails }) => {
  return (
    <main className={appStyles.main}>
      <DndProvider backend={HTML5Backend}>
        <BurgerIngredints onCardClick={onCardClick} />
        <BurgerConstructor openOrderDetails={openOrderDetails} />
      </DndProvider>
    </main>
  );
};

MainPage.propTypes = {
  onCardClick: PropTypes.func,
  openOrderDetails: PropTypes.func,
};
