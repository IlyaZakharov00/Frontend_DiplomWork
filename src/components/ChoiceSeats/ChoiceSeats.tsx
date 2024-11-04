import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ChoiceTrainAside } from '../ChoiceTrain/ChoiceTrainAside/ChoiceTrainAside';
import './ChoiceSeats.css'
import searchSeatsSlice from '../redux/slices/searchSeatsSlice';
import icon_train from '../../static-files/icons/ticket/train.svg'
import icon_arrow_travel from '../../static-files/icons/ticket/arrow_travel.svg'
import icon_arrow_travel_city from '../../static-files/icons/ticket/arrow_travel_city.svg'
import btnBack from '../../static-files/icons/choiceSeats/back.svg'
import icon_clock from '../../static-files/icons/choiceSeats/clock.svg'
import icon_fourthClass from '../../static-files/icons/aside/fourth_class.svg'
import icon_thirdClass from '../../static-files/icons/aside/third_class.svg'
import icon_secondClass from '../../static-files/icons/aside/second_class.svg'
import icon_firstClass from '../../static-files/icons/aside/first_class.svg'

export const ChoiceSeats = () => {
    const searchSeatsState = useSelector((state: any) => state.searchSeatsState);
    const infoTrain = searchSeatsState.train;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [availableCoach, setAvailableCoach] = useState<any[]>([])
    const [_choiceCoach, setCoach] = useState<any>(null)

    const changeTypeCoachHendler = (e: React.MouseEvent<HTMLElement>) => {
        setAvailableCoach(['Вагонов нет'])
        setCoach(null)
        dispatch(searchSeatsSlice.actions.choiceNumberCoach(""))
        dispatch(searchSeatsSlice.actions.choiceCoach(""))

        const target = e.target as HTMLElement;
        const typeCoachItem = target.closest('.typeCoach-item')
        const containerTypes = typeCoachItem?.closest(".typesCoach-container");
        const activeNow = containerTypes?.querySelectorAll('.type-active') as any;
        const svg = typeCoachItem?.querySelector(".icon_class")
        const itemsSVG = svg?.querySelectorAll(".icon_item") as any;
        const typeCoach = typeCoachItem?.getAttribute("id")
        const coachs = document.querySelector(".coachs")
        const activeCoachsNow = coachs?.querySelector(".coach-number-active")

        activeCoachsNow?.classList.remove('coach-number-active')

        let coachNumber: {}[] = []

        for (const item of activeNow) {
            item?.classList.remove('type-active');
        }

        for (const item of itemsSVG) {
            item.classList.add('type-active')
        }

        dispatch(searchSeatsSlice.actions.addChoiceTypeCoach(typeCoach))

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
        const idCoach = number.getAttribute('id')
        const coachs = number.closest('.coachs')
        const activeNow = coachs?.querySelector(".coach-number-active")
        activeNow?.classList.remove('coach-number-active')
        number.classList.add('coach-number-active')

        const allCoachs = searchSeatsState.responseFromServer.payload;
        for (const item of allCoachs) {
            if (item.coach._id === idCoach) {
                setCoach(item)
                dispatch(searchSeatsSlice.actions.choiceCoach(item))
            }
        }

        dispatch(searchSeatsSlice.actions.choiceNumberCoach(number.textContent))
    }

    const goBack = () => {
        navigate(-1)
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
                                <div className="choiceSeats-infoTrain d-flex flex-row p-0 flex-grow-1 align-items-center ">
                                    <svg className='mx-4' width="30" height="30" viewBox="0 0 86 86" fill="none" xmlns={icon_train}>
                                        <path d="M55.7879 63.7038C56.7164 65.6856 59.433 66.369 59.5361 69C48.4635 69 37.5284 69 26.4557 69C26.6277 66.4031 29.2755 65.6856 30.2727 63.7379C29.3786 63.5329 28.5534 63.3962 27.7625 63.157C23.8423 61.9611 21.057 58.3392 21.057 54.2047C20.9882 45.389 20.9882 36.6416 21.0226 27.8601C21.0226 23.794 22.9139 20.7187 26.7308 19.3861C29.8257 18.3269 33.1268 17.6777 36.3936 17.3701C42.7896 16.7893 49.22 16.7893 55.5472 18.1219C57.1634 18.4636 58.7452 19.0444 60.1895 19.762C63.2843 21.2996 64.9005 23.9306 64.9349 27.3134C65.0037 36.3683 65.0381 45.4232 64.9349 54.478C64.9005 58.6467 61.8057 62.2003 57.748 63.2254C57.129 63.4304 56.4757 63.5329 55.7879 63.7038ZM40.1762 28.1676C35.5683 28.1676 31.0636 28.1676 26.6277 28.1676C26.6277 32.7463 26.6277 37.1884 26.6277 41.6304C31.2012 41.6304 35.6371 41.6304 40.1762 41.6304C40.1762 37.12 40.1762 32.7122 40.1762 28.1676ZM59.433 28.1676C54.8251 28.1676 50.3204 28.1676 45.8844 28.1676C45.8844 32.7463 45.8844 37.1884 45.8844 41.6304C50.4579 41.6304 54.8939 41.6304 59.433 41.6304C59.433 37.12 59.433 32.7122 59.433 28.1676ZM34.743 54.068C34.7774 51.8128 32.8861 49.9335 30.6166 49.9335C28.4158 49.9335 26.5589 51.7103 26.4901 53.8972C26.4214 56.1523 28.2439 58.0658 30.5134 58.1342C32.8174 58.1683 34.7086 56.3232 34.743 54.068ZM59.5017 53.9997C59.5017 51.7445 57.5761 49.8993 55.3065 49.9335C53.1057 49.9677 51.2832 51.7787 51.2488 53.9655C51.2144 56.2207 53.0713 58.1 55.3409 58.1342C57.6448 58.1342 59.5017 56.2548 59.5017 53.9997Z" fill="#FFA800" />
                                        <circle cx="43" cy="43" r="42" stroke="#FFA800" strokeWidth="2" />
                                    </svg>
                                    <div className="train_diraction d-flex flex-column">
                                        <div className="train_number ticket_text">{infoTrain.trainNumber}</div>
                                        <div className="train_direction_from_city  ticket_text">
                                            {infoTrain.fromCity}
                                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns={icon_arrow_travel_city} className='icon_arrow_travel_city'>
                                                <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="#292929" />
                                            </svg>
                                        </div>
                                        <div className="train_direction_to_city ticket_text">{infoTrain.toCity}</div>
                                    </div>
                                </div>
                                <div className='choiceSeats-timeTravel flex-grow-1 px-4'>
                                    <div className='departure d-flex flex-xl-row flex-lg-row flex-column w-100 justify-content-evenly w-100' >
                                        <div className='departure_from_info d-flex flex-xl-column flex-lg-column flex-row justify-content-evenly gap-2'>
                                            <div className="departure_time ticket_time">{infoTrain.departureTimeStart}</div>
                                            <div className="departure_city ticket_city_name">{infoTrain.fromCity}</div>
                                            <div className="departure_station ticket_railway_station">{infoTrain.departureFromRailwayStation}</div>
                                        </div>

                                        <div className='time_travel'>
                                            <div className='time_travel_text'>{ }</div>
                                            <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns={icon_arrow_travel} className='icon_arrow_travel'>
                                                <path d="M19.3627 20C19.3627 17.8073 19.3627 15.3821 19.3627 12.8239C12.8621 12.8239 6.46582 12.8239 0 12.8239C0 11.0299 0 9.36877 0 7.57475C6.32677 7.57475 12.7231 7.57475 19.3279 7.57475C19.3279 4.91694 19.3279 2.42525 19.3279 0C22.9432 3.3887 26.5238 6.77741 30 10.0664C26.5585 13.2558 22.9432 16.6445 19.3627 20Z" fill="#FFA800" fillOpacity="0.79" />
                                            </svg>
                                        </div>
                                        <div className='departure_to_info d-flex flex-xl-column flex-lg-column flex-row justify-content-evenly gap-2'>
                                            <div className="departure_time ticket_time">{infoTrain.departureTimeEnd}</div>
                                            <div className="departure_city ticket_city_name">{infoTrain.toCity}</div>
                                            <div className="departure_station ticket_railway_station">{infoTrain.departureToRailwayStation}</div>
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
                                            {`${infoTrain.durationTime.split(':')[0]} часов`}
                                        </div>
                                        <div className="duration-time-minutes">
                                            {`${infoTrain.durationTime.split(':')[1]} минут`}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="countOfTickets w-100 py-4 mb-5">
                                <h3 className='countOfTickets_title ps-4 mb-4'>Количество билетов</h3>
                                <div className="available-tickets-container d-flex justify-content-between flex-column flex-lg-row">
                                    <div className="ticket-abailable d-flex flex-column col-4 ticket-adults pt-4 px-4 col-12 col-lg-4">
                                        <input type="text" placeholder='Взрослых' className='input-ticket mb-3 p-2' />
                                        <label htmlFor="" className='ticket-text mb-4'>Можно добавить еще 3 пассажиров</label>
                                    </div>
                                    <div className="ticket-abailable d-flex flex-column col-4 ticket-child pt-4 px-4 col-12 col-lg-4">
                                        <input type="text" placeholder='Детских' className='input-ticket mb-3 p-2' />
                                        <label htmlFor="" className='ticket-text text-child mb-4'>Можно добавить еще 3 детей до 10 лет.Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%</label>
                                    </div>
                                    <div className="ticket-abailable d-flex flex-column col-4 ticket-child-2 pt-4 px-4 col-12 col-lg-4">
                                        <input type="text" placeholder='Детских «без места»' className='input-ticket mb-3 p-2' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="typeCoach pt-5">
                            <h3 className='typeCoach_title ps-4 mb-4'>Тип вагона</h3>
                            <div className="typesCoach-container d-flex justify-content-evenly flex-column flex-lg-row">
                                <div className="typeCoach-item d-flex flex-column align-items-center" id='third' onClick={changeTypeCoachHendler}>
                                    <svg className='icon_class' width="30.43" height="50" viewBox="0 0 14 23" fill="none" xmlns={icon_thirdClass}>
                                        <path className='icon_item' d="M0 8.75326C0.141674 8.57335 0.25759 8.35002 0.437903 8.21975C1.03036 7.7979 1.79669 8.08947 1.97056 8.80288C2.12512 9.44806 2.25391 10.0994 2.38914 10.7508C2.62741 11.8737 2.85925 13.0027 3.10396 14.1256C3.42594 15.5834 4.41122 16.3527 5.9632 16.3589C7.07084 16.3651 8.17203 16.3527 9.27967 16.3651C9.93008 16.3713 10.2971 16.6566 10.4002 17.2025C10.5032 17.7919 10.0846 18.3378 9.46642 18.344C8.03036 18.3564 6.5943 18.3936 5.15823 18.3316C3.39374 18.2572 1.75161 16.8551 1.29439 15.0809C0.99816 13.9208 0.779209 12.7422 0.521619 11.5759C0.354186 10.8004 0.173873 10.0312 0 9.25575C0 9.08825 0 8.92075 0 8.75326Z" fill="#E5E5E5" />
                                        <path className='icon_item' d="M4.54015 0C5.04889 0.105461 5.51899 0.266754 5.9247 0.601748C6.7683 1.29655 7.02589 2.56829 6.49783 3.51123C5.9247 4.54103 4.72046 5.04972 3.61927 4.73334C2.52451 4.41696 1.86766 3.65392 1.78394 2.50625C1.71954 1.62534 2.20896 0.694802 3.22644 0.235737C3.45827 0.130275 3.71586 0.0806467 3.96701 0C4.15377 0 4.34696 0 4.54015 0Z" fill="#E5E5E5" />
                                        <path className='icon_item' d="M11.3467 15.875C11.1921 15.875 11.0826 15.875 10.9796 15.875C9.33104 15.875 7.68246 15.8812 6.02745 15.875C4.76526 15.8688 3.91521 15.1988 3.6705 14.0077C3.24548 11.9853 2.82689 9.96296 2.40187 7.94058C1.97041 5.8872 3.88301 4.89462 5.25468 5.32267C6.13048 5.59563 6.58126 6.22839 6.76158 7.05347C7.1222 8.70983 7.46351 10.3662 7.79838 12.0225C7.85633 12.3203 7.95293 12.432 8.2878 12.4258C9.62726 12.4134 10.9667 12.4134 12.3062 12.4568C13.2142 12.4816 13.9161 13.1888 13.9805 14.0635C13.9934 14.2124 13.9998 14.3613 13.9998 14.5102C13.9998 16.8117 13.9998 19.1071 13.9998 21.4086C13.9998 21.6133 13.9998 21.8242 13.9548 22.0227C13.8131 22.6493 13.2464 23.0401 12.5831 22.9967C11.9327 22.9533 11.424 22.4756 11.3596 21.8428C11.3467 21.6939 11.3467 21.5451 11.3467 21.3962C11.3467 19.6778 11.3467 17.9532 11.3467 16.2348C11.3467 16.1293 11.3467 16.0177 11.3467 15.875Z" fill="#E5E5E5" />
                                    </svg>
                                    <div className="type-text mt-3">Сидячий</div>
                                </div>
                                <div className="typeCoach-item d-flex flex-column align-items-center" id='first' onClick={changeTypeCoachHendler}>
                                    <svg className='icon_class' width="50" height="50" viewBox="0 0 17 17" fill="none" xmlns={icon_firstClass}>
                                        <path className='icon_item' fillRule="evenodd" clipRule="evenodd" d="M1.53516 0H15.4648C16.3091 0 17 0.695465 17 1.54544V15.4546C17 16.3045 16.3091 17 15.4648 17H1.53516C0.690918 17 0 16.3045 0 15.4546V1.54544C0 0.695465 0.690918 0 1.53516 0ZM13.124 2.125C12.7021 2.125 12.3564 2.47272 12.3564 2.89774V4H15.2925V2.89774C15.2925 2.47272 14.9468 2.125 14.5249 2.125H13.124ZM15.2925 5H12.3564V10.0454C12.3564 10.4705 12.7021 10.8182 13.124 10.8182H14.5249C14.9468 10.8182 15.2925 10.4705 15.2925 10.0454V5ZM4.54736 4V2.97501C4.54736 2.51135 4.16357 2.125 3.70312 2.125H2.45605C1.99561 2.125 1.61182 2.51135 1.61182 2.97501V4H4.54736ZM1.61182 5H4.54736V9.98749C4.54736 10.4511 4.16357 10.8375 3.70312 10.8375H2.45605C1.99561 10.8375 1.61182 10.4511 1.61182 9.98749V5ZM15.2349 16.7296C16.0405 16.7296 16.7124 16.0727 16.7124 15.242V12.4796H0.287598V15.242C0.287598 16.0534 0.939941 16.7296 1.76514 16.7296H15.2349Z" fill="#E5E5E5" />
                                    </svg>
                                    <div className="type-text mt-3">Купе</div>
                                </div>
                                <div className="typeCoach-item d-flex flex-column align-items-center" id='second' onClick={changeTypeCoachHendler}>
                                    <svg className='icon_class' width="50" height="50" viewBox="0 0 17 17" fill="none" xmlns={icon_secondClass}>
                                        <path className='icon_item' fillRule="evenodd" clipRule="evenodd" d="M15.4648 0H1.53516C0.690918 0 0 0.689941 0 1.53326V15.4667C0 16.3101 0.690918 17 1.53516 17H6H7H15.4648C16.3091 17 17 16.3101 17 15.4667V1.53326C17 0.689941 16.3091 0 15.4648 0ZM7 16.0417H11.9536C12.376 16.0417 12.7212 15.6967 12.7212 15.2751H12.7021V13.8951C12.7021 13.4735 12.3564 13.1285 11.9346 13.1285H7V16.0417ZM6 13.1285H5.04639C4.62402 13.1285 4.27881 13.4735 4.27881 13.8951V15.2751C4.27881 15.6967 4.62402 16.0417 5.04639 16.0417H6V13.1285ZM2.24512 9.88953C1.91895 9.88953 1.6499 9.62122 1.6499 9.29535V4H4.56641V9.29535C4.56641 9.62122 4.29785 9.88953 3.97168 9.88953H2.24512ZM1.6499 2.06989V3H4.56641V2.06989C4.56641 1.74408 4.29785 1.47577 3.97168 1.47577H2.24512C1.91895 1.47577 1.6499 1.74408 1.6499 2.06989ZM12.2417 9.27618V4H15.1772V9.27618C15.1772 9.62122 14.8892 9.90869 14.5439 9.90869H12.8745C12.5293 9.90869 12.2417 9.62122 12.2417 9.27618ZM12.2417 3H15.1772V2.08905C15.1772 1.74408 14.8892 1.4566 14.5439 1.4566H12.8745C12.5293 1.4566 12.2417 1.74408 12.2417 2.08905V3Z" fill="#E5E5E5" />
                                    </svg>
                                    <div className="type-text mt-3">Плацкарт</div>
                                </div>
                                <div className="typeCoach-item d-flex flex-column align-items-center" id='fourth' onClick={changeTypeCoachHendler}>
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
                                            <div className="aboutCoachInfo-container d-flex justify-content-between px-3 pt-4 flex-column flex-lg-row">
                                                <div className='typeCoach-seats d-flex align-items-center gap-2'>
                                                    <h3 className="seats-title m-0 p-0">Места</h3>
                                                    <div className="seats-title-number">{searchSeatsState.choiceCoach.coach.available_seats}</div>
                                                </div>
                                                <div className="typeCoach-price gap-2">
                                                    <h3 className="price-title m-0 p-0">Стоимость</h3>
                                                </div>
                                                <div className="typeCoach-functions d-flex gap-2">
                                                    <h3 className="functions-title m-0 p-0">Обслуживание</h3>
                                                    <h3 className="functions-title-second m-0 p-0">ФПК</h3>
                                                    <div className="functions-icons-container">

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row m-0 p-0 px-3 mt-3">
                                        <div className='seats-draw w-100'>
                                            <button className="number-coach">{searchSeatsState.choiceNumberCoach}</button>
                                            <div className="draw-seats col-6 d-flex flex-wrap m-auto gap-3 justify-content-center">
                                                {searchSeatsState.choiceCoach.seats.map((item: any, index: number) =>
                                                    <button key={index} className={!item.available ? 'button-seat button-seat-no-available' : 'button-seat'} disabled={item.available}>{item.index}</button>)
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </>
                                : <></>}
                        </div>
                    </main>
                </div>
            </div>
        </div>
    )
}
