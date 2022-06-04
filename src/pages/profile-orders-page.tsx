import FeadOrders from "../components/feed-order/feed-orders";
import { ProfileTabs } from "../components/profile-tabs/profile-tabs"
import { TOrderItem } from "../utils/type";

import pageStyle from "./page.module.css";

type TProfileOrdersPageProps = {
  
    // onCardOrdersClick: (item: TOrderItem)=> void,
}

export const ProfileOrdersPage = () => {
    return (
        <main className={pageStyle.profile}>
            <ProfileTabs />
            <div className={pageStyle.widthBig}>
                    <FeadOrders />
                </div>
        </main>
    )

}