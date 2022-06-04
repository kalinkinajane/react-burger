import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { useParams } from "react-router-dom";
import { status } from "../../constants/constants";
import { useSelector } from "../../utils/hooks";
import { TOrderItem } from "../../utils/type";
import { countPrice, getResult, uniqueArray } from "../../utils/utils";
import { ItemFeed } from "./components/item-feed"
import feedStyle from "./feed-items-info.module.css";


type TUseParamsId = {
    id: string
}


export const FeedItemsInfo = () => {
    const { id } = useParams<TUseParamsId>();
    const { orders } = useSelector((state) => state.orders);

    const selectOrder = orders.find((item: TOrderItem) => item._id === id)
    const uniqueIngredients = selectOrder && uniqueArray(selectOrder.ingredients)
    const countItem = selectOrder && getResult(selectOrder.ingredients)

    const burgerIngredients = useSelector((store) => store.itemsBurger.items);

    const price = selectOrder && countPrice(selectOrder.ingredients, burgerIngredients)


    return (
        <div className={feedStyle.feedPage}>
            <p className={`${feedStyle.title} text text_type_digits-default mb-10`}>#{selectOrder?.number}</p>
            <p className="text text_type_main-medium mb-3" >{selectOrder?.name}</p>
            <span className={`${feedStyle.subtitle} text text_type_main-default `}>{selectOrder && status[selectOrder.status]}</span>
            <p className="text text_type_main-medium mt-15 mb-6" > Состав:</p>
            <div className={`${feedStyle.itemsFeed} pr-6 mb-10`}>
                {uniqueIngredients && uniqueIngredients.map((id, index) => {
                    const ingredient = burgerIngredients && burgerIngredients.find((item) => item._id === id)
                    if (ingredient && countItem) {
                        return < ItemFeed ingredient={ingredient} key={index} countItem={countItem} />
                    }
                })}
            </div>
            <div className={feedStyle.content}>
                <p className="text text_type_main-default text_color_inactive">{selectOrder?.createdAt}</p>
                <div className={feedStyle.costContainer}>
                    <span className={`${feedStyle.cost} text text_type_digits-default`}>{price}</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
} 