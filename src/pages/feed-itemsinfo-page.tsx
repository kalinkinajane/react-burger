import React, { useEffect } from "react";
import { FeedItemsInfo } from "../components/feed-items-info/feed-items-info";
import { feedUrl } from "../constants/constants";
import { closedConnection, startConnection } from "../services/actions/ws-actions";
import { useDispatch } from "../utils/hooks";

import pageStyle from "./page.module.css";

export const FeedItemsInfoIpage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(startConnection(feedUrl))

        return () => {
            dispatch(closedConnection())
        }
    }, [dispatch])

    return (
        <main className={pageStyle.feedPage}>
            <FeedItemsInfo />
        </main>
    )
}