import { useDispatch, useSelector } from 'react-redux';
import { memo } from 'react';
import './TrainsFirstClass.css'
import priceForTicketstsSlice from '../../../redux/slices/priceForTickets';

export const TrainsFirstClass = memo(() => {

    const dispatch = useDispatch();
    const searchSeatsState = useSelector((state: any) => state.searchSeatsState);
    const priceForTickets = useSelector((state: any) => state.priceForTickets);
    const choicesSeats = priceForTickets.choiceSeats;

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
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.deleteSeat({ numberSeat: idSeat, price: price })) : dispatch(priceForTicketstsSlice.actions.deleteSeat({ numberSeat: idSeat, price: price }))
        } else {
            idSeat % 2 === 0 ? dispatch(priceForTicketstsSlice.actions.addSeat({ numberSeat: idSeat, price: price })) : dispatch(priceForTicketstsSlice.actions.addSeat({ numberSeat: idSeat, price: price }))
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
                                    <button className={`${choicesSeats.find((i: any) => i.numberSeat === seat.index) ? "btn-seat-choice" : ""} ${seat.available ? 'btn-seat btn-available' : 'btn-seat btn-notAvailable'}`} id={seat.index} onClick={choiceSeats} disabled={!seat.available} key={indexSeat}>{seat.index}</button>
                                )
                            })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
})