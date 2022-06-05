import React, { useEffect } from "react";
import { FeedItemsInfo } from "../components/feed-items-info/feed-items-info";
import { feedUrl } from "../constants/constants";
import { closedConnection, startConnection } from "../services/actions/ws-actions";
import { useDispatch } from "../utils/hooks";
import { getCookie } from "../utils/utilsCookie";

import pageStyle from "./page.module.css";

export const ProfileOrderPage = () => {
    const dispatch = useDispatch()
    const token = getCookie("accessToken")
    const accessToken = token && token.split('Bearer ')[1]

    useEffect(() => {
        dispatch(startConnection(`${feedUrl}?token=${accessToken}`))

        return () => {
            dispatch(closedConnection())
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dispatch])

    return (
        <main className={pageStyle.feedPage}>
            <FeedItemsInfo />
        </main>
    )
}