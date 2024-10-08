import { NavLink } from "react-router-dom"
import './Header.css'

export const Header = () => {
    return (
        <header className="header">
            <div className="header_container">
                <h1 className="logo" id='logo'>
                    <NavLink className={'logo_text'} to='/'>Лого</NavLink>
                </h1>
                <nav className="navbar_container">
                    <nav className="nav_list">
                        <li className="nav_item" id='about-us'>
                            <NavLink className={'nav_item_text'} to='/about-us'>О нас</NavLink>
                        </li>
                        <li className="nav_item" id='how_work'>
                            <NavLink className={'nav_item_text'} to='/how-does-this-work'>Как это работает</NavLink>
                        </li>
                        <li className="nav_item" id='comments'>
                            <NavLink className={'nav_item_text'} to='/comments'>Отзывы</NavLink>
                        </li>
                        <li className="nav_item" id='contacts'>
                            <NavLink className={'nav_item_text'} to='/contacts'>Контакты</NavLink>
                        </li>
                    </nav>
                    <nav className="burger-menu">
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                        <span className="burger-line"></span>
                    </nav>
                </nav>
                <div className="header_body">
                    <h2 className="slogan">
                        <span className="light_text">Вся жизнь - </span>
                        <span className="bold_text">путешествие!</span>
                    </h2>
                    <div className="search_tickets_menu">
                        <form className='form-content' >
                            <div className="direction_ticket">
                                <div className="direction_title">Направление</div>
                                <div className="input-container">
                                    <input type="text" className="input_form_tickets input_local" placeholder="Откуда" />
                                    <button className="btn_local_change"></button>
                                    <input type="text" className='input_form_tickets input_local' placeholder="Куда" />
                                </div>
                            </div>
                            <div className="data_ticket">
                                <div className="data_title">Дата</div>
                                <div className="input-container">
                                    <input type="date" className='input_form_tickets input_calendar' placeholder="ДД/ММ/ГГ" />
                                    <input type="date" className='input_form_tickets input_calendar' placeholder="ДД/ММ/ГГ" />
                                </div>
                            </div>
                            <button className="search_tickets_btn" type='submit'>Найти билеты</button>
                        </form>
                    </div>
                </div>
            </div>
        </header >
    )
}
