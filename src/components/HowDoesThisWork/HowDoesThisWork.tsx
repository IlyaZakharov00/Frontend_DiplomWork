import './HowDoesThisWork.css'
import icon_1 from '../../static-files/images/hdtw_image_1.png'
import icon_2 from '../../static-files/images/hdtw_image_2.png'
import icon_3 from '../../static-files/images/hdtw_image_3.png'

export const HowDoesThisWork = () => {
    return (
        <section className='hdtw-container' id='hdtw-section'>
            <div className="row m-0 p-0">
                <div className="col-12 d-lg-flex justify-content-between align-items-center text-center hdtw-header-container pt-sm-5">
                    <h2 className="hdtw_logo">Как это работает</h2>
                    <button className="btn_findMore mt-lg-0 mt-5">Узнать больше</button>
                </div>
            </div>
            <div className="row m-0 p-0">
                <div className="col-md-8 m-auto text-center ">
                    <ul className="steps_container d-flex flex-lg-row flex-column justify-content-evenly p-0">
                        <li className="col-lg-2 hdtw_item">
                            <img className='hdtw_image' src={icon_1} alt="icon" />
                            <span className="hdtw_item_text first_text d-block">Удобный заказ <br /> на сайте</span>
                        </li>
                        <li className="col-lg-2 hdtw_item">
                            <img className='hdtw_image' src={icon_2} alt="icon" />
                            <span className="hdtw_item_text second_text d-block">Нет необходимости ехать в офис</span>
                        </li>
                        <li className="col-lg-2 hdtw_item">
                            <img className='hdtw_image' src={icon_3} alt="icon" />
                            <span className="hdtw_item_text third_text d-block">Огромный выбор направлений</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}