import './HowDoesThisWork.css'
import icon_1 from '../../static-files/images/hdtw_image_1.png'
import icon_2 from '../../static-files/images/hdtw_image_2.png'
import icon_3 from '../../static-files/images/hdtw_image_3.png'

export const HowDoesThisWork = () => {
    return (
        <>
            <section className="hdtw_container">
                <div className="hdtw_header">
                    <h2 className="hdtw_logo">Как это работает</h2>
                    <button className="btn_findMore">Узнать больше</button>
                </div>
                <ul className="steps_container">
                    <li className="hdtw_item">
                        <img className='hdtw_image' src={icon_1} alt="icon" />
                        <span className="hdtw_item_text">Удобный заказ<br></br>на сайте</span>
                    </li>
                    <li className="hdtw_item">
                        <img className='hdtw_image' src={icon_2} alt="icon" />
                        <span className="hdtw_item_text">Нет необходимости<br></br>ехать в офис</span>
                    </li>
                    <li className="hdtw_item">
                        <img className='hdtw_image' src={icon_3} alt="icon" />
                        <span className="hdtw_item_text">Огромный выбор<br></br>направлений</span>
                    </li>
                </ul>
            </section>
        </>
    )
}
