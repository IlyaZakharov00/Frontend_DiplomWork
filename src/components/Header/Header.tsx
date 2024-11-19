import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Header.css";
import { searchCities } from "../redux/async action/searchCities";
import { NavBar } from "../NavBar/NavBar";
import { ChoiceTrainMenu } from "../ChoiceTrainMenu/ChoiceTrainMenu";
import { LoadingCities } from "../Loading/LoadingCities/LoadingCities";
import { ErrorCities } from "../Error/ErrorCities/ErrorCities";
import sortedCitiesListSlice from "../redux/slices/sortedCitiesList";
import searchSeatsSlice from "../redux/slices/searchSeatsSlice";
import searchTicketsSlice from "../redux/slices/searchTicketsSlice";
import { TState } from "../redux/types/State/State";
import { searchDirections } from "../redux/async action/searchDirections";

export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const menuState = useSelector((state: TState) => state.menuState);
	const state = useSelector((state: TState) => state.searchTicketsState);

	const { loading_fromCity, error_fromCity, loading_toCity, error_toCity, sortedListFrom, sortedListTo, from_city, to_city } = useSelector((state: TState) => state.sortedCitiesList)

	const searchTickets = async (e: React.FormEvent) => {
		e.preventDefault();
		if (menuState.ticekts) {
			dispatch(searchDirections(state));
			return;
		}
		dispatch(searchSeatsSlice.actions.closeChoiceSeats());
		navigate("/Frontend_DiplomWork/choiceTrain");
	};

	const changeInputCityHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const typeAction = e.target.getAttribute('id') as string;

		if (e.target.value === '') {
			dispatch(sortedCitiesListSlice.actions.addCities({ type: typeAction, payload: [] }))
			return;
		};

		dispatch(searchCities({ cityName: e.target.value, typeAction }));
	}

	const changeCitiesHedler = (e: React.MouseEvent) => {
		e.preventDefault();
		dispatch(sortedCitiesListSlice.actions.changeCitites());
		dispatch(searchTicketsSlice.actions.changeCitites());

		const from_city_input = document.getElementById("from_city") as HTMLInputElement;
		const to_city_input = document.getElementById("to_city") as HTMLInputElement;

		let tmp = from_city.name;
		from_city_input.value = to_city.name;
		to_city_input.value = tmp;
	}

	const choiceCityHedler = (e: React.MouseEvent<HTMLElement>) => {
		const div_city = e.target as HTMLDivElement;
		const input_with_dropdown = div_city.closest('.input-with-dropdown') as HTMLDivElement;
		const input = input_with_dropdown.querySelector('.input_local') as HTMLInputElement;
		const idCity = div_city.getAttribute('id') as string;
		const typeAction = input.getAttribute('id') as string;
		const name_city = div_city.textContent as string;
		input.value = name_city.toUpperCase();

		dispatch(sortedCitiesListSlice.actions.choiceCity({
			type: typeAction,
			payload: {
				_id: idCity,
				name: name_city.toUpperCase(),
			},
		}))

		dispatch(searchTicketsSlice.actions.addCities({
			type: typeAction,
			payload: {
				_id: idCity,
				name: name_city.toUpperCase(),
			},
		}));
	}

	const hendlerChangeDate = (e: React.ChangeEvent<HTMLInputElement>) => {
		const dataId = e.target.getAttribute('id');
		const data = e.target.value;
		dispatch(searchTicketsSlice.actions.addDates({ type: dataId, payload: data }));
	}

	return (
		<header className={menuState.ticekts ? 'header-choiceTrain' : menuState.successOrder ? "header-succesOrder" : 'header'}>
			<NavBar />
			<div className={menuState.ticekts ? "header_container-choiceTrain" : "justify-content-lg-end justify-content-center header_container"}>
				<div className="row m-0 d-flex">
					<div className="d-flex justify-content-evenly wrapper-body p-0 align-items-center flex-lg-row flex-column ">
						{menuState.successOrder ? <></> :
							<>
								{menuState.ticekts ? <></> :
									<div className="col-lg-4 col-6 pt-lg-0 pt-5">
										<h2 className="slogan">
											<span className="light_text">Вся жизнь - </span>
											<span className="bold_text">путешествие!</span>
										</h2>
									</div>
								}
								<div className={menuState.ticekts ? 'col-lg-9 col-12 m-auto col-7 mt-lg-5 mt-5 search_tickets_menu bg-black bg-opacity-75' : 'col-lg-5 col-7 mt-lg-5 mt-5 search_tickets_menu bg-black bg-opacity-75'}>
									<form className={menuState.ticekts ? "form_content d-flex justify-content-xl-between align-items-baseline gap-5 flex-xl-nowrap flex-lg-nowrap flex-wrap justify-content-center" : "form_content"} id="formSearch" onSubmit={searchTickets}>
										<div className={menuState.ticekts ? 'direction_ticket w-50' : 'direction_ticket'}>
											<div className="direction_title">Направление</div>
											<div className="input_container flex-lg-row flex-column">
												<div className='input-with-dropdown from_city'>
													<input type="text" id="from_city" className='input_form_tickets input_local' placeholder="Откуда" onChange={changeInputCityHendler} required autoComplete="off" />
													{loading_fromCity ? <LoadingCities /> :
														error_fromCity ? <ErrorCities /> :
															<div className="dropdown-container">
																{sortedListFrom.map((item) => {
																	return (
																		<div className="dropdown-item" id={item._id} onClick={choiceCityHedler} key={item._id}>{item.name}</div>
																	)
																})}
															</div>}
												</div>
												<button className="btn_local_change" onClick={changeCitiesHedler}></button>
												<div className='input-with-dropdown to_city'>
													<input type="text" id="to_city" className='input_form_tickets input_local' placeholder="Куда" onChange={changeInputCityHendler} required autoComplete="off" />
													{loading_toCity ? <LoadingCities /> :
														error_toCity ? <ErrorCities /> :
															<div className="dropdown-container">
																{sortedListTo.map((item) => {
																	return (
																		<div className="dropdown-item" id={item._id} onClick={choiceCityHedler} key={item._id}>{item.name}</div>
																	)
																})}
															</div>}
												</div>
											</div>
										</div>
										<div className={menuState.ticekts ? "data_ticket w-50" : "data_ticket"}>
											<div className="data_title">Дата</div>
											<div className='flex-lg-row flex-column input_container'>
												<input type="date" id="data_start" className="input_form_tickets input_calendar" placeholder="ДД/ММ/ГГ" onChange={hendlerChangeDate} />
												<button className="btn_local_change hidden" disabled></button>
												<input type="date" id="data_end" className="input_form_tickets input_calendar" placeholder="ДД/ММ/ГГ" onChange={hendlerChangeDate} />
											</div>
											<div className="btn-container d-flex justify-content-end">
												<button className="search_tickets_btn" type="submit">Найти билеты</button>
											</div>
										</div>
									</form>
								</div>
							</>
						}
					</div>
				</div>
			</div >
			{menuState.ticekts ? <ChoiceTrainMenu /> : <></>}
		</header >
	);
};