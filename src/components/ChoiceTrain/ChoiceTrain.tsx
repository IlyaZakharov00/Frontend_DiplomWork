import './ChoiceTrain.css'
import SliderPrice from './SliderPrice/SliderPrice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import icon_coupe from '../../static-files/icons/aside_coupe.svg'
import icon_plac from '../../static-files/icons/aside_plac.svg'
import icon_sit from '../../static-files/icons/aside_sit.svg'
import icon_lux from '../../static-files/icons/aside_lux.svg'
import icon_wifi from '../../static-files/icons/aside_wifi.svg'
import icon_boost from '../../static-files/icons/aside_boost.svg'
import icon_arrow_right from '../../static-files/icons/icon_pages_arrow_right.svg'
import icon_arrow_left from '../../static-files/icons/icon_pages_arrow_left.svg'
import searchTicketsSlice from '../redux/slices/searchTicketsSlice'
import accordion_arrow from '../../static-files/icons/accordion_arrow.svg'
import SliderTimeArrival from './SliderTime/SliderTimeArrival'
import SliderTimeDeparture from './SliderTime/SliderTimeDeparture'
import { searchLastTickets } from '../redux/async action/searchLastTickets'
import { addTickets } from '../redux/slices/lastTickets'
import { LastTicket } from '../LastTickets/LastTicket'
import { Ticket } from '../Ticket/Ticket'
import { searchDirections } from '../redux/async action/searchDirections'
import { Loading } from '../Loading/Loading'
import { NothingSearched } from './NothingSearched/NothingSearched'

export const ChoiceTrain = () => {
    const dispatch = useDispatch();
    const state = useSelector((state: any) => state.searchTicketsState);
    const stateLastTickets = useSelector((state: any) => state.lastTickets.lastTickets);
    const isLoading = state.loading

    useEffect(() => {
        dispatch(searchTicketsSlice.actions.openSearchTicketsPage())

        const fetchLastTickets = async () => {
            const lastTickets = await dispatch(searchLastTickets())
            dispatch(addTickets(lastTickets))
        }
        fetchLastTickets();
    }, [])

    useEffect(() => {
        dispatch(searchDirections(state))
    }, [state.comfortOptions, state.class, state.limit, state.offset, state.sort, state.prices, state.times])

    const countNumberOfPages = () => Array(Math.ceil(state.responseFromServer.total_count / (state.limit ? state.limit : 5))).fill('')

    const onChangeHdnler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.getAttribute('id')
        const data_option = e.target.getAttribute('data-option')
        const isChecked = e.target.checked;

        switch (data_option) {
            case 'class':
                dispatch(searchTicketsSlice.actions.addClass({
                    id,
                    isChecked,
                }))
                break;

            case 'comfortOptions':
                dispatch(searchTicketsSlice.actions.addComfortOptions({
                    id,
                    isChecked,
                }))
                break;

            default:
                break;
        }

    }

    const changeActiveShowNumber = (e: React.MouseEvent) => {
        const activeNow = document.querySelector(".active_showNumber")
        const clickedNumber = e.target as HTMLDivElement;
        const number = Number(clickedNumber.textContent);
        activeNow?.classList.remove('active_showNumber');
        clickedNumber.classList.add('active_showNumber')
        dispatch(searchTicketsSlice.actions.addLimit(number))
    }

    const hendlerChangeSelect = (e: React.ChangeEvent) => {
        const selectedSort = e.target as HTMLSelectElement;
        dispatch(searchTicketsSlice.actions.addSort(selectedSort.value))
    }

    const changeActivePage = (e: React.MouseEvent) => {
        const pageElement = e.target as HTMLElement;
        const pageNumber = pageElement.textContent;
        dispatch(searchTicketsSlice.actions.addActivePage(pageNumber))
        dispatch(searchDirections(state))
    }

    const nextPageHendler = () => {
        dispatch(searchTicketsSlice.actions.nextPage())
        dispatch(searchDirections(state))
    }

    const prevPageHendler = () => {
        dispatch(searchTicketsSlice.actions.prevPage())
        dispatch(searchDirections(state))
    }

    return (
        <>
            {isLoading ? <Loading /> :
                <div className="choiceTrain_container mt-5">
                    <div className="row m-auto pt-5 d-flex justify-content-between w-75">
                        <div className="col-xl-3 col-lg-12 p-0">
                            <aside className="choiceTrain_aside">
                                <div className="aboutTrain">
                                    <div className='aboutTrain_dates aboutTrainSection pt-5 px-4'>
                                        <h2 className='aboutTrain_title'>Дата поездки</h2>
                                        <input type="date" className='aboutTrain_input date_travel w-100 ps-3' value={state.dates.date_start} readOnly />
                                        <h2 className='aboutTrain_title'>Дата возвращения</h2>
                                        <input type="date" className='aboutTrain_input date_back w-100 ps-3' value={state.dates.date_end} readOnly />
                                    </div>
                                    <ul className='aboutTrain_functionsList aboutTrainSection pt-5 px-4'>
                                        <li className='function_item'>
                                            <svg className='icon_Func' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns={icon_coupe}>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M1.53516 0H15.4648C16.3091 0 17 0.695465 17 1.54544V15.4546C17 16.3045 16.3091 17 15.4648 17H1.53516C0.690918 17 0 16.3045 0 15.4546V1.54544C0 0.695465 0.690918 0 1.53516 0ZM13.124 2.125C12.7021 2.125 12.3564 2.47272 12.3564 2.89774V4H15.2925V2.89774C15.2925 2.47272 14.9468 2.125 14.5249 2.125H13.124ZM15.2925 5H12.3564V10.0454C12.3564 10.4705 12.7021 10.8182 13.124 10.8182H14.5249C14.9468 10.8182 15.2925 10.4705 15.2925 10.0454V5ZM4.54736 4V2.97501C4.54736 2.51135 4.16357 2.125 3.70312 2.125H2.45605C1.99561 2.125 1.61182 2.51135 1.61182 2.97501V4H4.54736ZM1.61182 5H4.54736V9.98749C4.54736 10.4511 4.16357 10.8375 3.70312 10.8375H2.45605C1.99561 10.8375 1.61182 10.4511 1.61182 9.98749V5ZM15.2349 16.7296C16.0405 16.7296 16.7124 16.0727 16.7124 15.242V12.4796H0.287598V15.242C0.287598 16.0534 0.939941 16.7296 1.76514 16.7296H15.2349Z" fill="#E5E5E5" />
                                            </svg>
                                            <div className='function_item_title'>Купе</div>
                                            <label className='switch'>
                                                <input type="checkbox" className='checkbox' onChange={onChangeHdnler} id='have_first_class' data-option='class' checked={state.class.have_first_class} />
                                                <span className='slider'></span>
                                            </label>
                                        </li>
                                        <li className='function_item'>
                                            <svg className='icon_Func' width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns={icon_plac}>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.4648 0H1.53516C0.690918 0 0 0.689941 0 1.53326V15.4667C0 16.3101 0.690918 17 1.53516 17H6H7H15.4648C16.3091 17 17 16.3101 17 15.4667V1.53326C17 0.689941 16.3091 0 15.4648 0ZM7 16.0417H11.9536C12.376 16.0417 12.7212 15.6967 12.7212 15.2751H12.7021V13.8951C12.7021 13.4735 12.3564 13.1285 11.9346 13.1285H7V16.0417ZM6 13.1285H5.04639C4.62402 13.1285 4.27881 13.4735 4.27881 13.8951V15.2751C4.27881 15.6967 4.62402 16.0417 5.04639 16.0417H6V13.1285ZM2.24512 9.88953C1.91895 9.88953 1.6499 9.62122 1.6499 9.29535V4H4.56641V9.29535C4.56641 9.62122 4.29785 9.88953 3.97168 9.88953H2.24512ZM1.6499 2.06989V3H4.56641V2.06989C4.56641 1.74408 4.29785 1.47577 3.97168 1.47577H2.24512C1.91895 1.47577 1.6499 1.74408 1.6499 2.06989ZM12.2417 9.27618V4H15.1772V9.27618C15.1772 9.62122 14.8892 9.90869 14.5439 9.90869H12.8745C12.5293 9.90869 12.2417 9.62122 12.2417 9.27618ZM12.2417 3H15.1772V2.08905C15.1772 1.74408 14.8892 1.4566 14.5439 1.4566H12.8745C12.5293 1.4566 12.2417 1.74408 12.2417 2.08905V3Z" fill="#E5E5E5" />
                                            </svg>
                                            <span className='function_item_title'>Плацкарт</span>
                                            <label className='switch'>
                                                <input type="checkbox" className='checkbox' onChange={onChangeHdnler} id='have_second_class' data-option='class' checked={state.class.have_second_class} />
                                                <span className='slider'></span>
                                            </label>
                                        </li>
                                        <li className='function_item'>
                                            <svg className='icon_Func' width="14" height="23" viewBox="0 0 14 23" fill="none" xmlns={icon_sit}>
                                                <path d="M0 8.75326C0.141674 8.57335 0.25759 8.35002 0.437903 8.21975C1.03036 7.7979 1.79669 8.08947 1.97056 8.80288C2.12512 9.44806 2.25391 10.0994 2.38914 10.7508C2.62741 11.8737 2.85925 13.0027 3.10396 14.1256C3.42594 15.5834 4.41122 16.3527 5.9632 16.3589C7.07084 16.3651 8.17203 16.3527 9.27967 16.3651C9.93008 16.3713 10.2971 16.6566 10.4002 17.2025C10.5032 17.7919 10.0846 18.3378 9.46642 18.344C8.03036 18.3564 6.5943 18.3936 5.15823 18.3316C3.39374 18.2572 1.75161 16.8551 1.29439 15.0809C0.99816 13.9208 0.779209 12.7422 0.521619 11.5759C0.354186 10.8004 0.173873 10.0312 0 9.25575C0 9.08825 0 8.92075 0 8.75326Z" fill="#E5E5E5" />
                                                <path d="M4.54015 0C5.04889 0.105461 5.51899 0.266754 5.9247 0.601748C6.7683 1.29655 7.02589 2.56829 6.49783 3.51123C5.9247 4.54103 4.72046 5.04972 3.61927 4.73334C2.52451 4.41696 1.86766 3.65392 1.78394 2.50625C1.71954 1.62534 2.20896 0.694802 3.22644 0.235737C3.45827 0.130275 3.71586 0.0806467 3.96701 0C4.15377 0 4.34696 0 4.54015 0Z" fill="#E5E5E5" />
                                                <path d="M11.3467 15.875C11.1921 15.875 11.0826 15.875 10.9796 15.875C9.33104 15.875 7.68246 15.8812 6.02745 15.875C4.76526 15.8688 3.91521 15.1988 3.6705 14.0077C3.24548 11.9853 2.82689 9.96296 2.40187 7.94058C1.97041 5.8872 3.88301 4.89462 5.25468 5.32267C6.13048 5.59563 6.58126 6.22839 6.76158 7.05347C7.1222 8.70983 7.46351 10.3662 7.79838 12.0225C7.85633 12.3203 7.95293 12.432 8.2878 12.4258C9.62726 12.4134 10.9667 12.4134 12.3062 12.4568C13.2142 12.4816 13.9161 13.1888 13.9805 14.0635C13.9934 14.2124 13.9998 14.3613 13.9998 14.5102C13.9998 16.8117 13.9998 19.1071 13.9998 21.4086C13.9998 21.6133 13.9998 21.8242 13.9548 22.0227C13.8131 22.6493 13.2464 23.0401 12.5831 22.9967C11.9327 22.9533 11.424 22.4756 11.3596 21.8428C11.3467 21.6939 11.3467 21.5451 11.3467 21.3962C11.3467 19.6778 11.3467 17.9532 11.3467 16.2348C11.3467 16.1293 11.3467 16.0177 11.3467 15.875Z" fill="#E5E5E5" />
                                            </svg>
                                            <span className='function_item_title'>Сидячий</span>
                                            <label className='switch'>
                                                <input type="checkbox" className='checkbox' onChange={onChangeHdnler} id='have_third_class' data-option='class' checked={state.class.have_third_class} />
                                                <span className='slider'></span>
                                            </label>
                                        </li>
                                        <li className='function_item'>
                                            <svg className='icon_Func' width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns={icon_lux}>
                                                <path d="M11 0L13.5857 7.63103H22L15.2072 12.369L17.7928 20L11 15.304L4.20717 20L6.79283 12.369L0 7.63103H8.41434L11 0Z" fill="#E5E5E5" />
                                            </svg>
                                            <span className='function_item_title'>Люкс</span>
                                            <label className='switch'>
                                                <input type="checkbox" className='checkbox' onChange={onChangeHdnler} id='have_fourth_class' data-option='class' checked={state.class.have_fourth_class} />
                                                <span className='slider'></span>
                                            </label>
                                        </li>
                                        <li className='function_item'>
                                            <svg className='icon_Func' width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns={icon_wifi}>
                                                <path d="M24 5.05721C23.7201 5.32164 23.4402 5.58607 23.1683 5.85852C22.8964 6.13096 22.6405 6.41944 22.3525 6.73195C19.4335 3.90332 16.0027 2.41289 11.988 2.41289C7.98934 2.41289 4.57448 3.90332 1.73542 6.65182C1.16761 6.0909 0.623792 5.54601 0 4.92099C0.863712 4.24789 1.70343 3.48664 2.63912 2.86162C9.3009 -1.56161 17.89 -0.792353 23.6961 4.72066C23.7921 4.8088 23.896 4.88893 24 4.96906C24 5.00112 24 5.02516 24 5.05721Z" fill="#E5E5E5" />
                                                <path d="M11.6041 19C11.5001 18.9519 11.3961 18.8958 11.2842 18.8477C10.4365 18.4872 9.96461 17.5977 10.1406 16.6922C10.3165 15.7948 11.1082 15.1457 12.0279 15.1457C12.9396 15.1537 13.7314 15.8108 13.8993 16.7082C14.0672 17.6057 13.5794 18.4952 12.7237 18.8477C12.6117 18.8958 12.5078 18.9439 12.3958 18.992C12.1319 19 11.868 19 11.6041 19Z" fill="#E5E5E5" />
                                                <path d="M5.11053 10.0413C4.54272 9.4804 3.9989 8.94352 3.45508 8.39863C7.5897 3.9113 15.611 3.31833 20.5374 8.35055C19.9856 8.89545 19.4258 9.44034 18.8579 10.0013C16.9866 8.20632 14.6913 7.19667 11.9882 7.20468C9.29313 7.2127 7.00589 8.21433 5.11053 10.0413Z" fill="#E5E5E5" />
                                                <path d="M17.2023 11.7722C16.6344 12.3331 16.0906 12.878 15.5468 13.4148C13.4115 11.3955 10.3325 11.6119 8.48516 13.4068C7.94134 12.8619 7.39752 12.3251 6.8457 11.7802C9.03697 9.20797 14.0673 8.55891 17.2023 11.7722Z" fill="#E5E5E5" />
                                            </svg>
                                            <span className='function_item_title'>Wi-Fi</span>
                                            <label className='switch'>
                                                <input type="checkbox" className='checkbox' onChange={onChangeHdnler} id='have_wifi' data-option='comfortOptions' checked={state.comfortOptions.have_wifi} />
                                                <span className='slider'></span>
                                            </label>
                                        </li>
                                        <li className='function_item'>
                                            <svg className='icon_Func' width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns={icon_boost}>
                                                <path d="M6.28438 17.3529C6.15378 17.357 6.07215 17.304 6.00073 17.2328C5.49056 16.7339 4.97631 16.2391 4.47022 15.7382C3.89884 15.1721 3.33561 14.5959 2.76014 14.0339C2.63158 13.9076 2.59893 13.7753 2.64995 13.6266C2.76218 13.2907 2.87442 12.9506 3.01523 12.6248C3.92128 10.5173 5.18038 8.63385 6.69455 6.91733C8.10057 5.32298 9.69638 3.9465 11.4922 2.80826C12.1289 2.40509 12.7941 2.05079 13.4451 1.67206C13.5124 1.63337 13.541 1.66799 13.5818 1.70668C14.2185 2.34197 14.8572 2.97727 15.4939 3.6146C16.4265 4.54515 17.3591 5.47773 18.2937 6.40624C18.3529 6.46529 18.357 6.50398 18.3202 6.57728C17.5244 8.13498 16.5591 9.57865 15.4205 10.9063C14.7001 11.7452 13.9185 12.525 13.0961 13.2642C11.2106 14.9583 9.09642 16.2961 6.72924 17.2226C6.6068 17.2714 6.48028 17.3101 6.35376 17.3509C6.32315 17.3529 6.2905 17.3509 6.28438 17.3529ZM7.63122 11.1221C7.56388 11.8633 8.25158 12.3764 8.85562 12.3723C9.53516 12.3662 10.1025 11.8063 10.1004 11.1241C10.0984 10.552 9.70046 9.88001 8.75767 9.89426C8.14751 9.90444 7.63122 10.4583 7.63122 11.1221ZM12.3941 8.81507C13.1125 8.89041 13.6471 8.16552 13.641 7.59742C13.6369 7.0171 13.1288 6.34719 12.3594 6.3533C11.7452 6.35737 11.1289 6.91733 11.1555 7.6076C11.182 8.3162 11.6738 8.81507 12.3941 8.81507Z" fill="#E5E5E5" />
                                                <path d="M18.7653 5.61827C17.2981 4.17256 15.8288 2.72686 14.3452 1.26486C14.6289 1.15287 14.8942 1.04291 15.1635 0.941104C16.1492 0.564406 17.1613 0.29359 18.2 0.13273C18.6184 0.0675711 19.0428 0.0248108 19.4673 0.00241249C19.8836 -0.0199858 20.0019 0.110331 19.9999 0.52979C19.9958 1.24246 19.8713 1.93885 19.7183 2.63319C19.4918 3.6574 19.1734 4.65515 18.7571 5.61827C18.751 5.63049 18.7449 5.64271 18.7388 5.65289C18.7469 5.64067 18.7571 5.62845 18.7653 5.61827Z" fill="#E5E5E5" />
                                                <path d="M6.97031 5.98275C6.92949 6.03162 6.89276 6.08253 6.84787 6.12732C5.62551 7.39995 4.58885 8.80901 3.70728 10.3341C3.3971 10.8717 3.11957 11.4255 2.83183 11.9753C2.78694 12.0608 2.74408 12.0812 2.65021 12.0547C1.8666 11.8307 1.08298 11.6149 0.299363 11.393C0.050401 11.3217 -0.0618358 11.0835 0.0340756 10.8391C0.0646856 10.7617 0.10754 10.6864 0.152434 10.6151C1.18705 9.00245 2.54002 7.72778 4.24602 6.8461C5.06432 6.42257 5.92753 6.12325 6.83766 5.96035C6.87644 5.95425 6.91521 5.95425 6.95398 5.95221C6.9601 5.96239 6.96419 5.97257 6.97031 5.98275Z" fill="#E5E5E5" />
                                                <path d="M7.90088 17.188C9.01917 16.6505 10.0946 16.0457 11.117 15.3453C12.1373 14.6468 13.0883 13.8609 13.9984 13.024C14.0106 13.0321 14.0249 13.0403 14.0372 13.0484C14.029 13.1156 14.0229 13.1828 14.0106 13.25C13.7066 14.8484 12.9944 16.2514 11.9741 17.5057C11.2292 18.422 10.3538 19.1937 9.34975 19.8188C9.27017 19.8697 9.1865 19.9165 9.09875 19.9512C8.92121 20.0204 8.7498 19.9613 8.67225 19.7883C8.59471 19.6152 8.5294 19.436 8.47635 19.2548C8.28248 18.5808 8.09474 17.9048 7.90496 17.2308C7.90292 17.2226 7.90292 17.2125 7.90088 17.188Z" fill="#E5E5E5" />
                                                <path d="M5.2338 17.7011C5.09708 17.805 4.96443 17.9231 4.81547 18.0147C4.23183 18.3771 3.60943 18.6683 2.9707 18.9167C2.04832 19.2771 1.11777 19.6131 0.18927 19.9593C0.146416 19.9756 0.0994811 19.9837 0.0341797 20C0.109684 19.7821 0.174986 19.5846 0.246409 19.3891C0.672909 18.2163 1.10349 17.0434 1.65651 15.9215C1.83405 15.5631 2.01771 15.2068 2.28912 14.9054C2.31361 14.8789 2.34014 14.8525 2.3585 14.8321C3.31149 15.785 4.26244 16.7319 5.2338 17.7011Z" fill="#E5E5E5" />
                                            </svg>
                                            <span className='function_item_title'>Экспресс</span>
                                            <label className='switch'>
                                                <input type="checkbox" className='checkbox' onChange={onChangeHdnler} id='have_express' data-option='comfortOptions' checked={state.comfortOptions.have_express} />
                                                <span className='slider'></span>
                                            </label>
                                        </li>
                                    </ul>
                                    <div className='aboutTrain_price aboutTrainSection px-4 py-3'>
                                        <h2 className='price_title'>Стоимость</h2>
                                        <div className="sliderContainer w-100">
                                            <div id="slider-price">
                                                <SliderPrice />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='aboutTrain_cityFirst aboutTrainSection px-4 py-3'>
                                        <div className="accordion accordion-flush" id="accordionFlushExample">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingOne">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns={accordion_arrow}>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23877 0 0 2.23853 0 5V21C0 23.7615 2.23877 26 5 26H27C29.7612 26 32 23.7615 32 21V5C32 2.23853 29.7612 0 27 0H5ZM17.8369 14.2236V17.3333C19.3442 15.8793 20.8667 14.4108 22.3154 13.0288C20.8521 11.6035 19.3442 10.135 17.8223 8.66663V11.949H9.68408V14.2236H17.8369Z" fill="#FFA800" />
                                                        </svg>
                                                        <h2 className='cityFirst_title'>Туда</h2>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                                    <div className="sliderContainer w-100">
                                                        <div id="slider-time">
                                                            <SliderTimeDeparture />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='aboutTrain_citySecond aboutTrainSection px-4 py-3'>
                                        <div className="accordion accordion-flush" id="accordionFlushExample_2">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="flush-headingOne_2">
                                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne_2" aria-expanded="false" aria-controls="flush-collapseOne_2">
                                                        <svg width="32" height="26" viewBox="0 0 32 26" fill="none" xmlns={accordion_arrow}>
                                                            <path fillRule="evenodd" clipRule="evenodd" d="M5 0C2.23877 0 0 2.23853 0 5V21C0 23.7615 2.23877 26 5 26H27C29.7612 26 32 23.7615 32 21V5C32 2.23853 29.7612 0 27 0H5ZM17.8369 14.2236V17.3333C19.3442 15.8793 20.8667 14.4108 22.3154 13.0288C20.8521 11.6035 19.3442 10.135 17.8223 8.66663V11.949H9.68408V14.2236H17.8369Z" fill="#FFA800" />
                                                        </svg>
                                                        <h2 className='citySecond_title'>Обратно</h2>
                                                    </button>
                                                </h2>
                                                <div id="flush-collapseOne_2" className="accordion-collapse collapse" aria-labelledby="flush-headingOne_2" data-bs-parent="#accordionFlushExample_2">
                                                    <div className="sliderContainer w-100">
                                                        <div id="slider-time">
                                                            <SliderTimeArrival />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lastTickets mt-5">
                                    <h2 className='lastTickets_title'>Последние билеты</h2>
                                    <div className='lastTickets_container'>
                                        {stateLastTickets.length !== 0 ? stateLastTickets.map((ticket: {}, index: number) =>
                                            <LastTicket ticket={ticket} key={index} />) : <></>}
                                    </div>
                                </div>
                            </aside>
                        </div>
                        <div className="col-xl-8 col-lg-12 p-0">
                            {state.responseFromServer.items ? <main className="choiceTrain_main w-100">
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
                                    {state.responseFromServer.items && state.responseFromServer.items.length !== 0 ? state.responseFromServer.items.map((item: any, index: number) => <Ticket item={item} key={index} />) : <></>}
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
                                    </div> :
                                    <></>
                                }
                            </main> : <NothingSearched />
                            }
                        </div>
                    </div>
                </div >
            }
        </>
    )
}
