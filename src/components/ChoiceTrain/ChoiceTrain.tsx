import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import './ChoiceTrain.css'
import icon_arrow_right from '../../static-files/icons/choiceTrain/icon_pages_arrow_right.svg'
import icon_arrow_left from '../../static-files/icons/choiceTrain/icon_pages_arrow_left.svg'
import { Ticket } from '../Ticket/Ticket'
import { Loading } from '../Loading/Loading'
import { NothingSearched } from './NothingSearched/NothingSearched'
import { ChoiceTrainAside } from './ChoiceTrainAside/ChoiceTrainAside'
import { Error } from '../Error/Error'
import searchTicketsSlice from '../redux/slices/searchTicketsSlice'
import searchSeatsSlice from '../redux/slices/searchSeatsSlice'
import { searchDirections } from '../redux/async action/searchDirections'
import menuSlice from '../redux/slices/menuSlice'
import { TState } from '../redux/types/State/State'

export const ChoiceTrain = () => {
    const dispatch = useDispatch();

    const state = useSelector((state: TState) => state.searchTicketsState);
    const searchSeatsState = useSelector((state: TState) => state.searchSeatsState);
    const isLoading = state.loading || searchSeatsState.loading;
    const isError = state.error || searchSeatsState.error;

    useEffect(() => {
        dispatch(searchDirections(state));
        dispatch(menuSlice.actions.openTickets());
    }, []);

    useEffect(() => {
        dispatch(searchDirections(state));
        dispatch(searchSeatsSlice.actions.closeChoiceSeats());
    }, [state.class.have_first_class, state.class.have_fourth_class, state.class.have_second_class, state.class.have_third_class, state.comfortOptions.have_air_conditioning, state.comfortOptions.have_express, state.comfortOptions.have_wifi, state.limit, state.offset, state.sort, state.prices.price_from, state.prices.price_to, state.times.end_arrival_hour_from, state.times.end_arrival_hour_to, state.times.end_departure_hour_from, state.times.end_departure_hour_to, state.times.start_arrival_hour_from, state.times.start_arrival_hour_to, state.times.start_departure_hour_from, state.times.start_departure_hour_to])

    const countNumberOfPages = () => Array(Math.ceil(state.responseFromServer.total_count / (Number(state.limit) ? Number(state.limit) : 5))).fill('');

    const changeActiveShowNumber = (e: React.MouseEvent) => {
        const activeNow = document.querySelector(".active_showNumber")
        const clickedNumber = e.target as HTMLDivElement;
        const number = Number(clickedNumber.textContent);
        activeNow?.classList.remove('active_showNumber');
        clickedNumber.classList.add('active_showNumber')
        dispatch(searchTicketsSlice.actions.addLimit(number));
    }

    const hendlerChangeSelect = (e: React.ChangeEvent) => {
        const selectedSort = e.target as HTMLSelectElement;
        dispatch(searchTicketsSlice.actions.addSort(selectedSort.value));
    }

    const changeActivePage = (e: React.MouseEvent) => {
        const pageElement = e.target as HTMLElement;
        const pageNumber = pageElement.textContent;
        dispatch(searchTicketsSlice.actions.addActivePage(pageNumber));
        dispatch(searchDirections(state));
    }

    const nextPageHendler = () => {
        dispatch(searchTicketsSlice.actions.nextPage());
        dispatch(searchDirections(state));
    }

    const prevPageHendler = () => {
        dispatch(searchTicketsSlice.actions.prevPage());
        dispatch(searchDirections(state));
    }

    return (
        <>
            {isError ? <Error /> :
                isLoading ? <Loading /> :
                    <div className="choiceTrain_container mt-5">
                        <div className="row m-auto pt-5 d-flex justify-content-between w-75">
                            <div className="col-xl-3 col-lg-12 p-0">
                                <ChoiceTrainAside />
                            </div>
                            <div className="col-xl-8 col-lg-12 p-0">
                                {(state.responseFromServer.items && state.responseFromServer.items.length !== 0) ?
                                    <main className="choiceTrain_main w-100">
                                        <div className="settings_tickets d-flex flex-xl-row flex-column">
                                            <div className="searched_tickets">Найдено: {state.responseFromServer.total_count}</div>
                                            <label className='select_options'>
                                                <div className="sorting_by">Сортировать по:</div>
                                                <select className='select_option_input' onChange={hendlerChangeSelect} defaultValue={state.sort ? state.sort : 'date'}>
                                                    <option value='date' >времени</option>
                                                    <option value='price'>стоимости</option>
                                                    <option value='duration'>длительности</option>
                                                </select>
                                            </label>
                                            <div className="show">
                                                <div className='show_by'>Показывать по:</div>
                                                <div className={state.limit == 5 ? 'show_number active_showNumber' : 'show_number'} onClick={changeActiveShowNumber}>5</div>
                                                <div className={state.limit == 10 ? 'show_number active_showNumber' : 'show_number'} onClick={changeActiveShowNumber}>10</div>
                                                <div className={state.limit == 20 ? 'show_number active_showNumber' : 'show_number'} onClick={changeActiveShowNumber}>20</div>
                                            </div>
                                        </div>
                                        <div className="tickets_container">
                                            {state.responseFromServer.items.map((item: any, index: number) => <Ticket item={item} key={index} />)}
                                        </div>
                                        {state.responseFromServer.items && state.responseFromServer.items.length !== 0 ?
                                            <div className="pages d-flex align-items-center text-center justify-content-end my-5 gap-2">
                                                <div className="arrow-left" onClick={prevPageHendler}>
                                                    <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns={icon_arrow_left}>
                                                        <path d="M6.33625 14.5C9.82076 11.0945 13.1201 7.89424 16.3731 4.72332C17.2669 3.85207 17.1987 2.34671 16.3094 1.47083C15.4416 0.616038 14.1195 0.686134 13.2516 1.54092C9.06317 5.66637 4.86165 9.80466 0.72327 13.8808C0.325571 14.2725 0.325472 14.9137 0.723293 15.3053C4.70972 19.2293 8.86225 23.2984 12.9949 27.3844C13.8955 28.2748 15.2685 28.3485 16.1445 27.4338C16.9987 26.5419 17.0517 25.0479 16.1744 24.1785C13.0758 21.1078 9.80952 17.8945 6.33625 14.5Z" fill="#928F94" />
                                                    </svg>
                                                </div>
                                                {countNumberOfPages().map((_item, index) => {
                                                    if (index > 0 && index <= 3) {
                                                        return (
                                                            <div className={index == state.activePage ? 'page-number page-active' : 'page-number'} onClick={changeActivePage} key={index}>{index}</div>
                                                        )
                                                    } else if (index == state.activePage) {
                                                        return (
                                                            <div className={index == state.activePage ? 'page-number page-active' : 'page-number'} onClick={changeActivePage} key={index}>{index}</div>
                                                        )
                                                    } else if (index + 1 == countNumberOfPages().length) {
                                                        return (
                                                            <div className={index + 1 == state.activePage ? 'page-number page-active' : 'page-number'} onClick={changeActivePage} key={index}>{index + 1}</div>
                                                        )
                                                    }
                                                })}
                                                <div className="arrow-right" onClick={nextPageHendler} >
                                                    <svg width="18" height="29" viewBox="0 0 18 29" fill="none" xmlns={icon_arrow_right}>
                                                        <path d="M11.6637 14.5C8.17924 11.0945 4.87989 7.89424 1.62688 4.72332C0.733082 3.85207 0.801327 2.34671 1.69059 1.47083C2.55844 0.616038 3.88051 0.686134 4.74835 1.54092C8.93683 5.66637 13.1384 9.80466 17.2767 13.8808C17.6744 14.2725 17.6745 14.9137 17.2767 15.3053C13.2903 19.2293 9.13775 23.2984 5.00506 27.3844C4.10447 28.2748 2.7315 28.3485 1.85554 27.4338C1.00133 26.5419 0.948345 25.0479 1.82557 24.1785C4.92418 21.1078 8.19048 17.8945 11.6637 14.5Z" fill="#928F94" />
                                                    </svg>
                                                </div>
                                            </div> : <></>}
                                    </main> : <NothingSearched />
                                }
                            </div>
                        </div>
                    </div >
            }
        </>
    )
}

