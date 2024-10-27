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
            <div className="row m-0  bg-black bg-opacity-50">
                <div className="col-md-12">
                    <h1 className="logo_container" id="logo">
                        <NavLink className={"logo_text "} to="/Frontend_DiplomWork">Лого</NavLink>
                    </h1>
                </div>
            </div>
            <nav className="navbar navbar-expand-sm p-0 m-0">
                <div className='row m-0 p-0 container-fluid '>
                    <div className="col-lg-7 w-100 navbar_container">
                        <button className='navbar-toggler bg-white m-3' type='button' data-bs-toggle='collapse' data-bs-target='#navbarContent' aria-controls='navbarContent' aria-expanded='false'>
                            <span className='navbar-toggler-icon bg-white'></span>
                        </button>
                        <div className="collapse navbar-collapse navbar_container w-100" id='navbarContent'>
                            <ul className='d-sm-flex flex-sm-column flex-md-row w-100 navList'>
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
                            </ul>
                        </div>
                    </div>
                </div >
            </nav >
        </>
    )
}