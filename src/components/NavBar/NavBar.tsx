import { NavLink } from 'react-router-dom'
import './NavBar.css'

export const NavBar = () => {
    return (
        <>
            <h1 className="logo" id="logo">
                <NavLink className={"logo_text"} to="/Frontend_DiplomWork">Лого</NavLink>
            </h1>
            <nav className="navbar_container">
                <nav className="nav_list">
                    <li className="nav_item" id="about-us">
                        <NavLink className={"nav_item_text"} to="/Frontend_DiplomWork/about-us">О нас</NavLink>
                    </li>
                    <li className="nav_item" id="how_work">
                        <NavLink className={"nav_item_text"} to="/Frontend_DiplomWork/how-does-this-work">Как это работает</NavLink>
                    </li>
                    <li className="nav_item" id="comments">
                        <NavLink className={"nav_item_text"} to="/Frontend_DiplomWork/comments">Отзывы</NavLink>
                    </li>
                    <li className="nav_item" id="contacts">
                        <NavLink className={"nav_item_text"} to="/Frontend_DiplomWork/contacts">Контакты</NavLink>
                    </li>
                </nav>
                <nav className="burger-menu">
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                    <span className="burger-line"></span>
                </nav>
            </nav>
        </>
    )
}
