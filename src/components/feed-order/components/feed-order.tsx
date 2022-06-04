import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "../../../utils/hooks";
import { TOrderItem } from "../../../utils/type";
import { countPrice } from "../../../utils/utils";

import feedStyle from "../feed-orders.module.css";

type TFeedOrderProps = {
    item: TOrderItem,
}

export const FeedOrder: FC<TFeedOrderProps> = ({ item }) => {
    const location = useLocation();
    const { createdAt, number, name, ingredients, _id } = item
    const burgerIngredients = useSelector((store) => store.itemsBurger.items);
    const price = ingredients && countPrice(ingredients, burgerIngredients)

    return (

        <Link
            to={{
                pathname: `/feed/${_id}`,
                state: { background: location },
            }}
            className={feedStyle.link}
        >
            <div className={`${feedStyle.container} pl-6 pr-6 pb-6 pt-6 mb-4`}>
                <div className={`${feedStyle.content} mb-6`}>
                    <p className="text text_type_digits-default">{number}</p>
                    <p className="text text_type_main-default text_color_inactive">{createdAt}</p>
                </div>
                <p className={`${feedStyle.text} text text_type_main-medium mb-6`}>{name}</p>
                <div className={feedStyle.content}>

                    <div className={feedStyle.containerIngredient}>
                        {ingredients && ingredients.map((id: string, index: number) => {
                            const zIndex = 5 - index
                            const ingredient = burgerIngredients && burgerIngredients.find((item) => item._id === id)
                            if (zIndex > 0)
                                return (
                                    <div className={feedStyle.itemiImg} style={{ left: -index * 10, zIndex: zIndex }} key={index}>
                                        <img className={feedStyle.img} src={ingredient?.image_large} alt="" />
                                    </div>
                                )

                            if (zIndex === 0)
                                return (
                                    <div className={feedStyle.itemiImg} style={{ left: -index * 10, zIndex: 0 }} key={index}>
                                        <p className={`${feedStyle.textCount} text text_type_main-default`}>{`+${ingredients.length - 5}`}</p>
                                        <img className={feedStyle.imgLast} src={ingredient?.image_large} alt="" />
                                    </div>)
                        })}

                    </div>
                    <div className={feedStyle.costContainer}>
                        <span className={`${feedStyle.cost} text text_type_digits-default`}>{price}</span>
                        <CurrencyIcon type="primary" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
