import { useSelector } from 'react-redux';
import { TMenuState } from '../redux/types/Menu/menu';
import './ChoiceTrainMenu.css'
// import icon_vector from '../../static-files/icons/icon_vector.svg'

export const ChoiceTrainMenu = () => {
    const menuState = useSelector((state: TMenuState) => state.menuState);

    return (
        <div className="col-12">
            <ul className='choiceTrain_menu_list p-0 d-flex m-0'>
                <li className={'choiceTrain_menu_item  d-flex justify-content-evenly align-items-center ' + `${menuState.ticekts ? "active_item" : ""}`} id='1'>
                    <div className='item_number'>1</div>
                    <h3 className='item_title'>Билеты</h3>
                    {/* <svg width="38" height="99" viewBox="0 0 38 99" fill="none" xmlns={icon_vector} className='arrow_block'>
                    <path d="M1 1L36.6208 48.1734C37.4353 49.2521 37.4279 50.7422 36.6027 51.8128L1 98" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                </li>
                <li className={'choiceTrain_menu_item  d-flex justify-content-evenly align-items-center ' + `${menuState.passangers ? "active_item" : ""}`} id='2' >
                    <div className='item_number' >2</div>
                    <h3 className='item_title'>Пассажиры</h3>
                    {/* <svg width="38" height="99" viewBox="0 0 38 99" fill="none" xmlns={icon_vector}>
                    <path d="M1 1L36.6208 48.1734C37.4353 49.2521 37.4279 50.7422 36.6027 51.8128L1 98" stroke="#E5E5E5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                </li>
                <li className={'choiceTrain_menu_item  d-flex justify-content-evenly align-items-center ' + `${menuState.pay ? "active_item" : ""}`} id='3' >
                    <div className='item_number' >3</div>
                    <h3 className='item_title'>Оплата</h3>
                    {/* <svg width="38" height="99" viewBox="0 0 38 99" fill="none" xmlns={icon_vector}>
                    <path d="M1 1L36.6208 48.1734C37.4353 49.2521 37.4279 50.7422 36.6027 51.8128L1 98" stroke="#E5E5E5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                </li>
                <li className={'choiceTrain_menu_item  d-flex justify-content-evenly align-items-center ' + `${menuState.check ? "active_item" : ""}`} id='4' >
                    <div className='item_number'>4</div>
                    <h3 className='item_title'>Проверка</h3>
                    {/* <svg width="38" height="99" viewBox="0 0 38 99" fill="none" xmlns={icon_vector}>
                    <path d="M1 1L36.6208 48.1734C37.4353 49.2521 37.4279 50.7422 36.6027 51.8128L1 98" stroke="#E5E5E5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg> */}
                </li>
            </ul>
        </div>
    )
}