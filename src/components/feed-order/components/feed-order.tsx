import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components"

import feedStyle from "../feed-orders.module.css";

export const FeedOrder = () => {

    return (
        <div className={`${feedStyle.container} pl-6 pr-6 pb-6 pt-6 mb-4`}>
            <div className={`${feedStyle.content} mb-6`}>
                <p className="text text_type_digits-default">1234567890</p>
                <p className="text text_type_main-default text_color_inactive">Сегодня, 16:20 i-GMT+3</p>
            </div>
            <p className={`${feedStyle.text} text text_type_main-medium mb-6`}> Death Star Starship Main бургер</p>
            <div className={feedStyle.content}>
                <div className={feedStyle.containerIngredient}>
                    <div className={feedStyle.itemiImg} style={{ zIndex: '4' }}>
                        <img className={feedStyle.img} src="https://code.s3.yandex.net/react/code/bun-01-large.png" alt="" />
                    </div>
                    <div className={feedStyle.itemiImg} style={{ right: '20px', zIndex: '3' }}>
                        <img className={feedStyle.img} src="https://code.s3.yandex.net/react/code/bun-01-large.png" alt="" />
                    </div>
                    <div className={feedStyle.itemiImg} style={{ right: '40px', zIndex: '2' }}>
                        <img className={feedStyle.img} src="https://code.s3.yandex.net/react/code/bun-01-large.png" alt="" />
                    </div>
                    <div className={feedStyle.itemiImg} style={{ right: '60px' }}>
                        <img className={feedStyle.img} src="https://code.s3.yandex.net/react/code/bun-01-large.png" alt="" />
                    </div>
                </div>
                <div className={feedStyle.costContainer}>
                    <span className={`${feedStyle.cost} text text_type_digits-default`}>23</span>
                    <CurrencyIcon type="primary" />
                </div>
            </div>
        </div>
    )
}