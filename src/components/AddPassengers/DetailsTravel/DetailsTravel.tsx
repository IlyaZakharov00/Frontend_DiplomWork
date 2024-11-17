import { useSelector } from 'react-redux'
import { TPassangersStateR } from '../../redux/types/Passengers/PassangersState'
import { TPriceStateR } from '../../redux/types/Price/PriceState'
import { TTicketsStateR } from '../../redux/types/Tickets/state'
import { TSeatsR } from '../../redux/types/Seats/SeatsState'
import icon_accordion_arrow from '../../../static-files/icons/aside/accordion_arrow.svg'
import icon_passengers from '../../../static-files/icons/aside/passengers.svg'
import icon_rub from '../../../static-files/icons/ticket/rub.svg'
import icon_arrow from '../../../static-files/icons/ticket/arrow_travel.svg'
import './DetailsTravel.css'
import moment from 'moment'

export const DetailsTravel = () => {
    const searchSeatsState = useSelector((state: TSeatsR) => state.searchSeatsState);
    const searchTicketsState = useSelector((state: TTicketsStateR) => state.searchTicketsState);
    const priceForTickets = useSelector((state: TPriceStateR) => state.priceForTickets);
    const passangersState = useSelector((state: TPassangersStateR) => state.passangersState);

    if (!searchSeatsState.train) return;

    return (
        <aside className="choiceTrain_aside">
            <div className="aboutTravel">
                <div className='detailsSection pt-4 pb-3 px-4'>
                    <h2 className='details_title'>Детали поездки</h2>
                </div>
                <div className='details_travelStart aboutTrainSection py-3'>
                    <div className="accordion accordion-flush" id="accordionFlushExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne">
                                <button className="accordion-button p-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <div className="info-container d-flex align-items-center">
                                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns={icon_accordion_arrow}>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23877 0 0 2.23853 0 5V21C0 23.7615 2.23877 26 5 26H27C29.7612 26 32 23.7615 32 21V5C32 2.23853 29.7612 0 27 0H5ZM17.8369 14.2236V17.3333C19.3442 15.8793 20.8667 14.4108 22.3154 13.0288C20.8521 11.6035 19.3442 10.135 17.8223 8.66663V11.949H9.68408V14.2236H17.8369Z" fill="#FFA800" />
                                        </svg>
                                        <h2 className='travelStart_title'>Туда</h2>
                                        <div className="travelStart_date">{searchTicketsState.dates.date_start}</div>
                                    </div>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div className="aboutTrain-container px-4">
                                    <div id="aboutTrain-info" className='mt-3'>
                                        <div className="info_about_choice_train d-flex justify-content-between">
                                            <div className="numberTrain-text">№ Поезда</div>
                                            <div className="numberTrain">{searchSeatsState.train.departure.train.name}</div>
                                        </div>
                                        <div className="info_about_choice_train d-flex justify-content-between">
                                            <div className="nameTrain-text">Название</div>
                                            <div className="nameTrain">{searchSeatsState.train.departure.from.city.name} <br></br>{searchSeatsState.train.departure.to.city.name}</div>
                                        </div>
                                    </div>
                                    <div id="aboutTrain-times-info" className='mt-5'>
                                        <div className="info_about_choice_train d-flex justify-content-between align-items-center">
                                            <div className="dates-times-start d-flex flex-column">
                                                <div className="time-start">{moment.unix(searchSeatsState.train.departure.from.datetime).format('HH:mm')}</div>
                                                <div className="date-start">{searchTicketsState.dates.date_start}</div>
                                            </div>
                                            <div className="duration-time">
                                                <div className="durationTime-text">{moment.unix(searchSeatsState.train.departure.duration).format("HH:mm")}</div>
                                                <svg className='durationTime_arrow' width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns={icon_arrow}>
                                                    <path d="M19.3627 20C19.3627 17.8073 19.3627 15.3821 19.3627 12.8239C12.8621 12.8239 6.46582 12.8239 0 12.8239C0 11.0299 0 9.36877 0 7.57475C6.32677 7.57475 12.7231 7.57475 19.3279 7.57475C19.3279 4.91694 19.3279 2.42525 19.3279 0C22.9432 3.3887 26.5238 6.77741 30 10.0664C26.5585 13.2558 22.9432 16.6445 19.3627 20Z" fill="#FFA800" fillOpacity="0.79" />
                                                </svg>
                                            </div>
                                            <div className="dates-times-end d-flex flex-column">
                                                <div className="time-end">{moment.unix(searchSeatsState.train.departure.to.datetime).format("HH:mm")}</div>
                                                <div className="date-end">{searchTicketsState.dates.date_end}</div>
                                            </div>
                                        </div>
                                        <div className="cities d-flex justify-content-between mt-3">
                                            <div className="cityStart">
                                                <div className="cityStart-name">
                                                    {searchSeatsState.train.departure.from.city.name}
                                                </div>
                                                <div className="cityStart-railwayStation">
                                                    {searchSeatsState.train.departure.from.railway_station_name} вокзал
                                                </div>
                                            </div>
                                            <div className="cityEnd text-end">
                                                <div className="cityEnd-name">
                                                    {searchSeatsState.train.departure.to.city.name}
                                                </div>
                                                <div className="cityEnd-railwayStation">
                                                    {searchSeatsState.train.departure.to.railway_station_name} вокзал
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='aboutTrain_citySecond aboutTrainSection py-3'>
                    <div className="accordion accordion-flush" id="accordionFlushExample_2">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="flush-headingOne_2">
                                <button className="accordion-button p-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne_2" aria-expanded="false" aria-controls="flush-collapseOne_2">
                                    <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns={icon_accordion_arrow}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23877 0 0 2.23853 0 5V21C0 23.7615 2.23877 26 5 26H27C29.7612 26 32 23.7615 32 21V5C32 2.23853 29.7612 0 27 0H5ZM17.8369 14.2236V17.3333C19.3442 15.8793 20.8667 14.4108 22.3154 13.0288C20.8521 11.6035 19.3442 10.135 17.8223 8.66663V11.949H9.68408V14.2236H17.8369Z" fill="#FFA800" />
                                    </svg>
                                    <h2 className='travelBack_title'>Обратно</h2>
                                    <div className="travelBack_date">{searchTicketsState.dates.date_end}</div>
                                </button>
                            </h2>
                            <div id="flush-collapseOne_2" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne_2" data-bs-parent="#accordionFlushExample_2">
                                <div className="aboutTrain-container px-4">
                                    <div id="aboutTrain-info" className='mt-3'>
                                        <div className="info_about_choice_train d-flex justify-content-between">
                                            <div className="numberTrain-text">№ Поезда</div>
                                            <div className="numberTrain">{searchSeatsState.train.departure.train.name}</div>
                                        </div>
                                        <div className="info_about_choice_train d-flex justify-content-between">
                                            <div className="nameTrain-text">Название</div>
                                            <div className="nameTrain">{searchSeatsState.train.departure.to.city.name} <br></br>{searchSeatsState.train.departure.from.city.name}</div>
                                        </div>
                                    </div>
                                    <div id="aboutTrain-times-info" className='mt-5'>
                                        <div className="info_about_choice_train d-flex justify-content-between align-items-center">
                                            <div className="dates-times-start d-flex flex-column">
                                                <div className="time-start">{moment.unix(searchSeatsState.train.departure.to.datetime).format("HH:mm")}</div>
                                                <div className="date-start">{searchTicketsState.dates.date_end}</div>
                                            </div>
                                            <div className="duration-time">
                                                <div className="durationTime-text">{moment.unix(searchSeatsState.train.departure.duration).format("HH:mm")}</div>
                                                <svg className='durationTime_arrow' width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns={icon_arrow}>
                                                    <path d="M19.3627 20C19.3627 17.8073 19.3627 15.3821 19.3627 12.8239C12.8621 12.8239 6.46582 12.8239 0 12.8239C0 11.0299 0 9.36877 0 7.57475C6.32677 7.57475 12.7231 7.57475 19.3279 7.57475C19.3279 4.91694 19.3279 2.42525 19.3279 0C22.9432 3.3887 26.5238 6.77741 30 10.0664C26.5585 13.2558 22.9432 16.6445 19.3627 20Z" fill="#FFA800" fillOpacity="0.79" />
                                                </svg>
                                            </div>
                                            <div className="dates-times-end d-flex flex-column">
                                                <div className="time-end">{moment.unix(searchSeatsState.train.departure.from.datetime).format("HH:mm")}</div>
                                                <div className="date-end">{searchTicketsState.dates.date_start}</div>
                                            </div>
                                        </div>
                                        <div className="cities d-flex justify-content-between mt-3">
                                            <div className="cityStart">
                                                <div className="cityStart-name">
                                                    {searchSeatsState.train.departure.to.city.name}
                                                </div>
                                                <div className="cityStart-railwayStation">
                                                    {searchSeatsState.train.departure.to.railway_station_name} вокзал
                                                </div>
                                            </div>
                                            <div className="cityEnd text-end">
                                                <div className="cityEnd-name">
                                                    {searchSeatsState.train.departure.from.city.name}
                                                </div>
                                                <div className="cityEnd-railwayStation">
                                                    {searchSeatsState.train.departure.from.railway_station_name} вокзал
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='aboutTrain_citySecond aboutTrainSection px-4 py-3'>
                    <div className="accordion accordion-flush" id="accordionFlushExample_3">
                        <div className="accordion-item">
                            <h2 className="accordion-header mb-3" id="flush-headingOne_3">
                                <button className="accordion-button p-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne_3" aria-expanded="false" aria-controls="flush-collapseOne_3">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns={icon_passengers}>
                                        <path d="M25.9721 26C17.2752 26 8.72031 26 0.165369 26C-0.219806 21.9313 -0.260351 20.3648 3.83467 18.4118C9.91638 15.5229 16.0792 15.5839 22.2014 18.4118C22.9921 18.7779 23.7219 19.2865 24.4111 19.8358C25.5058 20.7106 26.0735 21.8499 25.9924 23.2943C25.9518 24.1487 25.9721 25.0235 25.9721 26Z" fill="#FFA800" />
                                        <path d="M19.4841 6.44946C19.5044 10.0503 16.6054 13.0002 13.0172 13.0206C9.42899 13.0206 6.50977 10.091 6.50977 6.51049C6.50977 2.9503 9.38844 0.0411096 12.9158 0.00042166C16.5243 -0.0402663 19.4638 2.86892 19.4841 6.44946Z" fill="#FFA800" />
                                    </svg>
                                    <h2 className='passengers_title'>Пассажиры</h2>
                                </button>
                            </h2>
                            <div id="flush-collapseOne_3" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne_3" data-bs-parent="#accordionFlushExample_3">
                                <div className="aboutPassangers-container px-4">
                                    <div className="">{passangersState.countAdult ? `Взрослые: ${passangersState.countAdult}` : ""}</div>
                                    <div className="">{passangersState.countChild ? `Дети: ${passangersState.countChild}` : ""}</div>
                                    <div className="">{passangersState.countChildWithoutSeat ? `Дети "без места": ${passangersState.countChildWithoutSeat}` : ""}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="total-container d-flex justify-content-evenly align-items-center">
                    <div className="total-text">
                        Итог
                    </div>
                    <div className="total-sum">
                        {priceForTickets.sumPrice}
                        <svg className='ms-3' width="26" height="32" viewBox="0 0 16 19" fill="none" xmlns={icon_rub}>
                            <path d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z" fill="#928F94" />
                        </svg>
                    </div>
                </div>
            </div>
        </aside >
    )
}