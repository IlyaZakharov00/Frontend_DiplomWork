import user_1 from "../../static-files/images/user_photo_1.png"
import user_2 from "../../static-files/images/user_photo_2.png"
import './Comments.css'

export const Comments = () => {

    const clickPageHendler = (e: any) => {
        const activeNow = document.querySelector('.page_active');
        activeNow?.classList.remove('page_active')
        e.target.classList.add('page_active')
    }

    return (
        <section className="comments_container" id='comments-section'>
            <h2 className="comments_title">Отзывы</h2>
            <ul className="comments_items">
                <li className="comments_item">
                    <div className="item_container">
                        <img src={user_1} alt="user_photo" className="user_photo" />
                        <div className="comment_content">
                            <div className="user_name">Екатерина Вальнова</div>
                            <p className="user_comment">"Доброжелательные подсказки
                                на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."
                            </p>
                        </div>
                    </div>
                </li>
                <li className="comments_item">
                    <div className="item_container">
                        <img src={user_2} alt="user_photo" className="user_photo" />
                        <div className="comment_content">
                            <div className="user_name">Евгений Стрыкало</div>
                            <div className="user_comment">
                                "СМС-сопровождение до посадки
                                Сразу после оплаты ж/д билетов
                                и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="comments_pages">
                <div className="page_item page_active" onClick={clickPageHendler}></div>
                <div className="page_item" onClick={clickPageHendler}></div>
                <div className="page_item" onClick={clickPageHendler}></div>
                <div className="page_item" onClick={clickPageHendler}></div>
                <div className="page_item" onClick={clickPageHendler}></div>
            </div>
        </section>
    )
}
