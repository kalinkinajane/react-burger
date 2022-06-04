import React, { useEffect } from "react"
import { FeedInfo } from "../components/feed-info/feed-info";
import FeadOrders from "../components/feed-order/feed-orders"
import { feedUrl } from "../constants/constants";
import { closedConnection, startConnection } from "../services/actions/ws-actions";
import { useDispatch } from "../utils/hooks";
import pageStyle from "./page.module.css";

export const FeedPage = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startConnection(feedUrl))

        return () => {
            dispatch(closedConnection())
        }
    }, [dispatch])

    return (
        <main className={pageStyle.main}>
            <section className="pt-10">
                <h1 className={`${pageStyle.title} text text_type_main-large mb-5`}>Лента заказов</h1>
                <div className={pageStyle.width}>
                    <FeadOrders/>
                </div>
            </section>
            <FeedInfo />
        </main>

    )
}

