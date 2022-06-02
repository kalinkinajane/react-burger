import React from "react"
import { FeedInfo } from "../components/feed-info/feed-info";
import FeadOrders from "../components/feed-order/feed-orders"
import pageStyle from "./page.module.css";



export const FeedPage = () => {
    return (
        <main className={pageStyle.main}>
            <section className={`${pageStyle.pageWidth} pt-10`}>
                <h1 className={`${pageStyle.title} text text_type_main-large mb-5`}>Лента заказов</h1>
                <FeadOrders></FeadOrders>
            </section>
            <FeedInfo />
        </main>

    )
}

