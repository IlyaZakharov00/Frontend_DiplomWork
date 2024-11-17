import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import React, { FormEvent, useState } from 'react';
import { ChoiceTrainAside } from '../ChoiceTrain/ChoiceTrainAside/ChoiceTrainAside';
import './ChoiceSeats.css'
import { TrainsFirstClass } from './Trains/TrainsFirstClass/TrainsFirstClass';
import { TrainsSecondClass } from './Trains/TrainsSecondClass/TrainsSecondClass';
import { TrainsThirdClass } from './Trains/TrainsThirdClass/TrainsThirdClass';
import { TrainsFourthClass } from './Trains/TrainsFourthClass/TrainsFourthClass';
import icon_train from '../../static-files/icons/ticket/train.svg'
import icon_arrow_travel from '../../static-files/icons/ticket/arrow_travel.svg'
import icon_arrow_travel_city from '../../static-files/icons/ticket/arrow_travel_city.svg'
import btnBack from '../../static-files/icons/choiceSeats/back.svg'
import icon_clock from '../../static-files/icons/choiceSeats/clock.svg'
import icon_fourthClass from '../../static-files/icons/aside/fourth_class.svg'
import icon_thirdClass from '../../static-files/icons/aside/third_class.svg'
import icon_secondClass from '../../static-files/icons/aside/second_class.svg'
import icon_firstClass from '../../static-files/icons/aside/first_class.svg'
import icon_wifi from '../../static-files/icons/choiceSeatsIcons/wi-fi.svg'
import icon_linens from '../../static-files/icons/choiceSeatsIcons/linens.svg'
import icon_lunch from '../../static-files/icons/choiceSeatsIcons/lunch.svg'
import icon_air_conditioning from '../../static-files/icons/choiceSeatsIcons/air_conditioning.svg'
import icon_rub from '../../static-files/icons/ticket/rub.svg'
import { TSeatsR } from '../redux/types/Seats/SeatsState';
import { TPriceStateR } from '../redux/types/Price/PriceState';
import { TPassangersStateR } from '../redux/types/Passengers/PassangersState';
import addPassengersSlice from '../redux/slices/addPassengersSlice';
import priceForTicketstsSlice from '../redux/slices/priceForTickets';
import menuSlice from '../redux/slices/menuSlice';
import searchSeatsSlice from '../redux/slices/searchSeatsSlice';
import moment from 'moment';

export const ChoiceSeats = () => {
    const searchSeatsState = useSelector((state: TSeatsR) => state.searchSeatsState);
    const priceForTickets = useSelector((state: TPriceStateR) => state.priceForTickets);
    const passangersState = useSelector((state: TPassangersStateR) => state.passangersState);

    const infoTrain = searchSeatsState.train;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [availableCoach, setAvailableCoach] = useState<any[]>([]);
    const [_choiceCoach, setCoach] = useState(null);

    const changeTypeCoachHendler = (e: React.MouseEvent<HTMLElement>) => {
        setAvailableCoach(['Вагонов нет']);
        setCoach(null);
        dispatch(searchSeatsSlice.actions.choiceNumberCoach(""));
        dispatch(searchSeatsSlice.actions.choiceCoach(""));
        dispatch(priceForTicketstsSlice.actions.clearAll());

        const target = e.target as HTMLElement;
        const typeCoachItem = target.closest('.typeCoach-item');
        const containerTypes = typeCoachItem?.closest(".typesCoach-container");
        const activeNow = containerTypes?.querySelectorAll('.type-active') as any;
        const svg = typeCoachItem?.querySelector(".icon_class");
        const itemsSVG = svg?.querySelectorAll(".icon_item") as any;
        const typeCoach = typeCoachItem?.getAttribute("id");
        const coachs = document.querySelector(".coachs");
        const activeCoachsNow = coachs?.querySelector(".coach-number-active");

        activeCoachsNow?.classList.remove('coach-number-active');

        let coachNumber: {}[] = [];

        for (const item of activeNow) {
            item?.classList.remove('type-active');
        }

        for (const item of itemsSVG) {
            item.classList.add('type-active');
        }

        dispatch(searchSeatsSlice.actions.addChoiceTypeCoach(typeCoach));

        for (const coachItem of searchSeatsState.responseFromServer.payload) {
            if (coachItem.coach.class_type === typeCoach) {
                const num = coachItem.coach.name.split('-')[1] as string;
                coachNumber.push({
                    number: num,
                    idCoach: coachItem.coach._id,
                })
                setAvailableCoach(coachNumber)
            }
        }
    }

    const clickCoachNumberHendler = (e: React.MouseEvent<HTMLElement>) => {
        const number = e.target as HTMLElement;
        const idCoach = number.getAttribute('id');
        const coachs = number.closest('.coachs');
        const activeNow = coachs?.querySelector(".coach-number-active");
        activeNow?.classList.remove('coach-number-active');
        number.classList.add('coach-number-active');

        const allCoachs = searchSeatsState.responseFromServer.payload;
        for (const item of allCoachs) {
            if (item.coach._id === idCoach) {
                setCoach(item);
                dispatch(searchSeatsSlice.actions.choiceCoach(item));
            }
        }

        dispatch(searchSeatsSlice.actions.choiceNumberCoach(number.textContent))
    }

    const goBack = () => {
        navigate(-1);
    }

    const choiceFunc = (e: React.MouseEvent<SVGElement>) => {
        const svg = e.currentTarget as SVGAElement;
        const border = svg.querySelector(".border");
        const paths = svg.querySelectorAll(".path");
        const idTypeFunc = svg.getAttribute("id");

        if (idTypeFunc === 'linens' && searchSeatsState.choiceCoach.coach.is_linens_included) return;

        if (svg.classList.contains('svg-active')) {
            dispatch(priceForTicketstsSlice.actions.deleteFunction({ type: idTypeFunc, payload: { choice: false, price: searchSeatsState.choiceCoach.coach[`${idTypeFunc}_price`] } }))
            svg.classList.remove('svg-active');
            border?.classList.remove("border-active");
            for (const path of paths) {
                path?.classList.remove("path-active");
            }
        } else {
            dispatch(priceForTicketstsSlice.actions.addFunction({ type: idTypeFunc, payload: { choice: true, price: searchSeatsState.choiceCoach.coach[`${idTypeFunc}_price`] } }))
            svg.classList.add('svg-active');
            border?.classList.add("border-active");
            for (const path of paths) {
                path?.classList.add("path-active");
            }
        }
    }

    const countSeat = () => {
        const seats = searchSeatsState.choiceCoach.seats;
        let upSeat = 0;
        let allAvailableSeats = 0;
        let downSeat = 0;
        let sideSeat = 0;
        for (const seat of seats) {
            if (!seat.available) continue;
            allAvailableSeats++;
            seat.index % 2 === 0 ? upSeat++ : downSeat++;
            if (seat.index >= 33) sideSeat++
        }
        if (searchSeatsState.choiceTypeCoach === 'first' || searchSeatsState.choiceTypeCoach === 'fourth') {

        }
        return [upSeat, downSeat, allAvailableSeats, sideSeat]
    }

    const changeCountPassengers = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target as HTMLInputElement;
        const type = input.getAttribute('name')
        const countPassengers = Number(input.value);
        dispatch(addPassengersSlice.actions.addCountPassengers({ type, countPassengers }))
    }

    const onSubmitForm = (e: FormEvent) => {
        e.preventDefault();
        if (priceForTickets.choiceSeats.length === 0) return;
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const countAdult = Number(formData.get("countAdult"));
        const countChild = Number(formData.get("countChild"));
        const countChildWithoutSeat = Number(formData.get("countChildWithoutSeat"));

        const infoAboutCountPassengers = [
            {
                type: 'countAdult',
                count: countAdult,
            },
            {
                type: 'countChild',
                count: countChild,
            },
            {
                type: 'countChildWithoutSeat',
                count: countChildWithoutSeat,
            }

        ];

        dispatch(addPassengersSlice.actions.addCountPassengers(infoAboutCountPassengers));
        navigate('/Frontend_DiplomWork/addPassengers');
    }

    return (
        <div className="choiceTrain_container mt-5">
            <div className="row m-auto pt-5 d-flex justify-content-between w-75">
                <div className="col-xl-3 col-lg-12 p-0">
                    <ChoiceTrainAside />
                </div>
                <div className="col-xl-8 col-lg-12 p-0">
                    <main className='choiceSeats_main w-100'>
                        <h3 className='choiceSeats_title mb-5'>Выбор мест</h3>
                        <div className="choiceSeats-container pt-3">
                            <div className="btn-container-choiceSeats d-flex gap-3 p-3 flex-column flex-lg-row" >
                                <button className='btn-back-choiceTrain-icon p-0' onClick={goBack}>
                                    <svg width="76" height="60" viewBox="0 0 76 60" fill="none" xmlns={btnBack}>
                                        <path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23877 0 0 2.23859 0 5V55C0 57.7614 2.23877 60 5 60H71C73.7612 60 76 57.7614 76 55V5C76 2.23859 73.7612 0 71 0H5ZM42.3628 32.8239V40C45.9434 36.6445 49.5586 33.2558 53 30.0664C49.5239 26.7774 45.9434 23.3887 42.3281 20V27.5747H23V32.8239H42.3628Z" fill="#FFA800" />
                                    </svg>
                                </button>
                                <button className='btn-back-choiceTrain' onClick={goBack}>Выбрать другой поезд</button>
                            </div>
                            <div className="choiceSeats-aboutTrainInfo mt-4 d-flex justify-content-between gap-1 flex-column flex-lg-row">
                                <div className="choiceSeats-infoTrain d-flex flex-row p-0 flex-grow-1 align-items-center justify-content-center">
                                    <svg className='mx-4' width="30" height="30" viewBox="0 0 86 86" fill="none" xmlns={icon_train}>
                                        <path d="M55.7879 63.7038C56.7164 65.6856 59.433 66.369 59.5361 69C48.4635 69 37.5284 69 26.4557 69C26.6277 66.4031 29.2755 65.6856 30.2727 63.7379C29.3786 63.5329 28.5534 63.3962 27.7625 63.157C23.8423 61.9611 21.057 58.3392 21.057 54.2047C20.9882 45.389 20.9882 36.6416 21.0226 27.8601C21.0226 23.794 22.9139 20.7187 26.7308 19.3861C29.8257 18.3269 33.1268 17.6777 36.3936 17.3701C42.7896 16.7893 49.22 16.7893 55.5472 18.1219C57.1634 18.4636 58.7452 19.0444 60.1895 19.762C63.2843 21.2996 64.9005 23.9306 64.9349 27.3134C65.0037 36.3683 65.0381 45.4232 64.9349 54.478C64.9005 58.6467 61.8057 62.2003 57.748 63.2254C57.129 63.4304 56.4757 63.5329 55.7879 63.7038ZM40.1762 28.1676C35.5683 28.1676 31.0636 28.1676 26.6277 28.1676C26.6277 32.7463 26.6277 37.1884 26.6277 41.6304C31.2012 41.6304 35.6371 41.6304 40.1762 41.6304C40.1762 37.12 40.1762 32.7122 40.1762 28.1676ZM59.433 28.1676C54.8251 28.1676 50.3204 28.1676 45.8844 28.1676C45.8844 32.7463 45.8844 37.1884 45.8844 41.6304C50.4579 41.6304 54.8939 41.6304 59.433 41.6304C59.433 37.12 59.433 32.7122 59.433 28.1676ZM34.743 54.068C34.7774 51.8128 32.8861 49.9335 30.6166 49.9335C28.4158 49.9335 26.5589 51.7103 26.4901 53.8972C26.4214 56.1523 28.2439 58.0658 30.5134 58.1342C32.8174 58.1683 34.7086 56.3232 34.743 54.068ZM59.5017 53.9997C59.5017 51.7445 57.5761 49.8993 55.3065 49.9335C53.1057 49.9677 51.2832 51.7787 51.2488 53.9655C51.2144 56.2207 53.0713 58.1 55.3409 58.1342C57.6448 58.1342 59.5017 56.2548 59.5017 53.9997Z" fill="#FFA800" />
                                        <circle cx="43" cy="43" r="42" stroke="#FFA800" strokeWidth="2" />
                                    </svg>
                                    <div className="train_diraction d-flex flex-column">
                                        <div className="train_number ticket_text">{infoTrain.departure.train.name}</div>
                                        <div className="train_direction_from_city  ticket_text">
                                            {infoTrain.departure.from.city.name}
                                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns={icon_arrow_travel_city} className='icon_arrow_travel_city'>
                                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="#292929" />
                                            </svg>
                                        </div>
                                        <div className="train_direction_to_city ticket_text">{infoTrain.departure.to.city.name}</div>
                                    </div>
                                </div>
                                <div className='choiceSeats-timeTravel flex-grow-1 px-4'>
                                    <div className='departure d-flex flex-xl-row flex-lg-row flex-column w-100 justify-content-evenly w-100' >
                                        <div className='departure_from_info d-flex flex-xl-column flex-lg-column flex-row justify-content-evenly gap-2'>
                                            <div className="departure_time ticket_time">{moment.unix(infoTrain.departure.from.datetime).format('HH:mm')}</div>
                                            <div className="departure_city ticket_city_name">{infoTrain.departure.from.city.name}</div>
                                            <div className="departure_station ticket_railway_station">{infoTrain.departure.from.railway_station_name}</div>
                                        </div>

                                        <div className='time_travel'>
                                            <div className='time_travel_text'>{ }</div>
                                            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns={icon_arrow_travel} className='icon_arrow_travel'>
                                                <path d="M19.3627 20C19.3627 17.8073 19.3627 15.3821 19.3627 12.8239C12.8621 12.8239 6.46582 12.8239 0 12.8239C0 11.0299 0 9.36877 0 7.57475C6.32677 7.57475 12.7231 7.57475 19.3279 7.57475C19.3279 4.91694 19.3279 2.42525 19.3279 0C22.9432 3.3887 26.5238 6.77741 30 10.0664C26.5585 13.2558 22.9432 16.6445 19.3627 20Z" fill="#FFA800" fillOpacity="0.79" />
                                            </svg>
                                        </div>
                                        <div className='departure_to_info d-flex flex-xl-column flex-lg-column flex-row justify-content-evenly gap-2'>
                                            <div className="departure_time ticket_time">{moment.unix(infoTrain.departure.to.datetime).format('HH:mm')}</div>
                                            <div className="departure_city ticket_city_name">{infoTrain.departure.to.city.name}</div>
                                            <div className="departure_station ticket_railway_station">{infoTrain.departure.to.railway_station_name}</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="choiceSeats-durationTime flex-grow-1 d-flex align-items-center justify-content-evenly px-4">
                                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns={icon_clock}>
                                        <path d="M15.1454 29.9951C7.11437 30.2063 0.215587 23.5269 0.00493763 15.3691C-0.205712 7.13207 6.35076 0.188668 14.4871 0.00386308C22.9131 -0.180942 29.8119 6.28724 29.9962 14.6035C30.1805 22.9989 23.6241 29.8103 15.1454 29.9951ZM27.4421 15.0259C27.4684 8.1881 21.9389 2.59114 15.0664 2.53834C8.29927 2.45913 2.61173 8.0825 2.5854 14.8939C2.53274 21.7845 8.16762 27.4607 14.9874 27.4607C21.8072 27.4607 27.4157 21.8373 27.4421 15.0259Z" fill="#FFA800" />
                                        <path d="M15.3296 14.3923C17.3571 13.4947 19.1476 12.6762 20.9381 11.8842C21.2278 11.7522 21.5174 11.5146 21.8071 11.541C22.2284 11.5674 22.6233 11.805 23.0446 11.937C22.8603 12.333 22.8077 12.9138 22.4917 13.0722C21.4648 13.6795 20.3589 14.1547 19.3056 14.6563C17.989 15.2899 16.6725 15.9499 15.3559 16.5571C14.171 17.1116 13.5917 16.7684 13.5654 15.5011C13.5391 12.6762 13.5127 9.85136 13.5917 7.02647C13.5917 6.63046 14.1447 6.23445 14.4343 5.83844C14.7503 6.23445 15.3033 6.60406 15.3033 7.00007C15.3822 9.37614 15.3296 11.7522 15.3296 14.3923Z" fill="#FFA800" />
                                    </svg>
                                    <div className="duration-time d-flex flex-column">
                                        <div className="duration-time-hours">
                                            {`${moment.unix(infoTrain.departure.duration).format('HH:mm').split(':')[0]} часов`}
                                        </div>
                                        <div className="duration-time-minutes">
                                            {`${moment.unix(infoTrain.departure.duration).format('HH:mm').split(':')[1]} минут`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="countOfTickets w-100 py-4 mb-5">
                                <h3 className='countOfTickets_title ps-4 mb-4'>Количество билетов</h3>
                                <form className="available-tickets-container d-flex justify-content-between flex-column flex-lg-row" id='passengers-form' onSubmit={onSubmitForm}>
                                    <div className="ticket-abailable d-flex flex-column col-4 ticket-adults pt-4 px-4 col-12 col-lg-4">
                                        <input type="text" placeholder='Взрослых' name='countAdult' className='input-ticket mb-3 p-2' required onChange={changeCountPassengers} />
                                        <label className='ticket-text mb-4'>Можно добавить еще 3 пассажиров</label>
                                    </div>
                                    <div className="ticket-abailable d-flex flex-column col-4 ticket-child pt-4 px-4 col-12 col-lg-4">
                                        <input type="text" placeholder='Детских' name='countChild' className='input-ticket mb-3 p-2' required onChange={changeCountPassengers} />
                                        <label className='ticket-text text-child mb-4'>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</label>
                                    </div>
                                    <div className="ticket-abailable d-flex flex-column col-4 ticket-child-2 pt-4 px-4 col-12 col-lg-4">
                                        <input type="text" placeholder='Детских «без места»' name='countChildWithoutSeat' className='input-ticket mb-3 p-2' required onChange={changeCountPassengers} />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="typeCoach pt-5">
                            <h3 className='typeCoach_title ps-4 mb-4'>Тип вагона</h3>
                            <div className="typesCoach-container d-flex justify-content-evenly flex-column flex-lg-row gap-5">
                                <div className="typeCoach-item d-flex flex-column align-items-center" id='fourth' onClick={changeTypeCoachHendler}>
                                    <svg className='icon_class' width="30.43" height="50" viewBox="0 0 14 23" fill="none" xmlns={icon_thirdClass}>
                                        <path className='icon_item' d="M0 8.75326C0.141674 8.57335 0.25759 8.35002 0.437903 8.21975C1.03036 7.7979 1.79669 8.08947 1.97056 8.80288C2.12512 9.44806 2.25391 10.0994 2.38914 10.7508C2.62741 11.8737 2.85925 13.0027 3.10396 14.1256C3.42594 15.5834 4.41122 16.3527 5.9632 16.3589C7.07084 16.3651 8.17203 16.3527 9.27967 16.3651C9.93008 16.3713 10.2971 16.6566 10.4002 17.2025C10.5032 17.7919 10.0846 18.3378 9.46642 18.344C8.03036 18.3564 6.5943 18.3936 5.15823 18.3316C3.39374 18.2572 1.75161 16.8551 1.29439 15.0809C0.99816 13.9208 0.779209 12.7422 0.521619 11.5759C0.354186 10.8004 0.173873 10.0312 0 9.25575C0 9.08825 0 8.92075 0 8.75326Z" fill="#E5E5E5" />
                                        <path className='icon_item' d="M4.54015 0C5.04889 0.105461 5.51899 0.266754 5.9247 0.601748C6.7683 1.29655 7.02589 2.56829 6.49783 3.51123C5.9247 4.54103 4.72046 5.04972 3.61927 4.73334C2.52451 4.41696 1.86766 3.65392 1.78394 2.50625C1.71954 1.62534 2.20896 0.694802 3.22644 0.235737C3.45827 0.130275 3.71586 0.0806467 3.96701 0C4.15377 0 4.34696 0 4.54015 0Z" fill="#E5E5E5" />
                                        <path className='icon_item' d="M11.3467 15.875C11.1921 15.875 11.0826 15.875 10.9796 15.875C9.33104 15.875 7.68246 15.8812 6.02745 15.875C4.76526 15.8688 3.91521 15.1988 3.6705 14.0077C3.24548 11.9853 2.82689 9.96296 2.40187 7.94058C1.97041 5.8872 3.88301 4.89462 5.25468 5.32267C6.13048 5.59563 6.58126 6.22839 6.76158 7.05347C7.1222 8.70983 7.46351 10.3662 7.79838 12.0225C7.85633 12.3203 7.95293 12.432 8.2878 12.4258C9.62726 12.4134 10.9667 12.4134 12.3062 12.4568C13.2142 12.4816 13.9161 13.1888 13.9805 14.0635C13.9934 14.2124 13.9998 14.3613 13.9998 14.5102C13.9998 16.8117 13.9998 19.1071 13.9998 21.4086C13.9998 21.6133 13.9998 21.8242 13.9548 22.0227C13.8131 22.6493 13.2464 23.0401 12.5831 22.9967C11.9327 22.9533 11.424 22.4756 11.3596 21.8428C11.3467 21.6939 11.3467 21.5451 11.3467 21.3962C11.3467 19.6778 11.3467 17.9532 11.3467 16.2348C11.3467 16.1293 11.3467 16.0177 11.3467 15.875Z" fill="#E5E5E5" />
                                    </svg>
                                    <div className="type-text mt-3">Сидячий</div>
                                </div>
                                <div className="typeCoach-item d-flex flex-column align-items-center" id='second' onClick={changeTypeCoachHendler}>
                                    <svg className='icon_class' width="50" height="50" viewBox="0 0 17 17" fill="none" xmlns={icon_firstClass}>
                                        <path className='icon_item' fillRule="evenodd" clipRule="evenodd" d="M1.53516 0H15.4648C16.3091 0 17 0.695465 17 1.54544V15.4546C17 16.3045 16.3091 17 15.4648 17H1.53516C0.690918 17 0 16.3045 0 15.4546V1.54544C0 0.695465 0.690918 0 1.53516 0ZM13.124 2.125C12.7021 2.125 12.3564 2.47272 12.3564 2.89774V4H15.2925V2.89774C15.2925 2.47272 14.9468 2.125 14.5249 2.125H13.124ZM15.2925 5H12.3564V10.0454C12.3564 10.4705 12.7021 10.8182 13.124 10.8182H14.5249C14.9468 10.8182 15.2925 10.4705 15.2925 10.0454V5ZM4.54736 4V2.97501C4.54736 2.51135 4.16357 2.125 3.70312 2.125H2.45605C1.99561 2.125 1.61182 2.51135 1.61182 2.97501V4H4.54736ZM1.61182 5H4.54736V9.98749C4.54736 10.4511 4.16357 10.8375 3.70312 10.8375H2.45605C1.99561 10.8375 1.61182 10.4511 1.61182 9.98749V5ZM15.2349 16.7296C16.0405 16.7296 16.7124 16.0727 16.7124 15.242V12.4796H0.287598V15.242C0.287598 16.0534 0.939941 16.7296 1.76514 16.7296H15.2349Z" fill="#E5E5E5" />
                                    </svg>
                                    <div className="type-text mt-3">Купе</div>
                                </div>
                                <div className="typeCoach-item d-flex flex-column align-items-center" id='third' onClick={changeTypeCoachHendler}>
                                    <svg className='icon_class' width="50" height="50" viewBox="0 0 17 17" fill="none" xmlns={icon_secondClass}>
                                        <path className='icon_item' fillRule="evenodd" clipRule="evenodd" d="M15.4648 0H1.53516C0.690918 0 0 0.689941 0 1.53326V15.4667C0 16.3101 0.690918 17 1.53516 17H6H7H15.4648C16.3091 17 17 16.3101 17 15.4667V1.53326C17 0.689941 16.3091 0 15.4648 0ZM7 16.0417H11.9536C12.376 16.0417 12.7212 15.6967 12.7212 15.2751H12.7021V13.8951C12.7021 13.4735 12.3564 13.1285 11.9346 13.1285H7V16.0417ZM6 13.1285H5.04639C4.62402 13.1285 4.27881 13.4735 4.27881 13.8951V15.2751C4.27881 15.6967 4.62402 16.0417 5.04639 16.0417H6V13.1285ZM2.24512 9.88953C1.91895 9.88953 1.6499 9.62122 1.6499 9.29535V4H4.56641V9.29535C4.56641 9.62122 4.29785 9.88953 3.97168 9.88953H2.24512ZM1.6499 2.06989V3H4.56641V2.06989C4.56641 1.74408 4.29785 1.47577 3.97168 1.47577H2.24512C1.91895 1.47577 1.6499 1.74408 1.6499 2.06989ZM12.2417 9.27618V4H15.1772V9.27618C15.1772 9.62122 14.8892 9.90869 14.5439 9.90869H12.8745C12.5293 9.90869 12.2417 9.62122 12.2417 9.27618ZM12.2417 3H15.1772V2.08905C15.1772 1.74408 14.8892 1.4566 14.5439 1.4566H12.8745C12.5293 1.4566 12.2417 1.74408 12.2417 2.08905V3Z" fill="#E5E5E5" />
                                    </svg>
                                    <div className="type-text mt-3">Плацкарт</div>
                                </div>
                                <div className="typeCoach-item d-flex flex-column align-items-center" id='first' onClick={changeTypeCoachHendler}>
                                    <svg className='icon_class' width="56.45" height="50" viewBox="0 0 22 20" fill="none" xmlns={icon_fourthClass}>
                                        <path className='icon_item' d="M11 0L13.5857 7.63103H22L15.2072 12.369L17.7928 20L11 15.304L4.20717 20L6.79283 12.369L0 7.63103H8.41434L11 0Z" fill="#E5E5E5" />
                                    </svg>
                                    <div className="type-text mt-3">Люкс</div>
                                </div>
                            </div>
                            <div className="coahchs-container d-flex justify-content-between px-5 mt-5 gap-5 flex-column flex-lg-row">
                                <div className="coachs d-flex gap-3 align-items-center">Вагоны {availableCoach.map((item, index) => <div className='coach-number' key={index} id={item.idCoach} onClick={clickCoachNumberHendler}>{item.number}</div>)}</div>
                                {searchSeatsState.choiceNumberCoach ? <div className="coachs-startCount">Нумерация вагонов начинается с головы поезда</div> : <></>}
                            </div>
                            {searchSeatsState.choiceNumberCoach ?
                                <>
                                    <div className='row m-0 p-0'>
                                        <div className='choice-coach-number-big col-3 d-flex flex-column align-items-center'>
                                            <div className='choice-coach-number'>
                                                {searchSeatsState.choiceNumberCoach}
                                            </div>
                                            <div className="coach-number-text">
                                                вагон
                                            </div>
                                        </div>
                                        <div className="col-lg-9 col-12">
                                            <div className="aboutCoachInfo-container gap-5 d-flex justify-content-lg-between px-3 pt-4 flex-column flex-md-row flex-lg-row align-items-start">
                                                <div className='typeCoach-seats d-flex align-items-start gap-2 flex-column'>
                                                    <div className="seat-all-count d-flex gap-2 align-items-center">
                                                        <h3 className="seats-title m-0 p-0">Места</h3>
                                                        <div className="seats-title-number">{countSeat()[2]}</div>
                                                    </div>
                                                    {searchSeatsState.choiceTypeCoach === 'second' || searchSeatsState.choiceTypeCoach === 'third' ?
                                                        <div className='seats-info-container d-flex flex-column gap-2'>
                                                            <div className='up-seat'>
                                                                <div className="up-seat-text-container d-flex flex-row gap-2">
                                                                    <div className="up-seat-text">Верхние</div>
                                                                    <div className="up-seat-count">{countSeat()[0]}</div>
                                                                </div>
                                                            </div>
                                                            <div className="down-seat">
                                                                <div className="down-seat-text-container d-flex gap-2">
                                                                    <div className="down-seat-text">Нижние</div>
                                                                    <div className="down-seat-count">{countSeat()[1]}</div>
                                                                </div>
                                                            </div>
                                                            {searchSeatsState.choiceTypeCoach === 'third' ?
                                                                <div className="side-seat">
                                                                    <div className="down-seat-text-container d-flex gap-2">
                                                                        <div className="down-seat-text">Боковое</div>
                                                                        <div className="down-seat-count">{countSeat()[3]}</div>
                                                                    </div>
                                                                </div>
                                                                : <></>}
                                                        </div> : <></>}
                                                </div>
                                                <div className="typeCoach-price d-flex align-items-start gap-2 flex-column">
                                                    <h3 className="price-title m-0 p-0">Стоимость</h3>
                                                    {searchSeatsState.choiceTypeCoach === 'second' || searchSeatsState.choiceTypeCoach === 'third' ?
                                                        <div className='prices-container d-flex flex-column gap-2'>
                                                            <div className="up-seat-price d-flex align-items-center gap-2">
                                                                {searchSeatsState.choiceCoach.coach.top_price}
                                                                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns={icon_rub}>
                                                                    <path d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z" fill="#928F94" />
                                                                </svg>

                                                            </div>
                                                            <div className="down-seat-price d-flex align-items-center gap-2">
                                                                {searchSeatsState.choiceCoach.coach.bottom_price}
                                                                <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns={icon_rub}>
                                                                    <path d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z" fill="#928F94" />
                                                                </svg>
                                                            </div>
                                                            {searchSeatsState.choiceTypeCoach === 'third' ?
                                                                <div className="side-seat-price d-flex align-items-center gap-2">
                                                                    {searchSeatsState.choiceCoach.coach.side_price}
                                                                    <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns={icon_rub}>
                                                                        <path d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z" fill="#928F94" />
                                                                    </svg>
                                                                </div> : <></>}
                                                        </div>
                                                        :
                                                        <div className="seatAndLux-seat-price d-flex align-items-center gap-2">
                                                            {searchSeatsState.choiceTypeCoach === 'fourth' ? searchSeatsState.choiceCoach.coach.top_price : searchSeatsState.choiceCoach.coach.price}
                                                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns={icon_rub}>
                                                                <path d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z" fill="#928F94" />
                                                            </svg>
                                                        </div>}
                                                </div>
                                                <div className="typeCoach-functions d-flex gap-2 flex-column">
                                                    <div className="function-title-container d-flex">
                                                        <h3 className="functions-title m-0 p-0">Обслуживание</h3>
                                                        <h3 className="functions-title-second m-0 p-0 ps-2">ФПК</h3>
                                                    </div>
                                                    <div className="functions-icons-container d-flex justify-content-between">
                                                        {searchSeatsState.choiceCoach.coach.have_air_conditioning ?
                                                            <svg className='icon-func add-function' id='air_conditioning' width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns={icon_air_conditioning} onClick={choiceFunc}>
                                                                <rect className='border' x="0.5" y="0.5" width="35" height="33.1053" rx="4.5" stroke="#292929" />
                                                                <path className='path' d="M16.0993 18.641C15.7147 18.8691 15.3588 19.0788 15.003 19.2885C14.3847 19.6527 13.7737 20.0205 13.1518 20.3774C13.0296 20.4473 12.9865 20.5319 12.9793 20.6643C12.9326 21.3964 12.8787 22.1321 12.8283 22.8642C12.7996 23.2946 12.4941 23.5889 12.0879 23.5742C11.6925 23.5595 11.4013 23.2284 11.4157 22.798C11.4301 22.4632 11.4553 22.1248 11.4768 21.79C11.484 21.6576 11.4912 21.5251 11.4984 21.3633C11.3906 21.4258 11.3079 21.47 11.2252 21.5178C10.6825 21.8378 10.1397 22.1616 9.59333 22.4816C9.31296 22.6435 8.98946 22.603 8.75942 22.3897C8.54734 22.1947 8.45389 21.8489 8.59048 21.584C8.66596 21.4369 8.79536 21.2934 8.93554 21.2051C9.49269 20.8556 10.0606 20.5319 10.6249 20.1971C10.6753 20.1677 10.7256 20.1346 10.7939 20.0941C10.3697 19.8807 9.96715 19.6821 9.56457 19.4798C9.21232 19.2995 9.05776 18.9537 9.1584 18.5969C9.28061 18.1738 9.73351 17.9604 10.1397 18.1554C10.8011 18.4718 11.4553 18.8029 12.1095 19.134C12.2353 19.2002 12.3323 19.1965 12.4545 19.1229C13.3747 18.5711 14.2985 18.0303 15.2187 17.4859C15.269 17.4564 15.3193 17.4233 15.3948 17.3755C15.1935 17.2578 15.0102 17.1474 14.8269 17.0407C14.0397 16.5735 13.2489 16.1137 12.4653 15.6391C12.3287 15.5545 12.2245 15.5619 12.0879 15.6318C11.4517 15.9592 10.8119 16.2756 10.1684 16.5883C9.78743 16.7759 9.37766 16.6398 9.20153 16.2756C9.01822 15.904 9.16559 15.4846 9.5502 15.286C9.90245 15.102 10.2583 14.9291 10.6106 14.7489C10.6645 14.7231 10.7148 14.6937 10.7867 14.6532C10.2439 14.3332 9.72273 14.0242 9.20153 13.7151C9.10448 13.6563 9.00384 13.6011 8.90679 13.5386C8.54734 13.3178 8.42873 12.8948 8.62283 12.5416C8.82052 12.1848 9.24826 12.0707 9.61849 12.2841C10.2008 12.6225 10.7795 12.9684 11.3582 13.3105C11.3942 13.3325 11.4301 13.3509 11.4984 13.3914C11.4768 13.0346 11.4589 12.7108 11.4409 12.3834C11.4301 12.2289 11.4157 12.0781 11.4121 11.9236C11.4049 11.5189 11.6925 11.1952 12.0735 11.1768C12.4725 11.1584 12.7924 11.4453 12.8212 11.8574C12.8751 12.6078 12.929 13.362 12.9757 14.1124C12.9829 14.2375 13.0296 14.3074 13.1375 14.3663C14.0684 14.9107 14.9922 15.4589 15.9196 16.007C15.9699 16.0364 16.0202 16.0659 16.0957 16.1063C16.0993 16.0254 16.1065 15.9665 16.1065 15.9114C16.1065 14.8151 16.1029 13.7151 16.1101 12.6189C16.1101 12.4864 16.067 12.4092 15.9591 12.3356C15.3517 11.9199 14.7442 11.5042 14.1439 11.0811C13.6874 10.7611 13.7234 10.0879 14.205 9.83405C14.4602 9.70161 14.7154 9.72368 14.9527 9.88555C15.2762 10.1063 15.5997 10.327 15.9232 10.5477C15.9699 10.5808 16.0202 10.6139 16.1065 10.6691C16.1065 10.5735 16.1065 10.5073 16.1065 10.4447C16.1065 9.78254 16.1029 9.12037 16.1065 8.45819C16.1101 7.95788 16.4803 7.62679 16.9332 7.70404C17.2495 7.75555 17.4904 8.02778 17.5155 8.35886C17.5191 8.40669 17.5155 8.45819 17.5155 8.50601C17.5155 14.4178 17.5155 20.3259 17.5155 26.2376C17.5155 26.6349 17.3466 26.9145 17.0375 27.0175C16.5666 27.1794 16.1065 26.8373 16.1029 26.3149C16.0993 25.6454 16.1029 24.9795 16.1029 24.31C16.1029 24.2438 16.1029 24.1812 16.1029 24.0708C15.8513 24.2438 15.632 24.3909 15.4164 24.5381C15.2618 24.6447 15.1108 24.7514 14.9527 24.8544C14.5896 25.0972 14.1619 25.0236 13.939 24.6815C13.709 24.332 13.806 23.8943 14.1727 23.6404C14.7729 23.2247 15.3732 22.8127 15.9699 22.3933C16.031 22.3492 16.0957 22.2535 16.0957 22.1836C16.1029 21.0432 16.1029 19.9028 16.0993 18.7624C16.1101 18.7366 16.1065 18.7072 16.0993 18.641Z" fill="#292929" />
                                                                <path className='path' d="M27.1595 12.6189C26.9474 12.8764 26.7137 13.1155 26.5268 13.3877C26.2536 13.7924 25.9697 14.2044 25.7648 14.6496C25.4161 15.4037 25.6102 16.11 26.2501 16.6287C26.8324 17.1033 27.5153 17.3608 28.2198 17.5705C28.3025 17.5962 28.3888 17.6183 28.4211 17.6294C27.8496 17.8869 27.2529 18.1481 26.6634 18.4276C26.4873 18.5123 26.3255 18.641 26.1746 18.7698C25.621 19.237 25.4485 19.8476 25.6749 20.5503C25.8619 21.1389 26.2141 21.6245 26.5987 22.088C26.7641 22.2867 26.9438 22.4743 27.1487 22.6987C26.8935 22.6472 26.6778 22.5957 26.4585 22.5589C25.8906 22.4632 25.3227 22.386 24.744 22.4559C23.9208 22.5589 23.3925 23.0776 23.2774 23.9164C23.1696 24.711 23.3062 25.4798 23.5003 26.2413C23.5111 26.2818 23.5183 26.3223 23.5398 26.4032C23.3421 26.2229 23.1768 26.0648 23.0043 25.9176C22.5657 25.5424 22.1128 25.1929 21.588 24.9574C20.7649 24.5896 20.0496 24.7919 19.5212 25.5387C19.1402 26.0758 18.9066 26.6828 18.7197 27.3118C18.7017 27.367 18.6873 27.4259 18.6514 27.4737C18.6514 26.256 18.6514 25.0421 18.6514 23.8097C20.5744 23.7435 22.156 22.9672 23.3565 21.4295C24.2587 20.2707 24.6901 18.9353 24.6505 17.4528C24.5643 14.0683 21.7965 11.4196 18.6586 11.438C18.6586 10.1651 18.6586 8.8923 18.6586 7.57898C18.6873 7.65623 18.7053 7.70038 18.7161 7.74452C18.9389 8.46556 19.2013 9.1682 19.6434 9.78256C20.1574 10.4926 20.844 10.6875 21.642 10.3454C22.289 10.0695 22.8245 9.63173 23.3206 9.1351C23.3889 9.0652 23.4572 8.99898 23.5255 8.92908C23.5326 8.92173 23.547 8.92173 23.5614 8.91805C23.4967 9.28592 23.4068 9.65012 23.3781 10.018C23.3421 10.4926 23.3134 10.9745 23.3601 11.4454C23.4392 12.2436 23.9748 12.7513 24.7584 12.8617C25.5024 12.9647 26.2249 12.8433 26.9438 12.6557C27.0085 12.6373 27.0696 12.6226 27.1343 12.6078C27.1379 12.6078 27.1451 12.6115 27.1595 12.6189Z" fill="#292929" />
                                                                <path className='path' d="M18.6548 22.5332C18.6548 19.2664 18.6548 15.996 18.6548 12.6962C20.3622 12.7771 21.7424 13.4797 22.6518 14.9549C23.7517 16.7391 23.7266 18.5748 22.6231 20.3553C21.5591 22.0623 19.7008 22.6067 18.6548 22.5332Z" fill="#292929" />
                                                            </svg> : <></>}
                                                        {searchSeatsState.choiceCoach.coach.have_wifi ?
                                                            <svg className='icon-func add-function' id='wifi' width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns={icon_wifi} onClick={choiceFunc}>
                                                                <rect className='border' x="0.5" y="0.5" width="35" height="33.1053" rx="4.5" stroke="#292929" />
                                                                <path className='path' d="M27.4737 13.4662C27.2528 13.6749 27.0318 13.8837 26.8171 14.0988C26.6024 14.3139 26.4004 14.5416 26.1731 14.7883C23.8686 12.5552 21.16 11.3785 17.9906 11.3785C14.8337 11.3785 12.1378 12.5552 9.89644 14.7251C9.44817 14.2822 9.01883 13.8521 8.52637 13.3586C9.20825 12.8272 9.87118 12.2262 10.6099 11.7328C15.8692 8.24078 22.6501 8.84809 27.2338 13.2005C27.3096 13.2701 27.3917 13.3333 27.4737 13.3966C27.4737 13.4219 27.4737 13.4409 27.4737 13.4662Z" fill="#292929" />
                                                                <path className='path' d="M17.6872 24.4738C17.6051 24.4358 17.523 24.3915 17.4346 24.3536C16.7654 24.0689 16.3929 23.3667 16.5318 22.6519C16.6707 21.9433 17.2957 21.4309 18.0218 21.4309C18.7416 21.4372 19.3666 21.956 19.4992 22.6645C19.6318 23.373 19.2467 24.0752 18.5711 24.3536C18.4827 24.3915 18.4006 24.4295 18.3122 24.4675C18.1039 24.4738 17.8955 24.4738 17.6872 24.4738Z" fill="#292929" />
                                                                <path className='path' d="M12.5608 17.4011C12.1126 16.9583 11.6832 16.5344 11.2539 16.1043C14.5181 12.5616 20.8507 12.0935 24.7399 16.0663C24.3043 16.4965 23.8623 16.9266 23.4141 17.3695C21.9367 15.9524 20.1246 15.1553 17.9906 15.1617C15.8629 15.168 14.0572 15.9588 12.5608 17.4011Z" fill="#292929" />
                                                                <path className='path' d="M22.1069 18.7675C21.6586 19.2103 21.2293 19.6405 20.8 20.0643C19.1142 18.4702 16.6834 18.641 15.225 20.058C14.7956 19.6278 14.3663 19.204 13.9307 18.7738C15.6606 16.7431 19.6319 16.2307 22.1069 18.7675Z" fill="#292929" />
                                                            </svg> : <></>}
                                                        <svg className={searchSeatsState.choiceCoach.coach.is_linens_included ? 'icon-func add-function svg-active' : "icon-func add-function"} id='linens' width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns={icon_linens} onClick={choiceFunc}>
                                                            <rect className={searchSeatsState.choiceCoach.coach.is_linens_included ? 'border border-active' : "border"} width="36" height="34.1053" rx="5" fill="none" stroke="#292929" />
                                                            <path className={searchSeatsState.choiceCoach.coach.is_linens_included ? 'path path-active' : "path"} d="M27.5451 21.1613C27.6816 21.5772 27.8554 22.1645 28.054 22.7395C28.3642 23.6815 27.7313 24.6235 26.7261 24.6235C21.4765 24.6357 16.2146 24.6357 10.9651 24.6113C9.1904 24.599 7.93697 23.7304 7.65153 22.2256C7.51502 21.5283 7.58948 20.7575 7.72599 20.0602C8.17276 17.6868 8.69399 15.3256 9.20281 12.9522C9.28968 12.5363 9.42619 12.1203 9.61235 11.7411C9.99706 10.9581 10.5679 10.432 11.5235 10.2852C12.3302 10.1629 13.112 9.85704 13.8939 9.60013C14.3903 9.42885 14.8495 9.40438 15.3086 9.698C16.1525 10.2485 17.0709 10.3831 18.0761 10.3586C20.31 10.3097 22.5438 10.3464 24.7777 10.3586C25.5719 10.3586 25.5719 10.3709 25.7953 11.1049C26.0807 12.0836 26.3537 13.0624 26.6516 14.0411C26.7261 14.2613 26.8874 14.457 27.0239 14.6528C27.3342 15.081 27.7437 15.448 27.9423 15.9129C28.4759 17.1363 28.4883 18.4576 28.3394 19.7666C28.2897 20.1948 27.8926 20.574 27.5451 21.1613ZM8.63194 19.1794C9.72404 18.3352 10.8782 18.274 12.0696 18.2863C16.7855 18.2985 21.5013 18.2863 26.2048 18.2985C26.664 18.2985 27.1356 18.3597 27.7313 18.3964C27.6196 17.7235 27.5575 17.0996 27.3962 16.5001C27.0487 15.2033 26.1924 14.7017 24.8645 15.032C23.9462 15.2645 23.0154 15.5092 22.1715 15.9006C19.6522 17.0629 17.0337 16.8794 14.4027 16.549C14.1173 16.5123 14.0056 16.3655 14.0428 16.0964C14.08 15.7905 14.1173 15.4969 14.1421 15.1911C14.2165 14.1145 14.3034 13.0379 14.3655 11.9613C14.3903 11.423 14.3655 10.8725 14.3655 10.2485C14.1049 10.3342 13.8939 10.3953 13.6829 10.4565C12.9631 10.6523 12.2557 10.8847 11.5359 11.0315C10.9527 11.1416 10.5431 11.4352 10.3197 11.9491C10.146 12.3405 10.0095 12.7443 9.91019 13.1602C9.72404 13.9065 9.58753 14.665 9.42619 15.4235C9.17799 16.6347 8.91737 17.8336 8.63194 19.1794ZM18.6594 23.9139C21.2035 23.9139 23.7476 23.9139 26.2917 23.9139C26.453 23.9139 26.6268 23.9262 26.7881 23.9017C27.148 23.8527 27.4459 23.498 27.3962 23.1676C27.3466 22.8251 27.1356 22.6293 26.7633 22.6416C26.602 22.6416 26.4282 22.6416 26.2669 22.6416C21.4889 22.6538 16.711 22.666 11.9331 22.666C11.6476 22.666 11.3498 22.6905 11.0643 22.6538C10.4687 22.5926 10.0343 22.0788 10.0467 21.4671C10.0591 20.8799 10.4314 20.4884 11.0519 20.4517C11.6849 20.415 12.3302 20.3783 12.9755 20.3661C17.5425 20.3171 22.1094 20.2804 26.6764 20.2315C26.7757 20.2315 26.8874 20.2315 26.9867 20.2192C27.3466 20.1825 27.6444 19.9012 27.6568 19.6075C27.6568 19.2161 27.3714 19.0937 27.0611 19.0081C26.9246 18.9714 26.7757 18.9714 26.6268 18.9714C21.4393 18.9714 16.2394 18.9591 11.0519 18.9958C10.5183 18.9958 9.94742 19.1916 9.47583 19.4485C7.99902 20.2682 7.87491 22.4091 9.20281 23.3634C9.74886 23.7549 10.4066 23.8772 11.0768 23.8772C13.6084 23.9139 16.1401 23.9139 18.6594 23.9139ZM15.1473 10.4687C15.0356 12.3283 14.9239 14.09 14.8122 15.815C18.163 16.549 21.1911 15.7905 24.0827 14.3714C21.0173 13.4538 18.2002 11.8512 15.1473 10.4687ZM26.7136 20.9655C26.453 20.9655 26.2296 20.9655 25.9939 20.9655C24.1323 20.99 22.2708 21.0389 20.4092 21.0512C17.5425 21.0756 14.6757 21.0756 11.7965 21.1001C11.5483 21.1001 11.2877 21.1001 11.0643 21.1857C10.9402 21.2347 10.7789 21.4426 10.7913 21.565C10.8037 21.6996 10.9651 21.8708 11.1016 21.9442C11.2133 22.0054 11.387 21.9687 11.5235 21.9687C16.5248 21.9565 21.5386 21.9565 26.5399 21.9442C26.6888 21.9442 26.8377 21.9075 27.0115 21.8953C26.9494 21.6873 26.9122 21.5283 26.8626 21.3692C26.8253 21.2469 26.7757 21.1368 26.7136 20.9655ZM18.3243 11.0682C18.3119 11.1049 18.3119 11.1538 18.2995 11.1905C20.7319 12.3528 23.1519 13.5395 25.9194 14.1145C25.6464 13.148 25.4106 12.2427 25.1127 11.3618C25.0631 11.215 24.7652 11.0804 24.5791 11.0804C22.4942 11.0682 20.4092 11.0682 18.3243 11.0682Z" fill="#292929" />
                                                        </svg>
                                                        <svg className='icon-func add-function' id='lunch' width="36" height="35" viewBox="0 0 36 35" fill="none" xmlns={icon_lunch} onClick={choiceFunc}>
                                                            <rect className='border' width="36" height="34.1053" rx="5" fill="none" stroke="#292929" />
                                                            <path className='path' d="M10.3989 8.52637C10.6596 8.52637 10.8493 8.52637 11.039 8.52637C15.7804 8.52637 20.5219 8.52637 25.2633 8.52637C26.745 8.52637 27.4681 9.25024 27.4681 10.7573C27.4681 11.5643 27.48 12.3831 27.4681 13.19C27.4562 14.3767 26.6739 15.1599 25.5004 15.1718C24.9077 15.1837 24.3269 15.1718 23.6868 15.1718C23.6868 16.0974 23.6868 16.9518 23.6868 17.8181C23.6749 20.1915 22.0747 21.8053 19.7158 21.8172C17.9378 21.8172 16.1597 21.8291 14.3817 21.8172C12.0465 21.8053 10.4226 20.2033 10.4226 17.8774C10.387 14.7802 10.3989 11.7067 10.3989 8.52637ZM23.7223 10.4369C23.7223 11.3625 23.7223 12.3 23.7223 13.2375C24.3387 13.2375 24.9314 13.2375 25.5241 13.2375C25.5241 12.2882 25.5241 11.3625 25.5241 10.4369C24.9077 10.4369 24.3387 10.4369 23.7223 10.4369Z" fill="#292929" />
                                                            <path className='path' d="M25.5363 23.7513C25.5363 24.3684 25.5363 24.9618 25.5363 25.5788C19.8584 25.5788 14.2043 25.5788 8.52637 25.5788C8.52637 24.9618 8.52637 24.3803 8.52637 23.7513C14.1805 23.7513 19.8347 23.7513 25.5363 23.7513Z" fill="#292929" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row m-0 p-0 px-3 mt-3">
                                        {searchSeatsState.choiceTypeCoach === 'first' ? <TrainsFirstClass /> : <></>}
                                        {searchSeatsState.choiceTypeCoach === 'second' ? <TrainsSecondClass /> : <></>}
                                        {searchSeatsState.choiceTypeCoach === 'third' ? <TrainsThirdClass /> : <></>}
                                        {searchSeatsState.choiceTypeCoach === 'fourth' ? <TrainsFourthClass /> : <></>}
                                        <div className="total-price-container d-flex align-items-center gap-2 justify-content-end">
                                            <div className="price-total-ticket">{priceForTickets.sumPrice}</div>
                                            <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns={icon_rub}>
                                                <path d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z" fill="#928F94" />
                                            </svg>
                                        </div>
                                    </div>
                                </>
                                : <></>}
                        </div>
                        <div className="row p-0 m-0 d-flex justify-content-end mt-5">
                            <div className="col-lg-3 col-5 m-0 p-0 ">
                                <button className={'btn-next w-100 px-3 py-2 ' + `${priceForTickets.choiceSeats.length < (passangersState.countAdult + passangersState.countChild + passangersState.countChildWithoutSeat) ? "btn-disabled" : ""}`} type='submit' form='passengers-form' disabled={priceForTickets.choiceSeats.length < (passangersState.countAdult + passangersState.countChild + passangersState.countChildWithoutSeat)}>Далее</button>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
