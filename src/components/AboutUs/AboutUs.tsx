import './AboutUs.css'

export const AboutUs = () => {

    return (
        <>
            <section className="about_us_container">
                <h1 className='about_us_title'>О нас</h1>
                <article className="about_us_text_container">
                    <div className='left-line'></div>
                    <div className='about_us_content_container'>
                        <p className="about_us_text">Мы рады видеть вас! Мы рботаем для Вас с 2003 года. 14 лет мы наблюдаем, как с каждым днем
                            <br></br>
                            все больше людей заказывают жд билеты через интернет</p>
                        <p className="about_us_text">Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика, но стоит ли это делать?
                            <br></br>
                            Мы расскажем о преимуществах заказа через интернет.</p>
                        <p className="about_us_text text_bold">Покупать жд билеты дешево можно за 90 суток до отправления поезда.
                            <br></br>
                            Благодаря динамическому ценообразованию цена на билеты в это время самая низкая.</p>
                    </div>
                </article>
            </section>
        </>
    )
}
