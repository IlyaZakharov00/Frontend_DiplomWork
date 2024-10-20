import { NavLink } from 'react-router-dom'
import './NavBar.css'
import { useSelector } from 'react-redux'

export const NavBar = () => {

    const isOpenSearchTicketsPage = useSelector((state: any) => state.searchTicketsState.isOpenSearchTicketsPage)

    const scrollFromContainer = (e: any) => {
        if (isOpenSearchTicketsPage) return
        const id = e.target.getAttribute('data-id')
        const element = document.getElementById(id)
        console.log(id, element)
        element?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    }

    return (
        <>
            <h1 className="logo" id="logo">
                <NavLink className={"logo_text"} to="/Frontend_DiplomWork">Лого</NavLink>
            </h1>
            <nav className="navbar_container">
                <nav className="nav_list">
                    <li className="nav_item" id="about-us">
                        <NavLink className={"nav_item_text"} to="/Frontend_DiplomWork" onClick={scrollFromContainer} data-id='about_us-section'>О нас</NavLink>
                    </li>
                    <li className="nav_item" id="how_work">
                        <NavLink className={"nav_item_text"} to="/Frontend_DiplomWork" onClick={scrollFromContainer} data-id='hdtw-section'>Как это работает</NavLink>
                    </li>
                    <li className="nav_item" id="comments">
                        <NavLink className={"nav_item_text"} to="/Frontend_DiplomWork" onClick={scrollFromContainer} data-id='comments-section'>Отзывы</NavLink>
                    </li>
                    <li className="nav_item" id="contacts">
                        <NavLink className={"nav_item_text"} to="/Frontend_DiplomWork" onClick={scrollFromContainer} data-id='contacts-section'>Контакты</NavLink>
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
