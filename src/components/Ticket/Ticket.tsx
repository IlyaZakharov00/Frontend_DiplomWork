import './Ticket.css'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import icon_train from '../../static-files/icons/ticket/train.svg'
import icon_arrow_travel from '../../static-files/icons/ticket/arrow_travel.svg'
import icon_arrow_travel_city from '../../static-files/icons/ticket/arrow_travel_city.svg'
import icon_rub from '../../static-files/icons/ticket/rub.svg'
import icon_sprite_functions from '../../static-files/icons/ticket/sprite_functions.svg'
import { searchSeats } from '../redux/async action/searchSeats';
import searchSeatsSlice from '../redux/slices/searchSeatsSlice';
import { TTicketsStateR } from '../redux/types/Tickets/state';
import { TTrainMainProps } from '../redux/types/Train/Train';
import menuSlice from '../redux/slices/menuSlice';
import { TMenuState } from '../redux/types/Menu/menu';

export const Ticket = (props: TTrainMainProps) => {
    const { item } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state: TTicketsStateR) => state.searchTicketsState);
    const menuState = useSelector((state: TMenuState) => state.menuState)

    const choiceSeatsHendler = async (e: React.MouseEvent<HTMLElement>) => {
        const button = e.target as HTMLButtonElement;
        const ticket = button.closest('.ticket_container');
        const departureID = ticket?.getAttribute('id');
        const resp = await dispatch(searchSeats({ state, departureID }))
        dispatch(searchSeatsSlice.actions.choiceSeats(resp))
        dispatch(searchSeatsSlice.actions.addDepartureID(departureID))
        dispatch(searchSeatsSlice.actions.addTrain(item))
        dispatch(menuSlice.actions.openTickets())
        navigate(`/Frontend_DiplomWork/choiceSeats/${departureID}`);
    }

    const changeTrain = () => {
        // dispatch()
        navigate("/Frontend_DiplomWork/choiceTrain")
    }

    return (
        <div className="ticket_container d-flex flex-xl-row flex-lg-row flex-column" id={item.departure._id}>
            <div className="infoTrain flex-grow-1">
                <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns={icon_train}>
                    <path d="M55.7879 63.7038C56.7164 65.6856 59.433 66.369 59.5361 69C48.4635 69 37.5284 69 26.4557 69C26.6277 66.4031 29.2755 65.6856 30.2727 63.7379C29.3786 63.5329 28.5534 63.3962 27.7625 63.157C23.8423 61.9611 21.057 58.3392 21.057 54.2047C20.9882 45.389 20.9882 36.6416 21.0226 27.8601C21.0226 23.794 22.9139 20.7187 26.7308 19.3861C29.8257 18.3269 33.1268 17.6777 36.3936 17.3701C42.7896 16.7893 49.22 16.7893 55.5472 18.1219C57.1634 18.4636 58.7452 19.0444 60.1895 19.762C63.2843 21.2996 64.9005 23.9306 64.9349 27.3134C65.0037 36.3683 65.0381 45.4232 64.9349 54.478C64.9005 58.6467 61.8057 62.2003 57.748 63.2254C57.129 63.4304 56.4757 63.5329 55.7879 63.7038ZM40.1762 28.1676C35.5683 28.1676 31.0636 28.1676 26.6277 28.1676C26.6277 32.7463 26.6277 37.1884 26.6277 41.6304C31.2012 41.6304 35.6371 41.6304 40.1762 41.6304C40.1762 37.12 40.1762 32.7122 40.1762 28.1676ZM59.433 28.1676C54.8251 28.1676 50.3204 28.1676 45.8844 28.1676C45.8844 32.7463 45.8844 37.1884 45.8844 41.6304C50.4579 41.6304 54.8939 41.6304 59.433 41.6304C59.433 37.12 59.433 32.7122 59.433 28.1676ZM34.743 54.068C34.7774 51.8128 32.8861 49.9335 30.6166 49.9335C28.4158 49.9335 26.5589 51.7103 26.4901 53.8972C26.4214 56.1523 28.2439 58.0658 30.5134 58.1342C32.8174 58.1683 34.7086 56.3232 34.743 54.068ZM59.5017 53.9997C59.5017 51.7445 57.5761 49.8993 55.3065 49.9335C53.1057 49.9677 51.2832 51.7787 51.2488 53.9655C51.2144 56.2207 53.0713 58.1 55.3409 58.1342C57.6448 58.1342 59.5017 56.2548 59.5017 53.9997Z" fill="white" />
                    <circle cx="43" cy="43" r="42" stroke="white" strokeWidth="2" />
                </svg>
                <div className="train_number ticket_text">{item.departure.train.name}</div>
                <div className="train_diraction">
                    <div className="train_direction_from_city  ticket_text">
                        {item.departure.from.city.name}
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns={icon_arrow_travel_city} className='icon_arrow_travel_city'>
                            <path d="M13.3536 4.35355C13.5488 4.15829 13.5488 3.84171 13.3536 3.64645L10.1716 0.464466C9.97631 0.269204 9.65973 0.269204 9.46447 0.464466C9.2692 0.659728 9.2692 0.976311 9.46447 1.17157L12.2929 4L9.46447 6.82843C9.2692 7.02369 9.2692 7.34027 9.46447 7.53553C9.65973 7.7308 9.97631 7.7308 10.1716 7.53553L13.3536 4.35355ZM0 4.5L13 4.5V3.5L0 3.5L0 4.5Z" fill="#292929" />
                        </svg>
                    </div>
                    <div className="train_direction_to_city ticket_text">{item.departure.to.city.name}</div>
                </div>
            </div>
            <div className='infoTicket flex-grow-1'>
                <div className='departure d-flex flex-xl-row flex-lg-row flex-column w-100 justify-content-evenly w-100' >
                    <div className='departure_from_info d-flex flex-xl-column flex-lg-column flex-row justify-content-evenly gap-2'>
                        <div className="departure_time ticket_time">{moment.unix(item.departure.from.datetime).format('HH:mm')}</div>
                        <div className="departure_city ticket_city_name">{item.departure.from.city.name}</div>
                        <div className="departure_station ticket_railway_station">{item.departure.from.railway_station_name}</div>
                    </div>

                    <div className='time_travel'>
                        <div className='time_travel_text'>{moment.utc(item.departure.duration * 1000).format('HH:mm')}</div>
                        <svg width="30" height="20" viewBox="0 0 30 20" fill="none" xmlns={icon_arrow_travel} className='icon_arrow_travel'>
                            <path d="M19.3627 20C19.3627 17.8073 19.3627 15.3821 19.3627 12.8239C12.8621 12.8239 6.46582 12.8239 0 12.8239C0 11.0299 0 9.36877 0 7.57475C6.32677 7.57475 12.7231 7.57475 19.3279 7.57475C19.3279 4.91694 19.3279 2.42525 19.3279 0C22.9432 3.3887 26.5238 6.77741 30 10.0664C26.5585 13.2558 22.9432 16.6445 19.3627 20Z" fill="#FFA800" fillOpacity="0.79" />
                        </svg>
                    </div>
                    <div className='departure_to_info d-flex flex-xl-column flex-lg-column flex-row justify-content-evenly gap-2'>
                        <div className="departure_time ticket_time">{moment.unix(item.departure.to.datetime).format('HH:mm')}</div>
                        <div className="departure_city ticket_city_name">{item.departure.to.city.name}</div>
                        <div className="departure_station ticket_railway_station">{item.departure.to.railway_station_name}</div>
                    </div>
                </div>
            </div>
            <div className="infoPrice flex-grow-1">
                {item.departure.available_seats_info.fourth ?
                    <div className="seatInfo fourthClass">
                        <div className="seatName ticket_text">Сидячий</div>
                        <div className="seatCount ticket_text">{item.departure.available_seats_info.fourth}</div>
                        <span className='text_price'>от</span>
                        <div className="seatPrice ticket_text">{Number(Object.values(item.departure.price_info.fourth).sort((a: any, b: any) => a - b)[0])}</div>
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns={icon_rub}>
                            <path d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z" fill="#928F94" />
                        </svg>
                    </div> : <></>
                }

                {item.departure.available_seats_info.third ?
                    <div className="seatInfo thirdClass">
                        <div className="seatName ticket_text">Плацкарт</div>
                        <div className="seatCount ticket_text">{item.departure.available_seats_info.third}</div>
                        <span className='text_price'>от</span>
                        <div className="seatPrice ticket_text">{Number(Object.values(item.departure.price_info.third).sort((a: any, b: any) => a - b)[0])}</div>
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns={icon_rub}>
                            <path d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z" fill="#928F94" />
                        </svg>
                    </div> : <></>}

                {item.departure.available_seats_info.second ?
                    <div className="seatInfo secondClasss">
                        <div className="seatName ticket_text">Купе</div>
                        <div className="seatCount ticket_text">{item.departure.available_seats_info.second}</div>
                        <span className='text_price'>от</span>
                        <div className="seatPrice ticket_text">{Number(Object.values(item.departure.price_info.second).sort((a: any, b: any) => a - b)[0])}</div>
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns={icon_rub}>
                            <path d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z" fill="#928F94" />
                        </svg>
                    </div> : <></>}

                {item.departure.available_seats_info.first ?
                    <div className="seatInfo firstClasss">
                        <div className="seatName ticket_text">Люкс</div>
                        <div className="seatCount ticket_text">{item.departure.available_seats_info.first}</div>
                        <span className='text_price'>от</span>
                        <div className="seatPrice ticket_text">{Number(Object.values(item.departure.price_info.first).sort((a: any, b: any) => a - b)[0])}</div>
                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns={icon_rub}>
                            <path d="M4.00045 11.4048C4.00045 12.0432 4.00045 12.669 4.00045 13.3023C5.66463 13.3023 7.32349 13.3023 8.99034 13.3023C8.99034 13.9382 8.99034 14.5665 8.99034 15.2049C7.32882 15.2049 5.6673 15.2049 4.00045 15.2049C4.00045 16.4742 4.00045 17.7333 4.00045 19C3.33104 19 2.66963 19 1.99756 19C1.99756 17.7384 1.99756 16.4767 1.99756 15.21C1.32815 15.21 0.669408 15.21 0.00266697 15.21C0.00266697 14.5741 0.00266697 13.9458 0.00266697 13.3074C0.664074 13.3074 1.32548 13.3074 1.98956 13.3074C1.98956 12.6715 1.98956 12.0457 1.98956 11.4099C1.32815 11.4099 0.666741 11.4099 0 11.4099C0 10.7714 0 10.1431 0 9.50726C0.661407 9.50726 1.32281 9.50726 1.99222 9.50726C1.99222 6.33794 1.99222 3.17623 1.99222 0.00944994C2.03223 0.00691651 2.0589 0.00438309 2.08823 0.00438309C4.7552 0.00438309 7.42216 -0.00828404 10.0891 0.00944994C11.628 0.0195836 12.9668 0.554136 14.0922 1.55231C15.0364 2.38834 15.6444 3.41184 15.8844 4.61775C16.2178 6.29741 15.8284 7.83013 14.735 9.18805C13.9856 10.1203 13.0068 10.7638 11.8333 11.1312C11.2599 11.3111 10.6705 11.4048 10.0678 11.4048C8.08624 11.4073 6.10735 11.4048 4.12579 11.4073C4.08579 11.4048 4.04579 11.4048 4.00045 11.4048ZM4.00311 1.90445C4.00311 4.44548 4.00311 6.97383 4.00311 9.50473C4.03245 9.50473 4.05645 9.50473 4.08046 9.50473C6.08068 9.50473 8.0809 9.50979 10.0811 9.49966C10.3905 9.49712 10.7079 9.45406 11.0066 9.38059C13.1215 8.84857 14.3776 6.8725 13.8976 4.85336C13.4868 3.13063 11.8707 1.90445 10.0091 1.90445C8.0489 1.90445 6.08868 1.90445 4.12846 1.90445C4.08846 1.90445 4.04845 1.90445 4.00311 1.90445Z" fill="#928F94" />
                        </svg>

                    </div> : <></>}


                <div className='footer_ticket_price'>
                    <div className='available_functions'>
                        <svg width="92" height="20" viewBox="0 0 92 20" fill="none" xmlns={icon_sprite_functions}>
                            <path className="sprite_wifi" d="M20 6.21434C19.7667 6.4347 19.5335 6.65506 19.3069 6.8821C19.0803 7.10914 18.867 7.34953 18.6271 7.60995C16.1946 5.25277 13.3356 4.01074 9.99 4.01074C6.65778 4.01074 3.81206 5.25277 1.44618 7.54318C0.973009 7.07575 0.519827 6.62167 0 6.10082C0.71976 5.53991 1.41953 4.90553 2.19927 4.38468C7.75075 0.698658 14.9084 1.33971 19.7467 5.93388C19.8267 6.00734 19.9134 6.07411 20 6.14089C20 6.1676 20 6.18763 20 6.21434Z" fill="#C4C4C4" />
                            <path className="sprite_wifi" d="M9.66998 17.8334C9.58334 17.7933 9.4967 17.7466 9.4034 17.7065C8.69697 17.406 8.30376 16.6648 8.45038 15.9102C8.597 15.1623 9.25678 14.6215 10.0232 14.6215C10.7829 14.6281 11.4427 15.1757 11.5827 15.9236C11.7226 16.6715 11.3161 17.4127 10.603 17.7065C10.5097 17.7466 10.4231 17.7866 10.3298 17.8267C10.1098 17.8334 9.8899 17.8334 9.66998 17.8334Z" fill="#C4C4C4" />
                            <path className="sprite_wifi" d="M4.25845 10.3678C3.78527 9.90035 3.33209 9.45295 2.87891 8.99887C6.32442 5.25943 13.0089 4.76528 17.1142 8.95881C16.6543 9.41288 16.1878 9.86696 15.7146 10.3344C14.1551 8.83861 12.2425 7.99723 9.98987 8.00391C7.74395 8.01059 5.83792 8.84529 4.25845 10.3678Z" fill="#C4C4C4" />
                            <path className="sprite_wifi" d="M14.335 11.8102C13.8619 12.2776 13.4087 12.7317 12.9555 13.1791C11.1761 11.4963 8.61029 11.6766 7.0708 13.1724C6.61762 12.7183 6.16444 12.2709 5.70459 11.8168C7.53065 9.67334 11.7226 9.13246 14.335 11.8102Z" fill="#C4C4C4" />

                            <path className="sprite_rocket" d="M42.2844 17.3529C42.1538 17.357 42.0721 17.304 42.0007 17.2328C41.4906 16.7339 40.9763 16.2391 40.4702 15.7382C39.8988 15.1721 39.3356 14.5959 38.7601 14.0339C38.6316 13.9076 38.5989 13.7753 38.6499 13.6266C38.7622 13.2907 38.8744 12.9506 39.0152 12.6248C39.9213 10.5173 41.1804 8.63385 42.6946 6.91733C44.1006 5.32298 45.6964 3.9465 47.4922 2.80826C48.1289 2.40509 48.7941 2.05079 49.4451 1.67206C49.5124 1.63337 49.541 1.66799 49.5818 1.70668C50.2185 2.34197 50.8572 2.97727 51.4939 3.6146C52.4265 4.54515 53.3591 5.47773 54.2937 6.40624C54.3529 6.46529 54.357 6.50398 54.3202 6.57728C53.5244 8.13498 52.5591 9.57865 51.4205 10.9063C50.7001 11.7452 49.9185 12.525 49.0961 13.2642C47.2106 14.9583 45.0964 16.2961 42.7292 17.2226C42.6068 17.2714 42.4803 17.3101 42.3538 17.3509C42.3232 17.3529 42.2905 17.3509 42.2844 17.3529ZM43.6312 11.1221C43.5639 11.8633 44.2516 12.3764 44.8556 12.3723C45.5352 12.3662 46.1025 11.8063 46.1004 11.1241C46.0984 10.552 45.7005 9.88001 44.7577 9.89426C44.1475 9.90444 43.6312 10.4583 43.6312 11.1221ZM48.3941 8.81507C49.1125 8.89041 49.6471 8.16552 49.641 7.59742C49.6369 7.0171 49.1288 6.34719 48.3594 6.3533C47.7452 6.35737 47.1289 6.91733 47.1555 7.6076C47.182 8.3162 47.6738 8.81507 48.3941 8.81507Z" fill="#C4C4C4" />
                            <path className="sprite_rocket" d="M54.7653 5.61827C53.2981 4.17256 51.8288 2.72686 50.3452 1.26486C50.6289 1.15287 50.8942 1.04291 51.1635 0.941104C52.1492 0.564406 53.1613 0.29359 54.2 0.13273C54.6184 0.0675711 55.0428 0.0248108 55.4673 0.00241249C55.8836 -0.0199858 56.0019 0.110331 55.9999 0.52979C55.9958 1.24246 55.8713 1.93885 55.7183 2.63319C55.4918 3.6574 55.1734 4.65515 54.7571 5.61827C54.751 5.63049 54.7449 5.64271 54.7388 5.65289C54.7469 5.64067 54.7571 5.62845 54.7653 5.61827Z" fill="#C4C4C4" />
                            <path className="sprite_rocket" d="M42.9703 5.98269C42.9295 6.03156 42.8928 6.08247 42.8479 6.12726C41.6255 7.39989 40.5888 8.80895 39.7073 10.3341C39.3971 10.8716 39.1196 11.4255 38.8318 11.9752C38.7869 12.0608 38.7441 12.0811 38.6502 12.0547C37.8666 11.8307 37.083 11.6148 36.2994 11.3929C36.0504 11.3216 35.9382 11.0834 36.0341 10.839C36.0647 10.7617 36.1075 10.6863 36.1524 10.6151C37.1871 9.00239 38.54 7.72772 40.246 6.84604C41.0643 6.42251 41.9275 6.12319 42.8377 5.96029C42.8764 5.95419 42.9152 5.95418 42.954 5.95215C42.9601 5.96233 42.9642 5.97251 42.9703 5.98269Z" fill="#C4C4C4" />
                            <path className="sprite_rocket" d="M43.9009 17.188C45.0192 16.6504 46.0946 16.0457 47.117 15.3452C48.1373 14.6468 49.0883 13.8608 49.9984 13.0239C50.0106 13.0321 50.0249 13.0402 50.0372 13.0484C50.029 13.1156 50.0229 13.1828 50.0106 13.2499C49.7066 14.8484 48.9944 16.2513 47.9741 17.5056C47.2292 18.4219 46.3538 19.1936 45.3498 19.8187C45.2702 19.8697 45.1865 19.9165 45.0988 19.9511C44.9212 20.0203 44.7498 19.9613 44.6723 19.7882C44.5947 19.6151 44.5294 19.4359 44.4763 19.2547C44.2825 18.5807 44.0947 17.9047 43.905 17.2307C43.9029 17.2226 43.9029 17.2124 43.9009 17.188Z" fill="#C4C4C4" />
                            <path className="sprite_rocket" d="M41.2338 17.7012C41.0971 17.805 40.9644 17.9231 40.8155 18.0147C40.2318 18.3772 39.6094 18.6684 38.9707 18.9168C38.0483 19.2772 37.1178 19.6132 36.1893 19.9593C36.1464 19.9756 36.0995 19.9838 36.0342 20C36.1097 19.7822 36.175 19.5847 36.2464 19.3892C36.6729 18.2163 37.1035 17.0435 37.6565 15.9215C37.834 15.5632 38.0177 15.2068 38.2891 14.9055C38.3136 14.879 38.3401 14.8525 38.3585 14.8322C39.3115 15.7851 40.2624 16.7319 41.2338 17.7012Z" fill="#C4C4C4" />

                            <path className="sprite_food" d="M73.9766 1C74.2519 1 74.4521 1 74.6523 1C79.6571 1 84.662 1 89.6669 1C91.2309 1 91.9941 1.76409 91.9941 3.35491C91.9941 4.20668 92.0066 5.07098 91.9941 5.92276C91.9816 7.17537 91.1558 8.00209 89.9171 8.01461C89.2915 8.02714 88.6784 8.01461 88.0027 8.01461C88.0027 8.99165 88.0027 9.89353 88.0027 10.8079C87.9902 13.3132 86.3011 15.0167 83.8112 15.0292C81.9343 15.0292 80.0575 15.0418 78.1807 15.0292C75.7158 15.0167 74.0016 13.3257 74.0016 10.8706C73.9641 7.60125 73.9766 4.35699 73.9766 1ZM88.0403 3.0167C88.0403 3.99374 88.0403 4.9833 88.0403 5.97286C88.6909 5.97286 89.3165 5.97286 89.9421 5.97286C89.9421 4.97077 89.9421 3.99374 89.9421 3.0167C89.2915 3.0167 88.6909 3.0167 88.0403 3.0167Z" fill="#C4C4C4" />
                            <path className="sprite_food" d="M89.955 17.0709C89.955 17.7223 89.955 18.3486 89.955 18.9999C83.9616 18.9999 77.9933 18.9999 72 18.9999C72 18.3486 72 17.7348 72 17.0709C77.9683 17.0709 83.9366 17.0709 89.955 17.0709Z" fill="#C4C4C4" />
                        </svg>
                    </div>
                    {menuState.check ? <button className='choiceSeatsBtn' onClick={changeTrain}>Изменить</button> : <button className='choiceSeatsBtn' onClick={choiceSeatsHendler}>Выбрать места</button>}
                </div>
            </div>
        </div>
    )
}
