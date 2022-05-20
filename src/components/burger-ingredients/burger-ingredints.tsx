import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import IncludeBurger from "./components/include-burger/include-burger";
import { tabTypes } from "../../constants/constants";

import ingredientsStyle from "./burger-ingredints.module.css";
import { TIngredient } from "../../utils/type";

type TBurgerIngredintsProps = {
  onCardClick: (ingredient: TIngredient) => void;
}

const filterIngredients = (arr: Array<TIngredient>, type: string) => {
  return arr.filter((item) => item.type === type);
};

const BurgerIngredints = ({ onCardClick }: TBurgerIngredintsProps) => {
  const ingredients = useSelector((store: any) => store.itemsBurger.items);

  const ingredientsBun = filterIngredients(ingredients, "bun");
  const ingredientsSauce = filterIngredients(ingredients, "sauce");
  const ingredientsMain = filterIngredients(ingredients, "main");

  // Tabs
  const [current, setCurrent] = useState<string>(tabTypes.bunTab);
  const containerRef = useRef<HTMLDivElement>(null);
  const bunRef = useRef<HTMLParagraphElement>(null);
  const sauceRef = useRef<HTMLParagraphElement>(null);
  const mainRef = useRef<HTMLParagraphElement>(null);

  const changeTabs = (value: string, ref: any) => {
    setCurrent(value);
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollIngredients = () => {
    if (containerRef.current && bunRef.current && sauceRef.current && mainRef.current) {
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
    }
  };

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

export default BurgerIngredints;
