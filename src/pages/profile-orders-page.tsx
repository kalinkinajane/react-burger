import { useEffect } from "react";
import FeadOrders from "../components/feed-order/feed-orders";
import { ProfileTabs } from "../components/profile-tabs/profile-tabs"
import { feedUrl } from "../constants/constants";
import { closedConnection, startConnection } from "../services/actions/ws-actions";
import { useDispatch } from "../utils/hooks";
import { getCookie } from "../utils/utilsCookie";

import pageStyle from "./page.module.css";


export const ProfileOrdersPage = () => {
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
        <main className={pageStyle.profile}>
            <ProfileTabs />
            <div className={pageStyle.widthBig}>
                <FeadOrders />
            </div>
        </main>
    )

}