import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import feedStyle from "../feed-items-info.module.css";

export const ItemFeed = () => {
    return (
        <div className={feedStyle.itemFeed}>
            <div className={feedStyle.itemiImg}>
                <img className={feedStyle.img} src="https://code.s3.yandex.net/react/code/bun-01-large.png" alt="" />
            </div>
            <p className={`${feedStyle.name} text text_type_main-default ml-4 mr-4`}>Флюоресцентная булка R2-D3</p>
            <div className={feedStyle.costContainer}>
                <span className={`${feedStyle.cost} text text_type_digits-default`}>2 x</span>
                <span className={`${feedStyle.cost} text text_type_digits-default`}>23</span>
                <CurrencyIcon type="primary" />
            </div>
        </div>
    )
}