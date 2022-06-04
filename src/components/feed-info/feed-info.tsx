import { useSelector } from "../../utils/hooks";
import { TOrderItem } from "../../utils/type";
import pageStyle from "./feed-info.module.css";

const filterIngredients = (arr: Array<TOrderItem>, status: string) => {
    return arr.filter((item) => item.status === status);
};

export const FeedInfo = () => {
    const { orders, total, totalToday } = useSelector((state) => state.orders);
    const pendingOrders = filterIngredients(orders, 'pending')
    const doneOrders = filterIngredients(orders, 'done')
    // console.log(pendingOrders, doneOrders)

    return (
        <section className={`${pageStyle.feedInfo} ml-15`}>
            <div className={`${pageStyle.list} mb-15`}>
                <div className={`${pageStyle.ready} mr-9`}>
                    <p className="text text_type_main-medium mb-6">Готовы:</p>
                    <div className={pageStyle.listContainer}>
                    {doneOrders.map((item, i) => (
                            <p className={`${pageStyle.readyItem} text text_type_digits-default mt-2`} key={i}>{item.number}</p>
                        ))}
                      
                    </div>

                </div>
                <div className={pageStyle.maked}>
                    <p className="text text_type_main-medium mb-6">В работе:</p>
                    <div className={pageStyle.listContainer}>
                        {pendingOrders.map((item, i) => (
                            <p className="text text_type_digits-default mt-2" key={i}>{item.number}</p>
                        ))}
                    </div>
                </div>
            </div>

            <p className="text text_type_main-medium">Выполнено за все время: </p>
            <p className={`${pageStyle.textStyle} text text_type_digits-large mb-15`}>{total}</p>
            <p className="text text_type_main-medium">Выполнено за сегодня: </p>
            <p className={` ${pageStyle.textStyle} text text_type_digits-large`}>{totalToday}</p>
        </section>
    )
}