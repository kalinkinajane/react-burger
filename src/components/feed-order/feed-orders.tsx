import React from "react";
import { FeedOrder } from "./components/feed-order";


import feedStyle from "./feed-orders.module.css";



const FeadOrders = () => {
    return (
        <section className={`${feedStyle.list} pr-3`}>
            <FeedOrder />
        </section>
    )
}

export default FeadOrders;

