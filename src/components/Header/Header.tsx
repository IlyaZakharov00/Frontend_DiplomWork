import "./Header.css";
import { NavLink } from "react-router-dom";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchCities } from "../redux/async action/searchCities";
import searchTicketsSlice from "../redux/slices/searchTicketsSlice";

export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const searchTickets = async (e: FormEvent) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		const city_from = form.querySelector('[id = "city_from"]') as HTMLInputElement;

		const city_to = form.querySelector('[id = "city_to"]') as HTMLInputElement;

		const date_start = form.querySelector('[id = "data_start"]') as HTMLInputElement;

		const date_end = form.querySelector('[id = "data_end"]') as HTMLInputElement;


		const cityFrom = await dispatch(searchCities(city_from.value));
		const cityTo = await dispatch(searchCities(city_to.value));

		const formDataCities = {
			from_city: cityFrom.payload[0],
			to_city: cityTo.payload[0],
		};

		const formDataDates = {
			date_start: date_start.value,
			date_end: date_end.value,
		}

		// const formSearchDirections = {
		// 	formDataCities,
		// 	formDataDates
		// }


		dispatch(searchTicketsSlice.actions.addCities(formDataCities));
		dispatch(searchTicketsSlice.actions.addDates(formDataDates));

		navigate("/Frontend_DiplomWork/choiceTrain");
	};

	return (
		<header className="header">
			<div className="header_container">
				<h1 className="logo" id="logo">
					<NavLink className={"logo_text"} to="/">
						Лого
					</NavLink>
				</h1>
				<nav className="navbar_container">
					<nav className="nav_list">
						<li className="nav_item" id="about-us">
							<NavLink className={"nav_item_text"} to="/about-us">
								О нас
							</NavLink>
						</li>
						<li className="nav_item" id="how_work">
							<NavLink className={"nav_item_text"} to="/how-does-this-work">
								Как это работает
							</NavLink>
						</li>
						<li className="nav_item" id="comments">
							<NavLink className={"nav_item_text"} to="/comments">
								Отзывы
							</NavLink>
						</li>
						<li className="nav_item" id="contacts">
							<NavLink className={"nav_item_text"} to="/contacts">
								Контакты
							</NavLink>
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
						<form className="form-content" onSubmit={searchTickets}>
							<div className="direction_ticket">
								<div className="direction_title">Направление</div>
								<div className="input-container">
									<input
										type="text"
										id="city_from"
										className="input_form_tickets input_local"
										placeholder="Откуда"
									/>
									<button className="btn_local_change"></button>
									<input
										type="text"
										id="city_to"
										className="input_form_tickets input_local"
										placeholder="Куда"
									/>
								</div>
							</div>
							<div className="data_ticket">
								<div className="data_title">Дата</div>
								<div className="input-container">
									<input
										type="date"
										id="data_start"
										className="input_form_tickets input_calendar"
										placeholder="ДД/ММ/ГГ"
									/>
									<input
										type="date"
										id="data_end"
										className="input_form_tickets input_calendar"
										placeholder="ДД/ММ/ГГ"
									/>
								</div>
							</div>
							<button className="search_tickets_btn" type="submit">
								Найти билеты
							</button>
						</form>
					</div>
				</div>
			</div>
		</header>
	);
};
