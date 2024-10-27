import './AboutUs.css'

export const AboutUs = () => {
    return (
        <section className='section_aboutUs' id='about_us-section'>
            <div className="row">
                <div className="col-12">
                    <h2 className='about_us_title'>О нас</h2>
                </div>
            </div>
            <div className="row p-0 m-0">
                <div className="container-fluid d-flex p-0 about-us-container">
                    <div className="col-lg-10 about_us_textContainer">
                        <p className="about_us_text">Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем <br />все больше людей заказывают жд билеты через интернет.</p>
                        <p className="about_us_text">Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать? <br />Мы расскажем о преимуществах заказа через интернет.</p>
                        <p className="about_us_text text_bold">Покупать жд билеты дешево можно за 90 суток до отправления поезда. <br />Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}