import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { TIngredient } from "../../../utils/type";
import feedStyle from "../feed-items-info.module.css";

type TItemFeedProps = {
    ingredient: TIngredient,
    countItem: { [key: string]: number },
}

export const ItemFeed = ({ ingredient, countItem }: TItemFeedProps) => {
    const { _id, name, price, image_large } = ingredient

    return (
        <div className={`${feedStyle.itemFeed} mb-6`}>
            <div className={feedStyle.itemiImg}>
                <img className={feedStyle.img} src={image_large} alt={name} />
            </div>
            <p className={`${feedStyle.name} text text_type_main-default ml-4 mr-4`}>{name}</p>
            <div className={feedStyle.costContainer}>
                <span className={`${feedStyle.cost} text text_type_digits-default`}>{countItem[_id]} x</span>
                <span className={`${feedStyle.cost} text text_type_digits-default`}>{countItem[_id] * price}</span>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    )
}