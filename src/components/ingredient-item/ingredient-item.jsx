import ingredientStyle from './ingredient-item.module.css'
import {
    Counter,
    CurrencyIcon,
  } from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientItem =({ingredient})=>{
    const {image, name, price} = ingredient
    return(
        <div className={ingredientStyle.item} >
        <Counter count={1} size="default" />
        <img
          className={`${ingredientStyle.image} ml-4 mr-4`}
          src={image}
          alt={name}
        ></img>
        <div className={`${ingredientStyle.counter} mt-1 mb-1`}>
          <p className="text text_type_digits-default mr-2">
            {price}
          </p>
          <CurrencyIcon type="primary" />
        </div>
        <p className="text text_type_main-default">{name}</p>
      </div>
    )

}
export default IngredientItem