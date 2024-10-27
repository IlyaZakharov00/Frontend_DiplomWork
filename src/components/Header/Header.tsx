import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FormEvent } from "react";
import { searchCities } from "../redux/async action/searchCities";
import { NavBar } from "../NavBar/NavBar";
import { ChoiceTrainMenu } from "../ChoiceTrainMenu/ChoiceTrainMenu";
import { searchDirections } from "../redux/async action/searchDirections";
import sortedCitiesListSlice from "../redux/slices/sortedCitiesList";
import searchTicketsSlice from "../redux/slices/searchTicketsSlice";

export const Header = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const isOpenSearchTicketsPage = useSelector((state: any) => state.searchTicketsState.isOpenSearchTicketsPage)

	const sortedListFrom = useSelector((state: any) => state.sortedCitiesList.sortedListFrom)
	const sortedListTo = useSelector((state: any) => state.sortedCitiesList.sortedListTo)

	const from_city = useSelector((state: any) => state.sortedCitiesList.from_city)
	const to_city = useSelector((state: any) => state.sortedCitiesList.to_city)

	const state = useSelector((state: any) => state.searchTicketsState);


	const searchTickets = async (e: FormEvent) => {
		e.preventDefault();
		dispatch(searchDirections(state));
		navigate("/Frontend_DiplomWork/choiceTrain");
	};

	const changeInputCityHendler = async (e: React.ChangeEvent<HTMLInputElement>) => {
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

	const changeCitiesHedler = (e: React.MouseEvent) => {
		e.preventDefault()
		dispatch(sortedCitiesListSlice.actions.changeCitites());
		dispatch(searchTicketsSlice.actions.changeCitites());

		const from_city_input = document.getElementById("from_city") as HTMLInputElement;
		const to_city_input = document.getElementById("to_city") as HTMLInputElement;

		let tmp = from_city.name;
		from_city_input.value = to_city.name;
		to_city_input.value = tmp;
	}

	const choiceCityHedler = (e: any) => {
		const input = e.target.closest('.input-with-dropdown').querySelector('.input_local')
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

		dispatch(searchTicketsSlice.actions.addCities({
			type: typeAction,
			payload: {
				_id: idCity,
				name: e.target.textContent.toUpperCase(),
			},
		}));
	}

	return (
		<header className={isOpenSearchTicketsPage ? 'header-choiceTrain' : 'header'}>
			<NavBar />
			<div className={isOpenSearchTicketsPage ? "header_container-choiceTrain" : "justify-content-lg-end justify-content-center header_container"}>
				<div className="row m-0 d-flex">
					<div className="d-flex justify-content-evenly wrapper-body p-0 align-items-center flex-lg-row flex-column ">
						{isOpenSearchTicketsPage ? <></> :
							<div className="col-lg-4 col-12 pt-lg-0 pt-5">
								<h2 className="slogan">
									<span className="light_text">Вся жизнь - </span>
									<span className="bold_text">путешествие!</span>
								</h2>
							</div>
						}
						<div className={isOpenSearchTicketsPage ? 'col-lg-9 col-12 m-auto col-7 mt-lg-5 mt-5 search_tickets_menu bg-black bg-opacity-75' : 'col-lg-5 col-7 mt-lg-5 mt-5 search_tickets_menu bg-black bg-opacity-75'}>
							<form className={isOpenSearchTicketsPage ? "form_content d-flex justify-content-xl-between align-items-baseline gap-5 flex-xl-nowrap flex-lg-nowrap flex-wrap justify-content-center" : "form_content"} id="formSearch" onSubmit={searchTickets}>
								<div className={isOpenSearchTicketsPage ? 'direction_ticket w-50' : 'direction_ticket'}>
									<div className="direction_title">Направление</div>
									<div className="input_container flex-lg-row flex-column">
										<div className='input-with-dropdown from_city'>
											<input type="text" id="from_city" className='input_form_tickets input_local' placeholder="Откуда" onChange={changeInputCityHendler} required autoComplete="off" />
											{sortedListFrom.length !== 0 ?
												<div className="dropdown-container">
													{sortedListFrom.map((item: { _id: string, name: string }) => {
														return (
															<div className="dropdown-item" id={item._id} onClick={choiceCityHedler} key={item._id}>{item.name}</div>
														)
													})}
												</div> : <></>
											}
										</div>
										<button className="btn_local_change" onClick={changeCitiesHedler}></button>
										<div className='input-with-dropdown to_city'>
											<input type="text" id="to_city" className='input_form_tickets input_local' placeholder="Куда" onChange={changeInputCityHendler} required autoComplete="off" />
											{sortedListTo.length !== 0 ?
												<div className="dropdown-container">
													{sortedListTo.map((item: { _id: string, name: string }) => {
														return (
															<div className="dropdown-item" id={item._id} onClick={choiceCityHedler} key={item._id}>{item.name}</div>
														)
													})}
												</div> : <></>
											}
										</div>
									</div>
								</div>
								<div className={isOpenSearchTicketsPage ? "data_ticket w-50" : "data_ticket"}>
									<div className="data_title">Дата</div>
									<div className='flex-lg-row flex-column input_container'>
										<input type="date" id="data_start" className="input_form_tickets input_calendar" placeholder="ДД/ММ/ГГ" />
										<button className="btn_local_change hidden" disabled></button>
										<input type="date" id="data_end" className="input_form_tickets input_calendar" placeholder="ДД/ММ/ГГ" />
									</div>
									<div className="btn-container d-flex justify-content-end">
										<button className="search_tickets_btn" type="submit">Найти билеты</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div >
			{isOpenSearchTicketsPage ? <ChoiceTrainMenu /> : <></>}
		</header >
	);
};