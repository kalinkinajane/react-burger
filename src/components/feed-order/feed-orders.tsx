import React from "react";
import { useSelector } from "../../utils/hooks";
import { TOrderItem } from "../../utils/type";
import { FeedOrder } from "./components/feed-order";

import feedStyle from "./feed-orders.module.css";


const FeadOrders = () => {
    const { orders } = useSelector((state) => state.orders);

    return (
        <section className={`${feedStyle.list} pr-3`}>
            {orders &&
                orders.map((item: TOrderItem) => (
                    <FeedOrder
                        key={item._id}
                        item={item}
                    />
                ))}
        </section>
    )
}

export default FeadOrders;

