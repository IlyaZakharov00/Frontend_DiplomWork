import user_1 from "../../static-files/images/user_photo_1.png"
import user_2 from "../../static-files/images/user_photo_2.png"
import './Comments.css'

export const Comments = () => {

    const clickPageHendler = (e: React.MouseEvent<HTMLElement>) => {
        const activeNow = document.querySelector('.page_active');
        const page = e.target as HTMLDivElement;
        activeNow?.classList.remove('page_active')
        page.classList.add('page_active')
    }

    return (
        <section className="comments_container d-flex flex-column text-center gx-0 pt-lg-5 px-lg-5 mx-lg-5" id="comments-section">
            <div className="row pt-lg-5 pt-5 ps-lg-5 ms-lg-3 gx-0">
                <div className="col-xl-2 col-lg-3 col-12 pt-lg-5 px-0">
                    <h2 className="comments_title pt-lg-2 ps-lg-4">Отзывы</h2>
                </div>
            </div>
            <div className="row gx-0">
                <div className="col-xl-10 col-12 pt-lg-5 pt-5 mt-lg-3 m-auto p-0 mt-sm-5">
                    <ul className="comments_items d-flex flex-xl-row flex-lg-column flex-column align-items-center p-0 mx-4">
                        <li className="item_container d-lg-flex align-items-center flex-xl-row">
                            <img src={user_1} alt="user_photo" className="user_photo user_photo_first" />
                            <div className="comment_content d-flex flex-column text-start ps-lg-4 w-xl-50 w-100">
                                <div className="user_name">Екатерина Вальнова</div>
                                <p className="user_comment">"Доброжелательные подсказки на всех этапах помогут правильно заполнить поля и без затруднений купить авиа или ж/д билет, даже если вы заказываете онлайн билет впервые."
                                </p>
                            </div>
                        </li>
                        <li className="item_container d-lg-flex align-items-center flex-xl-row">
                            <img src={user_2} alt="user_photo" className="user_photo user_photo_second" />
                            <div className="comment_content d-flex flex-column  text-start px-lg-4 w-xl-50 w-100">
                                <div className="user_name">Евгений Стрыкало</div>
                                <p className="user_comment">
                                    "СМС-сопровождение до посадки сразу после оплаты ж/д билетов и за 3 часа до отправления мы пришлем вам СМС-напоминание о поездке."
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row mx-lg-0 mt-lg-5 pt-lg-5 pt-5 gap-0 ">
                <div className="col-xl-2 col-5  m-auto d-flex comments_pages justify-content-evenly pt-lg-4 px-0">
                    <div className="page_item page_active" onClick={clickPageHendler}></div>
                    <div className="page_item" onClick={clickPageHendler}></div>
                    <div className="page_item" onClick={clickPageHendler}></div>
                    <div className="page_item" onClick={clickPageHendler}></div>
                    <div className="page_item" onClick={clickPageHendler}></div>
                </div>
            </div>
        </section>
    )
}
