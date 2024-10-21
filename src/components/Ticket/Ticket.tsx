import './Ticket.css'
import icon_train from '../../static-files/icons/icon_train.svg'
import moment from 'moment';

export const Ticket = (props: any) => {
    const { item } = props;

    return (
        <div className="ticket_container">
            <div className="infoTrain">
                <img src={icon_train} alt="img train" />
                <div className="train_number">{item.departure.train.name}</div>
                <div className="train_diraction">
                    <div className="train_direction_from_city">{item.departure.from.city.name}</div>
                    <div className="train_direction_to_city">{item.departure.to.city.name}</div>
                </div>
            </div>
            <div className='infoTicket'>
                <div className="time_to">
                    <div className="time_departure_to">{moment(item.departure.from.datetime).format('dddd, MMMM Do YYYY, HH:mm:ss')}</div>
                    <div className="time_departure_back">{moment(item.departure.to.datetime).format('dddd, MMMM Do YYYY, HH:mm:ss')}</div>
                </div>
                <div className='time_back'>
                    <div className="time_departure_to">{moment(item.departure.from.datetime).format('dddd, MMMM Do YYYY, HH:mm:ss')}</div>
                    <div className="time_departure_back">{moment(item.departure.to.datetime).format('dddd, MMMM Do YYYY, HH:mm:ss')}</div>
                </div>
            </div>
            <div className="infoPrice">
                <div className="seatInfo fourthClass">
                    <div className="seatName">Сидячий</div>
                    <div className="seatCount">4</div>
                    <div className="seatPrice">5000</div>
                </div>
                <div className="seatInfo thirdClass">
                    <div className="seatName">Плацкарт</div>
                    <div className="seatCount">4</div>
                    <div className="seatPrice">5000</div>
                </div>
                <div className="seatInfo secondClasss">
                    <div className="seatName">Купе</div>
                    <div className="seatCount">4</div>
                    <div className="seatPrice">5000</div>
                </div>
                <div className="seatInfo firstClasss">
                    <div className="seatName">Люкс</div>
                    <div className="seatCount">4</div>
                    <div className="seatPrice">5000</div>
                </div>
            </div>
        </div>
    )
}
