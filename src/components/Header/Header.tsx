import "./Header.css";
import { NavLink } from "react-router-dom";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchCities } from "../redux/async action/searchCities";
import searchTicketsSlice from "../redux/slices/searchTicketsSlice";
import sortedCitiesListSlice from "../redux/slices/sortedCitiesList";

export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const sortedListFrom = useSelector((state: any) => state.sortedCitiesList.sortedListFrom)
	const sortedListTo = useSelector((state: any) => state.sortedCitiesList.sortedListTo)

	console.log('render')

	const searchTickets = async (e: FormEvent) => {
		e.preventDefault();

		const form = e.target as HTMLFormElement;

		const from_city = form.querySelector('[id = "from_city"]') as HTMLInputElement;

		const to_city = form.querySelector('[id = "to_city"]') as HTMLInputElement;

		const date_start = form.querySelector('[id = "data_start"]') as HTMLInputElement;

		const date_end = form.querySelector('[id = "data_end"]') as HTMLInputElement;


		const cityFrom = await dispatch(searchCities(from_city.value));
		const cityTo = await dispatch(searchCities(to_city.value));

		const formDataCities = {
			from_city: cityFrom.payload[0],
			to_city: cityTo.payload[0],
		};

		const formDataDates = {
			date_start: date_start.value,
			date_end: date_end.value,
		}

		dispatch(searchTicketsSlice.actions.addCities(formDataCities));
		dispatch(searchTicketsSlice.actions.addDates(formDataDates));

		navigate("/Frontend_DiplomWork/choiceTrain");
	};

	const changeInputCity = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const sortCityList: string[] = [];
		const typeAction = e.target.getAttribute('id') as string;

		const cityListResponse = await dispatch(searchCities(e.target.value));

		if (e.target.value == '') {
			dispatch(sortedCitiesListSlice.actions.addCities({ type: typeAction, payload: sortCityList }))
			return;
		}

		const reg = new RegExp('^' + e.target.value, 'g')

		for (const city of cityListResponse.payload) {
			if (city.name.match(reg)) sortCityList.push(city)
		}

		dispatch(sortedCitiesListSlice.actions.addCities({ type: typeAction, payload: sortCityList }))
	}

	return (
		<header className="header">
			<div className="header_container">
				<h1 className="logo" id="logo">
					<NavLink className={"logo_text"} to="/Frontend_DiplomWork">Лого</NavLink>
				</h1>
				<nav className="navbar_container">
					<nav className="nav_list">
						<li className="nav_item" id="about-us">
							<NavLink className={"nav_item_text"} to="/Frontend_DiplomWork/about">О нас</NavLink>
						</li>
						<li className="nav_item" id="how_work">
							<NavLink className={"nav_item_text"} to="/how-does-this-work">Как это работает</NavLink>
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
				<div className="header_body">
					<h2 className="slogan">
						<span className="light_text">Вся жизнь - </span>
						<span className="bold_text">путешествие!</span>
					</h2>
					<div className="search_tickets_menu">
						<form className="form-content" id="formSearch" onSubmit={searchTickets}>
							<div className="direction_ticket">
								<div className="direction_title">Направление</div>
								<div className="input-container">
									<div className="input-with-dropdown">
										<input type="text" id="from_city" className="input_form_tickets input_local" placeholder="Откуда" onChange={changeInputCity} required autoComplete='off' />
										<div className="dropdown-container">
											{sortedListFrom.map((item: { _id: string, name: string }) => {
												return (
													<div className="dropdown-item">{item.name}</div>
												)
											})}
										</div>
									</div>
									<button className="btn_local_change"></button>
									<div className="input-with-dropdown">
										<input type="text" id="to_city" className="input_form_tickets input_local" placeholder="Куда" onChange={changeInputCity} required />
										<div className="dropdown-container">
											{sortedListTo.map((item: { _id: string, name: string }) => {
												return (
													<div className="dropdown-item">{item.name}</div>
												)
											})}
										</div>
									</div>
								</div>
							</div>
							<div className="data_ticket">
								<div className="data_title">Дата</div>
								<div className="input-container">
									<input type="date" id="data_start" className="input_form_tickets input_calendar" placeholder="ДД/ММ/ГГ" />
									<input type="date" id="data_end" className="input_form_tickets input_calendar" placeholder="ДД/ММ/ГГ" />
								</div>
							</div>
							<button className="search_tickets_btn" type="submit">Найти билеты</button>
						</form>
					</div>
				</div>
			</div>
		</header>
	);
};
