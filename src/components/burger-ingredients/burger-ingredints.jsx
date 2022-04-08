import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IncludeBurger from "./components/include-burger/include-burger";
import { getItems } from "../../services/actions/items-burger";
import { tabTypes } from "../../constants/constants";

import ingredientsStyle from "./burger-ingredints.module.css";

const filterIngredients = (arr, type) => {
  return arr.filter((item) => item.type === type);
};

const BurgerIngredints = ({ onCardClick }) => {
  const ingredients = useSelector((store) => store.itemsBurger.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  const ingredientsBun = filterIngredients(ingredients, "bun");
  const ingredientsSauce = filterIngredients(ingredients, "sauce");
  const ingredientsMain = filterIngredients(ingredients, "main");

  // Tabs
  const [current, setCurrent] = useState(tabTypes.bunTab);
  const containerRef = useRef(null);
  const bunRef = useRef(null);
  const sauceRef = useRef(null);
  const mainRef = useRef(null);

  const changeTabs = (value, ref) => {
    setCurrent(value);
    ref.current.scrollIntoView();
  };

  const scrollIngredients = () => {
    const bunRange = Math.abs(
      containerRef.current.getBoundingClientRect().top -
        bunRef.current.getBoundingClientRect().top
    );
    const sauceRange = Math.abs(
      containerRef.current.getBoundingClientRect().top -
        sauceRef.current.getBoundingClientRect().top
    );
    const mainRange = Math.abs(
      containerRef.current.getBoundingClientRect().top -
        mainRef.current.getBoundingClientRect().top
    );

    const minRange = Math.min(bunRange, sauceRange, mainRange);

    const activeTab =
      minRange === bunRange
        ? tabTypes.bunTab
        : minRange === sauceRange
        ? tabTypes.sauceTab
        : tabTypes.mainTab;

    setCurrent(activeTab);
  };

  useEffect(() => {
    if (current === "bun")
      bunRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
    if (current === "sauce")
      sauceRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
    if (current === "main")
      mainRef.current.scrollIntoView({ block: "start", behavior: "smooth" });
  }, [current]);

  return (
    <section className={`${ingredientsStyle.ingredients} pb-10 mr-10`}>
      <h1
        className={`${ingredientsStyle.title} text text_type_main-large mt-10 mb-5`}
      >
        Соберите бургер
      </h1>
      <div style={{ display: "flex" }}>
        <Tab
          value={tabTypes.bunTab}
          active={current === "bun"}
          onClick={(value) => changeTabs(value, bunRef)}
        >
          Булки
        </Tab>
        <Tab
          value={tabTypes.sauceTab}
          active={current === "sauce"}
          onClick={(value) => changeTabs(value, sauceRef)}
        >
          Соусы
        </Tab>
        <Tab
          value={tabTypes.mainTab}
          active={current === "main"}
          onClick={(value) => changeTabs(value, mainRef)}
        >
          Начинки
        </Tab>
      </div>

      <div
        ref={containerRef}
        onScroll={scrollIngredients}
        className={ingredientsStyle.container}
      >
        <p className="text text_type_main-medium mt-10 mb-5" ref={bunRef}>
          Булки
        </p>
        <IncludeBurger ingredients={ingredientsBun} onCardClick={onCardClick} />
        <p className="text text_type_main-medium mt-10 mb-5" ref={sauceRef}>
          Соусы
        </p>
        <IncludeBurger
          ingredients={ingredientsSauce}
          onCardClick={onCardClick}
        />
        <p className="text text_type_main-medium mt-10 mb-5" ref={mainRef}>
          Начинки
        </p>
        <IncludeBurger
          ingredients={ingredientsMain}
          onCardClick={onCardClick}
        />
      </div>
    </section>
  );
};

BurgerIngredints.propTypes = {
  onCardClick: PropTypes.func.isRequired,
};

export default BurgerIngredints;
