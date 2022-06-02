import pageStyle from "./feed-info.module.css";

export const FeedInfo = () => {
    return (
        <section className={`${pageStyle.feedInfo} ml-15`}>
            <div className={`${pageStyle.list} mb-15`}>
                <div className={`${pageStyle.ready} mr-9`}>
                    <p className="text text_type_main-medium mb-6">Готовы:</p>
                    <div className={pageStyle.listContainer}>
                        <p className={`${pageStyle.readyItem} text text_type_digits-default mt-2`}>111</p>
                    </div>

                </div>
                <div className={pageStyle.maked}>
                    <p className="text text_type_main-medium mb-6">В работе:</p>
                    <div className={pageStyle.listContainer}>
                        <p className="text text_type_digits-default mt-2">111</p>
                    </div>
                </div>
            </div>

            <p className="text text_type_main-medium">Выполнено за все время: </p>
            <p className={`${pageStyle.textStyle} text text_type_digits-large mb-15`}>123456</p>
            <p className="text text_type_main-medium">Выполнено за сегодня: </p>
            <p className={` ${pageStyle.textStyle} text text_type_digits-large`}>1234567</p>
        </section>
    )
}