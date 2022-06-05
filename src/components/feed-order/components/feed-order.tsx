/* eslint-disable array-callback-return */
import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"

import { statusObj } from "../../../constants/constants";
import { useSelector } from "../../../utils/hooks";
import { TOrderItem } from "../../../utils/type";
import { countPrice, changeDate } from "../../../utils/utils";

import feedStyle from "../feed-orders.module.css";

type TFeedOrderProps = {
    item: TOrderItem,
}

export const FeedOrder: FC<TFeedOrderProps> = ({ item }) => {
    const { pathname } = useLocation();
    const location = useLocation();
    const { createdAt, number, name, ingredients, _id, status } = item
    const burgerIngredients = useSelector((store) => store.itemsBurger.items);
    const price = ingredients && countPrice(ingredients, burgerIngredients)

    const colorStatus = status === "done" ? '#00CCCC' : '#F2F2F3'

    return (

        <Link
            to={{
                pathname: `${location.pathname}/${_id}`,
                state: { background: location },
            }}
            className={feedStyle.link}
        >
            <div className={`${feedStyle.container} pl-6 pr-6 pb-6 pt-6 mb-4`}>
                <div className={`${feedStyle.content} mb-6`}>
                    <p className="text text_type_digits-default">#{number}</p>
                    <p className="text text_type_main-default text_color_inactive">{changeDate(createdAt)}</p>
                </div>
                <p className={`${feedStyle.text} text text_type_main-medium mb-6`}>{name}</p>
                {pathname === '/profile/orders' ? <p className={`${feedStyle.status} text text_type_main-default mt-2 mb-6`} style={{color : colorStatus}}>{statusObj[status]}</p> : null}
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
