import user_1 from "../../static-files/images/user_photo_1.png"
import user_2 from "../../static-files/images/user_photo_2.png"
import user_3 from '../../static-files/images/Heisenberg.png'
import user_4 from '../../static-files/images/Jack Sparrow.png'
import user_5 from '../../static-files/images/Harry Potter.jpg'
import user_6 from '../../static-files/images/Volan De Mort.png'
import user_7 from '../../static-files/images/Spider Man.jpg'
import user_8 from '../../static-files/images/Remi.png'
import './Comments.css'

export const Comments = () => {

    return (
        <section className="comments_container d-flex flex-column text-center gx-0 pt-lg-5 px-lg-5 mx-lg-5" id="comments-section">
            <div className="row pt-lg-5 pt-5 ps-lg-5 ms-lg-3 gx-0">
                <div className="col-xl-2 col-lg-3 col-12 pt-lg-5 px-0">
                    <h2 className="comments_title pt-lg-2 ps-lg-4">Отзывы</h2>
                </div>
            </div>
            <div className="row gx-0">
                <div className="col-xl-10 col-12 pt-lg-5 pt-5 mt-lg-3 m-auto p-0 mt-sm-5">

                    <div id="carouselExampleIndicators" className="carousel slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className="" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className="" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className="" aria-label="Slide 4"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <ul className="comments_items d-flex flex-xl-row flex-lg-column flex-column align-items-center justify-content-between p-0 mx-4">
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
                            <div className="carousel-item">
                                <ul className="comments_items d-flex flex-xl-row flex-lg-column flex-column align-items-center justify-content-between p-0 mx-4">
                                    <li className="item_container d-lg-flex align-items-center flex-xl-row">
                                        <img src={user_3} alt="user_photo" className="user_photo user_photo_first" />
                                        <div className="comment_content d-flex flex-column text-start ps-lg-4 w-xl-50 w-100">
                                            <div className="user_name">Уолтер Вайт</div>
                                            <p className="user_comment">"Отличные поезда!"
                                            </p>
                                        </div>
                                    </li>
                                    <li className="item_container d-lg-flex align-items-center flex-xl-row">
                                        <img src={user_4} alt="user_photo" className="user_photo user_photo_second" />
                                        <div className="comment_content d-flex flex-column  text-start px-lg-4 w-xl-50 w-100">
                                            <div className="user_name">Капитан Джек Воробей</div>
                                            <p className="user_comment">
                                                "На корабле было бы лучше!"
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <ul className="comments_items d-flex flex-xl-row flex-lg-column flex-column align-items-center justify-content-between p-0 mx-4">
                                    <li className="item_container d-lg-flex align-items-center flex-xl-row">
                                        <img src={user_5} alt="user_photo" className="user_photo user_photo_first" />
                                        <div className="comment_content d-flex flex-column text-start ps-lg-4 w-xl-50 w-100">
                                            <div className="user_name">Гарри Поттер</div>
                                            <p className="user_comment">"Поедем в Хогвартс."
                                            </p>
                                        </div>
                                    </li>
                                    <li className="item_container d-lg-flex align-items-center flex-xl-row">
                                        <img src={user_6} alt="user_photo" className="user_photo user_photo_second" />
                                        <div className="comment_content d-flex flex-column  text-start px-lg-4 w-xl-50 w-100">
                                            <div className="user_name">Волан Де Морт</div>
                                            <p className="user_comment">
                                                "Авада Кедавра!"
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="carousel-item">
                                <ul className="comments_items d-flex flex-xl-row flex-lg-column flex-column align-items-center justify-content-between p-0 mx-4">
                                    <li className="item_container d-lg-flex align-items-center flex-xl-row">
                                        <img src={user_7} alt="user_photo" className="user_photo user_photo_first" />
                                        <div className="comment_content d-flex flex-column text-start ps-lg-4 w-xl-50 w-100">
                                            <div className="user_name">Человек Паук</div>
                                            <p className="user_comment">"Быстрее на паутине!."
                                            </p>
                                        </div>
                                    </li>
                                    <li className="item_container d-lg-flex align-items-center flex-xl-row">
                                        <img src={user_8} alt="user_photo" className="user_photo user_photo_second" />
                                        <div className="comment_content d-flex flex-column  text-start px-lg-4 w-xl-50 w-100">
                                            <div className="user_name">Рэми</div>
                                            <p className="user_comment">
                                                "Мой любимый вагон - вагон ресторан!"
                                            </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mx-lg-0 mt-lg-5 pt-lg-5 pt-5 gap-0 mb-5">
            </div>
        </section>
    )
}
