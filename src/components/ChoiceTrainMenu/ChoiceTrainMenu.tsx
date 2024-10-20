import './ChoiceTrainMenu.css'
import icon_vector from '../../static-files/icons/icon_vector.svg'

export const ChoiceTrainMenu = () => {

    const onClickHendler = (e: any) => {
        e.target.classList.add('active_item')
    }

    return (
        <ul className='choiceTrain_menu_list'>
            <li className='choiceTrain_menu_item' onClick={onClickHendler}>
                <div className='item_number'>1</div>
                <h3 className='item_title'>Билеты</h3>
                <svg width="38" height="99" viewBox="0 0 38 99" fill="none" xmlns={icon_vector}>
                    <path d="M1 1L36.6208 48.1734C37.4353 49.2521 37.4279 50.7422 36.6027 51.8128L1 98" stroke="#E5E5E5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </li>
            <li className='choiceTrain_menu_item' onClick={onClickHendler}>
                <div className='item_number'>2</div>
                <h3 className='item_title'>Пассажиры</h3>
                <svg width="38" height="99" viewBox="0 0 38 99" fill="none" xmlns={icon_vector}>
                    <path d="M1 1L36.6208 48.1734C37.4353 49.2521 37.4279 50.7422 36.6027 51.8128L1 98" stroke="#E5E5E5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </li>
            <li className='choiceTrain_menu_item' onClick={onClickHendler}>
                <div className='item_number'>3</div>
                <h3 className='item_title'>Оплата</h3>
                <svg width="38" height="99" viewBox="0 0 38 99" fill="none" xmlns={icon_vector}>
                    <path d="M1 1L36.6208 48.1734C37.4353 49.2521 37.4279 50.7422 36.6027 51.8128L1 98" stroke="#E5E5E5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </li>
            <li className='choiceTrain_menu_item' onClick={onClickHendler}>
                <div className='item_number'>4</div>
                <h3 className='item_title'>Проверка</h3>
                <svg width="38" height="99" viewBox="0 0 38 99" fill="none" xmlns={icon_vector}>
                    <path d="M1 1L36.6208 48.1734C37.4353 49.2521 37.4279 50.7422 36.6027 51.8128L1 98" stroke="#E5E5E5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </li>
        </ul>
    )
}
