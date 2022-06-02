import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"
import { ItemFeed } from "./components/item-feed"
import feedStyle from "./feed-items-info.module.css";

export const FeedItemsInfo = () => {
    return (
        <main className={feedStyle.feedPage}>
            <p className={`${feedStyle.title} text text_type_digits-default mb-10`}>1234567890</p>
            <p className="text text_type_main-medium mb-3" > Death Star Starship Main бургер</p>
            <span className={`${feedStyle.subtitle} text text_type_main-default `}>Выполнен</span>
            <p className="text text_type_main-medium mt-15 mb-6" > Состав:</p>
            <div className={`${feedStyle.itemsFeed} pr-6 mb-10`}>
                <ItemFeed />
            </div>
            <div className={feedStyle.content}>
                <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
                <div className={feedStyle.costContainer}>
                    <span className={`${feedStyle.cost} text text_type_digits-default`}>23</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </main>
    )
} 