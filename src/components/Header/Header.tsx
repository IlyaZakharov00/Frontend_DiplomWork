import "./Header.css";
import React, { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchCities } from "../redux/async action/searchCities";
import searchTicketsSlice from "../redux/slices/searchTicketsSlice";
import sortedCitiesListSlice from "../redux/slices/sortedCitiesList";
import { NavBar } from "../NavBar/NavBar";

export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	
	const openSearchTicketsPage = useSelector((state: any) => state.searchTicketsState.openSearchTicketsPage)
	const sortedListFrom = useSelector((state: any) => state.sortedCitiesList.sortedListFrom)
	const sortedListTo = useSelector((state: any) => state.sortedCitiesList.sortedListTo)
	const from_city = useSelector((state: any) => state.sortedCitiesList.from_city)
	const to_city = useSelector((state: any) => state.sortedCitiesList.to_city)

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

	const changleCitiesHedler = () => {
		dispatch(sortedCitiesListSlice.actions.changeCitites());
		const from_city_input = document.getElementById("from_city") as HTMLInputElement;
		const to_city_input = document.getElementById("to_city") as HTMLInputElement;

		let tmp = from_city.name;
		from_city_input.value = to_city.name;
		to_city_input.value = tmp;
	}

	const choiceCityHedler = (e: any) => {
		const input = e.target.closest('.input-with-dropdown').querySelector('.input_form_tickets')
		const idCity = e.target.getAttribute('id') as string;
		const typeAction = input.getAttribute('id') as string;
		input.value = e.target.textContent.toUpperCase();

		dispatch(sortedCitiesListSlice.actions.choiceCity({
			type: typeAction,
			payload: {
				_id: idCity,
				name: e.target.textContent.toUpperCase(),
			},
		}))
	}

	return (
		<header className="header">
			<div className={openSearchTicketsPage ? "header_container-choiceTrain" : "header_container"}>
				<NavBar />
				<div className={openSearchTicketsPage ? "header_body-choiceTrain" : 'header_body'}>
					{openSearchTicketsPage ? <></> :
						<h2 className="slogan">
							<span className="light_text">Вся жизнь - </span>
							<span className="bold_text">путешествие!</span>
						</h2>
					}
					<div className={openSearchTicketsPage ? "search_tickets_menu-choiceTrain" : 'search_tickets_menu'}>
						<form className={openSearchTicketsPage ? "form-content-choiceTrain" : "form-content"} id="formSearch" onSubmit={searchTickets}>
							<div className={openSearchTicketsPage ? 'direction_ticket-choiceTrain' : 'direction_ticket'}>
								<div className="direction_title">Направление</div>
								<div className={openSearchTicketsPage ? "input-container-choiceTrain" : "input-container"}>
									<div className={openSearchTicketsPage ? 'input_form_tickets-choiceTrain from_city' : 'input-with-dropdown from_city'}>
										<input type="text" id="from_city" className={openSearchTicketsPage ? 'input_form_tickets-choiceTrain input_local' : 'input_form_tickets input_local'} placeholder="Откуда" onChange={changeInputCity} required autoComplete="off" />
										{sortedListFrom.length !== 0 ?
											<div className="dropdown-container">
												{sortedListFrom.map((item: { _id: string, name: string }) => {
													return (
														<div className="dropdown-item" id={item._id} onClick={choiceCityHedler} key={item._id}>{item.name}</div>
													)
												})}
											</div> : <></>}
									</div>
									<button className="btn_local_change" onClick={changleCitiesHedler}></button>
									<div className={openSearchTicketsPage ? 'input_form_tickets-choiceTrain to_city' : 'input-with-dropdown to_city'}>
										<input type="text" id="to_city" className={openSearchTicketsPage ? 'input_form_tickets-choiceTrain input_local' : 'input_form_tickets input_local'} placeholder="Куда" onChange={changeInputCity} required autoComplete="off" />
										<div className="dropdown-container">
											{sortedListTo.map((item: { _id: string, name: string }) => {
												return (
													<div className="dropdown-item" id={item._id} onClick={choiceCityHedler} key={item._id}>{item.name}</div>
												)
											})}
										</div>
									</div>
								</div>
							</div>
							<div className={openSearchTicketsPage ? "data_ticket-choiceTrain" : "data_ticket"}>
								<div className="data_title">Дата</div>
								<div className={openSearchTicketsPage ? 'input-container-choiceTrain' : 'input-container'}>
									<input type="date" id="data_start" className={openSearchTicketsPage ? "input_form_tickets-choiceTrain input_calendar" : "input_form_tickets input_calendar"} placeholder="ДД/ММ/ГГ" />
									<input type="date" id="data_end" className={openSearchTicketsPage ? "input_form_tickets-choiceTrain input_calendar" : "input_form_tickets input_calendar"} placeholder="ДД/ММ/ГГ" />
								</div>
								<button className={openSearchTicketsPage ? "search_tickets_btn-choiceTrain" : "search_tickets_btn"} type="submit">Найти билеты</button>
							</div>
						</form>
					</div>
				</div>
			</div >
		</header >
	);
};
