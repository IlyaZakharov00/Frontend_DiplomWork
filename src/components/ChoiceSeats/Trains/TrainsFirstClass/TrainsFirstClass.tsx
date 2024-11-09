import { useDispatch, useSelector } from 'react-redux';
import './TrainsFirstClass.css'
import priceForTicketstsSlice from '../../../redux/slices/priceForTickets';
import { memo } from 'react';

export const TrainsFirstClass = memo(() => {

    const searchSeatsState = useSelector((state: any) => state.searchSeatsState);
    const dispatch = useDispatch();

    const arraySeatsSize = 4;
    const arraySeatFourth = [];

    for (let i = 0; i < searchSeatsState.choiceCoach.seats.length; i += arraySeatsSize) {
        arraySeatFourth.push(searchSeatsState.choiceCoach.seats.slice(i, i + arraySeatsSize));
    }

    const choiceSeats = (e: React.MouseEvent<HTMLElement>) => {
        const btn = e.target as HTMLButtonElement;
        const idSeat = Number(btn.getAttribute('id'));
        const price = searchSeatsState.choiceCoach.coach.price as number;

        if (btn.classList.contains('btn-seat-choice')) {
            btn.classList.remove("btn-seat-choice")
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.deleteSeat(price)) : dispatch(priceForTicketstsSlice.actions.deleteSeat(price))
        } else {
            btn.classList.add('btn-seat-choice')
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.addSeat(price)) : dispatch(priceForTicketstsSlice.actions.addSeat(price))
        }
    }

    return (
        <div className='seats-draw col-6 col-md-3 col-lg-12 m-auto mb-5'>
            <div className="btn-seat-container p-0">
                <div className="seat-container flex-lg-row flex-column align-items-center ">
                    {arraySeatFourth.map((coupe: any, indexCoupe: number) =>
                        <div className={`lux lux-${indexCoupe + 1} gap-1`} key={Math.random().toString(36).substring(2)}>
                            {coupe.map((seat: any, indexSeat: number) => {
                                return (
                                    <button className={seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={indexSeat}>{seat.index}</button>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
})